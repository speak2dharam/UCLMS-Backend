using UCLMS.Domain.Common;

namespace UCLMS.Domain.Entities;

public class Certificate : BaseEntity
{
    public int UserId { get; set; }
    public int CourseId { get; set; }
    public int TemplateId { get; set; }
    public DateTime IssuedAt { get; set; } = DateTime.UtcNow;
    public int? IssuedByUserId { get; set; }
    public string VerificationCode { get; set; } = string.Empty;
    public string? CertificateFileUrl { get; set; }
    public decimal? FinalScore { get; set; }

    public User User { get; set; } = null!;
    public Course Course { get; set; } = null!;
    public CertificateTemplate Template { get; set; } = null!;
    public User? IssuedBy { get; set; }
}
