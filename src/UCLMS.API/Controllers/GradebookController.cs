using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UCLMS.Application.DTOs.Gradebook;
using UCLMS.Application.Interfaces.Services;
using UCLMS.Shared.Constants;
using UCLMS.Shared.Wrappers;

namespace UCLMS.API.Controllers;

public class GradebookController : BaseController
{
    private readonly IGradebookService _gradebook;

    public GradebookController(IGradebookService gradebook) => _gradebook = gradebook;

    [HttpGet("course/{courseId}")]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse<CourseGradebookDto>> GetCourseGradebook(int courseId, CancellationToken ct)
        => ApiResponse<CourseGradebookDto>.Ok(await _gradebook.GetCourseGradebookAsync(courseId, ct));

    [HttpGet("course/{courseId}/learner/{userId}")]
    public async Task<ApiResponse<LearnerGradesDto>> GetLearnerGrades(int courseId, int userId, CancellationToken ct)
        => ApiResponse<LearnerGradesDto>.Ok(await _gradebook.GetLearnerGradesAsync(courseId, userId, ct));

    [HttpGet("course/{courseId}/org/{orgId}")]
    [Authorize(Roles = AppConstants.Roles.AdminOrObserver)]
    public async Task<ApiResponse<OrgGradebookDto>> GetOrgGradebook(int courseId, int orgId, CancellationToken ct)
        => ApiResponse<OrgGradebookDto>.Ok(await _gradebook.GetOrgGradebookAsync(courseId, orgId, ct));
}
