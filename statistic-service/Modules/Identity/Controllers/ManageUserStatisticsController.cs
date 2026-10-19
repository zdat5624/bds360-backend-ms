using Microsoft.AspNetCore.Mvc;
using StatisticService.Common.Responses;
using StatisticService.Modules.Identity.DTOs;
using StatisticService.Modules.Identity.Services;
using StatisticService.Security.Attributes;

namespace StatisticService.Modules.Identity.Controllers
{
    [ApiController]
    [Route("manage/statistics/users")]
    public class ManageUserStatisticsController : ControllerBase
    {
        private readonly ManageUserStatisticsService _manageUserStatisticsService;

        public ManageUserStatisticsController(
            ManageUserStatisticsService manageUserStatisticsService
        )
        {
            _manageUserStatisticsService = manageUserStatisticsService;
        }

        [HttpGet]
        [IsAdminOrModerator]
        public async Task<IActionResult> GetUserDashboardStats([FromQuery] int days = 30)
        {
            var result = await _manageUserStatisticsService.GetDashboardStatisticsAsync(days);

            return Ok(
                ApiResponse<ManageUserStatisticsResponse>.Success(
                    result,
                    "Lấy dữ liệu thống kê người dùng thành công"
                )
            );
        }
    }
}
