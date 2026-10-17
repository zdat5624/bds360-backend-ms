namespace StatisticService.Modules.Admin.DTOs;

public record AdminStatisticsResponse(
    long TotalRevenueYear,
    long TotalRevenueMonth,
    long TotalUsers,
    long PendingPosts
);

