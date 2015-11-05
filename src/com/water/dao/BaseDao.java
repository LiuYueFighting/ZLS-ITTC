package com.water.dao;

import java.util.List;

public interface BaseDao<Object> {

	/**
		 * ��ѯ�����鼮
		 * 
		 * @return
		 */
		public List<Object> find(String tableName);

		/**
		 * ����鼮
		 * 
		 * @param object
		 * @return
		 */
		public int add(Object object);

		/**
		 * ɾ���鼮
		 * 
		 * @param id
		 * @return
		 */
		public int delete(Class c,int id);

		/**
		 * ���һ�鼮��¼
		 * 
		 * @param id
		 * @return
		 */
		public Object findById(Class c, int id);

		/**
		 * �����鼮
		 * 
		 * @param object
		 * @return
		 */
		public int update(Object object);

		/**
		 * ͳ���鼮�����ٱ�
		 * 
		 * @return
		 */
		public long findTotal(String tableName);

		/**
		 * ��ѯһҳ������
		 * 
		 * @param begin ��������ʼ0
		 * @param end �õ�������
		 * @param sort �����ֶ�
		 * @param order ������� desc/asc
		 */
		public List<Object> findPages(int begin, int end, String sort, String order,Class c);

	}
