package com.revature.daos;

import java.util.List;

import com.revature.models.Bear;


// Contract for the program to follow
public interface BearDao {
	//Some functions for the rest of the program to use while accessing database
	//special java documentation comments, they appear on the hover over
	/**
	 * Takes in a bear and updates database with the new fields
	 * @param b - Bear to update
	 * @return - Updated Bear
	 */
	public Bear updateBear(Bear b);
	
	public Bear getOneBear(int bearId);
	
	public List<Bear> getAllBears();
	
	public Bear saveBear(Bear b);
	
	public List<Bear> getBySleeping();
	
	

}
