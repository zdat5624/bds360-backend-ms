using System.Text.Json.Serialization;

namespace StatisticService.Modules.UserClient.DTOs
{
    public class KpiSummary
    {
        public long AvailableBalance { get; set; }
        public long ActivePosts { get; set; }
        public long TotalViews { get; set; }
        public long MonthlySpending { get; set; }
    }

    public class ViewTrend
    {
        [JsonPropertyName("date")]
        public string Date { get; set; } = string.Empty;

        [JsonPropertyName("views")]
        public long Views { get; set; }
    }

    public class PostStatusBreakdown
    {
        [JsonPropertyName("status")]
        public string Status { get; set; } = string.Empty;

        [JsonPropertyName("count")]
        public long Count { get; set; }
    }

    public class TopPost
    {
        public long PostId { get; set; }
        public string Title { get; set; } = string.Empty;
        public long Views { get; set; }
        public string VipName { get; set; } = string.Empty;
    }

    public class CashFlow
    {
        [JsonPropertyName("month")]
        public string Month { get; set; } = string.Empty;

        [JsonPropertyName("depositAmount")]
        public long DepositAmount { get; set; }

        [JsonPropertyName("paymentAmount")]
        public long PaymentAmount { get; set; }
    }
}
