using Google.Protobuf.WellKnownTypes;
using StatisticService.Grpc.Identity.Statistic;
using StatisticService.Grpc.Listing.Statistic;
using StatisticService.Modules.Identity.DTOs;

namespace StatisticService.Modules.Identity.Services
{
    public class ManageUserStatisticsService
    {
        private readonly InternalIdentityStatisticService.InternalIdentityStatisticServiceClient _identityClient;
        private readonly InternalListingStatisticService.InternalListingStatisticServiceClient _listingClient;

        public ManageUserStatisticsService(
            InternalIdentityStatisticService.InternalIdentityStatisticServiceClient identityClient,
            InternalListingStatisticService.InternalListingStatisticServiceClient listingClient
        )
        {
            _identityClient = identityClient;
            _listingClient = listingClient;
        }

        public async Task<ManageUserStatisticsResponse> GetDashboardStatisticsAsync(int days)
        {
            // 1. Gọi song song 2 Microservices
            var identityTask = _identityClient
                .GetUserDashboardStatsAsync(new UserDashboardRequest { Days = days })
                .ResponseAsync;
            var listingTask = _listingClient.GetUserPostStatsAsync(new Empty()).ResponseAsync;

            await Task.WhenAll(identityTask, listingTask);

            var identityData = identityTask.Result;
            var listingData = listingTask.Result;

            // 2. Tính toán % KPI
            double growthPercent = 0.0;
            if (identityData.PrevNewUsers > 0)
            {
                growthPercent =
                    (
                        (double)(identityData.NewUsers - identityData.PrevNewUsers)
                        / identityData.PrevNewUsers
                    ) * 100;
            }
            else if (identityData.NewUsers > 0)
            {
                growthPercent = 100.0;
            }

            long totalNormalUsers = identityData.VerifiedCount + identityData.UnverifiedCount;
            double verificationRate =
                totalNormalUsers > 0
                    ? ((double)identityData.VerifiedCount / totalNormalUsers) * 100
                    : 0.0;

            var kpis = new DTOs.KpiSummary
            {
                TotalUsers = identityData.TotalUsers,
                NewUsers = identityData.NewUsers,
                NewUserGrowthPercent = Math.Round(growthPercent * 10.0) / 10.0,
                VerificationRate = Math.Round(verificationRate * 10.0) / 10.0,
                ActiveUsers = listingData.ActiveUsers,
            };

            // 3. Tính toán Chart Hành vi
            long viewersCount = identityData.TotalUsers - listingData.PostersCount;

            var behaviorStats = new UserBehaviorStats
            {
                PostersCount = listingData.PostersCount,
                ViewersCount = viewersCount > 0 ? viewersCount : 0,
            };

            var prestigeStats = new UserPrestigeStats
            {
                VerifiedCount = identityData.VerifiedCount,
                UnverifiedCount = identityData.UnverifiedCount,
            };

            // 4. Map Dữ liệu danh sách
            return new ManageUserStatisticsResponse
            {
                Kpis = kpis,
                BehaviorStats = behaviorStats,
                PrestigeStats = prestigeStats,
                GrowthTrend = identityData
                    .GrowthTrend.Select(x => new UserGrowthTrend
                    {
                        Date = x.Date,
                        NewUsers = x.NewUsers,
                    })
                    .ToList(),
                TopAgents = listingData
                    .TopAgents.Select(x => new TopAgent
                    {
                        UserId = x.UserId,
                        Name = x.Name,
                        Email = x.Email,
                        ActivePostCount = x.ActivePostCount,
                    })
                    .ToList(),
            };
        }
    }
}
