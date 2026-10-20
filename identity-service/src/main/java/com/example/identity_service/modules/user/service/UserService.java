package com.example.identity_service.modules.user.service;

import java.time.Instant;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.identity_service.common.constant.Role;
import com.example.identity_service.common.dto.response.PageResponse;
import com.example.identity_service.common.exception.AppException;
import com.example.identity_service.common.exception.ErrorCode;
import com.example.identity_service.messaging.publisher.UserEventPublisher;
import com.example.identity_service.modules.user.constant.AccountStatus;
import com.example.identity_service.modules.user.dto.request.CreateUserRequest;
import com.example.identity_service.modules.user.dto.request.UpdateProfileRequest;
import com.example.identity_service.modules.user.dto.request.UpdateUserRequest;
import com.example.identity_service.modules.user.dto.request.UserFilterRequest;
import com.example.identity_service.modules.user.dto.response.UserResponse;
import com.example.identity_service.modules.user.entity.User;
import com.example.identity_service.modules.user.mapper.UserMapper;
import com.example.identity_service.modules.user.repository.UserRepository;
import com.example.identity_service.modules.user.specification.UserSpecification;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;
    private final UserEventPublisher userEventPublisher;

    public UserResponse handleCreateUser(CreateUserRequest request) {
        if (isEmailExist(request.getEmail())) {
            throw new AppException(ErrorCode.USER_EXISTED);
        }

        User user = userMapper.toUser(request);
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user = userRepository.save(user);

        return userMapper.toUserResponse(user);
    }

    public User saveInternalUser(User user) {
        return userRepository.save(user);
    }

    @Transactional
    public void handleDeleteUser(long id) {
        User user = fetchUserById(id);

        if (user.getRole().equals(Role.ADMIN)) {
            throw new AppException(ErrorCode.CANNOT_DELETE_ADMIN);
        }
        if (user.getStatus() == AccountStatus.DELETED) {
            return; // Tránh xóa 2 lần
        }

        String userEmail = user.getEmail();

        // Xóa mềm: cập nhật trạng thái và thời điểm xóa
        user.setStatus(AccountStatus.DELETED);
        user.setDeletedAt(Instant.now());
        userRepository.save(user);

        // BẮN EVENT QUA PUBLISHER
        userEventPublisher.publishUserDeletedEvent(id, userEmail);
    }

    public User fetchUserById(long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_FOUND));
    }

    public User handleGetUserByUserName(String username) {
        return userRepository.findByEmail(username).orElse(null);
    }

    public UserResponse fetchUserByIdWithPermission(long targetUserId, String email) {
        User currentUser = handleGetUserByUserName(email);

        boolean isAdmin = currentUser.getRole().equals(Role.ADMIN);
        boolean isModerator = currentUser.getRole().equals(Role.MODERATOR);
        boolean isOwner = currentUser.getId() == targetUserId;

        if (!isAdmin && !isModerator && !isOwner) {
            throw new AppException(ErrorCode.FORBIDDEN);
        }

        User targetUser = fetchUserById(targetUserId);
        return userMapper.toUserResponse(targetUser);
    }

    @Transactional
    public UserResponse handleUpdateUser(UpdateUserRequest request) {
        User currentUser = fetchUserById(request.getId());
        userMapper.updateUserFromRequest(request, currentUser);
        currentUser = userRepository.save(currentUser);

        // GỌI QUA PUBLISHER
        userEventPublisher.publishProfileUpdatedEvent(currentUser);

        return userMapper.toUserResponse(currentUser);
    }

    @Transactional
    public UserResponse handleUpdateProfile(UpdateProfileRequest request, String currentUsername) {
        User currentUser = handleGetUserByUserName(currentUsername);
        if (currentUser.getId() != request.getId()) {
            throw new AppException(ErrorCode.FORBIDDEN);
        }

        User targetUser = fetchUserById(request.getId());
        userMapper.updateProfileFromRequest(request, targetUser);
        targetUser = userRepository.save(targetUser);

        // GỌI QUA PUBLISHER
        userEventPublisher.publishProfileUpdatedEvent(targetUser);

        return userMapper.toUserResponse(targetUser);
    }

    public boolean isEmailExist(String email) {
        return userRepository.existsByEmail(email);
    }

    public PageResponse<UserResponse> getUsers(UserFilterRequest filter) {
        Sort sort = Sort.by(filter.getSortDirection(), filter.getSortBy());
        Pageable pageable = PageRequest.of(filter.getPage(), filter.getSize(), sort);

        Page<User> userPage = userRepository.findAll(
                UserSpecification.filterUsers(filter),
                pageable);

        return PageResponse.of(userPage.map(userMapper::toUserResponse));
    }

    public void changePassword(String email, String currentPassword, String newPassword) {
        User user = handleGetUserByUserName(email);
        if (user == null) {
            throw new AppException(ErrorCode.USER_NOT_FOUND);
        }
        if (!passwordEncoder.matches(currentPassword, user.getPassword())) {
            throw new AppException(ErrorCode.WRONG_PASSWORD);
        }
        user.setPassword(passwordEncoder.encode(newPassword));
        userRepository.save(user);
    }

    public void forceUpdatePassword(String email, String encodedNewPassword) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_FOUND));

        user.setPassword(encodedNewPassword);
        userRepository.save(user);
    }
}