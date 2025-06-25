package com.auctionapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;

@OpenAPIDefinition(info = @Info(title = "Auction App API", version = "1.0", description = "API documentation for the Auction App"))
@SpringBootApplication
public class AuctionApp {

	public static void main(String[] args) {
		SpringApplication.run(AuctionApp.class, args);
	}

}
