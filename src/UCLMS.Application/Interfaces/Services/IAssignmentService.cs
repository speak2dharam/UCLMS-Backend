using UCLMS.Application.DTOs.Assignments;
using UCLMS.Shared.Wrappers;

namespace UCLMS.Application.Interfaces.Services;

public interface IAssignmentService
{
    Task<IEnumerable<AssignmentDetailDto>> GetByCourseAsync(int courseId, CancellationToken ct = default);
    Task<AssignmentDetailDto> GetByIdAsync(int id, CancellationToken ct = default);
    Task<AssignmentDetailDto> CreateAsync(CreateAssignmentDto dto, CancellationToken ct = default);
    Task<AssignmentDetailDto> UpdateAsync(int id, UpdateAssignmentDto dto, CancellationToken ct = default);
    Task DeleteAsync(int id, CancellationToken ct = default);
    Task<SubmissionDto> SubmitAsync(int assignmentId, SubmitAssignmentDto dto, int userId, CancellationToken ct = default);
    Task<SubmissionDto> GradeAsync(int submissionId, GradeSubmissionDto dto, int gradedByUserId, CancellationToken ct = default);
    Task<PagedResult<SubmissionDto>> GetPendingGradingAsync(int instructorUserId, CancellationToken ct = default);
}
