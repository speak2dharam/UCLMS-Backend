using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UCLMS.Domain.Entities;

namespace UCLMS.Infrastructure.Persistence.Configurations;

public class CourseEnrollmentConfiguration : IEntityTypeConfiguration<CourseEnrollment>
{
    public void Configure(EntityTypeBuilder<CourseEnrollment> builder)
    {
        builder.HasIndex(e => new { e.CourseId, e.UserId }).IsUnique();
        builder.Property(e => e.CompletionStatus).HasConversion<string>().HasMaxLength(20);
        builder.Property(e => e.FinalScore).HasPrecision(5, 2);

        builder.HasOne(e => e.User)
            .WithMany(u => u.CourseEnrollments)
            .HasForeignKey(e => e.UserId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.HasOne(e => e.EnrolledBy)
            .WithMany()
            .HasForeignKey(e => e.EnrolledByUserId)
            .OnDelete(DeleteBehavior.SetNull);
    }
}
