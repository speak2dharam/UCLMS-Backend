using AutoMapper;
using UCLMS.Application.DTOs.Certificates;
using UCLMS.Application.DTOs.Courses;
using UCLMS.Application.DTOs.ModuleItems;
using UCLMS.Application.DTOs.Modules;
using UCLMS.Application.DTOs.Organizations;
using UCLMS.Application.DTOs.Pages;
using UCLMS.Application.DTOs.Users;
using UCLMS.Domain.Entities;

namespace UCLMS.Application.Mappings;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<Organization, OrgListDto>()
            .ConstructUsing(s => new OrgListDto(
                s.Id, s.Name, s.LogoUrl, s.Users.Count, s.IsActive));

        CreateMap<Organization, OrgDetailDto>()
            .ConstructUsing(s => new OrgDetailDto(
                s.Id, s.Name, s.Description, s.LogoUrl, s.IsActive, s.Users.Count, s.CreatedAt));

        CreateMap<User, UserListDto>()
            .ConstructUsing(s => new UserListDto(
                s.Id, s.FullName, s.Email, s.Role.ToString(),
                s.Organization != null ? s.Organization.Name : null,
                s.IsActive, s.InvitationAcceptedAt));

        CreateMap<User, UserDetailDto>()
            .ConstructUsing(s => new UserDetailDto(
                s.Id, s.FirstName, s.LastName, s.Email, s.Role.ToString(),
                s.OrganizationId,
                s.Organization != null ? s.Organization.Name : null,
                s.ObservesAllOrganizations,
                s.ObserverOrgAssignments.Select(x => x.OrganizationId).ToList(),
                s.IsActive, s.AvatarUrl, s.LastLoginAt, s.CreatedAt));

        CreateMap<Course, CourseListDto>()
            .ConstructUsing(s => new CourseListDto(
                s.Id, s.Title, s.ThumbnailUrl, s.Category, s.Status.ToString(),
                s.PassingScorePercent, s.Modules.Count,
                s.StartDate, s.EndDate,
                s.CreatedBy != null ? s.CreatedBy.FullName : string.Empty,
                s.CreatedAt));

        // CourseDetailDto is mapped manually in CourseService (it needs per-user completion data);
        // we leave AutoMapper out of that path on purpose.

        // ModuleSummaryDto via AutoMapper is used by ModuleService for create/update/set-publish
        // responses. Items aren't loaded in those calls so we return an empty list — the client
        // refreshes the course detail to get the full item list anyway.
        CreateMap<Module, ModuleSummaryDto>()
            .ConstructUsing(s => new ModuleSummaryDto(
                s.Id, s.Title, s.Description, s.OrderIndex, s.IsPublished,
                new List<ModuleItemDto>()));

        CreateMap<CertificateTemplate, CertificateTemplateDto>()
            .ConstructUsing(s => new CertificateTemplateDto(
                s.Id, s.Name, s.TemplateFileUrl, s.IsDefault, s.CreatedAt));

        CreateMap<Certificate, CertificateDto>()
            .ConstructUsing(s => new CertificateDto(
                s.Id, s.UserId,
                s.User != null ? s.User.FullName : string.Empty,
                s.CourseId,
                s.Course != null ? s.Course.Title : string.Empty,
                s.IssuedAt, s.VerificationCode, s.CertificateFileUrl, s.FinalScore));
    }
}
