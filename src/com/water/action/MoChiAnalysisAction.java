package com.water.action;

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
import java.util.Collections;
import java.util.Comparator;
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
import com.water.beans.DataAnalysis;
import com.water.beans.MoChiAnalysis;
import com.water.service.MoChiAnalysisService;
//import com.water.util.JsonTreeData;
import com.water.util.ListSort;
//import com.water.util.ListTool;
import com.water.util.TimeTree;
import com.water.util.Tools;
import com.water.util.TreeNode;


@SuppressWarnings("serial")
public class MoChiAnalysisAction extends ActionSupport{
	private String dateTemp; /*传递时间参数有问题，作为中间变量传入*/

	public String getDateTemp() {
		return dateTemp;
	}

	public void setDateTemp(String dateTemp) {
		this.dateTemp = dateTemp;
	}

	//导入的文件路径和文件名,文件类型


	private static File   upload;
	private static String uploadFileName;
	private static String uploadContentType;

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

	private MoChiAnalysisService moChiAnalysisService;

	private MoChiAnalysis moChiAnalysis; 

	//查询条件
	private String searchPoolID=null;
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

	private int state=0; //标识导出失败的原因  1-未查询到相关数据 2-程序异常

	public int getState() {
		return state;
	}

	public void setState(int state) {
		this.state = state;
	}


	private Date searchT=null;

	public Date getSearchT() {
		return searchT;
	}

	public void setSearchT(Date searchT) {
		this.searchT = searchT;
	}

	private int page;//  当前第几页
	private Map<String, Object> data = new HashMap<String, Object>();// 封装数据
	private int size; // 页面大小，页面是rows
	private String order;//排序方向，desc和asc
	private String sort;  // 排序属性名

	// 标识操作是否成功
	private boolean operateSuccess;

	// set注入
	public void setMoChiAnalysisService(MoChiAnalysisService moChiAnalysisService) {
		this.moChiAnalysisService = moChiAnalysisService;
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

	public MoChiAnalysis getMoChiAnalysis() {
		return moChiAnalysis;
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

	public void setMoChiAnalysis(MoChiAnalysis moChiAnalysis) {
		this.moChiAnalysis = moChiAnalysis;
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

		List<MoChiAnalysis> searchList = moChiAnalysisService.findAll();
		List<String> tlist = new ArrayList<String>();
		DateFormat sdFormat=new SimpleDateFormat("yyyy-MM-dd");
		for(MoChiAnalysis s:searchList){
			tlist.add(sdFormat.format(s.getT()));
		}
		List <TreeNode> timeTree = TimeTree.convert(TimeTree.buildTree(tlist));
		data.put("tlist", timeTree);
		data.put("total", moChiAnalysisService.findTotal());// 总记录数
		data.put("rows", searchList);
		return "success";
	}

	/**
	 * 添加一项数据
	 * @throws ParseException 
	 */
	public String addMoChiAnalysis() throws ParseException {
		moChiAnalysis.setT((new SimpleDateFormat( "yyyy-MM-dd HH")).parse(dateTemp));
		operateSuccess = (moChiAnalysisService.addMoChiAnalysis(moChiAnalysis) > 0);
		return "success";
	}

	/**
	 * 更新一项数据
	 * @throws ParseException 
	 */
	public String updateMoChiAnalysis() throws ParseException {
		moChiAnalysis.setT((new SimpleDateFormat( "yyyy-MM-dd HH")).parse(dateTemp));
		System.out.println(new SimpleDateFormat("yyyy-MM-dd HH").format(moChiAnalysis.getT()));
		operateSuccess = (moChiAnalysisService.updateMoChiAnalysis(moChiAnalysis) > 0);
		return "success";
	}

	/**
	 * 删除一项数据
	 */
	public String deleteMoChiAnalysis() {
		operateSuccess = (moChiAnalysisService.deleteMoChiAnalysis(moChiAnalysis.getID()) > 0);
		return "success";
	}

	/**
	 * 通过ID查询数据
	 */
	public String findMoChiAnalysis() {
		moChiAnalysis = moChiAnalysisService.findMoChiAnalysisById(moChiAnalysis.getID());
		return "success";
	}




	public static final Comparator<MoChiAnalysis> COMPARATOR = new Comparator<MoChiAnalysis>() {
		public int compare(MoChiAnalysis data1, MoChiAnalysis data2) {
			return data1.compareTo(data2);
		}
	};


	/**
	 * 通过设置查询条件查询
	 */
	public String searchMoChiAnalysis() {
		String sql;
		DateFormat sdFormat=new SimpleDateFormat("yyyy-MM-dd");
		DateFormat sdFormat2=new SimpleDateFormat("yyyy.MM.dd");
		//查询条件拼接
		if(lowT==null && highT==null && searchPoolID ==null){
			sql="from MoChiAnalysis";
		}
		else {
			sql="from MoChiAnalysis where 1=1";
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
		List<MoChiAnalysis> searchList = moChiAnalysisService.findBySql(sql);
		Collections.sort(searchList, COMPARATOR);
		List<String> tlist = new ArrayList<String>();
		for(MoChiAnalysis s:searchList){
			tlist.add(sdFormat.format(s.getT()));
		}
		List <TreeNode> timeTree = TimeTree.convert(TimeTree.buildTree(tlist));
		data.put("tlist", timeTree);
		data.put("total", searchList.size());// 查询的结果总数
		data.put("rows", searchList);// 查询的结果
		return "success";
	}


	@SuppressWarnings("unchecked")
	public String export2excel(){
		String sql;
		DateFormat sdFormat2=new SimpleDateFormat("yyyy.MM.dd");
		if(lowT==null && highT==null && searchPoolID ==null){
			sql="from MoChiAnalysis";
		}
		else {
			sql="from MoChiAnalysis where 1=1";
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
		List<MoChiAnalysis> list = moChiAnalysisService.findBySql(sql);
		if(list.isEmpty()){
			System.out.println("没有查到数据，无法导出");
			operateSuccess=false;
			state =1; //没有查到数据
			return SUCCESS;
		}
		//		List<MoChiAnalysis> list=(List<MoChiAnalysis>) data.get("rows");
		WritableWorkbook book = null;
		File uploadFile = new File(ServletActionContext.getServletContext().getRealPath("/downloadTempForMochi"));
		//判断上述路径是否存在，如果不存在则创建该路径
		if (!uploadFile.exists()) {
			uploadFile.mkdir();
		}
		try{
			//打开文件
			//			if(downloadFilename==null || downloadFilename.isEmpty())
			//			{
			//				//导出文件名默认为MoChiAnalysis
			////				filename=(new SimpleDateFormat("yyyyMMdd-HHmmss")).format(System.currentTimeMillis());
			//				downloadFilename="MoChiAnalysis";
			//			}			
			String path=ServletActionContext.getServletContext().getRealPath("//downloadTempForMochi")+"//MoChiAnalysis.xls";

			//			String path="D://数据分析表-"+exportFileName+".xls";
			book = Workbook.createWorkbook(new File(path));
			//			//生成工作表
			//			WritableSheet sheet = book.createSheet("sheet1", 0);
			//
			//			//给sheet电子版中所有的列设置默认的列的宽度;  
			//			sheet.getSettings().setDefaultColumnWidth(15);
			//			sheet.setColumnView(1, 20);//给第二列设置列宽 
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

			//	List<MoChiAnalysis> list = moChiAnalysisService.findAll();
			if(list!=null && !list.isEmpty()){
				ListSort<MoChiAnalysis> listSort = new ListSort<MoChiAnalysis>();
				listSort.Sort(list, "getT","asc"); //排序
				DateFormat sdfDay = new SimpleDateFormat("yyyy-MM-dd");
				DateFormat sdf = new SimpleDateFormat("HH");

				String tempT = sdfDay.format(list.get(0).getT());
				WritableSheet sheet = book.createSheet(tempT, 0);
				//给sheet电子版中所有的列设置默认的列的宽度;  
				sheet.getSettings().setDefaultColumnWidth(15);
				sheet.setColumnView(1, 20);//给第二列设置列宽 
				sheet.mergeCells(0, 0, 9, 0); //合并单元格，用于显示标题
				sheet.addCell(new Label(0,0, "超 滤 膜 系 统 运 行 工 况 记 录 表",formatTitle));
				//添加表头
				sheet.addCell(new Label(0,1," 时间 ",formatHead));
				sheet.addCell(new Label(1,1," 膜组编号 ",formatHead));
				sheet.addCell(new Label(2,1," 进膜压力Mpa ",formatHead));
				sheet.addCell(new Label(3,1," 出水压力Mpa ",formatHead));
				sheet.addCell(new Label(4,1," 跨膜压差Mpa ",formatHead));
				sheet.addCell(new Label(5,1," 进水流量(m³) ",formatHead));				
				sheet.addCell(new Label(6,1," 进膜浊度(NTU) ",formatHead));
				sheet.addCell(new Label(7,1," 出膜浊度(NTU) ",formatHead));
				sheet.addCell(new Label(8,1," 进膜藻类(万个/L) ",formatHead));
				sheet.addCell(new Label(9,1," 出膜藻类(万个/L) ",formatHead));

				int j=2;
				for(int i=0;i<list.size();i++){
					String day = sdfDay.format(list.get(i).getT());
					if (day.equals(tempT)){					
						sheet.addCell(new Label(0,j,sdf.format(list.get(i).getT()),formatBody));
						sheet.addCell(new Label(1,j,Tools.transPoolID(list.get(i).getPoolID()),formatBody));
						sheet.addCell(new Label(2,j,list.get(i).getInPress()==null?"":Double.toString(list.get(i).getInPress()),formatBody));
						sheet.addCell(new Label(3,j,list.get(i).getOutPress()==null?"":Double.toString(list.get(i).getOutPress()),formatBody));
						sheet.addCell(new Label(4,j,list.get(i).getDiffPress()==null?"":Double.toString(list.get(i).getDiffPress()),formatBody));
						sheet.addCell(new Label(5,j,list.get(i).getInFlow()==null?"":Double.toString(list.get(i).getInFlow()),formatBody));
						sheet.addCell(new Label(6,j,list.get(i).getInNTU()==null?"":Double.toString(list.get(i).getInNTU()),formatBody));
						sheet.addCell(new Label(7,j,list.get(i).getOutNTU()==null?"":Double.toString(list.get(i).getOutNTU()),formatBody));
						sheet.addCell(new Label(8,j,list.get(i).getInAlga()==null?"":Double.toString(list.get(i).getInAlga()),formatBody));
						sheet.addCell(new Label(9,j,list.get(i).getOutAlga()==null?"":Double.toString(list.get(i).getOutAlga()),formatBody));
						j=j+1;
					}else{ //新建个sheet
						j=2;
						tempT = day;
						sheet = book.createSheet(tempT, 0);
						//给sheet电子版中所有的列设置默认的列的宽度;  
						sheet.getSettings().setDefaultColumnWidth(15);
						sheet.setColumnView(1, 20);//给第二列设置列宽 
						sheet.mergeCells(0, 0, 9, 0); //合并单元格，用于显示标题
						sheet.addCell(new Label(0,0, "超 滤 膜 系 统 运 行 工 况 记 录 表",formatTitle));
						//添加表头
						//				sheet.addCell(new Label(0,1," 编号 ",formatHead));
						//添加表头
						sheet.addCell(new Label(0,1," 时间 ",formatHead));
						sheet.addCell(new Label(1,1," 膜组编号 ",formatHead));
						sheet.addCell(new Label(2,1," 进膜压力Mpa ",formatHead));
						sheet.addCell(new Label(3,1," 出水压力Mpa ",formatHead));
						sheet.addCell(new Label(4,1," 跨膜压差Mpa ",formatHead));
						sheet.addCell(new Label(5,1," 进水流量(m³) ",formatHead));
						sheet.addCell(new Label(6,1," 进膜浊度(NTU) ",formatHead));
						sheet.addCell(new Label(7,1," 出膜浊度(NTU) ",formatHead));
						sheet.addCell(new Label(8,1," 进膜藻类(万个/L) ",formatHead));
						sheet.addCell(new Label(9,1," 出膜藻类(万个/L) ",formatHead));

						sheet.addCell(new Label(0,j,sdf.format(list.get(i).getT()),formatBody));
						sheet.addCell(new Label(1,j,Tools.transPoolID(list.get(i).getPoolID()),formatBody));
						sheet.addCell(new Label(2,j,list.get(i).getInPress()==null?"":Double.toString(list.get(i).getInPress()),formatBody));
						sheet.addCell(new Label(3,j,list.get(i).getOutPress()==null?"":Double.toString(list.get(i).getOutPress()),formatBody));
						sheet.addCell(new Label(4,j,list.get(i).getDiffPress()==null?"":Double.toString(list.get(i).getDiffPress()),formatBody));
						sheet.addCell(new Label(5,j,list.get(i).getInFlow()==null?"":Double.toString(list.get(i).getInFlow()),formatBody));
						sheet.addCell(new Label(6,j,list.get(i).getInNTU()==null?"":Double.toString(list.get(i).getInNTU()),formatBody));
						sheet.addCell(new Label(7,j,list.get(i).getOutNTU()==null?"":Double.toString(list.get(i).getOutNTU()),formatBody));
						sheet.addCell(new Label(8,j,list.get(i).getInAlga()==null?"":Double.toString(list.get(i).getInAlga()),formatBody));
						sheet.addCell(new Label(9,j,list.get(i).getOutAlga()==null?"":Double.toString(list.get(i).getOutAlga()),formatBody));
						j=j+1;
					}
				}
			}//if
			System.out.println("--写入excel:"+path+"--");
			//写入数据并关闭文件
			book.write();
			operateSuccess=true;
		}catch(Exception e){
			e.printStackTrace();
			state=2;
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
			}catch(Exception e){
				e.printStackTrace();
				ServletActionContext.getServletContext().setAttribute("errorMsg", uploadFileName+ "数据导入发生错误！");
				operateSuccess=false;
			}
			Sheet sheet = workBook.getSheet(0); //只取第一个sheet的值
			//得到当前天数
			String sheetName = sheet.getName();
			Date day=new Date();
			try{
				day= (new SimpleDateFormat("yyyy-MM-dd").parse(sheetName));
			}catch(Exception e){
				e.printStackTrace();
				ServletActionContext.getServletContext().setAttribute("errorMsg", "文件格式不正确！");
				operateSuccess = false;
			}
			String poolIDTemp=sheet.getCell(1,2).getContents();
			String poolID = poolIDTransform(poolIDTemp); //修改后
			String sql="delete from MoChiAnalysis where PoolID like '%"+poolID+"'"; //修改后
			sql+= " and Convert(varchar,t,120)  like '%"+sheetName+"%'";
			System.out.println("sql:"+sql);
			// 直接覆盖
			int deleteResult = moChiAnalysisService.bulkUpadte(sql);
			System.out.println("受影响结果："+deleteResult);
			for(int i=2;i<sheet.getRows();i++){ //从第三行开始

				if(null==sheet.getCell(1,i).getContents() || ""==sheet.getCell(1,i).getContents())
				{	
					continue;
				}
				else{
					MoChiAnalysis dataTemp = new MoChiAnalysis();
					dataTemp.setID(0);
					try{
						int hour = Integer.parseInt(sheet.getCell(0,i).getContents());
						Date datetime = new Date();
						datetime.setTime(day.getTime()+hour*3600*1000);
						dataTemp.setT(datetime);
//						dataTemp.setPoolID(sheet.getCell(1,i).getContents()); //修改前
						dataTemp.setPoolID(poolIDTransform(sheet.getCell(1,i).getContents())); //修改后
						dataTemp.setInPress(Tools.isNumeric(sheet.getCell(2,i).getContents())?Double.parseDouble(sheet.getCell(2,i).getContents()):null);
						dataTemp.setOutPress(Tools.isNumeric(sheet.getCell(3,i).getContents())?Double.parseDouble(sheet.getCell(3,i).getContents()):null);
						dataTemp.setDiffPress(Tools.isNumeric(sheet.getCell(4,i).getContents())?Double.parseDouble(sheet.getCell(4,i).getContents()):null);
						dataTemp.setInFlow(Tools.isNumeric(sheet.getCell(5,i).getContents())?Double.parseDouble(sheet.getCell(5,i).getContents()):null);
						dataTemp.setInNTU(Tools.isNumeric(sheet.getCell(6,i).getContents())?Double.parseDouble(sheet.getCell(6,i).getContents()):null);
						dataTemp.setOutNTU(Tools.isNumeric(sheet.getCell(7,i).getContents())?Double.parseDouble(sheet.getCell(7,i).getContents()):null);
						dataTemp.setInAlga(Tools.isNumeric(sheet.getCell(8,i).getContents())?Double.parseDouble(sheet.getCell(8,i).getContents()):null);
						dataTemp.setOutAlga(Tools.isNumeric(sheet.getCell(9,i).getContents())?Double.parseDouble(sheet.getCell(9,i).getContents()):null);
						System.out.println(dataTemp.getID());
						System.out.println("import2DB-----dataTemp:"+dataTemp);
						operateSuccess=(moChiAnalysisService.addMoChiAnalysis(dataTemp)>0);	//添加到数据库
					}catch(Exception e){
						e.printStackTrace();
					}
				}
			} //for
			workBook.close(); //关闭

		}//upload!=null
		else{
			operateSuccess=false;
			ServletActionContext.getServletContext().setAttribute("errorMsg", "请选择上传文件");
		}
		return "success";
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

				Sheet sheet = workBook.getSheet(0); //只取第一个sheet的值
				//得到当前天数
				String sheetName = sheet.getName();
				Date day=new Date();

				day= (new SimpleDateFormat("yyyy-MM-dd").parse(sheetName));
				String poolIDTemp=sheet.getCell(1,2).getContents();
				String poolID = poolIDTransform(poolIDTemp); // 修改后
				System.out.println(poolID);
				String sql="from MoChiAnalysis where 1=1 ";
				sql+= "and Convert(varchar,t,120) like '%"+sheetName+"%'";
//				sql+=" and PoolID like '%"+poolIDTemp+"'"; //修改前
				sql+=" and PoolID like '%"+poolID+"'"; //修改后
				List<MoChiAnalysis> list = moChiAnalysisService.findBySql(sql);
				System.out.println("sql:"+sql+",result:"+list.size());
				if(null == list||list.isEmpty()){
					errMsg="";
					operateSuccess=true;
				}
				else{
					errMsg = "文件冲突，已存在相关信息！";	
					operateSuccess=false;
				}
			}catch(Exception e){
				e.printStackTrace();
				errMsg="文件格式不正确";
				operateSuccess = false;
			}

		}else{ //upload=''
			errMsg = "请选择上传文件！";
			operateSuccess=false;
		}
		System.out.println("errMsg:"+errMsg);
		ServletActionContext.getServletContext().setAttribute("errorMsg",errMsg);
		return SUCCESS;
	}
	
	// 修改后
	private String poolIDTransform (String poolIDExcel){
		String poolID;
		if ("1# 膜池".equals(poolIDExcel)){
			poolID = "MTG_MoChi_SC01";
		}else if("2# 膜池".equals(poolIDExcel)){
			poolID = "MTG_MoChi_SC02";
		}else if("3# 膜池".equals(poolIDExcel)){
			poolID = "MTG_MoChi_SC03";
		}else if("4# 膜池".equals(poolIDExcel)){
			poolID = "MTG_MoChi_SC04";
		}else if("5# 膜池".equals(poolIDExcel)){
			poolID = "MTG_MoChi_SC05";
		}else if("6# 膜池".equals(poolIDExcel)){
			poolID = "MTG_MoChi_SC06";
		}else {
			poolID = "omg";
		}
		return poolID;
		} //poolIDTransform	
}
