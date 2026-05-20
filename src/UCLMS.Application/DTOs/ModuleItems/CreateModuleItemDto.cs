namespace UCLMS.Application.DTOs.ModuleItems;

public record CreateModuleItemDto(
    int ModuleId,
    string ItemType,       // "Page" | "Quiz" | "Assignment" | "SubHeader"
    int? PageId = null,
    int? QuizId = null,
    int? AssignmentId = null,
    string? Title = null,   // required for SubHeader; optional override otherwise
    bool IsRequired = true,
    bool IsPublished = false
);
