package com.dostgappachat.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class OutputMessage extends Message {
@Column
	private Date time;
	
	public OutputMessage(Message original, Date time) {
		super(original.getId(), original.getMessage());
		this.time = time;
	}
	
	public Date getTime() {
		return time;
	}
	
	public void setTime(Date time) {
		this.time = time;
	}
}

