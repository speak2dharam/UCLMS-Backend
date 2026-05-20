using Microsoft.EntityFrameworkCore;
using UCLMS.Application.Interfaces.Repositories;
using UCLMS.Domain.Entities;
using UCLMS.Domain.Enums;
using UCLMS.Infrastructure.Persistence;

namespace UCLMS.Infrastructure.Repositories;

public class AssignmentRepository : BaseRepository<Assignment>, IAssignmentRepository
{
    public AssignmentRepository(UCLMSDbContext db) : base(db) { }

    public async Task<AssignmentSubmission?> GetSubmissionAsync(int assignmentId, int userId, CancellationToken ct = default) =>
        await _db.AssignmentSubmissions
            .Include(s => s.Assignment)
            .Include(s => s.User)
            .FirstOrDefaultAsync(s => s.AssignmentId == assignmentId && s.UserId == userId, ct);

    public async Task<AssignmentSubmission?> GetSubmissionByIdAsync(int submissionId, CancellationToken ct = default) =>
        await _db.AssignmentSubmissions
            .Include(s => s.Assignment)
            .Include(s => s.User)
            .FirstOrDefaultAsync(s => s.Id == submissionId, ct);

    public async Task<IEnumerable<AssignmentSubmission>> GetPendingGradingAsync(int instructorUserId, CancellationToken ct = default) =>
        await _db.AssignmentSubmissions
            .Include(s => s.Assignment).ThenInclude(a => a.Course)
            .Include(s => s.User)
            .Where(s => s.Status == SubmissionStatus.Submitted
                     && s.Assignment.Course.CreatedByUserId == instructorUserId)
            .OrderBy(s => s.Assignment.DueDate)
            .ToListAsync(ct);

    public async Task AddSubmissionAsync(AssignmentSubmission submission, CancellationToken ct = default) =>
        await _db.AssignmentSubmissions.AddAsync(submission, ct);

    public Task UpdateSubmissionAsync(AssignmentSubmission submission, CancellationToken ct = default)
    {
        _db.AssignmentSubmissions.Update(submission);
        return Task.CompletedTask;
    }

    public Task SaveAsync(CancellationToken ct = default) => _db.SaveChangesAsync(ct);

    public async Task<IEnumerable<Assignment>> GetByCourseAsync(int courseId, CancellationToken ct = default) =>
        await _db.Assignments.Where(a => a.CourseId == courseId).ToListAsync(ct);

    public async Task<IEnumerable<AssignmentSubmission>> GetSubmissionsForCourseAsync(int courseId, CancellationToken ct = default) =>
        await _db.AssignmentSubmissions
            .Include(s => s.Assignment)
            .Where(s => s.Assignment.CourseId == courseId && s.Status == SubmissionStatus.Graded)
            .ToListAsync(ct);
}
