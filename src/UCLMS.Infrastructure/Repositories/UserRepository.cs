using Microsoft.EntityFrameworkCore;
using UCLMS.Application.Interfaces.Repositories;
using UCLMS.Domain.Entities;
using UCLMS.Infrastructure.Persistence;

namespace UCLMS.Infrastructure.Repositories;

public class UserRepository : BaseRepository<User>, IUserRepository
{
    public UserRepository(UCLMSDbContext db) : base(db) { }

    public override async Task<IEnumerable<User>> GetAllAsync(CancellationToken ct = default) =>
        await _db.Users.Include(u => u.Organization).ToListAsync(ct);

    public async Task<User?> GetByEmailAsync(string email, CancellationToken ct = default) =>
        await _db.Users.Include(u => u.Organization)
            .Include(u => u.ObserverOrgAssignments)
            .FirstOrDefaultAsync(u => u.Email == email.ToLower(), ct);

    public async Task<User?> GetByInvitationTokenAsync(string token, CancellationToken ct = default) =>
        await _db.Users.FirstOrDefaultAsync(u => u.InvitationToken == token, ct);

    public async Task<IEnumerable<User>> GetByOrganizationAsync(int organizationId, CancellationToken ct = default) =>
        await _db.Users.Where(u => u.OrganizationId == organizationId).ToListAsync(ct);

    public async Task<IEnumerable<User>> GetObserversByOrganizationAsync(int organizationId, CancellationToken ct = default) =>
        await _db.Users
            .Where(u => u.ObserverOrgAssignments.Any(o => o.OrganizationId == organizationId)
                     || u.ObservesAllOrganizations)
            .ToListAsync(ct);
}
