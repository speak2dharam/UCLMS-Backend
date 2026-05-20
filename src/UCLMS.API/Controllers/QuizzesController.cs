using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UCLMS.Application.DTOs.Quizzes;
using UCLMS.Application.Interfaces.Services;
using UCLMS.Shared.Constants;
using UCLMS.Shared.Wrappers;

namespace UCLMS.API.Controllers;

public class QuizzesController : BaseController
{
    private readonly IQuizService _quizzes;

    public QuizzesController(IQuizService quizzes) => _quizzes = quizzes;

    [HttpGet]
    public async Task<ApiResponse<PagedResult<QuizSummaryDto>>> GetByCourse([FromQuery] int courseId, CancellationToken ct)
    {
        var items = (await _quizzes.GetByCourseAsync(courseId, ct)).ToList();
        return ApiResponse<PagedResult<QuizSummaryDto>>.Ok(new PagedResult<QuizSummaryDto>
        {
            Items = items,
            TotalCount = items.Count,
            Page = 1,
            PageSize = items.Count > 0 ? items.Count : 1
        });
    }

    [HttpGet("{id}")]
    public async Task<ApiResponse<QuizDetailDto>> GetById(int id, CancellationToken ct)
        => ApiResponse<QuizDetailDto>.Ok(await _quizzes.GetByIdAsync(id, ct));

    [HttpPost]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse<QuizDetailDto>> Create([FromBody] CreateQuizDto dto, CancellationToken ct)
        => ApiResponse<QuizDetailDto>.Ok(await _quizzes.CreateAsync(dto, ct));

    [HttpPut("{id}")]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse<QuizDetailDto>> Update(int id, [FromBody] UpdateQuizDto dto, CancellationToken ct)
        => ApiResponse<QuizDetailDto>.Ok(await _quizzes.UpdateAsync(id, dto, ct));

    [HttpDelete("{id}")]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse> Delete(int id, CancellationToken ct)
    {
        await _quizzes.DeleteAsync(id, ct);
        return ApiResponse.OkNoData("Quiz deleted.");
    }

    [HttpPost("{quizId}/questions")]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse<QuestionDto>> AddQuestion(int quizId, [FromBody] CreateQuestionDto dto, CancellationToken ct)
        => ApiResponse<QuestionDto>.Ok(await _quizzes.AddQuestionAsync(quizId, dto, ct));

    [HttpPut("{quizId}/questions/{questionId}")]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse<QuestionDto>> UpdateQuestion(int quizId, int questionId, [FromBody] CreateQuestionDto dto, CancellationToken ct)
        => ApiResponse<QuestionDto>.Ok(await _quizzes.UpdateQuestionAsync(quizId, questionId, dto, ct));

    [HttpDelete("{quizId}/questions/{questionId}")]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse> DeleteQuestion(int quizId, int questionId, CancellationToken ct)
    {
        await _quizzes.DeleteQuestionAsync(quizId, questionId, ct);
        return ApiResponse.OkNoData("Question deleted.");
    }

    [HttpPost("{id}/start")]
    [Authorize(Roles = AppConstants.Roles.Learner + "," + AppConstants.Roles.Observer)]
    public async Task<ApiResponse<QuizAttemptDto>> StartAttempt(int id, CancellationToken ct)
        => ApiResponse<QuizAttemptDto>.Ok(await _quizzes.StartAttemptAsync(id, CurrentUserId, ct));

    [HttpPost("attempts/{attemptId}/submit")]
    [Authorize(Roles = AppConstants.Roles.Learner + "," + AppConstants.Roles.Observer)]
    public async Task<ApiResponse<QuizAttemptResultDto>> SubmitAttempt(int attemptId, [FromBody] SubmitQuizDto dto, CancellationToken ct)
        => ApiResponse<QuizAttemptResultDto>.Ok(await _quizzes.SubmitAttemptAsync(attemptId, dto, CurrentUserId, ct));

    [HttpPost("attempts/{attemptId}/grade-short-answers")]
    [Authorize(Roles = AppConstants.Roles.AdminOrInstructor)]
    public async Task<ApiResponse> GradeShortAnswers(int attemptId, [FromBody] GradeShortAnswerDto dto, CancellationToken ct)
    {
        await _quizzes.GradeShortAnswerAsync(attemptId, dto, CurrentUserId, ct);
        return ApiResponse.OkNoData("Short answers graded.");
    }
}
