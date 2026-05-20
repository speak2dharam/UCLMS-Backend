using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UCLMS.Domain.Entities;

namespace UCLMS.Infrastructure.Persistence.Configurations;

public class AssignmentSubmissionConfiguration : IEntityTypeConfiguration<AssignmentSubmission>
{
    public void Configure(EntityTypeBuilder<AssignmentSubmission> builder)
    {
        builder.HasIndex(s => new { s.AssignmentId, s.UserId }).IsUnique();
        builder.Property(s => s.Status).HasConversion<string>().HasMaxLength(20);
        builder.Property(s => s.Score).HasPrecision(8, 2);
        builder.Property(s => s.FileUrl).HasMaxLength(500);

        builder.HasOne(s => s.User)
            .WithMany()
            .HasForeignKey(s => s.UserId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.HasOne(s => s.GradedBy)
            .WithMany()
            .HasForeignKey(s => s.GradedByUserId)
            .OnDelete(DeleteBehavior.SetNull);
    }
}
