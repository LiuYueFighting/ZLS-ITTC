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

import com.water.beans.MoChiAnalysis;
import com.water.dao.MoChiAnalysisDao;

/**  
 * @projectName ZLS-ITTC  
 * @author chenhua 
 * @date 2016年4月19日 
 */

public class MoChiAnalysisDaoImpl extends HibernateDaoSupport implements MoChiAnalysisDao  {

	@Override
	public List<MoChiAnalysis> find() {
		// TODO Auto-generated method stub
		DetachedCriteria criteria = DetachedCriteria.forClass(MoChiAnalysis.class);
		criteria.addOrder(Order.desc("ID"));
		return super.getHibernateTemplate().findByCriteria(criteria);
	}

	@Override
	public int add(MoChiAnalysis moChiAnalysis) {
		try{
			this.getHibernateTemplate().save(moChiAnalysis);
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
	public MoChiAnalysis findById(long id) {
		try{
			MoChiAnalysis moChiAnalysis=(MoChiAnalysis) getHibernateTemplate().get(MoChiAnalysis.class, id);
			return moChiAnalysis;
		}catch (DataAccessException ex) {
			ex.printStackTrace();
		}
		return null;
	}

	@Override
	public int update(MoChiAnalysis moChiAnalysis) {
		try{
			this.getHibernateTemplate().update(moChiAnalysis);
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
	public List<MoChiAnalysis> findPages(final int begin, final int end, final String sort,
			final String order) {
		return super.getHibernateTemplate().executeFind(new HibernateCallback() {
			public Object doInHibernate(Session session) throws HibernateException, SQLException {
				Criteria criteria = session.createCriteria(MoChiAnalysis.class);
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
	public List<MoChiAnalysis> findBySql(String sql) {
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
		int result=0;
		try{
			result= getHibernateTemplate().bulkUpdate(sql);
		} catch (DataAccessException ex) {
			ex.printStackTrace();
		}
		return result;
	}

}
