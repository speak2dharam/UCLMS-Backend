namespace UCLMS.Domain.Enums;

/// <summary>
/// What a row in a Module references. Matches the four item types we expose in the builder UI
/// (Canvas additionally has File and ExternalUrl; those can be added later without breaking this enum).
/// </summary>
public enum ModuleItemType
{
    /// <summary>Reference to a <see cref="Entities.CoursePage"/>.</summary>
    Page = 0,
    /// <summary>Reference to a <see cref="Entities.Quiz"/>.</summary>
    Quiz = 1,
    /// <summary>Reference to an <see cref="Entities.Assignment"/>.</summary>
    Assignment = 2,
    /// <summary>Label-only row used to visually group items inside a module.</summary>
    SubHeader = 3
}
