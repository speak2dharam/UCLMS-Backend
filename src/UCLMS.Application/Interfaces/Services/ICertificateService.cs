using UCLMS.Application.DTOs.Certificates;

namespace UCLMS.Application.Interfaces.Services;

public interface ICertificateService
{
    Task<CertificateDto> IssueCertificateAsync(IssueCertificateDto dto, int issuedByUserId, CancellationToken ct = default);
    Task<CertificateDto?> GetByVerificationCodeAsync(string code, CancellationToken ct = default);
    Task<IEnumerable<CertificateDto>> GetUserCertificatesAsync(int userId, CancellationToken ct = default);
    Task<IEnumerable<CertificateTemplateDto>> GetTemplatesAsync(CancellationToken ct = default);
    Task<CertificateTemplateDto> UploadTemplateAsync(UploadTemplateDto dto, int createdByUserId, CancellationToken ct = default);
    Task DeleteTemplateAsync(int templateId, CancellationToken ct = default);
}
