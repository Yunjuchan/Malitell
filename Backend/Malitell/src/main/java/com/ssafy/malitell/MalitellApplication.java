package com.ssafy.malitell;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.data.redis.repository.configuration.EnableRedisRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableCaching
@EnableScheduling
@EnableRedisRepositories
@EnableMongoRepositories(basePackages = "com.ssafy.malitell.repository.chat")
public class MalitellApplication {
	public static void main(String[] args) {
		SpringApplication.run(MalitellApplication.class, args);
	}
}
