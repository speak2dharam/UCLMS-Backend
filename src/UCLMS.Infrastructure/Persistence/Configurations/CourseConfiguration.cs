using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UCLMS.Domain.Entities;

namespace UCLMS.Infrastructure.Persistence.Configurations;

public class CourseConfiguration : IEntityTypeConfiguration<Course>
{
    public void Configure(EntityTypeBuilder<Course> builder)
    {
        builder.Property(c => c.Title).HasMaxLength(300).IsRequired();
        builder.Property(c => c.Status).HasConversion<string>().HasMaxLength(20);
        builder.Property(c => c.ThumbnailUrl).HasMaxLength(500);
        builder.Property(c => c.Category).HasMaxLength(100);
        builder.Property(c => c.HomePage).HasConversion<string>().HasMaxLength(20);

        builder.HasOne(c => c.CreatedBy)
            .WithMany()
            .HasForeignKey(c => c.CreatedByUserId)
            .OnDelete(DeleteBehavior.Restrict);

        // A course may designate one of its pages as the front page.
        // NoAction avoids a multiple-cascade-path conflict with CoursePage → Course.
        builder.HasOne(c => c.FrontPage)
            .WithMany()
            .HasForeignKey(c => c.FrontPageId)
            .OnDelete(DeleteBehavior.NoAction);
    }
}
