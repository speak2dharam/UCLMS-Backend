using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UCLMS.Application.DTOs.Reports;
using UCLMS.Application.Interfaces.Services;
using UCLMS.Shared.Constants;
using UCLMS.Shared.Wrappers;

namespace UCLMS.API.Controllers;

public class ReportsController : BaseController
{
    private readonly IReportService _reports;

    public ReportsController(IReportService reports) => _reports = reports;

    [HttpGet("platform")]
    [Authorize(Roles = AppConstants.Roles.PlatformAdmin)]
    public async Task<ApiResponse<PlatformSummaryDto>> PlatformSummary(CancellationToken ct)
        => ApiResponse<PlatformSummaryDto>.Ok(await _reports.GetPlatformSummaryAsync(ct));

    [HttpGet("org/{orgId}")]
    [Authorize(Roles = AppConstants.Roles.AdminOrObserver)]
    public async Task<ApiResponse<OrgReportDto>> OrgReport(int orgId, CancellationToken ct)
        => ApiResponse<OrgReportDto>.Ok(await _reports.GetOrgReportAsync(orgId, ct));

    [HttpGet("course/{courseId}")]
    [Authorize(Roles = AppConstants.Roles.AdminOrObserver)]
    public async Task<ApiResponse<CourseReportDto>> CourseReport(int courseId, [FromQuery] int? orgId, CancellationToken ct)
        => ApiResponse<CourseReportDto>.Ok(await _reports.GetCourseReportAsync(courseId, orgId, ct));

    [HttpGet("user/{userId}")]
    [Authorize(Roles = AppConstants.Roles.AdminOrObserver)]
    public async Task<ApiResponse<UserProgressReportDto>> UserProgress(int userId, CancellationToken ct)
        => ApiResponse<UserProgressReportDto>.Ok(await _reports.GetUserProgressReportAsync(userId, ct));

    // Any authenticated user can fetch their own progress (for dashboards).
    [HttpGet("me")]
    public async Task<ApiResponse<UserProgressReportDto>> MyProgress(CancellationToken ct)
        => ApiResponse<UserProgressReportDto>.Ok(await _reports.GetUserProgressReportAsync(CurrentUserId, ct));
}
