using UCLMS.Domain.Common;
using UCLMS.Domain.Enums;

namespace UCLMS.Domain.Entities;

/// <summary>
/// A row inside a Module. ModuleItems are how learners experience a module — each one either
/// references existing course content (a Page, Quiz, or Assignment) or is a label-only SubHeader.
/// </summary>
public class ModuleItem : BaseEntity
{
    public int ModuleId { get; set; }
    public ModuleItemType ItemType { get; set; }

    /// <summary>Populated for ItemType=Page.</summary>
    public int? PageId { get; set; }

    /// <summary>Populated for ItemType=Quiz.</summary>
    public int? QuizId { get; set; }

    /// <summary>Populated for ItemType=Assignment.</summary>
    public int? AssignmentId { get; set; }

    /// <summary>Optional display title override (always required for SubHeader rows).</summary>
    public string? Title { get; set; }

    public int OrderIndex { get; set; }
    public bool IsPublished { get; set; }
    public bool IsRequired { get; set; } = true;

    public Module Module { get; set; } = null!;
    public CoursePage? Page { get; set; }
    public Quiz? Quiz { get; set; }
    public Assignment? Assignment { get; set; }

    public ICollection<ModuleItemProgress> Progress { get; set; } = new List<ModuleItemProgress>();
}
