<%@ page language="java" contentType="text/html; charset=UTF-8" 
	pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":"
			+ request.getServerPort() + path + "/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.ddd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
	<head>
		<base href="<%=basePath%>" />
	<meta charset="UTF-8">
    <meta http-equiv="Access-Control-Allow-Origin" content="*">
    <meta http-equiv="Content-Type" content="text/html; charset=gb2312"/>
    <title>北京自来水集团工艺平台</title>

<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
<link rel="stylesheet" href="css/top_down.css">
<link rel="stylesheet" href="css/normal.css">
<link rel="stylesheet" href="css/breadcrumb.css"> 

<link rel="stylesheet" type="text/css" href="easyui/themes/default/easyui.css" />
<link rel="stylesheet" type="text/css" href="easyui/themes/icon.css" />
<link rel="stylesheet" type="text/css" href="style/myeasyui.css" />

<script src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="easyui/jquery.min.js"></script>
<script type="text/javascript" src="easyui/jquery.easyui.min.js"></script>
<script type="text/javascript" src="easyui/locale/easyui-lang-zh_CN.js"></script>
<script type="text/javascript" src="highcharts/highstock.js" ></script>
<script type="text/javascript" src="highcharts/exporting.src.js"></script>
<script type="text/javascript" src="highcharts/themes/grid.js"></script>

<script type="text/javascript" src="js/ajaxfileupload.js"></script>
<script type="text/javascript" src="js/poolEvaluate.js"></script>

<style>
body {
	background: #afd9ee;
     }
     
#myPage {
	font-family: '微软雅黑','Source Sans Pro';
	font-size: 15px;
	width: 1600px;
	height: 1600px;
	margin:0px auto;
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
	height: 1600px;
	width: 1600px;
	background-position: bottom;
	}

#btn_group {
	position:absolute;
	top: 20px;
}

#pageFooter {
	background: #e5e5e5;
	}

#pageFooter p {
	text-align: center;
	}

#myNavbar a:hover {
	color: #d510ff;
	background: #ffeae4;}
 
#tab_entity {
	position: absolute;
	top:20px; 
	left:300px;
	width: 1050px;
	margin:0;
	padding:0;
	boeder:0;
}

#leftContainer {
	position: absolute;
	top: 20px;
	left: 20px;
}

#treeGuid {
	position: relative;
	top: 0px;
	width: 220px;
	height: 568px;
	padding: 5px;
	border: 1px solid #95B8E7;
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
 
 #tab_export {
    font-family: '微软雅黑','Arial';
    position: absolute;
    left:1482px;
   /*  top: 320px; */
    top:350px;
    z-index: 999;
    font-size:14px;
    width:200px;
    }

.legendTitle {
	color:blue;
	font-weight:bolder;
}

#legendTable tr, #legendTable td {
	padding: 5px;
	margin: 5px;
}

</style>
</head>
<body>
    <jsp:include page="top.jsp" />
    
    <div id="myPage">
    	<div id="myContent" style="overflow: hidden">
    		<!-- 操作按钮 -->
    		<div id="btn_group" class="btn-group-vertical btn-group-lg" role="group">
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
				
			<!-- 文件导出操作 -->
			<div id="tab_export"><br /><br />
				<form action="${pageContext.request.contextPath}/importPoolEvaluate"
					name="uploadForm" enctype="multipart/form-data" method="post">
					<input type=file name="upload" id="upload" style="display: none;"
						onchange="fakeUpload.value=value"> 
					<input type=button class="btn btn-primary" value="选择文件" 
						onclick=upload.click() style="width:105px;font-size:18px"><br />
					<input id="fakeUpload" name="fakeUpload" type="text"
						ondblclick=upload.click() style="width:105px;height:25px;border:1px solid #95B8E7;">
					<br /><br />
					<input id="btn-import" class="btn btn-primary" style="font-size:18px;width:105px;" value="导入"
						onclick="javascript:import2DB();fakeUpload.value='';" />
				</form><br />
				<a href="download/PoolEvaluate.xls"	style="margin:0;border:0;font-size:15px;">点击下载机加池<br /> &nbsp; &nbsp;分析表模板 &nbsp; &nbsp; </a> 
				<input type="hidden" value='${errorMsg}' id="errMsg" />
			</div>
			
			
			<div id="leftContainer">
				<div id="treeGuid" style="overflow:scroll">
					<p>选择时间:</p><br/>
					<!-- 树形导航菜单 -->
					<ul id="timeTree" class="easyui-tree"></ul>
				</div>
				<!-- 特征量说明 -->
				<div id="tab_description">
					<h1 style="font-size: 20px">填表说明:</h1>
					<p style="font-size: 15px">各特征量取值分段为:</p>
					<img src="image/JJC1.png" alt="" /><br /><br />
					<img src="image/JJC2.png" alt="" /><br /><br />
					<img src="image/JJC3.png" alt="" /><br /><br />
					<img src="image/JJC4.png" alt="" /><br />
				</div>
				
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
				
			</div>
			
			

			<div id="tab_entity">
				<table id="poolEvaluatebody" class="easyui-datagrid" style="width:1050;height:300px;"></table><br />
				
				<div class="easyui-tabs" style="width:1050px;height:690px;">
					<div title="浊度分析图" id="imageContainer1" style="width:1050px;height:690px;padding:0px;border-width:0px"></div>
					<div title="加药量分析图" id="imageContainer2" style="width:1050px;height:690px;padding:0px;border-width:0px"></div>
				 </div>
			</div>
			
			<!-- 编辑数据的div，默认看不到 -->
			<div style="display:none">
				<div id="tabEdit" class="easyui-dialog" data-options="closed:true"
					style="align:center;width:830px;height:540px;padding:10px 60px 20px 60px">
				<form id="frmEdit">
					<input type="hidden" id="ID" name="poolEvaluate.ID" /> <br />
					&nbsp; &nbsp; &nbsp; 时 &nbsp; &nbsp; &nbsp; &nbsp; 间 : &nbsp; 
					<input	class="easyui-datebox" id="t" name="poolEvaluate.t"
						style="width:200px;height:25px" required="required" /> 
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 机加池编号 : &nbsp; 
					<select class="easyui-validatebox easyui-combox textbox" id="PoolID"
						name="poolEvaluate.PoolID" style="width:200px;height:25px"
						data-options="required:true,missingMessage:'请输入机加池编号'" >
						<option value="MTG_QingS_SC01" selected>MTG_QingS_SC01</option>
						<option value="MTG_QingS_SC02">MTG_QingS_SC02</option>
						<option value="MTG_QingS_SC03">MTG_QingS_SC03</option>
					</select>	<br /><br /> 
					&nbsp; &nbsp; &nbsp; PAC投加量 : &nbsp; 
					<input class="easyui-numberbox textbox" style="width:195px;height:25px"
						id="PAC" name="poolEvaluate.PAC" data-options="prompt:'',precision:2">
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; FeCl3投加量 : &nbsp; 
					<input class="easyui-numberbox textbox" style="width:198px;height:25px"
						id="FeCl3" name="poolEvaluate.FeCl3" data-options="prompt:'',precision:2" /><br /><br />
					&nbsp; &nbsp; &nbsp; 开  &nbsp; 启 &nbsp; 度  : &nbsp; 
					<input class="easyui-numberbox textbox" style="width:200px;height:25px"
						id="OpenDegree" name="poolEvaluate.OpenDegree" data-options="prompt:'',precision:2,min:0" /> 
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 转 &nbsp; &nbsp; &nbsp; &nbsp; 速  : &nbsp; 
					<input class="easyui-numberbox" style="width:210px;height:25px" id="RotationSpeed"
						name="poolEvaluate.RotationSpeed" data-options="prompt:'',precision:2,min:0" /><br /><br /> 
					&nbsp; &nbsp; &nbsp; 沉  &nbsp; 降  &nbsp; 比 : &nbsp; 
					<input class="easyui-numberbox" style="width:200px;height:25px" id="SV"
						name="poolEvaluate.SV" data-options="prompt:'',precision:2" />
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 水 &nbsp; &nbsp; &nbsp; &nbsp; 温 : &nbsp; 
					<input class="easyui-numberbox" style="width:210px;height:25px" id="WaterTemp"
						name="poolEvaluate.WaterTemp" data-options="prompt:'',precision:2" /><br /><br/>
					&nbsp; &nbsp; &nbsp; 小斗排泥时长 : &nbsp; 
					<input class="easyui-numberbox" style="width:183px;height:25px"
						id="SmallMudFre" name="poolEvaluate.SmallMudFre" data-options="prompt:'',precision:2" /> 
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 大斗排泥时长 : &nbsp; 
					<input class="easyui-numberbox" style="width:190px;height:25px"
						id="BigMudFre" name="poolEvaluate.BigMudFre" data-options="prompt:'',precision:2" /><br /><br />
					&nbsp; &nbsp; &nbsp; 原 水 浊 度  : &nbsp;
					<input class="easyui-numberbox" style="width:198px;height:25px"
						id="NTU" name="poolEvaluate.NTU" data-options="prompt:'',precision:2" />
					&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; 原水藻类含量 : &nbsp; 
					<input class="easyui-numberbox" style="width:190px;height:25px"
						id="AlgaeContent" name="poolEvaluate.AlgaeContent" data-options="prompt:'',precision:2" /><br /><br />
					&nbsp; &nbsp; &nbsp; 出 水 浊 度 : &nbsp;
					<input class="easyui-numberbox" style="width:198px;height:25px"
						id="OutNTU" name="poolEvaluate.OutNTU" data-options="prompt:'',precision:2" />
					<!-- &nbsp; &nbsp;状&nbsp;态:&nbsp;
					<select id="state" class="easyui-combobox" name="poolEvaluate.state" style="width:150px;">
					<option value="0">不正常</option>
					<option value="1">正常</option>
					</select> --> <!-- <input  size="10" id="state" name="poolEvaluate.state" /> -->
					&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; 预 加 氯 量 : &nbsp; 
					<input class="easyui-numberbox" style="width:205px;height:25px"
						id="CL" name="poolEvaluate.CL" data-options="prompt:'',precision:2" />
					</form>
				</div>
				
			<div id="newEdit" class="easyui-dialog" data-options="closed:true"
						style="align: center; width: 1800px; height: 540px; padding: 10px 60px 20px 60px">
						<form id="newfrmEdit">
							<br />
							<!-- <input type="hidden" id="dateTempAdd" name="dateTemp"	/> 
						<input type="hidden" id="IDAdd" name="dataAnalysis.ID" /> -->
							<table id="tab" style="align: center; width: 1700px">


								<tr>
									<th></th>
									<th></th>
									<th>序 号</th>
									<th>时 间</th>
									<th>机加池编号</th>
									<th>PAC投放量</th>
									<th>FeCl3投放量</th>
									<th>开启度</th>
									<th>转速</th>
									<th>沉降比</th>
									<th>水温</th>
									<th>小斗排泥时长</th>
									<th>大斗排泥时长</th>
									<th>原水浊度</th>
									
									<th>原水藻类含量</th>
									<th>出水浊度</th>
									<th>预加氯量</th>
									
								</tr>


								<tr id="tr1">
									<td><input type="hidden" id="splitSign" name="split"
										style="width: 1px; height: 25px" /></td>
									<td><input type="hidden" id="IDAdd" name="poolEvaluate.ID"
										style="width: 1px; height: 25px" /></td>
									<td id="indexNum1">1</td>
									<td>
										<!-- 时间 --> <input name="poolEvaluate.t" id="tAdd1"
										type="date" style="width: 200px; height: 25px" />
									</td>
									<td>
										<!-- 机加池编号 -->
										<select id="PoolIDAdd1" name="poolEvaluate.PoolID"
										class="easyui-combox" style="width: 200px; height: 25px">
											<option value="MTG_QingS_SC01" selected>MTG_QingS_SC01</option>
											<option value="MTG_QingS_SC02">MTG_QingS_SC02</option>
											<option value="MTG_QingS_SC03">MTG_QingS_SC03</option>
									</select>
									</td>
									<td>
										<!-- PAC投加量 --> <input id="PACAdd1" name="poolEvaluate.PAC"
										style="width: 100px; height: 25px"
										data-options="min:0,precision:0," />
									</td>
									<td>
										<!-- FeCl3投加量 --> <input id="FeCl3Add1" name="poolEvaluate.FeCl3"
										style="width: 100px; height: 25px"
										data-options="min:0,precision:0" />
									</td>
									<td>
										<!-- 开启度 --> <input id="OpenDegreeAdd1"
										name="poolEvaluate.OpenDegree" style="width: 100px; height: 25px"
										data-options="min:0,precision:0" />
									</td>
									<td>
										<!-- 转速 --> <input id="RotationSpeedAdd1"
										name="poolEvaluate.RotationSpeed" style="width: 100px; height: 25px"
										data-options="min:0,precision:0" />
									</td>
									<td>
										<!-- 沉降比 --> <input id="SVAdd1"
										name="poolEvaluate.SV" style="width: 100px; height: 25px"
										data-options="min:0,precision:0" />
									</td>
									<td>
										<!-- 水温 --> <input id="WaterTempAdd1"
										name="poolEvaluate.WaterTemp" style="width: 100px; height: 25px"
										data-options="min:0,precision:0" />
									</td>
									<td>
										<!-- 小斗排泥时长 --> <input id="SmallMudFreAdd1"
										name="poolEvaluate.SmallMudFre" style="width: 100px; height: 25px"
										data-options="min:0,precision:0" />
									</td>
									<td>
										<!-- 大斗排泥时长 --> <input id="BigMudFreAdd1" name="poolEvaluate.BigMudFre"
										style="width: 100px; height: 25px"
										data-options="min:0,precision:0" />
									</td>
									<td>
										<!-- 原水浊度 --> <input id="NTUAdd1"
										name="poolEvaluate.NTU" style="width: 100px; height: 25px"
										data-options="precision:0" />
									</td>
									<td>
										<!-- 原水藻类含量 --> <input id="AlgaeContentAdd1"
										name="poolEvaluate.AlgaeContent" style="width: 100px; height: 25px"
										data-options="precision:0" />
									</td>
									<td>
										<!-- 出水浊度 --> <input id="OutNTUAdd1" name="poolEvaluate.OutNTU"
										style="width: 100px; height: 25px" data-options="precision:2" />
									</td>
									<td>
										<!-- 预加氯量 --> <input id="CLAdd1" name="poolEvaluate.CL"
										style="width: 100px; height: 25px" data-options="precision:2" />
									</td>
								</tr>

							</table>
							<a id="addButton" href="#" class="easyui-linkbutton"
								data-options="iconCls:'icon-add'">添加</a>

						</form>
					</div>	
				
			</div>
			
			<div style="display:none">
					<div id="tabSearch" class="easyui-dialog"
						data-options="closed:true"
						style="align:center;width:600px;height:400px;padding:10px 60px 20px 60px">
						<form id="frmSearch">

							<br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 起  &nbsp;始  &nbsp;日 &nbsp; 期 : &nbsp; <input class="easyui-datebox" style="width:150px"
								id="lowT" name="lowT"/ ><br/><br/>
								&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 结  &nbsp;束  &nbsp;日 &nbsp; 期 : &nbsp; <input class="easyui-datebox" style="width:150px"
								id="highT" name="highT"/ > <br />
							<br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 水  &nbsp;池 &nbsp; 编  &nbsp;号 : &nbsp; <input
								class="easyui-combobox" type="text" style="width:150px"
								id="searchPoolID" name="searchPoolID" /> <br />
							<br /> <!-- <select  lass="easyui-combobox" type="text"  id="searchPoolID" style="width:120px"
					                  name="searchPoolID" >
					                   <option value="" selected="">--请选择--</option>
					          </select> --> <!-- 
						<br/>
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
					 状  &nbsp; 态:<select id="searchState" name="searchState" style="width:120px" class="easyui-combobox" >
                                    <option value="-1" selected="">--请选择--</option>
                                    <option value="0">不正常</option>
                                    <option value="1">正常</option>
                                 </select>
					 --> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 来  &nbsp;水 &nbsp; 浊  &nbsp;度 : &nbsp; <input
								class="easyui-numberbox" id="lowNTU" name="lowNTU"
								style="width:120px" value="0"></input> ~ <input
								class="easyui-numberbox" id="highNTU" name="highNTU"
								style="width:120px" value="100"></input> <br />
							<br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 来水藻类含量 : &nbsp; <input
								class="easyui-numberbox" id="lowAlgaeContent"
								name="lowAlgaeContent" style="width:120px" value="0"></input> ~
								<input class="easyui-numberbox" id="highAlgaeContent"
								name="highAlgaeContent" style="width:120px" value="100"></input>
								<br />
							<br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 出  &nbsp;水  &nbsp;浊 &nbsp; 度 : &nbsp; <input
								class="easyui-numberbox" id="lowOutNTU" name="lowOutNTU"
								style="width:120px" value="0"></input> ~ <input
								class="easyui-numberbox" id="highOutNTU" name="highOutNTU"
								style="width:120px" value="100"></input>
								<br />
							<br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 沉  &nbsp; &nbsp; 降  &nbsp; &nbsp; 比 : &nbsp; <input
								class="easyui-numberbox" id="lowSV" name="lowSV"
								style="width:122px" value="0" data-options="prompt:'',precision:2"></input> ~ <input
								class="easyui-numberbox" id="highSV" name="highSV"
								style="width:120px" value="100" data-options="prompt:'',precision:2"></input>
						</form>
					</div>
					
					<div id="newtabSearch" class="easyui-dialog"
						data-options="closed:true"
						style="align: center; width: 400px; height: 270px; padding: 10px 60px 20px 60px">
						<form id="newfrmSearch">
							<dl>

								<br /> &nbsp; &nbsp; &nbsp; 时 &nbsp; &nbsp; &nbsp; 间: &nbsp;
								<input class="easyui-datebox" style="width: 150px" id="searchT"
									name="searchT" text="" type="text"></input>

								<br />
								<br />
								<br /> &nbsp; &nbsp; &nbsp;
								<!-- 水池编号:  <input  class="easyui-validatebox" type="text" style="width:120px" id="searchPoolID"
					                 size="20px" name="searchPoolID" ></input> -->
								
								机加池编号:&nbsp;
								<!--  <input type="text" size="15" id="searchPoolID" name="searchPoolID" /> -->
								<input class="easyui-combobox" style="width: 150px"
									id="searchPoolID" name="searchPoolID" type="text"></input>

							</dl>
						</form>
					</div>
				</div>
		</div>

		<jsp:include page="down.jsp" />
	</div>
</body>
</html>
