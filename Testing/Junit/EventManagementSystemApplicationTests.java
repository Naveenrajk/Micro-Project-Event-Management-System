package com.ems;

import static org.junit.Assert.assertEquals;
import static org.testng.Assert.assertEquals;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.ems.bean.Event;
import com.ems.bean.Participant;
import com.ems.bean.Response;
import com.ems.bean.User;
import com.ems.service.EventService;
import com.ems.service.LoginService;
import com.ems.service.ParticipantService;
import com.ems.service.RegisterService;

import net.bytebuddy.dynamic.TypeResolutionStrategy.Passive;

@SpringBootTest
class EventManagementSystemApplicationTests {

	@Autowired
	EventService service;
	String insert;
	String update;
	String delete;
	boolean result;
	boolean result1;
	List<Event> list = new ArrayList<>();
	List<Event> list1 = new ArrayList<>();
	Event event = new Event(201, "Jenish Conference", "Business", "25.02.2024", "10.00 AM", "Chennai",
			"jenish@gmail.com");
	Event event1 = new Event(202, "Sandy Birthday", "General", "26.02.2024", "06.00 PM", "Banglore", "sandy@gmail.com");
	Event event2;
	Event event3;

	@Test
	@Order(1)
	public void testPerformEventInsert() {
		insert = "Inserted";
		result = service.insertEvent(event);
		assertEquals(true, result);
	}

	@Test
	@Order(2)
	public void testPerformEventUpdate() {
		update = "Updated";
		result = service.insertEvent(event1);
		assertEquals(true, result);
	}

	@Test
	@Order(3)
	public void testPerformEventDelete() {
		delete = "Deleted";
		result = service.deleteEvent(202);
		// result1 = service.deleteEvent(301);
		assertEquals(true, result);
	}

	@Test
	@Order(4)
	public void testEventGetAll() {
		list = service.getAll();
		Event event2 = new Event(203, "Barath Conference", "Business", "25.02.2024", "10.00 AM", "Chennai",
				"barath@gmail.com");
		Event event3 = new Event(204, "Arun Birthday", "General", "26.02.2024", "06.00 PM", "Banglore",
				"arun@gmail.com");
		list1.add(event2);
		list1.add(event3);
		list.equals(list1);
	}

	@Autowired
	ParticipantService service1;
	String insertParticipant;
	String updateParticipant;
	String deleteParticipant;
	boolean resultParticipant;
	boolean result1Participant;
	List<Participant> listParticipant = new ArrayList<>();
	List<Participant> list1Participant = new ArrayList<>();
	Participant participant = new Participant("arun@gmail.com", "Jenish Conference", "Yes");
	Participant participant1 = new Participant("valan@gmail.com", "Arasu product launch", "Yes");
	Participant participant2;
	Participant participant3;

	@Test
	@Order(5)
	public void testPerformParticipantInsert() {
		insertParticipant = "Inserted";
		resultParticipant = service1.insertParticipant(participant);
		assertEquals(true, resultParticipant);
	}

	@Test
	@Order(6)
	public void testPerformParticipantUpdate() {
		updateParticipant = "Updated";
		resultParticipant = service1.insertParticipant(participant1);
		assertEquals(true, resultParticipant);
	}

	@Test
	@Order(7)
	public void testPerformParticipantDelete() {
		// deleteParticipant = "Deleted";
		// resultParticipant = service1.deleteParticipant("valan@gmail.com");
		// result1Participant = service1.deleteParticipant("naveen@gmail.com");
		// assertEquals(true, resultParticipant);
	}

	@Test
	@Order(8)
	public void testParticipateGetAll() {
		listParticipant = service1.getAll();
		Participant participant2 = new Participant("naveen@gmail.com", "Naveen Conference", "Yes");
		Participant participant3 = new Participant("jenish@gmail.com", "Naveen Birthday", "No");
		list1Participant.add(participant2);
		list1Participant.add(participant3);
		listParticipant.equals(list1Participant);
	}

	@Autowired
	LoginService loginservice;

	@Autowired
	RegisterService registerservice;

	boolean res;
	boolean val;
	User log = new User(2, "naveen@gmail.com", "user", "345");

	@Test
	@Order(9)
	void performLogin() {
		Response res1 = new Response("User Success");
		Response res = loginservice.login(log);
		res1.equals(res);
	}

	@Test
	@Order(10)
	void performRegister() {
		val = true;
		res = registerservice.register(log);
		assertEquals(val, res);
	}

}
