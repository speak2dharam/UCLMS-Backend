using UCLMS.Domain.Common;
using UCLMS.Domain.Enums;

namespace UCLMS.Domain.Entities;

/// <summary>
/// The universal content unit (Canvas-style): a page can hold rich-text article content,
/// a video URL, or a file link. Pages are course-level; modules reference them via
/// <see cref="ModuleItem"/>. Any page can also be designated the course front page.
/// </summary>
public class CoursePage : BaseEntity
{
    public int CourseId { get; set; }
    public string Title { get; set; } = string.Empty;

    /// <summary>What kind of content this page holds — drives which field below is used.</summary>
    public PageContentType ContentType { get; set; } = PageContentType.Article;

    /// <summary>Rich HTML body (used when <see cref="ContentType"/> = Article).</summary>
    public string? Body { get; set; }

    /// <summary>Direct video URL or embed link (used when <see cref="ContentType"/> = Video).</summary>
    public string? VideoUrl { get; set; }

    /// <summary>Blob/CDN URL to a downloadable file (used when <see cref="ContentType"/> = File).</summary>
    public string? FileUrl { get; set; }

    /// <summary>Optional estimated time-to-complete shown to learners.</summary>
    public int? DurationMinutes { get; set; }

    public bool IsPublished { get; set; }
    public int OrderIndex { get; set; }
    public int CreatedByUserId { get; set; }

    public Course Course { get; set; } = null!;
    public User CreatedBy { get; set; } = null!;
    public ICollection<ModuleItem> ModuleReferences { get; set; } = new List<ModuleItem>();
}
