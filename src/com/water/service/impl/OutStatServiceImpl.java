package com.water.service.impl;
import java.util.List;

import com.water.beans.OutStat;
import com.water.dao.OutStatDao;
import com.water.service.OutStatService;
public class OutStatServiceImpl implements OutStatService{
	private OutStatDao outStatDao;

	
	public OutStatDao getOutStatDao() {
		return outStatDao;
	}

	public void setOutStatDao(OutStatDao outStatDao) {
		this.outStatDao = outStatDao;
	}

	@Override
	public int addOutStat(OutStat outStat) {
		// TODO Auto-generated method stub
		return outStatDao.add(outStat);
	}
	
	@Override
	public int deleteOutStat(long id) {
		// TODO Auto-generated method stub
		return outStatDao.delete(id);
	}
	@Override
	public int updateOutStat(OutStat outStat) {
		// TODO Auto-generated method stub
		return outStatDao.update(outStat);
	}
	@Override
	public OutStat findOutStatById(long id) {
		// TODO Auto-generated method stub
		return outStatDao.findById(id);
	}
	@Override
	public List<OutStat> findAll() {
		// TODO Auto-generated method stub
		return outStatDao.find();
	}
	@Override
	public long findTotal() {
		// TODO Auto-generated method stub
		return outStatDao.findTotal();
	}
	@Override
	public List<OutStat> findPages(int page, int size, String sort, String order) {
		// TODO Auto-generated method stub
		int begin = (page - 1) * size;
		return outStatDao.findPages(begin, size, sort, order);
	}

	@Override
	public List<OutStat> findBySql(String sql) {
		// TODO Auto-generated method stub
		return outStatDao.findBySql(sql);
	}
	
	@Override
	public int bulkUpadte(String sql){
		return outStatDao.bulkUpdate(sql);
	}
}
