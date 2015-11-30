package com.water.service;

import java.util.List;

import com.water.beans.OutStat;

/**  
 * @projectName ZLS-ITTC  
 * @author chenhua 
 * @date 2015年11月29日 
 */

public interface OutStatService {
	int addOutStat(OutStat outStat);			//添加
	int deleteOutStat(long id);			//删除
	int updateOutStat(OutStat outStat);			//更新
	OutStat findOutStatById(long id);			//通过ID查查
	List<OutStat> findAll();				//查询所有
	long findTotal(); 	//获取数据总数
	List<OutStat> findPages(int page, int size, String sort, String order);//分页查询
	List<OutStat> findBySql(String sql);//通过sql语句查询
	int bulkUpadte(String sql);//批量更新或删除
}
