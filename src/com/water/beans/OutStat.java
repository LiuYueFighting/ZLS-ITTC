package com.water.beans;
/**  
 * @projectName ZLS-ITTC  
 * @author chenhua 
 * @date 2015年11月29日 
 */
import java.util.Date;

public class OutStat {
	private long ID;		//表的ID
	private Date t;			//时间
	private String PoolID; 	//水池编号
	private double NTU;		//出水浊度
	private double Cl;		//余氯
	private double Fe;		//铁
	private double Al;		//铝
	public long getID() {
		return ID;
	}
	public void setID(long iD) {
		ID = iD;
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
		PoolID = poolID;
	}
	public double getNTU() {
		return NTU;
	}
	public void setNTU(double nTU) {
		NTU = nTU;
	}
	public double getCl() {
		return Cl;
	}
	public void setCl(double cl) {
		Cl = cl;
	}
	public double getFe() {
		return Fe;
	}
	public void setFe(double fe) {
		Fe = fe;
	}
	public double getAl() {
		return Al;
	}
	public void setAl(double al) {
		Al = al;
	}
	
	
	
}
