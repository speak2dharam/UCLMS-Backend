using UCLMS.Domain.Common;

namespace UCLMS.Domain.Entities;

public class UserRefreshToken : BaseEntity
{
    public int UserId { get; set; }
    public string Token { get; set; } = string.Empty;
    public DateTime ExpiresAt { get; set; }
    public DateTime? RevokedAt { get; set; }

    public bool IsActive => RevokedAt is null && DateTime.UtcNow < ExpiresAt;

    public User User { get; set; } = null!;
}
