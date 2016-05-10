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
<link rel="stylesheet" type="text/css" href="easyui/themes/default/datagrid.css" />
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
<script type="text/javascript" src="js/dataAnalysis.js"></script>

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
	top: 160px;
	left: 50px;
	width: 1300px;
}

#gap {
	position: relative;
	top: 20px;
	height: 40px;
}

#dataBody {
	position: relative;
	top: 80px;
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
	border: 0;*/
	border: 1px solid #95B8E7;
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

/*
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
*/

#tab_export {
	position: relative;
	left: 25px;
	top: 170px;
	z-index: 999;
	font-size: 14px;
	width: 200px;
}


th, td, input, option {
	text-align:center;
}

#addButton {
	position: relative;
	left: 940px;
	top: 5px;
}



#calculate p, #calculate tr{
	border: 0;
	padding: 0;
	margin: 0;
}

#calculate p{
	color: #337ab7;
}
#calculate {
	position: absolute;
width: 1300px;
height: 120px;
border: 2px solid rgb(149, 184, 231);
background-color: #C9ECF3;
left: 50px;
top: 10px;
	}
#content {
	position: relative;
	font-family: "微软雅黑","Source Sans Pro";
	font-size: 20px;
	height: 25px;
	color: blue;
	font-weight: bold;
	left: 20px;
	top: 10px;
}
#inputTable{
	position: relative;
    left: 0;
    height: 50px;
    float: left;
    border-spacing: 5px 5px;
    border-collapse: separate;
    font-size: 17px;
    top: 10px;
    left: 5px;
}
#outputTable{
	position: relative;
    right: 5px;
    height: 50px;
    float: right;
    border-spacing: 5px 5px;
    border-collapse: separate;
    font-size: 17px;
    top: 10px;
}
#calculateButton {
	position: relative;
    top: 49px;
    float: left;
    left: 22px;
    height: 30px;
    width: 90px;
    font-size: 20px;
}
#calculate th {
	width: 130px;
	height: 30px;
}
#calculate input{
	font-size: 20px;
	width: 140px;
	text-align: center;
	height: 30px;
}


.button {
	display: inline-block;
	outline: none;
	cursor: pointer;
	text-align: center;
	text-decoration: none;
	text-shaddow: 0 1px 1px rgba(0, 0, 0, 0.3);
	border-radius: .5em;
	-webkit-border-radius: .5em;
	-moz-border-radius: .5em;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
	-webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
	-moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}
.button:hover {
	text-decoration: none;
}
.button:active {
	position: relative;
	top: 1px;
}

.blue {
	color: #d9eef7;
	border: solid 1px #0076a3;
	background: #0095cd;
	background: -webkit-gradient(linear, left top, left bottom, from(#00adee), to(#0078a5));
}

.blue:hover {
	background: #007edd;
	background: -webkit-gradient(linear, left top, left bottom, from(#0095cc), to(#00678e));
}
.blue:active {
	color: #00bed6;
	background: -webkit-gradient(linear, left top, left bottom, from(#0078a5), to(#00adee));
}

</style>
</head>
<body>
	<jsp:include page="top.jsp" />
	<ol class="breadcrumb">
    <li><a href="main.jsp">水量控制</a></li>
    <li class="active">数据分析</li>
    </ol>
	<div id="myPage">
		<div id="myContent" style="overflow: hidden">
			<div id="calculate">
				<div id="content">
					<p id="text">水位预测</p>
				</div>
				<table id="inputTable">
					<tr>
						<th>原始水位/m</th>
						<th>蓄水量/m<sup>3</sup></th>
						<th>虹吸反洗水量/m<sup>3</sup></th>
						<th>V滤反洗水量/m<sup>3</sup></th>
						<th>炭池反洗水量/m<sup>3</sup></th>
						<th>机加池排泥/m<sup>3</sup></th>
						<th>回流进水/m<sup>3</sup></th>
					</tr>
					<tr>
						<th><input id="yssw" type="text" value="3.43"/></th>
						<th><input id="xsl" type="text"  value="300"/></th>
						<th><input id="hx" type="text" value="200"/></th>
						<th><input id="vl" type="text" value="100"/></th>
						<th><input id="tc" type="text" value="100"/></th>
						<th><input id="jjc" type="text" value="180"/></th>
						<th><input id="hljs" type="text" value="150"/></th>
					</tr>
				</table>
				<button id="calculateButton" type="button" class="blue button">预  测</button>
				<table id="outputTable">
					<tr>
						<th>预测水位/m</th>
					</tr>
					<tr>
						<th><input id="ycsw" type="text" value="3.39"/></th>
					</tr>
				</table>
			</div>
			<div id="tab_entity">
				<div id="imageContainer" style="max-width: 1300px; height: 600px;"></div>
				<div id="dataBody">
				<table id="dataAnalysisbody" class="easyui-datagrid"
					style="max-width: 1300px; height: 300px;" ></table>
				</div>
			</div><!-- "tab_entity" -->
			<div id="rightContainer">
				<div id="treeGuid" style="overflow: scroll">
					<p>选择时间:</p>
					<!-- 树形导航菜单 -->
					<ul id="timeTree" class="easyui-tree"></ul>
				</div><!-- treeGuid -->
				
				<div id="chooseIndex">
					<form id="indexForm">
						<p style="color:#337ab7; font-weight:bold;font-size:18px">请选择清水池编号：</p>
						<input type="radio" id="index1" class="radioItem" name="chooseIndexButton" value="index1" /><label for="index1">1#清水池</label><br />
						<input type="radio" id="index2" class="radioItem" name="chooseIndexButton" value="index2" /><label for="index2">2#清水池</label><br />
						<input type="radio" id="index3" class="radioItem" name="chooseIndexButton" value="index3" checked="checked" /><label for="index3">3#清水池</label><br />
					</form>
				</div><!-- chooseIndex -->
				
				<div class="icon">
    				<div class="menuBar" id="menu">功能</div>
        			<div class="menuSecond" id="add">添加</div>
        			<div class="menuSecond" id="edit">编辑</div>
        			<div class="menuSecond" id="delete">删除</div>
        			<div class="menuSecond" id="search">查询</div>
        			<div class="menuSecond" id="export">导出</div>
        			<div class="menuSecond" id="import">导入</div>
        			<!-- <div class="menuSecond" id="template"><a href="download/DataAnalysis.xls" style="height:50px">模板</a></div> -->
				</div><!-- icon -->

				<div id="tab_Import" class="easyui-dialog" data-options="closed:true"
					style="align:center;width:500px;height:200px;padding:10px 60px 20px 60px">
					<form id="frmImportEdit" name="uploadForm" enctype="multipart/form-data" method="post">
						<br>
						<button type="button"  class="btn btn-primary" onclick=upload.click()>
					             <span class="fa fa-folder-open" style="font-size: 14px; "></span>浏览
					   </button>
						<input type=file name="upload" id="upload" style="display: none;" onchange="fakeUpload.value=value" /> 
						<input id="fakeUpload" name="fakeUpload" type="text" ondblclick=upload.click()
							style="width: 260px; height: 35px; border: 1px solid #95B8E7;">						
					</form>	
				</div><!-- tab_Import -->
			</div><!-- rightContainer -->
			<center>
				<div id="editArea" style="display: none; width: 700px" align="center">
					<div id="tabEdit" class="easyui-dialog" data-options="closed:true"
						style="align: center; width: 800px; height: 540px; padding: 10px 60px 20px 60px">
						<form id="frmEdit"><br />
							<input type="hidden" id="dateTemp" name="dateTemp" /> <input
								type="hidden" id="ID" name="dataAnalysis.ID" /> <br />
							<dl>
								&nbsp; &nbsp;时 &nbsp; &nbsp; &nbsp; &nbsp; 间 : &nbsp;
								<input class="easyui-datetimebox" name="dataAnalysis.t" id="t"
									type="text"	data-options="required:true,showSeconds:false,missingMessage:'请选择时间'"
									style="width: 200px; height: 25px" />
								&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;水 池 编 号 : &nbsp;
								<select class="easyui-combobox textbox " id="PoolID" name="dataAnalysis.PoolID"
									style="width: 200px; height: 25px" data-options="required:true,missingMessage:'请输入水池编号'">
									<option value="MTG_QingS_SC01" selected>1#清水池</option>
									<option value="MTG_QingS_SC02">2#清水池</option>
									<option value="MTG_QingS_SC03">3#清水池</option>
								</select>
							</dl>
							<dl>
								&nbsp; &nbsp;总 进 水 量 : &nbsp;
								<input class="easyui-numberbox textbox" name="dataAnalysis.InV"
									style="width: 200px; height: 25px" id="InV" data-options="min:0,precision:0," />
								&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;出 &nbsp;水 &nbsp; 量 : &nbsp;
								<input class="easyui-numberbox" name="dataAnalysis.OutV"
								style="width: 200px; height: 25px" id="OutV" data-options="min:0,precision:0" />
							</dl>
							<dl>
								&nbsp; &nbsp;洗虹吸滤池 : &nbsp;
								<input class="easyui-numberbox textbox" style="width: 200px; height: 25px" id="HXOutV"
									name="dataAnalysis.HXOutV" data-options="min:0,precision:0" />
								&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;洗V型滤池 : &nbsp;
								<input class="easyui-numberbox textbox" style="width: 200px; height: 25px" id="LCOutV"
									name="dataAnalysis.LCOutV" data-options="min:0,precision:0" />
							</dl>
							<dl>
								&nbsp; &nbsp;炭池反洗水量 : &nbsp;
								<input class="easyui-numberbox textbox"
									style="width: 190px; height: 25px" id="TCOutV"
									name="dataAnalysis.TCOutV" data-options="min:0,precision:0" />
								&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;机加池排泥 : &nbsp;
								<input class="easyui-numberbox textbox"
									style="width: 200px; height: 25px" id="JJOutV"
									name="dataAnalysis.JJOutV" data-options="min:0,precision:0" />
							</dl>
							<dl>
								&nbsp; &nbsp;回 流 进 水: &nbsp; &nbsp;
								<input class="easyui-numberbox textbox"
									style="width: 200px; height: 25px" id="HLInV"
									name="dataAnalysis.HLInV" data-options="min:0,precision:0" />
								&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;蓄 &nbsp;水 &nbsp; 量 : &nbsp;
								<input class="easyui-numberbox textbox" style="width: 200px; height: 25px" id="Storage"
									name="dataAnalysis.Storage" data-options="precision:0" />
							</dl>
							<dl>
								&nbsp; &nbsp;预 测 水 位: &nbsp; &nbsp;
								<input class="easyui-numberbox textbox"
									style="width: 200px; height: 25px" id="PreH"
									name="dataAnalysis.PreH" data-options="precision:2" />
							</dl>
						</form>
					</div><!-- tabEdit -->
					<div id="newEdit" class="easyui-dialog" data-options="closed:true"
						style="align: center; width: 1180px; height: 600px; padding: 10px 60px 10px 60px">
						<form id="newfrmEdit" style="width:1060px"><br />
							<table id="tab" style="align: center">
								<tr>
									<th style="width: 1px; height: 26px"></th>
									<th style="width: 1px; height: 26px"></th>
									<th style="width: 1px; height: 26px"></th>
									<th style="width: 40px; height: 26px">序 号</th>
									<th style="width: 152px; height: 26px">时 间</th>
									<th style="width: 102px; height: 26px">清水池编号</th>
									<th style="width: 72px; height: 26px">总进水量</th>
									<th style="width: 62px; height: 26px">出水量</th>
									<th style="width: 102px; height: 26px">虹吸反洗水量</th>
									<th style="width: 102px; height: 26px">V滤反洗水量</th>
									<th style="width: 82px; height: 26px">炭池反洗水量</th>
									<th style="width: 82px; height: 26px">机加池排泥</th>
									<th style="width: 72px; height: 26px">回流进水</th>
									<th style="width: 52px; height: 26px">蓄水量</th>
									<th style="width: 72px; height: 26px">预测水位</th>
								</tr>
								<tr id="tr1">
									<td style="width: 1px; height: 26px">
										<input type="hidden" id="splitSign" name="split" style="width: 1px; height: 25px" />
									</td>
									<td style="width: 1px; height: 26px">
										<input type="hidden" id="dateTempAdd" name="dateTemp" style="width: 1px; height: 25px" />
									</td>
									<td style="width: 1px; height: 26px">
										<input type="hidden" id="IDAdd" name="dataAnalysis.ID" style="width: 1px; height: 25px" />
									</td>
									<td id="indexNum1" style="text-align:center; width:40px;height:26px">1</td>
									<td style="width: 152px; height: 26px">
										<!-- 时间 -->
										<input name="dataAnalysis.t" id="tAdd1" type="datetime-local" style="width: 150px; height: 25px" />
									</td>
									<td style="width: 102px; height: 26px">
										<!-- 水池编号 -->
										<select id="PoolIDAdd1" name="dataAnalysis.PoolID" style="width: 100px; height: 25px">
											<option value="MTG_QingS_SC01" selected>1#清水池</option>
											<option value="MTG_QingS_SC02">2#清水池</option>
											<option value="MTG_QingS_SC03">3#清水池</option>
										</select>
									</td>
									<td style="width: 72px; height: 26px">
										<!-- 总进水量 -->
										<input id="InVAdd1" name="dataAnalysis.InV"	style="width: 70px; height: 25px" data-options="min:0,precision:0," />
									</td>
									<td style="width: 62px; height: 26px">
										<!-- 出  水  量 -->
										<input id="OutVAdd1" name="dataAnalysis.OutV" style="width: 60px; height: 25px"	data-options="min:0,precision:0" />
									</td>
									<td style="width: 102px; height: 26px">
										<!-- 洗虹吸滤池 --> <input id="HXOutVAdd1"
										name="dataAnalysis.HXOutV" style="width: 100px; height: 25px" data-options="min:0,precision:0" />
									</td>
									<td style="width: 102px; height: 26px">
										<!-- 洗V型滤池 --> 
										<input id="LCOutVAdd1" name="dataAnalysis.LCOutV" style="width: 100px; height: 25px" data-options="min:0,precision:0" />
									</td>
									<td style="width: 82px; height: 26px">
										<!-- 炭池反洗水量 -->
										<input id="TCOutVAdd1" name="dataAnalysis.TCOutV" style="width: 80px; height: 25px"	data-options="min:0,precision:0" />
									</td>
									<td style="width: 82px; height: 26px">
										<!-- 机加池排泥 -->
										<input id="JJOutVAdd1" name="dataAnalysis.JJOutV" style="width: 80px; height: 25px"	data-options="min:0,precision:0" />
									</td>
									<td style="width: 72px; height: 26px">
										<!-- 回流进水 -->
										<input id="HLInVAdd1" name="dataAnalysis.HLInV"	style="width: 70px; height: 25px" data-options="min:0,precision:0" />
									</td>
									<td style="width: 52px; height: 26px">
										<!-- 蓄  水  量 -->
										<input id="StorageAdd1"	name="dataAnalysis.Storage" style="width: 50px; height: 25px" data-options="precision:0" />
									</td>
									<td style="width: 72px; height: 26px">
										<!-- 预测水位 -->
										<input id="PreHAdd1" name="dataAnalysis.PreH" style="width: 70px; height: 25px" data-options="precision:2" />
									</td>
								</tr>
							</table>
							<a id="addButton" href="#" class="easyui-linkbutton"
								data-options="iconCls:'icon-add'">添加</a>
						</form>
					</div><!-- newTabEdit -->
				</div><!-- editArea -->
				<div id="searchArea" style="display: none; width: 400px">
					<div id="tabSearch" class="easyui-dialog"
						data-options="closed:true"
						style="align: center; width: 500px; height: 400px; padding: 10px 60px 20px 60px">
						<form id="frmSearch">
							<dl>
								<br />
								&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 起  &nbsp;始  &nbsp;日 &nbsp; 期 : &nbsp;
								<input class="easyui-datebox" style="width:150px" id="lowT" name="lowT"/ ><br/><br/>
							    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 结  &nbsp;束  &nbsp;日 &nbsp; 期 : &nbsp;	
							    <input class="easyui-datebox" style="width:150px" id="highT" name="highT"/ ><br /><br />
							    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 水  &nbsp;池 &nbsp; 编  &nbsp;号 : &nbsp; 
								<select class="easyui-combobox" style="width: 150px"
									id="searchPoolID" name="searchPoolID">
									<option value="MTG_QingS_SC01">1#清水池</option>
									<option value="MTG_QingS_SC02">2#清水池</option>
									<option value="MTG_QingS_SC03">3#清水池</option>
								</select>									
							</dl>
						</form><!-- frmSearch -->
					</div><!-- tabSearch -->
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
									<option value="MTG_QingS_SC01">1#清水池</option>
									<option value="MTG_QingS_SC02">2#清水池</option>
									<option value="MTG_QingS_SC03">3#清水池</option>
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
					onclick="javascript:addDataAnalysis()">添加</button>
				<button id="btn_editRow" class="btn btn-primary"
					onclick="javascript:editDataAnalysis()">编辑</button>
				<button id="btn_deleteRow" class="btn btn-primary"
					onclick="javascript:deleteDataAnalysis()">删除</button>
				<button id="btn_searchAll" class="btn btn-primary"
					onclick="javascript:listAllDataAnalysis()">查询全部</button>
				<button id="btn_search" class="btn btn-primary"
					onclick="javascript:searchDataAnalysis()">条件查询</button>
				<button id="btn_export" class="btn btn-primary"
					onclick="javascript:export2excel()">导出</button>
			</div><!-- btn_group -->
			
				<!-- <div id="picLegend">
					<h4 style="color:blue"><strong><span style="color:red;">Zoom</span> 选项说明:</strong></h4>
					<table id="legendTable" style="text-align:left">
					<tr>
						<td class="legendTitle">1M</td>
						<td>:1个月的数据</td>
					</tr>
					<tr>
						<td class="legendTitle">3M</td>
						<td>:3个月的数据</td>
					</tr>
					<tr>
						<td class="legendTitle">6M</td>
						<td>:6个月的数据</td>
					</tr>
					<tr>
						<td class="legendTitle">YTD</td>
						<td>:本年初至今日的数据</td>
					</tr>
					<tr>
						<td class="legendTitle">1Y</td>
						<td>:1年的数据</td>
					</tr>
					<tr>
						<td class="legendTitle">ALL</td>
						<td>:所有的数据</td>
					</tr>
					</table>
				</div> -->
			
				<!-- 编辑数据的div，默认看不到 -->

	<jsp:include page="down.jsp" />
</body>

</html>

