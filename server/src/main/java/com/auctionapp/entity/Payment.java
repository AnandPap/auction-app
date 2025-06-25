package com.auctionapp.entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Version;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "payment_methods")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Payment {

    public enum MethodType {
        CREDIT_CARD, PAYPAL
    }

    public enum Provider {
        STRIPE, PAYPAL
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @NotBlank
    @Size(max = 100)
    @Column(name = "owner_name", nullable = false, length = 100)
    private String ownerName;

    @Enumerated(EnumType.STRING)
    @Column(name = "method_type", nullable = false, length = 20)
    private MethodType methodType;

    @Enumerated(EnumType.STRING)
    @Column(name = "provider", nullable = false, length = 20)
    private Provider provider;

    @NotBlank
    @Size(max = 255)
    @Column(nullable = false, length = 255)
    private String token;

    @Email
    @Size(max = 100)
    @Column(name = "paypal_email", length = 100)
    private String paypalEmail;

    @Size(min = 4, max = 4)
    @Column(name = "last_four_digits", length = 4)
    private String lastFourDigits;

    @Column(name = "expiration_year")
    private Integer expirationYear;

    @Column(name = "expiration_month")
    private Integer expirationMonth;

    @Size(max = 30)
    @Column(name = "credit_card_brand", length = 30)
    private String creditCardBrand;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Version
    private Integer version;
}
