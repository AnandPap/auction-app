package com.auctionapp.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Version;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "user_profiles")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class UserProfile {

    public enum NotificationType {
        EMAIL, PUSH, SMS
    }

    public enum Gender {
        MALE, FEMALE, OTHER
    }

    @Id
    @EqualsAndHashCode.Include
    private Long userId;

    // Shares the primary key with user
    @OneToOne(optional = false)
    @MapsId
    @JoinColumn(name = "user_id")
    private User user;

    @Past
    @Column(name = "birth_date")
    private LocalDate birthDate;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    @Size(max = 255)
    @Column(name = "profile_image_url")
    private String profileImageUrl;

    @Size(max = 20)
    @Column(name = "phone_number")
    private String phoneNumber;

    @Builder.Default
    @Column(name = "phone_number_verified")
    private Boolean phoneNumberVerified = Boolean.FALSE;

    @NotNull
    @Builder.Default
    private Boolean activated = Boolean.FALSE;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    @Column(name = "notification_type")
    private NotificationType notificationType = NotificationType.EMAIL;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Version
    private Integer version;
}
