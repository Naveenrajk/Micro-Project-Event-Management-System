package com.ems.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ems.bean.User;
import com.ems.service.RegisterService;

@RestController
@CrossOrigin("http://localhost:4200/")
public class RegisterController {
	
	@Autowired
	RegisterService service;
	
	@PostMapping("/Register")
	public void performResgister(@RequestBody User user) {
		
		service.Register(user);
	}
	
	
	
	

}
