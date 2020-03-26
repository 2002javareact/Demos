package com.revature.remote;

import java.util.List;

import org.springframework.stereotype.Component;

import com.revature.models.User;

@Component
public class UserClientFallback implements UserClient{

	@Override
	public List<User> getAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User getUserById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

}
