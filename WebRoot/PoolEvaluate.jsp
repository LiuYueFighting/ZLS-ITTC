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
<link rel="stylesheet" href="css/top_down.css">
<link rel="stylesheet" href="css/breadcrumb.css"> 

<link rel="stylesheet" type="text/css" href="easyui/themes/default/easyui.css" />
<link rel="stylesheet" type="text/css" href="easyui/themes/icon.css" />
<link rel="stylesheet" type="text/css" href="style/myeasyui.css" />

<script src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="easyui/jquery.min.js"></script>
<script type="text/javascript" src="easyui/jquery.easyui.min.js"></script>
<script type="text/javascript" src="easyui/locale/easyui-lang-zh_CN.js"></script>

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
        #myNav{
            background: #f1f3f5;
        }
        #pageHead {
            height: 50px;
            font-size: 19px;
        }
        #pageHead .navbar{
            /*opacity: 0.85;*/
            z-index: 10;
        }
        #myContent{
            margin: 0px auto;
            position: relative;
            height: 1030px;
            width: 1600px;

            background-position: bottom;
        }

        #pageFooter{
            background: #e5e5e5;
        }
        #pageFooter p{
            text-align: center;
        }
        #myNavbar a:hover
        {
            color: #d510ff;
            background: #ffeae4;}
   
      
    #tab_description{
    font-family: '微软雅黑','Arial';
    position: absolute;
   /*  left:1380px;
    top: 570px; */
    top:40px;
    left:50px;
    padding:5px;
    z-index: 999;
    font-size:14px;
    width:220px;
    height:900px;
    border:1px solid #95B8E7
    }
    #tab_description h1{
    font-size:20px;
    color:#ff4400;
    font-weight:bold;
    }

 #tab_export{
    font-family: '微软雅黑','Arial';
    position: absolute;
    left:1482px;
    top: 320px;
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
			<span style="color:#6699CC">机加池评估表模板</span><br/> &nbsp;&nbsp;&nbsp;
			<a href="download/PoolEvaluate.xls" style="color:#6699CC">点击下载</a> <br />
				<!-- 操作按钮 -->
				<div id="btn_group" class="btn-group-vertical btn-group-lg"
					role="group">

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
				</div> <!-- 文件导出操作 -->
				<div id="tab_export">
					<form id="exportPoolEvaluate">
						<span style="font-size:18px">&nbsp;导出文件名</span><br /> <input
							type="text" id="downloadFilename" name="downloadFilename"
							style="width:105px;height:25px;border:1px solid #95B8E7;" /> <br />
						<br /> <input id="btn-export" class="btn btn-primary"
							style="font-size:18px;width:105px;" value="导出"
							onclick="javascript:export2excel()" />
					</form>

					<br />
					<br />
					<form
						action="${pageContext.request.contextPath}/importPoolEvaluate"
						name="uploadForm" enctype="multipart/form-data" method="post">

						<!-- <input type="file" id="upload" name="upload"
							style="width:105px;height:30px;font-size:16px" /> -->
						<input type=file name="upload"  id="upload" style="display: none;"
							 onchange="ye.value=value">						
						<input type=button class="btn btn-primary"value="选择文件"
							 onclick=upload.click() style="width:105px;font-size:18px"><br/>
						<input name=ye type="text" ondblclick=upload.click() 											
							style="width:105px;height:25px;border:1px solid #95B8E7;"><br/><br/>
						 <input
							id="btn-import" class="btn btn-primary"
							style="font-size:18px;width:105px;" value="导入"
							onclick="javascript:import2DB()" />
					</form>
				</div> <!-- 特征量说明 -->
				<div id="tab_description">
					<h1 style="font-size: 20px">填表说明:</h1>
					<p style="font-size: 15px">各特征量取值分段为：</p>
					<img src="image/JJC1.png" alt="" /><br />
					<br /> <img src="image/JJC2.png" alt="" /><br />
					<br /> <img src="image/JJC3.png" alt="" /><br />
					<br /> <img src="image/JJC4.png" alt="" /><br />
				</div>

			<div style="position: absolute; top:40px; left:300px;">
				<table id="poolEvaluatebody" class="easyui-datagrid">
					</table>
			</div>
			<!-- 编辑数据的div，默认看不到 -->
				<div style="display:none">
					<div id="tabEdit" class="easyui-dialog" data-options="closed:true"
						style="align:center;width:830px;height:540px;padding:10px 60px 20px 60px">
						<form id="frmEdit">
							<input type="hidden" id="ID" name="poolEvaluate.ID" /> <br />
							&nbsp; &nbsp; &nbsp; 时 &nbsp; &nbsp; &nbsp; &nbsp; 间 : &nbsp; <input
								class="easyui-datebox" id="t" name="poolEvaluate.t"
								style="width:200px;height:25px" required="required" /> &nbsp;
							&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 机加池编号 &nbsp; : &nbsp; <input
								class="easyui-validatebox textbox" id="PoolID"
								name="poolEvaluate.PoolID" style="width:200px;height:25px"
								data-options="required:true,missingMessage:'请输入机加池编号'" /> <br />
							<br /> &nbsp; &nbsp; &nbsp; PAC投加量 :&nbsp; <input
								class="easyui-numberbox textbox" style="width:200px;height:25px"
								id="PAC" name="poolEvaluate.PAC"
								data-options="prompt:'请输入PAC投加量.',precision:2"> &nbsp;
								&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; FeCl3投加量 :&nbsp; <input
								class="easyui-numberbox textbox" style="width:200px;height:25px"
								id="FeCl3" name="poolEvaluate.FeCl3"
								data-options="prompt:'请输入FeCl3投加量.',precision:2" /> <br />
							<br /> &nbsp; &nbsp; &nbsp; 开 &nbsp;启&nbsp; 度 : &nbsp; &nbsp; <input
								class="easyui-numberbox textbox" style="width:200px;height:25px"
								id="OpenDegree" name="poolEvaluate.OpenDegree"
								data-options="prompt:'',precision:2" /> &nbsp; &nbsp; &nbsp;
								&nbsp; &nbsp; &nbsp; &nbsp; 转 &nbsp; &nbsp; &nbsp; &nbsp; 速 :
								&nbsp; <input class="easyui-numberbox"
								style="width:210px;height:25px" id="RotationSpeed"
								name="poolEvaluate.RotationSpeed"
								data-options="prompt:'',precision:2" /> <br />
							<br /> &nbsp; &nbsp; &nbsp; 沉 &nbsp;降 &nbsp;比 : &nbsp; &nbsp; <input
								class="easyui-numberbox" style="width:200px;height:25px" id="SV"
								name="poolEvaluate.SV" data-options="prompt:'',precision:2" />
								&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 小斗排泥时长 : &nbsp;
								<input class="easyui-numberbox" style="width:190px;height:25px"
								id="SmallMudFre" name="poolEvaluate.SmallMudFre"
								data-options="prompt:'',precision:2" /> <br />
							<br /> &nbsp; &nbsp; &nbsp; 大斗排泥时长 :&nbsp; <input
								class="easyui-numberbox" style="width:190px;height:25px"
								id="BigMudFre" name="poolEvaluate.BigMudFre"
								data-options="prompt:'',precision:2" /> &nbsp; &nbsp; &nbsp;
								&nbsp; &nbsp; &nbsp; &nbsp; 原 水 浊 度 : &nbsp;&nbsp; <input
								class="easyui-numberbox" style="width:200px;height:25px"
								id="NTU" name="poolEvaluate.NTU"
								data-options="prompt:'',precision:2" /> <br />
							<br /> <!-- 	&nbsp; &nbsp;水&nbsp; &nbsp;温: &nbsp; &nbsp;  
				<input class="easyui-numberbox" precision="1" size="15" id="WaterTemp" name="poolEvaluate.WaterTemp" />
				--> &nbsp; &nbsp; &nbsp; 原水藻类含量 :&nbsp; <input
								class="easyui-numberbox" style="width:190px;height:25px"
								id="AlgaeContent" name="poolEvaluate.AlgaeContent"
								data-options="prompt:'',precision:2" /> &nbsp; &nbsp; &nbsp;
								&nbsp; &nbsp; &nbsp; &nbsp; 出 水 浊 度 : &nbsp;&nbsp; <input
								class="easyui-numberbox" style="width:200px;height:25px"
								id="OutNTU" name="poolEvaluate.OutNTU"
								data-options="prompt:'',precision:2" /> <br />
							<br /> <!-- &nbsp; &nbsp;
				状&nbsp;态:&nbsp;
				<select id="state" class="easyui-combobox" name="poolEvaluate.state" style="width:150px;">
					<option value="0">不正常</option>
					<option value="1">正常</option>
				</select> --> <!-- <input  size="10" id="state" name="poolEvaluate.state" /> -->


								&nbsp; &nbsp; &nbsp; 预 加 氯 量 : &nbsp; <input
								class="easyui-numberbox" style="width:200px;height:25px" id="CL"
								name="poolEvaluate.CL" data-options="prompt:'',precision:2" />
						</form>
					</div>
				</div>
				<div style="display:none">
					<div id="tabSearch" class="easyui-dialog"
						data-options="closed:true"
						style="align:center;width:600px;height:400px;padding:10px 60px 20px 60px">
						<form id="frmSearch">

							<br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 时 &nbsp; &nbsp; &nbsp;
							间： &nbsp; <input class="easyui-datebox" style="width:150px"
								id="searchT" name="searchT"/ > <br />
							<br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 水 池 编 号 : &nbsp; <input
								class="easyui-combobox" type="text" style="width:150px"
								id="searchPoolID" name="searchPoolID" /> <br />
							<br /> <!-- <select  lass="easyui-combobox" type="text"  id="searchPoolID" style="width:120px"
					                  name="searchPoolID" >
					                   <option value="" selected="">--请选择--</option>
					          </select> --> <!-- 
						<br/>
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
					 状  &nbsp; 态：<select id="searchState" name="searchState" style="width:120px" class="easyui-combobox" >
                                    <option value="-1" selected="">--请选择--</option>
                                    <option value="0">不正常</option>
                                    <option value="1">正常</option>
                                 </select>
					 --> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 来 水 浊 度： &nbsp; <input
								class="easyui-numberbox" id="lowNTU" name="lowNTU"
								style="width:60px" value="0"></input> ~ <input
								class="easyui-numberbox" id="highNTU" name="highNTU"
								style="width:60px" value="100"></input> <br />
							<br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 来水藻类含量： &nbsp; <input
								class="easyui-numberbox" id="lowAlgaeContent"
								name="lowAlgaeContent" style="width:60px" value="0"></input> ~
								<input class="easyui-numberbox" id="highAlgaeContent"
								name="highAlgaeContent" style="width:60px" value="100"></input>
								<br />
							<br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 出 水 浊 度： &nbsp; <input
								class="easyui-numberbox" id="lowOutNTU" name="lowOutNTU"
								style="width:60px" value="0"></input> ~ <input
								class="easyui-numberbox" id="highOutNTU" name="highOutNTU"
								style="width:60px" value="100"></input>
						</form>
					</div>
				</div>
		</div>

		<jsp:include page="down.jsp" />

	<script src="js/QS1.js" type="text/javascript" charset="UTF-8"></script>
	</div>
</body>
</html>
