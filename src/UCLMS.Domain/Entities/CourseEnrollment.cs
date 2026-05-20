using UCLMS.Domain.Common;
using UCLMS.Domain.Enums;

namespace UCLMS.Domain.Entities;

public class CourseEnrollment : BaseEntity
{
    public int CourseId { get; set; }
    public int UserId { get; set; }
    public DateTime EnrolledAt { get; set; } = DateTime.UtcNow;
    public int? EnrolledByUserId { get; set; }
    public CompletionStatus CompletionStatus { get; set; } = CompletionStatus.NotStarted;
    public DateTime? CompletionDate { get; set; }
    public decimal? FinalScore { get; set; }

    public Course Course { get; set; } = null!;
    public User User { get; set; } = null!;
    public User? EnrolledBy { get; set; }
    public ICollection<ModuleItemProgress> ItemProgress { get; set; } = new List<ModuleItemProgress>();
    public Certificate? Certificate { get; set; }
}
