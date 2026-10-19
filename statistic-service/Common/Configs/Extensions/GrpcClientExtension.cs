using System;
using System.Net.Http;
using System.Threading;
using Microsoft.Extensions.DependencyInjection;

namespace StatisticService.Common.Configs.Extensions
{
    public static class GrpcClientExtension
    {
        // Viết hàm mở rộng cho IHttpClientBuilder
        public static IHttpClientBuilder WithOptimizedSocketsHandler(
            this IHttpClientBuilder builder
        )
        {
            return builder.ConfigurePrimaryHttpMessageHandler(() =>
                new SocketsHttpHandler
                {
                    PooledConnectionIdleTimeout = Timeout.InfiniteTimeSpan, // Giữ kết nối không bị đóng khi rảnh rỗi
                    KeepAlivePingDelay = TimeSpan.FromSeconds(60), // Ping kiểm tra mạng định kỳ
                    KeepAlivePingTimeout = TimeSpan.FromSeconds(30),
                    EnableMultipleHttp2Connections = true, // Mở rộng băng thông HTTP/2 trong Docker
                }
            );
        }
    }
}
