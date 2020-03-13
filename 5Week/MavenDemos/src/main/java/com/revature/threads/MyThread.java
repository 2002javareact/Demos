package com.revature.threads;

public class MyThread extends Thread {

	@Override
	public void run() {
		// TODO Auto-generated method stub
		while(true) {
			System.out.println("I am the thread made with extension");
		}
		
	}
	
}
