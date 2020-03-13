package com.revature.threads;

public class SleepyThread implements Runnable{

	@Override
	public void run() {
		// TODO Auto-generated method stub
		System.out.println("I am so sleepy");
		try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println("I am awake Now. Time to die.");
	}
}
