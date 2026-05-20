namespace UCLMS.Application.DTOs.Auth;

public record SetupPasswordRequestDto(string Token, string NewPassword, string ConfirmPassword);
