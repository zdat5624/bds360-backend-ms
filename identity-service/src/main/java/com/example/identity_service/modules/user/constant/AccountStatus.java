package com.example.identity_service.modules.user.constant;

public enum AccountStatus {
    ACTIVE, // Đang hoạt động bình thường
    BANNED, // Bị admin khóa (khóa móm, cấm đăng nhập)
    DELETED // Bị xóa (Soft delete do user tự xóa hoặc admin xóa)
}