package com.example.listing_service.modules.vip.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.listing_service.common.annotation.ApiGlobalResponse;
import com.example.listing_service.common.dto.response.ApiResponse;
import com.example.listing_service.modules.vip.dto.request.UpdateVipPriceRequest;
import com.example.listing_service.modules.vip.dto.response.VipResponse;
import com.example.listing_service.modules.vip.service.VipService;
import com.example.listing_service.security.annotation.IsAdmin;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1") // Đồng bộ version
@RequiredArgsConstructor
@ApiGlobalResponse
@Tag(name = "vips", description = "Quản lý cấu hình các gói đăng tin VIP")
public class VipController {

    private final VipService vipService;

    @GetMapping("/vips")
    @ResponseStatus(HttpStatus.OK)
    public ApiResponse<List<VipResponse>> getAllVips() {
        return ApiResponse.success(vipService.getAllVips(), "Lấy danh sách gói VIP thành công");
    }

    @PutMapping("/admin/vips/{id}/price")
    @ResponseStatus(HttpStatus.OK)
    @IsAdmin
    public ApiResponse<VipResponse> updateVipPrice(
            @PathVariable("id") Long id,
            @Valid @RequestBody UpdateVipPriceRequest request) {

        VipResponse updatedVip = vipService.updateVipPrice(id, request);
        return ApiResponse.success(updatedVip, "Cập nhật giá gói VIP thành công");
    }
}