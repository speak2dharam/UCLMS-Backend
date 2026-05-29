using System.Text.Json.Serialization;
using UCLMS.API.Extensions;
using UCLMS.API.Hubs;
using UCLMS.API.Middleware;
using UCLMS.Application;
using UCLMS.Infrastructure;
using UCLMS.Infrastructure.Persistence;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers()
    .AddJsonOptions(o =>
    {
        o.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
    });
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddApplication();
builder.Services.AddInfrastructure(builder.Configuration);
builder.Services.AddJwtAuthentication(builder.Configuration);
builder.Services.AddSwagger();

builder.Services.AddSignalR();

// CORS only needed in dev — the Angular dev server (4200) calls the API (7191) cross-origin.
// In production the SPA is served from the same App Service, so no CORS policy is applied.
if (builder.Environment.IsDevelopment())
{
    builder.Services.AddCors(options =>
    {
        options.AddPolicy("AllowAngular", policy =>
            policy.WithOrigins(builder.Configuration["Cors:AllowedOrigin"] ?? "http://localhost:4200")
                  .AllowAnyHeader()
                  .AllowAnyMethod()
                  .AllowCredentials());
    });
}

var app = builder.Build();

await DatabaseSeeder.SeedAsync(app.Services);

app.UseMiddleware<ExceptionHandlingMiddleware>();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "UCLMS API v1"));
    app.UseHttpsRedirection();
    app.UseCors("AllowAngular");
}

// Serve the Angular SPA from wwwroot (in prod) alongside the API.
app.UseDefaultFiles();
app.UseStaticFiles();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();
app.MapHub<NotificationHub>("/hubs/notifications");

// SPA fallback: any non-API, non-hub, non-static request returns index.html so
// Angular's client-side router can handle it (e.g. /courses/5, /login).
app.MapFallbackToFile("index.html");

app.Run();
