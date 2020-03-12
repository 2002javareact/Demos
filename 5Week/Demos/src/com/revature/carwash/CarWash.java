package com.revature.carwash;

import java.util.PriorityQueue;
import java.util.Queue;

import com.revature.objects.Car;

public class CarWash {

	double price;
	
	// for the cars waiting in line
	//We use the interface for the type of the variable
	//because the interface guarantees behaviour
	//and if we do abstraction correctly we only care about behaviour
	Queue<Washable> line;
	
	String name;
	
	int numberOfWashesPerDay = 5;
	
	public CarWash(String name, double price) {
		this.line = new PriorityQueue<>();
		this.name = name;
		this.price = price;
	}
	
	public void washObject() throws NoMoreWashesTodayExcpetion {
		if(this.numberOfWashesPerDay == 0) {
			throw new NoMoreWashesTodayExcpetion();
		}
		Washable c = this.line.poll();
		if(c == null) {
			return;
		}else {
			System.out.println("We are washing your car");
			c.wash();
			this.numberOfWashesPerDay--;
		}
	}
	
	public void addWashableToLine(Washable c) {
		this.line.add(c);
		System.out.println("You have been added to the line");
	}
	
}
