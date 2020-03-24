package com.revature.aspects;

import javax.servlet.http.HttpServletRequest;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.revature.annotations.Auth;
import com.revature.exceptions.UnauthorizedException;
import com.revature.models.Users;

@Aspect
@Component
public class AuthAspect {
	
	
	@Around("execution(* com.revature.controllers..*(..)) && @annotation(auth)")
	public Object authenticateUser(ProceedingJoinPoint pjp,  Auth auth) throws Throwable {
		System.out.println("Is advice Live?");
		Users u = getLoggedInUser();
		if(u == null) {//if there is no logged in user
			throw new UnauthorizedException();
		} else {
			for(String role : auth.roles()) {//search through the roles in the annotation
				if(u.getRole().equals(role)) {//if we match
					return pjp.proceed();//This is how we call the original method
				}
			}
			throw new UnauthorizedException();
		}
		
	}
	
	public static Users getLoggedInUser() {
		// code to get the request object
		HttpServletRequest req = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
		// get an object that we added to the session
		return (Users) req.getSession().getAttribute("user");
	}

}
