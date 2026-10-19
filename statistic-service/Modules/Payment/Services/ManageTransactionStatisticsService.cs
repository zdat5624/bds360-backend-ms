using Google.Protobuf.WellKnownTypes;
using StatisticService.Grpc.Identity;
using StatisticService.Grpc.Identity.Statistic;
using StatisticService.Grpc.Payment.Statistic;
using StatisticService.Modules.Payment.DTOs;

namespace StatisticService.Modules.Payment.Services
{
    public class ManageTransactionStatisticsService
    {
        private readonly InternalPaymentStatisticService.InternalPaymentStatisticServiceClient _paymentClient;
        private readonly InternalIdentityStatisticService.InternalIdentityStatisticServiceClient _identityClient;
        private readonly InternalIdentityService.InternalIdentityServiceClient _identityCoreClient;

        public ManageTransactionStatisticsService(
            InternalPaymentStatisticService.InternalPaymentStatisticServiceClient paymentClient,
            InternalIdentityStatisticService.InternalIdentityStatisticServiceClient identityClient,
            InternalIdentityService.InternalIdentityServiceClient identityCoreClient
        )
        {
            _paymentClient = paymentClient;
            _identityClient = identityClient;
            _identityCoreClient = identityCoreClient;
        }

        public async Task<ManageTransactionStatisticsResponse> GetTransactionDashboardAsync(
            int days
        )
        {
            // Bắn 2 request gRPC song song lấy số liệu cơ bản
            var paymentDataTask = _paymentClient
                .GetTransactionDashboardStatsAsync(new TransactionDashboardRequest { Days = days })
                .ResponseAsync;

            var identityDataTask = _identityClient
                .GetTotalSystemBalanceAsync(new Empty())
                .ResponseAsync;

            await Task.WhenAll(paymentDataTask, identityDataTask);

            var paymentData = paymentDataTask.Result;
            var identityData = identityDataTask.Result;

            // 1. THU THẬP TẤT CẢ USER_ID (GOM CẢ TOP SPENDERS + 2 LIST LOG)
            var userIdsToFetch = new HashSet<long>();
            foreach (var s in paymentData.TopSpenders)
                userIdsToFetch.Add(s.UserId);
            foreach (var r in paymentData.RecentDeposits)
                userIdsToFetch.Add(r.UserId);
            foreach (var t in paymentData.TopSpendingLogs)
                userIdsToFetch.Add(t.UserId);

            // 2. FETCH BULK (LẤY THÔNG TIN AVATAR & NAME) TỪ IDENTITY
            var userDict = new Dictionary<long, UserInfo>();
            if (userIdsToFetch.Any())
            {
                try
                {
                    var req = new GetUsersInfoRequest();
                    req.UserIds.AddRange(userIdsToFetch);
                    var identityReply = await _identityCoreClient.GetUsersInfoAsync(req);

                    foreach (var kvp in identityReply.Users)
                    {
                        userDict[kvp.Key] = kvp.Value;
                    }
                }
                catch (Exception)
                {
                    // Bỏ qua nếu lỗi mạng để không làm sập tiến trình load Dashboard
                }
            }

            // 3. TÍNH TOÁN CÁC CHỈ SỐ KPI TĂNG TRƯỞNG (%)
            double cashInGrowth = CalculateGrowth(paymentData.CashIn, paymentData.PrevCashIn);
            double serviceUsageGrowth = CalculateGrowth(
                paymentData.ServiceUsage,
                paymentData.PrevServiceUsage
            );

            double failedDepositRate =
                paymentData.TotalDeposits > 0
                    ? ((double)paymentData.FailedDeposits / paymentData.TotalDeposits) * 100
                    : 0.0;

            var kpis = new KpiSummary
            {
                TotalCashIn = paymentData.CashIn,
                CashInGrowthPercent = Math.Round(cashInGrowth * 10.0) / 10.0,
                TotalServiceUsage = paymentData.ServiceUsage,
                ServiceUsageGrowthPercent = Math.Round(serviceUsageGrowth * 10.0) / 10.0,
                TotalLiabilities = identityData.TotalBalance,
                FailedDepositRate = Math.Round(failedDepositRate * 10.0) / 10.0,
            };

            // 4. ÁNH XẠ VÀ LÀM GIÀU DỮ LIỆU TOP SPENDERS
            var finalTopSpenders = paymentData
                .TopSpenders.Select(x =>
                {
                    var spender = new TopSpender
                    {
                        UserId = x.UserId,
                        Name = x.Name,
                        Email = x.Email,
                        Avatar = x.Avatar,
                        TotalSpent = x.TotalSpent,
                    };

                    // Trộn data mới nhất từ Identity nếu có
                    if (userDict.TryGetValue(x.UserId, out var u))
                    {
                        spender.Name = u.Name;
                        spender.Email = u.Email;
                        spender.Avatar = u.Avatar;
                    }

                    // Luôn fallback avatar mặc định nếu không có avatar
                    spender.Avatar = string.IsNullOrEmpty(spender.Avatar)
                        ? "http://localhost:8080/uploads/avatar-default.webp"
                        : spender.Avatar;

                    return spender;
                })
                .ToList();

            // 5. TRẢ VỀ DTO HOÀN CHỈNH CHO FRONTEND
            return new ManageTransactionStatisticsResponse
            {
                Kpis = kpis,
                CashFlowTrend = paymentData
                    .CashFlowTrend.Select(x => new CashFlowTrend
                    {
                        Date = x.Date,
                        CashIn = x.CashIn,
                        CashOut = x.CashOut,
                    })
                    .ToList(),
                StatusBreakdown = paymentData
                    .StatusBreakdown.Select(x => new TransactionStatusStats
                    {
                        Status = x.Status,
                        Count = x.Count,
                    })
                    .ToList(),
                TopSpenders = finalTopSpenders,

                // LÀM GIÀU DATA (AVATAR/NAME) CHO CÁC LOG GIAO DỊCH
                RecentDeposits = paymentData
                    .RecentDeposits.Select(x => MapLogDto(x, userDict))
                    .ToList(),
                TopSpendingLogs = paymentData
                    .TopSpendingLogs.Select(x => MapLogDto(x, userDict))
                    .ToList(),
            };
        }

        // ==========================================
        // CÁC HÀM HELPER NỘI BỘ
        // ==========================================
        private double CalculateGrowth(long current, long previous)
        {
            if (previous > 0)
                return ((double)(current - previous) / previous) * 100;
            if (current > 0)
                return 100.0;
            return 0.0;
        }

        // Hàm ánh xạ kèm theo việc Enrich Avatar và Name từ userDict
        private TransactionLogDto MapLogDto(
            TransactionLogItem t,
            Dictionary<long, UserInfo> userDict
        )
        {
            var avatar = t.UserAvatar;
            var name = t.UserName;

            // Đắp data thật từ Identity Service nếu user có tồn tại trong hệ thống
            if (userDict.TryGetValue(t.UserId, out var userInfo))
            {
                avatar = userInfo.Avatar;
                name = userInfo.Name;
            }

            return new TransactionLogDto
            {
                TxnId = t.TxnId,
                UserName = name,
                UserEmail = t.UserEmail,
                UserAvatar = string.IsNullOrEmpty(avatar)
                    ? "http://localhost:8080/uploads/avatar-default.webp"
                    : avatar,
                Amount = t.Amount,
                Status = t.Status,
                Description = t.Description,
                CreatedAt = DateTimeOffset.FromUnixTimeMilliseconds(t.CreatedAtMillis),
            };
        }
    }
}
