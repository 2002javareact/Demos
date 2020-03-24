package com.revature.exceptionhandlers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.revature.exceptions.AbstractHttpException;

@ControllerAdvice//this will make the class a bean and turn anything inside annotated with @exceptionHandler into an aspect
public class ControllerExceptionHandlers {
	
	
	@ExceptionHandler(value = {AbstractHttpException.class})
	public ResponseEntity<Object> abstractHttp(AbstractHttpException ah){
		return new ResponseEntity<Object>(ah.getMessage(), ah.getStatus());
	}
	
	
	@ExceptionHandler(value = {Throwable.class})
	public ResponseEntity<Object> catchAll(Throwable e){
		//we should log the error for internal metrics
		System.out.println(e);
		//not rteturn the stacktrace
		return new ResponseEntity<Object>("Something Went Wrong", HttpStatus.INTERNAL_SERVER_ERROR);
	}

}
