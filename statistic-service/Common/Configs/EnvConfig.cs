// --- File: EnvConfig.cs ---
using System.ComponentModel.DataAnnotations;

namespace StatisticService.Common.Configs;

public class EnvConfig
{
    // ==========================================
    // SHARED SECRETS (Tự động nạp từ file .env qua Docker)
    // ==========================================
    [Required(ErrorMessage = "❌ Không tìm thấy JWT_SECRET trong môi trường!")]
    [MinLength(32, ErrorMessage = "❌ Chuỗi JWT_SECRET phải dài ít nhất 32 ký tự.")]
    public string JWT_SECRET { get; init; } = string.Empty;

    // ==========================================
    // MICROSERVICES HOSTS (Lấy từ .env)
    // ==========================================
    public string IDENTITY_HOST { get; init; } = "localhost";
    public string LISTING_HOST { get; init; } = "localhost";
    public string PAYMENT_HOST { get; init; } = "localhost";

    // ==========================================
    // GRPC PORTS (Lấy từ .env)
    // ==========================================
    public string GRPC_IDENTITY_PORT { get; init; } = "9091";
    public string GRPC_LISTING_PORT { get; init; } = "9092";
    public string GRPC_PAYMENT_PORT { get; init; } = "9093";

    // ==========================================
    // GRPC URLS (Tự động lắp ráp, KHÔNG map từ .env)
    // ==========================================
    // C# gRPC Client Insecure (không SSL) bắt buộc phải dùng http://
    public string DOTNET_GRPC_IDENTITY_URL => $"http://{IDENTITY_HOST}:{GRPC_IDENTITY_PORT}";
    public string DOTNET_GRPC_LISTING_URL => $"http://{LISTING_HOST}:{GRPC_LISTING_PORT}";
    public string DOTNET_GRPC_PAYMENT_URL => $"http://{PAYMENT_HOST}:{GRPC_PAYMENT_PORT}";
}
