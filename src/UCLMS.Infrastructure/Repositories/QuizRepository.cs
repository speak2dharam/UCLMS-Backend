using Microsoft.EntityFrameworkCore;
using UCLMS.Application.Interfaces.Repositories;
using UCLMS.Domain.Entities;
using UCLMS.Infrastructure.Persistence;

namespace UCLMS.Infrastructure.Repositories;

public class QuizRepository : BaseRepository<Quiz>, IQuizRepository
{
    public QuizRepository(UCLMSDbContext db) : base(db) { }

    public async Task<Quiz?> GetWithQuestionsAsync(int quizId, CancellationToken ct = default) =>
        await _db.Quizzes
            .Include(q => q.Questions.OrderBy(qu => qu.OrderIndex))
                .ThenInclude(q => q.Options.OrderBy(o => o.OrderIndex))
            .FirstOrDefaultAsync(q => q.Id == quizId, ct);

    public async Task<int> GetAttemptCountAsync(int quizId, int userId, CancellationToken ct = default) =>
        await _db.QuizAttempts.CountAsync(a => a.QuizId == quizId && a.UserId == userId, ct);

    public async Task<QuizAttempt?> GetLatestAttemptAsync(int quizId, int userId, CancellationToken ct = default) =>
        await _db.QuizAttempts
            .Include(a => a.Answers)
            .Where(a => a.QuizId == quizId && a.UserId == userId)
            .OrderByDescending(a => a.StartedAt)
            .FirstOrDefaultAsync(ct);

    public async Task<QuizAttempt?> GetAttemptByIdAsync(int attemptId, CancellationToken ct = default) =>
        await _db.QuizAttempts
            .Include(a => a.Answers)
                .ThenInclude(a => a.Question)
                    .ThenInclude(q => q.Options)
            .Include(a => a.Quiz)
                .ThenInclude(q => q.Questions)
                    .ThenInclude(q => q.Options)
            .FirstOrDefaultAsync(a => a.Id == attemptId, ct);

    public Task<int> DeleteAnswersByQuestionAsync(int questionId, CancellationToken ct = default) =>
        _db.QuizAttemptAnswers.Where(a => a.QuestionId == questionId).ExecuteDeleteAsync(ct);

    public async Task AddAttemptAsync(QuizAttempt attempt, CancellationToken ct = default) =>
        await _db.QuizAttempts.AddAsync(attempt, ct);

    public Task UpdateAttemptAsync(QuizAttempt attempt, CancellationToken ct = default)
    {
        _db.QuizAttempts.Update(attempt);
        return Task.CompletedTask;
    }

    public Task SaveAsync(CancellationToken ct = default) => _db.SaveChangesAsync(ct);

    public async Task<IEnumerable<Quiz>> GetByCourseAsync(int courseId, CancellationToken ct = default) =>
        await _db.Quizzes.Where(q => q.CourseId == courseId).ToListAsync(ct);

    // Returns the highest-scoring graded attempt per (quiz, user) for all quizzes in a course
    public async Task<IEnumerable<QuizAttempt>> GetBestAttemptsForCourseAsync(int courseId, CancellationToken ct = default) =>
        await _db.QuizAttempts
            .Where(a => a.Quiz.CourseId == courseId && a.IsGraded && a.Score.HasValue)
            .GroupBy(a => new { a.QuizId, a.UserId })
            .Select(g => g.OrderByDescending(a => a.Score).First())
            .ToListAsync(ct);
}
