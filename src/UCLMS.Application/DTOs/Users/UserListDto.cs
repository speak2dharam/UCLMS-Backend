namespace UCLMS.Application.DTOs.Users;

public record UserListDto(
    int Id,
    string FullName,
    string Email,
    string Role,
    string? OrganizationName,
    bool IsActive,
    DateTime? InvitationAcceptedAt
);
