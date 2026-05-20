using Microsoft.EntityFrameworkCore;
using UCLMS.Application.Interfaces.Repositories;
using UCLMS.Domain.Entities;
using UCLMS.Infrastructure.Persistence;

namespace UCLMS.Infrastructure.Repositories;

public class ModuleRepository : BaseRepository<Module>, IModuleRepository
{
    public ModuleRepository(UCLMSDbContext db) : base(db) { }

    public async Task<IEnumerable<Module>> GetByCourseAsync(int courseId, CancellationToken ct = default) =>
        await _db.Modules
            .Include(m => m.Items.OrderBy(i => i.OrderIndex))
                .ThenInclude(i => i.Page)
            .Include(m => m.Items)
                .ThenInclude(i => i.Quiz)
            .Include(m => m.Items)
                .ThenInclude(i => i.Assignment)
            .Where(m => m.CourseId == courseId)
            .OrderBy(m => m.OrderIndex)
            .ToListAsync(ct);

    public async Task<int> GetNextOrderIndexAsync(int courseId, CancellationToken ct = default)
    {
        var max = await _db.Modules
            .Where(m => m.CourseId == courseId)
            .MaxAsync(m => (int?)m.OrderIndex, ct);
        return (max ?? -1) + 1;
    }
}
