namespace UCLMS.Application.DTOs.Gradebook;

public record LearnerGradesDto(
    int UserId,
    string CourseTitle,
    List<GradeItemDto> Items,
    decimal? OverallScore,
    string CompletionStatus
);

public record GradeItemDto(string Title, string Type, decimal? Score, decimal MaxPoints, string Status, DateTime? GradedAt);
