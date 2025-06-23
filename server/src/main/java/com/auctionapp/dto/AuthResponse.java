package com.auctionapp.dto;

import lombok.Data;

@Data
public class AuthResponse {

    private final String token;
    private final String error;
    private final Boolean success;

    public AuthResponse(String token) {
        this.token = token;
        this.error = null;
        this.success = true;
    }

    public AuthResponse(String error, boolean isError) {
        this.error = error;
        this.token = null;
        this.success = false;
    }
}
