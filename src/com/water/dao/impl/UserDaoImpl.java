package com.water.dao.impl;

import java.sql.SQLException;
import java.util.List;

import com.water.dao.UserDao;
import com.water.beans.DataAnalysis;
import com.water.beans.User;

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
public class UserDaoImpl extends HibernateDaoSupport implements UserDao {

	@SuppressWarnings("unchecked")
	public List<User> find() {
		DetachedCriteria criteria = DetachedCriteria.forClass(User.class);
		criteria.addOrder(Order.desc("id"));
		return super.getHibernateTemplate().findByCriteria(criteria);
	}

	public int add(User user) {
		try{
			this.getHibernateTemplate().save(user);
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

	public User findById(long id) {
		try{
			User user=(User) getHibernateTemplate().get(User.class, id);
			return user;
		}catch (DataAccessException ex) {
			ex.printStackTrace();
		}
		return null;
	}

	@SuppressWarnings("unchecked")
	public List<User> findAll() {
		String queryString = "from User";
		List<User> list = this.getHibernateTemplate().find(queryString);
		return list;
	}
	
	public int update(User user) {
		try{
			this.getHibernateTemplate().update(user);
			return 1;
		}catch (DataAccessException ex){
			ex.printStackTrace();
			return 0;
		}
		
	}

	public long findTotal() {

		return this.find().size();
	}

	
	@SuppressWarnings("unchecked")
	public List<User> findPages(final int begin, final int end, final String sort,
			final String order) {
		// ��Ҫ�õ�ԭ���Hibernate��Session��ʱ��������������ʹ��Query��Criteria�������ż�����Ự����
		return super.getHibernateTemplate().executeFind(new HibernateCallback() {
			public Object doInHibernate(Session session) throws HibernateException, SQLException {
				Criteria criteria = session.createCriteria(User.class);
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

}