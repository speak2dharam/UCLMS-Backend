using UCLMS.Application.Common.Exceptions;
using UCLMS.Application.DTOs.Auth;
using UCLMS.Application.Interfaces.Repositories;
using UCLMS.Application.Interfaces.Services;
using UCLMS.Domain.Entities;
using UCLMS.Shared.Constants;
using UCLMS.Shared.Helpers;

namespace UCLMS.Application.Services;

public class AuthService : IAuthService
{
    private readonly IUserRepository _users;
    private readonly IRefreshTokenRepository _tokens;
    private readonly IJwtService _jwt;
    private readonly IEmailService _email;

    public AuthService(
        IUserRepository users,
        IRefreshTokenRepository tokens,
        IJwtService jwt,
        IEmailService email)
    {
        _users = users;
        _tokens = tokens;
        _jwt = jwt;
        _email = email;
    }

    public async Task<LoginResponseDto> LoginAsync(LoginRequestDto request, CancellationToken ct = default)
    {
        var user = await _users.GetByEmailAsync(request.Email.ToLower(), ct)
            ?? throw new ValidationException("Invalid email or password.");

        if (!user.IsActive)
            throw new ValidationException("This account has been deactivated.");

        if (user.PasswordHash is null || !PasswordHelper.Verify(request.Password, user.PasswordHash))
            throw new ValidationException("Invalid email or password.");

        user.LastLoginAt = DateTime.UtcNow;
        await _users.UpdateAsync(user, ct);
        await _users.SaveChangesAsync(ct);

        return await BuildTokenResponseAsync(user, ct);
    }

    public async Task SetupPasswordAsync(SetupPasswordRequestDto request, CancellationToken ct = default)
    {
        if (request.NewPassword != request.ConfirmPassword)
            throw new ValidationException("Passwords do not match.");

        if (request.NewPassword.Length < 8)
            throw new ValidationException("Password must be at least 8 characters.");

        var user = await _users.GetByInvitationTokenAsync(request.Token, ct)
            ?? throw new ValidationException("Invitation link is invalid or has expired.");

        if (user.InvitationSentAt.HasValue &&
            DateTime.UtcNow > user.InvitationSentAt.Value.AddDays(AppConstants.Invitation.TokenExpiryDays))
            throw new ValidationException("Invitation link has expired. Please contact your administrator.");

        user.PasswordHash = PasswordHelper.Hash(request.NewPassword);
        user.InvitationToken = null;
        user.InvitationAcceptedAt = DateTime.UtcNow;

        await _users.UpdateAsync(user, ct);
        await _users.SaveChangesAsync(ct);
    }

    public async Task<LoginResponseDto> RefreshTokenAsync(string refreshToken, CancellationToken ct = default)
    {
        var stored = await _tokens.GetActiveTokenAsync(refreshToken, ct)
            ?? throw new ValidationException("Refresh token is invalid or expired.");

        var user = await _users.GetByIdAsync(stored.UserId, ct)
            ?? throw new NotFoundException("User", stored.UserId);

        if (!user.IsActive)
            throw new ValidationException("This account has been deactivated.");

        stored.RevokedAt = DateTime.UtcNow;
        await _tokens.UpdateAsync(stored, ct);

        return await BuildTokenResponseAsync(user, ct);
    }

    public async Task RevokeRefreshTokenAsync(string refreshToken, CancellationToken ct = default)
    {
        var stored = await _tokens.GetActiveTokenAsync(refreshToken, ct);
        if (stored is null) return;

        stored.RevokedAt = DateTime.UtcNow;
        await _tokens.UpdateAsync(stored, ct);
        await _tokens.SaveChangesAsync(ct);
    }

    private async Task<LoginResponseDto> BuildTokenResponseAsync(User user, CancellationToken ct)
    {
        var accessToken = _jwt.GenerateAccessToken(user);
        var refreshToken = _jwt.GenerateRefreshToken();
        var expiry = _jwt.AccessTokenExpiry;

        var tokenEntity = new UserRefreshToken
        {
            UserId = user.Id,
            Token = refreshToken,
            ExpiresAt = DateTime.UtcNow.AddDays(AppConstants.Jwt.RefreshTokenExpiryDays)
        };

        await _tokens.AddAsync(tokenEntity, ct);
        await _tokens.SaveChangesAsync(ct);

        return new LoginResponseDto(accessToken, refreshToken, expiry,
            user.Id, user.FullName, user.Email, user.Role.ToString());
    }
}
