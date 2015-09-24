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

<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>

<link rel="stylesheet" type="text/css"	href="easyui/themes/default/easyui.css" />
<link rel="stylesheet" type="text/css"	href="style/myeasyui.css" />
<link rel="stylesheet" type="text/css" href="easyui/themes/icon.css" />

<script type="text/javascript" src="easyui/jquery.min.js"></script>
<script type="text/javascript" src="easyui/jquery.easyui.min.js"></script>
<script type="text/javascript" src="easyui/locale/easyui-lang-zh_CN.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/poolEvaluate.js"></script>
<link rel="stylesheet" href="style/myStyle.css" type="text/css" />
<link rel="stylesheet" type="text/css" 	href="style/myeasyui.css" />
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

        /*#word_title{*/
        /*font-family: '微软雅黑','Arial';*/
        /*font-size: 39px;*/
        /*color: #eeeeee;*/
        /*position: absolute;*/
        /*top: 180px;*/
        /*left: 590px;*/
        /*opacity: 0.85;*/
        /*}*/
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
   #myContent
   {
      /* background: url("image/QSC3.png") no-repeat;  */ 
      /* background-position: center; */
   }
    #tab_description{
    font-family: '微软雅黑','Arial';
    position: absolute;
    left:1400px;
    top: 335px;
    z-index: 999;
    font-size:14px;
    width:200px;
    }
    #tab_description h1{
    font-size:20px;
    color:#ff4400;
    font-weight:bold;
    }

    </style>
</head>
<body>
    <jsp:include page="top.jsp" />

<div id="myPage">
    <div id="myContent" style="overflow: hidden">

        <a href="download/QSC_cal.xlsx">点击下载机加池评估表 - 模板 .xlsx</a>
     <!-- <div id="tb" style="padding:5px;height:auto">   
	<form id="frmSearch"> 
    <div style="margin-bottom:5px">    
        <a href="#" class="easyui-linkbutton" iconCls="icon-add" plain="true" onclick="javascript:addPoolEvaluate()">添加</a>    
        <a href="#" class="easyui-linkbutton" iconCls="icon-edit" plain="true" onclick="javascript:editPoolEvaluate()">编辑</a>    
        <a href="#" class="easyui-linkbutton" iconCls="icon-cancel" plain="true" onclick="javascript:deletePoolEvaluate()">删除</a> 
        <a href="#" class="easyui-linkbutton" iconCls="icon-search" onclick="javascript:listAllPoolEvaluate()">查询全部</a>
   	   </div> 
   	 <div>    
         Date From: <input class="easyui-datebox" style="width:80px">    
        To: <input class="easyui-datebox" style="width:80px">    
       &nbsp; &nbsp; 时间:     
        <input class="easyui-datebox" style="width:120px" id="searchT" name="searchT" text="" type="text"> 
        <a href="#" class="easyui-linkbutton" iconCls="icon-search" onclick="javascript:searchPoolEvaluate()">查询</a>
        </form>    
     </div>  -->
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
			    
		</div>
		<div id="tab_description">
             <h1 style="font-size: 20px" >填表说明:</h1>
        <p style="font-size: 15px" >各特征量取值分段为：</p>
       	<img src="image/JJC1.png" alt=""/><br/><br/>
        <img src="image/JJC2.png" alt=""/><br/><br/>
        <img src="image/JJC3.png" alt=""/><br/><br/>
        <img src="image/JJC4.png" alt=""/><br/>        
        </div>
  	
  	<center><br/>
			<table id="poolEvaluatebody" class="easyui-datagrid">
			</table>
	</center>
			
	<!-- <div id="main">
			 <table id="poolEvaluatebody" class="easyui-datagrid">
			</table>
		</div>  -->
		<!-- 编辑数据的div，默认看不到 -->
		<div id="divEdit">
				<div id="tabEdit">
					<form id="frmEdit">
				<input type="hidden" id="ID" name="poolEvaluate.ID" />
				<br/>
					<dl>
						<dd>&nbsp; &nbsp;
							水池编号:&nbsp; <input type="text" size="15" id="PoolID" name="poolEvaluate.PoolID" />
							&nbsp; &nbsp; &nbsp; &nbsp; 
							时&nbsp; &nbsp;间:&nbsp;&nbsp;<input type="date" size="20" id="t" name="poolEvaluate.t" />
						</dd><br/>
						<dd>&nbsp; &nbsp;
							沉 降 比: &nbsp;&nbsp;<input class="easyui-numberbox" precision="2" type="text" size="15" id="SV" name="poolEvaluate.SV" />
							&nbsp; &nbsp;&nbsp; &nbsp; 
							开 启 度:&nbsp; <input class="easyui-numberbox" precision="2" type="text" size="18" id="OpenDegree" name="poolEvaluate.OpenDegree" />
						</dd><br/>
						<dd>&nbsp; &nbsp;
							转&nbsp; &nbsp;速: &nbsp; &nbsp; <input class="easyui-numberbox" precision="2" type="text" size="15" id="RotationSpeed" name="poolEvaluate.RotationSpeed" />
							&nbsp; &nbsp;&nbsp; &nbsp; 
							浊&nbsp; &nbsp;度: &nbsp; &nbsp;&nbsp;<input class="easyui-numberbox" precision="2" type="text" size="18" id="NTU" name="poolEvaluate.NTU" />
						</dd><br/>
						<dd>&nbsp; &nbsp;
							水&nbsp; &nbsp;温: &nbsp; &nbsp;  
							<input class="easyui-numberbox" precision="1"type="text" size="15" id="WaterTemp" name="poolEvaluate.WaterTemp" />
							&nbsp; &nbsp;&nbsp; &nbsp; 
							藻类含量:&nbsp;
							<input class="easyui-numberbox" precision="2" type="text" size="18" id="AlgaeContent" name="poolEvaluate.AlgaeContent" />
						</dd><br/>
						<dd>&nbsp; &nbsp;
							加FeCl3量:&nbsp;
							<input class="easyui-numberbox" precision="2" type="text" size="21" id="FeCl3" name="poolEvaluate.FeCl3" />
						</dd><br/>
						<dd>&nbsp; &nbsp;
							加PAC量:&nbsp;
							<input class="easyui-numberbox" precision="2" type="text" size="22" id="PAC" name="poolEvaluate.PAC" />
						</dd><br/>
						<dd>&nbsp; &nbsp;
							小斗排泥频率:&nbsp;
							<input class="easyui-numberbox" precision="0" type="text" size="18" id="SmallMudFre" name="poolEvaluate.SmallMudFre" />
						</dd><br/>
						<dd>&nbsp; &nbsp;
							大斗排泥频率:&nbsp;
							<input class="easyui-numberbox" precision="0" type="text" size="18" id="BigMudFre" name="poolEvaluate.BigMudFre" />
						</dd><br/>
						<dd>&nbsp; &nbsp;
							机加池出水浊度:&nbsp;
							<input class="easyui-numberbox" precision="2" type="text" size="16" id="OutNTU" name="poolEvaluate.OutNTU" />
						</dd><br/>
						<dd>&nbsp; &nbsp;
							状&nbsp;态:&nbsp;
							<select id="state" class="easyui-combobox" name="poolEvaluate.state" style="width:150px;">
								<option value="0">不正常</option>
								<option value="1">正常</option>
							</select>
							<!-- <input type="text" size="10" id="state" name="poolEvaluate.state" /> -->
							&nbsp; &nbsp;&nbsp;&nbsp; 
							预加氯:&nbsp;
							<input class="easyui-numberbox" precision="2" type="text" size="15" id="CL" name="poolEvaluate.CL" />
						</dd>
					</dl>
					</form>
				</div>
		</div>
		<div id="divSearch">
			<div id="tabSearch">
				<form id="frmSearch">
				<dl>
					<dd>
						<br/>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
					      时  &nbsp; 间： <input class="easyui-datebox" style="width:120px" id="searchT"
					                        name="searchT" text="" type="text"></input>
					
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

					    水池编号:  <!-- <input type="text" size="15" id="searchPoolID" name="searchPoolID" /> -->
					    	  <select  lass="easyui-combobox" type="text"  id="searchPoolID" style="width:120px"
					                  name="searchPoolID" >
					                   <option value="" selected="">--请选择--</option>
					          </select>
					        <!--  <input class="easyui-combobox" style="width:120px" id="searchPoolID" 
								name="searchPoolID" text="" type="text" value=""></input> -->
					</dd>
					<dd>
						<br/>
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
					 状  &nbsp; 态：<select id="searchState" name="searchState" style="width:120px" class="easyui-combobox" >
                                    <option value="-1" selected="">--请选择--</option>
                                    <option value="0">不正常</option>
                                    <option value="1">正常</option>
                                 </select>
					</dd>
					<dd>
						<br/>
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
					藻类含量： <input class="easyui-numberbox" id="lowAlgaeContent" name="lowAlgaeContent" style="width:50px" value="0" type="text"></input> ~ 
							<input class="easyui-numberbox" id="highAlgaeContent" name="highAlgaeContent" style="width:50px" value="100" type="text"></input>
					</dd>
				</dl>
				</form>
			</div>
		</div>
	
    </div>
  
	<jsp:include page="down.jsp" />

	<script src="js/QS1.js" type="text/javascript" charset="UTF-8"></script>
	</div>
</body>
</html>
