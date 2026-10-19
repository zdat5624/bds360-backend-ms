using Microsoft.AspNetCore.Mvc;
using StatisticService.Common.Responses;
using StatisticService.Modules.Admin.DTOs;
using StatisticService.Modules.Admin.Services;
using StatisticService.Security.Attributes;

namespace StatisticService.Modules.Admin.Controllers
{
    [ApiController]
    [Route("manage/statistics/overview")]
    public class SystemOverviewController : ControllerBase
    {
        private readonly SystemOverviewService _systemOverviewService;

        public SystemOverviewController(SystemOverviewService systemOverviewService)
        {
            _systemOverviewService = systemOverviewService;
        }

        [HttpGet]
        [IsAdminOrModerator]
        public async Task<IActionResult> GetSystemOverviewStats([FromQuery] int days = 30)
        {
            var result = await _systemOverviewService.GetSystemOverviewAsync(days);

            return Ok(
                ApiResponse<SystemOverviewResponse>.Success(
                    result,
                    "Lấy dữ liệu tổng quan hệ thống thành công"
                )
            );
        }
    }
}
