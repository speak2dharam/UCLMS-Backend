namespace UCLMS.Application.DTOs.Organizations;

public record UpdateOrgDto(string Name, string? Description, string? LogoUrl, bool IsActive);
