using Microsoft.EntityFrameworkCore;
using UCLMS.Application.Interfaces.Repositories;
using UCLMS.Domain.Entities;
using UCLMS.Infrastructure.Persistence;

namespace UCLMS.Infrastructure.Repositories;

public class ModuleItemRepository : BaseRepository<ModuleItem>, IModuleItemRepository
{
    public ModuleItemRepository(UCLMSDbContext db) : base(db) { }

    public async Task<IEnumerable<ModuleItem>> GetByModuleAsync(int moduleId, CancellationToken ct = default) =>
        await _db.ModuleItems
            .Include(i => i.Page)
            .Include(i => i.Quiz)
            .Include(i => i.Assignment)
            .Where(i => i.ModuleId == moduleId)
            .OrderBy(i => i.OrderIndex)
            .ToListAsync(ct);

    public async Task<ModuleItem?> GetWithRefsAsync(int id, CancellationToken ct = default) =>
        await _db.ModuleItems
            .Include(i => i.Page)
            .Include(i => i.Quiz)
            .Include(i => i.Assignment)
            .Include(i => i.Module)
            .FirstOrDefaultAsync(i => i.Id == id, ct);

    public async Task<int> GetNextOrderIndexAsync(int moduleId, CancellationToken ct = default)
    {
        var max = await _db.ModuleItems
            .Where(i => i.ModuleId == moduleId)
            .MaxAsync(i => (int?)i.OrderIndex, ct);
        return (max ?? -1) + 1;
    }

    public async Task<HashSet<int>> GetCompletedItemIdsAsync(int enrollmentId, CancellationToken ct = default) =>
        (await _db.ModuleItemProgress
            .Where(p => p.EnrollmentId == enrollmentId)
            .Select(p => p.ModuleItemId)
            .ToListAsync(ct))
        .ToHashSet();

    public async Task<ModuleItemProgress?> GetProgressAsync(int enrollmentId, int moduleItemId, CancellationToken ct = default) =>
        await _db.ModuleItemProgress
            .FirstOrDefaultAsync(p => p.EnrollmentId == enrollmentId && p.ModuleItemId == moduleItemId, ct);

    public async Task AddProgressAsync(ModuleItemProgress progress, CancellationToken ct = default) =>
        await _db.ModuleItemProgress.AddAsync(progress, ct);

    public async Task RemoveByPageAsync(int pageId, CancellationToken ct = default)
    {
        var refs = await _db.ModuleItems.Where(i => i.PageId == pageId).ToListAsync(ct);
        if (refs.Count > 0) _db.ModuleItems.RemoveRange(refs);
    }

    public async Task RemoveByQuizAsync(int quizId, CancellationToken ct = default)
    {
        var refs = await _db.ModuleItems.Where(i => i.QuizId == quizId).ToListAsync(ct);
        if (refs.Count > 0) _db.ModuleItems.RemoveRange(refs);
    }

    public async Task RemoveByAssignmentAsync(int assignmentId, CancellationToken ct = default)
    {
        var refs = await _db.ModuleItems.Where(i => i.AssignmentId == assignmentId).ToListAsync(ct);
        if (refs.Count > 0) _db.ModuleItems.RemoveRange(refs);
    }
}
