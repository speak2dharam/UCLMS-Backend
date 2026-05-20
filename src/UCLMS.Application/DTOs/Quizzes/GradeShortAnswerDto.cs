namespace UCLMS.Application.DTOs.Quizzes;

public record GradeShortAnswerDto(List<ShortAnswerGradeDto> Grades);

public record ShortAnswerGradeDto(int AnswerId, bool IsCorrect, decimal PointsEarned);
