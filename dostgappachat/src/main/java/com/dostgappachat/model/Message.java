package com.dostgappachat.model;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class Message {

	@Column
	  private String message;
	@Column
	  private int id;
	   
	  public Message() {
	    
	  }
	  
	  public Message(int id, String message) {
	    this.id = id;
	    this.message = message;
	  }

	  public String getMessage() {
	    return message;
	  }

	  public void setMessage(String message) {
	    this.message = message;
	  }

	  public int getId() {
	    return id;
	  }

	  public void setId(int id) {
	    this.id = id;
	  }
	}

