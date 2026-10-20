package com.example.listing_service.modules.category.dto.request;

import com.example.listing_service.common.constant.ListingType;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class CategoryCreateRequest {
    @NotBlank(message = "CATEGORY_NAME_REQUIRED")
    @Size(min = 5, max = 100, message = "CATEGORY_NAME_INVALID_SIZE")
    private String name;

    @NotNull(message = "CATEGORY_TYPE_REQUIRED")
    private ListingType type;
}