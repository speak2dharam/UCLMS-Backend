using UCLMS.Application.DTOs.Reports;

namespace UCLMS.Application.Interfaces.Services;

public interface IReportService
{
    Task<OrgReportDto> GetOrgReportAsync(int organizationId, CancellationToken ct = default);
    Task<CourseReportDto> GetCourseReportAsync(int courseId, int? organizationId, CancellationToken ct = default);
    Task<UserProgressReportDto> GetUserProgressReportAsync(int userId, CancellationToken ct = default);
    Task<PlatformSummaryDto> GetPlatformSummaryAsync(CancellationToken ct = default);
}
