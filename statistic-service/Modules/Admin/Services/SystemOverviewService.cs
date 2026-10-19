using StatisticService.Grpc.Identity; // Thêm dòng này (Core Identity)
using StatisticService.Grpc.Identity.Statistic; // (Thống kê Identity)
using StatisticService.Grpc.Listing.Statistic;
using StatisticService.Grpc.Payment.Statistic;
using StatisticService.Modules.Admin.DTOs;

namespace StatisticService.Modules.Admin.Services
{
    public class SystemOverviewService
    {
        private readonly InternalListingStatisticService.InternalListingStatisticServiceClient _listingClient;
        private readonly InternalPaymentStatisticService.InternalPaymentStatisticServiceClient _paymentClient;
        private readonly InternalIdentityStatisticService.InternalIdentityStatisticServiceClient _identityStatClient;
        private readonly InternalIdentityService.InternalIdentityServiceClient _identityCoreClient;

        public SystemOverviewService(
            InternalListingStatisticService.InternalListingStatisticServiceClient listingClient,
            InternalPaymentStatisticService.InternalPaymentStatisticServiceClient paymentClient,
            InternalIdentityStatisticService.InternalIdentityStatisticServiceClient identityStatClient,
            InternalIdentityService.InternalIdentityServiceClient identityCoreClient
        ) // 🌟 Thêm Inject
        {
            _listingClient = listingClient;
            _paymentClient = paymentClient;
            _identityStatClient = identityStatClient;
            _identityCoreClient = identityCoreClient;
        }

        public async Task<SystemOverviewResponse> GetSystemOverviewAsync(int days)
        {
            var emptyReq = new Google.Protobuf.WellKnownTypes.Empty();

            // 1. Gọi song song 4 endpoints thống kê
            var listingTask = _listingClient
                .GetSystemListingStatsAsync(new SystemListingRequest { Days = days })
                .ResponseAsync;
            var paymentTask = _paymentClient
                .GetSystemRevenueStatsAsync(new SystemRevenueRequest { Days = days })
                .ResponseAsync;
            var userTrendTask = _identityStatClient
                .GetNewUserTrendAsync(new NewUserTrendRequest { Days = days })
                .ResponseAsync;
            var verificationTask = _identityStatClient
                .GetPendingVerificationCountAsync(emptyReq)
                .ResponseAsync;

            await Task.WhenAll(listingTask, paymentTask, userTrendTask, verificationTask);

            var listingData = listingTask.Result;
            var paymentData = paymentTask.Result;
            var userTrendData = userTrendTask.Result;
            var verificationData = verificationTask.Result;

            // 2. Gom tất cả UserIds cần lấy Info (Top Spenders + Top Posts)
            var userIdsToFetch = new HashSet<long>();
            foreach (var spender in paymentData.TopSpenders)
                userIdsToFetch.Add(spender.UserId);

            // Giả định TopPosts DTO hiện tại có chứa UserId. Nếu không có (do DTO cũ), bạn hãy update DTO PostLogDto thêm trường UserId nhé.
            // foreach (var post in listingData.TopPosts) userIdsToFetch.Add(post.UserId);

            // 3. Gọi Identity Service lấy Data hàng loạt
            var userDict = new Dictionary<long, UserInfo>();
            if (userIdsToFetch.Any())
            {
                var req = new GetUsersInfoRequest();
                req.UserIds.AddRange(userIdsToFetch);

                var identityReply = await _identityCoreClient.GetUsersInfoAsync(req);
                userDict = new Dictionary<long, UserInfo>(identityReply.Users);
            }

            // 4. Tính toán %
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

            // 5. Map MacroTrends (Merge Revenue và NewUsers theo Date)
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

            // 6. Enrich Data & Trả về Frontend
            var finalTopSpenders = paymentData
                .TopSpenders.Select(spender =>
                {
                    if (userDict.TryGetValue(spender.UserId, out var userInfo))
                    {
                        spender.Name = userInfo.Name;
                        spender.Email = userInfo.Email;
                        spender.Avatar = userInfo.Avatar; // Map cứng luôn Avatar thật
                    }
                    return spender;
                })
                .ToList();

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
                TopSpenders = finalTopSpenders,
                TopPosts = listingData.TopPosts.ToList(),
            };
        }
    }
}
