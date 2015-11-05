package com.water.service;
import java.util.List;

import com.water.beans.User;
public interface UserService {
	int addUser(User user);			//����û�
	int deleteUser(long id);			//ɾ���û�
	int updateUser(User user);			//�����û�
	User findUserById(long id);			//��id�����û�
	List<User> findAll();				//����ȫ���û�
	long findTotal();
	List<User> findPages(int page, int size, String sort, String order);

}
