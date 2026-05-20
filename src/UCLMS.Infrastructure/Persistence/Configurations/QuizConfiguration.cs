using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UCLMS.Domain.Entities;

namespace UCLMS.Infrastructure.Persistence.Configurations;

public class QuizConfiguration : IEntityTypeConfiguration<Quiz>
{
    public void Configure(EntityTypeBuilder<Quiz> builder)
    {
        builder.Property(q => q.MaxPoints).HasPrecision(8, 2);
    }
}

public class QuestionConfiguration : IEntityTypeConfiguration<Question>
{
    public void Configure(EntityTypeBuilder<Question> builder)
    {
        builder.Property(q => q.Points).HasPrecision(6, 2);
    }
}

public class QuizAttemptAnswerConfiguration : IEntityTypeConfiguration<QuizAttemptAnswer>
{
    public void Configure(EntityTypeBuilder<QuizAttemptAnswer> builder)
    {
        builder.Property(a => a.PointsEarned).HasPrecision(6, 2);

        // QuizAttempts → QuizAttemptAnswers (CASCADE) AND Questions → QuizAttemptAnswers
        // causes multiple cascade paths from Quizzes. Use NoAction on the Question side.
        builder.HasOne(a => a.Question)
            .WithMany(q => q.Answers)
            .HasForeignKey(a => a.QuestionId)
            .OnDelete(DeleteBehavior.NoAction);
    }
}

public class AssignmentConfiguration : IEntityTypeConfiguration<Assignment>
{
    public void Configure(EntityTypeBuilder<Assignment> builder)
    {
        builder.Property(a => a.MaxPoints).HasPrecision(8, 2);
        builder.Property(a => a.AttachmentUrl).HasMaxLength(500);

        builder.HasOne(a => a.Course)
            .WithMany(c => c.Assignments)
            .HasForeignKey(a => a.CourseId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
