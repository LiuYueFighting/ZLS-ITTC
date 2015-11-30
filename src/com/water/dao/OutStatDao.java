package com.water.dao;

import java.util.List;

import com.water.beans.OutStat;

/**  
 * @projectName ZLS-ITTC  
 * @author chenhua 
 * @date 2015年11月29日 
 */

public interface OutStatDao {

	public List<OutStat> find(); //查询所有数据

	public int add(OutStat outStat); //添加一项数据

	public int delete(long id);	//根据ID删除一项数据

	public OutStat findById(long id); //根据ID查询一项数据

	public int update(OutStat outStat); //更新一项数据

	public long findTotal(); //获取数据总数

	public List<OutStat> findPages(int begin, int end, String sort, String order); //分页查询数据
	
	public List<OutStat> findBySql(String sql);	 //通过sql语句查询
	
	public int  bulkUpdate(String sql); //批量更新删除
}
