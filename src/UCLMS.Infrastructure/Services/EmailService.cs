using Azure.Communication.Email;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using UCLMS.Application.Interfaces.Services;

namespace UCLMS.Infrastructure.Services;

public class EmailService : IEmailService
{
    private readonly EmailClient? _client;
    private readonly string _sender;
    private readonly ILogger<EmailService> _logger;

    public EmailService(IConfiguration config, ILogger<EmailService> logger)
    {
        _logger = logger;
        _sender = config["Azure:CommunicationServices:SenderAddress"] ?? "noreply@uclms.com";
        var cs = config["Azure:CommunicationServices:ConnectionString"];
        if (!string.IsNullOrWhiteSpace(cs))
            _client = new EmailClient(cs);
        else
            _logger.LogWarning("Azure Communication Services not configured — emails will be skipped.");
    }

    public Task SendInvitationAsync(string toEmail, string toName, string setupLink, CancellationToken ct = default) =>
        SendAsync(toEmail, toName, "You're invited to UCLMS",
            $"<p>Hello {toName},</p><p>You have been added to the UCLMS platform. Click below to set up your account:</p><p><a href='{setupLink}'>Set Up My Account</a></p><p>This link expires in 7 days.</p>", ct);

    public Task SendEnrollmentConfirmationAsync(string toEmail, string toName, string courseName, CancellationToken ct = default) =>
        SendAsync(toEmail, toName, $"Enrolled: {courseName}",
            $"<p>Hello {toName},</p><p>You have been enrolled in <strong>{courseName}</strong>. Log in to start learning.</p>", ct);

    public Task SendAssignmentGradedAsync(string toEmail, string toName, string assignmentTitle, decimal score, CancellationToken ct = default) =>
        SendAsync(toEmail, toName, $"Assignment Graded: {assignmentTitle}",
            $"<p>Hello {toName},</p><p>Your submission for <strong>{assignmentTitle}</strong> has been graded. Score: <strong>{score}</strong>. Log in to view feedback.</p>", ct);

    public Task SendCertificateIssuedAsync(string toEmail, string toName, string courseName, string certificateUrl, CancellationToken ct = default) =>
        SendAsync(toEmail, toName, $"Certificate Issued: {courseName}",
            $"<p>Congratulations {toName}!</p><p>You have completed <strong>{courseName}</strong> and earned a certificate.</p><p><a href='{certificateUrl}'>View Certificate</a></p>", ct);

    public Task SendDueReminderAsync(string toEmail, string toName, string itemTitle, DateTime dueDate, CancellationToken ct = default) =>
        SendAsync(toEmail, toName, $"Due Tomorrow: {itemTitle}",
            $"<p>Hello {toName},</p><p>Reminder: <strong>{itemTitle}</strong> is due on {dueDate:MMMM d, yyyy}.</p>", ct);

    private async Task SendAsync(string toEmail, string toName, string subject, string htmlBody, CancellationToken ct)
    {
        if (_client is null)
        {
            _logger.LogInformation("Email skipped (no Azure CS configured): {Subject} → {To}", subject, toEmail);
            return;
        }
        var message = new EmailMessage(_sender, toEmail,
            new EmailContent(subject) { Html = htmlBody });
        await _client.SendAsync(Azure.WaitUntil.Started, message, ct);
    }
}
