namespace UCLMS.Application.DTOs.Assignments;

public record SubmissionDto(
    int Id,
    int AssignmentId,
    string AssignmentTitle,
    int UserId,
    string LearnerName,
    DateTime SubmittedAt,
    string? TextContent,
    string? FileUrl,
    decimal? Score,
    decimal MaxPoints,
    string? Feedback,
    string Status
);
