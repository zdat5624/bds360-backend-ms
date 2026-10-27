// --- File: Program.cs ---
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using StatisticService.Common.Configs;
using StatisticService.Common.Configs.Extensions;
using StatisticService.Common.Exceptions;
using StatisticService.Grpc.Identity;
using StatisticService.Grpc.Identity.Statistic;
using StatisticService.Grpc.Listing.Statistic;
using StatisticService.Grpc.Payment.Statistic;
using StatisticService.Modules.Admin.Services;
using StatisticService.Modules.Identity.Services;
using StatisticService.Modules.Listing.Services;
using StatisticService.Modules.Payment.Services;
using StatisticService.Modules.UserClient.Services;
using StatisticService.Security.Extensions;
using StatisticService.Security.Middlewares;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<ApiBehaviorOptions>(options =>
    options.SuppressModelStateInvalidFilter = true
);

builder
    .Services.AddControllers()
    .AddJsonOptions(options =>
    {
        // serialize enum thành string, tránh trả về số
        options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
    });

builder.Services.AddExceptionHandler<GlobalExceptionHandler>();
builder.Services.AddProblemDetails();

// 1. Load và check file .env (Sẽ map IDENTITY_HOST, GRPC_IDENTITY_PORT...)
builder.Services.AddAppConfigurations(builder.Configuration);

// 2. Setup JWT (Truyền cấu hình vào đây)
builder.Services.AddCustomJwtAuthentication(builder.Configuration);

// 3. Setup Services
builder.Services.AddHttpContextAccessor();
builder.Services.AddScoped<AdminStatisticsService>();
builder.Services.AddScoped<ManagePostStatisticsService>();
builder.Services.AddScoped<ManageTransactionStatisticsService>();
builder.Services.AddScoped<ManageUserStatisticsService>();
builder.Services.AddScoped<UserClientStatisticsService>();
builder.Services.AddScoped<SystemOverviewService>();

// ==========================================
// 4. SETUP GRPC CLIENTS
// ==========================================

builder
    .Services.AddGrpcClient<InternalPaymentStatisticService.InternalPaymentStatisticServiceClient>(
        (sp, options) =>
        {
            var env = sp.GetRequiredService<IOptions<EnvConfig>>().Value;
            // Gọi URL đã được lắp ráp: http://payment-service:9093
            options.Address = new Uri(env.DOTNET_GRPC_PAYMENT_URL);
        }
    )
    .WithOptimizedSocketsHandler(); // 🌟 Áp dụng cấu hình tối ưu HTTP/2

builder
    .Services.AddGrpcClient<InternalIdentityStatisticService.InternalIdentityStatisticServiceClient>(
        (sp, options) =>
        {
            var env = sp.GetRequiredService<IOptions<EnvConfig>>().Value;
            options.Address = new Uri(env.DOTNET_GRPC_IDENTITY_URL);
        }
    )
    .WithOptimizedSocketsHandler();

builder
    .Services.AddGrpcClient<InternalIdentityService.InternalIdentityServiceClient>(
        (sp, options) =>
        {
            var env = sp.GetRequiredService<IOptions<EnvConfig>>().Value;
            options.Address = new Uri(env.DOTNET_GRPC_IDENTITY_URL);
        }
    )
    .WithOptimizedSocketsHandler();

builder
    .Services.AddGrpcClient<InternalListingStatisticService.InternalListingStatisticServiceClient>(
        (sp, options) =>
        {
            var env = sp.GetRequiredService<IOptions<EnvConfig>>().Value;
            options.Address = new Uri(env.DOTNET_GRPC_LISTING_URL);
        }
    )
    .WithOptimizedSocketsHandler();

var app = builder.Build();

app.UsePathBase("/api/v1");

app.UseExceptionHandler();

app.UseRouting();

app.UseMiddleware<CustomJwtMiddleware>();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
