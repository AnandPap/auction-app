package com.auctionapp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.auctionapp.dto.AuthResponse;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler({ UsernameNotFoundException.class, BadCredentialsException.class })
    public ResponseEntity<AuthResponse> handleAuthExceptions(RuntimeException ex) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new AuthResponse(ex.getMessage(), true));
    }

    @ExceptionHandler(ValidationException.class)
    public ResponseEntity<AuthResponse> handleValidationException(ValidationException ex) {
        return ResponseEntity.badRequest().body(new AuthResponse(ex.getMessage(), true));
    }

    @ExceptionHandler(EmailAlreadyExistsException.class)
    public ResponseEntity<AuthResponse> handleEmailExistsException(EmailAlreadyExistsException ex) {
        return ResponseEntity.badRequest().body(new AuthResponse(ex.getMessage(), true));
    }
}
