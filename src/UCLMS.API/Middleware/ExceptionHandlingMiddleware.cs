using System.Net;
using System.Text.Json;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using UCLMS.Application.Common.Exceptions;
using UCLMS.Shared.Wrappers;

namespace UCLMS.API.Middleware;

public class ExceptionHandlingMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<ExceptionHandlingMiddleware> _logger;
    private readonly IWebHostEnvironment _env;

    public ExceptionHandlingMiddleware(RequestDelegate next, ILogger<ExceptionHandlingMiddleware> logger, IWebHostEnvironment env)
    {
        _next = next;
        _logger = logger;
        _env = env;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Unhandled exception: {Message}", ex.Message);
            await HandleExceptionAsync(context, ex, _env.IsDevelopment());
        }
    }

    private static async Task HandleExceptionAsync(HttpContext context, Exception ex, bool isDevelopment)
    {
        var (status, response) = ex switch
        {
            NotFoundException nfe => (HttpStatusCode.NotFound, ApiResponse.Fail(nfe.Message)),
            ForbiddenException fe => (HttpStatusCode.Forbidden, ApiResponse.Fail(fe.Message)),
            ValidationException ve => (HttpStatusCode.BadRequest, ApiResponse.Fail(ve.Errors)),
            _ => (HttpStatusCode.InternalServerError, ApiResponse.Fail(
                isDevelopment
                    ? $"{ex.GetType().Name}: {ex.Message}\n{ex.StackTrace}"
                    : "An unexpected error occurred."))
        };

        context.Response.StatusCode = (int)status;
        context.Response.ContentType = "application/json";
        await context.Response.WriteAsync(JsonSerializer.Serialize(response,
            new JsonSerializerOptions { PropertyNamingPolicy = JsonNamingPolicy.CamelCase }));
    }
}
