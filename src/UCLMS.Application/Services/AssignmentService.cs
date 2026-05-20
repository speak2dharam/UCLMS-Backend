using UCLMS.Application.Common.Exceptions;
using UCLMS.Application.DTOs.Assignments;
using UCLMS.Application.Interfaces.Repositories;
using UCLMS.Application.Interfaces.Services;
using UCLMS.Domain.Entities;
using UCLMS.Domain.Enums;
using UCLMS.Shared.Wrappers;

namespace UCLMS.Application.Services;

public class AssignmentService : IAssignmentService
{
    private readonly IAssignmentRepository _assignments;
    private readonly ICourseRepository _courses;
    private readonly IModuleItemRepository _items;
    private readonly INotificationService _notifications;

    public AssignmentService(
        IAssignmentRepository assignments,
        ICourseRepository courses,
        IModuleItemRepository items,
        INotificationService notifications)
    {
        _assignments = assignments;
        _courses = courses;
        _items = items;
        _notifications = notifications;
    }

    public async Task<IEnumerable<AssignmentDetailDto>> GetByCourseAsync(int courseId, CancellationToken ct = default)
    {
        var assignments = await _assignments.GetByCourseAsync(courseId, ct);
        return assignments.Select(MapToDetail);
    }

    public async Task<AssignmentDetailDto> GetByIdAsync(int id, CancellationToken ct = default)
    {
        var assignment = await _assignments.GetByIdAsync(id, ct)
            ?? throw new NotFoundException("Assignment", id);

        return MapToDetail(assignment);
    }

    public async Task<AssignmentDetailDto> CreateAsync(CreateAssignmentDto dto, CancellationToken ct = default)
    {
        if (!await _courses.ExistsAsync(c => c.Id == dto.CourseId, ct))
            throw new NotFoundException("Course", dto.CourseId);

        var assignment = new Assignment
        {
            CourseId = dto.CourseId,
            ModuleId = dto.ModuleId,
            Title = dto.Title,
            Description = dto.Description,
            Instructions = dto.Instructions,
            AttachmentUrl = dto.AttachmentUrl,
            DueDate = dto.DueDate,
            MaxPoints = dto.MaxPoints,
            IsRequired = dto.IsRequired
        };

        await _assignments.AddAsync(assignment, ct);
        await _assignments.SaveChangesAsync(ct);

        return MapToDetail(assignment);
    }

    public async Task<AssignmentDetailDto> UpdateAsync(int id, UpdateAssignmentDto dto, CancellationToken ct = default)
    {
        var assignment = await _assignments.GetByIdAsync(id, ct)
            ?? throw new NotFoundException("Assignment", id);

        assignment.Title = dto.Title;
        assignment.Description = dto.Description;
        assignment.Instructions = dto.Instructions;
        assignment.AttachmentUrl = dto.AttachmentUrl;
        assignment.DueDate = dto.DueDate;
        assignment.MaxPoints = dto.MaxPoints;
        assignment.IsRequired = dto.IsRequired;

        await _assignments.UpdateAsync(assignment, ct);
        await _assignments.SaveChangesAsync(ct);

        return MapToDetail(assignment);
    }

    public async Task DeleteAsync(int id, CancellationToken ct = default)
    {
        var assignment = await _assignments.GetByIdAsync(id, ct)
            ?? throw new NotFoundException("Assignment", id);

        // ModuleItems → Assignment FK is NoAction (single-cascade-path rule); strip references first.
        await _items.RemoveByAssignmentAsync(assignment.Id, ct);
        await _assignments.DeleteAsync(assignment, ct);
        await _assignments.SaveChangesAsync(ct);
    }

    public async Task<SubmissionDto> SubmitAsync(int assignmentId, SubmitAssignmentDto dto, int userId, CancellationToken ct = default)
    {
        var assignment = await _assignments.GetByIdAsync(assignmentId, ct)
            ?? throw new NotFoundException("Assignment", assignmentId);

        if (assignment.DueDate.HasValue && DateTime.UtcNow > assignment.DueDate.Value)
            throw new ValidationException("The submission deadline has passed.");

        var existing = await _assignments.GetSubmissionAsync(assignmentId, userId, ct);
        if (existing != null)
            throw new ValidationException("You have already submitted this assignment.");

        if (string.IsNullOrWhiteSpace(dto.TextContent) && string.IsNullOrWhiteSpace(dto.FileUrl))
            throw new ValidationException("Submission must include either text content or a file.");

        var submission = new AssignmentSubmission
        {
            AssignmentId = assignmentId,
            UserId = userId,
            SubmittedAt = DateTime.UtcNow,
            TextContent = dto.TextContent,
            FileUrl = dto.FileUrl,
            Status = SubmissionStatus.Submitted
        };

        await _assignments.AddSubmissionAsync(submission, ct);
        await _assignments.SaveAsync(ct);

        // Re-fetch with navigation props populated for the DTO
        var saved = await _assignments.GetSubmissionByIdAsync(submission.Id, ct)!;
        return MapSubmission(saved!);
    }

    public async Task<SubmissionDto> GradeAsync(int submissionId, GradeSubmissionDto dto, int gradedByUserId, CancellationToken ct = default)
    {
        var submission = await _assignments.GetSubmissionByIdAsync(submissionId, ct)
            ?? throw new NotFoundException("AssignmentSubmission", submissionId);

        if (submission.Status == SubmissionStatus.Graded)
            throw new ValidationException("This submission has already been graded.");

        if (dto.Score < 0 || dto.Score > submission.Assignment.MaxPoints)
            throw new ValidationException($"Score must be between 0 and {submission.Assignment.MaxPoints}.");

        submission.Score = dto.Score;
        submission.Feedback = dto.Feedback;
        submission.GradedByUserId = gradedByUserId;
        submission.GradedAt = DateTime.UtcNow;
        submission.Status = SubmissionStatus.Graded;

        await _assignments.UpdateSubmissionAsync(submission, ct);
        await _assignments.SaveAsync(ct);

        await _notifications.SendAsync(
            submission.UserId,
            "Assignment Graded",
            $"Your submission for '{submission.Assignment.Title}' has been graded. Score: {dto.Score}/{submission.Assignment.MaxPoints}.",
            NotificationType.AssignmentGraded,
            "Assignment", submission.AssignmentId, ct);

        return MapSubmission(submission);
    }

    public async Task<PagedResult<SubmissionDto>> GetPendingGradingAsync(int instructorUserId, CancellationToken ct = default)
    {
        var submissions = (await _assignments.GetPendingGradingAsync(instructorUserId, ct)).ToList();

        return new PagedResult<SubmissionDto>
        {
            Items = submissions.Select(MapSubmission).ToList(),
            TotalCount = submissions.Count,
            Page = 1,
            PageSize = submissions.Count
        };
    }

    private static AssignmentDetailDto MapToDetail(Assignment a) => new(
        a.Id, a.CourseId, a.ModuleId, a.Title, a.Description,
        a.Instructions, a.AttachmentUrl, a.DueDate, a.MaxPoints, a.IsRequired);

    private static SubmissionDto MapSubmission(AssignmentSubmission s) => new(
        s.Id,
        s.AssignmentId,
        s.Assignment.Title,
        s.UserId,
        s.User.FullName,
        s.SubmittedAt,
        s.TextContent,
        s.FileUrl,
        s.Score,
        s.Assignment.MaxPoints,
        s.Feedback,
        s.Status.ToString());
}
