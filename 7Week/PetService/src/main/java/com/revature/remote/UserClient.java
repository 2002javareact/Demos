package com.revature.remote;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.revature.models.User;

//allow me to send requests to the user service
//look like a mix of spring mvc controllers and spring data

@FeignClient(name = "user-service", fallback = UserClientFallback.class)
public interface UserClient {
//I write methods that match endpoints in the controllers of the UserService
//feign builds an impl that will send requests to this services endpoints
	@GetMapping("users")
	public List<User> getAll();
	
	@GetMapping("users/{id}")
	public User getUserById(@PathVariable int id);
	
}
