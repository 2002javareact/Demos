package com.revature.beans;

public class BeanLauncher {

	
	public static void main(String[] args) {
		CarBean lambo = new CarBean(4, "Lambo", "adventor", 50.5, 2, 1);
		
		System.out.println(lambo.getNumberOfDoors());
	}
}
