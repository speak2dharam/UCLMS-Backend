using UCLMS.Application.Common.Exceptions;
using UCLMS.Application.DTOs.Courses;
using UCLMS.Application.DTOs.ModuleItems;
using UCLMS.Application.DTOs.Modules;
using UCLMS.Application.DTOs.Pages;
using UCLMS.Application.Interfaces.Repositories;
using UCLMS.Application.Interfaces.Services;
using UCLMS.Domain.Entities;
using UCLMS.Domain.Enums;
using UCLMS.Shared.Wrappers;

namespace UCLMS.Application.Services;

public class CourseService : ICourseService
{
    private readonly ICourseRepository _courses;
    private readonly IUserRepository _users;
    private readonly IModuleItemRepository _items;
    private readonly INotificationService _notifications;
    private readonly IEmailService _email;

    public CourseService(
        ICourseRepository courses,
        IUserRepository users,
        IModuleItemRepository items,
        INotificationService notifications,
        IEmailService email)
    {
        _courses = courses;
        _users = users;
        _items = items;
        _notifications = notifications;
        _email = email;
    }

    public async Task<PagedResult<CourseListDto>> GetAllAsync(
        CourseFilterDto filter, int currentUserId, CancellationToken ct = default)
    {
        var user = await _users.GetByIdAsync(currentUserId, ct)
            ?? throw new NotFoundException("User", currentUserId);

        // Role-based visibility:
        //  - PlatformAdmin / Instructor: every course (Draft, Published, Archived)
        //  - Observer: every Published course (scoped further by their observed orgs in future)
        //  - Learner: only courses they (or their org) are enrolled in, Published only
        IEnumerable<Course> courses = user.Role switch
        {
            UserRole.PlatformAdmin or UserRole.Instructor =>
                filter.Status.HasValue
                    ? await _courses.GetByStatusAsync(filter.Status.Value, ct)
                    : await _courses.GetAllAsync(ct),

            UserRole.Observer =>
                await _courses.GetByStatusAsync(CourseStatus.Published, ct),

            UserRole.Learner =>
                await GetCoursesVisibleToLearnerAsync(user, ct),

            _ => Enumerable.Empty<Course>()
        };

        if (user.Role != UserRole.PlatformAdmin && user.Role != UserRole.Instructor)
            courses = courses.Where(c => c.Status == CourseStatus.Published);

        if (!string.IsNullOrWhiteSpace(filter.Search))
        {
            var search = filter.Search.ToLower();
            courses = courses.Where(c =>
                c.Title.ToLower().Contains(search) ||
                (c.Description != null && c.Description.ToLower().Contains(search)));
        }

        if (!string.IsNullOrWhiteSpace(filter.Category))
            courses = courses.Where(c => c.Category == filter.Category);

        var list = courses.ToList();
        var page = filter.Page < 1 ? 1 : filter.Page;
        var pageSize = filter.PageSize < 1 ? 20 : filter.PageSize;

        return new PagedResult<CourseListDto>
        {
            Items = list
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .Select(MapToList)
                .ToList(),
            TotalCount = list.Count,
            Page = page,
            PageSize = pageSize
        };
    }

    public async Task<CourseDetailDto> GetByIdAsync(int id, int requestingUserId, CancellationToken ct = default)
    {
        var course = await _courses.GetWithModulesAsync(id, ct)
            ?? throw new NotFoundException("Course", id);

        var user = await _users.GetByIdAsync(requestingUserId, ct)
            ?? throw new NotFoundException("User", requestingUserId);

        if (!await CanUserViewCourseAsync(course, user, ct))
            throw new ForbiddenException("You do not have access to this course.");

        var isEditor = user.Role is UserRole.PlatformAdmin or UserRole.Instructor;

        // For learners we look up the enrollment so each module item knows whether it's done.
        // For editors and not-yet-enrolled observers the completed set is empty.
        var completedIds = new HashSet<int>();
        if (!isEditor)
        {
            var enrollment = await _courses.GetEnrollmentAsync(course.Id, user.Id, ct);
            if (enrollment is not null)
                completedIds = await _items.GetCompletedItemIdsAsync(enrollment.Id, ct);
        }

        return MapToDetail(course, isEditor, completedIds);
    }

    public async Task<CourseDetailDto> CreateAsync(CreateCourseDto dto, int createdByUserId, CancellationToken ct = default)
    {
        var user = await _users.GetByIdAsync(createdByUserId, ct)
            ?? throw new NotFoundException("User", createdByUserId);

        ValidateDates(dto.StartDate, dto.EndDate);

        var course = new Course
        {
            Title = dto.Title,
            Description = dto.Description,
            ThumbnailUrl = dto.ThumbnailUrl,
            Category = dto.Category,
            Tags = dto.Tags,
            PassingScorePercent = dto.PassingScorePercent,
            Syllabus = dto.Syllabus,
            HomePage = CourseHomePage.Modules,
            StartDate = dto.StartDate,
            EndDate = dto.EndDate,
            Status = CourseStatus.Draft,
            CreatedByUserId = createdByUserId
        };

        await _courses.AddAsync(course, ct);
        await _courses.SaveChangesAsync(ct);

        var created = await _courses.GetWithModulesAsync(course.Id, ct)!;
        return MapToDetail(created!, isEditor: true, completedIds: new HashSet<int>());
    }

    public async Task<CourseDetailDto> UpdateAsync(int id, UpdateCourseDto dto, CancellationToken ct = default)
    {
        var course = await _courses.GetByIdAsync(id, ct)
            ?? throw new NotFoundException("Course", id);

        if (course.Status == CourseStatus.Archived)
            throw new ValidationException("Archived courses cannot be edited.");

        ValidateDates(dto.StartDate, dto.EndDate);

        course.Title = dto.Title;
        course.Description = dto.Description;
        course.ThumbnailUrl = dto.ThumbnailUrl;
        course.Category = dto.Category;
        course.Tags = dto.Tags;
        course.PassingScorePercent = dto.PassingScorePercent;
        course.Syllabus = dto.Syllabus;
        course.StartDate = dto.StartDate;
        course.EndDate = dto.EndDate;

        await _courses.UpdateAsync(course, ct);
        await _courses.SaveChangesAsync(ct);

        var updated = await _courses.GetWithModulesAsync(id, ct)!;
        return MapToDetail(updated!, isEditor: true, completedIds: new HashSet<int>());
    }

    public async Task<CourseDetailDto> SetHomePageAsync(
        int courseId, string homePage, int requestingUserId, CancellationToken ct = default)
    {
        var course = await _courses.GetWithModulesAsync(courseId, ct)
            ?? throw new NotFoundException("Course", courseId);

        if (!Enum.TryParse<CourseHomePage>(homePage, ignoreCase: true, out var parsed))
            throw new ValidationException($"Unknown home page option '{homePage}'.");

        if (parsed == CourseHomePage.FrontPage && course.FrontPageId is null)
            throw new ValidationException("Choose a page and set it as the front page first.");

        course.HomePage = parsed;
        await _courses.UpdateAsync(course, ct);
        await _courses.SaveChangesAsync(ct);

        return MapToDetail(course, isEditor: true, completedIds: new HashSet<int>());
    }

    public async Task PublishAsync(int id, CancellationToken ct = default)
    {
        var course = await _courses.GetWithModulesAsync(id, ct)
            ?? throw new NotFoundException("Course", id);

        if (course.Status != CourseStatus.Draft)
            throw new ValidationException("Only Draft courses can be published.");

        if (!course.Modules.Any())
            throw new ValidationException("Cannot publish a course with no modules. Add at least one module first.");

        course.Status = CourseStatus.Published;
        await _courses.UpdateAsync(course, ct);
        await _courses.SaveChangesAsync(ct);
    }

    public async Task UnpublishAsync(int id, CancellationToken ct = default)
    {
        var course = await _courses.GetByIdAsync(id, ct)
            ?? throw new NotFoundException("Course", id);

        if (course.Status != CourseStatus.Published)
            throw new ValidationException("Only Published courses can be unpublished.");

        course.Status = CourseStatus.Draft;
        await _courses.UpdateAsync(course, ct);
        await _courses.SaveChangesAsync(ct);
    }

    public async Task ArchiveAsync(int id, CancellationToken ct = default)
    {
        var course = await _courses.GetByIdAsync(id, ct)
            ?? throw new NotFoundException("Course", id);

        if (course.Status == CourseStatus.Archived)
            throw new ValidationException("Course is already archived.");

        course.Status = CourseStatus.Archived;
        await _courses.UpdateAsync(course, ct);
        await _courses.SaveChangesAsync(ct);
    }

    public async Task DeleteAsync(int id, CancellationToken ct = default)
    {
        var course = await _courses.GetByIdAsync(id, ct)
            ?? throw new NotFoundException("Course", id);

        if (course.Status == CourseStatus.Published)
            throw new ValidationException("Published courses cannot be deleted. Archive the course first.");

        await _courses.DeleteAsync(course, ct);
        await _courses.SaveChangesAsync(ct);
    }

    public async Task EnrollUserAsync(int courseId, int userId, int enrolledByUserId, CancellationToken ct = default)
    {
        var course = await _courses.GetByIdAsync(courseId, ct)
            ?? throw new NotFoundException("Course", courseId);

        if (course.Status == CourseStatus.Archived)
            throw new ValidationException("Cannot enroll users in an archived course.");

        var user = await _users.GetByIdAsync(userId, ct)
            ?? throw new NotFoundException("User", userId);

        if (await _courses.IsEnrolledAsync(courseId, userId, ct))
            throw new ValidationException("User is already enrolled in this course.");

        var enrollment = new CourseEnrollment
        {
            CourseId = courseId,
            UserId = userId,
            EnrolledByUserId = enrolledByUserId,
            EnrolledAt = DateTime.UtcNow
        };

        await _courses.AddEnrollmentAsync(enrollment, ct);
        await _courses.SaveChangesAsync(ct);

        await _notifications.SendAsync(userId,
            "New Course Enrolled",
            $"You have been enrolled in '{course.Title}'.",
            NotificationType.Enrollment, "Course", courseId, ct);

        await _email.SendEnrollmentConfirmationAsync(user.Email, user.FullName, course.Title, ct);
    }

    public async Task UnenrollUserAsync(int courseId, int userId, CancellationToken ct = default)
    {
        if (!await _courses.IsEnrolledAsync(courseId, userId, ct))
            throw new ValidationException("User is not enrolled in this course.");

        await _courses.RemoveEnrollmentAsync(courseId, userId, ct);
        await _courses.SaveChangesAsync(ct);
    }

    // ── Enrollments ───────────────────────────────────────────────────────────

    public async Task<List<CourseEnrollmentDto>> GetEnrollmentsAsync(int courseId, CancellationToken ct = default)
    {
        if (!await _courses.ExistsAsync(c => c.Id == courseId, ct))
            throw new NotFoundException("Course", courseId);

        var enrollments = await _courses.GetEnrollmentsForCourseAsync(courseId, ct);
        return enrollments
            .OrderByDescending(e => e.EnrolledAt)
            .Select(e => new CourseEnrollmentDto(
                e.Id,
                e.UserId,
                e.User?.FullName ?? string.Empty,
                e.User?.Email ?? string.Empty,
                e.User?.Role.ToString() ?? string.Empty,
                e.User?.Organization?.Name,
                e.EnrolledAt,
                e.CompletionStatus.ToString(),
                e.CompletionDate,
                e.FinalScore))
            .ToList();
    }

    public async Task<int> EnrollUsersAsync(int courseId, IEnumerable<int> userIds, int enrolledByUserId, CancellationToken ct = default)
    {
        var enrolled = 0;
        foreach (var uid in userIds.Distinct())
        {
            try
            {
                await EnrollUserAsync(courseId, uid, enrolledByUserId, ct);
                enrolled++;
            }
            catch (ValidationException) { /* already enrolled — skip */ }
        }
        return enrolled;
    }

    public async Task<List<CourseListDto>> GetEnrolledCoursesForUserAsync(int userId, CancellationToken ct = default)
    {
        if (!await _users.ExistsAsync(u => u.Id == userId, ct))
            throw new NotFoundException("User", userId);

        var courses = await _courses.GetEnrolledCoursesAsync(userId, ct);
        return courses.Select(MapToList).ToList();
    }

    // ── Validation helpers ────────────────────────────────────────────────────

    private static void ValidateDates(DateTime? start, DateTime? end)
    {
        if (start.HasValue && end.HasValue && end.Value < start.Value)
            throw new ValidationException("End date must be on or after the start date.");
    }

    // ── Visibility helpers ────────────────────────────────────────────────────

    private async Task<IEnumerable<Course>> GetCoursesVisibleToLearnerAsync(User user, CancellationToken ct)
    {
        var direct = await _courses.GetEnrolledCoursesAsync(user.Id, ct);
        var viaOrg = user.OrganizationId.HasValue
            ? await _courses.GetByOrganizationEnrollmentAsync(user.OrganizationId.Value, ct)
            : Enumerable.Empty<Course>();

        return direct.Concat(viaOrg).DistinctBy(c => c.Id);
    }

    private async Task<bool> CanUserViewCourseAsync(Course course, User user, CancellationToken ct)
    {
        if (user.Role == UserRole.PlatformAdmin || user.Role == UserRole.Instructor) return true;
        if (course.Status != CourseStatus.Published) return false;
        if (user.Role == UserRole.Observer) return true;
        if (await _courses.IsEnrolledAsync(course.Id, user.Id, ct)) return true;

        if (user.OrganizationId.HasValue)
        {
            var orgCourses = await _courses.GetByOrganizationEnrollmentAsync(user.OrganizationId.Value, ct);
            if (orgCourses.Any(c => c.Id == course.Id)) return true;
        }
        return false;
    }

    // ── Manual DTO mapping ────────────────────────────────────────────────────

    private static CourseListDto MapToList(Course c) => new(
        c.Id, c.Title, c.ThumbnailUrl, c.Category,
        c.Status.ToString(),
        c.PassingScorePercent,
        c.Modules?.Count ?? 0,
        c.StartDate, c.EndDate,
        c.CreatedBy?.FullName ?? string.Empty,
        c.CreatedAt);

    // Editors (PlatformAdmin/Instructor) see drafts plus every module and page regardless of
    // publish state. Learners and observers only see published modules, published items, and
    // published pages — and each item carries its own completion flag.
    private static CourseDetailDto MapToDetail(Course c, bool isEditor, HashSet<int> completedIds) => new(
        c.Id, c.Title, c.Description, c.ThumbnailUrl, c.Category, c.Tags,
        c.Status.ToString(),
        c.PassingScorePercent,
        c.Syllabus,
        c.HomePage.ToString(),
        c.FrontPageId,
        c.StartDate, c.EndDate,
        (c.Modules ?? new List<Module>())
            .Where(m => isEditor || m.IsPublished)
            .OrderBy(m => m.OrderIndex)
            .Select(m => new ModuleSummaryDto(
                m.Id, m.Title, m.Description, m.OrderIndex, m.IsPublished,
                (m.Items ?? new List<ModuleItem>())
                    .Where(i => isEditor || i.IsPublished)
                    .OrderBy(i => i.OrderIndex)
                    .Select(i => ModuleItemService.Map(i, completedIds.Contains(i.Id)))
                    .ToList()))
            .ToList(),
        (c.Pages ?? new List<CoursePage>())
            .Where(p => isEditor || p.IsPublished)
            .OrderBy(p => p.OrderIndex)
            .Select(p => new CoursePageSummaryDto(
                p.Id, p.Title, p.ContentType.ToString(), p.DurationMinutes,
                p.IsPublished, p.Id == c.FrontPageId, p.OrderIndex))
            .ToList(),
        c.CreatedBy?.FullName ?? string.Empty,
        c.CreatedAt, c.UpdatedAt);
}
