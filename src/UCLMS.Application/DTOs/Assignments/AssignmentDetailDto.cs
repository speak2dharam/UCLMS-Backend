namespace UCLMS.Application.DTOs.Assignments;

public record AssignmentDetailDto(
    int Id,
    int CourseId,
    int? ModuleId,
    string Title,
    string? Description,
    string? Instructions,
    string? AttachmentUrl,
    DateTime? DueDate,
    decimal MaxPoints,
    bool IsRequired
);
