namespace UCLMS.Application.DTOs.Users;

public record UpdateObserverScopeDto(bool ObservesAllOrganizations, List<int> OrgIds);
