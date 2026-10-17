using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;
using StatisticService.Common.Responses;
using StatisticService.Modules.Admin.DTOs;
using StatisticService.Modules.Admin.Services;
using StatisticService.Security.Attributes;
using StatisticService.Security.DTOs;

namespace StatisticService.Modules.Admin.Controllers;

[ApiController]
[Route("admin/statistics")]
public class AdminStatisticsController(
    AdminStatisticsService adminStatisticsService,
    ILogger<AdminStatisticsController> logger) : ControllerBase
{
    // ==========================================
    // LẤY THỐNG KÊ TỔNG QUAN
    // ==========================================
    [HttpGet]
    [IsAdmin] // Chỉ Admin mới được xem
    public async Task<IActionResult> GetStatistics([CurrentUser] UserContext user)
    {
        // Dùng user context để log nếu cần (Ai là người xem thống kê)
        var stats = await adminStatisticsService.GetStatisticsAsync();

        logger.LogInformation("Lấy thống kê tổng quan thành công stats: {@stats}", stats);
        return Ok(ApiResponse<AdminStatisticsResponse>.Success(
            data: stats,
            message: "Lấy thống kê tổng quan thành công"
        ));
    }

    // ==========================================
    // LẤY DOANH THU THEO THÁNG TRONG NĂM
    // ==========================================
    [HttpGet("revenue-by-month")]
    [IsAdmin]
    public async Task<IActionResult> GetMonthlyRevenue(
        [FromQuery, Required] 
        [Range(2000, 2100, ErrorMessage = "Năm phải từ 2000 trở lên")] 
        int year)
    {
        var revenues = await adminStatisticsService.GetMonthlyRevenueAsync(2026);


        logger.LogInformation("Lấy doanh thu theo tháng thành công revenues: {@revenues}", revenues);
        return Ok(ApiResponse<List<MonthlyRevenueResponse>>.Success(
            data: revenues,
            message: "Lấy doanh thu theo tháng thành công"
        ));
    }
}