using UCLMS.Domain.Entities;

namespace UCLMS.Application.Interfaces.Repositories;

public interface IQuizRepository : IBaseRepository<Quiz>
{
    Task<Quiz?> GetWithQuestionsAsync(int quizId, CancellationToken ct = default);
    Task<int> GetAttemptCountAsync(int quizId, int userId, CancellationToken ct = default);
    Task<QuizAttempt?> GetLatestAttemptAsync(int quizId, int userId, CancellationToken ct = default);
    Task<QuizAttempt?> GetAttemptByIdAsync(int attemptId, CancellationToken ct = default);
    Task AddAttemptAsync(QuizAttempt attempt, CancellationToken ct = default);
    Task UpdateAttemptAsync(QuizAttempt attempt, CancellationToken ct = default);
    Task SaveAsync(CancellationToken ct = default);
    Task<IEnumerable<Quiz>> GetByCourseAsync(int courseId, CancellationToken ct = default);
    Task<IEnumerable<QuizAttempt>> GetBestAttemptsForCourseAsync(int courseId, CancellationToken ct = default);
}
