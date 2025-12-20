package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@org.springframework.web.bind.annotation.RestController
public class FliprWebsiteApplication {

	public static void main(String[] args) {
		SpringApplication.run(FliprWebsiteApplication.class, args);
	}

	@org.springframework.web.bind.annotation.GetMapping("/")
	public String home() {
		return "Backend is running! Access API at /api/projects";
	}

}
