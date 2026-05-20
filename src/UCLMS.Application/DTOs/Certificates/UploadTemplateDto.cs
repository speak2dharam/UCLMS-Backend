namespace UCLMS.Application.DTOs.Certificates;

public record UploadTemplateDto(string Name, string TemplateFileUrl, bool IsDefault = false);
