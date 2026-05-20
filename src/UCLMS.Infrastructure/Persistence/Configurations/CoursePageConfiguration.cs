using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UCLMS.Domain.Entities;

namespace UCLMS.Infrastructure.Persistence.Configurations;

public class CoursePageConfiguration : IEntityTypeConfiguration<CoursePage>
{
    public void Configure(EntityTypeBuilder<CoursePage> builder)
    {
        builder.Property(p => p.Title).HasMaxLength(300).IsRequired();

        builder.HasOne(p => p.Course)
            .WithMany(c => c.Pages)
            .HasForeignKey(p => p.CourseId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(p => p.CreatedBy)
            .WithMany()
            .HasForeignKey(p => p.CreatedByUserId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}
