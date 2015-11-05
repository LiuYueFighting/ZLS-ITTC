package com.water.dao;

import java.util.List;

import com.water.beans.User;

public interface UserDao{

	/**
	 * 查询所有书籍
	 * 
	 * @return
	 */
	public List<User> find();

	/**
	 * 添加书籍
	 * 
	 * @param book
	 * @return
	 */
	public int add(User user);

	/**
	 * 删除书籍
	 * 
	 * @param id
	 * @return
	 */
	public int delete(long id);

	/**
	 * 获得一书籍记录
	 * 
	 * @param id
	 * @return
	 */
	public User findById(long id);

	/**
	 * 更新书籍
	 * 
	 * @param book
	 * @return
	 */
	public int update(User user);

	/**
	 * 统计书籍共多少本
	 * 
	 * @return
	 */
	public long findTotal();

	/**
	 * 查询一页的数据
	 * 
	 * @param begin 从哪条开始0
	 * @param end 得到多少条
	 * @param sort 排序字段
	 * @param order 升序或降序 desc/asc
	 */
	public List<User> findPages(int begin, int end, String sort, String order);

}
