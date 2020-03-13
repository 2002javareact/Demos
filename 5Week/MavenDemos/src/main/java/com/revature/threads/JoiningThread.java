package com.revature.threads;

public class JoiningThread implements Runnable{
	
	Thread t;
	
	public JoiningThread(Thread t) {
		// TODO Auto-generated constructor stub
		this.t = t;
	}
	
	@Override
	public void run() {
		// TODO Auto-generated method stub
		System.out.println("I am waiting on " + t.getName());
		try {
			t.join();
		} catch(Exception e) {
			
		}
		System.out.println("I am done waiting for " + t.getName());
		
	}

}
