namespace UCLMS.Domain.Enums;

/// <summary>
/// What a CoursePage holds. A Page can be rich-text article content, a video URL, or a file link —
/// it is the single content unit in the system (Canvas-style "Pages mean everything").
/// </summary>
public enum PageContentType
{
    Article = 0,
    Video = 1,
    File = 2
}
