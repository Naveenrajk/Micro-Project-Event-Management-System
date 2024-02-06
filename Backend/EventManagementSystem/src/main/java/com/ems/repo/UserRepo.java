package com.ems.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ems.bean.User;

public interface UserRepo extends JpaRepository<User, Long> {
	
	public User findByEmail(String email);
	public User findByPassword(String password);

}
