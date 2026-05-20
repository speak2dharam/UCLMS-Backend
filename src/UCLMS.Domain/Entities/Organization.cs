using UCLMS.Domain.Common;

namespace UCLMS.Domain.Entities;

public class Organization : BaseEntity
{
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string? LogoUrl { get; set; }
    public bool IsActive { get; set; } = true;

    public ICollection<User> Users { get; set; } = new List<User>();
    public ICollection<ObserverOrgAssignment> ObserverAssignments { get; set; } = new List<ObserverOrgAssignment>();
    public ICollection<OrgCourseEnrollment> CourseEnrollments { get; set; } = new List<OrgCourseEnrollment>();
}
