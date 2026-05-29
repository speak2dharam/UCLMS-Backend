namespace UCLMS.Application.DTOs.Quizzes;

public record QuizDetailDto(
    int Id,
    int CourseId,
    int? ModuleId,
    string Title,
    string? Description,
    int? TimeLimitMinutes,
    int MaxAttempts,
    int PassingScorePercent,
    bool RandomizeQuestions,
    bool IsRequired,
    decimal MaxPoints,
    List<QuestionDto> Questions
);

public record QuestionDto(
    int Id,
    string QuestionText,
    string QuestionType,
    int OrderIndex,
    decimal Points,
    List<OptionDto>? Options
);

/// <summary>Editor-side option payload — includes the answer key so the question editor
/// can pre-check the correct boxes when an instructor re-opens a question.
/// Learner-facing attempts use <see cref="QuizAttemptDto.AttemptOptionDto"/> which
/// deliberately omits IsCorrect.</summary>
public record OptionDto(int Id, string OptionText, bool IsCorrect, int OrderIndex);
