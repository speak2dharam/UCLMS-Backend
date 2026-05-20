using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UCLMS.Domain.Entities;

namespace UCLMS.Infrastructure.Persistence.Configurations;

public class ModuleItemProgressConfiguration : IEntityTypeConfiguration<ModuleItemProgress>
{
    public void Configure(EntityTypeBuilder<ModuleItemProgress> builder)
    {
        // One progress row per (enrollment, item) — completing an item again is a no-op upsert.
        builder.HasIndex(p => new { p.EnrollmentId, p.ModuleItemId }).IsUnique();

        builder.HasOne(p => p.Enrollment)
            .WithMany(e => e.ItemProgress)
            .HasForeignKey(p => p.EnrollmentId)
            .OnDelete(DeleteBehavior.Cascade);

        // ModuleItem cascade comes via Module → Course; using NoAction here avoids a multi-cascade
        // path and matches the InitialCreate snapshot's behaviour for LessonProgress.
        builder.HasOne(p => p.ModuleItem)
            .WithMany(i => i.Progress)
            .HasForeignKey(p => p.ModuleItemId)
            .OnDelete(DeleteBehavior.NoAction);
    }
}
