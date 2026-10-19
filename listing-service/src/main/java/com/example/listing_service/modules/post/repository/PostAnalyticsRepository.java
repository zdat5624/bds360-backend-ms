package com.example.listing_service.modules.post.repository;

import java.time.Instant;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.listing_service.common.constant.ListingType;
import com.example.listing_service.modules.post.entity.Post;

public interface PostAnalyticsRepository extends JpaRepository<Post, Long> {

    @Query(value = "SELECT DATE_FORMAT(p.created_at, '%Y-%m') AS monthStr, " +
            "MIN(IF(p.type = 'SALE', p.price / NULLIF(p.area, 0), p.price)) AS minPrice, " +
            "MAX(IF(p.type = 'SALE', p.price / NULLIF(p.area, 0), p.price)) AS maxPrice, " +
            "AVG(IF(p.type = 'SALE', p.price / NULLIF(p.area, 0), p.price)) AS avgPrice " +
            "FROM posts p " +
            "WHERE p.type = :#{#type.name()} " +
            "AND p.status IN ('APPROVED', 'REVIEW_LATER', 'EXPIRED') " +
            "AND p.deleted_by_user = false " +
            "AND p.created_at >= :startDate " +
            "AND (:categoryId IS NULL OR p.category_id = :categoryId) " +
            "AND (:provinceCode IS NULL OR p.province_code = :provinceCode) " +
            "AND (:districtCode IS NULL OR p.district_code = :districtCode) " +
            "AND (:wardCode IS NULL OR p.ward_code = :wardCode) " +
            "GROUP BY monthStr ORDER BY monthStr ASC", nativeQuery = true)
    List<Object[]> findMonthlyPriceStats(
            @Param("type") ListingType type,
            @Param("startDate") Instant startDate,
            @Param("categoryId") Long categoryId,
            @Param("provinceCode") Long provinceCode,
            @Param("districtCode") Long districtCode,
            @Param("wardCode") Long wardCode);

    @Query(value = "SELECT w.code AS locationCode, w.name AS locationName, " +
            "AVG(IF(p.type = 'SALE', p.price / NULLIF(p.area, 0), p.price)) AS avgPrice, " +
            "COUNT(p.id) AS postCount " +
            "FROM wards w JOIN posts p ON w.code = p.ward_code " +
            "WHERE p.type = :#{#type.name()} " +
            "AND w.district_code = :districtCode " +
            "AND p.status IN ('APPROVED', 'REVIEW_LATER') " +
            "AND p.deleted_by_user = false " +
            "AND (:categoryId IS NULL OR p.category_id = :categoryId) " +
            "GROUP BY w.code, w.name HAVING COUNT(p.id) > 0 ORDER BY postCount DESC", nativeQuery = true)
    List<Object[]> findNearbyWardsPriceStats(
            @Param("type") ListingType type,
            @Param("districtCode") Long districtCode,
            @Param("categoryId") Long categoryId);

    @Query(value = "SELECT d.code AS locationCode, d.name AS locationName, " +
            "AVG(IF(p.type = 'SALE', p.price / NULLIF(p.area, 0), p.price)) AS avgPrice, " +
            "COUNT(p.id) AS postCount " +
            "FROM districts d JOIN posts p ON d.code = p.district_code " +
            "WHERE p.type = :#{#type.name()} " +
            "AND d.province_code = :provinceCode " +
            "AND p.status IN ('APPROVED', 'REVIEW_LATER') " +
            "AND p.deleted_by_user = false " +
            "AND (:categoryId IS NULL OR p.category_id = :categoryId) " +
            "GROUP BY d.code, d.name HAVING COUNT(p.id) > 0 ORDER BY postCount DESC", nativeQuery = true)
    List<Object[]> findNearbyDistrictsPriceStats(
            @Param("type") ListingType type,
            @Param("provinceCode") Long provinceCode,
            @Param("categoryId") Long categoryId);
}