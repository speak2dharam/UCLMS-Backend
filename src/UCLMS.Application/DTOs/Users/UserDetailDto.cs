namespace UCLMS.Application.DTOs.Users;

public record UserDetailDto(
    int Id,
    string FirstName,
    string LastName,
    string Email,
    string Role,
    int? OrganizationId,
    string? OrganizationName,
    bool ObservesAllOrganizations,
    List<int> ObserverOrgIds,
    bool IsActive,
    string? AvatarUrl,
    DateTime? LastLoginAt,
    DateTime CreatedAt
);
