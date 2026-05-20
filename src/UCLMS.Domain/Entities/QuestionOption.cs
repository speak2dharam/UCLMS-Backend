using UCLMS.Domain.Common;

namespace UCLMS.Domain.Entities;

public class QuestionOption : BaseEntity
{
    public int QuestionId { get; set; }
    public string OptionText { get; set; } = string.Empty;
    public bool IsCorrect { get; set; }
    public int OrderIndex { get; set; }

    public Question Question { get; set; } = null!;
}
