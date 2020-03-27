package com.revature.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("shutdown")
public class ShutdownController {

	
	@PostMapping
	public void shutdown() {
		System.out.println("We are shutting down now");
		System.exit(0);
	}
}
