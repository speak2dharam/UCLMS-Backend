using UCLMS.Domain.Common;

namespace UCLMS.Domain.Entities;

public class Announcement : BaseEntity
{
    public int CourseId { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
    public int CreatedByUserId { get; set; }

    public Course Course { get; set; } = null!;
    public User CreatedBy { get; set; } = null!;
}
