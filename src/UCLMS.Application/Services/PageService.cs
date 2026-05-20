using UCLMS.Application.Common.Exceptions;
using UCLMS.Application.DTOs.Pages;
using UCLMS.Application.Interfaces.Repositories;
using UCLMS.Application.Interfaces.Services;
using UCLMS.Domain.Entities;
using UCLMS.Domain.Enums;

namespace UCLMS.Application.Services;

public class PageService : IPageService
{
    private readonly ICoursePageRepository _pages;
    private readonly ICourseRepository _courses;
    private readonly IUserRepository _users;
    private readonly IModuleItemRepository _items;

    public PageService(
        ICoursePageRepository pages,
        ICourseRepository courses,
        IUserRepository users,
        IModuleItemRepository items)
    {
        _pages = pages;
        _courses = courses;
        _users = users;
        _items = items;
    }

    public async Task<List<CoursePageSummaryDto>> GetByCourseAsync(int courseId, int requestingUserId, CancellationToken ct = default)
    {
        var course = await _courses.GetByIdAsync(courseId, ct)
            ?? throw new NotFoundException("Course", courseId);

        var isEditor = await IsEditorAsync(requestingUserId, ct);
        var pages = (await _pages.GetByCourseAsync(courseId, ct))
            .Where(p => isEditor || p.IsPublished)
            .OrderBy(p => p.OrderIndex)
            .Select(p => MapToSummary(p, course.FrontPageId))
            .ToList();

        return pages;
    }

    public async Task<CoursePageDto> GetByIdAsync(int id, int requestingUserId, CancellationToken ct = default)
    {
        var page = await _pages.GetWithCourseAsync(id, ct)
            ?? throw new NotFoundException("Page", id);

        var isEditor = await IsEditorAsync(requestingUserId, ct);
        if (!isEditor && (!page.IsPublished || page.Course.Status != CourseStatus.Published))
            throw new ForbiddenException("This page is not available.");

        return MapToDto(page);
    }

    public async Task<CoursePageDto> CreateAsync(CreateCoursePageDto dto, int createdByUserId, CancellationToken ct = default)
    {
        if (!await _courses.ExistsAsync(c => c.Id == dto.CourseId, ct))
            throw new NotFoundException("Course", dto.CourseId);

        if (string.IsNullOrWhiteSpace(dto.Title))
            throw new ValidationException("Page title is required.");

        var contentType = ParseContentType(dto.ContentType);

        var page = new CoursePage
        {
            CourseId = dto.CourseId,
            Title = dto.Title.Trim(),
            ContentType = contentType,
            Body = dto.Body,
            VideoUrl = dto.VideoUrl,
            FileUrl = dto.FileUrl,
            DurationMinutes = dto.DurationMinutes,
            IsPublished = dto.IsPublished,
            OrderIndex = await _pages.GetNextOrderIndexAsync(dto.CourseId, ct),
            CreatedByUserId = createdByUserId
        };

        await _pages.AddAsync(page, ct);
        await _pages.SaveChangesAsync(ct);

        var created = await _pages.GetWithCourseAsync(page.Id, ct)!;
        return MapToDto(created!);
    }

    public async Task<CoursePageDto> UpdateAsync(int id, UpdateCoursePageDto dto, CancellationToken ct = default)
    {
        var page = await _pages.GetWithCourseAsync(id, ct)
            ?? throw new NotFoundException("Page", id);

        if (string.IsNullOrWhiteSpace(dto.Title))
            throw new ValidationException("Page title is required.");

        page.Title = dto.Title.Trim();
        page.ContentType = ParseContentType(dto.ContentType);
        page.Body = dto.Body;
        page.VideoUrl = dto.VideoUrl;
        page.FileUrl = dto.FileUrl;
        page.DurationMinutes = dto.DurationMinutes;
        page.IsPublished = dto.IsPublished;

        await _pages.UpdateAsync(page, ct);
        await _pages.SaveChangesAsync(ct);

        return MapToDto(page);
    }

    public async Task DeleteAsync(int id, CancellationToken ct = default)
    {
        var page = await _pages.GetWithCourseAsync(id, ct)
            ?? throw new NotFoundException("Page", id);

        if (page.Course.FrontPageId == page.Id)
        {
            page.Course.FrontPageId = null;
            page.Course.HomePage = CourseHomePage.Modules;
            await _courses.UpdateAsync(page.Course, ct);
        }

        // Remove any ModuleItem rows that reference this page first — the FK uses NoAction
        // (cascade would create a second cascade path from Course down to ModuleItems).
        await _items.RemoveByPageAsync(page.Id, ct);

        await _pages.DeleteAsync(page, ct);
        await _pages.SaveChangesAsync(ct);
    }

    public async Task<CoursePageDto> SetPublishedAsync(int id, bool isPublished, CancellationToken ct = default)
    {
        var page = await _pages.GetWithCourseAsync(id, ct)
            ?? throw new NotFoundException("Page", id);

        page.IsPublished = isPublished;
        await _pages.UpdateAsync(page, ct);

        if (!isPublished && page.Course.FrontPageId == page.Id)
        {
            page.Course.FrontPageId = null;
            page.Course.HomePage = CourseHomePage.Modules;
            await _courses.UpdateAsync(page.Course, ct);
        }

        await _pages.SaveChangesAsync(ct);
        return MapToDto(page);
    }

    public async Task SetAsFrontPageAsync(int id, CancellationToken ct = default)
    {
        var page = await _pages.GetWithCourseAsync(id, ct)
            ?? throw new NotFoundException("Page", id);

        page.IsPublished = true;
        await _pages.UpdateAsync(page, ct);

        page.Course.FrontPageId = page.Id;
        page.Course.HomePage = CourseHomePage.FrontPage;
        await _courses.UpdateAsync(page.Course, ct);

        await _pages.SaveChangesAsync(ct);
    }

    // ── Helpers ───────────────────────────────────────────────────────────────

    private async Task<bool> IsEditorAsync(int userId, CancellationToken ct)
    {
        var user = await _users.GetByIdAsync(userId, ct)
            ?? throw new NotFoundException("User", userId);
        return user.Role is UserRole.PlatformAdmin or UserRole.Instructor;
    }

    private static PageContentType ParseContentType(string value)
    {
        if (!Enum.TryParse<PageContentType>(value, ignoreCase: true, out var parsed))
            throw new ValidationException($"Unknown page content type '{value}'.");
        return parsed;
    }

    private static CoursePageSummaryDto MapToSummary(CoursePage p, int? frontPageId) =>
        new(p.Id, p.Title, p.ContentType.ToString(), p.DurationMinutes,
            p.IsPublished, p.Id == frontPageId, p.OrderIndex);

    private static CoursePageDto MapToDto(CoursePage p) => new(
        p.Id, p.CourseId, p.Title, p.ContentType.ToString(),
        p.Body, p.VideoUrl, p.FileUrl, p.DurationMinutes,
        p.IsPublished,
        p.Course != null && p.Course.FrontPageId == p.Id,
        p.OrderIndex,
        p.CreatedBy?.FullName ?? string.Empty,
        p.CreatedAt, p.UpdatedAt);
}
