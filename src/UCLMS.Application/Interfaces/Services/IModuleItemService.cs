using UCLMS.Application.DTOs.ModuleItems;

namespace UCLMS.Application.Interfaces.Services;

public interface IModuleItemService
{
    Task<ModuleItemDto> GetByIdAsync(int id, int requestingUserId, CancellationToken ct = default);
    Task<ModuleItemDto> CreateAsync(CreateModuleItemDto dto, CancellationToken ct = default);
    Task<ModuleItemDto> UpdateAsync(int id, UpdateModuleItemDto dto, CancellationToken ct = default);
    Task DeleteAsync(int id, CancellationToken ct = default);

    /// <summary>Publish/unpublish a single item without touching its parent module.</summary>
    Task<ModuleItemDto> SetPublishedAsync(int id, bool isPublished, CancellationToken ct = default);

    /// <summary>Reorders items inside a module to match the given id sequence.</summary>
    Task ReorderAsync(int moduleId, List<int> orderedIds, CancellationToken ct = default);

    /// <summary>Marks an item complete for the current learner — replaces the old lesson-complete flow.</summary>
    Task MarkCompleteAsync(int id, int learnerUserId, int timeSpentMinutes, CancellationToken ct = default);
}
