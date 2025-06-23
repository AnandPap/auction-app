package com.auctionapp.service;

import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.auctionapp.dto.AuthResponse;
import com.auctionapp.dto.LoginRequest;
import com.auctionapp.dto.RegisterRequest;
import com.auctionapp.entity.User;
import com.auctionapp.exception.EmailAlreadyExistsException;
import com.auctionapp.exception.ValidationException;
import com.auctionapp.repository.UserRepository;

@Service
public class AuthService {

    private final UserRepository userRepo;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthService(UserRepository userRepo, PasswordEncoder passwordEncoder, JwtService jwtService) {
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    public AuthResponse register(RegisterRequest req, BindingResult result) {
        if (result.hasErrors()) {
            throw new ValidationException("Invalid registration details");
        }

        if (userRepo.existsByEmail(req.getEmail())) {
            throw new EmailAlreadyExistsException("Email already exists");
        }

        User user = User.builder()
                .firstName(req.getFirstName())
                .lastName(req.getLastName())
                .email(req.getEmail())
                .role(User.Role.USER)
                .password(passwordEncoder.encode(req.getPassword()))
                .build();

        userRepo.save(user);

        String jwt = jwtService.generateToken(user);
        return new AuthResponse(jwt);
    }

    public AuthResponse login(LoginRequest req, BindingResult result) {
        if (result.hasErrors()) {
            throw new ValidationException("Invalid login details");
        }

        User user = userRepo.findByEmail(req.getEmail())
                .orElseThrow(() -> new UsernameNotFoundException("User with email " + req.getEmail() + " not found"));

        if (!passwordEncoder.matches(req.getPassword(), user.getPassword())) {
            throw new BadCredentialsException("Email or password is incorrect");
        }

        String jwt = jwtService.generateToken(user);
        return new AuthResponse(jwt);
    }
}