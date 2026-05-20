using UCLMS.Domain.Common;
using UCLMS.Domain.Enums;

namespace UCLMS.Domain.Entities;

public class Course : BaseEntity
{
    public string Title { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string? ThumbnailUrl { get; set; }
    public string? Category { get; set; }
    public string? Tags { get; set; }
    public CourseStatus Status { get; set; } = CourseStatus.Draft;
    public int PassingScorePercent { get; set; } = 70;
    public int CreatedByUserId { get; set; }

    /// <summary>Rich-text course syllabus shown on the Syllabus tab.</summary>
    public string? Syllabus { get; set; }

    /// <summary>What learners see when they first open the course.</summary>
    public CourseHomePage HomePage { get; set; } = CourseHomePage.Modules;

    /// <summary>The page used as the course front page when <see cref="HomePage"/> is FrontPage.</summary>
    public int? FrontPageId { get; set; }

    /// <summary>Optional course participation window — displayed to learners (Canvas-style).</summary>
    public DateTime? StartDate { get; set; }
    public DateTime? EndDate { get; set; }

    public User CreatedBy { get; set; } = null!;
    public CoursePage? FrontPage { get; set; }
    public ICollection<CoursePage> Pages { get; set; } = new List<CoursePage>();
    public ICollection<Module> Modules { get; set; } = new List<Module>();
    public ICollection<CourseEnrollment> Enrollments { get; set; } = new List<CourseEnrollment>();
    public ICollection<OrgCourseEnrollment> OrgEnrollments { get; set; } = new List<OrgCourseEnrollment>();
    public ICollection<Quiz> Quizzes { get; set; } = new List<Quiz>();
    public ICollection<Assignment> Assignments { get; set; } = new List<Assignment>();
    public ICollection<Certificate> Certificates { get; set; } = new List<Certificate>();
    public ICollection<Announcement> Announcements { get; set; } = new List<Announcement>();
}
