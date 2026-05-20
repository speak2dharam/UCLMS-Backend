namespace UCLMS.Application.DTOs.Quizzes;

public record QuizSummaryDto(
    int Id,
    int CourseId,
    int? ModuleId,
    string Title,
    int? TimeLimitMinutes,
    int MaxAttempts,
    int PassingScorePercent
);
