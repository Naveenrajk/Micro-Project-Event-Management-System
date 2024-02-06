package com.ems.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.ems.bean.Participant;
import com.ems.repo.ParticipantRepo;

@Service
public class ParticipantService {
	
	@Autowired
	ParticipantRepo repo;
	
	public boolean insertParticipant(Participant participant) {
        repo.save(participant);
        return true;
    }
	
	public boolean updateParticipant(Participant participant) {
        repo.save(participant);
        return true;
    }
	
	public boolean deleteParticipant(@PathVariable("email") String email) {
		repo.deleteByEmail(email);
		return true;
	}
	
	public List<Participant> getAll() {
		Iterator<Participant> it =  repo.findAll().iterator();
		List<Participant> list = new ArrayList<Participant>();
		while(it.hasNext()) {
			list.add(it.next());
		}
		return list;
	}

}
