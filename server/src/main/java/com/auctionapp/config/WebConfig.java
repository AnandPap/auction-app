package com.auctionapp.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig {
    @Value("${spring.profiles.active:dev}")
    private String activeProfile;

    @Value("${FRONTEND_DEV_ORIGIN:http://localhost:5173}")
    private String devOrigin;

    @Value("${FRONTEND_PROD_ORIGIN:http://localhost:5173}")
    private String prodOrigin;

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                String[] allowedOrigins;
                if ("prod".equals(activeProfile)) {
                    allowedOrigins = new String[] { prodOrigin };
                } else {
                    allowedOrigins = new String[] { devOrigin };
                }

                registry.addMapping("/api/**")
                        .allowedOrigins(allowedOrigins)
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                        .allowedHeaders("*")
                        .allowCredentials(true);
            }
        };
    }
}
