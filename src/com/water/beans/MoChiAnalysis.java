package com.water.beans;

import java.util.Date;

/**  
 * @projectName ZLS-ITTC  
 * @author chenhua 
 * @date 2016年4月19日 
 */

public class MoChiAnalysis {
	private long ID;		//ID
	private String PoolID;		//膜池编号
	private Date t;		//时间
	private double InPress;		//进膜压力Mpa
	private double OutPress;		//出水压力Mpa
	private double DiffPress;		//跨膜压差Mpa
	private long InFlow; 		//进水流量(m³)
	public long getID() {
		return ID;
	}
	public void setID(long iD) {
		ID = iD;
	}
	public String getPoolID() {
		return PoolID;
	}
	public void setPoolID(String poolID) {
		PoolID = poolID;
	}
	public Date getT() {
		return t;
	}
	public void setT(Date t) {
		this.t = t;
	}
	public double getInPress() {
		return InPress;
	}
	public void setInPress(double inPress) {
		InPress = inPress;
	}
	public double getOutPress() {
		return OutPress;
	}
	public void setOutPress(double outPress) {
		OutPress = outPress;
	}
	public double getDiffPress() {
		return DiffPress;
	}
	public void setDiffPress(double diffPress) {
		DiffPress = diffPress;
	}
	public long getInFlow() {
		return InFlow;
	}
	public void setInFlow(long inFlow) {
		InFlow = inFlow;
	}
	
	public int compareTo(MoChiAnalysis other) {
		if(this.t == null || other.t == null)
			return 0;
		else {
			if(this.t.before(other.t))
				return -1;
			else 
				return 1;
			}
	}
	
}
