package com.vanuchat.service;

import java.util.List;


import com.vanuchat.model.Forum;
import com.vanuchat.model.ForumComments;

public interface ForumService
{
	List<Forum> findAll();
	Forum findById(int id);
	void create(Forum fourm);
	void edit(Forum fourm);
	void deleteById(int id);
	void postComment(ForumComments comments);
	List<ForumComments> showcomment(int id);
	
	

}

