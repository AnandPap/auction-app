package com.auctionapp.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.auctionapp.dto.AuthResponse;
import com.auctionapp.dto.LoginRequest;
import com.auctionapp.dto.RegisterRequest;
import com.auctionapp.service.AuthService;

import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    @io.swagger.v3.oas.annotations.parameters.RequestBody(description = "User registration request", required = true, content = @Content(mediaType = "application/json", examples = @ExampleObject(name = "Example Registration", value = """
            {
              "firstName": "John",
              "lastName": "Doe",
              "email": "john@example.com",
              "password": "secret123",
              "confirmPassword": "secret123"
            }
            """)))
    public ResponseEntity<AuthResponse> register(@Valid @RequestBody RegisterRequest request, BindingResult result) {
        return ResponseEntity.ok(authService.register(request, result));
    }

    @PostMapping("/login")
    @io.swagger.v3.oas.annotations.parameters.RequestBody(description = "Login request", required = true, content = @Content(mediaType = "application/json", examples = @ExampleObject(name = "Login Example", value = """
            {
              "email": "john@example.com",
              "password": "secret123"
            }
            """)))
    public ResponseEntity<AuthResponse> login(@Valid @RequestBody LoginRequest request, BindingResult result) {
        return ResponseEntity.ok(authService.login(request, result));
    }

    // @PostMapping("/logout")
    // public ResponseEntity<LogoutResponse> logout() {
    // // Optional: invalidate token, clear session, etc.
    // return ResponseEntity.ok(new LogoutResponse(true, "Logged out
    // successfully."));
    // }
}