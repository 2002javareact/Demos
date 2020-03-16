package com.revature;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import com.revature.models.Bear;
import com.revature.util.SessionFactoryUtil;

public class HibernateLauncher {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		SessionFactory sf = SessionFactoryUtil.staticGetSessionFactory();
		Session s= sf.openSession();
		Bear one = (Bear) s.get(Bear.class, 1);
		System.out.println(one);
		s.close();
	}

}
