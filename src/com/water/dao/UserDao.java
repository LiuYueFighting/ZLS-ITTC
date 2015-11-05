package com.water.dao;

import java.util.List;

import com.water.beans.User;

public interface UserDao{

	/**
	 * ��ѯ�����鼮
	 * 
	 * @return
	 */
	public List<User> find();

	/**
	 * ����鼮
	 * 
	 * @param book
	 * @return
	 */
	public int add(User user);

	/**
	 * ɾ���鼮
	 * 
	 * @param id
	 * @return
	 */
	public int delete(long id);

	/**
	 * ���һ�鼮��¼
	 * 
	 * @param id
	 * @return
	 */
	public User findById(long id);

	/**
	 * �����鼮
	 * 
	 * @param book
	 * @return
	 */
	public int update(User user);

	/**
	 * ͳ���鼮�����ٱ�
	 * 
	 * @return
	 */
	public long findTotal();

	/**
	 * ��ѯһҳ������
	 * 
	 * @param begin ��������ʼ0
	 * @param end �õ�������
	 * @param sort �����ֶ�
	 * @param order ������� desc/asc
	 */
	public List<User> findPages(int begin, int end, String sort, String order);

}
