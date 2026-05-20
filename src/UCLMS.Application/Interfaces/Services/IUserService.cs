using UCLMS.Application.DTOs.Users;
using UCLMS.Shared.Wrappers;

namespace UCLMS.Application.Interfaces.Services;

public interface IUserService
{
    Task<PagedResult<UserListDto>> GetAllAsync(UserFilterDto filter, CancellationToken ct = default);
    Task<UserDetailDto> GetByIdAsync(int id, CancellationToken ct = default);
    Task<UserDetailDto> CreateAsync(CreateUserDto dto, CancellationToken ct = default);
    Task<UserDetailDto> UpdateAsync(int id, UpdateUserDto dto, CancellationToken ct = default);
    Task DeactivateAsync(int id, CancellationToken ct = default);
    Task ResendInvitationAsync(int id, CancellationToken ct = default);
    Task UpdateObserverScopeAsync(int id, UpdateObserverScopeDto dto, CancellationToken ct = default);
}
