package com.water.service;
import java.util.List;

import com.water.beans.User;
public interface UserService {
	int addUser(User user);				// Add
	int deleteUser(long id);			// Delete
	int updateUser(User user);			// Update
	User findUserById(long id);			// Find
	List<User> findAll();				// FindAll
	long findTotal();
	List<User> findPages(int page, int size, String sort, String order);

}
