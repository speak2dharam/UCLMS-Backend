using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UCLMS.Application.DTOs.Courses;
using UCLMS.Application.Interfaces.Services;
using UCLMS.Shared.Constants;
using UCLMS.Shared.Wrappers;

namespace UCLMS.API.Controllers;

public class CoursesController : BaseController
{
    private readonly ICourseService _courses;

    public CoursesController(ICourseService courses) => _courses = courses;

    [HttpGet]
    public async Task<ApiResponse<PagedResult<CourseListDto>>> GetAll([FromQuery] CourseFilterDto filter, CancellationToken ct)
        => ApiResponse<PagedResult<CourseListDto>>.Ok(await _courses.GetAllAsync(filter, CurrentUserId, ct));

    [HttpGet("{id}")]
    public async Task<ApiResponse<CourseDetailDto>> GetById(int id, CancellationToken ct)
        => ApiResponse<CourseDetailDto>.Ok(await _courses.GetByIdAsync(id, CurrentUserId, ct));

    [HttpPost]
    [Authorize(Roles = AppConstants.Roles.PlatformAdmin + "," + AppConstants.Roles.Instructor)]
    public async Task<ApiResponse<CourseDetailDto>> Create([FromBody] CreateCourseDto dto, CancellationToken ct)
        => ApiResponse<CourseDetailDto>.Ok(await _courses.CreateAsync(dto, CurrentUserId, ct));

    [HttpPut("{id}")]
    [Authorize(Roles = AppConstants.Roles.PlatformAdmin + "," + AppConstants.Roles.Instructor)]
    public async Task<ApiResponse<CourseDetailDto>> Update(int id, [FromBody] UpdateCourseDto dto, CancellationToken ct)
        => ApiResponse<CourseDetailDto>.Ok(await _courses.UpdateAsync(id, dto, ct));

    [HttpPatch("{id}/publish")]
    [Authorize(Roles = AppConstants.Roles.PlatformAdmin + "," + AppConstants.Roles.Instructor)]
    public async Task<ApiResponse> Publish(int id, CancellationToken ct)
    {
        await _courses.PublishAsync(id, ct);
        return ApiResponse.OkNoData("Course published.");
    }

    [HttpPatch("{id}/unpublish")]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse> Unpublish(int id, CancellationToken ct)
    {
        await _courses.UnpublishAsync(id, ct);
        return ApiResponse.OkNoData("Course unpublished.");
    }

    [HttpPatch("{id}/archive")]
    [Authorize(Roles = AppConstants.Roles.PlatformAdmin + "," + AppConstants.Roles.Instructor)]
    public async Task<ApiResponse> Archive(int id, CancellationToken ct)
    {
        await _courses.ArchiveAsync(id, ct);
        return ApiResponse.OkNoData("Course archived.");
    }

    [HttpPatch("{id}/home-page")]
    [Authorize(Roles = AppConstants.Roles.PlatformAdmin + "," + AppConstants.Roles.Instructor)]
    public async Task<ApiResponse<CourseDetailDto>> SetHomePage(int id, [FromQuery] string value, CancellationToken ct)
        => ApiResponse<CourseDetailDto>.Ok(await _courses.SetHomePageAsync(id, value, CurrentUserId, ct));

    [HttpDelete("{id}")]
    [Authorize(Roles = AppConstants.Roles.PlatformAdmin)]
    public async Task<ApiResponse> Delete(int id, CancellationToken ct)
    {
        await _courses.DeleteAsync(id, ct);
        return ApiResponse.OkNoData("Course deleted.");
    }

    [HttpPost("{id}/enroll/{userId}")]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse> EnrollUser(int id, int userId, CancellationToken ct)
    {
        await _courses.EnrollUserAsync(id, userId, CurrentUserId, ct);
        return ApiResponse.OkNoData("User enrolled.");
    }

    [HttpDelete("{id}/enroll/{userId}")]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse> UnenrollUser(int id, int userId, CancellationToken ct)
    {
        await _courses.UnenrollUserAsync(id, userId, ct);
        return ApiResponse.OkNoData("User unenrolled.");
    }

    [HttpGet("{id}/enrollments")]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse<List<CourseEnrollmentDto>>> GetEnrollments(int id, CancellationToken ct)
        => ApiResponse<List<CourseEnrollmentDto>>.Ok(await _courses.GetEnrollmentsAsync(id, ct));

    [HttpPost("{id}/enrollments")]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse<int>> EnrollMany(int id, [FromBody] List<int> userIds, CancellationToken ct)
        => ApiResponse<int>.Ok(await _courses.EnrollUsersAsync(id, userIds, CurrentUserId, ct), "Users enrolled.");

    [HttpGet("user/{userId}/enrolled")]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse<List<CourseListDto>>> GetUserEnrolled(int userId, CancellationToken ct)
        => ApiResponse<List<CourseListDto>>.Ok(await _courses.GetEnrolledCoursesForUserAsync(userId, ct));
}
