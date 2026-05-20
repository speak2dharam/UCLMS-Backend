namespace UCLMS.Application.DTOs.Gradebook;

public record OrgGradebookDto(
    int OrganizationId,
    string OrganizationName,
    int CourseId,
    string CourseTitle,
    List<LearnerGradeRowDto> Learners
);
