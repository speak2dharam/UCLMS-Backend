using UCLMS.Application.DTOs.Organizations;
using UCLMS.Shared.Wrappers;

namespace UCLMS.Application.Interfaces.Services;

public interface IOrganizationService
{
    Task<PagedResult<OrgListDto>> GetAllAsync(int page, int pageSize, CancellationToken ct = default);
    Task<OrgDetailDto> GetByIdAsync(int id, CancellationToken ct = default);
    Task<OrgDetailDto> CreateAsync(CreateOrgDto dto, CancellationToken ct = default);
    Task<OrgDetailDto> UpdateAsync(int id, UpdateOrgDto dto, CancellationToken ct = default);
    Task DeleteAsync(int id, CancellationToken ct = default);
    Task EnrollInCourseAsync(int orgId, int courseId, int enrolledByUserId, CancellationToken ct = default);
}
