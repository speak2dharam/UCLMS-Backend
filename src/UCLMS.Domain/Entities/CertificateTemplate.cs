using UCLMS.Domain.Common;

namespace UCLMS.Domain.Entities;

public class CertificateTemplate : BaseEntity
{
    public string Name { get; set; } = string.Empty;
    public string TemplateFileUrl { get; set; } = string.Empty;
    public bool IsDefault { get; set; }
    public int CreatedByUserId { get; set; }

    public User CreatedBy { get; set; } = null!;
    public ICollection<Certificate> Certificates { get; set; } = new List<Certificate>();
}
