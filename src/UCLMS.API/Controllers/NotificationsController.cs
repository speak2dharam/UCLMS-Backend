using Microsoft.AspNetCore.Mvc;
using UCLMS.Application.DTOs.Notifications;
using UCLMS.Application.Interfaces.Services;
using UCLMS.Shared.Wrappers;

namespace UCLMS.API.Controllers;

public class NotificationsController : BaseController
{
    private readonly INotificationService _notifications;

    public NotificationsController(INotificationService notifications) => _notifications = notifications;

    [HttpGet("unread")]
    public async Task<ApiResponse<IEnumerable<NotificationDto>>> Unread(CancellationToken ct)
        => ApiResponse<IEnumerable<NotificationDto>>.Ok(await _notifications.GetUnreadAsync(CurrentUserId, ct));

    [HttpPatch("{id}/read")]
    public async Task<ApiResponse> MarkRead(int id, CancellationToken ct)
    {
        await _notifications.MarkReadAsync(id, CurrentUserId, ct);
        return ApiResponse.OkNoData();
    }

    [HttpPost("mark-all-read")]
    public async Task<ApiResponse> MarkAllRead(CancellationToken ct)
    {
        await _notifications.MarkAllReadAsync(CurrentUserId, ct);
        return ApiResponse.OkNoData();
    }
}
