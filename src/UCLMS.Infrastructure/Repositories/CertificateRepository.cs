using Microsoft.EntityFrameworkCore;
using UCLMS.Application.Interfaces.Repositories;
using UCLMS.Domain.Entities;
using UCLMS.Infrastructure.Persistence;

namespace UCLMS.Infrastructure.Repositories;

public class CertificateRepository : BaseRepository<Certificate>, ICertificateRepository
{
    public CertificateRepository(UCLMSDbContext db) : base(db) { }

    public async Task<Certificate?> GetByVerificationCodeAsync(string code, CancellationToken ct = default) =>
        await _db.Certificates
            .Include(c => c.User)
            .Include(c => c.Course)
            .FirstOrDefaultAsync(c => c.VerificationCode == code, ct);

    public async Task<Certificate?> GetByUserAndCourseAsync(int userId, int courseId, CancellationToken ct = default) =>
        await _db.Certificates
            .FirstOrDefaultAsync(c => c.UserId == userId && c.CourseId == courseId, ct);

    public async Task<IEnumerable<CertificateTemplate>> GetTemplatesAsync(CancellationToken ct = default) =>
        await _db.CertificateTemplates.OrderByDescending(t => t.IsDefault).ToListAsync(ct);

    public async Task<CertificateTemplate?> GetDefaultTemplateAsync(CancellationToken ct = default) =>
        await _db.CertificateTemplates.FirstOrDefaultAsync(t => t.IsDefault, ct);

    public async Task<IEnumerable<Certificate>> GetUserCertificatesAsync(int userId, CancellationToken ct = default) =>
        await _db.Certificates
            .Include(c => c.User)
            .Include(c => c.Course)
            .Where(c => c.UserId == userId)
            .ToListAsync(ct);

    public async Task<CertificateTemplate?> GetTemplateByIdAsync(int id, CancellationToken ct = default) =>
        await _db.CertificateTemplates.FirstOrDefaultAsync(t => t.Id == id, ct);

    public async Task AddTemplateAsync(CertificateTemplate template, CancellationToken ct = default) =>
        await _db.CertificateTemplates.AddAsync(template, ct);

    public Task UpdateTemplateAsync(CertificateTemplate template, CancellationToken ct = default)
    {
        _db.CertificateTemplates.Update(template);
        return Task.CompletedTask;
    }

    public Task DeleteTemplateAsync(CertificateTemplate template, CancellationToken ct = default)
    {
        _db.CertificateTemplates.Remove(template);
        return Task.CompletedTask;
    }
}
