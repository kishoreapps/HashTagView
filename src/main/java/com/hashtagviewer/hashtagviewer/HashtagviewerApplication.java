package com.hashtagviewer.hashtagviewer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages={
		"com.hashtagviewer.hashtagviewer.services", "com.hashtagviewer.hashtagviewer.controller"})
public class HashtagviewerApplication {

	public static void main(String[] args) {
		SpringApplication.run(HashtagviewerApplication.class, args);
	}

}
