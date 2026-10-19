using Microsoft.AspNetCore.Mvc;
using StatisticService.Common.Responses;
using StatisticService.Modules.UserClient.DTOs;
using StatisticService.Modules.UserClient.Services;
using StatisticService.Security.Attributes;
using StatisticService.Security.DTOs;

namespace StatisticService.Modules.UserClient.Controllers
{
    [ApiController]
    [Route("user-client/statistics")]
    public class UserClientStatisticsController : ControllerBase
    {
        private readonly UserClientStatisticsService _userStatisticsService;

        public UserClientStatisticsController(UserClientStatisticsService userStatisticsService)
        {
            _userStatisticsService = userStatisticsService;
        }

        [HttpGet("kpis")]
        [RequireLogin]
        public async Task<IActionResult> GetKpiSummary([CurrentUser] UserContext user)
        {
            var result = await _userStatisticsService.GetKpiSummaryAsync(user);
            return Ok(
                ApiResponse<KpiSummary>.Success(result, "Lấy các chỉ số tổng quan thành công")
            );
        }

        [HttpGet("charts/views")]
        [RequireLogin]
        public async Task<IActionResult> GetViewsChart(
            [CurrentUser] UserContext user,
            [FromQuery] int days = 30
        )
        {
            var result = await _userStatisticsService.GetViewsChartAsync(user, days);
            return Ok(
                ApiResponse<List<ViewTrend>>.Success(
                    result,
                    "Lấy dữ liệu biểu đồ lượt xem thành công"
                )
            );
        }

        [HttpGet("charts/post-statuses")]
        [RequireLogin]
        public async Task<IActionResult> GetPostStatusChart([CurrentUser] UserContext user)
        {
            var result = await _userStatisticsService.GetPostStatusBreakdownAsync(user);
            return Ok(
                ApiResponse<List<PostStatusBreakdown>>.Success(
                    result,
                    "Lấy dữ liệu biểu đồ trạng thái tin thành công"
                )
            );
        }

        [HttpGet("charts/top-posts")]
        [RequireLogin]
        public async Task<IActionResult> GetTopPosts(
            [CurrentUser] UserContext user,
            [FromQuery] int limit = 5
        )
        {
            var result = await _userStatisticsService.GetTopPostsAsync(user, limit);
            return Ok(
                ApiResponse<List<TopPost>>.Success(result, "Lấy danh sách top tin đăng thành công")
            );
        }

        [HttpGet("charts/cash-flow")]
        [RequireLogin]
        public async Task<IActionResult> GetCashFlowChart(
            [CurrentUser] UserContext user,
            [FromQuery] int months = 6
        )
        {
            var result = await _userStatisticsService.GetCashFlowChartAsync(user, months);
            return Ok(
                ApiResponse<List<CashFlow>>.Success(
                    result,
                    "Lấy dữ liệu biểu đồ thu chi thành công"
                )
            );
        }
    }
}
