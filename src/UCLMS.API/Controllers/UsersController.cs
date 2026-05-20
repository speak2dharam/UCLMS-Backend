using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UCLMS.Application.DTOs.Users;
using UCLMS.Application.Interfaces.Services;
using UCLMS.Shared.Constants;
using UCLMS.Shared.Wrappers;

namespace UCLMS.API.Controllers;

public class UsersController : BaseController
{
    private readonly IUserService _users;

    public UsersController(IUserService users) => _users = users;

    // Instructors need to list users to enroll them in their courses; admin-only management
    // remains gated on the mutation endpoints below.
    [HttpGet]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse<PagedResult<UserListDto>>> GetAll([FromQuery] UserFilterDto filter, CancellationToken ct)
        => ApiResponse<PagedResult<UserListDto>>.Ok(await _users.GetAllAsync(filter, ct));

    [HttpGet("{id}")]
    [Authorize(Roles = AppConstants.Roles.PlatformAdmin)]
    public async Task<ApiResponse<UserDetailDto>> GetById(int id, CancellationToken ct)
        => ApiResponse<UserDetailDto>.Ok(await _users.GetByIdAsync(id, ct));

    [HttpPost]
    [Authorize(Roles = AppConstants.Roles.PlatformAdmin)]
    public async Task<ApiResponse<UserDetailDto>> Create([FromBody] CreateUserDto dto, CancellationToken ct)
        => ApiResponse<UserDetailDto>.Ok(await _users.CreateAsync(dto, ct), "User created and invitation sent.");

    [HttpPut("{id}")]
    [Authorize(Roles = AppConstants.Roles.PlatformAdmin)]
    public async Task<ApiResponse<UserDetailDto>> Update(int id, [FromBody] UpdateUserDto dto, CancellationToken ct)
        => ApiResponse<UserDetailDto>.Ok(await _users.UpdateAsync(id, dto, ct));

    [HttpPatch("{id}/deactivate")]
    [Authorize(Roles = AppConstants.Roles.PlatformAdmin)]
    public async Task<ApiResponse> Deactivate(int id, CancellationToken ct)
    {
        await _users.DeactivateAsync(id, ct);
        return ApiResponse.OkNoData("User deactivated.");
    }

    [HttpPost("{id}/resend-invitation")]
    [Authorize(Roles = AppConstants.Roles.PlatformAdmin)]
    public async Task<ApiResponse> ResendInvitation(int id, CancellationToken ct)
    {
        await _users.ResendInvitationAsync(id, ct);
        return ApiResponse.OkNoData("Invitation resent.");
    }

    [HttpPatch("{id}/observer-scope")]
    [Authorize(Roles = AppConstants.Roles.PlatformAdmin)]
    public async Task<ApiResponse> UpdateObserverScope(int id, [FromBody] UpdateObserverScopeDto dto, CancellationToken ct)
    {
        await _users.UpdateObserverScopeAsync(id, dto, ct);
        return ApiResponse.OkNoData("Observer scope updated.");
    }
}
