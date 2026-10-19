using StatisticService.Grpc.Identity.Statistic;
using StatisticService.Grpc.Listing.Statistic;
using StatisticService.Grpc.Payment.Statistic;
using StatisticService.Modules.Admin.DTOs;

namespace StatisticService.Modules.Admin.Services
{
    public class SystemOverviewService
    {
        private readonly InternalListingStatisticService.InternalListingStatisticServiceClient _listingClient;
        private readonly InternalPaymentStatisticService.InternalPaymentStatisticServiceClient _paymentClient;
        private readonly InternalIdentityStatisticService.InternalIdentityStatisticServiceClient _identityClient;

        public SystemOverviewService(
            InternalListingStatisticService.InternalListingStatisticServiceClient listingClient,
            InternalPaymentStatisticService.InternalPaymentStatisticServiceClient paymentClient,
            InternalIdentityStatisticService.InternalIdentityStatisticServiceClient identityClient
        )
        {
            _listingClient = listingClient;
            _paymentClient = paymentClient;
            _identityClient = identityClient;
        }

        public async Task<SystemOverviewResponse> GetSystemOverviewAsync(int days)
        {
            var emptyReq = new Google.Protobuf.WellKnownTypes.Empty();

            // Gọi song song TẤT CẢ các gRPC endpoint
            var listingTask = _listingClient
                .GetSystemListingStatsAsync(new SystemListingRequest { Days = days })
                .ResponseAsync;
            var paymentTask = _paymentClient
                .GetSystemRevenueStatsAsync(new SystemRevenueRequest { Days = days })
                .ResponseAsync;
            var userTrendTask = _identityClient
                .GetNewUserTrendAsync(new NewUserTrendRequest { Days = days })
                .ResponseAsync;
            var verificationTask = _identityClient
                .GetPendingVerificationCountAsync(emptyReq)
                .ResponseAsync;

            await Task.WhenAll(listingTask, paymentTask, userTrendTask, verificationTask);

            var listingData = listingTask.Result;
            var paymentData = paymentTask.Result;
            var userTrendData = userTrendTask.Result;
            var verificationData = verificationTask.Result;

            // Tính toán %
            double revenueGrowth = 0.0;
            if (paymentData.PrevRevenue > 0)
                revenueGrowth =
                    (
                        (double)(paymentData.CurrentRevenue - paymentData.PrevRevenue)
                        / paymentData.PrevRevenue
                    ) * 100;
            else if (paymentData.CurrentRevenue > 0)
                revenueGrowth = 100.0;

            double vipConversion =
                listingData.ActiveListings > 0
                    ? ((double)listingData.VipListings / listingData.ActiveListings) * 100
                    : 0.0;

            // Map MacroTrends (Merge Revenue và NewUsers theo Date)
            var macroMap = new Dictionary<string, MacroTrend>();
            foreach (var r in paymentData.RevenueTrend)
            {
                macroMap[r.Date] = new MacroTrend { Date = r.Date, Revenue = r.Revenue };
            }
            foreach (var u in userTrendData.Items)
            {
                if (macroMap.TryGetValue(u.Date, out var trend))
                {
                    trend.NewUsers = u.Count;
                }
                else
                {
                    macroMap[u.Date] = new MacroTrend { Date = u.Date, NewUsers = u.Count };
                }
            }

            return new SystemOverviewResponse
            {
                Kpis = new DTOs.KpiSummary
                {
                    TotalRevenue = paymentData.CurrentRevenue,
                    RevenueGrowthPercent = Math.Round(revenueGrowth * 10.0) / 10.0,
                    ActiveUsers = listingData.ActiveUsers,
                    ActiveListings = listingData.ActiveListings,
                    VipConversionRate = Math.Round(vipConversion * 10.0) / 10.0,
                },
                Backlog = new OperationsBacklog
                {
                    PendingPosts = listingData.PendingPosts,
                    PendingVerifications = verificationData.Count,
                    PendingDeposits = paymentData.PendingDeposits,
                },
                MacroTrends = macroMap.Values.OrderBy(x => x.Date).ToList(),
                VipDistributions = listingData
                    .VipDistributions.Select(x => new VipDistribution
                    {
                        VipLevel = x.VipLevel,
                        Count = x.Count,
                    })
                    .ToList(),
                TopSpenders = paymentData.TopSpenders.ToList(),
                TopPosts = listingData.TopPosts.ToList(),
            };
        }
    }
}
