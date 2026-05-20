using Microsoft.EntityFrameworkCore;
using UCLMS.Application.Interfaces.Repositories;
using UCLMS.Domain.Entities;
using UCLMS.Infrastructure.Persistence;

namespace UCLMS.Infrastructure.Repositories;

public class CoursePageRepository : BaseRepository<CoursePage>, ICoursePageRepository
{
    public CoursePageRepository(UCLMSDbContext db) : base(db) { }

    public async Task<IEnumerable<CoursePage>> GetByCourseAsync(int courseId, CancellationToken ct = default) =>
        await _db.CoursePages
            .Include(p => p.CreatedBy)
            .Where(p => p.CourseId == courseId)
            .OrderBy(p => p.OrderIndex)
            .ToListAsync(ct);

    public async Task<CoursePage?> GetWithCourseAsync(int pageId, CancellationToken ct = default) =>
        await _db.CoursePages
            .Include(p => p.CreatedBy)
            .Include(p => p.Course)
            .FirstOrDefaultAsync(p => p.Id == pageId, ct);

    public async Task<int> GetNextOrderIndexAsync(int courseId, CancellationToken ct = default)
    {
        var max = await _db.CoursePages
            .Where(p => p.CourseId == courseId)
            .MaxAsync(p => (int?)p.OrderIndex, ct);
        return (max ?? -1) + 1;
    }
}
