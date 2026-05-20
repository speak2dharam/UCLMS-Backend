namespace UCLMS.Application.DTOs.Notifications;

public record NotificationDto(
    int Id,
    string Title,
    string Message,
    string Type,
    bool IsRead,
    string? RelatedEntityType,
    int? RelatedEntityId,
    DateTime CreatedAt
);
