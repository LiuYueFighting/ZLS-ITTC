package com.water.dao.impl;

import java.sql.SQLException;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Order;
import org.springframework.dao.DataAccessException;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.water.dao.BaseDao;

public class BaseDaoImpl<Object> extends  HibernateDaoSupport implements BaseDao<Object>{

	@Override
	public List<Object> find(String tableName) {
		List list = null;
		String sql="from "+tableName;
		try{
			list=getHibernateTemplate().find(sql);
		} catch (DataAccessException ex) {
			ex.printStackTrace();
		}
		return list;	
	}

	public int add(Object object) {
		try{
			this.getHibernateTemplate().save(object);
			return 1;
		}catch (DataAccessException ex){
			ex.printStackTrace();
			return 0;
		}
//		return (Integer) super.getHibernateTemplate().save(object);
	}

	public int delete(Class c,int id) {
		try{
			this.getHibernateTemplate().delete(findById(c,id));
			return 1;
		}catch (DataAccessException ex){
			ex.printStackTrace();
			return 0;
		}
//		return super.getHibernateTemplate().bulkUpdate("delete from Object b where b.id=?", id);
	}

	public Object findById(Class c, int id) {
		try{
			Object object=(Object) getHibernateTemplate().get(c, id);
			return object;
		}catch (DataAccessException ex) {
			ex.printStackTrace();
		}
		return null;
//		return (Object) super.getHibernateTemplate().get(Object.class, id);
	}

	public int update(Object object) {
		try{
			this.getHibernateTemplate().update(object);
			return 1;
		}catch (DataAccessException ex){
			ex.printStackTrace();
			return 0;
		}
		
//		return super.getHibernateTemplate().bulkUpdate(
//				"update Object b set b.isbn = ?, b.title = ?, b.price = ?,"
//						+ "b.pubdate = ?, b.intro = ? where b.id = ?",
//				new Object[] { object.getIsbn(), object.getTitle(), object.getPrice(), object.getPubdate(),
//						object.getIntro(), object.getId() });

	}

	public long findTotal(String tableName) {
//		return (Long) super.getHibernateTemplate().execute(new HibernateCallback() {
//			public Object doInHibernate(Session session) throws HibernateException, SQLException {
//				return (Long) session.createQuery("select count(*) from Object").uniqueResult();
//			}
//		});
		return this.find(tableName).size();
	}

	/**
	 * ��ѯһҳ������
	 * 
	 * @param begin ��������ʼ0
	 * @param end �õ�������
	 * @param sort �����ֶ�
	 * @param order ������� desc/asc
	 */
	@SuppressWarnings("unchecked")
	public List<Object> findPages(final int begin, final int end, final String sort,
			final String order, final Class c) {
		// ��Ҫ�õ�ԭ����Hibernate��Session��ʱ��������������ʹ��Query��Criteria�������ż�����Ự����
		return super.getHibernateTemplate().executeFind(new HibernateCallback() {
			public Object doInHibernate(Session session) throws HibernateException, SQLException {
				Criteria criteria = session.createCriteria(c);
				if ("desc".equals(order)) {
					criteria.addOrder(Order.desc(sort));
				} else {
					criteria.addOrder(Order.asc(sort));
				}
				criteria.setFirstResult(begin).setMaxResults(end);
				return (Object) criteria.list();
			}
		});
	}

	

}
