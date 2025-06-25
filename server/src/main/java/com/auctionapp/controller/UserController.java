package com.auctionapp.controller;

import org.springframework.web.bind.annotation.GetMapping;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.auctionapp.repository.UserRepository;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;

import com.auctionapp.dto.UserDTO;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
// Can annotate individual methods instead of entire controller
@SecurityRequirement(name = "bearerAuth")
public class UserController {

    private final UserRepository userRepository;

    @GetMapping
    public ResponseEntity<List<UserDTO>> getAllUsers() {
        List<UserDTO> users = userRepository.findAll().stream()
                .map(UserDTO::fromEntity)
                .toList();
        return ResponseEntity.ok(users);
    }
}
