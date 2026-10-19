using Microsoft.AspNetCore.Mvc;
using StatisticService.Common.Responses;
using StatisticService.Modules.Payment.DTOs;
using StatisticService.Modules.Payment.Services;
using StatisticService.Security.Attributes;

namespace StatisticService.Modules.Payment.Controllers
{
    [ApiController]
    [Route("manage/statistics/transactions")]
    public class ManageTransactionStatisticsController : ControllerBase
    {
        private readonly ManageTransactionStatisticsService _transactionStatisticsService;

        public ManageTransactionStatisticsController(
            ManageTransactionStatisticsService transactionStatisticsService
        )
        {
            _transactionStatisticsService = transactionStatisticsService;
        }

        [HttpGet]
        [IsAdminOrModerator]
        public async Task<IActionResult> GetTransactionDashboardStats([FromQuery] int days = 30)
        {
            var result = await _transactionStatisticsService.GetTransactionDashboardAsync(days);

            return Ok(
                ApiResponse<ManageTransactionStatisticsResponse>.Success(
                    result,
                    "Lấy dữ liệu thống kê giao dịch thành công"
                )
            );
        }
    }
}
