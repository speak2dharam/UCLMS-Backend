namespace UCLMS.Application.DTOs.Organizations;

public record OrgListDto(int Id, string Name, string? LogoUrl, int UserCount, bool IsActive);
