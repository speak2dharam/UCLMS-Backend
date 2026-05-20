namespace UCLMS.Application.DTOs.Quizzes;

public record UpdateQuizDto(
    string Title,
    string? Description,
    int? TimeLimitMinutes,
    int MaxAttempts,
    int PassingScorePercent,
    bool RandomizeQuestions,
    bool IsRequired,
    decimal MaxPoints
);
