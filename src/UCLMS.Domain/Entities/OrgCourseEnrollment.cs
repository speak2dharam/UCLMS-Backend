using UCLMS.Domain.Common;

namespace UCLMS.Domain.Entities;

public class OrgCourseEnrollment : BaseEntity
{
    public int CourseId { get; set; }
    public int OrganizationId { get; set; }
    public DateTime EnrolledAt { get; set; } = DateTime.UtcNow;
    public int? EnrolledByUserId { get; set; }

    public Course Course { get; set; } = null!;
    public Organization Organization { get; set; } = null!;
    public User? EnrolledBy { get; set; }
}
