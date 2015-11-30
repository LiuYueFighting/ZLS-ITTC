package com.water.beans;

import java.util.Date;

public class PoolEvaluate {
	private long ID;  //ID
	private Date t;   //时间
	private String PoolID;  //水池编号
	private double FeCl3;	//FeCl3投加量
	private double PAC;		//PAC投加量
	private double OpenDegree;	//开启度
	private double RotationSpeed;  //转速
	private double SV;	//沉降比
	private double SmallMudFre;	//小斗排泥时长
	private double BigMudFre;	//大斗排泥时长
	private double NTU;	//原水浊度
	private double AlgaeContent;   //原水藻类含量
	private double OutNTU;	//出水浊度
	private double CL; //预加氯量
	private double WaterTemp;	//水温
	
//	private int state;  
	
	
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
	public double getOpenDegree() {
		return OpenDegree;
	}
	public void setOpenDegree(double openDegree) {
		OpenDegree = openDegree;
	}
	public double getRotationSpeed() {
		return RotationSpeed;
	}
	public void setRotationSpeed(double rotationSpeed) {
		RotationSpeed = rotationSpeed;
	}
	public double getSV() {
		return SV;
	}
	public void setSV(double sV) {
		SV = sV;
	}
	public double getSmallMudFre() {
		return SmallMudFre;
	}
	public void setSmallMudFre(double smallMudFre) {
		SmallMudFre = smallMudFre;
	}
	public double getBigMudFre() {
		return BigMudFre;
	}
	public void setBigMudFre(double bigMudFre) {
		BigMudFre = bigMudFre;
	}
	public double getNTU() {
		return NTU;
	}
	public void setNTU(double nTU) {
		NTU = nTU;
	}
	
	public double getAlgaeContent() {
		return AlgaeContent;
	}
	public void setAlgaeContent(double algaeContent) {
		AlgaeContent = algaeContent;
	}
	public double getFeCl3() {
		return FeCl3;
	}
	public void setFeCl3(double feCl3) {
		FeCl3 = feCl3;
	}
	public double getPAC() {
		return PAC;
	}
	public void setPAC(double pAC) {
		PAC = pAC;
	}
	public double getOutNTU() {
		return OutNTU;
	}
	public void setOutNTU(double outNTU) {
		OutNTU = outNTU;
	}
	
	public double getCL() {
		return CL;
	}
	public void setCL(double cL) {
		CL = cL;
	}
//	public int getState() {
//		return state;
//	}
//	public void setState(int state) {
//		this.state = state;
//	}
	public double getWaterTemp() {
		return WaterTemp;
	}
	public void setWaterTemp(double waterTemp) {
		WaterTemp = waterTemp;
	}
	
}

