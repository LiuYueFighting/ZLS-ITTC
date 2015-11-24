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

<link rel="stylesheet" type="text/css" href="easyui/themes/default/easyui.css" />
<link rel="stylesheet" type="text/css" href="easyui/themes/icon.css" />
<link rel="stylesheet" type="text/css" href="style/myeasyui.css" />
<script src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="easyui/jquery.min.js"></script>
<script type="text/javascript" src="easyui/jquery.easyui.min.js"></script>
<script type="text/javascript" src="easyui/locale/easyui-lang-zh_CN.js"></script>
<script type="text/javascript" src="highcharts/highcharts.js" ></script>
<script type="text/javascript" src="highcharts/exporting.src.js"></script>
<script type="text/javascript" src="highcharts/themes/grid.js"></script>

<script type="text/javascript" src="js/ajaxfileupload.js"></script>
<script type="text/javascript" src="js/dataAnalysis.js"></script>

<style>
body {
	background: #afd9ee;
}

#myPage {
	font-family: '微软雅黑', 'Source Sans Pro';
	font-size: 15px;
	width: 1600px;
	height: 800px;
	margin: 0px auto;
}

#myNav {
	background: #f1f3f5;
}

#pageHead {
	height: 50px;
	font-size: 19px;
}

#pageHead .navbar {
	/*opacity: 0.85;*/
	z-index: 10;
}

#myContent {
	margin: 0px auto;
	position: relative;
	height: 1030px;
	width: 1600px;
	background-position: bottom;
}

/*#word_title{*/
/*font-family: '微软雅黑','Arial';*/
/*font-size: 39px;*/
/*color: #eeeeee;*/
/*position: absolute;*/
/*top: 180px;*/
/*left: 590px;*/
/*opacity: 0.85;*/
/*}*/
#pageFooter {
	background: #e5e5e5;
}

#pageFooter p {
	text-align: center;
}

#myNavbar a:hover {
	color: #d510ff;
	background: #ffeae4;
}

#myContent {
	/*   background: url("image/QSC3.png") no-repeat;
    		   background-position: center; */
	
}

#tab_entity {
	position: absolute;
	top: 20px;
	left: 300px;
}

#tab_export {
	font-family: '微软雅黑', 'Arial';
	position: absolute;
	left: 1482px;
	/* top: 320px; */
	top: 350px;
	z-index: 999;
	font-size: 14px;
	width: 200px;
}

#treeGuid {
	width: 220px;
	position: absolute;
	top: 20px;
	left: 50px;
	height: 920px;
	padding: 5px;
	border: 1px solid #95B8E7;
}

#treeGuid p{
    padding:5px;
    margin:0;
    font-size:18px"
}

#addButton {
	position:relative;
	left:1280px;
}

</style>
</head>
<body>
	<jsp:include page="top.jsp" />

	<div id="myPage">
		<div id="myContent" style="overflow: hidden">
			<!-- 操作按钮 -->
			<div id="btn_group" class="btn-group-vertical btn-group-lg"
				role="group" style="left: 1482px; top:20px;">

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
					
			</div>

			<!-- 导出文件操作-->
			<div id="tab_export">
				<br /><br />

				<form action="${pageContext.request.contextPath}/importDataAnalysis" name="uploadForm"
						enctype="multipart/form-data" method="post">
					
				<!-- 	<input type="file" id="upload" name="upload" 
						style="width:105px;height:30px; "/> -->
						<input type=file name="upload"  id="upload" style="display: none;"
							 onchange="fakeUpload.value=value">
						
						<input type=button class="btn btn-primary"value="选择文件"
							 onclick=upload.click() style="width:105px;font-size:18px"><br/>
						<input id="fakeUpload" name="fakeUpload" type="text" ondblclick=upload.click() 											
							style="width:105px;height:25px;border:1px solid #95B8E7;"> 
						
					<br/><br/>
					 
					<input id="btn-import" class="btn btn-primary"
						style="font-size:18px;width:105px;" value="导入"
						onclick="javascript:import2DB();fakeUpload.value='';" />
				</form>
				<br /> <a href="download/DataAnalysis.xls"
				 		style="margin:0;border:0;font-size:15px;">点击下载清水池<br />水位计算表模板</a> 
				<input type="hidden" value='${errorMsg}' id="errMsg"/>
		</div>
	
			<div id="treeGuid" style="overflow:scroll">
				<p>选择时间:</p><br/>
				<!-- 树形导航菜单 -->
				<ul id="timeTree" class="easyui-tree"></ul>
			</div>

			<div id="tab_entity">
				<table id="dataAnalysisbody" style="max-width:1050px;height:300px;"
					class="easyui-datagrid"></table>
				<br />
				<div id="imageContainer" style="max-width:1050px;height:600px;"></div>
			</div>
			<!-- 编辑数据的div，默认看不到 -->
			<center>
			<div style="display:none;width:700px" align="center">
				<div id="tabEdit" class="easyui-dialog"  data-options="closed:true" style="align:center;width:800px;height:540px;padding:10px 60px 20px 60px">
					<form id="frmEdit"><br />
						<input type="hidden" id="dateTemp" name="dateTemp" /> 
						<input type="hidden" id="ID" name="dataAnalysis.ID" /> <br />
						<dl>&nbsp; &nbsp;时 &nbsp; &nbsp; &nbsp; &nbsp; 间 : &nbsp;
							<input class="easyui-datetimebox" name="dataAnalysis.t" id="t"
								type="text" data-options="required:true,showSeconds:false,missingMessage:'请选择时间'"
								style="width:200px;height:25px" /> 
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;水 池 编 号 : &nbsp; 
							<select class="easyui-validatebox easyui-combox textbox " id="PoolID"
								name="dataAnalysis.PoolID" style="width:200px;height:25px"
								data-options="required:true,missingMessage:'请输入水池编号'">
								<option value="MTG_QingS_SC01" selected>MTG_QingS_SC01</option>
								<option value="MTG_QingS_SC02">MTG_QingS_SC02</option>
								<option value="MTG_QingS_SC02">MTG_QingS_SC02</option>
							</select>
						</dl>
						<dl>&nbsp; &nbsp;总 进 水 量 : &nbsp;
							<input class="easyui-numberbox textbox" name="dataAnalysis.InV" 
								style="width:200px;height:25px" id="InV" data-options="min:0,precision:0,">
						 	&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;出 &nbsp;水 &nbsp; 量 : &nbsp;
							<input class="easyui-numberbox" name="dataAnalysis.OutV"
								style="width:200px;height:25px" id="OutV" data-options="min:0,precision:0" />
						</dl>
						
						<dl>
							 
								&nbsp; &nbsp;洗虹吸滤池 : &nbsp; <input
									class="easyui-numberbox textbox" style="width:200px;height:25px"
									 id="HXOutV" name="dataAnalysis.HXOutV" data-options="min:0,precision:0"/>
					
								&nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;洗V型滤池 : &nbsp; <input
									class="easyui-numberbox textbox" style="width:200px;height:25px"
									 id="LCOutV" name="dataAnalysis.LCOutV" data-options="min:0,precision:0"/>
							 
						</dl>
						<dl>
							 
								&nbsp; &nbsp;炭池反冲洗 : &nbsp; <input
									class="easyui-numberbox textbox" style="width:200px;height:25px"
									 id="TCOutV" name="dataAnalysis.TCOutV" data-options="min:0,precision:0" />
							 
											 
								&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;机加池排泥 : &nbsp;<input
									class="easyui-numberbox textbox" style="width:200px;height:25px"
									 id="JJOutV" name="dataAnalysis.JJOutV" data-options="min:0,precision:0"/>
							 
						</dl>
						<dl>
							 
								&nbsp; &nbsp;回 流 进 水: &nbsp; &nbsp; <input
									class="easyui-numberbox textbox" style="width:200px;height:25px"
									 id="HLInV" name="dataAnalysis.HLInV" data-options="min:0,precision:0"/>
				
							 
								&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;蓄 &nbsp;水 &nbsp; 量 : &nbsp; <input
									class="easyui-numberbox textbox" style="width:200px;height:25px"
									 id="Storage" name="dataAnalysis.Storage"  data-options="precision:0"/>
							 
						</dl>
							<dl>
							 
								&nbsp; &nbsp;预 测 水 位: &nbsp; &nbsp; <input
									class="easyui-numberbox textbox" style="width:200px;height:25px"
									 id="PreH" name="dataAnalysis.PreH" data-options="precision:2"/>
							 
						</dl>
						<!-- <input  type="hidden" id="Storage" name="dataAnalysis.Storage" />
						<input  type="hidden" id="PreH" name="dataAnalysis.PreH" />
						 -->
						 
					</form>
				</div>
				<div id="newEdit" class="easyui-dialog"  data-options="closed:true" style="align:center;width:1500px;height:540px;padding:10px 60px 20px 60px">
					<form id="newfrmEdit"><br />
						<!-- <input type="hidden" id="dateTempAdd" name="dateTemp"	/> 
						<input type="hidden" id="IDAdd" name="dataAnalysis.ID" /> -->
	<table id="tab">
	
		
			<tr>
				<th></th>
				<th></th>
				<th></th>
				<th>序        号</th>
				<th>时        间</th>
				<th>水池编号</th>
				<th>总进水量</th>
				<th>出  水  量</th>
				<th>洗虹吸滤池</th>
				<th>洗V型滤池</th>
				<th>碳池反冲洗</th>
				<th>机加池排泥</th>
				<th>回流进水</th>
				<th>蓄  水  量</th>
				<th>预测水位</th>
			</tr>
		
		
			<tr id="tr1">
				<td>
				<input type="hidden" id="splitSign" name="split" style="width:1px;height:25px"/>
				</td>
				<td>
				<input type="hidden" id="dateTempAdd" name="dateTemp" style="width:1px;height:25px"/>
				</td>
				<td>
				<input type="hidden" id="IDAdd" name="dataAnalysis.ID" style="width:1px;height:25px"/>
				</td>
				<td id="indexNum1">1</td>
				<td>
					<!-- 时间 -->
					<input name="dataAnalysis.t" id="tAdd1" type="datetime-local" style="width:200px;height:25px" />
				</td>
				<td>
				<!-- 水池编号 -->
					<!--  <input class="easyui-validatebox textbox" name="dataAnalysis.PoolID" id="PoolIDAdd"
										style="width:200px;height:25px" data-options="required:true,missingMessage:'请输入水池编号'" />
					-->
					<select id="PoolIDAdd1" name="dataAnalysis.PoolID" class="easyui-combox" style="width:200px;height:25px">
						<option value="MTG_QingS_SC01" selected>MTG_QingS_SC01</option>
						<option value="MTG_QingS_SC02">MTG_QingS_SC02</option>
						<option value="MTG_QingS_SC03">MTG_QingS_SC03</option>
					</select>
				</td>
				<td>
					<!-- 总进水量 -->
					<input id="InVAdd1" name="dataAnalysis.InV" style="width:100px;height:25px" data-options="min:0,precision:0," />
				</td>
				<td>
					<!-- 出  水  量 -->
					<input id="OutVAdd1" name="dataAnalysis.OutV" style="width:100px;height:25px" data-options="min:0,precision:0" />
				</td>
				<td>
					<!-- 洗虹吸滤池 -->
					<input id="HXOutVAdd1" name="dataAnalysis.HXOutV" style="width:100px;height:25px" data-options="min:0,precision:0"/>
				</td>
				<td>
					<!-- 洗V型滤池 -->
					<input id="LCOutVAdd1" name="dataAnalysis.LCOutV" style="width:100px;height:25px" data-options="min:0,precision:0"/>
				</td>
				<td>
					<!-- 炭池反冲洗 -->
					<input id="TCOutVAdd1" name="dataAnalysis.TCOutV" style="width:100px;height:25px" data-options="min:0,precision:0" />
				</td>
				<td>
					<!-- 机加池排泥 -->
					<input id="JJOutVAdd1" name="dataAnalysis.JJOutV" style="width:100px;height:25px" data-options="min:0,precision:0"/>
				</td>
				<td>
					<!-- 回流进水 -->
					<input id="HLInVAdd1" name="dataAnalysis.HLInV" style="width:100px;height:25px" data-options="min:0,precision:0"/>
				</td>
				<td>
					<!-- 蓄  水  量 -->
					<input id="StorageAdd1" name="dataAnalysis.Storage" style="width:100px;height:25px" data-options="precision:0"/>
				</td>
				<td>
					<!-- 预测水位 -->
					<input id="PreHAdd1" name="dataAnalysis.PreH" style="width:100px;height:25px" data-options="precision:2"/>
				</td>
			</tr>
		
	</table>	 
						<a id="addButton" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-add'" >Add</a>
						 
					</form>
				</div>
			</div>
			
			<div style="display:none;width:400px">
				<div id="tabSearch" class="easyui-dialog"  data-options="closed:true" style="align:center;width:400px;height:270px;padding:10px 60px 20px 60px">
					<form id="frmSearch">
						<dl>
							 
								<br /> &nbsp; &nbsp; &nbsp; 时 &nbsp; &nbsp; &nbsp; 间: &nbsp;<input
									class="easyui-datebox" style="width:150px" id="searchT"
									name="searchT" text="" type="text"></input>
							 
							 	<br/><br/>
								<br/> &nbsp; &nbsp; &nbsp;
								<!-- 水池编号:  <input  class="easyui-validatebox" type="text" style="width:120px" id="searchPoolID"
					                 size="20px" name="searchPoolID" ></input> -->
								水池编号:&nbsp;
								<!--  <input type="text" size="15" id="searchPoolID" name="searchPoolID" /> -->
								<input class="easyui-combobox" style="width:150px"
									id="searchPoolID" name="searchPoolID" type="text"></input>
							 
						</dl>
					</form>
					</div>
				</div>
			</div>
		</center>

		<jsp:include page="down.jsp" />


		<script src="js/QS1.js" type="text/javascript" charset="UTF-8"></script>
	</div>
</body>
</html>

