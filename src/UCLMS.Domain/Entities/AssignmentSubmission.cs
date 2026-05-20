using UCLMS.Domain.Common;
using UCLMS.Domain.Enums;

namespace UCLMS.Domain.Entities;

public class AssignmentSubmission : BaseEntity
{
    public int AssignmentId { get; set; }
    public int UserId { get; set; }
    public DateTime SubmittedAt { get; set; } = DateTime.UtcNow;
    public string? TextContent { get; set; }
    public string? FileUrl { get; set; }
    public decimal? Score { get; set; }
    public string? Feedback { get; set; }
    public int? GradedByUserId { get; set; }
    public DateTime? GradedAt { get; set; }
    public SubmissionStatus Status { get; set; } = SubmissionStatus.Submitted;

    public Assignment Assignment { get; set; } = null!;
    public User User { get; set; } = null!;
    public User? GradedBy { get; set; }
}
