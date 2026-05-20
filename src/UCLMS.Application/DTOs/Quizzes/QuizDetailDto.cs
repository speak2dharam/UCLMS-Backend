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

public record OptionDto(int Id, string OptionText, int OrderIndex);
