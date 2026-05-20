using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using UCLMS.Domain.Entities;
using UCLMS.Domain.Enums;
using UCLMS.Shared.Helpers;

namespace UCLMS.Infrastructure.Persistence;

public static class DatabaseSeeder
{
    // Single shared password for all seeded test users — easy to remember during dev.
    private const string SeedPassword = "Admin@123456";

    public static async Task SeedAsync(IServiceProvider services)
    {
        using var scope = services.CreateScope();
        var db     = scope.ServiceProvider.GetRequiredService<UCLMSDbContext>();
        var logger = scope.ServiceProvider.GetRequiredService<ILogger<UCLMSDbContext>>();

        await db.Database.MigrateAsync();

        // 1. Seed a sample organization so non-admin users have something to belong to.
        var org = await db.Organizations.FirstOrDefaultAsync(o => o.Name == "Acme Corp");
        if (org is null)
        {
            org = new Organization
            {
                Name        = "Acme Corp",
                Description = "Sample organization for testing.",
                IsActive    = true,
                CreatedAt   = DateTime.UtcNow,
                UpdatedAt   = DateTime.UtcNow
            };
            db.Organizations.Add(org);
            await db.SaveChangesAsync();
            logger.LogInformation("Seeded organization: Acme Corp");
        }

        // 2. Seed one user per role. Each is idempotent (skip if email already exists).
        await SeedUserIfMissing(db, logger,
            email: "admin@uclms.com", firstName: "Platform", lastName: "Admin",
            role: UserRole.PlatformAdmin, organizationId: null);

        await SeedUserIfMissing(db, logger,
            email: "instructor@uclms.com", firstName: "Iris", lastName: "Instructor",
            role: UserRole.Instructor, organizationId: org.Id);

        await SeedUserIfMissing(db, logger,
            email: "observer@uclms.com", firstName: "Oscar", lastName: "Observer",
            role: UserRole.Observer, organizationId: null, observesAllOrganizations: true);

        await SeedUserIfMissing(db, logger,
            email: "learner@uclms.com", firstName: "Lena", lastName: "Learner",
            role: UserRole.Learner, organizationId: org.Id);
    }

    private static async Task SeedUserIfMissing(
        UCLMSDbContext db,
        ILogger logger,
        string email,
        string firstName,
        string lastName,
        UserRole role,
        int? organizationId,
        bool observesAllOrganizations = false)
    {
        if (await db.Users.AnyAsync(u => u.Email == email)) return;

        var user = new User
        {
            FirstName                  = firstName,
            LastName                   = lastName,
            Email                      = email,
            PasswordHash               = PasswordHelper.Hash(SeedPassword),
            Role                       = role,
            OrganizationId             = organizationId,
            ObservesAllOrganizations   = observesAllOrganizations,
            IsActive                   = true,
            InvitationAcceptedAt       = DateTime.UtcNow,
            CreatedAt                  = DateTime.UtcNow,
            UpdatedAt                  = DateTime.UtcNow
        };

        db.Users.Add(user);
        await db.SaveChangesAsync();
        logger.LogInformation("Seeded {Role} → email: {Email}  password: {Password}",
            role, email, SeedPassword);
    }
}
