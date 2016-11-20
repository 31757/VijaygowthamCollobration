package com.vanuchat.service;

import java.util.List;
import org.hibernate.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.*;

import com.vanuchat.model.UsersT;
import com.vanuchat.model.UserCredentials;

@Repository
public class UserServiceImpl implements UserService
{
	@Autowired
	SessionFactory sessionFactory;
	
	
	

	public UsersT findByName(String name) 
	{
		Session s=sessionFactory.openSession();
		Transaction tx=s.getTransaction();
		tx.begin();
		UsersT c=(UsersT)s.get(UsersT.class,name);
		tx.commit();
		s.flush();
		s.clear();
		s.close();
		return c;
	}

	public void saveUser(UsersT user) 
	{
		Session s=sessionFactory.openSession();
		Transaction tx=s.getTransaction();
		tx.begin();
		s.save(user);
		UserCredentials uc=new UserCredentials();
		uc.setUsername(user.getUsername());
		uc.setPassword(user.getPassword());
		s.save(uc);
		tx.commit();
		s.flush();
		s.clear();
		s.close();
	}

	public void updateUser(UsersT user)
	{
		Session s=sessionFactory.openSession();
		Transaction tx=s.getTransaction();
		tx.begin();
		UsersT c=(UsersT)s.get(UsersT.class,user.getUsername());
		c.setAddress(user.getAddress());
		c.setPhno(user.getPhno());
		c.setEmail(user.getEmail());
		s.update(c);
		tx.commit();
		s.flush();
		s.clear();
		s.close();
	}
	public void deleteUserById(String name)
	{
		Session s=sessionFactory.openSession();
		Transaction tx=s.getTransaction();
		tx.begin();
		UsersT c=(UsersT)s.get(UsersT.class,name);
		UserCredentials uc=(UserCredentials)s.get(UserCredentials.class,name);
		s.delete(uc);
		s.delete(c);
		tx.commit();
		s.flush();
		s.clear();
		s.close();
	}
	public List<UsersT> findAllUsers() 
	{
		Session s=sessionFactory.openSession();
		Transaction tx=s.getTransaction();
		tx.begin();
		List<UsersT> showuser = s.createQuery("FROM UsersT").list();
		tx.commit();
		s.flush();
		s.clear();
		s.close();
		return showuser;
	}
	public boolean isUserExist(String name)
	{
		Session s=sessionFactory.openSession();
		Transaction tx=s.getTransaction();
		tx.begin();
		UsersT c=(UsersT)s.get(UsersT.class,name);
		s.flush();
		s.clear();
		s.close();
		if(c==null)
			return false;
		else
			return true;
	}

	public boolean check(String name,String Password) 
	{
		Session s=sessionFactory.openSession();
		System.out.println(Password);
		Transaction tx=s.getTransaction();
		tx.begin();
		UserCredentials c=(UserCredentials)s.get(UserCredentials.class,name);
		System.out.println(c.getPassword());
		s.flush();
		s.clear();
		s.close();
		if(c.getPassword().equals(Password))
		{
			System.out.println("hello");
			return true;
		}
		else
			return false;
	}
	
}