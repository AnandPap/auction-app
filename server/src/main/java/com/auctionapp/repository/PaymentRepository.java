package com.auctionapp.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.auctionapp.entity.Payment;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long> {
    List<Payment> findByUserId(Long userId);

    Optional<Payment> findByToken(String token);

    Optional<Payment> findByPaypalEmail(String email);

    List<Payment> findByMethodType(Payment.MethodType methodType);

    List<Payment> findByProvider(Payment.Provider provider);

    void deleteAllByUserId(Long userId);
}
