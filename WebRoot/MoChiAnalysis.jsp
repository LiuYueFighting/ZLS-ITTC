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
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.ddd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
<base href="<%=basePath%>" />

<meta charset="UTF-8" />
<meta http-equiv="Access-Control-Allow-Origin" content="*" />
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>北京自来水集团工艺平台</title>

<link rel="stylesheet" href="css/bootstrap.min.css" />
<link rel="stylesheet" href="font-awesome/css/font-awesome.min.css" />
<link rel="stylesheet" href="css/top_down.css" />
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
<script type="text/javascript" src="js/moChiAnalysis.js"></script>

<style>
body {
	background: #afd9ee;
}

#myPage {
	display:relative;
	font-family: '微软雅黑', 'Source Sans Pro';
	font-size: 15px;
	width: 1600px;
	height: 1150px;
	margin: 0px auto;
}

#myContent {
	margin: 0px auto;
	position: relative;
	width: 1600px;
	top:15px;
	height: 1150px;
	background-position: bottom;
}

#tab {
	cellspacing: 10px;
	cellpadding: 10px;
}

#tab_entity {
	position: absolute;
	top: 10px;
	left: 50px;
	width: 1300px;
}

#gap{
		width: 1300px;
		height: 15px;
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
	/* border: 1px solid #95B87E;
	border: 0; */
	border: 1px solid #95B8E7;
}

#tab_export {
	position: relative;
	left: 25px;
	top: 170px;
	z-index: 999;
	font-size: 14px;
	width: 200px;
}

#dataPreiodContainer {
	position: absolute;
	top: 320px;
	left: 670px;
	vertical-align: bottom;
}

#datePeriodSelest {
	position: relative;
	top: 2px;
	left: 0px;
}



#legendTable tr, #legendTable td {
	padding: 5px;
	margin: 5px;
}



#picLegend {
	position: relative;
	top: 50px;
	width: 220px;
	height: 200px;
	padding: 5px;
	border: 1px solid #95B8E7;	
	text-align:left;
	padding:5px;
	/* margin-top: 100px; */
}

.legendTitle {
	color:blue;
	font-weight:bolder;
}



div.icon {
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


.menuSecond{   
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


th, td, input, option {
	text-align:center;
}

#addButton {
	position: relative;
	left: 650px;
	top: 5px;
}

/*
#table {
	text-align: center;
	border-width: 1px;
}

tr, td, th {
	
	text-align: center;
	border-spacing:2px;
	padding:2px;
}
input {
text-align: center;
}*/


</style>
</head>
<body>
	<jsp:include page="top.jsp" />
	<ol class="breadcrumb">
    <li><a href="main.jsp">首页</a></li>
    <li class="active">膜池分析</li>
    </ol>
	<div id="myPage">
		<div id="myContent" style="overflow: hidden">
			<div id="tab_entity">
				<table id="moChiAnalysisbody" class="easyui-datagrid"
					style="max-width: 1300px; height: 300px;" ></table>
				<div id="gap"></div>
				<div id="imageContainer" style="max-width: 1300px; height: 600px;"></div>
			</div><!-- "tab_entity" -->
			
			<select  id="chooseIndexButton2" name="chooseIndexButton2" onchange="javascript:changeButton2()"
						 data-options="required:true,missingMessage:'请选择膜池编号' ">
									<option value="MTG_MoChi_SC01" selected>1# 膜池</option>
									<option value="MTG_MoChi_SC02">2# 膜池</option>
									<option value="MTG_MoChi_SC03">3# 膜池</option>
									<option value="MTG_MoChi_SC04">4# 膜池</option>
									<option value="MTG_MoChi_SC05">5# 膜池</option>
									<option value="MTG_MoChi_SC06">6# 膜池</option>
			</select>
			
			<div id="rightContainer">
				<div id="treeGuid" style="overflow: scroll">
					<p>选择时间:</p>
					<!-- 树形导航菜单 -->
					<ul id="timeTree" class="easyui-tree"></ul>
				</div><!-- treeGuid -->
				
				<div id="chooseIndex" style="display:none">
					<form id="indexForm">
						<p style="color:#337ab7; font-weight:bold;font-size:18px">请选择膜池编号：</p>
						<table>
							<tr>
								<td><input type="radio" id="index1" class="radioItem" name="chooseIndexButton" value="index1" checked="checked" /><label for="index1">1#膜池</label></td>
								<td><input type="radio" id="index2" class="radioItem" name="chooseIndexButton" value="index2" /><label for="index2">2#膜池</label></td>
							</tr>
							<tr>
								<td><input type="radio" id="index3" class="radioItem" name="chooseIndexButton" value="index3" /><label for="index3">3#膜池</label></td>
								<td><input type="radio" id="index4" class="radioItem" name="chooseIndexButton" value="index4" /><label for="index4">4#膜池</label></td>
							</tr>
							<tr>
								<td><input type="radio" id="index5" class="radioItem" name="chooseIndexButton" value="index5" /><label for="index5">5#膜池</label></td>
								<td><input type="radio" id="index6" class="radioItem" name="chooseIndexButton" value="index6" /><label for="index6">6#膜池</label></td>
							</tr>
						</table>
					</form>
				</div><!-- chooseIndex  -->
				
				<div class="icon">
    				<div class="menuBar" id="menu">功能</div>
        			<div class="menuSecond" id="add">添加</div>
        			<div class="menuSecond" id="edit">编辑</div>
        			<div class="menuSecond" id="delete">删除</div>
        			<div class="menuSecond" id="search">查询</div>
        			<div class="menuSecond" id="export">导出</div>
        			<div class="menuSecond" id="import">导入</div>
        			<!-- <div class="menuSecond" id="template"><a href="download/MoChiAnalysis.xls" style="height:50px">模板</a></div> -->
				</div><!-- icon -->
					
				<div id="tab_export" style="display:none">
					<form action="${pageContext.request.contextPath}/importMoChiAnalysis"
						name="uploadForm" enctype="multipart/form-data" method="post">
						<input type=file name="upload" id="upload" style="display: none;"
							onchange="fakeUpload.value=value" /> 
						<input id="btn-select" type=button  class="btn btn-primary" value="选择文件" onclick=upload.click()
							style="width: 134px; font-size: 18px; background-color:rgba(0, 51, 255, 0.8)" /><br /> 
						<input id="fakeUpload" name="fakeUpload" type="text" ondblclick=upload.click()
							style="width: 134px; height: 35px; border: 1px solid #95B8E7;" />
						<br />
						<input id="btn-import" class="btn btn-primary"
							style="font-size: 18px; width: 65px;  background-color:rgba(0, 51, 255, 0.8)"" value="确定"
							onclick="javascript:import2DB();fakeUpload.value='';" />
						<input id="btn-cancel" class="btn btn-primary"
							style="font-size: 18px; width: 65px;  background-color:rgba(0, 51, 255, 0.8)"" value="取消"/>
					</form>	
				</div><!-- tabexport -->
				
			</div><!-- rightContainer -->
			<center>
				<div id="editArea" style="display: none; width: 700px" align="center">
					<div id="tabEdit" class="easyui-dialog" data-options="closed:true"
						style="align: center; width: 800px; height: 540px; padding: 10px 60px 20px 60px">
						<form id="frmEdit"><br />
							<input type="hidden" id="dateTemp" name="dateTemp" /> <input
								type="hidden" id="ID" name="moChiAnalysis.ID" /> <br />
							<dl>
								&nbsp; &nbsp;时 &nbsp; &nbsp; &nbsp; &nbsp; 间 : &nbsp;
								<input class="easyui-datetimebox" name="moChiAnalysis.t" id="t"
									type="text"	data-options="required:true,showSeconds:false,missingMessage:'请选择时间'"
									style="width: 200px; height: 25px" />
								&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;水 池 编 号 : &nbsp;
								<select class="easyui-combobox textbox " id="PoolID" name="moChiAnalysis.PoolID"
									style="width: 200px; height: 25px" data-options="required:true,missingMessage:'请输入膜池编号'">
									<option value="MTG_MoChi_SC01" selected>1#膜池</option>
									<option value="MTG_MoChi_SC02">2#膜池</option>
									<option value="MTG_MoChi_SC03">3#膜池</option>
									<option value="MTG_MoChi_SC04">4#膜池</option>
									<option value="MTG_MoChi_SC05">5#膜池</option>
									<option value="MTG_MoChi_SC06">6#膜池</option>
								</select>
							</dl>
							<dl>
								&nbsp; &nbsp;进 膜 压 力: &nbsp;
								<input class="easyui-numberbox textbox" name="moChiAnalysis.InPress"
									style="width: 200px; height: 25px" id="InPress" data-options="min:0,precision:0," />
								&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;出 水 压 力 : &nbsp;
								<input class="easyui-numberbox" name="moChiAnalysis.OutPress"
								style="width: 200px; height: 25px" id="OutPress" data-options="min:0,precision:0" />
							</dl>
							<dl>
								&nbsp; &nbsp;跨 膜 压 差 : &nbsp;
								<input class="easyui-numberbox textbox" style="width: 200px; height: 25px" id="DiffPress"
									name="moChiAnalysis.DiffPress" data-options="min:0,precision:0" />
									
								&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;进 水 流 量 : &nbsp;
								<input class="easyui-numberbox textbox"
									style="width: 200px; height: 25px" id="InFlow"
									name="moChiAnalysis.InFlow" data-options="min:0,precision:0" />
							</dl>
							
						</form>
					</div><!-- tabEdit -->
					<div id="newEdit" class="easyui-dialog" data-options="closed:true"
						style="align: center; width: 860px; height: 600px; padding: 10px 60px 10px 60px">
						<form id="newfrmEdit" style="width:740px"><br />
							<table id="tab" style="align: center">
								<tr>
									<th style="width: 1px; height: 26px"></th>
									<th style="width: 1px; height: 26px"></th>
									<th style="width: 1px; height: 26px"></th>
									<th style="width: 40px; height: 26px">序 号</th>
									<th style="width: 152px; height: 26px">时 间</th>
									<th style="width: 102px; height: 26px">膜池编号</th>
									<th style="width: 102px; height: 26px">进膜压力</th>
									<th style="width: 102px; height: 26px">出水压力</th>
									<th style="width: 102px; height: 26px">跨膜压差</th>
									<th style="width: 102px; height: 26px">进水流量</th>
								</tr>
								<tr id="tr1">
									<td style="width: 1px; height: 26px">
										<input type="hidden" id="splitSign" name="split" style="width: 1px; height: 25px" />
									</td>
									<td style="width: 1px; height: 26px">
										<input type="hidden" id="dateTempAdd" name="dateTemp" style="width: 1px; height: 25px" />
									</td>
									<td style="width: 1px; height: 26px">
										<input type="hidden" id="IDAdd" name="moChiAnalysis.ID" style="width: 1px; height: 25px" />
									</td>
									<td id="indexNum1" style="text-align:center; width:40px;height:26px">1</td>
									<td style="width: 152px; height: 26px">
										<!-- 时间 -->
										<input name="moChiAnalysis.t" id="tAdd1" type="datetime-local" style="width: 150px; height: 25px" />
									</td>
									<td style="width: 102px; height: 26px">
										<!-- 膜池编号 -->
										<select id="PoolIDAdd1" name="moChiAnalysis.PoolID" style="width: 100px; height: 25px">
											<option value="MTG_MoChi_SC01" selected>1#膜池</option>
											<option value="MTG_MoChi_SC02">2#膜池</option>
											<option value="MTG_MoChi_SC03">3#膜池</option>
											<option value="MTG_MoChi_SC04">4#膜池</option>
											<option value="MTG_MoChi_SC05">5#膜池</option>
											<option value="MTG_MoChi_SC06">6#膜池</option>
										</select>
									</td>
									<td style="width: 102px; height: 26px">
										
										<input id="InPress1" name="moChiAnalysis.InPress"	style="width: 100px; height: 25px" data-options="min:0,precision:0," />
									</td>
									<td style="width: 102px; height: 26px">
										
										<input id="OutPress1" name="moChiAnalysis.OutPress" style="width: 100px; height: 25px"	data-options="min:0,precision:0" />
									</td>
									<td style="width: 102px; height: 26px">
										 <input id="DiffRess1"
										name="moChiAnalysis.DiffPress" style="width: 100px; height: 25px" data-options="min:0,precision:0" />
									</td>
									<td style="width: 102px; height: 26px">
										
										<input id="InFlow1" name="moChiAnalysis.InFlow" style="width: 100px; height: 25px" data-options="min:0,precision:0" />
									</td>
									
									
								</tr>
							</table>
							<a id="addButton" href="#" class="easyui-linkbutton"
								data-options="iconCls:'icon-add'">添加</a>
						</form>
					</div><!-- newTabEdit -->
				</div><!-- editArea -->
				<div id="searchArea" style="display: none; width: 600px">
					<div id="tabSearch" class="easyui-dialog"
						data-options="closed:true"
						style="align: center; width: 500px; height: 400px; padding: 10px 60px 20px 60px">
						<form id="frmSearch">
							<dl>
								<!-- <br /> &nbsp; &nbsp; &nbsp; 时 &nbsp; &nbsp; &nbsp; 间: &nbsp;
								<input class="easyui-datebox" style="width: 150px" id="searchT"
									name="searchT" text="" type="text"></input>
								<br />
								<br />
								<br /> &nbsp; &nbsp; &nbsp;
								膜池编号:  <input  class="easyui-validatebox" type="text" style="width:120px" id="searchPoolID"
				            	     size="20px" name="searchPoolID" ></input>
								膜池编号:&nbsp; -->
								&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 起  &nbsp;始  &nbsp;日 &nbsp; 期 : &nbsp;
								<input class="easyui-datebox" style="width:150px" id="lowT" name="lowT"/ ><br/><br/>
							    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 结  &nbsp;束  &nbsp;日 &nbsp; 期 : &nbsp;	
							    <input class="easyui-datebox" style="width:150px" id="highT" name="highT"/ ><br /><br />
							    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 膜  &nbsp;池 &nbsp; 编  &nbsp;号 : &nbsp; 
								<select class="easyui-combobox" style="width: 150px"
									id="searchPoolID" name="searchPoolID">
									<option value="MTG_MoChi_SC01" selected>1#膜池</option>
									<option value="MTG_MoChi_SC02">2#膜池</option>
									<option value="MTG_MoChi_SC03">3#膜池</option>
									<option value="MTG_MoChi_SC04">4#膜池</option>
									<option value="MTG_MoChi_SC05">5#膜池</option>
									<option value="MTG_MoChi_SC06">6#膜池</option>
								</select>									
							</dl>
						</form>
					</div>
				</div><!-- editArea -->
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
							    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 膜  &nbsp;池 &nbsp; 编  &nbsp;号 : &nbsp; 
								<select class="easyui-combobox" style="width: 150px"
									id="searchPoolID" name="searchPoolID">
									<option value="MTG_MoChi_SC01">1#膜池</option>
									<option value="MTG_MoChi_SC02">2#膜池</option>
									<option value="MTG_MoChi_SC03">3#膜池</option>
									<option value="MTG_MoChi_SC04">4#膜池</option>
									<option value="MTG_MoChi_SC05">5#膜池</option>
									<option value="MTG_MoChi_SC06">6#膜池</option>
								</select>									
							</dl>
						</form><!-- frmSearchForExport -->
					</div><!-- tabSearchForExport -->
				</div><!-- searchAreaForExport -->
			</center>
		</div><!-- myContent -->
	</div><!-- myPage -->
		
			<!-- 操作按钮 -->
			<div id="btn_group" class="btn-group-vertical btn-group-lg"
				role="group" style="left: 1482px; top: 20px; z-index: 999; display:none">
				<button id="btn_addRow" class="btn btn-primary"
					onclick="javascript:addMoChiAnalysis()">添加</button>
				<button id="btn_editRow" class="btn btn-primary"
					onclick="javascript:editMoChiAnalysis()">编辑</button>
				<button id="btn_deleteRow" class="btn btn-primary"
					onclick="javascript:deleteMoChiAnalysis()">删除</button>
				<button id="btn_searchAll" class="btn btn-primary"
					onclick="javascript:listAllMoChiAnalysis()">查询全部</button>
				<button id="btn_search" class="btn btn-primary"
					onclick="javascript:searchMoChiAnalysis()">条件查询</button>
				<button id="btn_export" class="btn btn-primary"
					onclick="javascript:export2excel()">导出</button>
			</div><!-- btn_group -->
			

</body>
<jsp:include page="down.jsp" />
</html>

