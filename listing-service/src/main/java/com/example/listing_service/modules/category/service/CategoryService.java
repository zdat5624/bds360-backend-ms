package com.example.listing_service.modules.category.service;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.listing_service.common.dto.response.PageResponse;
import com.example.listing_service.common.exception.AppException;
import com.example.listing_service.common.exception.ErrorCode;
import com.example.listing_service.modules.category.dto.request.CategoryCreateRequest;
import com.example.listing_service.modules.category.dto.request.CategoryFilterRequest;
import com.example.listing_service.modules.category.dto.request.CategoryUpdateRequest;
import com.example.listing_service.modules.category.dto.response.CategoryResponse;
import com.example.listing_service.modules.category.entity.Category;
import com.example.listing_service.modules.category.mapper.CategoryMapper;
import com.example.listing_service.modules.category.repository.CategoryRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;
    private final CategoryMapper categoryMapper;

    /**
     * Helper: Chuyển đổi Filter thành Pageable của Spring Data
     */
    private Pageable getPageable(CategoryFilterRequest filter) {
        return PageRequest.of(
                filter.getPage(),
                filter.getSize(),
                Sort.by(filter.getSortDirection(), filter.getSortBy()));
    }

    public CategoryResponse createCategory(CategoryCreateRequest request) {
        Category category = categoryMapper.toCategory(request);
        return categoryMapper.toResponse(categoryRepository.save(category));
    }

    @Transactional
    public CategoryResponse updateCategory(CategoryUpdateRequest request) {
        Category category = categoryRepository.findById(request.getId())
                .orElseThrow(() -> new AppException(ErrorCode.CATEGORY_NOT_FOUND));

        categoryMapper.updateEntityFromRequest(request, category);
        return categoryMapper.toResponse(categoryRepository.save(category));
    }

    public void deleteCategory(Long id) {
        if (!categoryRepository.existsById(id)) {
            throw new AppException(ErrorCode.CATEGORY_NOT_FOUND);
        }
        categoryRepository.deleteById(id);
    }

    public CategoryResponse getCategoryById(Long id) {
        return categoryRepository.findById(id)
                .map(categoryMapper::toResponse)
                .orElseThrow(() -> new AppException(ErrorCode.CATEGORY_NOT_FOUND));
    }

    /**
     * Dùng chung một hàm query linh hoạt cho cả Public và Admin
     */
    public PageResponse<CategoryResponse> getCategories(CategoryFilterRequest filter) {
        Pageable pageable = getPageable(filter);

        // Truyền các tiêu chí lọc từ object filter vào repository
        var pageData = categoryRepository.findByFilter(
                filter.getName(),
                filter.getType(),
                pageable).map(categoryMapper::toResponse);

        return PageResponse.of(pageData);
    }
}