using UCLMS.Application.DTOs.Courses;
using UCLMS.Shared.Wrappers;

namespace UCLMS.Application.Interfaces.Services;

public interface ICourseService
{
    Task<PagedResult<CourseListDto>> GetAllAsync(CourseFilterDto filter, int currentUserId, CancellationToken ct = default);
    Task<CourseDetailDto> GetByIdAsync(int id, int requestingUserId, CancellationToken ct = default);
    Task<CourseDetailDto> CreateAsync(CreateCourseDto dto, int createdByUserId, CancellationToken ct = default);
    Task<CourseDetailDto> UpdateAsync(int id, UpdateCourseDto dto, CancellationToken ct = default);
    Task PublishAsync(int id, CancellationToken ct = default);
    Task UnpublishAsync(int id, CancellationToken ct = default);
    Task ArchiveAsync(int id, CancellationToken ct = default);

    /// <summary>Sets which view learners land on: Modules or Syllabus. The FrontPage option
    /// is set via <see cref="IPageService.SetAsFrontPageAsync"/>.</summary>
    Task<CourseDetailDto> SetHomePageAsync(int courseId, string homePage, int requestingUserId, CancellationToken ct = default);

    /// <summary>All direct user enrollments for a course (admin/instructor view).</summary>
    Task<List<CourseEnrollmentDto>> GetEnrollmentsAsync(int courseId, CancellationToken ct = default);

    /// <summary>Enrolls multiple users in one call; users already enrolled are silently skipped.</summary>
    Task<int> EnrollUsersAsync(int courseId, IEnumerable<int> userIds, int enrolledByUserId, CancellationToken ct = default);

    /// <summary>All courses the given user is directly enrolled in (for the user-side enrollment manager).</summary>
    Task<List<CourseListDto>> GetEnrolledCoursesForUserAsync(int userId, CancellationToken ct = default);
    Task DeleteAsync(int id, CancellationToken ct = default);
    Task EnrollUserAsync(int courseId, int userId, int enrolledByUserId, CancellationToken ct = default);
    Task UnenrollUserAsync(int courseId, int userId, CancellationToken ct = default);
}
