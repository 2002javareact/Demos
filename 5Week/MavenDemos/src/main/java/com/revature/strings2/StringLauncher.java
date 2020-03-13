package com.revature.strings2;

public class StringLauncher {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		StringBuffer sb = new StringBuffer("Hello World");
		System.out.println(sb);
		sb.insert(5, "Test");
		System.out.println(sb);
		sb.reverse();
		System.out.println(sb);
	
		
		String s = "Hello World";
		StringBuilder sb2 = new StringBuilder(s);
		System.out.println(sb.hashCode());
		
		StringBuffer sb3 = new StringBuffer("Hello World");
		System.out.println(sb3);
		sb.insert(5, "Test");
		System.out.println(sb3);
		sb.reverse();
		System.out.println(sb3);
		System.out.println(sb3.hashCode());
		System.out.println(sb.equals(sb3));
		
		
	}

}
