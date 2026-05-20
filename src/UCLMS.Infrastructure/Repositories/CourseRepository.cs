using Microsoft.EntityFrameworkCore;
using UCLMS.Application.Interfaces.Repositories;
using UCLMS.Domain.Entities;
using UCLMS.Domain.Enums;
using UCLMS.Infrastructure.Persistence;

namespace UCLMS.Infrastructure.Repositories;

public class CourseRepository : BaseRepository<Course>, ICourseRepository
{
    public CourseRepository(UCLMSDbContext db) : base(db) { }

    public override async Task<IEnumerable<Course>> GetAllAsync(CancellationToken ct = default) =>
        await _db.Courses
            .Include(c => c.CreatedBy)
            .Include(c => c.Modules)
            .ToListAsync(ct);

    public async Task<Course?> GetWithModulesAsync(int courseId, CancellationToken ct = default) =>
        await _db.Courses
            .Include(c => c.CreatedBy)
            .Include(c => c.Pages.OrderBy(p => p.OrderIndex))
            .Include(c => c.Modules.OrderBy(m => m.OrderIndex))
                .ThenInclude(m => m.Items.OrderBy(i => i.OrderIndex))
                    .ThenInclude(i => i.Page)
            .Include(c => c.Modules)
                .ThenInclude(m => m.Items)
                    .ThenInclude(i => i.Quiz)
            .Include(c => c.Modules)
                .ThenInclude(m => m.Items)
                    .ThenInclude(i => i.Assignment)
            .FirstOrDefaultAsync(c => c.Id == courseId, ct);

    public async Task<IEnumerable<Course>> GetByStatusAsync(CourseStatus status, CancellationToken ct = default) =>
        await _db.Courses
            .Include(c => c.CreatedBy)
            .Include(c => c.Modules)
            .Where(c => c.Status == status).ToListAsync(ct);

    public async Task<IEnumerable<Course>> GetEnrolledCoursesAsync(int userId, CancellationToken ct = default) =>
        await _db.CourseEnrollments
            .Where(e => e.UserId == userId)
            .Include(e => e.Course).ThenInclude(c => c.CreatedBy)
            .Include(e => e.Course).ThenInclude(c => c.Modules)
            .Select(e => e.Course)
            .ToListAsync(ct);

    public async Task<IEnumerable<Course>> GetByOrganizationEnrollmentAsync(int organizationId, CancellationToken ct = default) =>
        await _db.OrgCourseEnrollments
            .Where(e => e.OrganizationId == organizationId)
            .Include(e => e.Course).ThenInclude(c => c.CreatedBy)
            .Include(e => e.Course).ThenInclude(c => c.Modules)
            .Select(e => e.Course)
            .ToListAsync(ct);

    public async Task<bool> IsEnrolledAsync(int courseId, int userId, CancellationToken ct = default) =>
        await _db.CourseEnrollments.AnyAsync(e => e.CourseId == courseId && e.UserId == userId, ct);

    public async Task AddEnrollmentAsync(CourseEnrollment enrollment, CancellationToken ct = default) =>
        await _db.CourseEnrollments.AddAsync(enrollment, ct);

    public async Task RemoveEnrollmentAsync(int courseId, int userId, CancellationToken ct = default)
    {
        var e = await _db.CourseEnrollments
            .FirstOrDefaultAsync(e => e.CourseId == courseId && e.UserId == userId, ct);
        if (e is not null) _db.CourseEnrollments.Remove(e);
    }

    public async Task<CourseEnrollment?> GetEnrollmentAsync(int courseId, int userId, CancellationToken ct = default) =>
        await _db.CourseEnrollments
            .Include(e => e.User)
            .FirstOrDefaultAsync(e => e.CourseId == courseId && e.UserId == userId, ct);

    public async Task<IEnumerable<CourseEnrollment>> GetEnrollmentsForCourseAsync(int courseId, CancellationToken ct = default) =>
        await _db.CourseEnrollments
            .Include(e => e.User).ThenInclude(u => u.Organization)
            .Include(e => e.ItemProgress)
            .Where(e => e.CourseId == courseId)
            .ToListAsync(ct);
}
