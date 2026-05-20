namespace UCLMS.Application.DTOs.Pages;

public record CreateCoursePageDto(
    int CourseId,
    string Title,
    string ContentType = "Article",
    string? Body = null,
    string? VideoUrl = null,
    string? FileUrl = null,
    int? DurationMinutes = null,
    bool IsPublished = false
);
