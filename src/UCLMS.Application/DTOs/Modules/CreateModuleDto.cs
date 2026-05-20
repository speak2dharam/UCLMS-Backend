namespace UCLMS.Application.DTOs.Modules;

public record CreateModuleDto(int CourseId, string Title, string? Description, int OrderIndex);
