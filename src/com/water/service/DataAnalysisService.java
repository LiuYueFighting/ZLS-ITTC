package com.water.service;
import java.util.List;

import com.water.beans.DataAnalysis;
public interface DataAnalysisService {
	int addDataAnalysis(DataAnalysis dataAnalysis);			//���DataAnalysis
	int deleteDataAnalysis(long id);			//ɾ��DataAnalysis
	int updateDataAnalysis(DataAnalysis dataAnalysis);			//����DataAnalysis
	DataAnalysis findDataAnalysisById(long id);			//��id����DataAnalysis
	List<DataAnalysis> findAll();				//����ȫ��DataAnalysis
	long findTotal();
	List<DataAnalysis> findPages(int page, int size, String sort, String order);
	List<DataAnalysis> findBySql(String sql);
	int bulkUpadte(String sql);
}
