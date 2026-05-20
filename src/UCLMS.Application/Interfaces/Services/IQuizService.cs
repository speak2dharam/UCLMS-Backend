using UCLMS.Application.DTOs.Quizzes;

namespace UCLMS.Application.Interfaces.Services;

public interface IQuizService
{
    Task<IEnumerable<QuizSummaryDto>> GetByCourseAsync(int courseId, CancellationToken ct = default);
    Task<QuizDetailDto> GetByIdAsync(int id, CancellationToken ct = default);
    Task<QuizDetailDto> CreateAsync(CreateQuizDto dto, CancellationToken ct = default);
    Task<QuizDetailDto> UpdateAsync(int id, UpdateQuizDto dto, CancellationToken ct = default);
    Task DeleteAsync(int id, CancellationToken ct = default);
    Task<QuestionDto> AddQuestionAsync(int quizId, CreateQuestionDto dto, CancellationToken ct = default);
    Task<QuestionDto> UpdateQuestionAsync(int quizId, int questionId, CreateQuestionDto dto, CancellationToken ct = default);
    Task DeleteQuestionAsync(int quizId, int questionId, CancellationToken ct = default);
    Task<QuizAttemptDto> StartAttemptAsync(int quizId, int userId, CancellationToken ct = default);
    Task<QuizAttemptResultDto> SubmitAttemptAsync(int attemptId, SubmitQuizDto dto, int userId, CancellationToken ct = default);
    Task GradeShortAnswerAsync(int attemptId, GradeShortAnswerDto dto, int gradedByUserId, CancellationToken ct = default);
}
