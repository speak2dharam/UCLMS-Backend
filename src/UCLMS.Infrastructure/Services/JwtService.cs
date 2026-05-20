using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using UCLMS.Application.Interfaces.Services;
using UCLMS.Domain.Entities;
using UCLMS.Shared.Constants;
using UCLMS.Shared.Helpers;

namespace UCLMS.Infrastructure.Services;

public class JwtService : IJwtService
{
    private readonly SymmetricSecurityKey _key;
    public DateTime AccessTokenExpiry => DateTime.UtcNow.AddMinutes(AppConstants.Jwt.AccessTokenExpiryMinutes);

    public JwtService(IConfiguration config)
    {
        _key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Jwt:Secret"]!));
    }

    public string GenerateAccessToken(User user)
    {
        var claims = new[]
        {
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
            new Claim(ClaimTypes.Email, user.Email),
            new Claim(ClaimTypes.Name, user.FullName),
            new Claim(ClaimTypes.Role, user.Role.ToString()),
            new Claim("orgId", user.OrganizationId?.ToString() ?? "")
        };

        var token = new JwtSecurityToken(
            issuer: AppConstants.Jwt.Issuer,
            audience: AppConstants.Jwt.Audience,
            claims: claims,
            expires: AccessTokenExpiry,
            signingCredentials: new SigningCredentials(_key, SecurityAlgorithms.HmacSha256)
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }

    public string GenerateRefreshToken() => TokenHelper.GenerateSecureToken();
}
