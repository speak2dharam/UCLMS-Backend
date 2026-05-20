using UCLMS.Domain.Entities;

namespace UCLMS.Application.Interfaces.Services;

public interface IJwtService
{
    string GenerateAccessToken(User user);
    string GenerateRefreshToken();
    DateTime AccessTokenExpiry { get; }
}
