using UCLMS.Application.Common.Exceptions;
using UCLMS.Application.DTOs.ModuleItems;
using UCLMS.Application.Interfaces.Repositories;
using UCLMS.Application.Interfaces.Services;
using UCLMS.Domain.Entities;
using UCLMS.Domain.Enums;

namespace UCLMS.Application.Services;

public class ModuleItemService : IModuleItemService
{
    private readonly IModuleItemRepository _items;
    private readonly IModuleRepository _modules;
    private readonly ICoursePageRepository _pages;
    private readonly IQuizRepository _quizzes;
    private readonly IAssignmentRepository _assignments;
    private readonly ICourseRepository _courses;

    public ModuleItemService(
        IModuleItemRepository items,
        IModuleRepository modules,
        ICoursePageRepository pages,
        IQuizRepository quizzes,
        IAssignmentRepository assignments,
        ICourseRepository courses)
    {
        _items = items;
        _modules = modules;
        _pages = pages;
        _quizzes = quizzes;
        _assignments = assignments;
        _courses = courses;
    }

    public async Task<ModuleItemDto> GetByIdAsync(int id, int requestingUserId, CancellationToken ct = default)
    {
        var item = await _items.GetWithRefsAsync(id, ct)
            ?? throw new NotFoundException("ModuleItem", id);

        // For learners, compute completion against their enrollment so the row shows the check mark.
        var completed = false;
        var enrollment = await _courses.GetEnrollmentAsync(item.Module.CourseId, requestingUserId, ct);
        if (enrollment is not null)
        {
            var ids = await _items.GetCompletedItemIdsAsync(enrollment.Id, ct);
            completed = ids.Contains(item.Id);
        }
        return Map(item, completed);
    }

    public async Task<ModuleItemDto> CreateAsync(CreateModuleItemDto dto, CancellationToken ct = default)
    {
        var module = await _modules.GetByIdAsync(dto.ModuleId, ct)
            ?? throw new NotFoundException("Module", dto.ModuleId);

        if (!Enum.TryParse<ModuleItemType>(dto.ItemType, ignoreCase: true, out var type))
            throw new ValidationException($"Unknown module item type '{dto.ItemType}'.");

        await ValidateReferenceAsync(type, dto.PageId, dto.QuizId, dto.AssignmentId, module.CourseId, dto.Title, ct);

        var item = new ModuleItem
        {
            ModuleId = dto.ModuleId,
            ItemType = type,
            PageId = type == ModuleItemType.Page ? dto.PageId : null,
            QuizId = type == ModuleItemType.Quiz ? dto.QuizId : null,
            AssignmentId = type == ModuleItemType.Assignment ? dto.AssignmentId : null,
            Title = dto.Title?.Trim(),
            OrderIndex = await _items.GetNextOrderIndexAsync(dto.ModuleId, ct),
            IsPublished = dto.IsPublished,
            IsRequired = dto.IsRequired
        };

        await _items.AddAsync(item, ct);
        await _items.SaveChangesAsync(ct);

        var withRefs = await _items.GetWithRefsAsync(item.Id, ct)!;
        return Map(withRefs!, completed: false);
    }

    public async Task<ModuleItemDto> UpdateAsync(int id, UpdateModuleItemDto dto, CancellationToken ct = default)
    {
        var item = await _items.GetByIdAsync(id, ct)
            ?? throw new NotFoundException("ModuleItem", id);

        if (item.ItemType == ModuleItemType.SubHeader && string.IsNullOrWhiteSpace(dto.Title))
            throw new ValidationException("Sub-header items must have a title.");

        item.Title = dto.Title?.Trim();
        item.IsRequired = dto.IsRequired;
        item.IsPublished = dto.IsPublished;

        await _items.UpdateAsync(item, ct);
        await _items.SaveChangesAsync(ct);

        var withRefs = await _items.GetWithRefsAsync(id, ct)!;
        return Map(withRefs!, completed: false);
    }

    public async Task DeleteAsync(int id, CancellationToken ct = default)
    {
        var item = await _items.GetByIdAsync(id, ct)
            ?? throw new NotFoundException("ModuleItem", id);

        await _items.DeleteAsync(item, ct);
        await _items.SaveChangesAsync(ct);
    }

    public async Task<ModuleItemDto> SetPublishedAsync(int id, bool isPublished, CancellationToken ct = default)
    {
        var item = await _items.GetByIdAsync(id, ct)
            ?? throw new NotFoundException("ModuleItem", id);

        item.IsPublished = isPublished;
        await _items.UpdateAsync(item, ct);
        await _items.SaveChangesAsync(ct);

        var withRefs = await _items.GetWithRefsAsync(id, ct)!;
        return Map(withRefs!, completed: false);
    }

    public async Task ReorderAsync(int moduleId, List<int> orderedIds, CancellationToken ct = default)
    {
        var items = (await _items.GetByModuleAsync(moduleId, ct)).ToList();
        for (var i = 0; i < orderedIds.Count; i++)
        {
            var item = items.FirstOrDefault(x => x.Id == orderedIds[i])
                ?? throw new ValidationException($"Item {orderedIds[i]} does not belong to module {moduleId}.");
            item.OrderIndex = i;
            await _items.UpdateAsync(item, ct);
        }
        await _items.SaveChangesAsync(ct);
    }

    public async Task MarkCompleteAsync(int id, int learnerUserId, int timeSpentMinutes, CancellationToken ct = default)
    {
        var item = await _items.GetWithRefsAsync(id, ct)
            ?? throw new NotFoundException("ModuleItem", id);

        if (item.ItemType == ModuleItemType.SubHeader)
            throw new ValidationException("Sub-headers cannot be marked complete.");

        var enrollment = await _courses.GetEnrollmentAsync(item.Module.CourseId, learnerUserId, ct)
            ?? throw new ForbiddenException("You are not enrolled in this course.");

        // Idempotent — second click on the same item is a no-op rather than an error.
        var existing = await _items.GetProgressAsync(enrollment.Id, item.Id, ct);
        if (existing is not null) return;

        await _items.AddProgressAsync(new ModuleItemProgress
        {
            EnrollmentId = enrollment.Id,
            ModuleItemId = item.Id,
            CompletedAt = DateTime.UtcNow,
            TimeSpentMinutes = timeSpentMinutes
        }, ct);
        await _items.SaveChangesAsync(ct);
    }

    // ── Helpers ───────────────────────────────────────────────────────────────

    private async Task ValidateReferenceAsync(
        ModuleItemType type, int? pageId, int? quizId, int? assignmentId, int courseId, string? title, CancellationToken ct)
    {
        switch (type)
        {
            case ModuleItemType.Page:
                if (pageId is null) throw new ValidationException("Page items must reference a page.");
                var page = await _pages.GetByIdAsync(pageId.Value, ct)
                    ?? throw new NotFoundException("Page", pageId.Value);
                if (page.CourseId != courseId)
                    throw new ValidationException("Page belongs to a different course.");
                break;
            case ModuleItemType.Quiz:
                if (quizId is null) throw new ValidationException("Quiz items must reference a quiz.");
                var quiz = await _quizzes.GetByIdAsync(quizId.Value, ct)
                    ?? throw new NotFoundException("Quiz", quizId.Value);
                if (quiz.CourseId != courseId)
                    throw new ValidationException("Quiz belongs to a different course.");
                break;
            case ModuleItemType.Assignment:
                if (assignmentId is null) throw new ValidationException("Assignment items must reference an assignment.");
                var asg = await _assignments.GetByIdAsync(assignmentId.Value, ct)
                    ?? throw new NotFoundException("Assignment", assignmentId.Value);
                if (asg.CourseId != courseId)
                    throw new ValidationException("Assignment belongs to a different course.");
                break;
            case ModuleItemType.SubHeader:
                if (string.IsNullOrWhiteSpace(title))
                    throw new ValidationException("Sub-header items must have a title.");
                break;
        }
    }

    internal static ModuleItemDto Map(ModuleItem i, bool completed)
    {
        string displayTitle;
        string? subtitle = null;
        string? contentType = null;
        int? durationMinutes = null;
        DateTime? dueDate = null;
        decimal? maxPoints = null;

        switch (i.ItemType)
        {
            case ModuleItemType.Page:
                displayTitle = !string.IsNullOrWhiteSpace(i.Title) ? i.Title! : (i.Page?.Title ?? "Untitled page");
                contentType = i.Page?.ContentType.ToString();
                durationMinutes = i.Page?.DurationMinutes;
                break;
            case ModuleItemType.Quiz:
                displayTitle = !string.IsNullOrWhiteSpace(i.Title) ? i.Title! : (i.Quiz?.Title ?? "Untitled quiz");
                subtitle = i.Quiz is not null ? $"{i.Quiz.MaxAttempts} attempt(s) · {i.Quiz.PassingScorePercent}% to pass" : null;
                maxPoints = i.Quiz?.MaxPoints;
                break;
            case ModuleItemType.Assignment:
                displayTitle = !string.IsNullOrWhiteSpace(i.Title) ? i.Title! : (i.Assignment?.Title ?? "Untitled assignment");
                dueDate = i.Assignment?.DueDate;
                maxPoints = i.Assignment?.MaxPoints;
                break;
            case ModuleItemType.SubHeader:
            default:
                displayTitle = i.Title ?? "Section";
                break;
        }

        return new ModuleItemDto(
            i.Id, i.ModuleId, i.ItemType.ToString(),
            i.PageId, i.QuizId, i.AssignmentId,
            displayTitle, subtitle,
            contentType, durationMinutes, dueDate, maxPoints,
            i.OrderIndex, i.IsPublished, i.IsRequired,
            completed);
    }
}
