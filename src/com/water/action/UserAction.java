package com.water.action;

import java.util.HashMap;
import java.util.Map;

import com.opensymphony.xwork2.ActionSupport;
import com.water.beans.User;

import com.water.service.UserService;


@SuppressWarnings("serial")
public class UserAction extends ActionSupport{
	private UserService userService;

	private User user; // һ����
	private int page;// ��ǰ�ڼ�ҳ
	private Map<String, Object> data = new HashMap<String, Object>();// ��װ����
	private int size;// ҳ���С��ҳ����rows
	private String order;// ������desc��asc
	private String sort;// ��������������price

	// ��ʶ�����Ƿ�ɹ�
	private boolean operateSuccess;

	// setע��
	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	/*
	 * ��easyui�����õģ���ʾ���򷽷�
	 */
	public void setOrder(String order) {
		this.order = order;
	}

	/*
	 * ��easyui�����õģ���ʾ�����ֶ�
	 */
	public void setSort(String sort) {
		this.sort = sort;
	}

	/*
	 * ��easyuiָ��ҳ���С�õģ����Ҫָ��ҳ���С�ɱ�
	 * ҳ����rows
	 */
	public void setRows(int size) {
		this.size = size;
	}

	/*
	 * ��easyui��ҳ�õ�
	 */
	public void setPage(int page) {
		this.page = page;
	}

	// getter/setter����

	public User getUser() {
		return user;
	}

	public int getPage() {
		return page;
	}

	public Map<String, Object> getData() {
		return data;
	}

	public void setData(Map<String, Object> data) {
		this.data = data;
	}

	public int getRows() {
		return size;
	}

	public String getOrder() {
		return order;
	}

	public String getSort() {
		return sort;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public boolean isOperateSuccess() {
		return operateSuccess;
	}

	public void setOperateSuccess(boolean operateSuccess) {
		this.operateSuccess = operateSuccess;
	}

	/**
	 * ��ѯĳһҳ���鼮
	 */
	public String list() {
		data.clear();// ���
		if (sort == null) {
			sort = "id";// Ĭ�ϰ���������
		}
		if (order == null) {
			order = "asc";// Ĭ�ϰ���������
		}
			data.put("total", userService.findTotal());// �õ����еļ�¼��
//		data.put("rows", userService.findAll());
		data.put("rows", userService.findPages(page, size, sort, order));// �õ�ĳһҳ������
		
		return "success";
	}
	
	/**
	 * ����鼮
	 */
	public String addUser() {
		operateSuccess = (userService.addUser(user) > 0);
		return "success";
	}

	/**
	 * �����鼮
	 */
	public String updateUser() {
		operateSuccess = (userService.updateUser(user) > 0);
		return "success";
	}

	/**
	 * ɾ���鼮
	 */
	public String deleteUser() {
		operateSuccess = (userService.deleteUser(user.getId()) > 0);
		return "success";
	}

	/**
	 * ��ѯһ����
	 */
	public String findUser() {
		user = userService.findUserById(user.getId());
		return "success";
	}

}
