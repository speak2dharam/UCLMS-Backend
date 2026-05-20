namespace UCLMS.Application.DTOs.Courses;

public record CourseListDto(
    int Id,
    string Title,
    string? ThumbnailUrl,
    string? Category,
    string Status,
    int PassingScorePercent,
    int ModuleCount,
    DateTime? StartDate,
    DateTime? EndDate,
    string CreatedBy,
    DateTime CreatedAt
);
