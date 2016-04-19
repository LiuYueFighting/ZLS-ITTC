package com.water.service.impl;
import java.util.List;

import com.water.beans.MoChiAnalysis;
import com.water.dao.MoChiAnalysisDao;
import com.water.service.MoChiAnalysisService;
public class MoChiAnalysisServiceImpl implements MoChiAnalysisService{
	private MoChiAnalysisDao moChiAnalysisDao;

	
	public MoChiAnalysisDao getMoChiAnalysisDao() {
		return moChiAnalysisDao;
	}

	public void setMoChiAnalysisDao(MoChiAnalysisDao moChiAnalysisDao) {
		this.moChiAnalysisDao = moChiAnalysisDao;
	}

	@Override
	public int addMoChiAnalysis(MoChiAnalysis moChiAnalysis) {
		// TODO Auto-generated method stub
		return moChiAnalysisDao.add(moChiAnalysis);
	}
	
	@Override
	public int deleteMoChiAnalysis(long id) {
		// TODO Auto-generated method stub
		return moChiAnalysisDao.delete(id);
	}
	@Override
	public int updateMoChiAnalysis(MoChiAnalysis moChiAnalysis) {
		// TODO Auto-generated method stub
		return moChiAnalysisDao.update(moChiAnalysis);
	}
	@Override
	public MoChiAnalysis findMoChiAnalysisById(long id) {
		// TODO Auto-generated method stub
		return moChiAnalysisDao.findById(id);
	}
	@Override
	public List<MoChiAnalysis> findAll() {
		// TODO Auto-generated method stub
		return moChiAnalysisDao.find();
	}
	@Override
	public long findTotal() {
		// TODO Auto-generated method stub
		return moChiAnalysisDao.findTotal();
	}
	@Override
	public List<MoChiAnalysis> findPages(int page, int size, String sort, String order) {
		// TODO Auto-generated method stub
		int begin = (page - 1) * size;
		return moChiAnalysisDao.findPages(begin, size, sort, order);
	}

	@Override
	public List<MoChiAnalysis> findBySql(String sql) {
		// TODO Auto-generated method stub
		
		return moChiAnalysisDao.findBySql(sql);
	}
	
	@Override
	public int bulkUpadte(String sql){
		return moChiAnalysisDao.bulkUpdate(sql);
	}
	
}
