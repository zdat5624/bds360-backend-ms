package com.example.listing_service.modules.post.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.listing_service.modules.post.repository.PostRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserSyncService {

    private final PostRepository postRepository;
    // private final SavedPostRepository savedPostRepository;
    // private final PostViewHistoryRepository postViewHistoryRepository;

    @Transactional
    public void syncUserProfile(Long userId, String name, String avatar, String phone) {
        postRepository.updateAuthorInfo(userId, name, avatar, phone);
        log.info("Updated author info in Listing Service for userId: {}", userId);
    }

    @Transactional
    public void handleUserDeleted(Long userId) {
        // 1. Ẩn tất cả bài đăng của user
        postRepository.hideAllPostsOfDeletedUser(userId);

        // 2. Dọn dẹp tương tác liên quan
        // savedPostRepository.deleteAllByUserId(userId);
        // postViewHistoryRepository.deleteAllByUserId(userId);

        log.info("Handled DELETED event for userId: {}. Posts hidden and interactions cleared.", userId);
    }
}