using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UCLMS.Application.DTOs.Organizations;
using UCLMS.Application.Interfaces.Services;
using UCLMS.Shared.Constants;
using UCLMS.Shared.Wrappers;

namespace UCLMS.API.Controllers;

public class OrganizationsController : BaseController
{
    private readonly IOrganizationService _orgs;

    public OrganizationsController(IOrganizationService orgs) => _orgs = orgs;

    [HttpGet]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse<PagedResult<OrgListDto>>> GetAll([FromQuery] int page = 1, [FromQuery] int pageSize = 20, CancellationToken ct = default)
        => ApiResponse<PagedResult<OrgListDto>>.Ok(await _orgs.GetAllAsync(page, pageSize, ct));

    [HttpGet("{id}")]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse<OrgDetailDto>> GetById(int id, CancellationToken ct)
        => ApiResponse<OrgDetailDto>.Ok(await _orgs.GetByIdAsync(id, ct));

    [HttpPost]
    [Authorize(Roles = AppConstants.Roles.PlatformAdmin)]
    public async Task<ApiResponse<OrgDetailDto>> Create([FromBody] CreateOrgDto dto, CancellationToken ct)
        => ApiResponse<OrgDetailDto>.Ok(await _orgs.CreateAsync(dto, ct));

    [HttpPut("{id}")]
    [Authorize(Roles = AppConstants.Roles.PlatformAdmin)]
    public async Task<ApiResponse<OrgDetailDto>> Update(int id, [FromBody] UpdateOrgDto dto, CancellationToken ct)
        => ApiResponse<OrgDetailDto>.Ok(await _orgs.UpdateAsync(id, dto, ct));

    [HttpDelete("{id}")]
    [Authorize(Roles = AppConstants.Roles.PlatformAdmin)]
    public async Task<ApiResponse> Delete(int id, CancellationToken ct)
    {
        await _orgs.DeleteAsync(id, ct);
        return ApiResponse.OkNoData("Organization deleted.");
    }

    [HttpPost("{id}/enroll-course/{courseId}")]
    [Authorize(Roles = AppConstants.Roles.PlatformAdmin)]
    public async Task<ApiResponse> EnrollInCourse(int id, int courseId, CancellationToken ct)
    {
        await _orgs.EnrollInCourseAsync(id, courseId, CurrentUserId, ct);
        return ApiResponse.OkNoData("Organization enrolled in course.");
    }
}
