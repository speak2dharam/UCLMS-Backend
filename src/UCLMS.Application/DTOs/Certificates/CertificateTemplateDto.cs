namespace UCLMS.Application.DTOs.Certificates;

public record CertificateTemplateDto(int Id, string Name, string TemplateFileUrl, bool IsDefault, DateTime CreatedAt);
