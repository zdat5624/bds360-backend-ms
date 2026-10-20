package com.example.listing_service.modules.category.dto.request;

import com.example.listing_service.common.constant.ListingType;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class CategoryUpdateRequest {
    @NotNull(message = "ID_REQUIRED")
    private Long id;

    @NotBlank(message = "CATEGORY_NAME_REQUIRED")
    private String name;

    @NotNull(message = "CATEGORY_TYPE_REQUIRED")
    private ListingType type;
}