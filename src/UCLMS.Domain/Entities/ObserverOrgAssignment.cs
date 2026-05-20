using UCLMS.Domain.Common;

namespace UCLMS.Domain.Entities;

public class ObserverOrgAssignment : BaseEntity
{
    public int ObserverUserId { get; set; }
    public int OrganizationId { get; set; }
    public DateTime AssignedAt { get; set; } = DateTime.UtcNow;

    public User ObserverUser { get; set; } = null!;
    public Organization Organization { get; set; } = null!;
}
