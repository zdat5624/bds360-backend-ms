package com.example.listing_service.modules.vip.mapper;

import org.mapstruct.Mapper;

import com.example.listing_service.common.mapper.MapperConfiguration;
import com.example.listing_service.modules.vip.dto.response.VipResponse;
import com.example.listing_service.modules.vip.entity.Vip;

@Mapper(config = MapperConfiguration.class)
public interface VipMapper {
    VipResponse toVipResponse(Vip vip);
}