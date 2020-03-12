package com.revature.carwash;

import com.revature.objects.Car;

public class CarWashLauncher {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		// build a couple car washes and some cars
		// try to wash those cars
		// handle some errors is a car wash is closed
		CarWash octopus = new CarWash("OctopusWash", 5.50);
		CarWash walmart = new CarWash("Walmart", 1.50);
		Car lambo = new Car(4, "Lamborghini", "Adventor", 60.5, 2);
		Car tesla = new Car(4, "Tesla", "Model 3", 5.5, 4);
		Car truck = new Car(6, "Ford", "Escape", 25, 4);

		octopus.addWashableToLine(lambo);
		octopus.addWashableToLine(truck);
		octopus.addWashableToLine(tesla);
		octopus.addWashableToLine(lambo);
		octopus.addWashableToLine(lambo);
		octopus.addWashableToLine(lambo);

		try {
			for (int i = 0; i < octopus.line.size();) {
				octopus.washObject();
			}
		} catch (NoMoreWashesTodayExcpetion e) {
			try {
				walmart.line.addAll(octopus.line);
				octopus.line.clear();
				for (int i = 0; i < walmart.line.size();) {
					walmart.washObject();
				}
			} catch (NoMoreWashesTodayExcpetion e2) {
				e2.printStackTrace();
			}
		}
	}

}
