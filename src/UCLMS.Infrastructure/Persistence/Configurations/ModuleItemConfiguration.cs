using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UCLMS.Domain.Entities;

namespace UCLMS.Infrastructure.Persistence.Configurations;

public class ModuleItemConfiguration : IEntityTypeConfiguration<ModuleItem>
{
    public void Configure(EntityTypeBuilder<ModuleItem> builder)
    {
        builder.Property(i => i.Title).HasMaxLength(300);
        builder.Property(i => i.ItemType).HasConversion<string>().HasMaxLength(20);

        builder.HasOne(i => i.Module)
            .WithMany(m => m.Items)
            .HasForeignKey(i => i.ModuleId)
            .OnDelete(DeleteBehavior.Cascade);

        // Page/Quiz/Assignment relationships all use NoAction — they're descendants of Course just
        // like Modules, so cascading any of them into ModuleItems creates "multiple cascade paths"
        // that SQL Server refuses at schema-creation time (two routes from Course → ModuleItems).
        // The service layer is responsible for removing referencing items before deleting the
        // underlying page/quiz/assignment (PageService.DeleteAsync already does this for pages).
        builder.HasOne(i => i.Page)
            .WithMany(p => p.ModuleReferences)
            .HasForeignKey(i => i.PageId)
            .OnDelete(DeleteBehavior.NoAction);

        builder.HasOne(i => i.Quiz)
            .WithMany()
            .HasForeignKey(i => i.QuizId)
            .OnDelete(DeleteBehavior.NoAction);

        builder.HasOne(i => i.Assignment)
            .WithMany()
            .HasForeignKey(i => i.AssignmentId)
            .OnDelete(DeleteBehavior.NoAction);

        builder.HasIndex(i => new { i.ModuleId, i.OrderIndex });
    }
}
