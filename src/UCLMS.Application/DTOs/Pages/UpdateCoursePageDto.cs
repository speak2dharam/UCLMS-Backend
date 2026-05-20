namespace UCLMS.Application.DTOs.Pages;

public record UpdateCoursePageDto(
    string Title,
    string ContentType,
    string? Body,
    string? VideoUrl,
    string? FileUrl,
    int? DurationMinutes,
    bool IsPublished
);
