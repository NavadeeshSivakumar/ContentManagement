package com.content.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.content.demo.entity.Login;
import com.content.demo.repo.LoginSignupRepository;



@Service
public class ContentService {
	@Autowired
	private LoginSignupRepository repo;
	
//	Login
	public boolean UserLogin(String name, String email, String password) 
	{
		Login user = repo.findByEmail(email) ;
		if( password.equals(user.getPassword()))
		{
			return true;
		}
		return false;
	}
	
//	Signup
	public Login UserSignup(Login obj)
	{
	     return repo.save(obj);
	}
}
