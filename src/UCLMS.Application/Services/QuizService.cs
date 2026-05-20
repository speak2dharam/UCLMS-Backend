using UCLMS.Application.Common.Exceptions;
using UCLMS.Application.DTOs.Quizzes;
using UCLMS.Application.Interfaces.Repositories;
using UCLMS.Application.Interfaces.Services;
using UCLMS.Domain.Entities;
using UCLMS.Domain.Enums;

namespace UCLMS.Application.Services;

public class QuizService : IQuizService
{
    private readonly IQuizRepository _quizzes;
    private readonly ICourseRepository _courses;
    private readonly IModuleItemRepository _items;

    public QuizService(IQuizRepository quizzes, ICourseRepository courses, IModuleItemRepository items)
    {
        _quizzes = quizzes;
        _courses = courses;
        _items = items;
    }

    public async Task<IEnumerable<QuizSummaryDto>> GetByCourseAsync(int courseId, CancellationToken ct = default)
    {
        var quizzes = await _quizzes.GetByCourseAsync(courseId, ct);
        return quizzes.Select(q => new QuizSummaryDto(
            q.Id, q.CourseId, q.ModuleId, q.Title, q.TimeLimitMinutes, q.MaxAttempts, q.PassingScorePercent));
    }

    public async Task<QuizDetailDto> GetByIdAsync(int id, CancellationToken ct = default)
    {
        var quiz = await _quizzes.GetWithQuestionsAsync(id, ct)
            ?? throw new NotFoundException("Quiz", id);

        return MapToDetail(quiz);
    }

    public async Task<QuizDetailDto> CreateAsync(CreateQuizDto dto, CancellationToken ct = default)
    {
        if (!await _courses.ExistsAsync(c => c.Id == dto.CourseId, ct))
            throw new NotFoundException("Course", dto.CourseId);

        var quiz = new Quiz
        {
            CourseId = dto.CourseId,
            ModuleId = dto.ModuleId,
            Title = dto.Title,
            Description = dto.Description,
            TimeLimitMinutes = dto.TimeLimitMinutes,
            MaxAttempts = dto.MaxAttempts,
            PassingScorePercent = dto.PassingScorePercent,
            RandomizeQuestions = dto.RandomizeQuestions,
            IsRequired = dto.IsRequired,
            MaxPoints = dto.MaxPoints
        };

        if (dto.Questions != null)
        {
            foreach (var q in dto.Questions)
            {
                var question = new Question
                {
                    QuestionText = q.QuestionText,
                    QuestionType = q.QuestionType,
                    OrderIndex = q.OrderIndex,
                    Points = q.Points
                };

                if (q.Options != null)
                {
                    foreach (var o in q.Options)
                    {
                        question.Options.Add(new QuestionOption
                        {
                            OptionText = o.OptionText,
                            IsCorrect = o.IsCorrect,
                            OrderIndex = o.OrderIndex
                        });
                    }
                }

                quiz.Questions.Add(question);
            }
        }

        await _quizzes.AddAsync(quiz, ct);
        await _quizzes.SaveChangesAsync(ct);

        var created = await _quizzes.GetWithQuestionsAsync(quiz.Id, ct)!;
        return MapToDetail(created!);
    }

    public async Task<QuizDetailDto> UpdateAsync(int id, UpdateQuizDto dto, CancellationToken ct = default)
    {
        var quiz = await _quizzes.GetByIdAsync(id, ct)
            ?? throw new NotFoundException("Quiz", id);

        quiz.Title = dto.Title;
        quiz.Description = dto.Description;
        quiz.TimeLimitMinutes = dto.TimeLimitMinutes;
        quiz.MaxAttempts = dto.MaxAttempts;
        quiz.PassingScorePercent = dto.PassingScorePercent;
        quiz.RandomizeQuestions = dto.RandomizeQuestions;
        quiz.IsRequired = dto.IsRequired;
        quiz.MaxPoints = dto.MaxPoints;

        await _quizzes.UpdateAsync(quiz, ct);
        await _quizzes.SaveChangesAsync(ct);

        var updated = await _quizzes.GetWithQuestionsAsync(id, ct)!;
        return MapToDetail(updated!);
    }

    public async Task DeleteAsync(int id, CancellationToken ct = default)
    {
        var quiz = await _quizzes.GetByIdAsync(id, ct)
            ?? throw new NotFoundException("Quiz", id);

        // ModuleItems → Quiz FK is NoAction (single-cascade-path rule); strip any references first.
        await _items.RemoveByQuizAsync(quiz.Id, ct);
        await _quizzes.DeleteAsync(quiz, ct);
        await _quizzes.SaveChangesAsync(ct);
    }

    public async Task<QuestionDto> AddQuestionAsync(int quizId, CreateQuestionDto dto, CancellationToken ct = default)
    {
        var quiz = await _quizzes.GetWithQuestionsAsync(quizId, ct)
            ?? throw new NotFoundException("Quiz", quizId);

        var question = new Question
        {
            QuizId = quizId,
            QuestionText = dto.QuestionText,
            QuestionType = dto.QuestionType,
            OrderIndex = dto.OrderIndex,
            Points = dto.Points
        };

        if (dto.Options != null && dto.QuestionType != QuestionType.ShortAnswer)
        {
            foreach (var o in dto.Options)
            {
                question.Options.Add(new QuestionOption
                {
                    OptionText = o.OptionText,
                    IsCorrect = o.IsCorrect,
                    OrderIndex = o.OrderIndex
                });
            }
        }

        quiz.Questions.Add(question);
        await _quizzes.SaveChangesAsync(ct);

        return new QuestionDto(
            question.Id, question.QuestionText, question.QuestionType.ToString(),
            question.OrderIndex, question.Points,
            question.QuestionType != QuestionType.ShortAnswer
                ? question.Options.OrderBy(o => o.OrderIndex)
                    .Select(o => new OptionDto(o.Id, o.OptionText, o.OrderIndex)).ToList()
                : null);
    }

    public async Task<QuestionDto> UpdateQuestionAsync(int quizId, int questionId, CreateQuestionDto dto, CancellationToken ct = default)
    {
        var quiz = await _quizzes.GetWithQuestionsAsync(quizId, ct)
            ?? throw new NotFoundException("Quiz", quizId);

        var question = quiz.Questions.FirstOrDefault(q => q.Id == questionId)
            ?? throw new NotFoundException("Question", questionId);

        question.QuestionText = dto.QuestionText;
        question.QuestionType = dto.QuestionType;
        question.OrderIndex = dto.OrderIndex;
        question.Points = dto.Points;

        question.Options.Clear();
        if (dto.Options != null && dto.QuestionType != QuestionType.ShortAnswer)
        {
            foreach (var o in dto.Options)
            {
                question.Options.Add(new QuestionOption
                {
                    OptionText = o.OptionText,
                    IsCorrect = o.IsCorrect,
                    OrderIndex = o.OrderIndex
                });
            }
        }

        await _quizzes.SaveChangesAsync(ct);

        return new QuestionDto(
            question.Id, question.QuestionText, question.QuestionType.ToString(),
            question.OrderIndex, question.Points,
            question.QuestionType != QuestionType.ShortAnswer
                ? question.Options.OrderBy(o => o.OrderIndex)
                    .Select(o => new OptionDto(o.Id, o.OptionText, o.OrderIndex)).ToList()
                : null);
    }

    public async Task DeleteQuestionAsync(int quizId, int questionId, CancellationToken ct = default)
    {
        var quiz = await _quizzes.GetWithQuestionsAsync(quizId, ct)
            ?? throw new NotFoundException("Quiz", quizId);

        var question = quiz.Questions.FirstOrDefault(q => q.Id == questionId)
            ?? throw new NotFoundException("Question", questionId);

        quiz.Questions.Remove(question);
        await _quizzes.SaveChangesAsync(ct);
    }

    public async Task<QuizAttemptDto> StartAttemptAsync(int quizId, int userId, CancellationToken ct = default)
    {
        var quiz = await _quizzes.GetWithQuestionsAsync(quizId, ct)
            ?? throw new NotFoundException("Quiz", quizId);

        var attemptCount = await _quizzes.GetAttemptCountAsync(quizId, userId, ct);
        if (attemptCount >= quiz.MaxAttempts)
            throw new ValidationException($"Maximum attempts ({quiz.MaxAttempts}) reached for this quiz.");

        // Block if there's an in-progress (non-submitted) attempt
        var latest = await _quizzes.GetLatestAttemptAsync(quizId, userId, ct);
        if (latest is { SubmittedAt: null })
            throw new ValidationException("You have an unfinished attempt. Submit it before starting a new one.");

        var attempt = new QuizAttempt
        {
            QuizId = quizId,
            UserId = userId,
            AttemptNumber = attemptCount + 1,
            StartedAt = DateTime.UtcNow
        };

        await _quizzes.AddAttemptAsync(attempt, ct);
        await _quizzes.SaveAsync(ct);

        var questions = quiz.RandomizeQuestions
            ? quiz.Questions.OrderBy(_ => Guid.NewGuid()).ToList()
            : quiz.Questions.OrderBy(q => q.OrderIndex).ToList();

        return new QuizAttemptDto(
            attempt.Id,
            quizId,
            attempt.AttemptNumber,
            attempt.StartedAt,
            quiz.TimeLimitMinutes,
            questions.Select(q => new AttemptQuestionDto(
                q.Id,
                q.QuestionText,
                q.QuestionType.ToString(),
                q.Points,
                q.QuestionType != QuestionType.ShortAnswer
                    ? q.Options.OrderBy(o => o.OrderIndex)
                        .Select(o => new OptionDto(o.Id, o.OptionText, o.OrderIndex))
                        .ToList()
                    : null
            )).ToList()
        );
    }

    public async Task<QuizAttemptResultDto> SubmitAttemptAsync(int attemptId, SubmitQuizDto dto, int userId, CancellationToken ct = default)
    {
        var attempt = await _quizzes.GetAttemptByIdAsync(attemptId, ct)
            ?? throw new NotFoundException("QuizAttempt", attemptId);

        if (attempt.UserId != userId)
            throw new ForbiddenException("You do not own this attempt.");

        if (attempt.SubmittedAt.HasValue)
            throw new ValidationException("This attempt has already been submitted.");

        var quiz = attempt.Quiz;
        var questions = quiz.Questions.ToDictionary(q => q.Id);

        bool hasShortAnswer = false;
        var answerResults = new List<AnswerResultDto>();

        foreach (var submitted in dto.Answers)
        {
            if (!questions.TryGetValue(submitted.QuestionId, out var question))
                continue;

            var answer = new QuizAttemptAnswer
            {
                QuizAttemptId = attemptId,
                QuestionId = submitted.QuestionId
            };

            switch (question.QuestionType)
            {
                case QuestionType.MCQSingle:
                case QuestionType.TrueFalse:
                {
                    var selectedId = submitted.SelectedOptionIds?.FirstOrDefault();
                    answer.SelectedOptionIds = selectedId.HasValue ? selectedId.ToString() : null;
                    var correctOption = question.Options.FirstOrDefault(o => o.IsCorrect);
                    answer.IsCorrect = correctOption != null && selectedId == correctOption.Id;
                    answer.PointsEarned = answer.IsCorrect == true ? question.Points : 0;
                    answerResults.Add(new AnswerResultDto(
                        question.Id, answer.IsCorrect, answer.PointsEarned,
                        correctOption?.OptionText));
                    break;
                }

                case QuestionType.MCQMulti:
                {
                    var selectedIds = submitted.SelectedOptionIds ?? new List<int>();
                    answer.SelectedOptionIds = string.Join(",", selectedIds);
                    var correctIds = question.Options.Where(o => o.IsCorrect).Select(o => o.Id).ToHashSet();
                    var selectedSet = selectedIds.ToHashSet();
                    answer.IsCorrect = correctIds.SetEquals(selectedSet);
                    answer.PointsEarned = answer.IsCorrect == true ? question.Points : 0;
                    var correctTexts = string.Join(", ", question.Options.Where(o => o.IsCorrect).Select(o => o.OptionText));
                    answerResults.Add(new AnswerResultDto(
                        question.Id, answer.IsCorrect, answer.PointsEarned, correctTexts));
                    break;
                }

                case QuestionType.ShortAnswer:
                {
                    answer.TextAnswer = submitted.TextAnswer;
                    answer.IsCorrect = null;      // pending manual grading
                    answer.PointsEarned = null;
                    hasShortAnswer = true;
                    answerResults.Add(new AnswerResultDto(question.Id, null, null, null));
                    break;
                }
            }

            attempt.Answers.Add(answer);
        }

        // Compute score from auto-graded answers (ShortAnswer = 0 until manually graded)
        var earnedPoints = attempt.Answers
            .Where(a => a.PointsEarned.HasValue)
            .Sum(a => a.PointsEarned!.Value);

        var maxPoints = quiz.Questions.Sum(q => q.Points);

        attempt.SubmittedAt = DateTime.UtcNow;
        attempt.Score = earnedPoints;
        attempt.MaxScore = maxPoints;
        attempt.IsGraded = !hasShortAnswer;

        if (!hasShortAnswer && maxPoints > 0)
            attempt.IsPassed = (earnedPoints / maxPoints * 100) >= quiz.PassingScorePercent;

        await _quizzes.UpdateAttemptAsync(attempt, ct);
        await _quizzes.SaveAsync(ct);

        var percentage = maxPoints > 0 ? Math.Round(earnedPoints / maxPoints * 100, 2) : 0;

        return new QuizAttemptResultDto(
            attemptId,
            earnedPoints,
            maxPoints,
            percentage,
            attempt.IsPassed ?? false,
            !hasShortAnswer,
            answerResults
        );
    }

    public async Task GradeShortAnswerAsync(int attemptId, GradeShortAnswerDto dto, int gradedByUserId, CancellationToken ct = default)
    {
        var attempt = await _quizzes.GetAttemptByIdAsync(attemptId, ct)
            ?? throw new NotFoundException("QuizAttempt", attemptId);

        if (!attempt.SubmittedAt.HasValue)
            throw new ValidationException("Cannot grade an attempt that has not been submitted.");

        var answersById = attempt.Answers.ToDictionary(a => a.Id);

        foreach (var grade in dto.Grades)
        {
            if (!answersById.TryGetValue(grade.AnswerId, out var answer))
                continue;

            if (answer.Question.QuestionType != QuestionType.ShortAnswer)
                throw new ValidationException($"Answer {grade.AnswerId} is not a short-answer question.");

            answer.IsCorrect = grade.IsCorrect;
            answer.PointsEarned = grade.PointsEarned;
        }

        // Recompute totals
        bool allGraded = attempt.Answers.All(a => a.IsCorrect.HasValue);
        var earnedPoints = attempt.Answers.Sum(a => a.PointsEarned ?? 0);
        var maxPoints = attempt.Quiz.Questions.Sum(q => q.Points);

        attempt.Score = earnedPoints;
        attempt.IsGraded = allGraded;
        attempt.GradedByUserId = gradedByUserId;
        attempt.GradedAt = DateTime.UtcNow;

        if (allGraded && maxPoints > 0)
            attempt.IsPassed = (earnedPoints / maxPoints * 100) >= attempt.Quiz.PassingScorePercent;

        await _quizzes.UpdateAttemptAsync(attempt, ct);
        await _quizzes.SaveAsync(ct);
    }

    // OptionDto doesn't expose IsCorrect — learners never see the answer key
    private static QuizDetailDto MapToDetail(Quiz quiz) => new(
        quiz.Id,
        quiz.CourseId,
        quiz.ModuleId,
        quiz.Title,
        quiz.Description,
        quiz.TimeLimitMinutes,
        quiz.MaxAttempts,
        quiz.PassingScorePercent,
        quiz.RandomizeQuestions,
        quiz.IsRequired,
        quiz.MaxPoints,
        quiz.Questions.OrderBy(q => q.OrderIndex).Select(q => new QuestionDto(
            q.Id,
            q.QuestionText,
            q.QuestionType.ToString(),
            q.OrderIndex,
            q.Points,
            q.QuestionType != QuestionType.ShortAnswer
                ? q.Options.OrderBy(o => o.OrderIndex)
                    .Select(o => new OptionDto(o.Id, o.OptionText, o.OrderIndex))
                    .ToList()
                : null
        )).ToList()
    );
}
