using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UCLMS.Domain.Entities;

namespace UCLMS.Infrastructure.Persistence.Configurations;

public class ObserverOrgAssignmentConfiguration : IEntityTypeConfiguration<ObserverOrgAssignment>
{
    public void Configure(EntityTypeBuilder<ObserverOrgAssignment> builder)
    {
        builder.HasIndex(o => new { o.ObserverUserId, o.OrganizationId }).IsUnique();

        builder.HasOne(o => o.ObserverUser)
            .WithMany(u => u.ObserverOrgAssignments)
            .HasForeignKey(o => o.ObserverUserId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(o => o.Organization)
            .WithMany(org => org.ObserverAssignments)
            .HasForeignKey(o => o.OrganizationId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
