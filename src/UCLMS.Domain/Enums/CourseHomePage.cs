namespace UCLMS.Domain.Enums;

/// <summary>
/// Controls what learners see first when they open a course (Canvas-style "course home page").
/// </summary>
public enum CourseHomePage
{
    /// <summary>Show the list of published modules (default).</summary>
    Modules = 0,
    /// <summary>Show the course syllabus.</summary>
    Syllabus = 1,
    /// <summary>Show a chosen content page (the course front page).</summary>
    FrontPage = 2
}
