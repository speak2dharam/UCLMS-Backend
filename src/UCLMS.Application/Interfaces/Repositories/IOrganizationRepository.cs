using UCLMS.Domain.Entities;

namespace UCLMS.Application.Interfaces.Repositories;

public interface IOrganizationRepository : IBaseRepository<Organization>
{
    Task<IEnumerable<(Organization Org, int UserCount)>> GetAllWithUserCountsAsync(CancellationToken ct = default);
    Task<IEnumerable<Organization>> GetObserverOrgsAsync(int observerUserId, CancellationToken ct = default);
}
