using UCLMS.Application.Common.Exceptions;
using UCLMS.Application.DTOs.Certificates;
using UCLMS.Application.Interfaces.Repositories;
using UCLMS.Application.Interfaces.Services;
using UCLMS.Domain.Entities;
using UCLMS.Shared.Helpers;

namespace UCLMS.Application.Services;

public class CertificateService : ICertificateService
{
    private readonly ICertificateRepository _certs;
    private readonly ICourseRepository _courses;
    private readonly IUserRepository _users;

    public CertificateService(
        ICertificateRepository certs,
        ICourseRepository courses,
        IUserRepository users)
    {
        _certs = certs;
        _courses = courses;
        _users = users;
    }

    public async Task<CertificateDto> IssueCertificateAsync(IssueCertificateDto dto, int issuedByUserId, CancellationToken ct = default)
    {
        var user = await _users.GetByIdAsync(dto.UserId, ct)
            ?? throw new NotFoundException("User", dto.UserId);

        var course = await _courses.GetByIdAsync(dto.CourseId, ct)
            ?? throw new NotFoundException("Course", dto.CourseId);

        var template = await _certs.GetTemplateByIdAsync(dto.TemplateId, ct)
            ?? throw new NotFoundException("CertificateTemplate", dto.TemplateId);

        if (!await _courses.IsEnrolledAsync(dto.CourseId, dto.UserId, ct))
            throw new ValidationException("User is not enrolled in this course.");

        var existing = await _certs.GetByUserAndCourseAsync(dto.UserId, dto.CourseId, ct);
        if (existing != null)
            throw new ValidationException("A certificate has already been issued for this user and course.");

        // Get the enrollment to pull final score
        var enrollment = await _courses.GetEnrollmentAsync(dto.CourseId, dto.UserId, ct);

        var certificate = new Certificate
        {
            UserId = dto.UserId,
            CourseId = dto.CourseId,
            TemplateId = dto.TemplateId,
            IssuedAt = DateTime.UtcNow,
            IssuedByUserId = issuedByUserId,
            VerificationCode = TokenHelper.GenerateVerificationCode(),
            FinalScore = enrollment?.FinalScore
        };

        await _certs.AddAsync(certificate, ct);
        await _certs.SaveChangesAsync(ct);

        return new CertificateDto(
            certificate.Id, dto.UserId, user.FullName, dto.CourseId, course.Title,
            certificate.IssuedAt, certificate.VerificationCode,
            certificate.CertificateFileUrl, certificate.FinalScore);
    }

    public async Task<CertificateDto?> GetByVerificationCodeAsync(string code, CancellationToken ct = default)
    {
        var cert = await _certs.GetByVerificationCodeAsync(code, ct);
        if (cert is null) return null;

        return new CertificateDto(
            cert.Id, cert.UserId, cert.User.FullName, cert.CourseId, cert.Course.Title,
            cert.IssuedAt, cert.VerificationCode, cert.CertificateFileUrl, cert.FinalScore);
    }

    public async Task<IEnumerable<CertificateDto>> GetUserCertificatesAsync(int userId, CancellationToken ct = default)
    {
        var certs = await _certs.GetUserCertificatesAsync(userId, ct);
        return certs.Select(c => new CertificateDto(
            c.Id, c.UserId, c.User.FullName, c.CourseId, c.Course.Title,
            c.IssuedAt, c.VerificationCode, c.CertificateFileUrl, c.FinalScore));
    }

    public async Task<IEnumerable<CertificateTemplateDto>> GetTemplatesAsync(CancellationToken ct = default)
    {
        var templates = await _certs.GetTemplatesAsync(ct);
        return templates.Select(t => new CertificateTemplateDto(
            t.Id, t.Name, t.TemplateFileUrl, t.IsDefault, t.CreatedAt));
    }

    public async Task<CertificateTemplateDto> UploadTemplateAsync(UploadTemplateDto dto, int createdByUserId, CancellationToken ct = default)
    {
        // If this is set as default, clear any existing default first
        if (dto.IsDefault)
        {
            var currentDefault = await _certs.GetDefaultTemplateAsync(ct);
            if (currentDefault != null)
            {
                currentDefault.IsDefault = false;
                await _certs.UpdateTemplateAsync(currentDefault, ct);
            }
        }

        var template = new CertificateTemplate
        {
            Name = dto.Name,
            TemplateFileUrl = dto.TemplateFileUrl,
            IsDefault = dto.IsDefault,
            CreatedByUserId = createdByUserId
        };

        await _certs.AddTemplateAsync(template, ct);
        await _certs.SaveChangesAsync(ct);

        return new CertificateTemplateDto(
            template.Id, template.Name, template.TemplateFileUrl,
            template.IsDefault, template.CreatedAt);
    }

    public async Task DeleteTemplateAsync(int templateId, CancellationToken ct = default)
    {
        var template = await _certs.GetTemplateByIdAsync(templateId, ct)
            ?? throw new NotFoundException("CertificateTemplate", templateId);

        if (await _certs.ExistsAsync(c => c.TemplateId == templateId, ct))
            throw new ValidationException("Cannot delete a template that has issued certificates.");

        await _certs.DeleteTemplateAsync(template, ct);
        await _certs.SaveChangesAsync(ct);
    }
}
