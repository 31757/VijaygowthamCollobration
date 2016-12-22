package com.vanuchatserver.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ForumRating {
	public int getFrateid() {
		return frateid;
	}

	public void setFrateid(int frateid) {
		this.frateid = frateid;
	}

	public int getFrating() {
		return frating;
	}

	public void setFrating(int frating) {
		this.frating = frating;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int frateid;
	@Column
	private int frating;
	@Column
	private int forumid;
	
	public int getForumid() {
		return forumid;
	}

	public void setForumid(int forumid) {
		this.forumid = forumid;
	}

}
