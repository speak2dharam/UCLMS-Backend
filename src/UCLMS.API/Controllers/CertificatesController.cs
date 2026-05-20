using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UCLMS.Application.DTOs.Certificates;
using UCLMS.Application.Interfaces.Services;
using UCLMS.Shared.Constants;
using UCLMS.Shared.Wrappers;

namespace UCLMS.API.Controllers;

public class CertificatesController : BaseController
{
    private readonly ICertificateService _certs;

    public CertificatesController(ICertificateService certs) => _certs = certs;

    [HttpGet("my")]
    public async Task<ApiResponse<IEnumerable<CertificateDto>>> MyCertificates(CancellationToken ct)
        => ApiResponse<IEnumerable<CertificateDto>>.Ok(await _certs.GetUserCertificatesAsync(CurrentUserId, ct));

    [HttpGet("verify/{code}")]
    [AllowAnonymous]
    public async Task<ApiResponse<CertificateDto>> Verify(string code, CancellationToken ct)
        => ApiResponse<CertificateDto>.Ok(await _certs.GetByVerificationCodeAsync(code, ct) ?? throw new KeyNotFoundException("Certificate not found."));

    [HttpPost("issue")]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse<CertificateDto>> Issue([FromBody] IssueCertificateDto dto, CancellationToken ct)
        => ApiResponse<CertificateDto>.Ok(await _certs.IssueCertificateAsync(dto, CurrentUserId, ct));

    [HttpGet("templates")]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse<IEnumerable<CertificateTemplateDto>>> GetTemplates(CancellationToken ct)
        => ApiResponse<IEnumerable<CertificateTemplateDto>>.Ok(await _certs.GetTemplatesAsync(ct));

    [HttpPost("templates")]
    [Authorize(Roles = AppConstants.Roles.PlatformAdmin)]
    public async Task<ApiResponse<CertificateTemplateDto>> UploadTemplate([FromBody] UploadTemplateDto dto, CancellationToken ct)
        => ApiResponse<CertificateTemplateDto>.Ok(await _certs.UploadTemplateAsync(dto, CurrentUserId, ct));

    [HttpDelete("templates/{id}")]
    [Authorize(Roles = AppConstants.Roles.PlatformAdmin)]
    public async Task<ApiResponse> DeleteTemplate(int id, CancellationToken ct)
    {
        await _certs.DeleteTemplateAsync(id, ct);
        return ApiResponse.OkNoData("Template deleted.");
    }
}
