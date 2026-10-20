package com.example.listing_service.modules.category.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

import com.example.listing_service.common.mapper.MapperConfiguration;
import com.example.listing_service.modules.category.dto.request.CategoryCreateRequest;
import com.example.listing_service.modules.category.dto.request.CategoryUpdateRequest;
import com.example.listing_service.modules.category.dto.response.CategoryResponse;
import com.example.listing_service.modules.category.entity.Category;

@Mapper(config = MapperConfiguration.class)
public interface CategoryMapper {

    Category toCategory(CategoryCreateRequest request);

    CategoryResponse toResponse(Category category);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "posts", ignore = true)
    void updateEntityFromRequest(CategoryUpdateRequest request, @MappingTarget Category category);
}