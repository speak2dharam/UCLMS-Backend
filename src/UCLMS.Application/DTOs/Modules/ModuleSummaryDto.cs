using UCLMS.Application.DTOs.ModuleItems;

namespace UCLMS.Application.DTOs.Modules;

public record ModuleSummaryDto(
    int Id,
    string Title,
    string? Description,
    int OrderIndex,
    bool IsPublished,
    List<ModuleItemDto> Items
);
