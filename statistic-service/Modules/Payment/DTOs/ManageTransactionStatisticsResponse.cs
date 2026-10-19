using System.Text.Json.Serialization;

namespace StatisticService.Modules.Payment.DTOs
{
    public class ManageTransactionStatisticsResponse
    {
        public KpiSummary Kpis { get; set; } = null!;
        public List<CashFlowTrend> CashFlowTrend { get; set; } = new();
        public List<TransactionStatusStats> StatusBreakdown { get; set; } = new();
        public List<TopSpender> TopSpenders { get; set; } = new();
        public List<TransactionLogDto> RecentDeposits { get; set; } = new();
        public List<TransactionLogDto> TopSpendingLogs { get; set; } = new();
    }

    public class KpiSummary
    {
        public long TotalCashIn { get; set; }
        public double CashInGrowthPercent { get; set; }
        public long TotalServiceUsage { get; set; }
        public double ServiceUsageGrowthPercent { get; set; }
        public long TotalLiabilities { get; set; }
        public double FailedDepositRate { get; set; }
    }

    public class CashFlowTrend
    {
        [JsonPropertyName("date")]
        public string Date { get; set; } = string.Empty; // Định dạng "yyyy-MM-dd"
        public long CashIn { get; set; }
        public long CashOut { get; set; }
    }

    public class TransactionStatusStats
    {
        public string Status { get; set; } = string.Empty;
        public long Count { get; set; }
    }

    public class TopSpender
    {
        public long UserId { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Avatar { get; set; } = string.Empty;
        public long TotalSpent { get; set; }
    }

    public class TransactionLogDto
    {
        public string TxnId { get; set; } = string.Empty;
        public string UserName { get; set; } = string.Empty;
        public string UserEmail { get; set; } = string.Empty;
        public string UserAvatar { get; set; } = string.Empty;
        public long Amount { get; set; }
        public string Status { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public DateTimeOffset CreatedAt { get; set; }
    }
}
