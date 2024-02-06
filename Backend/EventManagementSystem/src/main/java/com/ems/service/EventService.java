package com.ems.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import com.ems.bean.Event;
import com.ems.repo.EventRepo;

@Service
public class EventService {
	
	@Autowired
	EventRepo repo;
	
	public boolean insertEvent(Event event) {
        repo.save(event);
        return true;
    }
	
	public boolean updateEvent(Event event) {
        repo.save(event);
        return true;
    }
	
	public boolean deleteEvent(@PathVariable("eventId") long eventId) {
		repo.deleteById(eventId);
		return true;
	}
	
	public List<Event> getAll() {
		Iterator<Event> it =  repo.findAll().iterator();
		List<Event> list = new ArrayList<Event>();
		while(it.hasNext()) {
			list.add(it.next());
		}
		return list;
	}
	
	
	
}
