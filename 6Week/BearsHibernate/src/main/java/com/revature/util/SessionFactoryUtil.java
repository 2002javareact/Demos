package com.revature.util;

import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;


// this is an example of a singleton class
// a singleton class is a design pattern where only a single instance of the class can ever exist
// we use a private constructor 
// we have a static reference to ourself
// provide a public method to get that instance

// this isn't quite a singleton but, its a wrapper to make a singleton sessionFactory
public class SessionFactoryUtil {

	//how can you use this sessionfactory all through the program if its private?
	private static SessionFactory sf;
	
	//we can write a static block of code in a class, that code gets executed before main starts, but after we have started the program
	static {
		// builds a new configuration and reads in the hibernate.cfg.xml file to populate its fields
		Configuration c = new Configuration().configure();
		c.setProperty("hibernate.connection.username", System.getenv("BEAR_USERNAME"));
		c.setProperty("hibernate.connection.password", System.getenv("BEAR_PASSWORD"));
		c.setProperty("hibernate.connection.url", "jdbc:postgresql://" + System.getenv("BEAR_HOST") + ":" + System.getenv("BEAR_PORT") + "/" + System.getenv("BEAR_DB_NAME"));
		c.setProperty("hibernate.default.schema", System.getenv("BEAR_SCHEMA"));
		
		//hibernate standardized their process from moving from a config file to a sessionfactory and they did so through a new class called a service registry
		ServiceRegistry sr = new StandardServiceRegistryBuilder().applySettings(c.getProperties()).build();
		
		sf = c.buildSessionFactory(sr);
		
	}
	
	
	//non static methods are allowed to reference static fields and methods
	// need an instance of SessionFactoryUtil to call this method
	public SessionFactory getSessionFactory() {
		return sf;
	}
	
	//This method is directly on the class
	public static SessionFactory staticGetSessionFactory() {
		return sf;
	}
	
}
