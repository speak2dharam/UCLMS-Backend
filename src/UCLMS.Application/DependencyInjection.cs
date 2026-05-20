using FluentValidation;
using Microsoft.Extensions.DependencyInjection;
using UCLMS.Application.Interfaces.Services;
using UCLMS.Application.Mappings;
using UCLMS.Application.Services;

namespace UCLMS.Application;

public static class DependencyInjection
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        services.AddAutoMapper(typeof(MappingProfile));
        services.AddValidatorsFromAssembly(typeof(DependencyInjection).Assembly);
        services.AddScoped<IAuthService, AuthService>();
        services.AddScoped<IUserService, UserService>();
        services.AddScoped<IOrganizationService, OrganizationService>();
        services.AddScoped<ICourseService, CourseService>();
        services.AddScoped<IModuleService, ModuleService>();
        services.AddScoped<IModuleItemService, ModuleItemService>();
        services.AddScoped<IPageService, PageService>();
        services.AddScoped<IQuizService, QuizService>();
        services.AddScoped<IAssignmentService, AssignmentService>();
        services.AddScoped<IGradebookService, GradebookService>();
        services.AddScoped<ICertificateService, CertificateService>();
        services.AddScoped<IReportService, ReportService>();
        return services;
    }
}
