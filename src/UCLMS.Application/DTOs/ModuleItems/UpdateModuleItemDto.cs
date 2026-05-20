namespace UCLMS.Application.DTOs.ModuleItems;

public record UpdateModuleItemDto(
    string? Title,
    bool IsRequired,
    bool IsPublished
);
