using Microsoft.AspNetCore.Mvc;
using System.Text.Json.Serialization;
using StatisticService.Common.Configs;
using StatisticService.Common.Exceptions;
using StatisticService.Security.Extensions;
using StatisticService.Security.Middlewares;
using StatisticService.Modules.Admin.Services;
using StatisticService.Grpc.Payment;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<ApiBehaviorOptions>(options => options.SuppressModelStateInvalidFilter = true);

builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        // serialize enum thành string, tránh trả về số
        options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
    });

builder.Services.AddExceptionHandler<GlobalExceptionHandler>();
builder.Services.AddProblemDetails();

// 1. Load và check file .env
builder.Services.AddAppConfigurations(builder.Configuration);

// 2. Setup JWT (Truyền cấu hình vào đây)
builder.Services.AddCustomJwtAuthentication(builder.Configuration);

// 3. Setup Services
builder.Services.AddHttpContextAccessor();
builder.Services.AddScoped<AdminStatisticsService>();


builder.Services.AddGrpcClient<InternalPaymentGrpcService.InternalPaymentGrpcServiceClient>((sp, options) =>
{
    var env = sp.GetRequiredService<IOptions<EnvConfig>>().Value;
    options.Address = new Uri(env.GRPC_PAYMENT_URL);
});


var app = builder.Build();

app.UsePathBase("/api/v1");

app.UseExceptionHandler();

app.UseRouting();

app.UseMiddleware<CustomJwtMiddleware>();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();