using UCLMS.Domain.Common;

namespace UCLMS.Domain.Entities;

public class QuizAttemptAnswer : BaseEntity
{
    public int QuizAttemptId { get; set; }
    public int QuestionId { get; set; }
    public string? SelectedOptionIds { get; set; }
    public string? TextAnswer { get; set; }
    public bool? IsCorrect { get; set; }
    public decimal? PointsEarned { get; set; }

    public QuizAttempt QuizAttempt { get; set; } = null!;
    public Question Question { get; set; } = null!;
}
