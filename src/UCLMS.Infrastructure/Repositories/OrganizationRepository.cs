using Microsoft.EntityFrameworkCore;
using UCLMS.Application.Interfaces.Repositories;
using UCLMS.Domain.Entities;
using UCLMS.Infrastructure.Persistence;

namespace UCLMS.Infrastructure.Repositories;

public class OrganizationRepository : BaseRepository<Organization>, IOrganizationRepository
{
    public OrganizationRepository(UCLMSDbContext db) : base(db) { }

    public async Task<IEnumerable<(Organization Org, int UserCount)>> GetAllWithUserCountsAsync(CancellationToken ct = default)
    {
        var rows = await _db.Organizations
            .Select(o => new { Org = o, UserCount = o.Users.Count() })
            .ToListAsync(ct);

        return rows.Select(x => (x.Org, x.UserCount));
    }

    public async Task<IEnumerable<Organization>> GetObserverOrgsAsync(int observerUserId, CancellationToken ct = default)
    {
        var observer = await _db.Users
            .Include(u => u.ObserverOrgAssignments)
            .FirstOrDefaultAsync(u => u.Id == observerUserId, ct);

        if (observer is null) return [];
        if (observer.ObservesAllOrganizations)
            return await _db.Organizations.ToListAsync(ct);

        var orgIds = observer.ObserverOrgAssignments.Select(o => o.OrganizationId);
        return await _db.Organizations.Where(o => orgIds.Contains(o.Id)).ToListAsync(ct);
    }
}
