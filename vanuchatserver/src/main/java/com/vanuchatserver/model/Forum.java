package com.vanuchatserver.model;

import javax.persistence.*;

@Entity
public class Forum
{
	@Id @GeneratedValue(strategy=GenerationType.AUTO)
	int forumid;	
	@Column
	String forumtopic;
	@Column
	String forumsubtopic;
	
	
	public int getForumid() {
		return forumid;
	}
	public void setForumid(int forumid) {
		this.forumid = forumid;
	}
	public String getForumtopic() {
		return forumtopic;
	}
	public void setForumtopic(String forumtopic) {
		this.forumtopic = forumtopic;
	}
	public String getForumsubtopic() {
		return forumsubtopic;
	}
	public void setForumsubtopic(String forumsubtopic) {
		this.forumsubtopic = forumsubtopic;
	}
}


