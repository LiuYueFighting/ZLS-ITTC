<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<%if(null == request.getSession().getAttribute("user")){
       response.getWriter().write("<script>window.location.href = 'notSignIn.jsp'</script>");
     }
%>
<!DOCTYPE html PUBLIC 
	"-//W3C//DTD XHTML 1.0 Transitional//EN" 
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
	<base href="<%=basePath%>" />

	<meta charset="UTF-8">
	<meta http-equiv="Access-Control-Allow-Origin" content="*">
	<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
	
	<title>北京自来水集团工艺平台</title>

	<link rel="stylesheet" type="text/css" href="" />
	<link rel="stylesheet" href="css/bootstrap.min.css" />
	<link rel="stylesheet" href="font-awesome/css/font-awesome.min.css" />
	<link rel="stylesheet" href="css/top_down.css" />
	<link rel="stylesheet" href="css/breadcrumb.css" />
	<link rel="stylesheet" type="text/css" href="easyui/themes/default/easyui.css" />
	<link rel="stylesheet" type="text/css" href="easyui/themes/icon.css" />
	<link rel="stylesheet" type="text/css" href="style/myeasyui.css" />

	<script src="js/bootstrap.min.js"></script>
	<script type="text/javascript" src="easyui/jquery.min.js"></script>
	<script type="text/javascript" src="easyui/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="easyui/locale/easyui-lang-zh_CN.js"></script>
	<script type="text/javascript" src="highcharts/highstock.js"></script>
	<script type="text/javascript" src="highcharts/exporting.src.js"></script>
	<script type="text/javascript" src="highcharts/themes/grid.js"></script>
	<script type="text/javascript" src="js/ajaxfileupload.js"></script>
	<script type="text/javascript" src="js/qualityOfOutWater.js"></script>
</head>
<style type="text/css">
	/*
	body, div, p, table, tr, th, td, a, input, select {
		padding: 0;
		margin: 0;
		border: 0;
	} */

	body {
		background: #AFD9EE;
	}

	#myPage {
		position: relative;
		font-family: '微软雅黑', 'Source Sans Pro';
		font-size: 15px;
		width: 1600px;
		height: 1150px;
		margin: 0px auto;
	}

	#myContent {
		position: relative;
		font-family: '微软雅黑', 'Source Sans Pro';
		width: 1600px;
		height: 1150px;
		top:15px;
		margin: 0px auto;
		overflow: hidden;
	}

	#tab_entity {
		position: absolute;
		top: 10px;
		left: 50px;
		width: 1300px;
		height: 300px;
	}

	#gap {
		width: 1300px;
		height: 15px;
	}

	#imageContainer {
		max-width: 1300px;
		height: 650px;
		/*border: 2px solid red;*/
	}

	#rightContainer {
		position: absolute;
		top: 10px;
		left: 1400px;
		width:200px;
	}

	#treeGuid {
		position: relative;
		top: 0px;
		width: 200px;
		height: 300px;
		padding: 5px;
		border: 1px solid #95B8E7;
		overflow: scroll;
	}

	#treeGuid p {
		color: #337ab7;
		font-weight: bold;
		font-size: 18px;
		text-align: left;
	}

	#chooseIndex {
		position: relative;
		top: 15px;
		width: 200px;
		height: 110px;
		padding: 5px;
		inline-height: 30px;
		text-align: left;
		border: 1px solid #95B8E7;
	}
/*
	#chooseIndex p {
		color: blue;
		font-weight: bold;
		font-size: 18px;
		text-align: left;
	}
*/
	#icon {
		position: relative;
		top: 40px;
		left: 0px;
		width: 180px;
		height: 180px;
 	}

 	#menu {  
 	line-height:70px;  
	font-family: '微软雅黑';
	font-weight: 100;
	font-size: 20px;
	border: 1px solid #CCCCCC;
	border-radius: 90%;
	color: #FFFFFF;
	background-color: #337ab7; 
	display: block;
	height: 70px;
	width: 70px;
	text-align:center;
	text-indent:0;
	position: absolute;
	left: 110px;
	top: 110px;
	z-index:999;
}

#menu:hover{
	cursor: pointer;
}


div.menuSecond{   
 	line-height:40px;  
	font-family: '微软雅黑';
	font-weight: 100;
	font-size: 16px;
	border: 1px solid #CCCCCC;
	border-radius: 90%;
	color: #FFFFFF;
	background-color: #337ab7; 
	display: block;
	height: 50px;
	width: 50px;
	text-align:center;
	text-indent:0;
}
.menuSecond:hover {
	background-color: rgba(0, 51, 255, 0.8);
	cursor: pointer;
	width: 60px;
	height: 60px;
	font-size: 18px;
	line-height:50px;
}

.menuSecond {
	position: absolute;
	top: 110px;
	left: 120px;
}

	
	#tab_export {
	position: relative;
	left: 25px;
	top: 170px;
	z-index: 999;
	font-size: 14px;
	width: 200px;
	}

	#tableEdit {
		align: center;
		width: 800px;
		height: 540px;
		padding: 10px 6px;
	}
	
	#tableAdd {
		align: center; 
		width: 700px; 
		height: 400px; 
		padding: 10px 60px;
	}
	
	#formAdd {
		width: 570px;
	}
	
	#addButton {
		position: relative;
		left: 469px;
		top: 5px;
	}
	
	#searchArea {
		align: center; 
		width: 400px; 
		height: 200px; 
		padding: 50px 60px;
	}
	
	#formSearch {
		height: 100px; 
		width: 250px;
	}
	
	
	th, td, input, option {
	text-align:center;
	}

</style>
<body>
	<jsp:include page="top.jsp" />
	<ol class="breadcrumb">
    <li><a href="main.jsp">首页</a></li>
    <li class="active">出水水质分析</li>
    </ol>
	<div id="myPage">
		<div id="myContent">
			<div id="tab_entity">
				<table id="outStatbody" class="easyui-datagrid"></table>
				<div id="gap"></div>
				<div id="imageContainer"></div>
			</div>
				
			<select  id="chooseIndexButton2" name="chooseIndexButton2" onchange="javascript:changeButton2()"
						 data-options="required:true,missingMessage:'请选择出水池编号' ">
									<option value="MTG_JJC_SC01">1#清水池</option>
									<option value="MTG_JJC_SC02">2#清水池</option>
									<option value="MTG_JJC_SC03"  selected>3#清水池</option>
			</select>
			
			
			<div id="rightContainer">
				<div id="treeGuid">
					<p>选择时间:</p>
					<ul id="timeTree" class="easyui-tree"></ul>
				</div>
				<div id="chooseIndex" style="display:none"> <!-- 不显示该模块 -->
					<form id="indexForm">
						<p style="color:#337ab7; font-weight:bold;font-size:18px">请选择清水池编号：</p>
						<input type="radio" id="index1" class="radioItem" name="chooseIndexButton" value="index1" /><label for="index1">1#出水池</label><br />
						<input type="radio" id="index2" class="radioItem" name="chooseIndexButton" value="index2" /><label for="index2">2#出水池</label><br />
						<input type="radio" id="index3" class="radioItem" name="chooseIndexButton" value="index3" checked="checked" /><label for="index3">3#出水池</label><br />
					</form>
				</div>
				<div id="icon">
					<div class="menuBar" id="menu">功能</div>
	        		<div class="menuSecond" id="add">添加</div>
    	    		<div class="menuSecond" id="edit">编辑</div>
        			<div class="menuSecond" id="delete">删除</div>
        			<div class="menuSecond" id="search">查询</div>
        			<div class="menuSecond" id="export">导出</div>
	        		<div class="menuSecond" id="import">导入</div>
    	    		<!-- <div class="menuSecond" id="template"><a href="download/OutStat.xls" style="height:50px">模板</a></div> -->
				</div>
				<div id="tab_Import" class="easyui-dialog" data-options="closed:true"
					style="align:center;width:500px;height:200px;padding:10px 60px 20px 60px">
					<form id="frmImportEdit" name="uploadForm" enctype="multipart/form-data" method="post">
						<br>
						<button type="button"  class="btn btn-primary" onclick=upload.click()>
					             <span class="fa fa-folder-open" style="font-size: 14px; "></span>浏览
					   </button>
						<input type=file name="upload" id="upload" style="display: none;" onchange="fakeUpload.value=value.replace(/.*fakepath\\/i, '')"s /> 
						<input id="fakeUpload" name="fakeUpload" type="text" ondblclick=upload.click()
							style="width: 260px; height: 35px; border: 1px solid #95B8E7;">						
					</form>	
				</div><!-- tab_Import -->
			
		</div>
		<center>
			<div id="tableEdit" class="easyui-dialog" data-options="closed:true">
				<form id="formEdit"><br />
						<input id="ID" name="outStat.ID" type="hidden" />
						<dl>
							&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; 时   间 : &nbsp;
							<input id="t" name="outStat.t" type="text" class="easyui-datebox"
									style="width: 200px; height: 25px"/>
							
							&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 水池编号 : &nbsp; 
							<select id="PoolID" name="outStat.PoolID" type="text" class="easyui-combobox"
									style="width: 200px; height: 25px">
									<option value="MTG_JJC_SC01" selected>1#清水池</option>
									<option value="MTG_JJC_SC02">2#清水池</option>
									<option value="MTG_JJC_SC03">3#清水池</option>
								</select>
							
						</dl>
						<dl>
							&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; 浊   度 : &nbsp;							
								<input id="NTU" name="outStat.NTU" type="text" class="easyui-numberbox"
									style="width: 200px; height: 25px" data-options="prompt:'',precision:3"/></td>
							
							&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  余  &nbsp;  &nbsp; &nbsp; 氯 : &nbsp;
							
								<input id="CL" name="outStat.Cl" type="text" class="easyui-numberbox"
									style="width: 200px; height: 25px" data-options="prompt:'',precision:3"/></td>
							
						</dl>
						<dl>
							&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; 铁 : &nbsp; &nbsp; &nbsp; 
							
								<input id="Fe" name="outStat.Fe" type="text" class="easyui-numberbox"
									style="width: 200px; height: 25px" data-options="prompt:'',precision:3"/></td>
							
							&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  铝 : &nbsp; &nbsp; &nbsp;
							
								<input id="AL" name="outStat.Al" type="text" class="easyui-numberbox"
									style="width: 200px; height: 25px" data-options="prompt:'',precision:3"/></td>
							
						</dl>
					</table>
				</form>
			</div>
			<div id="tableAdd" class="easyui-dialog" data-options="closed:true">
				<form id="formAdd">
					<table id="tab">
						<tr>
							<th style="width: 1px; height: 26px"></th>
							<th style="width: 1px; height: 26px"></th>
							<th style="width: 40px; height: 26px">序号</th>
							<th style="width: 152px; height: 26px">时间</th>
							<th style="width: 102px; height: 26px">清水池编号</th>
							<th style="width: 72px; height: 26px">出水浊度</th>
							<th style="width: 52px; height: 26px">CL</th>
							<th style="width: 52px; height: 26px">Fe</th>
							<th style="width: 52px; height: 26px">Al</th>
						</tr>
						<tr id="tr1">
							<td style="width: 1px; height: 26px">
								<input id="splitSign" name="split" type="hidden" style="width: 1px; height: 25px" /></td>
							<td style="width: 1px; height: 26px">
							<input id="ID" name="outStat.ID" type="hidden" style="width: 1px; height: 25px"/></td>
							<td style="width: 40px; height: 26px; text-align:center">1</td>
							<td style="width: 152px; height: 26px">
							<input id="t" name="outStat.t" type="date" style="width: 150px; height: 25px"/></td>
							<td style="width: 102px; height: 26px">
								<select id="PoolID" name="outStat.PoolID" type="text" style="width: 100px; height: 25px">
									<option value="MTG_JJC_SC01" selected>清水池01#</option>
									<option value="MTG_JJC_SC02">清水池02#</option>
									<option value="MTG_JJC_SC03">清水池03#</option>
								</select>
							</td>
							<td style="width: 72px; height: 26px">
								<input id="NTU" name="outStat.NTU" type="text" style="width: 70px; height: 25px" data-options="min:0,precision:3"/></td>
							</td>
							<td style="width: 52px; height: 26px">
								<input id="CL" name="outStat.Cl" type="text" style="width: 50px; height: 25px" data-options="min:0,precision:3"/></td>
							</td>
							<td style="width: 52px; height: 26px">
								<input id="Fe" name="outStat.Fe" type="text" style="width: 50px; height: 25px" data-options="min:0,precision:3"/></td>
							</td>
							<td style="width: 52px; height: 26px">
								<input id="AL" name="outStat.Al" type="text" style="width: 50px; height: 25px" data-options="min:0,precision:3"/></td>
							</td>
						</tr>
					</table>
					<a id="addButton" href="#" class="easyui-linkbutton"
						data-options="iconCls:'icon-add'">添加</a>
				</form>
			</div>
			<div id="searchArea" class="easyui-dialog" data-options="closed:true" 
					style="align: center; width: 500px; height: 400px; padding: 10px 60px 20px 60px">
				<form id="frmSearch" >
					<dl>
								<br /> 
								&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 起  &nbsp;始  &nbsp;日 &nbsp; 期 : &nbsp;
								<input class="easyui-datebox" style="width:150px" id="lowT" name="lowT"/ ><br/><br/>
							    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 结  &nbsp;束  &nbsp;日 &nbsp; 期 : &nbsp;	
							    <input class="easyui-datebox" style="width:150px" id="highT" name="highT"/ ><br /><br />
							    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 水  &nbsp;池 &nbsp; 编  &nbsp;号 : &nbsp; 
								<select class="easyui-combobox" style="width: 150px"
									id="searchPoolID" name="searchPoolID">
									<option value="MTG_JJC_SC01">1#清水池</option>
									<option value="MTG_JJC_SC02">2#清水池</option>
									<option value="MTG_JJC_SC03">3#清水池</option>
								</select>									
							</dl>
					<!-- <table>
						<tr>
							<td>时间  : </td>
							<td style="width: 200px; height: 30px"><input id="searchT" name="searchT" type="text" class="easyui-datebox"
									style="width: 200px; height: 25px"/></td>
						</tr>
						<tr></tr>
						<tr>
							<td>编号  : </td>
							<td style="width: 200px; height: 30px"><select id="searchPoolID" name="searchPoolID" type="text" class="easyui-combobox"
									style="width: 200px; height: 25px">
									<option value="MTG_JJC_SC01" selected>1#出水池</option>
									<option value="MTG_JJC_SC02">2#出水池</option>
									<option value="MTG_JJC_SC03">3#出水池</option>
								</select>
							</td>
						</tr>
					</table> -->
				</form><!-- fromSearm  -->
			</div><!-- searchArea -->
				<div id="searchAreaForExport" style="display: none; width: 400px">
					<div id="tabSearchForExport" class="easyui-dialog"
						data-options="closed:true"
						style="align: center; width: 500px; height: 400px; padding: 10px 60px 20px 60px">
						<form id="frmSearchForExport">
							<dl>
								<br /> 
								&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 起  &nbsp;始  &nbsp;日 &nbsp; 期 : &nbsp;
								<input class="easyui-datebox" style="width:150px" id="lowT" name="lowT"/ ><br/><br/>
							    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 结  &nbsp;束  &nbsp;日 &nbsp; 期 : &nbsp;	
							    <input class="easyui-datebox" style="width:150px" id="highT" name="highT"/ ><br /><br />
							    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 水  &nbsp;池 &nbsp; 编  &nbsp;号 : &nbsp; 
								<select class="easyui-combobox" style="width: 150px"
									id="searchPoolID" name="searchPoolID">
									<option value="MTG_JJC_SC01">1#清水池</option>
									<option value="MTG_JJC_SC02">2#清水池</option>
									<option value="MTG_JJC_SC03">3#清水池</option>
								</select>									
							</dl>
						</form><!-- frmSearchForExport -->
					</div><!-- tabSearchForExport -->
				</div><!-- searchAreaForExport -->
		</center>
		<div id="errMsg" name="errMsg" style="display: none"></div>
	</div>
	<jsp:include page="down.jsp" />
</body>
</html>
