using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Microsoft.Extensions.Configuration;
using UCLMS.Application.Interfaces.Services;

namespace UCLMS.Infrastructure.Services;

public class BlobStorageService : IBlobStorageService
{
    private readonly BlobServiceClient _client;

    public BlobStorageService(IConfiguration config)
    {
        _client = new BlobServiceClient(config["Azure:BlobStorage:ConnectionString"]);
    }

    public async Task<string> UploadAsync(Stream content, string fileName, string containerName, string contentType, CancellationToken ct = default)
    {
        var container = _client.GetBlobContainerClient(containerName);
        await container.CreateIfNotExistsAsync(PublicAccessType.None, cancellationToken: ct);

        var blobName = $"{Guid.NewGuid():N}_{fileName}";
        var blob = container.GetBlobClient(blobName);
        await blob.UploadAsync(content, new BlobHttpHeaders { ContentType = contentType }, cancellationToken: ct);
        return blob.Uri.ToString();
    }

    public async Task DeleteAsync(string blobUrl, string containerName, CancellationToken ct = default)
    {
        var container = _client.GetBlobContainerClient(containerName);
        var blobName = new Uri(blobUrl).Segments.Last();
        await container.DeleteBlobIfExistsAsync(blobName, cancellationToken: ct);
    }

    public async Task<Stream> DownloadAsync(string blobUrl, string containerName, CancellationToken ct = default)
    {
        var container = _client.GetBlobContainerClient(containerName);
        var blobName = new Uri(blobUrl).Segments.Last();
        var blob = container.GetBlobClient(blobName);
        var response = await blob.DownloadAsync(ct);
        return response.Value.Content;
    }
}
