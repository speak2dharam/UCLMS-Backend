using System.Security.Cryptography;

namespace UCLMS.Shared.Helpers;

public static class TokenHelper
{
    public static string GenerateSecureToken(int length = 64)
    {
        var bytes = RandomNumberGenerator.GetBytes(length);
        return Convert.ToBase64String(bytes)
            .Replace("+", "-")
            .Replace("/", "_")
            .Replace("=", "");
    }

    public static string GenerateVerificationCode() =>
        Guid.NewGuid().ToString("N").ToUpperInvariant();
}
