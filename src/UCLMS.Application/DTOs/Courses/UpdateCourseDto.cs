namespace UCLMS.Application.DTOs.Courses;

public record UpdateCourseDto(
    string Title,
    string? Description,
    string? ThumbnailUrl,
    string? Category,
    string? Tags,
    int PassingScorePercent,
    string? Syllabus = null,
    DateTime? StartDate = null,
    DateTime? EndDate = null
);
