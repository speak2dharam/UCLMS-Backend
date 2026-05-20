using UCLMS.Application.DTOs.Modules;

namespace UCLMS.Application.Interfaces.Services;

public interface IModuleService
{
    Task<ModuleSummaryDto> GetByIdAsync(int id, CancellationToken ct = default);
    Task<ModuleSummaryDto> CreateAsync(CreateModuleDto dto, CancellationToken ct = default);
    Task<ModuleSummaryDto> UpdateAsync(int id, UpdateModuleDto dto, CancellationToken ct = default);
    Task DeleteAsync(int id, CancellationToken ct = default);
    Task ReorderAsync(int courseId, List<int> orderedIds, CancellationToken ct = default);

    /// <summary>Publishes or unpublishes a single module (Canvas-style staged release).</summary>
    Task<ModuleSummaryDto> SetPublishedAsync(int id, bool isPublished, CancellationToken ct = default);
}
