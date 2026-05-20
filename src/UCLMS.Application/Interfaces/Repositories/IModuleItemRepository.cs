using UCLMS.Domain.Entities;

namespace UCLMS.Application.Interfaces.Repositories;

public interface IModuleItemRepository : IBaseRepository<ModuleItem>
{
    Task<IEnumerable<ModuleItem>> GetByModuleAsync(int moduleId, CancellationToken ct = default);
    Task<ModuleItem?> GetWithRefsAsync(int id, CancellationToken ct = default);
    Task<int> GetNextOrderIndexAsync(int moduleId, CancellationToken ct = default);

    /// <summary>Removes every module item that references the given page/quiz/assignment.
    /// Called by the corresponding services before deleting the underlying entity, because the
    /// schema uses NoAction (single-cascade-path constraint) instead of cascade.</summary>
    Task RemoveByPageAsync(int pageId, CancellationToken ct = default);
    Task RemoveByQuizAsync(int quizId, CancellationToken ct = default);
    Task RemoveByAssignmentAsync(int assignmentId, CancellationToken ct = default);

    /// <summary>Returns the completed-item ids for one enrollment (used by progress %).</summary>
    Task<HashSet<int>> GetCompletedItemIdsAsync(int enrollmentId, CancellationToken ct = default);

    Task<ModuleItemProgress?> GetProgressAsync(int enrollmentId, int moduleItemId, CancellationToken ct = default);
    Task AddProgressAsync(ModuleItemProgress progress, CancellationToken ct = default);
}
