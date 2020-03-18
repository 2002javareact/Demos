package com.revature.daos;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import com.revature.models.Bear;
import com.revature.util.SessionFactoryUtil;

public class BearDaoImpl implements BearDao {
	
	//what dependencies do I have?
	private SessionFactory sf = SessionFactoryUtil.staticGetSessionFactory();

	public Bear updateBear(Bear b) {
		// TODO Auto-generated method stub
		Session s = sf.openSession();
		Transaction t = s.beginTransaction();
		
		s.update(b);
		
		t.commit();
		s.close();
		
		return b;
	}

	public Bear getOneBear(int bearId) {
		// to interact with the database, we need a session
		Session s = sf.openSession();
		// get a single object of type bear.class matching id
		Bear b = (Bear) s.get(Bear.class, bearId);
		// close session
		s.close();
		//return bear with a cave proxy, because by default cave is lazily loaded
		return b;
	}

	public List<Bear> getAllBears() {
		// Is there a crud method on session to get every bear?
		//one option, using criteria
		Session s = sf.openSession();
		Transaction t = s.beginTransaction();
		//This is a very oop way of doing select queries
		// by default it is just select * from The class
		Criteria bears = s.createCriteria(Bear.class);
		//.list returns results of the criteria as a list
		List<Bear> results = bears.list();
		
		t.commit();
		s.close();
		
		return results;
	}

	public Bear saveBear(Bear b) {
		//open session
		Session s = sf.openSession();
		//Read the method that you are calling 
		// this method builds and begins the transaction
		Transaction t = s.beginTransaction();
		//save bear
		s.persist(b);
		//force hibernate to send all statements to the database
		s.flush();
		//close the transaction
		t.commit();
		//close session
		s.close();
		
		return b;
	}

	public List<Bear> getBySleeping() {
		// TODO Auto-generated method stub
		Session s = sf.openSession();
		Transaction t = s.beginTransaction();
		//This is an example of HQL
		//it looks a lot like SQL but we use the object names and fields not tables
		Query sleepingBears = s.createQuery("FROM Bear WHERE sleeping = true");
		//we can use this method to set :params in the HQL string
		sleepingBears.setParameter("sleeping", true);
		
		
		List<Bear> results = sleepingBears.list();
		t.commit();
		s.close();
		
		return results;
	}

	
//	public List<Bear> getByUsernameAndPassword(String username, String password) {
//		// TODO Auto-generated method stub
//		Session s = sf.openSession();
//		Transaction t = s.beginTransaction();
//		//This is an example of HQL
//		//it looks a lot like SQL but we use the object names and fields not tables
//		Query sleepingBears = s.createQuery("FROM Bear WHERE username = :u and password = :p");
//		//we can use this method to set :params in the HQL string
//		sleepingBears.setParameter("u", username);
//		sleepingBears.setParameter("p", password);
//		
//		
//		List<Bear> results = sleepingBears.list();
//		t.commit();
//		s.close();
//		
//		return results;
//	}
	
	
	
}
