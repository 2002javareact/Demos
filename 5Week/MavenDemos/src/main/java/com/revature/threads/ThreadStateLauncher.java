package com.revature.threads;

public class ThreadStateLauncher {

	public static void main(String[] args) throws Exception {
		// TODO Auto-generated method stub
		
		Thread sleepy = new Thread(new SleepyThread());
		Thread join = new Thread(new JoiningThread(sleepy));
		
		//should be new
		System.out.println("Sleepy State: " + sleepy.getState());
		sleepy.start();
		//should be runnable
		System.out.println("Sleepy State: " + sleepy.getState());
		
		Thread.sleep(500);
		//should be timed waiting
		System.out.println("Sleepy State: " + sleepy.getState());
		join.start();
		//should be runnable
		System.out.println("Join State: " + join.getState());
		
		Thread.sleep(500);
		//should be waiting
		System.out.println("Join State: " + join.getState());
		
		Thread.sleep(5000);
		
		System.out.println("Sleepy State: " + sleepy.getState());
		System.out.println("Join State: " + join.getState());

	}

}
