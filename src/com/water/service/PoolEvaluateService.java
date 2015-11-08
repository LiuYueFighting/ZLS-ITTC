package com.water.service;
import java.util.List;

import com.water.beans.PoolEvaluate;
public interface PoolEvaluateService {
	int addPoolEvaluate(PoolEvaluate poolEvaluate);			//����û�
	int deletePoolEvaluate(long id);			//ɾ���û�
	int updatePoolEvaluate(PoolEvaluate poolEvaluate);			//�����û�
	PoolEvaluate findPoolEvaluateById(long id);			//��id�����û�
	List<PoolEvaluate> findAll();				//����ȫ���û�
	long findTotal();
	List<PoolEvaluate> findPages(int page, int size, String sort, String order);
	List<PoolEvaluate> findBySql(String sql);
	int bulkUpadte(String sql);
}
