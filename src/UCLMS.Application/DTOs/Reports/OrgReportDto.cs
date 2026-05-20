namespace UCLMS.Application.DTOs.Reports;

public record OrgReportDto(
    int OrganizationId,
    string OrganizationName,
    int TotalLearners,
    int TotalEnrollments,
    int CompletedEnrollments,
    double CompletionRate,
    double AverageScore,
    List<CourseProgressDto> CourseBreakdown
);

public record CourseProgressDto(int CourseId, string CourseTitle, int Enrolled, int Completed, double AvgScore);
