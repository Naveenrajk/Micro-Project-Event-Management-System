package com.ems.bean;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;

import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tbl_participant")
public class Participant {

	@Id
	@Column(name = "email")
	private String email;

	@Column(name = "eventName")
	private String eventName;

	@Column(name = "availability")
	private String availability;

	public Participant() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Participant(String email, String eventName, String availability) {
		super();
		this.email = email;
		this.eventName = eventName;
		this.availability = availability;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getEventName() {
		return eventName;
	}

	public void setEventName(String eventName) {
		this.eventName = eventName;
	}

	public String getAvailability() {
		return availability;
	}

	public void setAvailability(String availability) {
		this.availability = availability;
	}

}
