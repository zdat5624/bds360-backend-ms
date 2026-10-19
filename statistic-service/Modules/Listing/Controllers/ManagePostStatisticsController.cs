using Microsoft.AspNetCore.Mvc;
using StatisticService.Common.Responses;
using StatisticService.Modules.Listing.Services;
using StatisticService.Security.Attributes;

namespace StatisticService.Modules.Listing.DTOs;

[ApiController]
[Route("manage/statistics/posts")]
public class ManagePostStatisticsController(ManagePostStatisticsService postStatisticsService)
    : ControllerBase
{
    [HttpGet]
    [IsAdminOrModerator]
    public async Task<IActionResult> GetPostDashboardStats([FromQuery] int days = 30)
    {
        var result = await postStatisticsService.GetPostDashboardAsync(days);

        return Ok(
            ApiResponse<ManagePostStatisticsResponse>.Success(
                data: result,
                message: "Lấy dữ liệu thống kê tin đăng thành công"
            )
        );
    }
}
