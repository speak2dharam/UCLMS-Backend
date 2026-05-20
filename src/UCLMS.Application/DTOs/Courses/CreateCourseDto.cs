namespace UCLMS.Application.DTOs.Courses;

public record CreateCourseDto(
    string Title,
    string? Description,
    string? ThumbnailUrl,
    string? Category,
    string? Tags,
    int PassingScorePercent = 70,
    string? Syllabus = null,
    DateTime? StartDate = null,
    DateTime? EndDate = null
);
