using Google.Protobuf.WellKnownTypes;
using StatisticService.Grpc.Identity.Statistic;
using StatisticService.Grpc.Payment.Statistic;
using StatisticService.Modules.Payment.DTOs;

namespace StatisticService.Modules.Payment.Services
{
    public class ManageTransactionStatisticsService
    {
        private readonly InternalPaymentStatisticService.InternalPaymentStatisticServiceClient _paymentClient;
        private readonly InternalIdentityStatisticService.InternalIdentityStatisticServiceClient _identityClient;

        public ManageTransactionStatisticsService(
            InternalPaymentStatisticService.InternalPaymentStatisticServiceClient paymentClient,
            InternalIdentityStatisticService.InternalIdentityStatisticServiceClient identityClient
        )
        {
            _paymentClient = paymentClient;
            _identityClient = identityClient;
        }

        public async Task<ManageTransactionStatisticsResponse> GetTransactionDashboardAsync(
            int days
        )
        {
            var paymentData = await _paymentClient.GetTransactionDashboardStatsAsync(
                new TransactionDashboardRequest { Days = days }
            );
            var identityData = await _identityClient.GetTotalSystemBalanceAsync(new Empty());

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
                TopSpenders = paymentData
                    .TopSpenders.Select(x => new TopSpender
                    {
                        UserId = x.UserId,
                        Name = x.Name,
                        Email = x.Email,
                        Avatar = string.IsNullOrEmpty(x.Avatar)
                            ? "http://localhost:8080/uploads/avatar-default.webp"
                            : x.Avatar,
                        TotalSpent = x.TotalSpent,
                    })
                    .ToList(),
                RecentDeposits = paymentData.RecentDeposits.Select(MapLogDto).ToList(),
                TopSpendingLogs = paymentData.TopSpendingLogs.Select(MapLogDto).ToList(),
            };
        }

        private double CalculateGrowth(long current, long previous)
        {
            if (previous > 0)
                return ((double)(current - previous) / previous) * 100;
            if (current > 0)
                return 100.0;
            return 0.0;
        }

        private TransactionLogDto MapLogDto(TransactionLogItem t)
        {
            return new TransactionLogDto
            {
                TxnId = t.TxnId,
                UserName = t.UserName,
                UserEmail = t.UserEmail,
                UserAvatar = string.IsNullOrEmpty(t.UserAvatar)
                    ? "http://localhost:8080/uploads/avatar-default.webp"
                    : t.UserAvatar,
                Amount = t.Amount,
                Status = t.Status,
                Description = t.Description,
                CreatedAt = DateTimeOffset.FromUnixTimeMilliseconds(t.CreatedAtMillis),
            };
        }
    }
}
