package com.water.dao.impl;

import java.sql.SQLException;
import java.util.List;

import com.water.dao.PoolEvaluateDao;
import com.water.beans.DataAnalysis;
import com.water.beans.PoolEvaluate;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Order;
import org.springframework.dao.DataAccessException;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

/**
 * �ӿ�ʵ����
 * 
 * @author miao
 * 
 */
public class PoolEvaluateDaoImpl extends HibernateDaoSupport implements PoolEvaluateDao {

	@SuppressWarnings("unchecked")
	public List<PoolEvaluate> find() {
//		List list = null;
//		String sql="from  PoolEvaluate";
//		try{
//			list=getHibernateTemplate().find(sql);
//		} catch (DataAccessException ex) {
//			ex.printStackTrace();
//		}
//		return list;
		DetachedCriteria criteria = DetachedCriteria.forClass(PoolEvaluate.class);
		criteria.addOrder(Order.desc("id"));
		return super.getHibernateTemplate().findByCriteria(criteria);
	}

	public int add(PoolEvaluate poolEvaluate) {
		try{
			this.getHibernateTemplate().save(poolEvaluate);
			return 1;
		}catch (DataAccessException ex){
			ex.printStackTrace();
			return 0;
		}
	}

	public int delete(long id) {
		try{
			this.getHibernateTemplate().delete(findById(id));
			return 1;
		}catch (DataAccessException ex){
			ex.printStackTrace();
			return 0;
		}
	}

	public PoolEvaluate findById(long id) {
		try{
			PoolEvaluate poolEvaluate=(PoolEvaluate) getHibernateTemplate().get(PoolEvaluate.class, id);
			return poolEvaluate;
		}catch (DataAccessException ex) {
			ex.printStackTrace();
		}
		return null;
	}

	public int update(PoolEvaluate poolEvaluate) {
		try{
			this.getHibernateTemplate().update(poolEvaluate);
			return 1;
		}catch (DataAccessException ex){
			ex.printStackTrace();
			return 0;
		}
		
	}

	public long findTotal() {

		return this.find().size();
	}

	/**
	 * ��ѯһҳ�����
	 * 
	 * @param begin ��������ʼ0
	 * @param end �õ�������
	 * @param sort �����ֶ�
	 * @param order ������� desc/asc
	 */
	@SuppressWarnings("unchecked")
	public List<PoolEvaluate> findPages(final int begin, final int end, final String sort,
			final String order) {
		// ��Ҫ�õ�ԭ���Hibernate��Session��ʱ��������������ʹ��Query��Criteria�������ż�����Ự����
		return super.getHibernateTemplate().executeFind(new HibernateCallback() {
			public Object doInHibernate(Session session) throws HibernateException, SQLException {
				Criteria criteria = session.createCriteria(PoolEvaluate.class);
				if ("desc".equals(order)) {
					criteria.addOrder(Order.desc(sort));
				} else {
					criteria.addOrder(Order.asc(sort));
				}
				criteria.setFirstResult(begin).setMaxResults(end);
				return criteria.list();
			}
		});
	}

	@Override
	public List<PoolEvaluate> findBySql(String sql) {
		// TODO Auto-generated method stub
		List list = null;
		try{
			list = getHibernateTemplate().find(sql);
		} catch (DataAccessException ex) {
			ex.printStackTrace();
		}
		return list;
	}

	@Override
	public int  bulkUpdate(String sql){
		//批量更新删除
		int result=0;
		try{
			result= getHibernateTemplate().bulkUpdate(sql);
		} catch (DataAccessException ex) {
			ex.printStackTrace();
		}
		return result;
	}
}