package com.water.service;
import java.util.List;

import com.water.beans.MoChiAnalysis;
public interface MoChiAnalysisService {
	int addMoChiAnalysis(MoChiAnalysis moChiAnalysis);			//添加
	int deleteMoChiAnalysis(long id);			//删除
	int updateMoChiAnalysis(MoChiAnalysis moChiAnalysis);			//更新
	MoChiAnalysis findMoChiAnalysisById(long id);			//通过id查询
	List<MoChiAnalysis> findAll();				//查询所有
	long findTotal();
	List<MoChiAnalysis> findPages(int page, int size, String sort, String order);
	List<MoChiAnalysis> findBySql(String sql);
	int bulkUpadte(String sql);
}
