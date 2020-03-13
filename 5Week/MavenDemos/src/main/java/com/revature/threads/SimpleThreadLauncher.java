package com.revature.threads;

public class SimpleThreadLauncher {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		//we will make a thread by extending
		Thread ext = new MyThread();
		//we will make a thread by implmenting runnable
		Thread run = new Thread(new MyRunnable());
		//we will make a thread with a lambda in the place of the runnable interface
		Thread lambda = new Thread (()->{
			while(true) {
				System.out.println("I am the lambda thread");
			}
		});
		ext.start();
		run.start();
		lambda.start();
		while(true) {
			System.out.println("I am the main thread");
		}
	}

}
