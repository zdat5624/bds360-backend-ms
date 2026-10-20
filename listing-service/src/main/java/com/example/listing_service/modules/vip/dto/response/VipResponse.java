package com.example.listing_service.modules.vip.dto.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class VipResponse {
    private long id;
    private int vipLevel;
    private String name;
    private long pricePerDay;
}