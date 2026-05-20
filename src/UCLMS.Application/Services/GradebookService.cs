using UCLMS.Application.Common.Exceptions;
using UCLMS.Application.DTOs.Gradebook;
using UCLMS.Application.Interfaces.Repositories;
using UCLMS.Application.Interfaces.Services;
using UCLMS.Domain.Enums;

namespace UCLMS.Application.Services;

public class GradebookService : IGradebookService
{
    private readonly ICourseRepository _courses;
    private readonly IQuizRepository _quizzes;
    private readonly IAssignmentRepository _assignments;
    private readonly IOrganizationRepository _orgs;

    public GradebookService(
        ICourseRepository courses,
        IQuizRepository quizzes,
        IAssignmentRepository assignments,
        IOrganizationRepository orgs)
    {
        _courses = courses;
        _quizzes = quizzes;
        _assignments = assignments;
        _orgs = orgs;
    }

    public async Task<CourseGradebookDto> GetCourseGradebookAsync(int courseId, CancellationToken ct = default)
    {
        var course = await _courses.GetWithModulesAsync(courseId, ct)
            ?? throw new NotFoundException("Course", courseId);

        var enrollments = (await _courses.GetEnrollmentsForCourseAsync(courseId, ct)).ToList();
        var quizzes = (await _quizzes.GetAllAsync(ct))
            .Where(q => q.CourseId == courseId).ToList();
        var assignments = (await _assignments.GetByCourseAsync(courseId, ct)).ToList();

        var columns = new List<GradebookColumnDto>();
        columns.AddRange(quizzes.Select(q => new GradebookColumnDto(q.Id, q.Title, "Quiz", q.MaxPoints)));
        columns.AddRange(assignments.Select(a => new GradebookColumnDto(a.Id, a.Title, "Assignment", a.MaxPoints)));

        var bestAttempts = (await _quizzes.GetBestAttemptsForCourseAsync(courseId, ct)).ToList();
        var submissions = (await _assignments.GetSubmissionsForCourseAsync(courseId, ct)).ToList();

        var rows = enrollments.Select(enrollment =>
        {
            var cells = new List<GradeCellDto>();

            foreach (var quiz in quizzes)
            {
                var attempt = bestAttempts.FirstOrDefault(a => a.QuizId == quiz.Id && a.UserId == enrollment.UserId);
                cells.Add(attempt != null
                    ? new GradeCellDto(quiz.Id, attempt.Score, quiz.MaxPoints, attempt.IsPassed == true ? "Passed" : "Failed")
                    : new GradeCellDto(quiz.Id, null, quiz.MaxPoints, "NotAttempted"));
            }

            foreach (var assignment in assignments)
            {
                var sub = submissions.FirstOrDefault(s => s.AssignmentId == assignment.Id && s.UserId == enrollment.UserId);
                cells.Add(sub != null
                    ? new GradeCellDto(assignment.Id, sub.Score, assignment.MaxPoints, sub.Status.ToString())
                    : new GradeCellDto(assignment.Id, null, assignment.MaxPoints, "NotSubmitted"));
            }

            var totalMax = columns.Sum(c => c.MaxPoints);
            var totalEarned = cells.Where(c => c.Score.HasValue).Sum(c => c.Score!.Value);
            var totalScore = totalMax > 0 ? (decimal?)totalEarned : null;

            return new LearnerGradeRowDto(
                enrollment.UserId,
                enrollment.User.FullName,
                enrollment.User.Organization?.Name,
                cells,
                totalScore,
                enrollment.CompletionStatus.ToString());
        }).ToList();

        return new CourseGradebookDto(courseId, course.Title, columns, rows);
    }

    public async Task<LearnerGradesDto> GetLearnerGradesAsync(int courseId, int userId, CancellationToken ct = default)
    {
        var course = await _courses.GetByIdAsync(courseId, ct)
            ?? throw new NotFoundException("Course", courseId);

        var enrollment = await _courses.GetEnrollmentAsync(courseId, userId, ct)
            ?? throw new NotFoundException("Enrollment", $"{courseId}/{userId}");

        var quizzes = (await _quizzes.GetAllAsync(ct))
            .Where(q => q.CourseId == courseId).ToList();
        var assignments = (await _assignments.GetByCourseAsync(courseId, ct)).ToList();

        var bestAttempts = (await _quizzes.GetBestAttemptsForCourseAsync(courseId, ct))
            .Where(a => a.UserId == userId).ToList();
        var submissions = (await _assignments.GetSubmissionsForCourseAsync(courseId, ct))
            .Where(s => s.UserId == userId).ToList();

        var items = new List<GradeItemDto>();

        foreach (var quiz in quizzes)
        {
            var attempt = bestAttempts.FirstOrDefault(a => a.QuizId == quiz.Id);
            items.Add(attempt != null
                ? new GradeItemDto(quiz.Title, "Quiz", attempt.Score, quiz.MaxPoints,
                    attempt.IsPassed == true ? "Passed" : "Failed", attempt.GradedAt)
                : new GradeItemDto(quiz.Title, "Quiz", null, quiz.MaxPoints, "NotAttempted", null));
        }

        foreach (var assignment in assignments)
        {
            var sub = submissions.FirstOrDefault(s => s.AssignmentId == assignment.Id);
            items.Add(sub != null
                ? new GradeItemDto(assignment.Title, "Assignment", sub.Score, assignment.MaxPoints,
                    sub.Status.ToString(), sub.GradedAt)
                : new GradeItemDto(assignment.Title, "Assignment", null, assignment.MaxPoints, "NotSubmitted", null));
        }

        var totalMax = items.Sum(i => i.MaxPoints);
        var totalEarned = items.Where(i => i.Score.HasValue).Sum(i => i.Score!.Value);
        var overallScore = totalMax > 0 ? (decimal?)Math.Round(totalEarned / totalMax * 100, 2) : null;

        return new LearnerGradesDto(userId, course.Title, items, overallScore, enrollment.CompletionStatus.ToString());
    }

    public async Task<OrgGradebookDto> GetOrgGradebookAsync(int courseId, int organizationId, CancellationToken ct = default)
    {
        var course = await _courses.GetByIdAsync(courseId, ct)
            ?? throw new NotFoundException("Course", courseId);

        var org = await _orgs.GetByIdAsync(organizationId, ct)
            ?? throw new NotFoundException("Organization", organizationId);

        var enrollments = (await _courses.GetEnrollmentsForCourseAsync(courseId, ct))
            .Where(e => e.User.OrganizationId == organizationId)
            .ToList();

        var quizzes = (await _quizzes.GetAllAsync(ct))
            .Where(q => q.CourseId == courseId).ToList();
        var assignments = (await _assignments.GetByCourseAsync(courseId, ct)).ToList();

        var columns = new List<GradebookColumnDto>();
        columns.AddRange(quizzes.Select(q => new GradebookColumnDto(q.Id, q.Title, "Quiz", q.MaxPoints)));
        columns.AddRange(assignments.Select(a => new GradebookColumnDto(a.Id, a.Title, "Assignment", a.MaxPoints)));

        var bestAttempts = (await _quizzes.GetBestAttemptsForCourseAsync(courseId, ct)).ToList();
        var submissions = (await _assignments.GetSubmissionsForCourseAsync(courseId, ct)).ToList();

        var rows = enrollments.Select(enrollment =>
        {
            var cells = new List<GradeCellDto>();

            foreach (var quiz in quizzes)
            {
                var attempt = bestAttempts.FirstOrDefault(a => a.QuizId == quiz.Id && a.UserId == enrollment.UserId);
                cells.Add(attempt != null
                    ? new GradeCellDto(quiz.Id, attempt.Score, quiz.MaxPoints, attempt.IsPassed == true ? "Passed" : "Failed")
                    : new GradeCellDto(quiz.Id, null, quiz.MaxPoints, "NotAttempted"));
            }

            foreach (var assignment in assignments)
            {
                var sub = submissions.FirstOrDefault(s => s.AssignmentId == assignment.Id && s.UserId == enrollment.UserId);
                cells.Add(sub != null
                    ? new GradeCellDto(assignment.Id, sub.Score, assignment.MaxPoints, sub.Status.ToString())
                    : new GradeCellDto(assignment.Id, null, assignment.MaxPoints, "NotSubmitted"));
            }

            var totalEarned = cells.Where(c => c.Score.HasValue).Sum(c => c.Score!.Value);
            return new LearnerGradeRowDto(
                enrollment.UserId,
                enrollment.User.FullName,
                org.Name,
                cells,
                totalEarned,
                enrollment.CompletionStatus.ToString());
        }).ToList();

        return new OrgGradebookDto(organizationId, org.Name, courseId, course.Title, rows);
    }
}
