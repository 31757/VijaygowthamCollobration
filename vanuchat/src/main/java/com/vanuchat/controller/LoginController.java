package com.vanuchat.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.vanuchat.model.UserCredentials;
import com.vanuchat.service.UserService;

@RestController
public class LoginController {
	@Autowired
	 UserService userService;
  
	@RequestMapping(value = "/userlogin", method = RequestMethod.POST)
   public ResponseEntity<String> Login(@RequestBody UserCredentials user)
   {
       if(userService.check(user.getUsername(),user.getPassword()))
       {
       	return new ResponseEntity<String>(HttpStatus.FOUND);
       }
       else
       {
       	return new ResponseEntity<String>(HttpStatus.NOT_FOUND);
       }
   }
}