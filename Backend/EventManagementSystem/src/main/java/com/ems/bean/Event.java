package com.ems.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tbl_event")
public class Event {

	@Id
	@Column(name = "eventId")
	private long eventId;

	@Column(name = "eventName")
	private String eventName;

	@Column(name = "eventType")
	private String eventType;
	
	@Column(name = "eventDate")
	private String eventDate;

	@Column(name = "eventTime")
	private String eventTime;

	@Column(name = "eventVenue")
	private String eventVenue;

	@Column(name = "email")
	private String email;

	public Event() {
		super();
	}

	public Event(long eventId, String eventName, String eventType, String eventDate, String eventTime,
			String eventVenue, String email) {
		super();
		this.eventId = eventId;
		this.eventName = eventName;
		this.eventType = eventType;
		this.eventDate = eventDate;
		this.eventTime = eventTime;
		this.eventVenue = eventVenue;
		this.email = email;
	}

	public long getEventId() {
		return eventId;
	}

	public void setEventId(long eventId) {
		this.eventId = eventId;
	}

	public String getEventName() {
		return eventName;
	}

	public void setEventName(String eventName) {
		this.eventName = eventName;
	}

	public String getEventType() {
		return eventType;
	}

	public void setEventType(String eventType) {
		this.eventType = eventType;
	}

	public String getEventDate() {
		return eventDate;
	}

	public void setEventDate(String eventDate) {
		this.eventDate = eventDate;
	}

	public String getEventTime() {
		return eventTime;
	}

	public void setEventTime(String eventTime) {
		this.eventTime = eventTime;
	}

	public String getEventVenue() {
		return eventVenue;
	}

	public void setEventVenue(String eventVenue) {
		this.eventVenue = eventVenue;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}
