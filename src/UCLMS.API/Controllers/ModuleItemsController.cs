using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UCLMS.Application.DTOs.ModuleItems;
using UCLMS.Application.Interfaces.Services;
using UCLMS.Shared.Constants;
using UCLMS.Shared.Wrappers;

namespace UCLMS.API.Controllers;

public class ModuleItemsController : BaseController
{
    private readonly IModuleItemService _items;

    public ModuleItemsController(IModuleItemService items) => _items = items;

    [HttpGet("{id}")]
    public async Task<ApiResponse<ModuleItemDto>> GetById(int id, CancellationToken ct)
        => ApiResponse<ModuleItemDto>.Ok(await _items.GetByIdAsync(id, CurrentUserId, ct));

    [HttpPost]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse<ModuleItemDto>> Create([FromBody] CreateModuleItemDto dto, CancellationToken ct)
        => ApiResponse<ModuleItemDto>.Ok(await _items.CreateAsync(dto, ct));

    [HttpPut("{id}")]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse<ModuleItemDto>> Update(int id, [FromBody] UpdateModuleItemDto dto, CancellationToken ct)
        => ApiResponse<ModuleItemDto>.Ok(await _items.UpdateAsync(id, dto, ct));

    [HttpDelete("{id}")]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse> Delete(int id, CancellationToken ct)
    {
        await _items.DeleteAsync(id, ct);
        return ApiResponse.OkNoData("Item removed.");
    }

    [HttpPatch("{id}/published")]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse<ModuleItemDto>> SetPublished(int id, [FromQuery] bool value, CancellationToken ct)
        => ApiResponse<ModuleItemDto>.Ok(await _items.SetPublishedAsync(id, value, ct));

    [HttpPatch("reorder")]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse> Reorder([FromQuery] int moduleId, [FromBody] List<int> orderedIds, CancellationToken ct)
    {
        await _items.ReorderAsync(moduleId, orderedIds, ct);
        return ApiResponse.OkNoData("Items reordered.");
    }

    [HttpPost("{id}/complete")]
    public async Task<ApiResponse> MarkComplete(int id, [FromQuery] int timeSpentMinutes, CancellationToken ct)
    {
        await _items.MarkCompleteAsync(id, CurrentUserId, timeSpentMinutes, ct);
        return ApiResponse.OkNoData("Item marked complete.");
    }
}
