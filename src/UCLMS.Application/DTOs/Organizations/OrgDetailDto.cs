namespace UCLMS.Application.DTOs.Organizations;

public record OrgDetailDto(int Id, string Name, string? Description, string? LogoUrl, bool IsActive, int UserCount, DateTime CreatedAt);
