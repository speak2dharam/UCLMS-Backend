using UCLMS.Domain.Common;

namespace UCLMS.Domain.Entities;

public class Assignment : BaseEntity
{
    public int CourseId { get; set; }
    public int? ModuleId { get; set; }
    public string Title { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string? Instructions { get; set; }
    public string? AttachmentUrl { get; set; }
    public DateTime? DueDate { get; set; }
    public decimal MaxPoints { get; set; } = 100;
    public bool IsRequired { get; set; } = true;

    public Course Course { get; set; } = null!;
    public Module? Module { get; set; }
    public ICollection<AssignmentSubmission> Submissions { get; set; } = new List<AssignmentSubmission>();
}
