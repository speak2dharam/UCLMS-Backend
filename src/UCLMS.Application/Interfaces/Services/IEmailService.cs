namespace UCLMS.Application.Interfaces.Services;

public interface IEmailService
{
    Task SendInvitationAsync(string toEmail, string toName, string setupLink, CancellationToken ct = default);
    Task SendEnrollmentConfirmationAsync(string toEmail, string toName, string courseName, CancellationToken ct = default);
    Task SendAssignmentGradedAsync(string toEmail, string toName, string assignmentTitle, decimal score, CancellationToken ct = default);
    Task SendCertificateIssuedAsync(string toEmail, string toName, string courseName, string certificateUrl, CancellationToken ct = default);
    Task SendDueReminderAsync(string toEmail, string toName, string itemTitle, DateTime dueDate, CancellationToken ct = default);
}
