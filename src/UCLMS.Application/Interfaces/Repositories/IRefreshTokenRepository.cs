using UCLMS.Domain.Entities;

namespace UCLMS.Application.Interfaces.Repositories;

public interface IRefreshTokenRepository : IBaseRepository<UserRefreshToken>
{
    Task<UserRefreshToken?> GetActiveTokenAsync(string token, CancellationToken ct = default);
    Task RevokeAllForUserAsync(int userId, CancellationToken ct = default);
}
