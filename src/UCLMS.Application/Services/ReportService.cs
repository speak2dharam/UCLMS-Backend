using UCLMS.Application.Common.Exceptions;
using UCLMS.Application.DTOs.Reports;
using UCLMS.Application.Interfaces.Repositories;
using UCLMS.Application.Interfaces.Services;
using UCLMS.Domain.Enums;

namespace UCLMS.Application.Services;

public class ReportService : IReportService
{
    private readonly ICourseRepository _courses;
    private readonly IUserRepository _users;
    private readonly IOrganizationRepository _orgs;
    private readonly ICertificateRepository _certs;

    public ReportService(
        ICourseRepository courses,
        IUserRepository users,
        IOrganizationRepository orgs,
        ICertificateRepository certs)
    {
        _courses = courses;
        _users = users;
        _orgs = orgs;
        _certs = certs;
    }

    public async Task<PlatformSummaryDto> GetPlatformSummaryAsync(CancellationToken ct = default)
    {
        var users = (await _users.GetAllAsync(ct)).ToList();
        var orgs = (await _orgs.GetAllAsync(ct)).ToList();
        var courses = (await _courses.GetAllAsync(ct)).ToList();

        int totalEnrollments = 0;
        int completed = 0;

        foreach (var course in courses)
        {
            var enrollments = (await _courses.GetEnrollmentsForCourseAsync(course.Id, ct)).ToList();
            totalEnrollments += enrollments.Count;
            completed += enrollments.Count(e => e.CompletionStatus == CompletionStatus.Completed);
        }

        var totalCerts = (await _certs.GetAllAsync(ct)).Count();
        var completionRate = totalEnrollments > 0 ? Math.Round((double)completed / totalEnrollments * 100, 2) : 0;

        return new PlatformSummaryDto(
            users.Count, orgs.Count, courses.Count,
            totalEnrollments, totalCerts, completionRate);
    }

    public async Task<OrgReportDto> GetOrgReportAsync(int organizationId, CancellationToken ct = default)
    {
        var org = await _orgs.GetByIdAsync(organizationId, ct)
            ?? throw new NotFoundException("Organization", organizationId);

        var orgUsers = (await _users.GetByOrganizationAsync(organizationId, ct))
            .Where(u => u.IsActive).ToList();
        var learnerIds = orgUsers.Select(u => u.Id).ToHashSet();

        var allCourses = (await _courses.GetAllAsync(ct)).ToList();
        int totalEnrollments = 0;
        int completedEnrollments = 0;
        double totalScore = 0;
        int scoredCount = 0;
        var breakdown = new List<CourseProgressDto>();

        foreach (var course in allCourses)
        {
            var enrollments = (await _courses.GetEnrollmentsForCourseAsync(course.Id, ct))
                .Where(e => learnerIds.Contains(e.UserId)).ToList();

            if (!enrollments.Any()) continue;

            int enrolled = enrollments.Count;
            int completed = enrollments.Count(e => e.CompletionStatus == CompletionStatus.Completed);
            var scores = enrollments.Where(e => e.FinalScore.HasValue).Select(e => (double)e.FinalScore!.Value).ToList();
            double avgScore = scores.Any() ? Math.Round(scores.Average(), 2) : 0;

            totalEnrollments += enrolled;
            completedEnrollments += completed;
            totalScore += scores.Sum();
            scoredCount += scores.Count;

            breakdown.Add(new CourseProgressDto(course.Id, course.Title, enrolled, completed, avgScore));
        }

        double completionRate = totalEnrollments > 0 ? Math.Round((double)completedEnrollments / totalEnrollments * 100, 2) : 0;
        double avgPlatformScore = scoredCount > 0 ? Math.Round(totalScore / scoredCount, 2) : 0;

        return new OrgReportDto(organizationId, org.Name, orgUsers.Count,
            totalEnrollments, completedEnrollments, completionRate, avgPlatformScore, breakdown);
    }

    public async Task<CourseReportDto> GetCourseReportAsync(int courseId, int? organizationId, CancellationToken ct = default)
    {
        var course = await _courses.GetByIdAsync(courseId, ct)
            ?? throw new NotFoundException("Course", courseId);

        var enrollments = (await _courses.GetEnrollmentsForCourseAsync(courseId, ct)).ToList();

        if (organizationId.HasValue)
            enrollments = enrollments.Where(e => e.User.OrganizationId == organizationId.Value).ToList();

        int total = enrollments.Count;
        int completed = enrollments.Count(e => e.CompletionStatus == CompletionStatus.Completed);
        int inProgress = enrollments.Count(e => e.CompletionStatus == CompletionStatus.InProgress);
        int notStarted = enrollments.Count(e => e.CompletionStatus == CompletionStatus.NotStarted);

        var scores = enrollments.Where(e => e.FinalScore.HasValue).Select(e => (double)e.FinalScore!.Value).ToList();
        double avgScore = scores.Any() ? Math.Round(scores.Average(), 2) : 0;
        double completionRate = total > 0 ? Math.Round((double)completed / total * 100, 2) : 0;

        var learners = enrollments.Select(e => new LearnerProgressDto(
            e.UserId,
            e.User.FullName,
            e.User.Organization?.Name,
            e.CompletionStatus.ToString(),
            e.FinalScore.HasValue ? (double?)Math.Round((double)e.FinalScore.Value, 2) : null,
            e.CompletionDate)).ToList();

        return new CourseReportDto(courseId, course.Title, total, completed, inProgress, notStarted,
            completionRate, avgScore, learners);
    }

    public async Task<UserProgressReportDto> GetUserProgressReportAsync(int userId, CancellationToken ct = default)
    {
        var user = await _users.GetByIdAsync(userId, ct)
            ?? throw new NotFoundException("User", userId);

        var allCourses = await _courses.GetAllAsync(ct);
        var userCourses = new List<CourseProgressSummaryDto>();
        int completedCount = 0;

        foreach (var course in allCourses)
        {
            var enrollment = await _courses.GetEnrollmentAsync(course.Id, userId, ct);
            if (enrollment == null) continue;

            if (enrollment.CompletionStatus == CompletionStatus.Completed)
                completedCount++;

            userCourses.Add(new CourseProgressSummaryDto(
                course.Id,
                course.Title,
                enrollment.CompletionStatus.ToString(),
                enrollment.FinalScore.HasValue ? (double?)Math.Round((double)enrollment.FinalScore.Value, 2) : null,
                enrollment.CompletionDate));
        }

        var certCount = (await _certs.GetUserCertificatesAsync(userId, ct)).Count();

        return new UserProgressReportDto(
            userId, user.FullName,
            user.Organization?.Name,
            userCourses.Count, completedCount, certCount, userCourses);
    }
}
