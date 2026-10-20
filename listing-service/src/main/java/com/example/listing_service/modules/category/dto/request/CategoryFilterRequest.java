package com.example.listing_service.modules.category.dto.request;

import com.example.listing_service.common.constant.ListingType;
import com.example.listing_service.common.dto.request.BaseFilterRequest;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CategoryFilterRequest extends BaseFilterRequest {
    // Thêm các tiêu chí lọc đặc thù của Category
    private String name;
    private ListingType type;
}