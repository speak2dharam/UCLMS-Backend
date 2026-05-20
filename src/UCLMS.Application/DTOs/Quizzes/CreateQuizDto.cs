using UCLMS.Domain.Enums;

namespace UCLMS.Application.DTOs.Quizzes;

public record CreateQuizDto(
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
    List<CreateQuestionDto>? Questions = null
);

public record CreateQuestionDto(
    string QuestionText,
    QuestionType QuestionType,
    int OrderIndex,
    decimal Points,
    List<CreateOptionDto>? Options,
    string? CorrectAnswer
);

public record CreateOptionDto(string OptionText, bool IsCorrect, int OrderIndex);
