namespace UCLMS.Application.DTOs.Assignments;

public record UpdateAssignmentDto(
    string Title,
    string? Description,
    string? Instructions,
    string? AttachmentUrl,
    DateTime? DueDate,
    decimal MaxPoints,
    bool IsRequired
);
