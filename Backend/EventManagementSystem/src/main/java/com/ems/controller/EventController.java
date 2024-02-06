package com.ems.controller;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ems.bean.Event;
import com.ems.service.EventService;


@RestController
@CrossOrigin("http://localhost:4200/")
public class EventController {
	
	@Autowired
	EventService service;
	
	@PostMapping("/performEventInsert")
	public void performInsert(@RequestBody Event event) {
		service.insertEvent(event);
		//return "Record inserted";
	}
	
	@PutMapping("/performEventUpdate")
	public void performUpdate(@RequestBody Event event) {
		service.updateEvent(event);
		//return "Record update";
	}
	
	@DeleteMapping("/performEventDelete/{eventId}")
	public void performDelete(@PathVariable("eventId") long eventId) {
		service.deleteEvent(eventId);
		//return "Record deleted";
	}
	
	@GetMapping("/viewAllEvents")
	public List<Event> getAll() {
		List<Event> list = service.getAll();
		return list;
	}
	
	
}
