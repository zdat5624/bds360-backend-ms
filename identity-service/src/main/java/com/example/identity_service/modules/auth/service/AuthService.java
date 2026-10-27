package com.example.identity_service.modules.auth.service;

import java.util.Collections;
import java.util.UUID;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.identity_service.common.constant.Role;
import com.example.identity_service.common.exception.AppException;
import com.example.identity_service.common.exception.ErrorCode;
import com.example.identity_service.modules.auth.dto.request.GoogleLoginRequest;
import com.example.identity_service.modules.auth.dto.request.LoginRequest;
import com.example.identity_service.modules.auth.dto.request.RegisterRequest;
import com.example.identity_service.modules.auth.dto.response.AuthResponse;
import com.example.identity_service.modules.user.constant.Gender;
import com.example.identity_service.modules.user.dto.response.UserResponse;
import com.example.identity_service.modules.user.entity.User;
import com.example.identity_service.modules.user.mapper.UserMapper;
import com.example.identity_service.modules.user.service.UserService;
import com.example.identity_service.security.config.GoogleProperties;
import com.example.identity_service.security.service.SecurityService;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthService {

    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final SecurityService securityService;
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private final GoogleProperties googleProperties;
    private final UserMapper userMapper;

    public AuthResponse login(LoginRequest request) {
        try {
            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                    request.getUsername(), request.getPassword());
            Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

            SecurityContextHolder.getContext().setAuthentication(authentication);

            String accessToken = securityService.createToken(authentication);
            User currentUserDB = userService.handleGetUserByUserName(request.getUsername());

            return new AuthResponse(accessToken, userMapper.toUserResponse(currentUserDB));
        } catch (Exception e) {
            throw new AppException(ErrorCode.INVALID_CREDENTIALS);
        }
    }

    public AuthResponse register(RegisterRequest request) {
        if (userService.isEmailExist(request.getEmail())) {
            throw new AppException(ErrorCode.USER_EXISTED);
        }

        if (userService.isPhoneExist(request.getPhone())) {
            throw new AppException(ErrorCode.USER_EXISTED);
        }

        User newUser = userMapper.toUser(request);
        newUser.setPassword(passwordEncoder.encode(request.getPassword()));
        newUser.setRole(Role.USER);
        User savedUser = userService.saveInternalUser(newUser);

        // --- ĐOẠN THÊM VÀO ĐỂ TỰ ĐỘNG LOGIN SAU KHI ĐĂNG KÝ ---

        // 1. Tạo UserDetails
        com.example.identity_service.security.CustomUserDetails userDetails = new com.example.identity_service.security.CustomUserDetails(
                savedUser.getId(),
                savedUser.getEmail(),
                savedUser.getName(),
                savedUser.getPhone(),
                savedUser.getPassword(),
                Collections.singletonList(new SimpleGrantedAuthority(savedUser.getRole().name())));

        // 2. Tạo Authentication
        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                userDetails, null, userDetails.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(authentication);

        // 3. Sinh Token
        String accessToken = securityService.createToken(authentication);

        // 4. Trả về AuthResponse
        return new AuthResponse(accessToken, userMapper.toUserResponse(savedUser));
    }

    public UserResponse getAccount(String email) {
        User currentUserDB = userService.handleGetUserByUserName(email);
        if (currentUserDB == null)
            throw new AppException(ErrorCode.USER_NOT_FOUND);

        return userMapper.toUserResponse(currentUserDB);
    }

    public AuthResponse googleLogin(GoogleLoginRequest request) {
        try {
            // 1. Cấu hình GoogleIdTokenVerifier
            GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(
                    new NetHttpTransport(), new GsonFactory())
                    .setAudience(Collections.singletonList(googleProperties.getId()))
                    .build();

            // 2. Verify token từ client gửi lên
            GoogleIdToken idToken = verifier.verify(request.getToken());
            if (idToken == null) {
                log.error("Google token verification failed (Token is null or invalid)");
                throw new AppException(ErrorCode.INVALID_CREDENTIALS);
            }

            // 3. Lấy thông tin từ payload
            GoogleIdToken.Payload payload = idToken.getPayload();
            String email = payload.getEmail();
            String name = (String) payload.get("name");
            String avatarUrl = (String) payload.get("picture");

            // 4. Kiểm tra user trong DB
            User currentUserDB = userService.handleGetUserByUserName(email);

            // 5. Tạo mới nếu chưa tồn tại
            if (currentUserDB == null) {
                User newUser = new User();
                newUser.setEmail(email);
                newUser.setName(name != null ? name : "Người dùng " + email.split("@")[0]);
                newUser.setAvatar(avatarUrl);
                newUser.setPassword(passwordEncoder.encode(UUID.randomUUID().toString()));
                newUser.setRole(Role.USER);
                newUser.setGender(Gender.OTHER);

                // 🌟 Bắt buộc lưu null vào DB để tránh lỗi "Duplicate entry" cho cột Unique
                newUser.setPhone(null);

                currentUserDB = userService.saveInternalUser(newUser);
                log.info("Đã tạo mới tài khoản qua Google Login cho email: {}", email);
            }

            // 🌟 6. Biến đổi dữ liệu an toàn để sinh Token
            // Nếu phone lấy từ DB lên là null -> đổi thành chuỗi rỗng "" để tránh sập JWT
            String safePhone = currentUserDB.getPhone() != null ? currentUserDB.getPhone() : "";

            // Khởi tạo UserDetails đúng với format gốc của bạn
            com.example.identity_service.security.CustomUserDetails userDetails = new com.example.identity_service.security.CustomUserDetails(
                    currentUserDB.getId(),
                    currentUserDB.getEmail(),
                    currentUserDB.getName(),
                    safePhone, // Dùng safePhone thay vì truyền trực tiếp
                    currentUserDB.getPassword(),
                    Collections.singletonList(new SimpleGrantedAuthority(currentUserDB.getRole().name())));

            UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                    userDetails,
                    null,
                    userDetails.getAuthorities());

            SecurityContextHolder.getContext().setAuthentication(authentication);

            // 7. Sinh token
            String accessToken = securityService.createToken(authentication);
            log.info("Google Login thành công cho email: {}", email);

            return new AuthResponse(accessToken, userMapper.toUserResponse(currentUserDB));

        } catch (AppException e) {
            // Ném lại lỗi hệ thống đã định nghĩa
            throw e;
        } catch (java.security.GeneralSecurityException | java.io.IOException e) {
            log.error("Lỗi parse hoặc verify Google Token: ", e);
            throw new AppException(ErrorCode.INVALID_CREDENTIALS);
        } catch (Exception e) {
            // 🌟 In log chi tiết ra Terminal nếu có bất kỳ lỗi gì khác (VD: lỗi JWT, lỗi
            // Null)
            log.error("Lỗi hệ thống không xác định trong quá trình Google Login: ", e);
            throw new AppException(ErrorCode.INTERNAL_ERROR);
        }
    }

}