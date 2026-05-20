using UCLMS.Domain.Common;

namespace UCLMS.Domain.Entities;

/// <summary>
/// A module is an ordered, named section inside a course. It does not own content directly —
/// it owns <see cref="ModuleItem"/> rows that reference pages, quizzes, assignments, or sub-headers.
/// </summary>
public class Module : BaseEntity
{
    public int CourseId { get; set; }
    public string Title { get; set; } = string.Empty;
    public string? Description { get; set; }
    public int OrderIndex { get; set; }

    /// <summary>
    /// When false the module is hidden from learners — lets instructors publish
    /// a course module-by-module (Canvas-style staged release).
    /// </summary>
    public bool IsPublished { get; set; }

    public Course Course { get; set; } = null!;
    public ICollection<ModuleItem> Items { get; set; } = new List<ModuleItem>();
}
