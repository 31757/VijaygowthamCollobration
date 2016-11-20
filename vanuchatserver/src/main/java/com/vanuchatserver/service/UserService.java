package com.vanuchatserver.service;

import java.util.List;

import com.vanuchatserver.model.*;

public interface UserService {

	 Users findByName(String name);
     
	    void saveUser(Users user);
	     
	    void updateUser(Users user);
	     
	    void deleteUserById(String name);
	 
	    List<Users> findAllUsers(); 
	     
	   public boolean isUserExist(String name);
	   
	   public boolean check(String name,String Password);

}