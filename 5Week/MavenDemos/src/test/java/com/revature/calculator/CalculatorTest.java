package com.revature.calculator;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.not;
import static org.hamcrest.CoreMatchers.nullValue;
import static org.junit.Assert.assertThat;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class CalculatorTest {
	
	Calculator c = new Calculator();
	
	@Test
	public void testAdd() {
		assertThat(c.add(10, 5), is(equalTo(15)));
		assertThat(c.add(0, 0), is(not(nullValue())));
	}
	
	@Test
	public void testMutl() {
		assertThat(c.multiply(10, 5), is(equalTo(50)));
		assertThat(c.multiply(0, 0), is(not(nullValue())));
	}
	
	@Before
	public void doSomethingBeforeEveryTest() {
		System.out.println("I run before every test");
	}
	
	@After
	public void doSomethingAfterEveryTest() {
		System.out.println("I run After every test");
	}
	
	@BeforeClass
	public static void beforeClass() {
		System.out.println("I run once at the beginning");
	}
	
	@AfterClass
	public static void afterClass() {
		System.out.println("I run once at the end");
	}

}
