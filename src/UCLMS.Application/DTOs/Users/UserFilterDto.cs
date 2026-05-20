using UCLMS.Domain.Enums;

namespace UCLMS.Application.DTOs.Users;

public record UserFilterDto(
    string? Search = null,
    UserRole? Role = null,
    int? OrganizationId = null,
    bool? IsActive = null,
    int Page = 1,
    int PageSize = 20
);
