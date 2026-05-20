using UCLMS.Domain.Entities;

namespace UCLMS.Application.Interfaces.Repositories;

public interface IModuleRepository : IBaseRepository<Module>
{
    Task<IEnumerable<Module>> GetByCourseAsync(int courseId, CancellationToken ct = default);
    Task<int> GetNextOrderIndexAsync(int courseId, CancellationToken ct = default);
}
