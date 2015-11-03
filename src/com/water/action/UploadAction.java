package com.water.action;
/**  
 * @projectName ZLS-ITTC  
 * @author chenhua 
 * @date 2015年11月1日 
 */

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

import java.io.FileInputStream;
import java.io.FileOutputStream;


public class UploadAction extends ActionSupport { 
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private List<File> uploads;
	
	private List<String> uploadFileName;
	
	private List<String> uploadContentType;
	
	private Map<String,Object> data = new HashMap<String,Object>();
	public Map<String, Object> getData() {
		return data;
	}

	public void setData(Map<String,Object> data) {
		this.data = data;
	}

	private long maximumSize;
	
    private String allowedTypes;

	public List<File> getUpload() {
		return uploads;
	}

	public void setUpload(List<File> uploads) {
		this.uploads = uploads;
	}

	public List<String> getUploadFileName() {
		return uploadFileName;
	}

	public void setUploadFileName(List<String> uploadFileName) {
		this.uploadFileName = uploadFileName;
	}

	public List<String> getUploadContentType() {
		return uploadContentType;
	}

	public void setUploadContentType(List<String> uploadContentType) {
		this.uploadContentType = uploadContentType;
	}

	public long getMaximumSize() {
		return maximumSize;
	}

	public void setMaximumSize(long maximumSize) {
		this.maximumSize = maximumSize;
	}

	public String getAllowedTypes() {
		return allowedTypes;
	}

	public void setAllowedTypes(String allowedTypes) {
		this.allowedTypes = allowedTypes;
	}

	public String upload() throws Exception {
		//取得文件上传路径（用于存放上传的文件）
		File uploadFile = new File(ServletActionContext.getServletContext().getRealPath("/uploadFiles"));
		//判断上述路径是否存在，如果不存在则创建该路径
		if (!uploadFile.exists()) {
			uploadFile.mkdir();
		}
		
		if(uploads != null){
			String[] allowedTypesStr = allowedTypes.split(",");
			//将允许的文件类型列表放入List中
			List allowedTypesList = new ArrayList();
			for(int i = 0;i < allowedTypesStr.length; i++){
				allowedTypesList.add(allowedTypesStr[i]);
			}
			
			//判断上传文件的类型是否是允许的类型之一
			for(int i = 0; i < uploads.size();i++){
				if(!allowedTypesList.contains(uploadContentType.get(i))){
					System.out.println("上传文件中包含非法文件类型");
					ServletActionContext.getServletContext().setAttribute("errorMsg", "上传文件中包含非法文件类型");
					return "error";
				}
			}
			
			//判断文件的大小
			for(int i = 0 ;i < uploads.size();i++){
				
				// 判断文件长度
				if (maximumSize < uploads.get(i).length()) {
					ServletActionContext.getServletContext().setAttribute("errorMsg", uploadFileName.get(i)+ "文件过大");
					return "error";
				}
			}
			
			for(int i = 0; i < uploads.size();i++){
				// 第一种文件上传的读写方式
				FileInputStream input = new FileInputStream(uploads.get(i));
				FileOutputStream out = new FileOutputStream(uploadFile + "\\" + uploadFileName.get(i));
				
				try{
					byte[] b = new byte[1024];
					int m = 0;
					while ((m = input.read(b)) > 0) {
						out.write(b, 0, m);
					}
				}catch(Exception e){
					e.printStackTrace();
					ServletActionContext.getServletContext().setAttribute("errorMsg", uploadFileName.get(i) + "上传过程中发生未知错误，请联系管理员。上传失败！");
					return "error";
				}finally{
					input.close();
					out.close();
					//删除临时文件
					uploads.get(i).delete();
				}
			}
			return "success";
		}else{
			ServletActionContext.getServletContext().setAttribute("errorMsg", "请选择上传文件");
			return "error";
		}
	}

	public String listFiles() throws Exception{
		data.clear();// 清除
		//获取上传文件的目录
		String uploadFilePath= ServletActionContext.getServletContext().getRealPath("/uploadFiles");
		//递归遍历filepath目录下的所有文件和目录，将文件的文件名存储到map集合中
		//File既可以代表一个文件也可以代表一个目录
		List filelist = new ArrayList<File>();
		List<File> filelist2 = new ArrayList<File>();
		File dir=new File(uploadFilePath);
		File []files=dir.listFiles();
		
		data.put("total",files.length);
		data.put("rows",files);

		//将Map集合发送到listfile.jsp页面进行显示
		return "success";
	}

}