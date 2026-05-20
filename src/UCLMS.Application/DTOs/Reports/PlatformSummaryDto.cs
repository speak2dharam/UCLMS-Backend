namespace UCLMS.Application.DTOs.Reports;

public record PlatformSummaryDto(
    int TotalUsers,
    int TotalOrganizations,
    int TotalCourses,
    int TotalEnrollments,
    int TotalCertificatesIssued,
    double PlatformCompletionRate
);
