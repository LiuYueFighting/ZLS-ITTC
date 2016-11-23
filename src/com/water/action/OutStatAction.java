package com.water.action;
/**  
 * @projectName ZLS-ITTC  
 * @author chenhua 
 * @date 2015年11月29日 
 */
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Date;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Collections;

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
import com.water.beans.OutStat;
import com.water.service.OutStatService;
import com.water.util.ListSort;
import com.water.util.TimeTree;
import com.water.util.Tools;
import com.water.util.TreeNode;


@SuppressWarnings("serial")
public class OutStatAction extends ActionSupport{

	private String dateTemp; /*传递时间参数有问题，作为中间变量传入*/

	public String getDateTemp() {
		return dateTemp;
	}

	public void setDateTemp(String dateTemp) {
		this.dateTemp = dateTemp;
	}

	//导入的文件路径和文件名,文件类型


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

	private OutStatService outStatService;

	private OutStat outStat; 

	//查询条件
	private String searchPoolID=null;
	public String getSearchPoolID() {
		return searchPoolID;
	}

	public void setSearchPoolID(String searchPoolID) {
		this.searchPoolID = searchPoolID;
	}

	private Date searchT=null;

	public Date getSearchT() {
		return searchT;
	}

	public void setSearchT(Date searchT) {
		this.searchT = searchT;
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

	private int state=0; //标识导出失败的原因  1-未查询到相关数据 2-程序异常

	public int getState() {
		return state;
	}

	public void setState(int state) {
		this.state = state;
	}

	private int page;//  当前第几页
	private Map<String, Object> data = new HashMap<String, Object>();// 封装数据
	private int size; // 页面大小，页面是rows
	private String order;//排序方向，desc和asc
	private String sort;  // 排序属性名

	// 标识操作是否成功
	private boolean operateSuccess;

	// set注入
	public void setOutStatService(OutStatService outStatService) {
		this.outStatService = outStatService;
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

	public OutStat getOutStat() {
		return outStat;
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

	public void setOutStat(OutStat outStat) {
		this.outStat = outStat;
	}

	public boolean isOperateSuccess() {
		return operateSuccess;
	}

	public void setOperateSuccess(boolean operateSuccess) {
		this.operateSuccess = operateSuccess;
	}

	/**
	 * 查询某一页的数据
	 */
	public String list() {
		data.clear();
		if (sort == null) {
			sort = "ID";
		}
		if (order == null) {
			order = "asc";
		}
		List<OutStat> searchList = outStatService.findAll();
		List<String> tlist = new ArrayList<String>();
		DateFormat sdFormat=new SimpleDateFormat("yyyy-MM-dd");
		for(OutStat s:searchList){
			tlist.add(sdFormat.format(s.getT()));
		}
		List <TreeNode> timeTree = TimeTree.convert(TimeTree.buildTree(tlist));
		data.put("tlist", timeTree);
		data.put("total", outStatService.findTotal());
		data.put("rows", searchList);
		return "success";
	}

	/**
	 * 添加一项数据
	 * @throws ParseException 
	 */
	public String addOutStat() throws ParseException {
		operateSuccess = (outStatService.addOutStat(outStat) > 0);
		return "success";
	}

	/**
	 * 更新一项数据
	 * @throws ParseException 
	 */
	public String updateOutStat() throws ParseException {
		operateSuccess = (outStatService.updateOutStat(outStat) > 0);
		return "success";
	}

	/**
	 * 删除一项数据
	 */
	public String deleteOutStat() {
		operateSuccess = (outStatService.deleteOutStat(outStat.getID()) > 0);
		return "success";
	}

	/**
	 * 通过ID查询数据
	 */
	public String findOutStat() {
		outStat = outStatService.findOutStatById(outStat.getID());
		return "success";
	}

	public static final Comparator<OutStat> COMPARATOR = new Comparator<OutStat>() {
		public int compare(OutStat o1, OutStat o2) {
			return o1.compareTo(o2);
		}
	};
	
	
	/**
	 * 通过设置查询条件查询
	 */
	public String searchOutStat() {
		String sql;
		DateFormat sdFormat2=new SimpleDateFormat("yyyy.MM.dd");
		//查询条件拼接
		if(lowT==null && highT==null && searchPoolID ==null){
			sql="from OutStat";
		}
		else {
			sql="from OutStat where 1=1";
			if (lowT!=null)
			{
				sql+= " and Convert(varchar,t,102)  >= '"+sdFormat2.format(lowT)+"'"; 
			}
			if (highT!=null){
				sql+= " and Convert(varchar,t,102) <= '"+sdFormat2.format(highT)+"'";
			}
			if(!searchPoolID.equals(""))
			{
				sql+=" and PoolID like '%"+searchPoolID+"'";
			}
			
		}
		System.out.println(sql);
		List<OutStat> searchList = outStatService.findBySql(sql);
		Collections.sort(searchList, COMPARATOR);
		List<String> tlist = new ArrayList<String>();
		DateFormat sdFormat=new SimpleDateFormat("yyyy-MM-dd");
		for(OutStat s:searchList){
			tlist.add(sdFormat.format(s.getT()));
		}
		List <TreeNode> timeTree = TimeTree.convert(TimeTree.buildTree(tlist));
		data.put("tlist", timeTree);
		data.put("total", searchList.size());// 查询的结果总数
		data.put("rows", searchList);// 查询的结果
		return "success";
	}
	
	public String export2excel(){
		@SuppressWarnings("unchecked")
		String sql;
		DateFormat sdFormat2=new SimpleDateFormat("yyyy.MM.dd");
		if(lowT==null && highT==null && searchPoolID ==null){
			sql="from OutStat";
		}
		else {
			sql="from OutStat where 1=1";
			if (lowT!=null)
			{
				sql+= " and Convert(varchar,t,102)  >= '"+sdFormat2.format(lowT)+"'"; //SQL时间格式转换 参考http://www.w3school.com.cn/sql/func_convert.asp
			}
			if (highT!=null){
				sql+= " and Convert(varchar,t,102) <= '"+sdFormat2.format(highT)+"'";
			}
			if(!searchPoolID.equals(""))
			{
				sql+=" and PoolID like '%"+searchPoolID+"'";
			}
			
		}
//		System.out.println(sql);
		List<OutStat> list = outStatService.findBySql(sql);
		if(list.isEmpty()){
			System.out.println("没有查到数据，无法导出");
			operateSuccess=false;
			state =1; //没有查到数据
			return SUCCESS;
		}
		
//		List<OutStat> list=(List<OutStat>) data.get("rows");
		WritableWorkbook book = null;
		File uploadFile = new File(ServletActionContext.getServletContext().getRealPath("/downloadTempForOut"));
		//判断上述路径是否存在，如果不存在则创建该路径
		if (!uploadFile.exists()) {
			uploadFile.mkdir();
		}
		try{
			String path=ServletActionContext.getServletContext().getRealPath("//downloadTempForOut")+"//OutStat.xls";
			book = Workbook.createWorkbook(new File(path));
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

			//	List<OutStat> list = outStatService.findAll();
			if(list!=null && !list.isEmpty()){
				ListSort<OutStat> listSort = new ListSort<OutStat>();
				listSort.Sort(list, "getT","asc"); //排序
				DateFormat sdfDay = new SimpleDateFormat("yyyy-MM-dd");
				DateFormat sdf = new SimpleDateFormat("HH");

				String tempT = sdfDay.format(list.get(0).getT());
				String sheetname = "出水水质";     //修改
				
				WritableSheet sheet = book.createSheet(sheetname, 0);
				//给sheet电子版中所有的列设置默认的列的宽度;  
				sheet.getSettings().setDefaultColumnWidth(15);
				sheet.setColumnView(1, 20);//给第二列设置列宽 
				sheet.mergeCells(0, 0, 4, 0); //合并单元格，用于显示标题
				sheet.addCell(new Label(0,0, "出厂水水质统计表",formatTitle));
				//添加表头
				sheet.addCell(new Label(0,1," 时间 ",formatHead));    //修改
				sheet.addCell(new Label(1,1," 水池编号 ",formatHead));
				sheet.addCell(new Label(2,1," 出水浊度 ",formatHead));
				sheet.addCell(new Label(3,1," 余氯",formatHead));
				sheet.addCell(new Label(4,1," 铁  ",formatHead));
				sheet.addCell(new Label(5,1," 铝 ",formatHead));
				int j=2;
				for(int i=0;i<list.size();i++){
					String day = sdfDay.format(list.get(i).getT());
//					if (day.equals(tempT)){		修改			
						sheet.addCell(new Label(0,j,sdfDay.format(list.get(i).getT()),formatBody));   //修改
						sheet.addCell(new Label(1,j,Tools.transPoolID(list.get(i).getPoolID()),formatBody));
//						sheet.addCell(new Label(2,j,Double.toString(list.get(i).getNTU()),formatBody));
//						sheet.addCell(new Label(3,j,Double.toString(list.get(i).getCl()),formatBody));
//						sheet.addCell(new Label(4,j,Double.toString(list.get(i).getFe()),formatBody)); //修改前
////						sheet.addCell(new Label(4,j,list.get(i).getFe(),formatBody)); //修改后
//						sheet.addCell(new Label(5,j,Double.toString(list.get(i).getAl()),formatBody));
						sheet.addCell(new Label(2,j,list.get(i).getNTU() == null? "" : Double.toString(list.get(i).getNTU()),formatBody));
						sheet.addCell(new Label(3,j,list.get(i).getCl() == null? "" : Double.toString(list.get(i).getCl()),formatBody));
						sheet.addCell(new Label(4,j,list.get(i).getFe() == null? "" : Double.toString(list.get(i).getFe()),formatBody)); //修改前
//						sheet.addCell(new Label(4,j,list.get(i).getFe(),formatBody)); //修改后
						sheet.addCell(new Label(5,j,list.get(i).getAl() == null? "" : Double.toString(list.get(i).getAl()),formatBody));
						j=j+1;
//					}
//						else{ //新建个sheet                     //修改
//						j=2;
//						tempT = day;
//						sheet = book.createSheet(tempT, 0);
//						//给sheet电子版中所有的列设置默认的列的宽度;  
//						sheet.getSettings().setDefaultColumnWidth(15);
//						sheet.setColumnView(1, 20);//给第二列设置列宽 
//						sheet.mergeCells(0, 0, 4, 0); //合并单元格，用于显示标题
//						sheet.addCell(new Label(0,0, "出厂水水质统计表",formatTitle));
//						//添加表头
//						//				sheet.addCell(new Label(0,1," 编号 ",formatHead));
////						sheet.addCell(new Label(0,1," 时间 ",formatHead));
//						sheet.addCell(new Label(0,1," 水池编号 ",formatHead));
//						sheet.addCell(new Label(1,1," 出水浊度 ",formatHead));
//						sheet.addCell(new Label(2,1," 余氯",formatHead));
//						sheet.addCell(new Label(3,1," 铁  ",formatHead));
//						sheet.addCell(new Label(4,1," 铝 ",formatHead));
//
////						sheet.addCell(new Label(0,j,sdfDay.format(list.get(i).getT()),formatBody));
//						sheet.addCell(new Label(0,j,Tools.transPoolID(list.get(i).getPoolID()),formatBody));
//						sheet.addCell(new Label(1,j,Double.toString(list.get(i).getNTU()),formatBody));
//						sheet.addCell(new Label(2,j,Double.toString(list.get(i).getCl()),formatBody));
//						sheet.addCell(new Label(3,j,Double.toString(list.get(i).getFe()),formatBody));
//						sheet.addCell(new Label(4,j,Double.toString(list.get(i).getAl()),formatBody));
//						j=j+1;
//					}
				}//for
			}//if
			System.out.println("--写入excel:"+path+"--");
			//写入数据并关闭文件
			book.write();
			operateSuccess=true;
		}catch(Exception e){
			e.printStackTrace();
			state=2; //程序异常
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
		return SUCCESS;
	}

	public String import2DB() throws Exception{
		//判断是否选中上传文件
		if(upload != null){
			//判断上传文件的类型是否是excel
			if(!uploadContentType.equals("application/vnd.ms-excel")){
				System.out.println("上传文件中包含非法文件类型");
				ServletActionContext.getServletContext().setAttribute("errorMsg", "上传文件中类型不符合条件");
				operateSuccess=false;
			}
			//判断文件的大小
			if (1000000 < upload.length()) {
				ServletActionContext.getServletContext().setAttribute("errorMsg", uploadFileName+ "文件过大");
				operateSuccess=false;
			}

			Workbook workBook = null;
			InputStream fs = null;
			try{
				//加载excel文件
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
			Sheet sheet = workBook.getSheet(0); //只取第一个sheet的值
			//得到当前天数
//			String sheetName = sheet.getName(); //修改前
			try{
				for(int i=2;i<sheet.getRows();i++){ //修改后
				//导入表单只有一页，时间不再是sheetname，而被放在了第一列
				//Date day= (new SimpleDateFormat("yyyy-MM-dd").parse(sheetName)); //修改前
//				String poolIDTemp=sheet.getCell(0,2).getContents(); //修改前
				String poolIDTemp="MTG_QingS_SC01"; //修改后，原excel里为中文，现转化为数据库中的参数值
				String day = sheet.getCell(0,i).getContents(); //修改后
				System.out.println(day); //修改后，debug
				System.out.println(sheet.getCell(0,i).getType()); //修改后，debug
				String sql="delete OutStat where PoolID like '%"+poolIDTemp+"'";
//				sql+= " and Convert(varchar,t,120)  like '%"+sheetName+"%'"; //修改前
				sql+= " and Convert(varchar,t,120)  like '%"+day+"%'"; //修改后
				System.out.println(sql);
				// 直接覆盖
				int deleteResult = outStatService.bulkUpadte(sql);
				System.out.println("受影响结果："+deleteResult);
				
//				for(int i=2;i<sheet.getRows();i++){ //共11列数据,从第三行开始 //修改前
					if(null==sheet.getCell(0,i).getContents() || "".equals(sheet.getCell(0,i).getContents()))// 字符串比较用.equals
					{	
						continue;
					} 
					else{ 
						OutStat dataTemp = new OutStat();
						dataTemp.setID(0);
//						try{
//							int hour = Integer.parseInt(sheet.getCell(0,i).getContents());
//							Date datetime = new Date();
//							datetime.setTime(day.getTime()+hour*3600*1000);
//							dataTemp.setT(datetime);							
//						}catch(Exception e){
//							e.printStackTrace();
//						}
						//修改前
//						dataTemp.setT(day);    
//						dataTemp.setPoolID(sheet.getCell(0,i).getContents());						
//						dataTemp.setNTU(Double.parseDouble(sheet.getCell(1,i).getContents()));
//						dataTemp.setCl(Double.parseDouble(sheet.getCell(2,i).getContents()));
//						dataTemp.setFe(Double.parseDouble(sheet.getCell(3,i).getContents()));
//						dataTemp.setAl(Double.parseDouble(sheet.getCell(4,i).getContents()));
						//修改后
						dataTemp.setT(new SimpleDateFormat("yyyy-MM-dd").parse(sheet.getCell(0,i).getContents())); //将String转化成Date
//						dataTemp.setPoolID(sheet.getCell(1,i).getContents()); //修改前
						dataTemp.setPoolID("MTG_QingS_SC01"); //修改后
						dataTemp.setNTU(Tools.isNumeric(sheet.getCell(2,i).getContents())? null:Double.parseDouble(sheet.getCell(2,i).getContents()));
						dataTemp.setCl(Tools.isNumeric(sheet.getCell(3,i).getContents())? null:Double.parseDouble(sheet.getCell(3,i).getContents()));
						dataTemp.setFe(Tools.isNumeric(sheet.getCell(4,i).getContents())? null:Double.parseDouble(sheet.getCell(4,i).getContents())); //修改前
//						dataTemp.setFe(sheet.getCell(4,i).getContents()); // 修改后
						dataTemp.setAl(Tools.isNumeric(sheet.getCell(5,i).getContents())?null:Double.parseDouble(sheet.getCell(5,i).getContents()));
						operateSuccess=(outStatService.addOutStat(dataTemp)>0);	//添加到数据库
						
					}
				} //for
			} //try
			catch(Exception e){
				e.printStackTrace();
				ServletActionContext.getServletContext().setAttribute("errorMsg", "文件上传错误！");
				operateSuccess = false;
			}
			workBook.close(); //关闭
		}//upload!=null
		else{
			operateSuccess=false;
			ServletActionContext.getServletContext().setAttribute("errorMsg", "请选择上传文件");
		}
		return SUCCESS;
	}


	public String importCheck() throws Exception{
		String errMsg = null ;
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
			Sheet sheet = workBook.getSheet(0); //只取第一个sheet的值
			//得到当前天数
//			String sheetName = sheet.getName(); //修改前
			try{
				for(int i=2;i<sheet.getRows();i++){
//				Date day= (new SimpleDateFormat("yyyy-MM-dd").parse(sheetName)); //修改前
				//String poolIDTemp=sheet.getCell(0,2).getContents(); //修改前
				String day = sheet.getCell(0,i).getContents();
				String poolIDTemp="MTG_QingS_SC01"; //修改后
//				String sql="from OutStat where 1=1 "; //修改前
				String sql="from OutStat where PoolID like '%"+poolIDTemp+"'"; //修改后
//				sql+= "and Convert(varchar,t,120) like '%"+sheetName+"%'"; //修改前
				sql+= "and Convert(varchar,t,120) like '%"+day+"%'"; //修改后 dd/mm/yy ---103 ,yyyy/mm/dd ---120
//				sql+=" and PoolID like '%"+poolIDTemp+"'"; //修改前
				List<OutStat> list = outStatService.findBySql(sql);
				if(null == list||list.isEmpty()){
					errMsg="";
					operateSuccess=true;
				}
				else{
					errMsg = "文件冲突，已存在相关信息！";	
					operateSuccess=false;
				}
				} //for 修改后
			}catch(Exception e){
				e.printStackTrace();
				errMsg="文件格式不正确";
				operateSuccess = false;
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
