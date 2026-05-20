using UCLMS.Domain.Enums;

namespace UCLMS.Application.DTOs.Users;

public record UpdateUserDto(
    string FirstName,
    string LastName,
    UserRole Role,
    int? OrganizationId,
    bool IsActive
);
