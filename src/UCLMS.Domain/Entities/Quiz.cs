using UCLMS.Domain.Common;

namespace UCLMS.Domain.Entities;

public class Quiz : BaseEntity
{
    public int CourseId { get; set; }
    public int? ModuleId { get; set; }
    public string Title { get; set; } = string.Empty;
    public string? Description { get; set; }
    public int? TimeLimitMinutes { get; set; }
    public int MaxAttempts { get; set; } = 1;
    public int PassingScorePercent { get; set; } = 70;
    public bool RandomizeQuestions { get; set; }
    public bool IsRequired { get; set; } = true;
    public decimal MaxPoints { get; set; } = 100;

    public Course Course { get; set; } = null!;
    public Module? Module { get; set; }
    public ICollection<Question> Questions { get; set; } = new List<Question>();
    public ICollection<QuizAttempt> Attempts { get; set; } = new List<QuizAttempt>();
}
