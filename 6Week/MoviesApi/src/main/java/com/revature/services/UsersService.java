package com.revature.services;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.revature.models.Users;

public interface UsersService {

	public List<Users> getAllUsers();

	public Users saveNewUser(Users u);

	public Users getUserByID(int id);

	public Users updateUser(Users u);

	public Users loginUser(String username, String password);
	
}
