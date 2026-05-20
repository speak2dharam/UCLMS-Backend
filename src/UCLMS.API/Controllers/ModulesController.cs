using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UCLMS.Application.DTOs.Modules;
using UCLMS.Application.Interfaces.Services;
using UCLMS.Shared.Constants;
using UCLMS.Shared.Wrappers;

namespace UCLMS.API.Controllers;

public class ModulesController : BaseController
{
    private readonly IModuleService _modules;

    public ModulesController(IModuleService modules) => _modules = modules;

    [HttpGet("{id}")]
    public async Task<ApiResponse<ModuleSummaryDto>> GetById(int id, CancellationToken ct)
        => ApiResponse<ModuleSummaryDto>.Ok(await _modules.GetByIdAsync(id, ct));

    [HttpPost]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse<ModuleSummaryDto>> Create([FromBody] CreateModuleDto dto, CancellationToken ct)
        => ApiResponse<ModuleSummaryDto>.Ok(await _modules.CreateAsync(dto, ct));

    [HttpPut("{id}")]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse<ModuleSummaryDto>> Update(int id, [FromBody] UpdateModuleDto dto, CancellationToken ct)
        => ApiResponse<ModuleSummaryDto>.Ok(await _modules.UpdateAsync(id, dto, ct));

    [HttpDelete("{id}")]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse> Delete(int id, CancellationToken ct)
    {
        await _modules.DeleteAsync(id, ct);
        return ApiResponse.OkNoData("Module deleted.");
    }

    [HttpPatch("reorder")]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse> Reorder([FromQuery] int courseId, [FromBody] List<int> orderedIds, CancellationToken ct)
    {
        await _modules.ReorderAsync(courseId, orderedIds, ct);
        return ApiResponse.OkNoData("Modules reordered.");
    }

    [HttpPatch("{id}/published")]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse<ModuleSummaryDto>> SetPublished(int id, [FromQuery] bool value, CancellationToken ct)
        => ApiResponse<ModuleSummaryDto>.Ok(await _modules.SetPublishedAsync(id, value, ct));
}
