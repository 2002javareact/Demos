package com.revature.arrays;

import java.util.Arrays;

import com.revature.objects.Car;

public class ArrayLauncher {
	
	public static void main(String[] args) {
		//first way to declare an array
		int [] intArray = new int[10];
		//default values
		//for ints its 0 for floats/double its 0 for bool its false for objects its null
		Car [] carArray = new Car[10];
		
		//is an example of the enhanced for loop
		//we can use the enhanced for loop with anything that implements the iterable interface
		// or primitive arrays
		for(int i : intArray) {
			System.out.println(i);
		}
		
		for(Car c : carArray) {
			System.out.println(c);
		}
		intArray[6] = 10;
		//intArray[10] = 100; ArrayIndexOutOfBounds very very common exception.
		for(int i = 0; i < intArray.length; i++) {
			// intArray[0] = 0
			//intArray[1] = 1
			intArray[i] = intArray.length - i - 1;
		}
		
		for(int i : intArray) {
			System.out.println(i);
		}
		
		Arrays.sort(intArray);
	
		
		for(int i : intArray) {
			System.out.println(i);
		}
		double [][][] d = new double [2][5][1];
	}

}
