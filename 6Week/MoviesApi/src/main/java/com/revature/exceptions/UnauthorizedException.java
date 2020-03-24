package com.revature.exceptions;

import org.springframework.http.HttpStatus;

public class UnauthorizedException extends AbstractHttpException{
	
	public UnauthorizedException() {
		super("You are Unauthorized for this Endpoint", HttpStatus.FORBIDDEN);
	}

}
