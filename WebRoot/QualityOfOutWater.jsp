<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
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
		height: 40px;
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
		height: 400px;
		padding: 5px;
		border: 1px solid #95B8E7;
		overflow: scroll;
	}

	#treeGuid p {
		color: #223bb8;
		font-weight: bold;
		font-size: 18px;
		text-align: left;
	}

	#chooseIndex {
		position: relative;
		top: 10px;
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
		position: absolute;
		top: 520px;
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
	background-color: #3399FF; 
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
	background-color: #3399FF; 
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
		position: absolute;
		left: 25px;
		top: 830px;
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
    <li><a href="main.jsp">运行评估</a></li>
    <li class="active">出水水质分析</li>
    </ol>
	<div id="myPage">
		<div id="myContent">
			<div id="tab_entity">
				<table id="outStatbody" class="easyui-datagrid"></table>
				<div id="gap"></div>
				<div id="imageContainer"></div>
			</div>
			<div id="rightContainer">
				<div id="treeGuid">
					<p>选择时间:</p>
					<ul id="timeTree" class="easyui-tree"></ul>
				</div>
				<div id="chooseIndex">
					<form id="indexForm">
						<p style="color:#223bb8; font-weight:bold;font-size:18px">请选择出水池编号：</p>
						<input type="radio" id="index1" class="radioItem" name="chooseIndexButton" value="index1" /><label for="index1">1#出水池</label><br />
						<input type="radio" id="index2" class="radioItem" name="chooseIndexButton" value="index2" /><label for="index2">2#出水池</label><br />
						<input type="radio" id="index3" class="radioItem" name="chooseIndexButton" value="index3" checked="checked" /><label for="index3">3#出水池</label><br />
					</form>
				</div>
				<div id="icon">
					<div class="menuBar" id="menu">菜单</div>
	        		<div class="menuSecond" id="add">添加</div>
    	    		<div class="menuSecond" id="edit">编辑</div>
        			<div class="menuSecond" id="delete">删除</div>
        			<div class="menuSecond" id="search">查询</div>
        			<div class="menuSecond" id="export">导出</div>
	        		<div class="menuSecond" id="import">导入</div>
    	    		<!-- <div class="menuSecond" id="template"><a href="download/OutStat.xls" style="height:50px">模板</a></div> -->
				</div>
				<div id="tab_export" style="display:none">
					<form action="${pageContext.request.contextPath}/importDataAnalysis"
						name="uploadForm" enctype="multipart/form-data" method="post">
						<input id="upload" type="file" name="upload" style="display:none" onchange="fakeUpload.value=value" /> 
						<input id="btn-select" type="button" class="btn btn-primary" value="选择文件" 
							onclick="javascript:upload.click()"
							style="width:134px; font-size:18px; background-color:#3399FF" /><br /> 
						<input id="fakeUpload" name="fakeUpload" type="text" 
							ondblclick="javascript:upload.click()"
							style="width:134px; height:35px; border:1px solid #95B8E7" /><br />
						<input id="btn-import" class="btn btn-primary"
							onclick="javascript:import2DB();fakeUpload.value='';"
							style="font-size:18px; width:65px; background-color:#3399FF" value="确定" />
						<input id="btn-cancel" class="btn btn-primary"
							style="font-size:18px; width:65px; background-color:#3399FF" value="取消"/>
					</form>
				</div>
			</div>
		</div>
		<center>
			<div id="tableEdit" class="easyui-dialog" data-options="closed:true">
				<form id="formEdit">
					<table>
						<tr>
							<td><input id="ID" name="outStat.ID" type="hidden" /></td>
						</tr>
						<tr>
							<td>时间</td>
							<td><input id="t" name="outStat.t" type="text" class="easyui-datebox"
									style="width: 200px; height: 25px"/></td>
							<td>编号</td>
							<td><select id="PoolID" name="outStat.PoolID" type="text" class="easyui-combobox"
									style="width: 200px; height: 25px">
									<option value="MTG_JJC_SC01" selected>1#出水池</option>
									<option value="MTG_JJC_SC02">2#出水池</option>
									<option value="MTG_JJC_SC03">3#出水池</option>
								</select>
							</td>
						</tr>
						<tr>
							<td>浊度</td>
							<td>
								<input id="NTU" name="outStat.NTU" type="text" class="easyui-numberbox"
									style="width: 200px; height: 25px" data-options="prompt:'',precision:3"/></td>
							</td>
							<td>余氯</td>
							<td>
								<input id="CL" name="outStat.Cl" type="text" class="easyui-numberbox"
									style="width: 200px; height: 25px" data-options="prompt:'',precision:3"/></td>
							</td>
						</tr>
						<tr>
							<td>铁</td>
							<td>
								<input id="Fe" name="outStat.Fe" type="text" class="easyui-numberbox"
									style="width: 200px; height: 25px" data-options="prompt:'',precision:3"/></td>
							</td>
							<td>铝</td>
							<td>
								<input id="AL" name="outStat.Al" type="text" class="easyui-numberbox"
									style="width: 200px; height: 25px" data-options="prompt:'',precision:3"/></td>
							</td>
						</tr>
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
							<th style="width: 102px; height: 26px">出水池编号</th>
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
									<option value="MTG_JJC_SC01" selected>出水池01#</option>
									<option value="MTG_JJC_SC02">出水池02#</option>
									<option value="MTG_JJC_SC03">出水池03#</option>
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
			<div id="searchArea" class="easyui-dialog" data-options="closed:true">
				<form id="fromSearch" >
					<table>
						<tr>
							<td>时间 : </td>
							<td style="width: 200px; height: 30px"><input id="searchT" name="searchT" type="text" class="easyui-datebox"
									style="width: 200px; height: 25px"/></td>
						</tr>
						<tr></tr>
						<tr>
							<td>编号: </td>
							<td style="width: 200px; height: 30px"><select id="searchPoolID" name="searchPoolID" type="text" class="easyui-combobox"
									style="width: 200px; height: 25px">
									<option value="MTG_JJC_SC01" selected>出水池01#</option>
									<option value="MTG_JJC_SC02">出水池02#</option>
									<option value="MTG_JJC_SC03">出水池03#</option>
								</select>
							</td>
						</tr>
					</table>
				</form>
			</div>
		</center>
	</div>
	<jsp:include page="down.jsp" />
</body>
</html>
