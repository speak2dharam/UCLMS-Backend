using UCLMS.Application.DTOs.Modules;
using UCLMS.Application.DTOs.Pages;

namespace UCLMS.Application.DTOs.Courses;

public record CourseDetailDto(
    int Id,
    string Title,
    string? Description,
    string? ThumbnailUrl,
    string? Category,
    string? Tags,
    string Status,
    int PassingScorePercent,
    string? Syllabus,
    string HomePage,
    int? FrontPageId,
    DateTime? StartDate,
    DateTime? EndDate,
    List<ModuleSummaryDto> Modules,
    List<CoursePageSummaryDto> Pages,
    string CreatedBy,
    DateTime CreatedAt,
    DateTime UpdatedAt
);
