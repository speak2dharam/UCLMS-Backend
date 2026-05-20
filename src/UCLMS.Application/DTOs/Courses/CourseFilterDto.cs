using UCLMS.Domain.Enums;

namespace UCLMS.Application.DTOs.Courses;

public record CourseFilterDto(
    string? Search = null,
    CourseStatus? Status = null,
    string? Category = null,
    int Page = 1,
    int PageSize = 20
);
