package com.example.payment_service.grpc;

import com.example.payment_service.modules.statistic.service.ManageTransactionStatisticsService;

import io.grpc.stub.StreamObserver;
import lombok.RequiredArgsConstructor;
import net.devh.boot.grpc.server.service.GrpcService;
import payment.statistic.InternalPaymentStatisticServiceGrpc;
import payment.statistic.MonthlyRevenueListReply;
import payment.statistic.RevenueStatsReply;
import payment.statistic.RevenueStatsRequest;
import payment.statistic.TransactionDashboardReply;
import payment.statistic.TransactionDashboardRequest;
import payment.statistic.UserFinancialReply;
import payment.statistic.UserFinancialRequest;
import payment.statistic.YearRequest;

@GrpcService
@RequiredArgsConstructor
public class InternalPaymentStatisticGrpcService
                extends InternalPaymentStatisticServiceGrpc.InternalPaymentStatisticServiceImplBase {

        // 🌟 CHỈ CÒN ĐÚNG 1 SERVICE ĐƯỢC INJECT
        private final ManageTransactionStatisticsService transactionStatisticsService;

        @Override
        public void getRevenueStats(RevenueStatsRequest request, StreamObserver<RevenueStatsReply> responseObserver) {
                RevenueStatsReply reply = transactionStatisticsService.getRevenueStats(request.getYear(),
                                request.getMonth());

                responseObserver.onNext(reply);
                responseObserver.onCompleted();
        }

        @Override
        public void getMonthlyRevenue(YearRequest request, StreamObserver<MonthlyRevenueListReply> responseObserver) {
                MonthlyRevenueListReply reply = transactionStatisticsService.getMonthlyRevenue(request.getYear());

                responseObserver.onNext(reply);
                responseObserver.onCompleted();
        }

        @Override
        public void getTransactionDashboardStats(TransactionDashboardRequest request,
                        StreamObserver<TransactionDashboardReply> responseObserver) {
                TransactionDashboardReply reply = transactionStatisticsService
                                .getTransactionDashboardStats(request.getDays());

                responseObserver.onNext(reply);
                responseObserver.onCompleted();
        }

        @Override
        public void getUserFinancialStats(UserFinancialRequest request,
                        io.grpc.stub.StreamObserver<UserFinancialReply> responseObserver) {
                UserFinancialReply reply = transactionStatisticsService
                                .getUserFinancialStats(request.getUserId(), request.getMonths());
                responseObserver.onNext(reply);
                responseObserver.onCompleted();
        }

        @Override
        public void getSystemRevenueStats(payment.statistic.SystemRevenueRequest request,
                        io.grpc.stub.StreamObserver<payment.statistic.SystemRevenueReply> responseObserver) {
                responseObserver.onNext(transactionStatisticsService.getSystemRevenueStats(request.getDays()));
                responseObserver.onCompleted();
        }
}