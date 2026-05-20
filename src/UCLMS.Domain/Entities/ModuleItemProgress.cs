using UCLMS.Domain.Common;

namespace UCLMS.Domain.Entities;

/// <summary>
/// Tracks one learner's completion of one module item — replaces the previous lesson-based progress.
/// One row per (enrollment, item); created when the learner marks the item complete.
/// </summary>
public class ModuleItemProgress : BaseEntity
{
    public int EnrollmentId { get; set; }
    public int ModuleItemId { get; set; }
    public DateTime CompletedAt { get; set; } = DateTime.UtcNow;
    public int TimeSpentMinutes { get; set; }

    public CourseEnrollment Enrollment { get; set; } = null!;
    public ModuleItem ModuleItem { get; set; } = null!;
}
