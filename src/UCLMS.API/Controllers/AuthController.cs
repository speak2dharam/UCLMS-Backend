using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UCLMS.Application.Common.Exceptions;
using UCLMS.Application.DTOs.Auth;
using UCLMS.Application.Interfaces.Services;
using UCLMS.Shared.Constants;
using UCLMS.Shared.Wrappers;

namespace UCLMS.API.Controllers;

public class AuthController : BaseController
{
    private const string RefreshCookieName = "uclms_refresh";

    private readonly IAuthService _auth;

    public AuthController(IAuthService auth) => _auth = auth;

    [AllowAnonymous]
    [HttpPost("login")]
    public async Task<ApiResponse<LoginResponseDto>> Login([FromBody] LoginRequestDto dto, CancellationToken ct)
    {
        var result = await _auth.LoginAsync(dto, ct);
        SetRefreshTokenCookie(result.RefreshToken);
        // Strip the refresh token from the response body — it lives in the HttpOnly cookie.
        return ApiResponse<LoginResponseDto>.Ok(result with { RefreshToken = string.Empty });
    }

    [AllowAnonymous]
    [HttpPost("setup-password")]
    public async Task<ApiResponse> SetupPassword([FromBody] SetupPasswordRequestDto dto, CancellationToken ct)
    {
        await _auth.SetupPasswordAsync(dto, ct);
        return ApiResponse.OkNoData("Password set successfully. You can now log in.");
    }

    [AllowAnonymous]
    [HttpPost("refresh")]
    public async Task<ApiResponse<LoginResponseDto>> Refresh(CancellationToken ct)
    {
        var refreshToken = Request.Cookies[RefreshCookieName];
        if (string.IsNullOrEmpty(refreshToken))
            throw new ValidationException("No refresh token present. Please sign in.");

        var result = await _auth.RefreshTokenAsync(refreshToken, ct);
        SetRefreshTokenCookie(result.RefreshToken);
        return ApiResponse<LoginResponseDto>.Ok(result with { RefreshToken = string.Empty });
    }

    [AllowAnonymous]
    [HttpPost("revoke")]
    public async Task<ApiResponse> Revoke(CancellationToken ct)
    {
        var refreshToken = Request.Cookies[RefreshCookieName];
        if (!string.IsNullOrEmpty(refreshToken))
            await _auth.RevokeRefreshTokenAsync(refreshToken, ct);

        ClearRefreshTokenCookie();
        return ApiResponse.OkNoData();
    }

    private void SetRefreshTokenCookie(string refreshToken)
    {
        Response.Cookies.Append(RefreshCookieName, refreshToken, BuildCookieOptions(
            DateTime.UtcNow.AddDays(AppConstants.Jwt.RefreshTokenExpiryDays)));
    }

    private void ClearRefreshTokenCookie()
    {
        // Browsers delete cookies by issuing an identical cookie with an expired date.
        // All attributes (Path, SameSite, Secure) must match the original for the delete to apply.
        Response.Cookies.Delete(RefreshCookieName, BuildCookieOptions(DateTime.UtcNow.AddDays(-1)));
    }

    private static CookieOptions BuildCookieOptions(DateTime expires) => new()
    {
        HttpOnly = true,               // JS can't read it → safe from XSS
        Secure = true,                 // only sent over HTTPS
        SameSite = SameSiteMode.None,  // cross-origin (frontend localhost:4200 → backend localhost:7191)
        Path = "/api/auth",            // only sent to auth endpoints, not every API call
        Expires = expires
    };
}
