namespace UCLMS.Application.DTOs.Pages;

/// <summary>Lightweight page entry used in the Pages list and module-item pickers.</summary>
public record CoursePageSummaryDto(
    int Id,
    string Title,
    string ContentType,
    int? DurationMinutes,
    bool IsPublished,
    bool IsFrontPage,
    int OrderIndex
);
