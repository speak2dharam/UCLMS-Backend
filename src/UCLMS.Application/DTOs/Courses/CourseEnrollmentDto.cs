namespace UCLMS.Application.DTOs.Courses;

public record CourseEnrollmentDto(
    int Id,
    int UserId,
    string UserFullName,
    string UserEmail,
    string UserRole,
    string? OrganizationName,
    DateTime EnrolledAt,
    string CompletionStatus,
    DateTime? CompletionDate,
    decimal? FinalScore
);
