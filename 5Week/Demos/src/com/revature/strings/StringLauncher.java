package com.revature.strings;

public class StringLauncher {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//lets research the string pool
		String s1 = "Hello World";
		String s2 = "Hello World";
		System.out.println("Comparing s1 and s2");
		// with string literals, "hello world" is the same value in the string pool and 
		//s1 and s2 end up having the same reference to it
		compareStrings(s1, s2);
		String s3 = "Hello " + "World";
		System.out.println("Comparing s1 and s3");
		compareStrings(s1, s3);
		
		String s4 = "Hello";
		String s5 = "World";
		String s6 = s4+ " " + s5;
		System.out.println("Comparing s1 and s6");
		compareStrings(s1, s6);
		
		// if we use the new keyword it does not go into the string pool
		String s7 = new String("Hello World");
		System.out.println("Comparing s1 and s7");
		compareStrings(s1, s7);
		
		
	}

	public static void compareStrings(String s1, String s2) {
		if(s1 == s2) {
			System.out.println("String 1 == String 2");
		}
		if(s1.equals(s2)) {
			System.out.println("String 1 .equals String 2");
		}
	}
	
}
