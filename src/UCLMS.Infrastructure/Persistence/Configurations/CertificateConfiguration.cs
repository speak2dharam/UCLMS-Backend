using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UCLMS.Domain.Entities;

namespace UCLMS.Infrastructure.Persistence.Configurations;

public class CertificateConfiguration : IEntityTypeConfiguration<Certificate>
{
    public void Configure(EntityTypeBuilder<Certificate> builder)
    {
        builder.HasIndex(c => new { c.UserId, c.CourseId }).IsUnique();
        builder.HasIndex(c => c.VerificationCode).IsUnique();
        builder.Property(c => c.VerificationCode).HasMaxLength(100).IsRequired();
        builder.Property(c => c.CertificateFileUrl).HasMaxLength(500);
        builder.Property(c => c.FinalScore).HasPrecision(5, 2);

        builder.HasOne(c => c.User)
            .WithMany(u => u.Certificates)
            .HasForeignKey(c => c.UserId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.HasOne(c => c.IssuedBy)
            .WithMany()
            .HasForeignKey(c => c.IssuedByUserId)
            .OnDelete(DeleteBehavior.NoAction);
    }
}
