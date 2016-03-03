package com.water.dao;

import java.util.List;

import com.water.beans.User;

public interface UserDao{
	public List<User> find();
	public int add(User user);
	public int delete(long id);
	public User findById(long id);
	public int update(User user);
	public long findTotal();
	public List<User> findAll();
	public List<User> findPages(int begin, int end, String sort, String order);

}
