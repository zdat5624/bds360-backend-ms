using System.Text.Json.Serialization;

namespace StatisticService.Modules.Listing.DTOs;

public record ManagePostStatisticsResponse(
    KpiSummary Kpis,
    List<PostGrowthTrend> SupplyTrend,
    List<ListingTypeStats> DemandStructure,
    List<ProvinceStats> TopProvinces,
    List<PostLogDto> TopViewedPosts,
    List<PostLogDto> LatestVipPosts
);

public record KpiSummary(
    long ActiveListings,
    long NewPosts,
    double NewPostsGrowthPercent,
    long ModerationBacklog,
    double VipRatio
);

public record PostGrowthTrend(
    string Date, // Trả ra string định dạng yyyy-MM-dd
    long Count
);

public record ListingTypeStats(string Type, long Count);

public record ProvinceStats(string Name, long Count);

public record PostLogDto(
    long Id,
    string Title,
    long Views,
    string ListingType,
    string UserName,
    string UserAvatar,
    int VipLevel,
    DateTimeOffset CreatedAt
);
