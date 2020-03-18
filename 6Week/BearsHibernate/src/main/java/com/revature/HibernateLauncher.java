package com.revature;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import com.revature.daos.BearDao;
import com.revature.daos.BearDaoImpl;
import com.revature.models.Bear;
import com.revature.models.Cave;
import com.revature.util.SessionFactoryUtil;

public class HibernateLauncher {

	public static void main(String[] args) {
		// our main has a dependency on a bear dao for interacting with the db
		BearDao bd = new BearDaoImpl();
		
		Bear yogi = new Bear(0, "Yogi Bear", true, "Brown", new Cave(0, 20, 1, "Forest", new ArrayList<Bear>()));
		yogi.getCave().getInhabitants().add(yogi);
		bd.saveBear(yogi);
		System.out.println(yogi);
		
		Bear b = bd.getOneBear(1);
		System.out.println(b);
		
		b.setSleeping(false);
		
		bd.updateBear(b);
		System.out.println(b);
		
		List<Bear> bears = bd.getAllBears();
		System.out.println(bears);
		
		List<Bear> sleeping = bd.getBySleeping();
		System.out.println(sleeping);
		
	}

}
