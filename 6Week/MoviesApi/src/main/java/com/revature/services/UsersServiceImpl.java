package com.revature.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.daos.UsersDao;
import com.revature.models.Users;

@Service
public class UsersServiceImpl implements UsersService{
	
	private UsersDao ud;
	
	@Autowired// tells spring to find a bean of type UsersDao and pass it in here
	public UsersServiceImpl(UsersDao ud) {
		this.ud = ud;
	}

	@Override
	public List<Users> getAllUsers() {
		return ud.findAll();
	}

	@Override
	public Users saveNewUser(Users u) {
		
		return ud.save(u);
	}

	@Override
	public Users getUserByID(int id) {
		// TODO Auto-generated method stub
		return ud.getOne(id);
	}

	@Override
	@Transactional// is from spring transactions, its special annotation we can put on a method that makes everything in that method become a database transaction
	public Users updateUser(Users u) {
		
		//To do an update we leverage hibernate automatic dirty checking
		//we find the object to update and thern set whatever fields to their new values
		// make sure to do it in one transaction using the @transactional annotation
		Users oldUser = ud.getOne(u.getUserId());
		if(u.getFirstName() != null) {
			oldUser.setFirstName(u.getFirstName());
		}
		if(u.getLastName() != null) {
			oldUser.setLastName(u.getLastName());
		}
		if(u.getUsername() != null) {
			oldUser.setUsername(u.getUsername());
		}
		if(u.getPassword() != null) {
			oldUser.setPassword(u.getPassword());
		}
		return oldUser;
	}

	@Override
	public Users loginUser(String username, String password) {
		// TODO Auto-generated method stub
		return ud.findByUsernameAndPassword(username, password);
	}

}
