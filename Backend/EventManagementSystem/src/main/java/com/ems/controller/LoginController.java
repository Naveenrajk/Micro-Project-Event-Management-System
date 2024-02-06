package com.ems.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ems.bean.Response;
import com.ems.bean.User;
import com.ems.service.LoginService;

@RestController
@CrossOrigin("http://localhost:4200/")
public class LoginController {

	@Autowired
	LoginService service;

	@RequestMapping("/login")
	public ResponseEntity<?> performLogin(@RequestBody User user) {
		Response res=service.login(user);
			return ResponseEntity.ok(res);
	}


}

