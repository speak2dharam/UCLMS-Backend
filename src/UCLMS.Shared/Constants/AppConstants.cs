namespace UCLMS.Shared.Constants;

public static class AppConstants
{
    public static class Roles
    {
        public const string PlatformAdmin = "PlatformAdmin";
        public const string Instructor = "Instructor";
        public const string Observer = "Observer";
        public const string Learner = "Learner";
        public const string AdminOrInstructor = "PlatformAdmin,Instructor";
        public const string AdminOrObserver = "PlatformAdmin,Observer";
        public const string All = "PlatformAdmin,Instructor,Observer,Learner";
    }

    public static class Jwt
    {
        public const string Issuer = "UCLMS";
        public const string Audience = "UCLMS-Users";
        // Short-lived access token: forces refresh-token rotation often, limits blast radius if a token leaks.
        public const int AccessTokenExpiryMinutes = 15;
        // Long-lived refresh token: keeps users signed in for a week of inactivity.
        public const int RefreshTokenExpiryDays = 7;
    }

    public static class Invitation
    {
        public const int TokenExpiryDays = 7;
    }

    public static class Blob
    {
        public const string ContainerCertificateTemplates = "certificate-templates";
        public const string ContainerCertificates = "certificates";
        public const string ContainerAssignments = "assignment-submissions";
        public const string ContainerCourseThumbnails = "course-thumbnails";
        public const string ContainerOrganizationLogos = "org-logos";
        public const string ContainerLessonFiles = "lesson-files";
    }

    public static class Pagination
    {
        public const int DefaultPage = 1;
        public const int DefaultPageSize = 20;
        public const int MaxPageSize = 100;
    }
}
