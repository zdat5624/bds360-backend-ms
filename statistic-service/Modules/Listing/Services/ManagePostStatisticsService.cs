using StatisticService.Grpc.Listing.Statistic;
// Import thư mục DTOs
using StatisticService.Modules.Listing.DTOs;
// Alias cho gRPC để code ngắn gọn
using GrpcListing = StatisticService.Grpc.Listing.Statistic;

namespace StatisticService.Modules.Listing.Services;

public class ManagePostStatisticsService(
    GrpcListing.InternalListingStatisticService.InternalListingStatisticServiceClient listingClient,
    ILogger<ManagePostStatisticsService> logger
)
{
    public async Task<ManagePostStatisticsResponse> GetPostDashboardAsync(int days)
    {
        // 1. Gọi thẳng sang Listing Service (Java) qua gRPC (PostDashboardRequest này là của gRPC)
        var reply = await listingClient.GetPostDashboardStatsAsync(
            new GrpcListing.PostDashboardRequest { Days = days }
        );

        // 2. Map dữ liệu sang C# DTO
        // 🌟 BẮT BUỘC PHẢI DÙNG 'DTOs.' ĐỂ C# BIẾT ĐÂY LÀ DTO CỦA BẠN CHỨ KHÔNG PHẢI CLASS DO gRPC SINH RA
        var kpis = new DTOs.KpiSummary(
            ActiveListings: reply.Kpis.ActiveListings,
            NewPosts: reply.Kpis.NewPosts,
            NewPostsGrowthPercent: reply.Kpis.NewPostsGrowthPercent,
            ModerationBacklog: reply.Kpis.ModerationBacklog,
            VipRatio: reply.Kpis.VipRatio
        );

        // 🌟 Thêm 'DTOs.' ở tất cả các chữ 'new'
        var supplyTrend = reply
            .SupplyTrend.Select(x => new DTOs.PostGrowthTrend(x.Date, x.Count))
            .ToList();
        var demandStructure = reply
            .DemandStructure.Select(x => new DTOs.ListingTypeStats(x.Type, x.Count))
            .ToList();
        var topProvinces = reply
            .TopProvinces.Select(x => new DTOs.ProvinceStats(x.Name, x.Count))
            .ToList();

        var topViewed = reply.TopViewedPosts.Select(MapPostLog).ToList();
        var latestVip = reply.LatestVipPosts.Select(MapPostLog).ToList();

        logger.LogInformation("Lấy thành công Dashboard Tin Đăng từ Listing Service.");

        // ManagePostStatisticsResponse thì không bị trùng nên không cần DTOs.
        return new ManagePostStatisticsResponse(
            Kpis: kpis,
            SupplyTrend: supplyTrend,
            DemandStructure: demandStructure,
            TopProvinces: topProvinces,
            TopViewedPosts: topViewed,
            LatestVipPosts: latestVip
        );
    }

    // 🌟 Hàm phụ trợ map PostLogDto. Đầu vào là GrpcListing, đầu ra là DTOs.
    private static DTOs.PostLogDto MapPostLog(GrpcListing.PostLogDto g)
    {
        return new DTOs.PostLogDto(
            Id: g.Id,
            Title: g.Title,
            Views: g.Views,
            ListingType: g.ListingType,
            UserName: g.UserName,
            UserAvatar: g.UserAvatar,
            VipLevel: g.VipLevel,
            CreatedAt: DateTimeOffset.FromUnixTimeMilliseconds(g.CreatedAtMillis)
        );
    }
}
