using UCLMS.Domain.Entities;

namespace UCLMS.Application.Interfaces.Repositories;

public interface IUserRepository : IBaseRepository<User>
{
    Task<User?> GetByEmailAsync(string email, CancellationToken ct = default);
    Task<User?> GetByInvitationTokenAsync(string token, CancellationToken ct = default);
    Task<IEnumerable<User>> GetByOrganizationAsync(int organizationId, CancellationToken ct = default);
    Task<IEnumerable<User>> GetObserversByOrganizationAsync(int organizationId, CancellationToken ct = default);
}
