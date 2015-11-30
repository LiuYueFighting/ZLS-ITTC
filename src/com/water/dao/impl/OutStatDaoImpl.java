package com.water.dao.impl;

import java.sql.SQLException;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Order;
import org.springframework.dao.DataAccessException;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.water.beans.OutStat;
import com.water.beans.PoolEvaluate;
import com.water.dao.OutStatDao;

/**  
 * @projectName ZLS-ITTC  
 * @author chenhua 
 * @date 2015年11月29日 
 */

public class OutStatDaoImpl extends HibernateDaoSupport implements OutStatDao{

	@Override
	@SuppressWarnings("unchecked")
	public List<OutStat> find() {
		DetachedCriteria criteria = DetachedCriteria.forClass(OutStat.class);
		criteria.addOrder(Order.desc("ID"));
		return super.getHibernateTemplate().findByCriteria(criteria);
	}

	@Override
	public int add(OutStat outStat) {
		try{
			this.getHibernateTemplate().save(outStat);
			return 1;
		}catch (DataAccessException ex){
			ex.printStackTrace();
			return 0;
		}
	}

	@Override
	public int delete(long id) {
		try{
			this.getHibernateTemplate().delete(findById(id));
			return 1;
		}catch (DataAccessException ex){
			ex.printStackTrace();
			return 0;
		}
	}

	@Override
	public OutStat findById(long id) {
		try{
			OutStat outStat=(OutStat) getHibernateTemplate().get(OutStat.class, id);
			return outStat;
		}catch (DataAccessException ex) {
			ex.printStackTrace();
		}
		return null;
	}

	@Override
	public int update(OutStat outStat) {
		try{
			this.getHibernateTemplate().update(outStat);
			return 1;
		}catch (DataAccessException ex){
			ex.printStackTrace();
			return 0;
		}

	}

	@Override
	public long findTotal() {
		return this.find().size();
	}

	@Override
	@SuppressWarnings("unchecked")
	public List<OutStat> findPages(final int begin, final int end, final String sort,
			final String order) {
		// TODO Auto-generated method stub
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
	public List<OutStat> findBySql(String sql) {
		List list = null;
		try{
			list = getHibernateTemplate().find(sql);
		} catch (DataAccessException ex) {
			ex.printStackTrace();
		}
		return list;
	}

	@Override
	public int bulkUpdate(String sql) {
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
