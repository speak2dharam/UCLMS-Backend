using UCLMS.Domain.Enums;

namespace UCLMS.Application.DTOs.Users;

public record CreateUserDto(
    string FirstName,
    string LastName,
    string Email,
    UserRole Role,
    int? OrganizationId,
    bool ObservesAllOrganizations = false,
    List<int>? ObserverOrgIds = null
);
