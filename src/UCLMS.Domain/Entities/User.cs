using UCLMS.Domain.Common;
using UCLMS.Domain.Enums;

namespace UCLMS.Domain.Entities;

public class User : BaseEntity
{
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string? PasswordHash { get; set; }
    public UserRole Role { get; set; }
    public int? OrganizationId { get; set; }
    public bool ObservesAllOrganizations { get; set; } = false;
    public bool IsActive { get; set; } = true;
    public string? InvitationToken { get; set; }
    public DateTime? InvitationSentAt { get; set; }
    public DateTime? InvitationAcceptedAt { get; set; }
    public DateTime? LastLoginAt { get; set; }
    public string? AvatarUrl { get; set; }

    public string FullName => $"{FirstName} {LastName}";

    public Organization? Organization { get; set; }
    public ICollection<ObserverOrgAssignment> ObserverOrgAssignments { get; set; } = new List<ObserverOrgAssignment>();
    public ICollection<CourseEnrollment> CourseEnrollments { get; set; } = new List<CourseEnrollment>();
    public ICollection<Certificate> Certificates { get; set; } = new List<Certificate>();
    public ICollection<Notification> Notifications { get; set; } = new List<Notification>();
}
