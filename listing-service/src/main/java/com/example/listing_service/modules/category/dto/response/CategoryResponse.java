package com.example.listing_service.modules.category.dto.response;

import com.example.listing_service.common.constant.ListingType;

import lombok.Data;

@Data
public class CategoryResponse {
    private Long id;
    private String name;
    private ListingType type;
}