package com.revature.exceptions;

import org.springframework.http.HttpStatus;

public class AbstractHttpException extends RuntimeException{
	private HttpStatus status;
	
	public AbstractHttpException(String message, HttpStatus status) {
		super(message);
		this.status = status;
	}

	public HttpStatus getStatus() {
		return status;
	}
	
}
