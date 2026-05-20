namespace UCLMS.Application.DTOs.Quizzes;

public record SubmitQuizDto(List<AnswerDto> Answers);

public record AnswerDto(int QuestionId, List<int>? SelectedOptionIds, string? TextAnswer);
