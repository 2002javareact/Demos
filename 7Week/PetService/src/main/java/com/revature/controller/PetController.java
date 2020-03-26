package com.revature.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.Pet;
import com.revature.remote.UserClient;

@RestController
@RequestMapping("pets")
public class PetController {
	
	private UserClient uc;
	
	@Autowired
	public PetController(UserClient uc) {
		this.uc = uc;
	}
	
	
	@GetMapping
	public List<Pet> getAll() {
		Pet cat = new Pet("Mittens", "Cat", 1, null);
		cat.setOwner(uc.getUserById(cat.getOwnerId()));
		
		List<Pet> allPets = new ArrayList<Pet>();
		allPets.add(cat);
		return allPets;
	}
	
	
}
