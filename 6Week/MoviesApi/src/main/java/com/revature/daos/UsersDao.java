package com.revature.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.models.Users;

@Repository//This is all we need
public interface UsersDao extends JpaRepository<Users,Integer>{
	
	//I want to add a method for logging in
	//because of how the method is named, it will do what we want
	public Users findByUsernameAndPassword(String username, String password);

}
