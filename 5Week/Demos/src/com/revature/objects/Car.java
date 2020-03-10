package com.revature.objects;

public class Car {
	int numberOfWheels;
	String make;
	String model;
	double topSpeed;
	int numberOfDoors;
	int id;
	
	// because it is static it belongs to Car not to an object like lambo or truck
	static int numberOfCarsMade = 0;
	
	//technically the class is good as is
	// because if we don;t add a constructor
	// java will automatically add a constructor that looks like this
	//this is called the default constructor
//	public Car () {
//		super();
//	}
	// this is a constuctor for others to use to build car objects
	//constructors have same name as class
	public Car(int numWheels, String make, String model, double speed, int doors) {
		//whether I put it or not the first thing is 
		super();
		this.make = make;
		this.model = model;
		this.numberOfDoors = doors;
		this.numberOfWheels = numWheels;
		this.topSpeed = speed;
		Car.numberOfCarsMade++;
		this.id = Car.numberOfCarsMade;
	}
	
	// takes in two cars and returns the car that is older than the other
	public static Car compareCarAge(Car c, Car c2) {
		if(c.id < c2.id) {
			return c;
		} else {
			return c2;
		}
	}
	
	
	public String drive() {
		return "you are driving";
	}
	//this is overloading a method
	//we add the same name but with different params
	public String drive(String destination) {
		return "you are driving to " + destination;
 	}
	
	
	public void wash() {
		System.out.println("Your car is sparkly clean");
	}
	
	@Override// this is called an annotation, some of them do things, this one does not
	public String toString() {
		// TODO Auto-generated method stub
		return "Wheels: " + this.numberOfWheels + " Make: " + this.make + " Model: " + this.model + " TopSpeed: " + this.topSpeed + " Doors: " + this.numberOfDoors;
	}
	
}
