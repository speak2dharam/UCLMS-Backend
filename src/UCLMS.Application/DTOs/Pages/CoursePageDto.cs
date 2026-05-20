namespace UCLMS.Application.DTOs.Pages;

/// <summary>Full content page payload (editor + reader view).</summary>
public record CoursePageDto(
    int Id,
    int CourseId,
    string Title,
    string ContentType,
    string? Body,
    string? VideoUrl,
    string? FileUrl,
    int? DurationMinutes,
    bool IsPublished,
    bool IsFrontPage,
    int OrderIndex,
    string CreatedBy,
    DateTime CreatedAt,
    DateTime UpdatedAt
);
