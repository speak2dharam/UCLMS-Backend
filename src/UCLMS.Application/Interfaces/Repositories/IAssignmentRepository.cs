using UCLMS.Domain.Entities;

namespace UCLMS.Application.Interfaces.Repositories;

public interface IAssignmentRepository : IBaseRepository<Assignment>
{
    Task<AssignmentSubmission?> GetSubmissionAsync(int assignmentId, int userId, CancellationToken ct = default);
    Task<AssignmentSubmission?> GetSubmissionByIdAsync(int submissionId, CancellationToken ct = default);
    Task<IEnumerable<AssignmentSubmission>> GetPendingGradingAsync(int instructorUserId, CancellationToken ct = default);
    Task AddSubmissionAsync(AssignmentSubmission submission, CancellationToken ct = default);
    Task UpdateSubmissionAsync(AssignmentSubmission submission, CancellationToken ct = default);
    Task SaveAsync(CancellationToken ct = default);
    Task<IEnumerable<Assignment>> GetByCourseAsync(int courseId, CancellationToken ct = default);
    Task<IEnumerable<AssignmentSubmission>> GetSubmissionsForCourseAsync(int courseId, CancellationToken ct = default);
}
