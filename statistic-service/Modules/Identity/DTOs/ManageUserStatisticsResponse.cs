using System.Text.Json.Serialization;

namespace StatisticService.Modules.Identity.DTOs
{
    public class ManageUserStatisticsResponse
    {
        [JsonPropertyName("kpis")]
        public KpiSummary Kpis { get; set; } = null!;

        [JsonPropertyName("growthTrend")]
        public List<UserGrowthTrend> GrowthTrend { get; set; } = new();

        [JsonPropertyName("behaviorStats")]
        public UserBehaviorStats BehaviorStats { get; set; } = null!;

        [JsonPropertyName("prestigeStats")]
        public UserPrestigeStats PrestigeStats { get; set; } = null!;

        [JsonPropertyName("topAgents")]
        public List<TopAgent> TopAgents { get; set; } = new();
    }

    public class KpiSummary
    {
        [JsonPropertyName("totalUsers")]
        public long TotalUsers { get; set; }

        [JsonPropertyName("newUsers")]
        public long NewUsers { get; set; }

        [JsonPropertyName("newUserGrowthPercent")]
        public double NewUserGrowthPercent { get; set; }

        [JsonPropertyName("verificationRate")]
        public double VerificationRate { get; set; }

        [JsonPropertyName("activeUsers")]
        public long ActiveUsers { get; set; }
    }

    public class UserGrowthTrend
    {
        [JsonPropertyName("date")]
        public string Date { get; set; } = string.Empty;

        [JsonPropertyName("newUsers")]
        public long NewUsers { get; set; }
    }

    public class UserBehaviorStats
    {
        [JsonPropertyName("postersCount")]
        public long PostersCount { get; set; }

        [JsonPropertyName("viewersCount")]
        public long ViewersCount { get; set; }
    }

    public class UserPrestigeStats
    {
        [JsonPropertyName("verifiedCount")]
        public long VerifiedCount { get; set; }

        [JsonPropertyName("unverifiedCount")]
        public long UnverifiedCount { get; set; }
    }

    public class TopAgent
    {
        [JsonPropertyName("userId")]
        public long UserId { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; } = string.Empty;

        [JsonPropertyName("email")]
        public string Email { get; set; } = string.Empty;

        [JsonPropertyName("activePostCount")]
        public long ActivePostCount { get; set; }
    }
}
