using UCLMS.Domain.Entities;

namespace UCLMS.Application.Interfaces.Repositories;

public interface INotificationRepository : IBaseRepository<Notification>
{
    Task<IEnumerable<Notification>> GetUnreadByUserAsync(int userId, CancellationToken ct = default);
    Task MarkReadAsync(int notificationId, int userId, CancellationToken ct = default);
    Task MarkAllReadAsync(int userId, CancellationToken ct = default);
}
