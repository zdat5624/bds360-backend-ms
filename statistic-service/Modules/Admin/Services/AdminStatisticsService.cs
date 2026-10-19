using Google.Protobuf.WellKnownTypes; // Để dùng được tham số new Empty()
using StatisticService.Grpc.Identity.Statistic;
using StatisticService.Grpc.Listing.Statistic;
using StatisticService.Grpc.Payment.Statistic;
using StatisticService.Modules.Admin.DTOs;

namespace StatisticService.Modules.Admin.Services;

public class AdminStatisticsService(
    InternalPaymentStatisticService.InternalPaymentStatisticServiceClient paymentClient,
    InternalIdentityStatisticService.InternalIdentityStatisticServiceClient identityClient,
    InternalListingStatisticService.InternalListingStatisticServiceClient listingClient,
    ILogger<AdminStatisticsService> logger)
{
    public async Task<AdminStatisticsResponse> GetStatisticsAsync()
    {
        var now = DateTime.UtcNow;

        // Bắn 3 Request gRPC cùng lúc
        var paymentTask = paymentClient.GetRevenueStatsAsync(new RevenueStatsRequest { Year = now.Year, Month = now.Month }).ResponseAsync;
        var userTask = identityClient.GetTotalUsersAsync(new Empty()).ResponseAsync;
        var postTask = listingClient.GetPendingPostsCountAsync(new Empty()).ResponseAsync;

        // Đợi cả 3 chạy xong
        await Task.WhenAll(paymentTask, userTask, postTask);

        var paymentReply = paymentTask.Result;
        var userReply = userTask.Result;
        var postReply = postTask.Result;

        logger.LogInformation("Lấy thành công Thống kê tổng quan từ 3 Microservices.");

        return new AdminStatisticsResponse(
            TotalRevenueYear: paymentReply.TotalRevenueYear,
            TotalRevenueMonth: paymentReply.TotalRevenueMonth,
            TotalUsers: userReply.TotalUsers,
            PendingPosts: postReply.PendingPosts
        );
    }

    public async Task<List<MonthlyRevenueResponse>> GetMonthlyRevenueAsync(int year)
    {
        MonthlyRevenueListReply reply = await paymentClient.GetMonthlyRevenueAsync(new YearRequest { Year = year });

        return reply.Items.Select(item => new MonthlyRevenueResponse(
            Month: item.Month,
            Revenue: item.Revenue
        )).ToList();
    }
}