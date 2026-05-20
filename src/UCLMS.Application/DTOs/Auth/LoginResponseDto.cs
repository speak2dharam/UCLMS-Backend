namespace UCLMS.Application.DTOs.Auth;

public record LoginResponseDto(
    string AccessToken,
    string RefreshToken,
    DateTime ExpiresAt,
    int UserId,
    string FullName,
    string Email,
    string Role
);
