package com.revature.objects;

import com.revature.objects.Car;

public class ObjectsLaucher {

	// lets talk about the main method
	// this is a method signature you should have memorized
	public static void main(String [] args) {
		com.revature.objects.Car lambo = new com.revature.objects.Car(4, "Lamborghini", "Adventor", 60.5 , 2);
		
		Car truck = new Car(6,"Ford", "Escape", 25, 4);
		System.out.println(lambo);
		
		lambo.toString();
		System.out.println(lambo.drive());
		System.out.println(lambo.drive("Hawaii"));
		lambo.wash();
		
		System.out.println(Car.numberOfCarsMade);
		System.out.println(Car.compareCarAge(lambo, truck));
	}
	
	
}
