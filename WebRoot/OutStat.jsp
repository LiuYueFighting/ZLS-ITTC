<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.ddd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
<base href="<%=basePath%>" />

<meta charset="UTF-8">
<meta http-equiv="Access-Control-Allow-Origin" content="*">
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>北京自来水集团工艺平台</title>

<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
<link rel="stylesheet" href="css/top_down.css">
<link rel="stylesheet" href="css/top_down.css">
<link rel="stylesheet" href="css/breadcrumb.css">

<link rel="stylesheet" type="text/css"
	href="easyui/themes/default/easyui.css" />
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
<script type="text/javascript" src="js/outStat.js"></script>

<style>
body {
	background: #afd9ee;
     }
     
#myPage {
	font-family: '微软雅黑','Source Sans Pro';
	font-size: 15px;
	width: 1600px;
	height: 1100px;
	margin:0px auto;
	}

#myContent {
	margin: 0px auto;
	position: relative;
	width: 1600px;
	height: 1100px;
	background-position: bottom;
}

#tab {
	cellspacing: 10px;
	cellpadding: 10px;
}

 
#tab_entity {
	position: absolute;
	top: 50px;
	left: 50px;
	width: 1300px;
}

#leftContainer {
	position: absolute;
	top: 50px;
	left: 1400px;
	width: 200px;
}

#treeGuid {
	position: relative;
	top: 0px;
	width: 200px;
	height: 400px;
	padding: 5px;
	border: 1px solid #95B8E7;
}

#chooseIndex {
	position: relative;
	top: 20px;
	width: 200px;
	height: 200px;
	padding: 5px;
	inline-height: 30px;
	border: 1px solid #95B87E;
	
	border: 0;
}


 

#tab_export {
	font-family: '微软雅黑', 'Arial';
	position: absolute;
	left: 25px;
	top: 320px;
	z-index: 999;
	font-size: 14px;
	width: 200px;
}

.legendTitle {
	color:blue;
	font-weight:bolder;
}

#legendTable tr, #legendTable td {
	padding: 5px;
	margin: 5px;
}

#addButton {
	position: relative;
	left: 1642px;
}

div.icon {
	position: absolute;
	top: 520px;
	left: 0px;
	width: 180px;
	height: 180px;
 	
}

div.menuBar {  
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

div.menuBar:hover{
	cursor: pointer;
}


div.menu{   
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
div.menu:hover{
	background-color: rgba(0, 51, 255, 0.8);
	cursor: pointer;
	width: 60px;
	height: 60px;
	font-size: 18px;
	line-height:50px;
}

.menu {
	position: absolute;
	top: 110px;
	left: 120px;
}

#template {
	vetical-align:middle;
}

#template:hover a{
	font-size: 18px;
	line-height:50px;
}

#template a {
	line-height:40px;  
	font-family: '微软雅黑';
	font-weight: 100;
	font-size: 16px;
	color: #FFFFFF;
	text-decoration:none;
}

#template a:hover {
	font-size: 18px;
	line-height:50px;
}


#tab_description {
	position: relative;
    font-family: '微软雅黑','Arial';
    top:40px;
    padding:5px;
    font-size:14px;
    width:220px;
    height:400px;
    border:1px solid #95B8E7
    }

#tab_description h1 {
    font-size:20px;
    color:#ff4400;
    font-weight:bold;
    }

#picLegend {
	position: relative;
	top: 60px;
	width: 220px;
	height: 200px;
	padding: 5px;
	border: 1px solid #95B8E7;	
	text-align:left;
	padding:5px;
	/* margin-top: 100px; */
}

#btn_group {
	position:absolute;
	top: 20px;
}

#addButton {
	position: relative;
	left: 1135px;
	top: 5px;
}

th, td, input {
	text-align:center;
}

</style>
</head>
<body>
	<jsp:include page="top.jsp" />

	<div id="myPage">
		<div id="myContent" style="overflow: hidden">
				<div id="btn_group" class="btn-group-vertical btn-group-lg" role="group" style="display:none">
    			<button id="btn_addRow" class="btn btn-primary" 
    				onclick="javascript:addPoolEvaluate()">添加</button>
				<button id="btn_editRow" class="btn btn-primary"
					onclick="javascript:editPoolEvaluate()">编辑</button>
				<button id="btn_deleteRow" class="btn btn-primary"
					onclick="javascript:deletePoolEvaluate()">删除</button>
				<button id="btn_searchAll" class="btn btn-primary"
					onclick="javascript:listAllPoolEvaluate()">查询全部</button>
				<button id="btn_search" class="btn btn-primary"
					onclick="javascript:searchPoolEvaluate()">条件查询</button>
				<button id="btn_export" class="btn btn-primary"
					onclick="javascript:export2excel()">导出</button>
			</div> 
			<!-- leftContainer -->
			<div id="leftContainer">
				<!-- treeGuid -->
				<div id="treeGuid" style="overflow:scroll">
					<p>选择时间:</p><br/>
					<!-- 树形导航菜单 -->
					<ul id="timeTree" class="easyui-tree"></ul>
				</div>
				<!-- chooseIndex -->
				<div id="chooseIndex">
					<form id="indexForm">
						<p style="color:blue; font-weight:bold;font-size:18px">请选择水池编号：</p>
						<input type="radio" id="index1" class="radioItem" name="chooseIndexButton" value="index1" /><label for="index1">机加池01#</label><br />
						<input type="radio" id="index2" class="radioItem" name="chooseIndexButton" value="index2" /><label for="index2">机加池02#</label><br />
						<input type="radio" id="index3" class="radioItem" name="chooseIndexButton" value="index3" checked="checked" /><label for="index3">机加池03#</label><br />
					</form>
				</div>
				<!-- icon -->
				<div class="icon">
    				<div class="menuBar" id="menu">菜单</div>
        			<div class="menu" id="add">添加</div>
        			<div class="menu" id="edit">编辑</div>
        			<div class="menu" id="delete">删除</div>
        			<div class="menu" id="search">查询</div>
        			<div class="menu" id="export">导出</div>
        			<div class="menu" id="import">导入</div>
        			<div class="menu" id="template"><a href="download/DataAnalysis.xls" style="height:50px">模板</a></div>
        			<!-- tab_export -->
					<div id="tab_export" style="display:none">
						<form action="${pageContext.request.contextPath}/importDataAnalysis" 
							name="uploadForm" enctype="multipart/form-data" method="post">
							<input type=file name="upload" id="upload" style="display: none;" onchange="fakeUpload.value=value" /> 
							<input id="btn-select" type=button  class="btn btn-primary" value="选择文件" onclick=upload.click() 
								style="width: 134px; font-size: 18px; background-color:#3399FF" /><br /> 
							<input id="fakeUpload" name="fakeUpload" type="text" ondblclick=upload.click()
								style="width: 134px; height: 35px; border: 1px solid #95B8E7;"><br />
							<input id="btn-import" class="btn btn-primary" style="font-size: 18px; width: 65px;
								background-color:#3399FF"" value="确定" onclick="javascript:import2DB();fakeUpload.value='';" />
							<input id="btn-cancel" class="btn btn-primary" style="font-size: 18px; width: 65px;
								background-color:#3399FF"" value="取消"/>
						</form>	
					</div>
				</div>
				
			</div>
			
			<!-- tab_entity -->
			<div id="tab_entity">
				<table id="outStatbody" class="easyui-datagrid" style="width:1300;height:300px;"></table><br />
				<div title="分析图" id="imageContainer" style="width:1300px;height:600px;padding:0px;border-width:0px"></div>
			</div>
			

			<!-- 编辑数据的div，默认看不到 -->
			<center>
				<div style="display: none; width: 700px" align="center">
					<div id="tabEdit" class="easyui-dialog" data-options="closed:true"
						style="align: center; width: 800px; height: 540px; padding: 10px 60px 20px 60px">
						<form id="frmEdit">
						
							<br /> <input type="hidden" id="dateTemp" name="dateTemp" /> <input
								type="hidden" id="ID" name="outStat.ID" /> <br />
							<table>
								<tr>
								<td>时 间：</td>
								<td>
								  <input class="easyui-datebox" name="outStat.t" id="t" type="text"
											data-options="required:true,showSeconds:false,missingMessage:'请选择时间'"
											style="width: 200px; height: 25px" /> 
								</td>
								</tr>
								<tr>
								<td>水 池 编 号 : </td>	
								<td>
								<select class="easyui-combobox textbox "
									id="PoolID" name="outStat.PoolID"
									style="width: 200px; height: 25px"
									data-options="required:true,missingMessage:'请输入水池编号'">
									<option value="MTG_QingS_SC01" selected>MTG_QingS_SC01</option>
									<option value="MTG_QingS_SC02">MTG_QingS_SC02</option>
									<option value="MTG_QingS_SC03">MTG_QingS_SC03</option>
								</select>
								</td>		
								</tr>
								
								<tr>
								<td>浊度：</td>
								<td><input class="easyui-numberbox textbox"
 									style="width: 200px; height: 25px" id="NTU" 
									name="outStat.NTU" data-options="min:0,precision:0" /></td>
								</tr>
								<tr>
									<td>铁 : </td>
									<td><input class="easyui-numberbox textbox"
									style="width: 200px; height: 25px" id="Fe"
 									name="outStat.Fe" data-options="min:0,precision:0" />  </td>
								</tr>
								<tr>
								<td>铝 : </td>
								<td><input class="easyui-numberbox textbox"
 									style="width: 200px; height: 25px" id="Al" 
									name="outStat.Al" data-options="min:0,precision:0" /></td>
								</tr>
							</table>
						</form>
					</div>
					<div id="newEdit" class="easyui-dialog" data-options="closed:true"
						style="align: center; width: 1000px; height: 540px; padding: 10px 60px 20px 60px">
						<form id="newfrmEdit">
							<br />
							<!-- <input type="hidden" id="dateTempAdd" name="dateTemp"	/> 
						<input type="hidden" id="IDAdd" name="outStat.ID" /> -->
							<table id="tab">
								<tr>
									<th></th>
									<th></th>
									<th></th>
									<th>序 号</th>
									<th>时 间</th>
									<th>水池编号</th>
									<th>出水浊度</th>
									<th>余氯</th>
									<th>铁</th>
									<th>铝</th>
								</tr>


								<tr id="tr1">
									<td><input type="hidden" id="splitSign" name="split"
										style="width: 1px; height: 25px" /></td>
									<td><input type="hidden" id="dateTempAdd" name="dateTemp"
										style="width: 1px; height: 25px" /></td>
									<td><input type="hidden" id="IDAdd" name="outStat.ID"
										style="width: 1px; height: 25px" /></td>
									<td id="indexNum1">1</td>
									<td>
										<!-- 时间 --> <input name="outStat.t" id="tAdd1"
										type="date" style="width: 200px; height: 25px" />
									</td>
									<td>
										<!-- 水池编号 -->
										<select id="PoolIDAdd1" name="outStat.PoolID"
										class="easyui-combobox" style="width: 200px; height: 25px">
											<option value="MTG_QingS_SC01" selected>MTG_QingS_SC01</option>
											<option value="MTG_QingS_SC02">MTG_QingS_SC02</option>
											<option value="MTG_QingS_SC03">MTG_QingS_SC03</option>
									</select>
									</td>
									<td>
										<!-- 总进水量 --> <input id="NTUAdd1" name="outStat.NTU"
										style="width: 100px; height: 25px"
										data-options="min:0,precision:0," />
									</td>
									<td>
										<!-- 余氯  --><input id="ClAdd1" name="outStat.Cl"
										style="width: 100px; height: 25px"
										data-options="min:0,precision:0" />
									</td>
									<td>
										<!-- 铁  --><input id="FeAdd1"
 										name="outStat.Fe" style="width: 100px; height: 25px" 
										data-options="min:0,precision:0" />
									</td>
									<td>
										<!-- 铝 --> <input id="AlAdd1"
										name="outStat.Al" style="width: 100px; height: 25px"
										data-options="min:0,precision:0" />
									</td>
								</tr>
							</table>
							<a id="addButton" href="#" class="easyui-linkbutton"
								data-options="iconCls:'icon-add'">添加</a>
						</form>
					</div>
				</div>

				<div style="display: none; width: 400px">
					<div id="tabSearch" class="easyui-dialog"
						data-options="closed:true"
						style="align: center; width: 400px; height: 270px; padding: 10px 60px 20px 60px">
						<form id="frmSearch">
							<dl>

								<br /> &nbsp; &nbsp; &nbsp; 时 &nbsp; &nbsp; &nbsp; 间: &nbsp;
								<input class="easyui-datebox" style="width: 150px" id="searchT"
									name="searchT" text="" type="text"></input>

								<br />
								<br />
								<br /> &nbsp; &nbsp; &nbsp;
								<!-- 水池编号:  <input  class="easyui-validatebox" type="text" style="width:120px" id="searchPoolID"
					                 size="20px" name="searchPoolID" ></input> -->
								水池编号:&nbsp;
								<!--  <input type="text" size="15" id="searchPoolID" name="searchPoolID" /> -->
								<input class="easyui-combobox" style="width: 150px"
									id="searchPoolID" name="searchPoolID" type="text"></input>

							</dl>
						</form>
					</div>
				</div>
		</div>
		</center>






		<script src="js/QS1.js" type="text/javascript" charset="UTF-8"></script>
	</div>

</body>
<jsp:include page="down.jsp" />
</html>

