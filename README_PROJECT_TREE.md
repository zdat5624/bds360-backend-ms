
```
bds360-backend
├─ api-gateway
│  ├─ gradle
│  │  └─ wrapper
│  │     ├─ gradle-wrapper.jar
│  │     └─ gradle-wrapper.properties
│  ├─ gradlew
│  ├─ gradlew.bat
│  ├─ HELP.md
│  └─ src
│     ├─ main
│     │  ├─ java
│     │  │  └─ com
│     │  │     └─ example
│     │  │        └─ api_gateway
│     │  │           ├─ ApiGatewayApplication.java
│     │  │           └─ config
│     │  │              └─ CorsConfig.java
│     │  └─ resources
│     │     └─ application.yml
│     └─ test
│        └─ java
│           └─ com
│              └─ example
│                 └─ api_gateway
│                    └─ ApiGatewayApplicationTests.java
├─ bds360.code-workspace
├─ docker
│  └─ mysql
│     └─ init
│        └─ init.sql
├─ docker-compose.yml
├─ dotnet-tools.json
├─ identity-service
│  ├─ gradle
│  │  └─ wrapper
│  │     ├─ gradle-wrapper.jar
│  │     └─ gradle-wrapper.properties
│  ├─ gradlew
│  ├─ gradlew.bat
│  └─ src
│     ├─ main
│     │  ├─ java
│     │  │  └─ com
│     │  │     └─ example
│     │  │        └─ identity_service
│     │  │           ├─ bootstrap
│     │  │           │  └─ StartupRunner.java
│     │  │           ├─ common
│     │  │           │  ├─ annotation
│     │  │           │  │  └─ ApiGlobalResponse.java
│     │  │           │  ├─ config
│     │  │           │  │  ├─ AppProperties.java
│     │  │           │  │  ├─ CorsConfig.java.txt
│     │  │           │  │  └─ OpenApiConfig.java
│     │  │           │  ├─ constant
│     │  │           │  │  ├─ ListingType.java
│     │  │           │  │  ├─ NotificationType.java
│     │  │           │  │  └─ Role.java
│     │  │           │  ├─ dto
│     │  │           │  │  ├─ request
│     │  │           │  │  │  └─ BaseFilterRequest.java
│     │  │           │  │  └─ response
│     │  │           │  │     ├─ ApiResponse.java
│     │  │           │  │     └─ PageResponse.java
│     │  │           │  ├─ exception
│     │  │           │  │  ├─ AppException.java
│     │  │           │  │  ├─ CustomErrorController.java
│     │  │           │  │  ├─ ErrorCode.java
│     │  │           │  │  └─ GlobalExceptionHandler.java
│     │  │           │  ├─ mapper
│     │  │           │  │  ├─ EntityResolver.java
│     │  │           │  │  └─ MapperConfiguration.java
│     │  │           │  └─ util
│     │  │           ├─ grpc
│     │  │           │  ├─ InternalIdentityGrpcService.txt
│     │  │           │  └─ InternalIdentityStatisticGrpcService.java
│     │  │           ├─ IdentityServiceApplication.java
│     │  │           ├─ modules
│     │  │           │  ├─ auth
│     │  │           │  │  ├─ controller
│     │  │           │  │  │  └─ AuthController.java
│     │  │           │  │  ├─ dto
│     │  │           │  │  │  ├─ request
│     │  │           │  │  │  │  ├─ ChangePasswordRequest.java
│     │  │           │  │  │  │  ├─ ForgotPasswordRequest.java
│     │  │           │  │  │  │  ├─ GoogleLoginRequest.java
│     │  │           │  │  │  │  ├─ LoginRequest.java
│     │  │           │  │  │  │  ├─ RegisterRequest.java
│     │  │           │  │  │  │  └─ ResetPasswordRequest.java
│     │  │           │  │  │  └─ response
│     │  │           │  │  │     └─ AuthResponse.java
│     │  │           │  │  ├─ entity
│     │  │           │  │  │  └─ PasswordResetToken.java
│     │  │           │  │  ├─ mapper
│     │  │           │  │  ├─ repository
│     │  │           │  │  │  └─ PasswordResetTokenRepository.java
│     │  │           │  │  └─ service
│     │  │           │  │     ├─ AuthService.java
│     │  │           │  │     └─ ForgotPasswordService.java
│     │  │           │  ├─ statistic
│     │  │           │  │  ├─ repository
│     │  │           │  │  │  └─ UserStatisticRepository.java
│     │  │           │  │  └─ service
│     │  │           │  │     └─ UserStatisticService.java
│     │  │           │  └─ user
│     │  │           │     ├─ constant
│     │  │           │     │  ├─ Gender.java
│     │  │           │     │  └─ VerificationStatus.java
│     │  │           │     ├─ controller
│     │  │           │     │  ├─ TestController.java
│     │  │           │     │  ├─ UserController.java
│     │  │           │     │  └─ VerificationController.java
│     │  │           │     ├─ dto
│     │  │           │     │  ├─ request
│     │  │           │     │  │  ├─ CreateUserRequest.java
│     │  │           │     │  │  ├─ ReviewVerificationRequest.java
│     │  │           │     │  │  ├─ SubmitVerificationRequest.java
│     │  │           │     │  │  ├─ UpdateProfileRequest.java
│     │  │           │     │  │  ├─ UpdateUserRequest.java
│     │  │           │     │  │  ├─ UserFilterRequest.java
│     │  │           │     │  │  └─ VerificationFilterRequest.java
│     │  │           │     │  └─ response
│     │  │           │     │     ├─ UserResponse.java
│     │  │           │     │     └─ VerificationResponse.java
│     │  │           │     ├─ entity
│     │  │           │     │  ├─ User.java
│     │  │           │     │  └─ VerificationSubmission.java
│     │  │           │     ├─ mapper
│     │  │           │     │  ├─ UserMapper.java
│     │  │           │     │  └─ VerificationMapper.java
│     │  │           │     ├─ repository
│     │  │           │     │  ├─ UserRepository.java
│     │  │           │     │  └─ VerificationSubmissionRepository.java
│     │  │           │     ├─ service
│     │  │           │     │  ├─ UserService.java
│     │  │           │     │  └─ VerificationService.java
│     │  │           │     └─ specification
│     │  │           │        ├─ UserSpecification.java
│     │  │           │        └─ VerificationSpecification.java
│     │  │           └─ security
│     │  │              ├─ annotation
│     │  │              │  ├─ CurrentUser.java
│     │  │              │  ├─ IsAdmin.java
│     │  │              │  ├─ IsAdminOrModerator.java
│     │  │              │  └─ RequireLogin.java
│     │  │              ├─ config
│     │  │              │  ├─ GoogleProperties.java
│     │  │              │  ├─ JwtProperties.java
│     │  │              │  └─ WebMvcConfig.java
│     │  │              ├─ CustomAccessDeniedHandler.java
│     │  │              ├─ CustomAuthenticationEntryPoint.java
│     │  │              ├─ CustomUserDetails.java
│     │  │              ├─ CustomUserDetailsService.java
│     │  │              ├─ dto
│     │  │              │  └─ UserContext.java
│     │  │              ├─ resolver
│     │  │              │  └─ CurrentUserArgumentResolver.java
│     │  │              ├─ SecurityConfiguration.java
│     │  │              └─ service
│     │  │                 └─ SecurityService.java
│     │  └─ resources
│     │     ├─ application.yaml
│     │     ├─ data
│     │     │  └─ users.csv
│     │     ├─ static
│     │     └─ templates
│     └─ test
│        └─ java
│           └─ com
│              └─ example
│                 └─ identity_service
│                    └─ IdentityServiceApplicationTests.java
├─ listing-service
│  ├─ gradle
│  │  └─ wrapper
│  │     ├─ gradle-wrapper.jar
│  │     └─ gradle-wrapper.properties
│  ├─ gradlew
│  ├─ gradlew.bat
│  ├─ HELP.md
│  └─ src
│     ├─ main
│     │  ├─ java
│     │  │  └─ com
│     │  │     └─ example
│     │  │        └─ listing_service
│     │  │           ├─ bootstrap
│     │  │           │  └─ StartupRunner.java
│     │  │           ├─ common
│     │  │           │  ├─ annotation
│     │  │           │  │  └─ ApiGlobalResponse.java
│     │  │           │  ├─ config
│     │  │           │  │  ├─ AppProperties.java
│     │  │           │  │  ├─ CorsConfig.java.txt
│     │  │           │  │  └─ OpenApiConfig.java
│     │  │           │  ├─ constant
│     │  │           │  │  ├─ ListingType.java
│     │  │           │  │  ├─ NotificationType.java
│     │  │           │  │  └─ Role.java
│     │  │           │  ├─ dto
│     │  │           │  │  ├─ request
│     │  │           │  │  │  └─ BaseFilterRequest.java
│     │  │           │  │  └─ response
│     │  │           │  │     ├─ ApiResponse.java
│     │  │           │  │     └─ PageResponse.java
│     │  │           │  ├─ exception
│     │  │           │  │  ├─ AppException.java
│     │  │           │  │  ├─ CustomErrorController.java
│     │  │           │  │  ├─ ErrorCode.java
│     │  │           │  │  └─ GlobalExceptionHandler.java
│     │  │           │  ├─ mapper
│     │  │           │  │  ├─ EntityResolver.java
│     │  │           │  │  └─ MapperConfiguration.java
│     │  │           │  └─ util
│     │  │           ├─ grpc
│     │  │           │  └─ InternalListingStatisticGrpcService.java
│     │  │           ├─ ListingServiceApplication.java
│     │  │           ├─ modules
│     │  │           │  ├─ address
│     │  │           │  │  ├─ config
│     │  │           │  │  │  └─ MapboxConfig.java
│     │  │           │  │  ├─ controller
│     │  │           │  │  │  └─ AddressController.java
│     │  │           │  │  ├─ dto
│     │  │           │  │  │  ├─ request
│     │  │           │  │  │  │  ├─ CreateDistrictRequest.java
│     │  │           │  │  │  │  ├─ CreateProvinceRequest.java
│     │  │           │  │  │  │  └─ CreateWardRequest.java
│     │  │           │  │  │  └─ response
│     │  │           │  │  │     ├─ CoordinateResponse.java
│     │  │           │  │  │     ├─ DistrictResponse.java
│     │  │           │  │  │     ├─ ProvinceResponse.java
│     │  │           │  │  │     └─ WardResponse.java
│     │  │           │  │  ├─ entity
│     │  │           │  │  │  ├─ District.java
│     │  │           │  │  │  ├─ Province.java
│     │  │           │  │  │  └─ Ward.java
│     │  │           │  │  ├─ mapper
│     │  │           │  │  │  └─ AddressMapper.java
│     │  │           │  │  ├─ repository
│     │  │           │  │  │  ├─ DistrictRepository.java
│     │  │           │  │  │  ├─ ProvinceRepository.java
│     │  │           │  │  │  └─ WardRepository.java
│     │  │           │  │  └─ service
│     │  │           │  │     ├─ AddressService.java
│     │  │           │  │     └─ MapboxGeocodeService.java
│     │  │           │  ├─ category
│     │  │           │  │  ├─ entity
│     │  │           │  │  │  └─ Category.java
│     │  │           │  │  └─ repository
│     │  │           │  │     └─ CategoryRepository.java
│     │  │           │  ├─ post
│     │  │           │  │  ├─ constant
│     │  │           │  │  │  ├─ CompassDirection.java
│     │  │           │  │  │  ├─ Furnishing.java
│     │  │           │  │  │  ├─ LegalStatus.java
│     │  │           │  │  │  └─ PostStatus.java
│     │  │           │  │  ├─ controller
│     │  │           │  │  │  ├─ ManagePostController.java
│     │  │           │  │  │  ├─ PostAnalyticsController.java
│     │  │           │  │  │  ├─ PostController.java
│     │  │           │  │  │  └─ SavedPostController.java
│     │  │           │  │  ├─ dto
│     │  │           │  │  │  ├─ request
│     │  │           │  │  │  │  ├─ ForYouPostRequest.java
│     │  │           │  │  │  │  ├─ ListingDetailRequest.java
│     │  │           │  │  │  │  ├─ PostCreateRequest.java
│     │  │           │  │  │  │  ├─ PostFilterRequest.java
│     │  │           │  │  │  │  ├─ PriceHistoryRequest.java
│     │  │           │  │  │  │  ├─ RelatedPostRequest.java
│     │  │           │  │  │  │  ├─ RenewPostRequest.java
│     │  │           │  │  │  │  ├─ UpdatePostRequest.java
│     │  │           │  │  │  │  └─ UpdatePostStatusRequest.java
│     │  │           │  │  │  └─ response
│     │  │           │  │  │     ├─ MapPostResponse.java
│     │  │           │  │  │     ├─ NearbyLocationPriceResponse.java
│     │  │           │  │  │     ├─ PostResponse.java
│     │  │           │  │  │     ├─ PostViewChartResponse.java
│     │  │           │  │  │     ├─ PriceHistoryResponse.java
│     │  │           │  │  │     └─ SavedPostResponse.java
│     │  │           │  │  ├─ entity
│     │  │           │  │  │  ├─ Image.java
│     │  │           │  │  │  ├─ ListingDetail.java
│     │  │           │  │  │  ├─ Post.java
│     │  │           │  │  │  ├─ PostViewHistory.java
│     │  │           │  │  │  └─ SavedPost.java
│     │  │           │  │  ├─ mapper
│     │  │           │  │  │  └─ PostMapper.java
│     │  │           │  │  ├─ repository
│     │  │           │  │  │  ├─ ImageRepository.java
│     │  │           │  │  │  ├─ PostAnalyticsRepository.java
│     │  │           │  │  │  ├─ PostRepository.java
│     │  │           │  │  │  ├─ PostViewHistoryRepository.java
│     │  │           │  │  │  └─ SavedPostRepository.java
│     │  │           │  │  ├─ service
│     │  │           │  │  │  ├─ PostAnalyticsService.java
│     │  │           │  │  │  ├─ PostService.java
│     │  │           │  │  │  └─ SavedPostService.java
│     │  │           │  │  └─ specification
│     │  │           │  │     ├─ ForYouSpecification.java
│     │  │           │  │     └─ PostSpecification.java
│     │  │           │  ├─ statistic
│     │  │           │  │  ├─ dto
│     │  │           │  │  │  └─ response
│     │  │           │  │  │     ├─ ManagePostStatisticsResponse.java
│     │  │           │  │  │     └─ VipDistribution.java
│     │  │           │  │  ├─ repository
│     │  │           │  │  │  └─ PostStatisticRepository.java
│     │  │           │  │  └─ service
│     │  │           │  │     └─ ManagePostStatisticsService.java
│     │  │           │  └─ vip
│     │  │           │     ├─ entity
│     │  │           │     │  └─ Vip.java
│     │  │           │     └─ repository
│     │  │           │        └─ VipRepository.java
│     │  │           └─ security
│     │  │              ├─ annotation
│     │  │              │  ├─ CurrentUser.java
│     │  │              │  ├─ IsAdmin.java
│     │  │              │  ├─ IsAdminOrModerator.java
│     │  │              │  └─ RequireLogin.java
│     │  │              ├─ config
│     │  │              │  ├─ JwtProperties.java
│     │  │              │  └─ WebMvcConfig.java
│     │  │              ├─ CustomAccessDeniedHandler.java
│     │  │              ├─ CustomAuthenticationEntryPoint.java
│     │  │              ├─ dto
│     │  │              │  └─ UserContext.java
│     │  │              ├─ resolver
│     │  │              │  └─ CurrentUserArgumentResolver.java
│     │  │              ├─ SecurityConfiguration.java
│     │  │              └─ SecurityService.java
│     │  └─ resources
│     │     ├─ application.yml
│     │     ├─ data
│     │     │  ├─ address.json
│     │     │  └─ users.csv
│     │     ├─ static
│     │     └─ templates
│     └─ test
│        └─ java
│           └─ com
│              └─ example
│                 └─ listing_service
│                    └─ ListingServiceApplicationTests.java
├─ media-service
│  ├─ .prettierrc
│  ├─ eslint.config.mjs
│  ├─ nest-cli.json
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ README.md
│  ├─ src
│  │  ├─ app.controller.ts
│  │  ├─ app.module.ts
│  │  ├─ app.service.ts
│  │  ├─ common
│  │  │  ├─ config
│  │  │  │  └─ env.config.ts
│  │  │  ├─ constant
│  │  │  │  └─ role.enum.ts
│  │  │  ├─ exception
│  │  │  │  ├─ app.exception.ts
│  │  │  │  └─ error-code.enum.ts
│  │  │  ├─ filter
│  │  │  │  └─ global-exception.filter.ts
│  │  │  ├─ interceptor
│  │  │  │  └─ transform.interceptor.ts
│  │  │  └─ pipe
│  │  │     └─ custom-validation.pipe.ts
│  │  ├─ main.ts
│  │  ├─ modules
│  │  │  └─ media
│  │  │     ├─ media.controller.ts
│  │  │     ├─ media.module.ts
│  │  │     └─ media.service.ts
│  │  └─ security
│  │     ├─ decorator
│  │     │  ├─ auth.decorator.ts
│  │     │  └─ current-user.decorator.ts
│  │     ├─ dto
│  │     │  └─ user-context.dto.ts
│  │     ├─ guard
│  │     │  └─ jwt-auth.guard.ts
│  │     ├─ interface
│  │     │  └─ authenticated-request.interface.ts
│  │     ├─ security.module.ts
│  │     └─ strategy
│  │        └─ jwt.strategy.ts
│  ├─ test
│  │  ├─ app.e2e-spec.ts
│  │  └─ jest-e2e.json
│  └─ tsconfig.json
├─ notification-service
│  ├─ .prettierrc
│  ├─ eslint.config.mjs
│  ├─ nest-cli.json
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ README.md
│  ├─ README_PROJECT_TREE.md
│  ├─ src
│  │  ├─ app.controller.ts
│  │  ├─ app.module.ts
│  │  ├─ app.service.ts
│  │  ├─ bootstrap
│  │  │  ├─ data
│  │  │  │  └─ users.csv
│  │  │  └─ notification-seeder.service.ts
│  │  ├─ common
│  │  │  ├─ constant
│  │  │  │  └─ role.enum.ts
│  │  │  ├─ dto
│  │  │  │  ├─ request
│  │  │  │  │  └─ base-filter.request.ts
│  │  │  │  └─ response
│  │  │  │     ├─ api.response.ts
│  │  │  │     └─ page.response.ts
│  │  │  ├─ exception
│  │  │  │  ├─ app.exception.ts
│  │  │  │  └─ error-code.enum.ts
│  │  │  ├─ filter
│  │  │  │  └─ global-exception.filter.ts
│  │  │  ├─ interceptor
│  │  │  │  └─ transform.interceptor.ts
│  │  │  └─ pipe
│  │  │     └─ custom-validation.pipe.ts
│  │  ├─ config
│  │  │  └─ env.config.ts
│  │  ├─ main.ts
│  │  ├─ modules
│  │  │  ├─ email
│  │  │  │  ├─ email.controller.ts
│  │  │  │  ├─ email.module.ts
│  │  │  │  ├─ email.service.ts
│  │  │  │  └─ templates
│  │  │  │     ├─ deposit-success.hbs
│  │  │  │     └─ forgot-password.hbs
│  │  │  └─ notification
│  │  │     ├─ dto
│  │  │     │  ├─ request
│  │  │     │  │  ├─ create-notification.request.ts
│  │  │     │  │  ├─ notification-filter.request.ts
│  │  │     │  │  └─ view-phone-notification.request.ts
│  │  │     │  └─ response
│  │  │     │     ├─ notification-count.response.ts
│  │  │     │     └─ notification.response.ts
│  │  │     ├─ entity
│  │  │     │  └─ notification.entity.ts
│  │  │     ├─ notification.controller.ts
│  │  │     ├─ notification.gateway.ts
│  │  │     ├─ notification.module.ts
│  │  │     ├─ notification.repository.ts
│  │  │     └─ notification.service.ts
│  │  └─ security
│  │     ├─ decorator
│  │     │  ├─ auth.decorator.ts
│  │     │  └─ current-user.decorator.ts
│  │     ├─ dto
│  │     │  └─ user-context.dto.ts
│  │     ├─ guard
│  │     │  └─ jwt-auth.guard.ts
│  │     ├─ interface
│  │     │  └─ authenticated-request.interface.ts
│  │     ├─ security.module.ts
│  │     └─ strategy
│  │        └─ jwt.strategy.ts
│  ├─ test
│  │  ├─ app.e2e-spec.ts
│  │  └─ jest-e2e.json
│  └─ tsconfig.json
├─ payment-service
│  ├─ gradle
│  │  └─ wrapper
│  │     ├─ gradle-wrapper.jar
│  │     └─ gradle-wrapper.properties
│  ├─ gradlew
│  ├─ gradlew.bat
│  ├─ HELP.md
│  └─ src
│     ├─ main
│     │  ├─ java
│     │  │  └─ com
│     │  │     └─ example
│     │  │        └─ payment_service
│     │  │           ├─ bootstrap
│     │  │           │  └─ StartupRunner.java
│     │  │           ├─ common
│     │  │           │  ├─ annotation
│     │  │           │  │  └─ ApiGlobalResponse.java
│     │  │           │  ├─ config
│     │  │           │  │  ├─ AppProperties.java
│     │  │           │  │  ├─ CorsConfig.java.txt
│     │  │           │  │  └─ OpenApiConfig.java
│     │  │           │  ├─ constant
│     │  │           │  │  ├─ ListingType.java
│     │  │           │  │  ├─ NotificationType.java
│     │  │           │  │  └─ Role.java
│     │  │           │  ├─ dto
│     │  │           │  │  ├─ request
│     │  │           │  │  │  └─ BaseFilterRequest.java
│     │  │           │  │  └─ response
│     │  │           │  │     ├─ ApiResponse.java
│     │  │           │  │     └─ PageResponse.java
│     │  │           │  ├─ exception
│     │  │           │  │  ├─ AppException.java
│     │  │           │  │  ├─ CustomErrorController.java
│     │  │           │  │  ├─ ErrorCode.java
│     │  │           │  │  └─ GlobalExceptionHandler.java
│     │  │           │  ├─ mapper
│     │  │           │  │  ├─ EntityResolver.java
│     │  │           │  │  └─ MapperConfiguration.java
│     │  │           │  └─ util
│     │  │           ├─ grpc
│     │  │           │  ├─ InternalPaymentGrpcService.java.txt
│     │  │           │  └─ InternalPaymentStatisticGrpcService.java
│     │  │           ├─ modules
│     │  │           │  ├─ statistic
│     │  │           │  │  ├─ repository
│     │  │           │  │  │  └─ TransactionStatisticRepository.java
│     │  │           │  │  └─ service
│     │  │           │  │     └─ ManageTransactionStatisticsService.java
│     │  │           │  └─ transaction
│     │  │           │     ├─ config
│     │  │           │     │  └─ VnPayProperties.java
│     │  │           │     ├─ constant
│     │  │           │     │  ├─ TransactionStatus.java
│     │  │           │     │  └─ TransactionType.java
│     │  │           │     ├─ controller
│     │  │           │     │  ├─ PaymentController.java
│     │  │           │     │  └─ TransactionController.java
│     │  │           │     ├─ dto
│     │  │           │     │  ├─ request
│     │  │           │     │  │  ├─ CreatePaymentRequest.java
│     │  │           │     │  │  └─ TransactionFilterRequest.java
│     │  │           │     │  └─ response
│     │  │           │     │     ├─ PaymentLinkResponse.java
│     │  │           │     │     └─ TransactionResponse.java
│     │  │           │     ├─ entity
│     │  │           │     │  └─ Transaction.java
│     │  │           │     ├─ mapper
│     │  │           │     │  └─ TransactionMapper.java
│     │  │           │     ├─ repository
│     │  │           │     │  └─ TransactionRepository.java
│     │  │           │     ├─ service
│     │  │           │     │  ├─ TransactionService.java
│     │  │           │     │  └─ VNPAYService.java
│     │  │           │     ├─ specification
│     │  │           │     │  └─ TransactionSpecification.java
│     │  │           │     └─ util
│     │  │           │        └─ VnPayUtil.java
│     │  │           ├─ PaymentServiceApplication.java
│     │  │           └─ security
│     │  │              ├─ annotation
│     │  │              │  ├─ CurrentUser.java
│     │  │              │  ├─ IsAdmin.java
│     │  │              │  ├─ IsAdminOrModerator.java
│     │  │              │  └─ RequireLogin.java
│     │  │              ├─ config
│     │  │              │  ├─ JwtProperties.java
│     │  │              │  └─ WebMvcConfig.java
│     │  │              ├─ CustomAccessDeniedHandler.java
│     │  │              ├─ CustomAuthenticationEntryPoint.java
│     │  │              ├─ dto
│     │  │              │  └─ UserContext.java
│     │  │              ├─ resolver
│     │  │              │  └─ CurrentUserArgumentResolver.java
│     │  │              ├─ SecurityConfiguration.java
│     │  │              └─ SecurityService.java
│     │  └─ resources
│     │     ├─ application.yml
│     │     ├─ data
│     │     │  └─ users.csv
│     │     ├─ static
│     │     └─ templates
│     └─ test
│        └─ java
│           └─ com
│              └─ example
│                 └─ payment_service
│                    └─ PaymentServiceApplicationTests.java
├─ README_PROJECT_TREE.md
├─ statistic-service
│  ├─ appsettings.Development.json
│  ├─ appsettings.json
│  ├─ Common
│  │  ├─ Configs
│  │  │  ├─ EnvConfig.cs
│  │  │  └─ Extensions
│  │  │     ├─ AppConfigExtension.cs
│  │  │     └─ GrpcClientExtension.cs
│  │  ├─ Constants
│  │  │  └─ Enums.cs
│  │  ├─ Exceptions
│  │  │  ├─ AppException.cs
│  │  │  ├─ ErrorCode.cs
│  │  │  └─ GlobalExceptionHandler.cs
│  │  └─ Responses
│  │     └─ ApiResponse.cs
│  ├─ Modules
│  │  ├─ Admin
│  │  │  ├─ Controllers
│  │  │  │  ├─ AdminStatisticsController.cs
│  │  │  │  └─ SystemOverviewController.cs
│  │  │  ├─ DTOs
│  │  │  │  ├─ AdminStatisticsResponse.cs
│  │  │  │  ├─ MonthlyRevenueResponse.cs
│  │  │  │  └─ SystemOverviewResponse.cs
│  │  │  └─ Services
│  │  │     ├─ AdminStatisticsService.cs
│  │  │     └─ SystemOverviewService.cs
│  │  ├─ Identity
│  │  │  ├─ Controllers
│  │  │  │  └─ ManageUserStatisticsController.cs
│  │  │  ├─ DTOs
│  │  │  │  └─ ManageUserStatisticsResponse.cs
│  │  │  └─ Services
│  │  │     └─ ManageUserStatisticsService.cs
│  │  ├─ Listing
│  │  │  ├─ Controllers
│  │  │  │  └─ ManagePostStatisticsController.cs
│  │  │  ├─ DTOs
│  │  │  │  └─ ManagePostStatisticsResponse.cs
│  │  │  └─ Services
│  │  │     └─ ManagePostStatisticsService.cs
│  │  ├─ Payment
│  │  │  ├─ Controllers
│  │  │  │  └─ ManageTransactionStatisticsController.cs
│  │  │  ├─ DTOs
│  │  │  │  └─ ManageTransactionStatisticsResponse.cs
│  │  │  └─ Services
│  │  │     └─ ManageTransactionStatisticsService.cs
│  │  └─ UserClient
│  │     ├─ Controllers
│  │     │  └─ UserClientStatisticsController.cs
│  │     ├─ DTOs
│  │     │  └─ UserDashboardResponse.cs
│  │     └─ Services
│  │        └─ UserClientStatisticsService.cs
│  ├─ Program.cs
│  ├─ Properties
│  │  └─ launchSettings.json
│  ├─ Security
│  │  ├─ Attributes
│  │  │  ├─ CurrentUserAttribute.cs
│  │  │  ├─ IsAdminAttribute.cs
│  │  │  ├─ IsAdminOrModeratorAttribute.cs
│  │  │  └─ RequireLoginAttribute.cs
│  │  ├─ DTOs
│  │  │  └─ UserContext.cs
│  │  ├─ Extensions
│  │  │  └─ JwtExtension.cs
│  │  ├─ Middlewares
│  │  │  └─ CustomJwtMiddleware.cs
│  │  └─ Resolvers
│  │     └─ CurrentUserModelBinder.cs
│  └─ statistic-service.csproj
└─ _shared
   ├─ data
   │  └─ users.csv
   └─ proto
      ├─ identity.proto.txt
      ├─ listing.proto.txt
      ├─ notification.proto.txt
      ├─ payment.proto.txt
      └─ statistic
         ├─ identity_statistic.proto
         ├─ listing_statistic.proto
         └─ payment_statistic.proto

```