package com.water.dao;

import java.util.List;

import com.water.beans.MoChiAnalysis;

public interface MoChiAnalysisDao{

	/**
	 * 查询 
	 * @return
	 */
	public List<MoChiAnalysis> find();

	/**
	 * 添加
	 * @return
	 */
	public int add(MoChiAnalysis moChiAnalysis);

	/**
	 *通过id删除
	 * @return
	 */
	public int delete(long id);

	/**
	 * 通过id查询
	 * @param id
	 * @return
	 */
	public MoChiAnalysis findById(long id);

	/**
	 * 更新
	 * @return
	 */
	public int update(MoChiAnalysis moChiAnalysis);

	/**
	 * 查询总记录数
	 * @return
	 */
	public long findTotal();

	/**
	 * 分页查询
	 */
	public List<MoChiAnalysis> findPages(int begin, int end, String sort, String order);
	
	
	public List<MoChiAnalysis> findBySql(String sql);
	
	public int  bulkUpdate(String sql); //批量更新删除

}
