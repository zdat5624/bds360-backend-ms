package com.example.listing_service.modules.vip.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.listing_service.common.exception.AppException;
import com.example.listing_service.common.exception.ErrorCode;
import com.example.listing_service.modules.vip.dto.request.UpdateVipPriceRequest;
import com.example.listing_service.modules.vip.dto.response.VipResponse;
import com.example.listing_service.modules.vip.entity.Vip;
import com.example.listing_service.modules.vip.mapper.VipMapper;
import com.example.listing_service.modules.vip.repository.VipRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class VipService {

    private final VipRepository vipRepository;
    private final VipMapper vipMapper;

    public List<VipResponse> getAllVips() {
        return vipRepository.findAll().stream()
                .map(vipMapper::toVipResponse)
                .collect(Collectors.toList());
    }

    public VipResponse updateVipPrice(Long vipId, UpdateVipPriceRequest request) {
        Vip vip = vipRepository.findById(vipId)
                .orElseThrow(() -> new AppException(ErrorCode.VIP_NOT_FOUND));

        vip.setPricePerDay(request.getNewPrice());
        vip = vipRepository.save(vip);

        return vipMapper.toVipResponse(vip);
    }
}