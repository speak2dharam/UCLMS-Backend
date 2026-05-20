using UCLMS.Domain.Entities;
using UCLMS.Domain.Enums;

namespace UCLMS.Application.Interfaces.Repositories;

public interface ICourseRepository : IBaseRepository<Course>
{
    Task<Course?> GetWithModulesAsync(int courseId, CancellationToken ct = default);
    Task<IEnumerable<Course>> GetByStatusAsync(CourseStatus status, CancellationToken ct = default);
    Task<IEnumerable<Course>> GetEnrolledCoursesAsync(int userId, CancellationToken ct = default);
    Task<IEnumerable<Course>> GetByOrganizationEnrollmentAsync(int organizationId, CancellationToken ct = default);
    Task<bool> IsEnrolledAsync(int courseId, int userId, CancellationToken ct = default);
    Task AddEnrollmentAsync(CourseEnrollment enrollment, CancellationToken ct = default);
    Task RemoveEnrollmentAsync(int courseId, int userId, CancellationToken ct = default);
    Task<CourseEnrollment?> GetEnrollmentAsync(int courseId, int userId, CancellationToken ct = default);
    Task<IEnumerable<CourseEnrollment>> GetEnrollmentsForCourseAsync(int courseId, CancellationToken ct = default);
}
