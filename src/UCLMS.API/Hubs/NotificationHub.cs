using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;

namespace UCLMS.API.Hubs;

[Authorize]
public class NotificationHub : Hub
{
    public override Task OnConnectedAsync() => base.OnConnectedAsync();
    public override Task OnDisconnectedAsync(Exception? exception) => base.OnDisconnectedAsync(exception);
}
