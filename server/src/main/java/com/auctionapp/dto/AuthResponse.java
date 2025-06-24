package com.auctionapp.dto;

import lombok.Data;

@Data
public class AuthResponse {

    private final String token;
    private final UserDTO user;
    private final String error;
    private final Boolean success;

    public AuthResponse(String token, UserDTO user) {
        this.token = token;
        this.user = user;
        this.error = null;
        this.success = true;
    }

    public AuthResponse(String error, boolean isError) {
        this.token = null;
        this.user = null;
        this.error = error;
        this.success = false;
    }
}
