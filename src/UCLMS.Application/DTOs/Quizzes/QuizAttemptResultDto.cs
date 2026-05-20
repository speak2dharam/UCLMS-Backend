namespace UCLMS.Application.DTOs.Quizzes;

public record QuizAttemptResultDto(
    int AttemptId,
    decimal Score,
    decimal MaxScore,
    decimal Percentage,
    bool IsPassed,
    bool IsFullyGraded,
    List<AnswerResultDto> AnswerResults
);

public record AnswerResultDto(int QuestionId, bool? IsCorrect, decimal? PointsEarned, string? CorrectAnswer);
