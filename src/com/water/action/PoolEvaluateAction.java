package com.water.action;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.struts2.ServletActionContext;

import jxl.Sheet;
import jxl.Workbook;
import jxl.read.biff.BiffException;
import jxl.write.Label;
import jxl.write.WritableCellFormat;
import jxl.write.WritableFont;
import jxl.write.WritableSheet;
import jxl.write.WritableWorkbook;

import com.opensymphony.xwork2.ActionSupport;
import com.water.beans.PoolEvaluate;
import com.water.service.PoolEvaluateService;


@SuppressWarnings("serial")
public class PoolEvaluateAction extends ActionSupport{
	//保存的文件名
//	private String downloadFilename;
//
//	public String getDownloadFilename() {
//		return downloadFilename;
//	}
//
//	public void setDownloadFilename(String downloadFilename) {
//		this.downloadFilename = downloadFilename;
//	}

	private File   upload;
	private String uploadFileName;
	private String uploadContentType;

	public File getUpload() {
		return upload;
	}

	public void setUpload(File upload) {
		this.upload = upload;
	}

	public String getUploadFileName() {
		return uploadFileName;
	}

	public void setUploadFileName(String uploadFileName) {
		this.uploadFileName = uploadFileName;
	}

	public String getUploadContentType() {
		return uploadContentType;
	}

	public void setUploadContentType(String uploadContentType) {
		this.uploadContentType = uploadContentType;
	}

	
	private PoolEvaluateService poolEvaluateService;

	private PoolEvaluate poolEvaluate; 
	private int page;// 当前页码
	private Map<String, Object> data = new HashMap<String, Object>();// 封装数据
	private int size;// 页面大小，页面是rows
	private String order;// 排序方向，desc和asc
	private String sort;// 排序属性名
	
	/*查询输入参数*/
	private String searchPoolID=null;	//查询水池编号
	public String getSearchPoolID() {
		return searchPoolID;
	}
	public void setSearchPoolID(String searchPoolID) {
		this.searchPoolID = searchPoolID;
	}
	
	private Date lowT;		//查询时间上限
	private Date highT;		//查询时间下限
		
	public Date getLowT() {
		return lowT;
	}

	public void setLowT(Date lowT) {
		this.lowT = lowT;
	}

	public Date getHighT() {
		return highT;
	}

	public void setHighT(Date highT) {
		this.highT = highT;
	}


	/*NTU查询参数*/
	private double lowNTU;  //来水浊度下限
	private double highNTU;	//来水浊度上限
	

	public double getLowNTU() {
		return lowNTU;
	}
	public void setLowNTU(double lowNTU) {
		this.lowNTU = lowNTU;
	}
	public double getHighNTU() {
		return highNTU;
	}
	public void setHighNTU(double highNTU) {
		this.highNTU = highNTU;
	}
	
	/*来水藻类含量查询参数*/
	private double lowAlgaeContent;  //来水藻类含量下限
	private double highAlgaeContent; //来水藻类含量上限
	
	
	public double getLowAlgaeContent() {
		return lowAlgaeContent;
	}
	public void setLowAlgaeContent(double lowAlgaeContent) {
		this.lowAlgaeContent = lowAlgaeContent;
	}
	public double getHighAlgaeContent() {
		return highAlgaeContent;
	}
	public void setHighAlgaeContent(double highAlgaeContent) {
		this.highAlgaeContent = highAlgaeContent;
	}
	
	/* 出水浊度查询参数	 */
	private double lowOutNTU;	//出水浊度下限
	private double highOutNTU;	//出水浊度上限
		
	public double getLowOutNTU() {
		return lowOutNTU;
	}

	public void setLowOutNTU(double lowOutNTU) {
		this.lowOutNTU = lowOutNTU;
	}

	public double getHighOutNTU() {
		return highOutNTU;
	}

	public void setHighOutNTU(double highOutNTU) {
		this.highOutNTU = highOutNTU;
	}
	
	/* 沉降比查询参数	 */
	private double lowSV;	//沉降比下限
	private double highSV;	//沉降比上限
			
	public double getLowSV() {
		return lowSV;
	}

	public void setLowSV(double lowSV) {
		this.lowSV = lowSV;
	}

	public double getHighSV() {
		return highSV;
	}

	public void setHighSV(double highSV) {
		this.highSV = highSV;
	}


	// 标识操作是否成功
	private boolean operateSuccess;

	// set注入
	public void setPoolEvaluateService(PoolEvaluateService poolEvaluateService) {
		this.poolEvaluateService = poolEvaluateService;
	}

	/*
	 * 给easyui排序用的，表示排序方法
	 */
	public void setOrder(String order) {
		this.order = order;
	}

	/*
	 * 给easyui排序用的，表示排序字段
	 */
	public void setSort(String sort) {
		this.sort = sort;
	}

	/*
	 * 给easyui指定页面大小用的，如果要指定页面大小可变
	 * 页面是rows
	 */
	public void setRows(int size) {
		this.size = size;
	}

	/*
	 * 给easyui分页用的
	 */
	public void setPage(int page) {
		this.page = page;
	}

	// getter/setter方法

	public PoolEvaluate getPoolEvaluate() {
		return poolEvaluate;
	}

	public int getPage() {
		return page;
	}

	public Map<String, Object> getData() {
		return data;
	}

	public void setData(Map<String, Object> data) {
		this.data = data;
	}

	public int getRows() {
		return size;
	}

	public String getOrder() {
		return order;
	}

	public String getSort() {
		return sort;
	}

	public void setPoolEvaluate(PoolEvaluate poolEvaluate) {
		this.poolEvaluate = poolEvaluate;
	}

	public boolean isOperateSuccess() {
		return operateSuccess;
	}

	public void setOperateSuccess(boolean operateSuccess) {
		this.operateSuccess = operateSuccess;
	}

	/**
	 * 查询所有数据
	 */
	public String list() {
		data.clear();// 清除
		if (sort == null) {
			sort = "ID";//默认按ID排序
		}
		if (order == null) {
			order = "asc";// 默认升序
		}
		data.put("total", poolEvaluateService.findTotal());// 得到所有的记录数
		data.put("rows", poolEvaluateService.findAll());
//		data.put("rows", poolEvaluateService.findPages(page, size, sort, order));// 得到某一页数据
		
		return "success";
	}

	/**
	 * 添加一项数据
	 */
	public String addPoolEvaluate() {
		operateSuccess = (poolEvaluateService.addPoolEvaluate(poolEvaluate) > 0);
		return "success";
	}

	/**
	 * 更新一项数据
	 */
	public String updatePoolEvaluate() {
		operateSuccess = (poolEvaluateService.updatePoolEvaluate(poolEvaluate) > 0);
		return "success";
	}

	/**
	 * 删除一项数据
	 */
	public String deletePoolEvaluate() {
		operateSuccess = (poolEvaluateService.deletePoolEvaluate(poolEvaluate.getID()) > 0);
		return "success";
	}

	/**
	 * 通过ID查询一项数据
	 */
	public String findPoolEvaluate() {
		poolEvaluate = poolEvaluateService.findPoolEvaluateById(poolEvaluate.getID());
		return "success";
	}
	
	public String searchPoolEvaluate() {
		String sql;
		//查询条件拼接
		if(lowT==null && highT==null && searchPoolID ==null){
			sql="from PoolEvaluate";
		}
		else {
			sql="from PoolEvaluate where 1=1";
			
			if (lowT!=null)
			{
				sql+= " and t  >= '"+(new SimpleDateFormat("yyyy-MM-dd")).format(lowT)+"'";
			}
			if (highT!=null){
				sql+= " and t <= '"+(new SimpleDateFormat("yyyy-MM-dd")).format(highT)+"'";
			}
			if(!searchPoolID.equals(""))
			{
				sql+=" and PoolID like '%"+searchPoolID+"'";
			}
			if(lowNTU!=0)
			{
				sql+=" and NTU >='"+lowNTU+"'";
			}
			if(highNTU!=0)
			{
				sql+=" and NTU <= '"+highNTU+"'";
			}
			if(lowAlgaeContent!=0)
			{
				sql+=" and AlgaeContent >='"+lowAlgaeContent+"'";
			}
			if(highAlgaeContent!=0)
			{
				sql+=" and AlgaeContent <= '"+highAlgaeContent+"'";
			}
			if(lowOutNTU!=0)
			{
				sql+=" and OutNTU >='"+lowOutNTU+"'";
			}
			if(highOutNTU!=0)
			{
				sql+=" and OutNTU <= '"+highOutNTU+"'";
			}
			if(lowSV!=0)
			{
				sql+=" and SV >='"+lowSV+"'";
			}
			if(highSV!=0)
			{
				sql+=" and SV <= '"+highSV+"'";
			}
		}
		System.out.println(sql);
		data.clear();//清除数据
		List<PoolEvaluate> searchList = poolEvaluateService.findBySql(sql);
		data.put("total", searchList.size());// 查询到的记录总数
		data.put("rows", searchList);// 查询的结果
		return "success";
	}
	
	public String export2excel(){
		List<PoolEvaluate> list = (List<PoolEvaluate>) data.get("rows");
		WritableWorkbook book = null;
		File uploadFile = new File(ServletActionContext.getServletContext().getRealPath("/downloadTemp"));
		//判断上述路径是否存在，如果不存在则创建该路径
		if (!uploadFile.exists()) {
			uploadFile.mkdir();
		}

		try{
			//打开文件
//			if(downloadFilename==null || downloadFilename.isEmpty())
//			{
//				//导出文件名默认为PoolEvaluate
////				downloadFilename=(new SimpleDateFormat("yyyyMMdd-HHmmss")).format(System.currentTimeMillis());
//				downloadFilename="PoolEvaluate";
//			}
			
			String path=ServletActionContext.getServletContext().getRealPath("//downloadTemp")+"//PoolEvaluate.xls";
			book = Workbook.createWorkbook(new File(path));
			//生成工作表
			WritableSheet sheet = book.createSheet("sheet1", 0);
			
			 //给sheet电子版中所有的列设置默认的列的宽度;  
	        sheet.getSettings().setDefaultColumnWidth(15);
	        sheet.setColumnView(1, 20);//给第二列设置列宽 
			//设置格式
	      //标题
			WritableFont formatH = new WritableFont(WritableFont.TAHOMA,14,WritableFont.BOLD);   
			WritableCellFormat formatTitle = new WritableCellFormat(formatH);
			//设置自动对齐 
			formatTitle.setAlignment(jxl.format.Alignment.CENTRE);
			
			//表头
			WritableFont formatH1 = new WritableFont(WritableFont.TAHOMA,10,WritableFont.BOLD);   
			WritableCellFormat formatHead = new WritableCellFormat(formatH1);
			formatHead.setAlignment(jxl.format.Alignment.CENTRE);  

			//内容
			WritableFont formatB = new WritableFont(WritableFont.TAHOMA,10);   
			WritableCellFormat formatBody = new WritableCellFormat(formatB);
			formatBody.setAlignment(jxl.format.Alignment.CENTRE);  //单元格内容居中对齐
			        
//			List<PoolEvaluate> list = dataAnalysisService.findAll();
			if(list!=null && !list.isEmpty()){
				sheet.mergeCells(0, 0, 13, 0);
				sheet.addCell(new Label(0,0,"机加池评估表",formatTitle));
				
				sheet.addCell(new Label(0,1," 时间 ",formatHead));
				sheet.addCell(new Label(1,1," 机加池编号 ",formatHead));				
				sheet.addCell(new Label(2,1," PAC投加量 ",formatHead));
				sheet.addCell(new Label(3,1," FeCl3投加量 ",formatHead));
				sheet.addCell(new Label(4,1," 开启度 ",formatHead));
				sheet.addCell(new Label(5,1," 转速 ",formatHead));
				sheet.addCell(new Label(6,1," 沉降比 ",formatHead));
				sheet.addCell(new Label(7,1," 小斗排泥时长 ",formatHead));
				sheet.addCell(new Label(8,1," 大斗排泥时长 ",formatHead));				
				sheet.addCell(new Label(9,1," 原水浊度 ",formatHead));	
				sheet.addCell(new Label(10,1," 原水藻类含量 ",formatHead));
				sheet.addCell(new Label(11,1," 出水浊度 ",formatHead));
				sheet.addCell(new Label(12,1," 预加氯量 ",formatHead));
				sheet.addCell(new Label(13,1," 水温 ",formatHead));

//				sheet.addCell(new Label(0,0," 编号 ",formatHead));
//				sheet.addCell(new Label(15,0," 状态 ",formatHead));
			
				for (int i=0;i<list.size();i++){
					sheet.addCell(new Label(0,i+2,(new SimpleDateFormat("yyyy-MM-dd")).format(list.get(i).getT()),formatBody));  //时间
					sheet.addCell(new Label(1,i+2,list.get(i).getPoolID(),formatBody));	//水池编号
					sheet.addCell(new Label(2,i+2,Double.toString(list.get(i).getPAC()),formatBody)); //PAC投加量
					sheet.addCell(new Label(3,i+2,Double.toString(list.get(i).getFeCl3()),formatBody));	 //FeCl3投加量
					sheet.addCell(new Label(4,i+2,Double.toString(list.get(i).getOpenDegree()),formatBody)); //开启度
					sheet.addCell(new Label(5,i+2,Double.toString(list.get(i).getRotationSpeed()),formatBody)); //转速
					sheet.addCell(new Label(6,i+2,Double.toString(list.get(i).getSV()),formatBody)); //沉降比
					sheet.addCell(new Label(7,i+2,Double.toString(list.get(i).getSmallMudFre()),formatBody)); //小斗排泥时长
					sheet.addCell(new Label(8,i+2,Double.toString(list.get(i).getBigMudFre()),formatBody)); //大斗排泥时长
					sheet.addCell(new Label(9,i+2,Double.toString(list.get(i).getNTU()),formatBody)); //原水浊度
					sheet.addCell(new Label(10,i+2,Double.toString(list.get(i).getAlgaeContent()),formatBody)); //原水藻类含量
					sheet.addCell(new Label(11,i+2,Double.toString(list.get(i).getOutNTU()),formatBody)); // 出水浊度
					sheet.addCell(new Label(12,i+2,Double.toString(list.get(i).getCL()),formatBody));  //预加氯量
					sheet.addCell(new Label(13,i+2,Double.toString(list.get(i).getWaterTemp()),formatBody));
					
//					sheet.addCell(new Label(0,i+1,Long.toString(list.get(i).getID()),formatBody));
//					sheet.addCell(new Label(15,i+1,list.get(i).getState()==0?"不正常":"正常",formatBody));
					

				}//for
			}//if
			System.out.println("--写入excel:"+path+"--");
			operateSuccess=true;
			//写入数据并关闭文件
			book.write();
		}catch(Exception e){
			System.out.println(e);
			operateSuccess=false;
		}finally{
			if(book!=null){
				try{
					book.close();
				}catch(Exception e){
					e.printStackTrace();
				}
			}
		}
		return "success";
	}

	public String import2DB() throws Exception{
		//	先上传，再导入
		//		//取得文件上传路径（用于存放上传的文件）
//		File uploadFile = new File(ServletActionContext.getServletContext().getRealPath("/uploadFiles"));
//		//判断上述路径是否存在，如果不存在则创建该路径
//		if (!uploadFile.exists()) {
//			uploadFile.mkdir();
//		}

		if(upload != null){
			//判断上传文件的类型是否是excel
			if(!uploadContentType.equals("application/vnd.ms-excel")){
				System.out.println("上传文件中包含非法文件类型");
				ServletActionContext.getServletContext().setAttribute("errorMsg", "上传文件中类型不符合条件");
				operateSuccess=false;
			}
			//判断文件的大小

			// 判断文件长度
			if (1000000 < upload.length()) {
				ServletActionContext.getServletContext().setAttribute("errorMsg", uploadFileName+ "文件过大");
				operateSuccess=false;
			}

			//	//		 第一种文件上传的读写方式
//			FileInputStream input = new FileInputStream(upload);
//			FileOutputStream out = new FileOutputStream(uploadFile + "\\" + uploadFileName);
//
//			try{
//				byte[] b = new byte[1024];
//				int m = 0;
//				while ((m = input.read(b)) > 0) {
//					out.write(b, 0, m);
//				}
//			}catch(Exception e){
//				e.printStackTrace();
//				ServletActionContext.getServletContext().setAttribute("errorMsg", uploadFileName+ "上传过程中发生未知错误，请联系管理员。上传失败！");
//				operateSuccess=false;
//				//				return "error";
//			}finally{
//				input.close();
//				out.close();
//				//删除临时文件
//				upload.delete();
//			}

			Workbook workBook = null;
			InputStream fs = null;
				try{
					//加载excel文件
//					fs = new FileInputStream(uploadFile + "\\" + uploadFileName);
					fs = new FileInputStream(upload);
					//得到工作簿
					workBook = Workbook.getWorkbook(fs);
				}catch(FileNotFoundException e){
					e.printStackTrace();
					ServletActionContext.getServletContext().setAttribute("errorMsg", uploadFileName+ "数据导入发生错误！");
					operateSuccess=false;
				}catch(BiffException e){
					e.printStackTrace();
					ServletActionContext.getServletContext().setAttribute("errorMsg", uploadFileName+ "数据导入发生错误！");
					operateSuccess=false;
				}catch(IOException e){
					e.printStackTrace();
					ServletActionContext.getServletContext().setAttribute("errorMsg", uploadFileName+ "数据导入发生错误！");
					operateSuccess=false;
				}
				DateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
				Sheet sheet = workBook.getSheet(0); //只取第一个sheet的值
				Date day = (new SimpleDateFormat("yyyy-MM-dd").parse(sheet.getCell(0,0).getContents()));
				String sql="delete PoolEvaluate where Convert(varchar,t,120)  like '%"+sdf.format(day)+"%'";
				// 直接覆盖当天信息
				int deleteResult = poolEvaluateService.bulkUpadte(sql);
				System.out.println("受影响的行数："+deleteResult);
				for(int i=2;i<sheet.getRows();i++){ //共13列数据,从第3行开始
					if(null==sheet.getCell(1,i).getContents() || ""==sheet.getCell(1,i).getContents())
					{	
						continue;
					}
					else{
						PoolEvaluate dataTemp = new PoolEvaluate();
						dataTemp.setID(0);
						dataTemp.setT(day);
						dataTemp.setPoolID(sheet.getCell(0,i).getContents());
						dataTemp.setPAC(Double.parseDouble(sheet.getCell(1,i).getContents()));
						dataTemp.setFeCl3(Double.parseDouble(sheet.getCell(2,i).getContents()));
						dataTemp.setOpenDegree(Double.parseDouble(sheet.getCell(3,i).getContents()));
						dataTemp.setRotationSpeed(Double.parseDouble(sheet.getCell(4,i).getContents()));
						dataTemp.setSV(Double.parseDouble(sheet.getCell(5,i).getContents()));
						dataTemp.setSmallMudFre(Double.parseDouble(sheet.getCell(6,i).getContents()));
						dataTemp.setBigMudFre(Double.parseDouble(sheet.getCell(7,i).getContents()));
						dataTemp.setNTU(Double.parseDouble(sheet.getCell(8,i).getContents()));
						dataTemp.setAlgaeContent(Double.parseDouble(sheet.getCell(9,i).getContents()));
						dataTemp.setOutNTU(Double.parseDouble(sheet.getCell(10,i).getContents()));
						dataTemp.setCL(Double.parseDouble(sheet.getCell(11,i).getContents()));
						dataTemp.setWaterTemp(Double.parseDouble(sheet.getCell(12,i).getContents()));
						operateSuccess=(poolEvaluateService.addPoolEvaluate(dataTemp)>0);	//添加到数据库
					}
				} //for
				workBook.close(); //关闭
			}//upload!=null
			else{
				operateSuccess=false;
				ServletActionContext.getServletContext().setAttribute("errorMsg", "请选择上传文件");
			}
		return SUCCESS;
	}
	
	
	public String importCheck() throws Exception{
		String errMsg = "" ;
		if(upload != null){
			//判断上传文件的类型是否是excel
			if(!uploadContentType.equals("application/vnd.ms-excel")){
				errMsg = "上传文件中类型不符合条件";
				operateSuccess=false;
			}
			Workbook workBook = null;
			InputStream fs = null;
			try{
				//加载excel文件
				fs = new FileInputStream(upload);
				//得到工作簿
				workBook = Workbook.getWorkbook(fs);
			}catch(Exception e){
				e.printStackTrace();
				errMsg = uploadFileName+ "数据导入发生错误！";	
				operateSuccess=false;
			}
			DateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			Sheet sheet = workBook.getSheet(0); //只取第一个sheet的值
			//得到当前天数
			Date day = (Date) sdf.parse(sheet.getCell(0,0).getContents());
			String poolIDTemp=sheet.getCell(0,2).getContents();
			String sql="from PoolEvaluate where Convert(varchar,t,120)  like '%"+sdf.format(day)+"%'";
			sql+=" and PoolID like '%"+poolIDTemp+"'";
			List<PoolEvaluate> list = poolEvaluateService.findBySql(sql);

			if(null == list||list.isEmpty()){
				errMsg="";
				operateSuccess=true;
			}
			else{
				errMsg = "文件冲突，已存在相关信息！";	
				operateSuccess=false;
			}
		}else{ //upload=''
			errMsg = "请选择上传文件！";
			operateSuccess=false;
		}
		System.out.println(errMsg);
		ServletActionContext.getServletContext().setAttribute("errorMsg",errMsg);
		return SUCCESS;
	}
}
