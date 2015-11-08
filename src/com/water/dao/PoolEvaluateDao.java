package com.water.dao;

import java.util.List;

import com.water.beans.PoolEvaluate;

public interface PoolEvaluateDao{

	/**
	 * ��ѯ�����鼮
	 * 
	 * @return
	 */
	public List<PoolEvaluate> find();

	/**
	 * ����鼮
	 * 
	 * @param book
	 * @return
	 */
	public int add(PoolEvaluate poolEvaluate);

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
	public PoolEvaluate findById(long id);

	/**
	 * �����鼮
	 * 
	 * @param book
	 * @return
	 */
	public int update(PoolEvaluate poolEvaluate);

	/**
	 * ͳ���鼮�����ٱ�
	 * 
	 * @return
	 */
	public long findTotal();

	/**
	 * ��ѯһҳ�����
	 * 
	 * @param begin ��������ʼ0
	 * @param end �õ�������
	 * @param sort �����ֶ�
	 * @param order ������� desc/asc
	 */
	public List<PoolEvaluate> findPages(int begin, int end, String sort, String order);

	
	public List<PoolEvaluate> findBySql(String sql);
	
	public int  bulkUpdate(String sql); //批量更新删除
}
