namespace UCLMS.Application.DTOs.ModuleItems;

/// <summary>
/// A row inside a module as it's rendered to the client. The "Display*" fields hold the bits
/// the UI needs to draw the row without a second round-trip (title, icon hints, due date, etc.).
/// </summary>
public record ModuleItemDto(
    int Id,
    int ModuleId,
    string ItemType,
    int? PageId,
    int? QuizId,
    int? AssignmentId,
    string DisplayTitle,
    string? DisplaySubtitle,
    string? ContentType,           // for Page items — drives icon (Article/Video/File)
    int? DurationMinutes,           // for Page items
    DateTime? DueDate,              // for Assignment items
    decimal? MaxPoints,             // for Quiz/Assignment items
    int OrderIndex,
    bool IsPublished,
    bool IsRequired,
    bool IsCompleted                // per requesting learner; always false for editors
);
