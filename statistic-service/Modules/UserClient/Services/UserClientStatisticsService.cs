using StatisticService.Grpc.Identity.Statistic;
using StatisticService.Grpc.Listing.Statistic;
using StatisticService.Grpc.Payment.Statistic;
using StatisticService.Modules.UserClient.DTOs;
using StatisticService.Security.DTOs;

namespace StatisticService.Modules.UserClient.Services
{
    public class UserClientStatisticsService
    {
        private readonly InternalListingStatisticService.InternalListingStatisticServiceClient _listingClient;
        private readonly InternalPaymentStatisticService.InternalPaymentStatisticServiceClient _paymentClient;
        private readonly InternalIdentityStatisticService.InternalIdentityStatisticServiceClient _identityClient;

        public UserClientStatisticsService(
            InternalListingStatisticService.InternalListingStatisticServiceClient listingClient,
            InternalPaymentStatisticService.InternalPaymentStatisticServiceClient paymentClient,
            InternalIdentityStatisticService.InternalIdentityStatisticServiceClient identityClient
        )
        {
            _listingClient = listingClient;
            _paymentClient = paymentClient;
            _identityClient = identityClient;
        }

        // 1. LẤY KPI
        public async Task<DTOs.KpiSummary> GetKpiSummaryAsync(UserContext user)
        {
            var listingTask = _listingClient
                .GetUserListingStatsAsync(
                    new UserListingRequest
                    {
                        UserId = user.Id,
                        UserEmail = user.Email,
                        Days = 1,
                        TopLimit = 1,
                    }
                )
                .ResponseAsync;
            var paymentTask = _paymentClient
                .GetUserFinancialStatsAsync(
                    new UserFinancialRequest { UserId = user.Id, Months = 1 }
                )
                .ResponseAsync;
            var balanceTask = _identityClient
                .GetUserBalanceAsync(new UserBalanceRequest { UserId = user.Id })
                .ResponseAsync;

            await Task.WhenAll(listingTask, paymentTask, balanceTask);

            return new DTOs.KpiSummary
            {
                AvailableBalance = balanceTask.Result.Balance,
                ActivePosts = listingTask.Result.ActivePosts,
                TotalViews = listingTask.Result.TotalViews,
                MonthlySpending = paymentTask.Result.MonthlySpending,
            };
        }

        // 2. BIỂU ĐỒ VIEW
        public async Task<List<ViewTrend>> GetViewsChartAsync(UserContext user, int days)
        {
            var data = await _listingClient.GetUserListingStatsAsync(
                new UserListingRequest
                {
                    UserId = user.Id,
                    UserEmail = user.Email,
                    Days = days,
                    TopLimit = 1,
                }
            );
            return data
                .ViewChart.Select(x => new ViewTrend { Date = x.Date, Views = x.Views })
                .ToList();
        }

        // 3. BIỂU ĐỒ TRẠNG THÁI
        public async Task<List<PostStatusBreakdown>> GetPostStatusBreakdownAsync(UserContext user)
        {
            var data = await _listingClient.GetUserListingStatsAsync(
                new UserListingRequest
                {
                    UserId = user.Id,
                    UserEmail = user.Email,
                    Days = 1,
                    TopLimit = 1,
                }
            );
            return data
                .StatusChart.Select(x => new PostStatusBreakdown
                {
                    Status = x.Status,
                    Count = x.Count,
                })
                .ToList();
        }

        // 4. TOP TIN ĐĂNG
        public async Task<List<TopPost>> GetTopPostsAsync(UserContext user, int limit)
        {
            var data = await _listingClient.GetUserListingStatsAsync(
                new UserListingRequest
                {
                    UserId = user.Id,
                    UserEmail = user.Email,
                    Days = 1,
                    TopLimit = limit,
                }
            );
            return data
                .TopPosts.Select(x => new TopPost
                {
                    PostId = x.PostId,
                    Title = x.Title,
                    Views = x.Views,
                    VipName = x.VipName,
                })
                .ToList();
        }

        // 5. DÒNG TIỀN
        public async Task<List<CashFlow>> GetCashFlowChartAsync(UserContext user, int months)
        {
            var data = await _paymentClient.GetUserFinancialStatsAsync(
                new UserFinancialRequest { UserId = user.Id, Months = months }
            );
            return data
                .CashFlowChart.Select(x => new CashFlow
                {
                    Month = x.Date,
                    DepositAmount = x.CashIn,
                    PaymentAmount = x.CashOut,
                })
                .ToList();
        }
    }
}
