namespace UCLMS.Application.DTOs.Reports;

public record CourseReportDto(
    int CourseId,
    string CourseTitle,
    int TotalEnrolled,
    int Completed,
    int InProgress,
    int NotStarted,
    double CompletionRate,
    double AverageScore,
    List<LearnerProgressDto> Learners
);

public record LearnerProgressDto(int UserId, string LearnerName, string? OrgName, string Status, double? Score, DateTime? CompletionDate);
