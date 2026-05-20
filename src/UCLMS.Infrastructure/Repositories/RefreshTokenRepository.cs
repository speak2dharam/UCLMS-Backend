using Microsoft.EntityFrameworkCore;
using UCLMS.Application.Interfaces.Repositories;
using UCLMS.Domain.Entities;
using UCLMS.Infrastructure.Persistence;

namespace UCLMS.Infrastructure.Repositories;

public class RefreshTokenRepository : BaseRepository<UserRefreshToken>, IRefreshTokenRepository
{
    public RefreshTokenRepository(UCLMSDbContext db) : base(db) { }

    public async Task<UserRefreshToken?> GetActiveTokenAsync(string token, CancellationToken ct = default) =>
        await _db.UserRefreshTokens
            .FirstOrDefaultAsync(t => t.Token == token && t.RevokedAt == null && t.ExpiresAt > DateTime.UtcNow, ct);

    public async Task RevokeAllForUserAsync(int userId, CancellationToken ct = default)
    {
        await _db.UserRefreshTokens
            .Where(t => t.UserId == userId && t.RevokedAt == null)
            .ExecuteUpdateAsync(s => s.SetProperty(t => t.RevokedAt, DateTime.UtcNow), ct);
    }
}
