namespace UCLMS.Application.Interfaces.Services;

public interface IBlobStorageService
{
    Task<string> UploadAsync(Stream content, string fileName, string containerName, string contentType, CancellationToken ct = default);
    Task DeleteAsync(string blobUrl, string containerName, CancellationToken ct = default);
    Task<Stream> DownloadAsync(string blobUrl, string containerName, CancellationToken ct = default);
}
