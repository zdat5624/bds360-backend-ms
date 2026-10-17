namespace StatisticService.Modules.Admin.DTOs;

public record MonthlyRevenueResponse(
    int Month,
    long Revenue
);