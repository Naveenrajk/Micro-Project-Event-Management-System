package com.ems.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ems.bean.Event;

public interface EventRepo extends JpaRepository<Event, Long>{

}
