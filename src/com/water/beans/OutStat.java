package com.water.beans;
/**  
 * @projectName ZLS-ITTC  
 * @author chenhua 
 * @date 2015年11月29日 
 */
import java.util.Date;

public class OutStat implements Comparable<OutStat> {
	private long ID;		//表的ID
	private Date t;			//时间
	private String PoolID; 	//水池编号
	private Double NTU;		//出水浊度
	private Double Cl;		//余氯
	private Double Fe;		//铁 修改前
//	private String Fe; //修改后
	private Double Al;		//铝
	
	public int compareTo(OutStat other) {
		if(this.t == null || other.t == null) {
			return 0;
		} else {
			if(this.t.before(other.t))
				return -1;
			else
				return 1;
		}
	}
	
	public long getID() {
		return ID;
	}
	public void setID(long ID) {
		this.ID = ID;
	}
	public Date getT() {
		return t;
	}
	public void setT(Date t) {
		this.t = t;
	}
	public String getPoolID() {
		return PoolID;
	}
	public void setPoolID(String poolID) {
		this.PoolID = poolID;
	}
	public Double getNTU() {
		return NTU;
	}
	public void setNTU(Double nTU) {
		this.NTU = nTU;
	}
	public Double getCl() {
		return Cl;
	}
	public void setCl(Double cl) {
		this.Cl = cl;
	}
// 修改前
	public Double getFe() {
		return Fe;
	}
	public void setFe(Double fe) {
		this.Fe =fe;
	}
//修改后
//	public String getFe() {
//		return Fe;
//	}
//	public void setFe(String fe) {
//		this.Fe =fe;
//	}
	public Double getAl() {
		return Al;
	}
	public void setAl(Double al) {
		this.Al = al;
	}
	
	
	
}
