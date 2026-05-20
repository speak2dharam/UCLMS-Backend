using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UCLMS.Application.DTOs.Assignments;
using UCLMS.Application.Interfaces.Services;
using UCLMS.Shared.Constants;
using UCLMS.Shared.Wrappers;

namespace UCLMS.API.Controllers;

public class AssignmentsController : BaseController
{
    private readonly IAssignmentService _assignments;

    public AssignmentsController(IAssignmentService assignments) => _assignments = assignments;

    [HttpGet]
    public async Task<ApiResponse<PagedResult<AssignmentDetailDto>>> GetByCourse([FromQuery] int courseId, CancellationToken ct)
    {
        var items = (await _assignments.GetByCourseAsync(courseId, ct)).ToList();
        return ApiResponse<PagedResult<AssignmentDetailDto>>.Ok(new PagedResult<AssignmentDetailDto>
        {
            Items = items,
            TotalCount = items.Count,
            Page = 1,
            PageSize = items.Count > 0 ? items.Count : 1
        });
    }

    [HttpGet("{id}")]
    public async Task<ApiResponse<AssignmentDetailDto>> GetById(int id, CancellationToken ct)
        => ApiResponse<AssignmentDetailDto>.Ok(await _assignments.GetByIdAsync(id, ct));

    [HttpPost]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse<AssignmentDetailDto>> Create([FromBody] CreateAssignmentDto dto, CancellationToken ct)
        => ApiResponse<AssignmentDetailDto>.Ok(await _assignments.CreateAsync(dto, ct));

    [HttpPut("{id}")]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse<AssignmentDetailDto>> Update(int id, [FromBody] UpdateAssignmentDto dto, CancellationToken ct)
        => ApiResponse<AssignmentDetailDto>.Ok(await _assignments.UpdateAsync(id, dto, ct));

    [HttpDelete("{id}")]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse> Delete(int id, CancellationToken ct)
    {
        await _assignments.DeleteAsync(id, ct);
        return ApiResponse.OkNoData("Assignment deleted.");
    }

    [HttpPost("{id}/submit")]
    [Authorize(Roles = AppConstants.Roles.Learner + "," + AppConstants.Roles.Observer)]
    public async Task<ApiResponse<SubmissionDto>> Submit(int id, [FromBody] SubmitAssignmentDto dto, CancellationToken ct)
        => ApiResponse<SubmissionDto>.Ok(await _assignments.SubmitAsync(id, dto, CurrentUserId, ct));

    [HttpPost("submissions/{submissionId}/grade")]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse<SubmissionDto>> Grade(int submissionId, [FromBody] GradeSubmissionDto dto, CancellationToken ct)
        => ApiResponse<SubmissionDto>.Ok(await _assignments.GradeAsync(submissionId, dto, CurrentUserId, ct));

    [HttpGet("pending-grading")]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse<PagedResult<SubmissionDto>>> PendingGrading(CancellationToken ct)
        => ApiResponse<PagedResult<SubmissionDto>>.Ok(await _assignments.GetPendingGradingAsync(CurrentUserId, ct));
}
