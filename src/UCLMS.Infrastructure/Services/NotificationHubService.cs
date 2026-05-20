using Microsoft.AspNetCore.SignalR;
using UCLMS.Application.Interfaces.Repositories;
using UCLMS.Application.Interfaces.Services;
using UCLMS.Domain.Entities;
using UCLMS.Domain.Enums;

namespace UCLMS.Infrastructure.Services;

public class NotificationHubService : INotificationService
{
    private readonly INotificationRepository _repo;
    private readonly IHubContext<NotificationHub> _hub;

    public NotificationHubService(INotificationRepository repo, IHubContext<NotificationHub> hub)
    {
        _repo = repo;
        _hub = hub;
    }

    public async Task<IEnumerable<UCLMS.Application.DTOs.Notifications.NotificationDto>> GetUnreadAsync(int userId, CancellationToken ct = default)
    {
        var notifications = await _repo.GetUnreadByUserAsync(userId, ct);
        return notifications.Select(n => new UCLMS.Application.DTOs.Notifications.NotificationDto(
            n.Id, n.Title, n.Message, n.Type.ToString(), n.IsRead,
            n.RelatedEntityType, n.RelatedEntityId, n.CreatedAt));
    }

    public async Task MarkReadAsync(int notificationId, int userId, CancellationToken ct = default) =>
        await _repo.MarkReadAsync(notificationId, userId, ct);

    public async Task MarkAllReadAsync(int userId, CancellationToken ct = default) =>
        await _repo.MarkAllReadAsync(userId, ct);

    public async Task SendAsync(int userId, string title, string message, NotificationType type,
        string? entityType = null, int? entityId = null, CancellationToken ct = default)
    {
        var notification = new Notification
        {
            UserId = userId,
            Title = title,
            Message = message,
            Type = type,
            RelatedEntityType = entityType,
            RelatedEntityId = entityId
        };

        await _repo.AddAsync(notification, ct);
        await _repo.SaveChangesAsync(ct);

        await _hub.Clients.User(userId.ToString())
            .SendAsync("ReceiveNotification", new { title, message, type = type.ToString() }, ct);
    }
}

public class NotificationHub : Hub
{
    public override Task OnConnectedAsync() => base.OnConnectedAsync();
}
