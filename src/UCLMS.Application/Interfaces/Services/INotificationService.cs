using UCLMS.Application.DTOs.Notifications;
using UCLMS.Domain.Enums;

namespace UCLMS.Application.Interfaces.Services;

public interface INotificationService
{
    Task<IEnumerable<NotificationDto>> GetUnreadAsync(int userId, CancellationToken ct = default);
    Task MarkReadAsync(int notificationId, int userId, CancellationToken ct = default);
    Task MarkAllReadAsync(int userId, CancellationToken ct = default);
    Task SendAsync(int userId, string title, string message, NotificationType type,
        string? entityType = null, int? entityId = null, CancellationToken ct = default);
}
