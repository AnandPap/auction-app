package com.auctionapp.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.auctionapp.entity.Address;
import com.auctionapp.entity.Payment;

@Repository
public interface AddressRepository extends JpaRepository<Payment, Long> {
    List<Address> findByCity(String city);

    Optional<Address> findByIdAndZipCode(Long id, String zipCode);

    List<Address> findByCountryIgnoreCase(String country);
}
