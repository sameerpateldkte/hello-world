package com.synechron;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class HelloWorldApplication {
	
	@RequestMapping("/hello")
	public String sayHello(){
		return "Hello POD 9........!";
	}

	public static void main(String[] args) {
		SpringApplication.run(HelloWorldApplication.class, args);
	}
}
