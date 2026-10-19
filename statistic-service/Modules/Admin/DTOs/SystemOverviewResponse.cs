using System.Text.Json.Serialization;
using StatisticService.Grpc.Listing.Statistic;
using StatisticService.Grpc.Payment.Statistic;

namespace StatisticService.Modules.Admin.DTOs
{
    public class SystemOverviewResponse
    {
        public KpiSummary Kpis { get; set; } = null!;
        public OperationsBacklog Backlog { get; set; } = null!;
        public List<MacroTrend> MacroTrends { get; set; } = new();
        public List<VipDistribution> VipDistributions { get; set; } = new();
        public List<TopSpenderItem> TopSpenders { get; set; } = new();
        public List<PostLogDto> TopPosts { get; set; } = new();
    }

    public class KpiSummary
    {
        public long TotalRevenue { get; set; }
        public double RevenueGrowthPercent { get; set; }
        public long ActiveUsers { get; set; }
        public long ActiveListings { get; set; }
        public double VipConversionRate { get; set; }
    }

    public class OperationsBacklog
    {
        public long PendingPosts { get; set; }
        public long PendingVerifications { get; set; }
        public long PendingDeposits { get; set; }
    }

    public class MacroTrend
    {
        [JsonPropertyName("date")]
        public string Date { get; set; } = string.Empty;
        public long Revenue { get; set; }
        public long NewUsers { get; set; }
    }

    public class VipDistribution
    {
        public int VipLevel { get; set; }
        public long Count { get; set; }
    }
}
