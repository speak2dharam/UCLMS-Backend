using Microsoft.Extensions.Configuration;
using UCLMS.Application.Common.Exceptions;
using UCLMS.Application.DTOs.Users;
using UCLMS.Application.Interfaces.Repositories;
using UCLMS.Application.Interfaces.Services;
using UCLMS.Domain.Entities;
using UCLMS.Domain.Enums;
using UCLMS.Shared.Constants;
using UCLMS.Shared.Helpers;
using UCLMS.Shared.Wrappers;

namespace UCLMS.Application.Services;

public class UserService : IUserService
{
    private readonly IUserRepository _users;
    private readonly IOrganizationRepository _orgs;
    private readonly IRefreshTokenRepository _tokens;
    private readonly IEmailService _email;
    private readonly string _frontendBaseUrl;

    public UserService(
        IUserRepository users,
        IOrganizationRepository orgs,
        IRefreshTokenRepository tokens,
        IEmailService email,
        IConfiguration config)
    {
        _users = users;
        _orgs = orgs;
        _tokens = tokens;
        _email = email;
        _frontendBaseUrl = config["App:FrontendBaseUrl"] ?? "http://localhost:4200";
    }

    public async Task<PagedResult<UserListDto>> GetAllAsync(UserFilterDto filter, CancellationToken ct = default)
    {
        var all = await _users.GetAllAsync(ct);

        var query = all.AsQueryable();

        if (!string.IsNullOrWhiteSpace(filter.Search))
        {
            var s = filter.Search.ToLower();
            query = query.Where(u =>
                u.FirstName.ToLower().Contains(s) ||
                u.LastName.ToLower().Contains(s) ||
                u.Email.ToLower().Contains(s));
        }

        if (filter.Role.HasValue)
            query = query.Where(u => u.Role == filter.Role.Value);

        if (filter.OrganizationId.HasValue)
            query = query.Where(u => u.OrganizationId == filter.OrganizationId.Value);

        if (filter.IsActive.HasValue)
            query = query.Where(u => u.IsActive == filter.IsActive.Value);

        var total = query.Count();
        var items = query
            .Skip((filter.Page - 1) * filter.PageSize)
            .Take(filter.PageSize)
            .ToList();

        return new PagedResult<UserListDto>
        {
            Items = items.Select(u => new UserListDto(
                u.Id, u.FullName, u.Email, u.Role.ToString(),
                u.Organization?.Name, u.IsActive, u.InvitationAcceptedAt)).ToList(),
            TotalCount = total,
            Page = filter.Page,
            PageSize = filter.PageSize
        };
    }

    public async Task<UserDetailDto> GetByIdAsync(int id, CancellationToken ct = default)
    {
        var user = await GetUserWithDetailsAsync(id, ct);
        return MapToDetail(user);
    }

    public async Task<UserDetailDto> CreateAsync(CreateUserDto dto, CancellationToken ct = default)
    {
        if (await _users.ExistsAsync(u => u.Email == dto.Email.ToLower(), ct))
            throw new ValidationException($"A user with email '{dto.Email}' already exists.");

        if (dto.OrganizationId.HasValue &&
            !await _orgs.ExistsAsync(o => o.Id == dto.OrganizationId.Value, ct))
            throw new NotFoundException("Organization", dto.OrganizationId.Value);

        var token = TokenHelper.GenerateSecureToken();

        var user = new User
        {
            FirstName = dto.FirstName,
            LastName = dto.LastName,
            Email = dto.Email.ToLower(),
            Role = dto.Role,
            OrganizationId = dto.OrganizationId,
            ObservesAllOrganizations = dto.Role == UserRole.Observer && dto.ObservesAllOrganizations,
            IsActive = true,
            InvitationToken = token,
            InvitationSentAt = DateTime.UtcNow
        };

        await _users.AddAsync(user, ct);
        await _users.SaveChangesAsync(ct);

        if (dto.Role == UserRole.Observer && !dto.ObservesAllOrganizations && dto.ObserverOrgIds?.Any() == true)
        {
            foreach (var orgId in dto.ObserverOrgIds.Distinct())
            {
                if (await _orgs.ExistsAsync(o => o.Id == orgId, ct))
                {
                    user.ObserverOrgAssignments.Add(new ObserverOrgAssignment
                    {
                        ObserverUserId = user.Id,
                        OrganizationId = orgId,
                        AssignedAt = DateTime.UtcNow
                    });
                }
            }
            await _users.SaveChangesAsync(ct);
        }

        var setupLink = $"{_frontendBaseUrl}/auth/setup-password?token={token}";
        await _email.SendInvitationAsync(user.Email, user.FullName, setupLink, ct);

        return await GetByIdAsync(user.Id, ct);
    }

    public async Task<UserDetailDto> UpdateAsync(int id, UpdateUserDto dto, CancellationToken ct = default)
    {
        var user = await GetUserWithDetailsAsync(id, ct);

        if (dto.OrganizationId.HasValue &&
            !await _orgs.ExistsAsync(o => o.Id == dto.OrganizationId.Value, ct))
            throw new NotFoundException("Organization", dto.OrganizationId.Value);

        user.FirstName = dto.FirstName;
        user.LastName = dto.LastName;
        user.Role = dto.Role;
        user.OrganizationId = dto.OrganizationId;
        user.IsActive = dto.IsActive;

        await _users.UpdateAsync(user, ct);
        await _users.SaveChangesAsync(ct);

        return MapToDetail(user);
    }

    public async Task DeactivateAsync(int id, CancellationToken ct = default)
    {
        var user = await GetUserWithDetailsAsync(id, ct);

        user.IsActive = false;
        await _users.UpdateAsync(user, ct);
        await _tokens.RevokeAllForUserAsync(id, ct);
        await _users.SaveChangesAsync(ct);
    }

    public async Task ResendInvitationAsync(int id, CancellationToken ct = default)
    {
        var user = await GetUserWithDetailsAsync(id, ct);

        if (user.InvitationAcceptedAt.HasValue)
            throw new ValidationException("User has already accepted their invitation.");

        var token = TokenHelper.GenerateSecureToken();
        user.InvitationToken = token;
        user.InvitationSentAt = DateTime.UtcNow;

        await _users.UpdateAsync(user, ct);
        await _users.SaveChangesAsync(ct);

        var setupLink = $"{_frontendBaseUrl}/auth/setup-password?token={token}";
        await _email.SendInvitationAsync(user.Email, user.FullName, setupLink, ct);
    }

    public async Task UpdateObserverScopeAsync(int id, UpdateObserverScopeDto dto, CancellationToken ct = default)
    {
        var user = await GetUserWithDetailsAsync(id, ct);

        if (user.Role != UserRole.Observer)
            throw new ValidationException("Observer scope can only be set on Observer-role users.");

        user.ObservesAllOrganizations = dto.ObservesAllOrganizations;

        user.ObserverOrgAssignments.Clear();

        if (!dto.ObservesAllOrganizations)
        {
            foreach (var orgId in dto.OrgIds.Distinct())
            {
                if (await _orgs.ExistsAsync(o => o.Id == orgId, ct))
                {
                    user.ObserverOrgAssignments.Add(new ObserverOrgAssignment
                    {
                        ObserverUserId = user.Id,
                        OrganizationId = orgId,
                        AssignedAt = DateTime.UtcNow
                    });
                }
            }
        }

        await _users.UpdateAsync(user, ct);
        await _users.SaveChangesAsync(ct);
    }

    private async Task<User> GetUserWithDetailsAsync(int id, CancellationToken ct)
    {
        var users = await _users.FindAsync(u => u.Id == id, ct);
        return users.FirstOrDefault()
            ?? throw new NotFoundException("User", id);
    }

    private UserDetailDto MapToDetail(User user) => new(
        user.Id,
        user.FirstName,
        user.LastName,
        user.Email,
        user.Role.ToString(),
        user.OrganizationId,
        user.Organization?.Name,
        user.ObservesAllOrganizations,
        user.ObserverOrgAssignments.Select(o => o.OrganizationId).ToList(),
        user.IsActive,
        user.AvatarUrl,
        user.LastLoginAt,
        user.CreatedAt
    );
}
