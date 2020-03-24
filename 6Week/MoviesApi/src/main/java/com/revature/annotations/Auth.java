package com.revature.annotations;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface Auth {
	public String[] roles();// This is a method, but on interfaces methods get pretty wonky
	// when I define a method on an interface it actually builds a getter and setter for a field of that name to be passed in to the annotation

}
