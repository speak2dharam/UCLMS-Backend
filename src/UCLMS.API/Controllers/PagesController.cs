using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UCLMS.Application.DTOs.Pages;
using UCLMS.Application.Interfaces.Services;
using UCLMS.Shared.Constants;
using UCLMS.Shared.Wrappers;

namespace UCLMS.API.Controllers;

public class PagesController : BaseController
{
    private readonly IPageService _pages;

    public PagesController(IPageService pages) => _pages = pages;

    [HttpGet("course/{courseId}")]
    public async Task<ApiResponse<List<CoursePageSummaryDto>>> GetByCourse(int courseId, CancellationToken ct)
        => ApiResponse<List<CoursePageSummaryDto>>.Ok(await _pages.GetByCourseAsync(courseId, CurrentUserId, ct));

    [HttpGet("{id}")]
    public async Task<ApiResponse<CoursePageDto>> GetById(int id, CancellationToken ct)
        => ApiResponse<CoursePageDto>.Ok(await _pages.GetByIdAsync(id, CurrentUserId, ct));

    [HttpPost]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse<CoursePageDto>> Create([FromBody] CreateCoursePageDto dto, CancellationToken ct)
        => ApiResponse<CoursePageDto>.Ok(await _pages.CreateAsync(dto, CurrentUserId, ct));

    [HttpPut("{id}")]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse<CoursePageDto>> Update(int id, [FromBody] UpdateCoursePageDto dto, CancellationToken ct)
        => ApiResponse<CoursePageDto>.Ok(await _pages.UpdateAsync(id, dto, ct));

    [HttpPatch("{id}/published")]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse<CoursePageDto>> SetPublished(int id, [FromQuery] bool value, CancellationToken ct)
        => ApiResponse<CoursePageDto>.Ok(await _pages.SetPublishedAsync(id, value, ct));

    [HttpPatch("{id}/front-page")]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse> SetAsFrontPage(int id, CancellationToken ct)
    {
        await _pages.SetAsFrontPageAsync(id, ct);
        return ApiResponse.OkNoData("Page set as the course home page.");
    }

    [HttpDelete("{id}")]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse> Delete(int id, CancellationToken ct)
    {
        await _pages.DeleteAsync(id, ct);
        return ApiResponse.OkNoData("Page deleted.");
    }
}
