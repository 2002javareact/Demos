package com.revature.beans;

public class CarBean {

	private int numberOfWheels;
	private String make;
	private String model;
	private double topSpeed;
	private int numberOfDoors;
	private int id;
	
	// because it is static it belongs to Car not to an object like lambo or truck
	private static int numberOfCarsMade = 0;

	
	
	// secret to saving yourself many minutes
	// alt + shift + s -> r to make getters and setters
	// alt + shift + s -> o to make constructor with all fields
	// alt + shift + s -> c to make the default constructor
	// alt + shift + s -> s to make a to string override
	// alt + shift + s -> h to override hashcode and equals
	
	
	
	public int getNumberOfWheels() {
		return numberOfWheels;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		result = prime * result + ((make == null) ? 0 : make.hashCode());
		result = prime * result + ((model == null) ? 0 : model.hashCode());
		result = prime * result + numberOfDoors;
		result = prime * result + numberOfWheels;
		long temp;
		temp = Double.doubleToLongBits(topSpeed);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		CarBean other = (CarBean) obj;
		if (id != other.id)
			return false;
		if (make == null) {
			if (other.make != null)
				return false;
		} else if (!make.equals(other.make))
			return false;
		if (model == null) {
			if (other.model != null)
				return false;
		} else if (!model.equals(other.model))
			return false;
		if (numberOfDoors != other.numberOfDoors)
			return false;
		if (numberOfWheels != other.numberOfWheels)
			return false;
		if (Double.doubleToLongBits(topSpeed) != Double.doubleToLongBits(other.topSpeed))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "CarBean [numberOfWheels=" + numberOfWheels + ", make=" + make + ", model=" + model + ", topSpeed="
				+ topSpeed + ", numberOfDoors=" + numberOfDoors + ", id=" + id + "]";
	}

	public CarBean() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CarBean(int numberOfWheels, String make, String model, double topSpeed, int numberOfDoors, int id) {
		super();
		this.numberOfWheels = numberOfWheels;
		this.make = make;
		this.model = model;
		this.topSpeed = topSpeed;
		this.numberOfDoors = numberOfDoors;
		this.id = id;
	}

	public void setNumberOfWheels(int numberOfWheels) {
		this.numberOfWheels = numberOfWheels;
	}

	public String getMake() {
		return make;
	}

	public void setMake(String make) {
		this.make = make;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public double getTopSpeed() {
		return topSpeed;
	}

	public void setTopSpeed(double topSpeed) {
		this.topSpeed = topSpeed;
	}

	public int getNumberOfDoors() {
		return numberOfDoors;
	}

	public void setNumberOfDoors(int numberOfDoors) {
		this.numberOfDoors = numberOfDoors;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public static int getNumberOfCarsMade() {
		return numberOfCarsMade;
	}

	public static void setNumberOfCarsMade(int numberOfCarsMade) {
		CarBean.numberOfCarsMade = numberOfCarsMade;
	}
	
	
	
}
