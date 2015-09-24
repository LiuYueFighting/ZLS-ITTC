package com.water.beans;

import java.sql.Date;

public class PoolEvaluate {
	private long ID;  //���
	private Date t;   //ʱ��
	private String PoolID;  //ˮ�ر��
	private double OpenDegree;	//������
	private double RotationSpeed;  //ת��
	private double SV;	//������
	private double SmallMudFre;	//С������Ƶ��
	private double BigMudFre;	//������Ƶ��
	private double NTU;	//�Ƕ�
	private double WaterTemp;	//ˮ��
	private double AlgaeContent;   //���ຬ��
	private double FeCl3;	//��FeCl3����
	private double PAC;		//��PAC��
	private double OutNTU;	//���ӳس�ˮ�Ƕ�
	private int state;   //״̬
	private double CL; //Ԥ����
	
	
	
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
	public double getWaterTemp() {
		return WaterTemp;
	}
	public void setWaterTemp(double waterTemp) {
		WaterTemp = waterTemp;
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
	public int getState() {
		return state;
	}
	public void setState(int state) {
		this.state = state;
	}
	public double getCL() {
		return CL;
	}
	public void setCL(double cL) {
		CL = cL;
	}
	
	
}

