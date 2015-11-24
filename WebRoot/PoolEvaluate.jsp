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
<script type="text/javascript" src="highcharts/highcharts.js" ></script>
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
	height: 800px;
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
	height: 1030px;
	width: 1600px;
	background-position: bottom;
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
	left:300px;"
}

#tab_description {
    font-family: '微软雅黑','Arial';
    position: absolute;
    /*  left:1380px;
    top: 570px; */
    top:540px;
    left:50px;
    padding:5px;
    z-index: 999;
    font-size:14px;
    width:220px;
    height:380px;
    border:1px solid #95B8E7
    }

#tab_description h1 {
    font-size:20px;
    color:#ff4400;
    font-weight:bold;
    }

 #treeGuid {
	width: 220px;
	position: absolute;
	top: 20px;
	left: 50px;
	height: 500px;
	padding: 5px;
	border: 1px solid #95B8E7;
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

			<div id="tab_entity">
				<table id="poolEvaluatebody" class="easyui-datagrid" style="max-width:1050px;height:300px;"></table>
				<div class="easyui-tabs" style="max-width:1050px;height:600px;">
					<div title="浊度分析图" id="imageContainer1" style="width:1050px;height:600px;padding:0px"></div>
					<div title="加药量分析图" id="imageContainer2" style="width:1050px;height:600px;padding:0px"></div>
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
					<input class="easyui-validatebox textbox" id="PoolID"
						name="poolEvaluate.PoolID" style="width:205px;height:25px"
						data-options="required:true,missingMessage:'请输入机加池编号'" />	<br /><br /> 
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
				</div>
		</div>

		<jsp:include page="down.jsp" />
	</div>
</body>
</html>
