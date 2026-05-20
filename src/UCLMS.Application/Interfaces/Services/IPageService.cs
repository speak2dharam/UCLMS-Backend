using UCLMS.Application.DTOs.Pages;

namespace UCLMS.Application.Interfaces.Services;

public interface IPageService
{
    Task<List<CoursePageSummaryDto>> GetByCourseAsync(int courseId, int requestingUserId, CancellationToken ct = default);
    Task<CoursePageDto> GetByIdAsync(int id, int requestingUserId, CancellationToken ct = default);
    Task<CoursePageDto> CreateAsync(CreateCoursePageDto dto, int createdByUserId, CancellationToken ct = default);
    Task<CoursePageDto> UpdateAsync(int id, UpdateCoursePageDto dto, CancellationToken ct = default);
    Task DeleteAsync(int id, CancellationToken ct = default);

    /// <summary>Publishes or unpublishes a single page.</summary>
    Task<CoursePageDto> SetPublishedAsync(int id, bool isPublished, CancellationToken ct = default);

    /// <summary>Promotes this page to the course front page and switches the course home page to it.</summary>
    Task SetAsFrontPageAsync(int id, CancellationToken ct = default);
}
