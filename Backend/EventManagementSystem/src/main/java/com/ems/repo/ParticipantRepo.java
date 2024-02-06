package com.ems.repo;



import org.springframework.data.jpa.repository.JpaRepository;


import com.ems.bean.Participant;

import jakarta.transaction.Transactional;


public interface ParticipantRepo extends JpaRepository<Participant, String> {
	

	@Transactional
	public void deleteByEmail(String email);
}
