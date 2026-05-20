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
    List<OptionDto>? Options
);
