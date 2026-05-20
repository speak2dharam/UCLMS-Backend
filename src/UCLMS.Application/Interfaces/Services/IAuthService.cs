using UCLMS.Application.DTOs.Auth;

namespace UCLMS.Application.Interfaces.Services;

public interface IAuthService
{
    Task<LoginResponseDto> LoginAsync(LoginRequestDto request, CancellationToken ct = default);
    Task<LoginResponseDto> RefreshTokenAsync(string refreshToken, CancellationToken ct = default);
    Task SetupPasswordAsync(SetupPasswordRequestDto request, CancellationToken ct = default);
    Task RevokeRefreshTokenAsync(string refreshToken, CancellationToken ct = default);
}
