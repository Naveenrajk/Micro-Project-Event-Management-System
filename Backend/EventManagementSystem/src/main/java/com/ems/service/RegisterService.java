package com.ems.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ems.bean.User;
import com.ems.repo.UserRepo;

@Service
public class RegisterService {
	
	@Autowired
	UserRepo repo;
	
    public boolean Register(User user) {
    	user.setUserType("user");
		repo.save(user);
		return true;
	}

}
