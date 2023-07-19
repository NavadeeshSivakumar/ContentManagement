package com.content.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.content.demo.entity.Login;
import com.content.demo.entity.Signup;
import com.content.demo.service.ContentService;

@CrossOrigin(origins="http://localhost:3000/")
@RestController
public class LoginSignupController {
	@Autowired
	private ContentService ser;
	
//	Login
	@PostMapping("/login")
	public boolean UserLogin (@RequestBody Login login)
	{
		return ser.UserLogin(login.getName(),login.getEmail(),login.getPassword());
	}
	
//	Signup
	@PostMapping("/signup")
	public Login UserSignup (@RequestBody Login signup)
	{
		return ser.UserSignup(signup);
	}
}
