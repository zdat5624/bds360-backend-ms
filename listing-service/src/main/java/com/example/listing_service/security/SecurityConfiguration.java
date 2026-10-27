package com.example.listing_service.security;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;
import org.springframework.security.oauth2.server.resource.authentication.JwtGrantedAuthoritiesConverter;
import org.springframework.security.web.SecurityFilterChain;

import com.example.listing_service.security.config.JwtProperties;
import com.nimbusds.jose.util.Base64;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {

    private final CustomAccessDeniedHandler customAccessDeniedHandler;
    private final CustomAuthenticationEntryPoint customAuthenticationEntryPoint;
    private final JwtProperties jwtProperties;

    // KHÔNG CẦN PasswordEncoder ở đây nữa

    @Bean
    public SecurityFilterChain filterChain(
            HttpSecurity http,
            CustomAuthenticationEntryPoint customAuthenticationEntryPoint) throws Exception {

        http
                .csrf(c -> c.disable())
                .cors(Customizer.withDefaults())
                .authorizeHttpRequests(
                        authz -> authz

                                .requestMatchers("/api/v1/admin/**").hasRole("ADMIN")

                                .requestMatchers("/ws/**").permitAll()
                                .requestMatchers(
                                        "/",
                                        "/uploads/**",
                                        "/api/v1/auth/**",
                                        "/api/v1/identity/**",
                                        "/api/v1/address/**",

                                        "/api/v1/payment/vnpay-return",

                                        "/v3/api-docs/**",
                                        "/swagger-ui/**",
                                        "/swagger-ui.html"

                                ).permitAll()

                                .requestMatchers(HttpMethod.GET,
                                        "/api/v1/posts",
                                        "/api/v1/posts/for-you",
                                        "/api/v1/posts/{id}/view",
                                        "/api/v1/posts/{id}/analytics/views",

                                        "/api/v1/posts/{id}/related",

                                        "/api/v1/posts/analytics/**",

                                        "/api/v1/posts/{id}",

                                        "/api/v1/vips",
                                        "/api/v1/categories",
                                        "/api/v1/categories/**",
                                        "/api/v1/provinces/**",
                                        "/api/v1/districts/**",

                                        "/api/v1/posts/{postId}/address"

                                ).permitAll()

                                .requestMatchers(HttpMethod.POST, "/api/v1/posts/*/view").permitAll()

                                .anyRequest().authenticated()

                )
                .oauth2ResourceServer(oauth2 -> oauth2
                        .jwt(jwt -> jwt
                                .jwtAuthenticationConverter(jwtAuthenticationConverter())))
                .exceptionHandling(ex -> ex
                        .authenticationEntryPoint(customAuthenticationEntryPoint)
                        .accessDeniedHandler(customAccessDeniedHandler))

                .formLogin(f -> f.disable())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        return http.build();
    }

    // --- CHỈ CẦN DECODER, KHÔNG CẦN ENCODER ---
    private SecretKey getSecretKey() {
        byte[] keyBytes = Base64.from(jwtProperties.getBase64Secret()).decode();
        return new SecretKeySpec(keyBytes, 0, keyBytes.length, MacAlgorithm.HS512.getName());
    }

    @Bean
    public JwtDecoder jwtDecoder() {
        NimbusJwtDecoder jwtDecoder = NimbusJwtDecoder.withSecretKey(
                getSecretKey()).macAlgorithm(MacAlgorithm.HS512).build();
        return token -> {
            try {
                return jwtDecoder.decode(token);
            } catch (Exception e) {
                System.out.println(">>> JWT error in Payment Service: " + e.getMessage());
                throw e;
            }
        };
    }

    @Bean
    public JwtAuthenticationConverter jwtAuthenticationConverter() {
        JwtGrantedAuthoritiesConverter grantedAuthoritiesConverter = new JwtGrantedAuthoritiesConverter();
        grantedAuthoritiesConverter.setAuthorityPrefix("ROLE_");
        grantedAuthoritiesConverter.setAuthoritiesClaimName("roles"); // Phải khớp với tên claim mà Identity bọc vào

        JwtAuthenticationConverter jwtAuthenticationConverter = new JwtAuthenticationConverter();
        jwtAuthenticationConverter.setJwtGrantedAuthoritiesConverter(grantedAuthoritiesConverter);
        return jwtAuthenticationConverter;
    }
}