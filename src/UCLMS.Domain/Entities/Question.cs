using UCLMS.Domain.Common;
using UCLMS.Domain.Enums;

namespace UCLMS.Domain.Entities;

public class Question : BaseEntity
{
    public int QuizId { get; set; }
    public string QuestionText { get; set; } = string.Empty;
    public QuestionType QuestionType { get; set; }
    public int OrderIndex { get; set; }
    public decimal Points { get; set; } = 1;

    public Quiz Quiz { get; set; } = null!;
    public ICollection<QuestionOption> Options { get; set; } = new List<QuestionOption>();
    public ICollection<QuizAttemptAnswer> Answers { get; set; } = new List<QuizAttemptAnswer>();
}
