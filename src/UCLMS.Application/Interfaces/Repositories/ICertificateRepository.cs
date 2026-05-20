using UCLMS.Domain.Entities;

namespace UCLMS.Application.Interfaces.Repositories;

public interface ICertificateRepository : IBaseRepository<Certificate>
{
    Task<Certificate?> GetByVerificationCodeAsync(string code, CancellationToken ct = default);
    Task<Certificate?> GetByUserAndCourseAsync(int userId, int courseId, CancellationToken ct = default);
    Task<IEnumerable<Certificate>> GetUserCertificatesAsync(int userId, CancellationToken ct = default);
    Task<IEnumerable<CertificateTemplate>> GetTemplatesAsync(CancellationToken ct = default);
    Task<CertificateTemplate?> GetDefaultTemplateAsync(CancellationToken ct = default);
    Task<CertificateTemplate?> GetTemplateByIdAsync(int id, CancellationToken ct = default);
    Task AddTemplateAsync(CertificateTemplate template, CancellationToken ct = default);
    Task UpdateTemplateAsync(CertificateTemplate template, CancellationToken ct = default);
    Task DeleteTemplateAsync(CertificateTemplate template, CancellationToken ct = default);
}
