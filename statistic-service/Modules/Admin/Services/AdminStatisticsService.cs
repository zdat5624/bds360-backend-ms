using StatisticService.Modules.Admin.DTOs;
using StatisticService.Grpc.Payment; // 🌟 Import Client được sinh tự động từ payment.proto

namespace StatisticService.Modules.Admin.Services;

// Dùng C# 12 Primary Constructor để tiêm gRPC Client và Logger cực gọn
public class AdminStatisticsService(
    InternalPaymentGrpcService.InternalPaymentGrpcServiceClient paymentClient,
    ILogger<AdminStatisticsService> logger)
{
    // ==========================================
    // 1. LẤY THỐNG KÊ TỔNG QUAN
    // ==========================================
    public async Task<AdminStatisticsResponse> GetStatisticsAsync()
    {
        var now = DateTime.UtcNow;

        // 🌟 Gọi gRPC sang Payment Service (Java) để lấy doanh thu
        var paymentReply = await paymentClient.GetRevenueStatsAsync(
            new RevenueStatsRequest { Year = now.Year, Month = now.Month }
        );

        // Mock data tạm thời cho 2 thông số của Identity và Listing (chưa làm gRPC)
        long totalUsers = 450;
        long pendingPosts = 12;

        logger.LogInformation("Đã đồng bộ thành công dữ liệu doanh thu qua gRPC.");

        // Ghép dữ liệu trả về cho Controller
        return new AdminStatisticsResponse(
            TotalRevenueYear: paymentReply.TotalRevenueYear,
            TotalRevenueMonth: paymentReply.TotalRevenueMonth,
            TotalUsers: totalUsers,
            PendingPosts: pendingPosts
        );
    }

    // ==========================================
    // 2. LẤY DOANH THU 12 THÁNG
    // ==========================================
    public async Task<List<MonthlyRevenueResponse>> GetMonthlyRevenueAsync(int year)
    {
        // 🌟 Gọi gRPC sang Payment Service lấy mảng 12 tháng
        var reply = await paymentClient.GetMonthlyRevenueAsync(
            new YearRequest { Year = year }
        );

        // Chuyển đổi (Map) kết quả từ List của gRPC sang List DTO nội bộ của .NET
        var revenues = reply.Items.Select(item => new MonthlyRevenueResponse(
            Month: item.Month,
            Revenue: item.Revenue
        )).ToList();

        return revenues;
    }
}