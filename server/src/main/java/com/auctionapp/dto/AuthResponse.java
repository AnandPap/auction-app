package com.auctionapp.dto;

public class AuthResponse {

    private String token;
    private String error;

    public AuthResponse(String token) {
        this.token = token;
        this.error = null;
    }

    public AuthResponse(String error, boolean isError) {
        this.error = error;
        this.token = null;
    }

    public String getToken() {
        return token;
    }

    public String getError() {
        return error;
    }

    public boolean isSuccess() {
        return token != null;
    }
}
