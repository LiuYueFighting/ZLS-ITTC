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
	private Double InPress;		//进膜压力Mpa
	private Double OutPress;		//出水压力Mpa
	private Double DiffPress;		//跨膜压差Mpa
	private Double InFlow; 		//进水流量(m³)
	private Double InNTU;       //进膜浊度
	private Double OutNTU;		//出膜浊度
	private Double InAlga;		//进膜藻类含量
	private Double OutAlga;		//出膜藻类含量
	
	
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


	public Double getInPress() {
		return InPress;
	}


	public void setInPress(Double inPress) {
		InPress = inPress;
	}


	public Double getOutPress() {
		return OutPress;
	}


	public void setOutPress(Double outPress) {
		OutPress = outPress;
	}


	public Double getDiffPress() {
		return DiffPress;
	}


	public void setDiffPress(Double diffPress) {
		DiffPress = diffPress;
	}


	public Double getInFlow() {
		return InFlow;
	}


	public void setInFlow(Double inFlow) {
		InFlow = inFlow;
	}


	public Double getInNTU() {
		return InNTU;
	}


	public void setInNTU(Double inNTU) {
		InNTU = inNTU;
	}


	public Double getOutNTU() {
		return OutNTU;
	}


	public void setOutNTU(Double outNTU) {
		OutNTU = outNTU;
	}


	public Double getInAlga() {
		return InAlga;
	}


	public void setInAlga(Double inAlga) {
		InAlga = inAlga;
	}


	public Double getOutAlga() {
		return OutAlga;
	}


	public void setOutAlga(Double outAlga) {
		OutAlga = outAlga;
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
