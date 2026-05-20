namespace UCLMS.Application.DTOs.Certificates;

public record CertificateDto(
    int Id,
    int UserId,
    string LearnerName,
    int CourseId,
    string CourseTitle,
    DateTime IssuedAt,
    string VerificationCode,
    string? CertificateFileUrl,
    decimal? FinalScore
);
