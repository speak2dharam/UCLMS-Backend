using System.Net;
using System.Net.Mail;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using UCLMS.Application.Interfaces.Services;

namespace UCLMS.Infrastructure.Services;

public class EmailService : IEmailService
{
    private readonly string? _host;
    private readonly int _port;
    private readonly string? _username;
    private readonly string? _password;
    private readonly bool _enableSsl;
    private readonly string _senderAddress;
    private readonly string _senderName;
    private readonly ILogger<EmailService> _logger;

    public EmailService(IConfiguration config, ILogger<EmailService> logger)
    {
        _logger = logger;
        _host = config["Smtp:Host"];
        _port = int.TryParse(config["Smtp:Port"], out var p) ? p : 587;
        _username = config["Smtp:Username"];
        _password = config["Smtp:Password"];
        _enableSsl = !bool.TryParse(config["Smtp:EnableSsl"], out var ssl) || ssl;
        _senderAddress = config["Smtp:SenderAddress"] ?? _username ?? "noreply@uclms.com";
        _senderName = config["Smtp:SenderName"] ?? "UCLMS";

        if (string.IsNullOrWhiteSpace(_host))
            _logger.LogWarning("SMTP not configured (Smtp:Host empty) — emails will be skipped.");
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
        if (string.IsNullOrWhiteSpace(_host))
        {
            _logger.LogInformation("Email skipped (no SMTP host configured): {Subject} → {To}", subject, toEmail);
            return;
        }

        try
        {
            using var message = new MailMessage
            {
                From = new MailAddress(_senderAddress, _senderName),
                Subject = subject,
                Body = htmlBody,
                IsBodyHtml = true
            };
            message.To.Add(new MailAddress(toEmail, toName));

            using var client = new SmtpClient(_host, _port)
            {
                EnableSsl = _enableSsl,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = string.IsNullOrEmpty(_username) ? null : new NetworkCredential(_username, _password)
            };

            await client.SendMailAsync(message, ct);
        }
        catch (Exception ex)
        {
            // Don't bubble email failures up to the caller — log and continue. User-facing flows
            // (invitations, grading) should not fail because of a transient SMTP issue.
            _logger.LogError(ex, "Failed to send email to {To} (subject: {Subject})", toEmail, subject);
        }
    }
}
