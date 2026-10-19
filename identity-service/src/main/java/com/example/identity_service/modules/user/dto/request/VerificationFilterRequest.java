// --- File: user/dto/request/VerificationFilterRequest.java ---
package com.example.identity_service.modules.user.dto.request;

import java.util.Arrays;
import java.util.List;

import com.example.identity_service.common.dto.request.BaseFilterRequest;
import com.example.identity_service.modules.user.constant.AccountStatus;
import com.example.identity_service.modules.user.constant.VerificationStatus;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class VerificationFilterRequest extends BaseFilterRequest {

    private VerificationStatus status;

    // Tìm kiếm tương đối (LIKE) theo tên hoặc email của người dùng nộp đơn
    private String search;

    private List<AccountStatus> userStatuses = Arrays.asList(AccountStatus.ACTIVE, AccountStatus.BANNED);
    /*
     * * Ghi chú: Nhờ extends BaseFilterRequest, class này đã tự động có sẵn:
     * - int page
     * - int size
     * - String sortBy
     * - Sort.Direction sortDirection
     */
}