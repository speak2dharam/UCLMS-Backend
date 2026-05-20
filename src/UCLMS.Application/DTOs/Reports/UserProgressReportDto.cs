namespace UCLMS.Application.DTOs.Reports;

public record UserProgressReportDto(
    int UserId,
    string LearnerName,
    string? OrgName,
    int TotalEnrolled,
    int Completed,
    int CertificatesEarned,
    List<CourseProgressSummaryDto> Courses
);

public record CourseProgressSummaryDto(int CourseId, string Title, string Status, double? Score, DateTime? CompletionDate);
