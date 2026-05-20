using UCLMS.Domain.Common;

namespace UCLMS.Domain.Entities;

public class QuizAttempt : BaseEntity
{
    public int QuizId { get; set; }
    public int UserId { get; set; }
    public int AttemptNumber { get; set; } = 1;
    public DateTime StartedAt { get; set; } = DateTime.UtcNow;
    public DateTime? SubmittedAt { get; set; }
    public decimal? Score { get; set; }
    public decimal? MaxScore { get; set; }
    public bool? IsPassed { get; set; }
    public bool IsGraded { get; set; }
    public int? GradedByUserId { get; set; }
    public DateTime? GradedAt { get; set; }

    public Quiz Quiz { get; set; } = null!;
    public User User { get; set; } = null!;
    public User? GradedBy { get; set; }
    public ICollection<QuizAttemptAnswer> Answers { get; set; } = new List<QuizAttemptAnswer>();
}
