using UCLMS.Application.DTOs.Gradebook;

namespace UCLMS.Application.Interfaces.Services;

public interface IGradebookService
{
    Task<CourseGradebookDto> GetCourseGradebookAsync(int courseId, CancellationToken ct = default);
    Task<LearnerGradesDto> GetLearnerGradesAsync(int courseId, int userId, CancellationToken ct = default);
    Task<OrgGradebookDto> GetOrgGradebookAsync(int courseId, int organizationId, CancellationToken ct = default);
}
