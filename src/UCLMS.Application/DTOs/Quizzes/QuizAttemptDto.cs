namespace UCLMS.Application.DTOs.Quizzes;

public record QuizAttemptDto(
    int AttemptId,
    int QuizId,
    int AttemptNumber,
    DateTime StartedAt,
    int? TimeLimitMinutes,
    List<AttemptQuestionDto> Questions
);

public record AttemptQuestionDto(
    int QuestionId,
    string QuestionText,
    string QuestionType,
    decimal Points,
    List<AttemptOptionDto>? Options
);

/// <summary>Learner-facing option — IsCorrect is deliberately absent so the answer key
/// never travels to the client during an attempt.</summary>
public record AttemptOptionDto(int Id, string OptionText, int OrderIndex);
