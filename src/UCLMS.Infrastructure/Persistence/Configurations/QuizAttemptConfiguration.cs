using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UCLMS.Domain.Entities;

namespace UCLMS.Infrastructure.Persistence.Configurations;

public class QuizAttemptConfiguration : IEntityTypeConfiguration<QuizAttempt>
{
    public void Configure(EntityTypeBuilder<QuizAttempt> builder)
    {
        builder.Property(a => a.Score).HasPrecision(8, 2);
        builder.Property(a => a.MaxScore).HasPrecision(8, 2);

        builder.HasOne(a => a.User)
            .WithMany()
            .HasForeignKey(a => a.UserId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.HasOne(a => a.GradedBy)
            .WithMany()
            .HasForeignKey(a => a.GradedByUserId)
            .OnDelete(DeleteBehavior.SetNull);
    }
}
