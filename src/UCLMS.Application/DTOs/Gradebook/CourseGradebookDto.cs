namespace UCLMS.Application.DTOs.Gradebook;

public record CourseGradebookDto(
    int CourseId,
    string CourseTitle,
    List<GradebookColumnDto> Columns,
    List<LearnerGradeRowDto> Rows
);

public record GradebookColumnDto(int Id, string Title, string Type, decimal MaxPoints);

public record LearnerGradeRowDto(int UserId, string LearnerName, string? OrgName, List<GradeCellDto> Grades, decimal? TotalScore, string CompletionStatus);

public record GradeCellDto(int ItemId, decimal? Score, decimal MaxPoints, string Status);
