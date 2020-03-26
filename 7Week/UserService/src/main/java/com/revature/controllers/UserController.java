package com.revature.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.User;

@RestController
@RequestMapping("users")
public class UserController {

	@Value("${custom.property}")
	private String customProperty;
	
	
	private static List<User> allUsers = new ArrayList<User>();
	static {
		allUsers.add(new User(1, 65, "Blue"));
		allUsers.add(new User(2, 72, "Brown"));
		allUsers.add(new User(3, 83, "Green"));
	}
	
	@GetMapping
	public List<User> getAll(){
		System.out.println(customProperty);
		return allUsers;
	}
	
	@GetMapping("{id}")
	public User getUserById(@PathVariable int id) {
		User u = null;
		for(User user: allUsers) {
			if(user.getUserId() == id) {
				u = user;
			}
		}
		return u;
	}
	
}
