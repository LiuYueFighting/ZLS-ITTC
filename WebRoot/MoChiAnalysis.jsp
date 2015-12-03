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
	<script src="js/bootstrap.min.js"></script>
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
		height:750px;
		margin: 0px auto;
	}

	#myContent {
		position: relative;
		font-family: '微软雅黑', 'Source Sans Pro';
		width: 1600px;
		height: 750px;
		top:15px;
		margin: 0px auto;
		overflow: hidden;
	}
	
	#description{
		position: relative;
		text-align:center;
		top:100px;
	}
	
	#description h1{
		color:#223bb8;
		font-family: '微软雅黑', 'Source Sans Pro';
	}
</style>
<body>
	<jsp:include page="top.jsp" />
	<ol class="breadcrumb">
    <li><a href="main.jsp">运行评估</a></li>
    <li class="active">膜池分析</li>
    </ol>
	<div id="myPage">
		<div id="myContent">
		<div id="description">
			<h1>该模块尚未实现,敬请期待。。。</h1>
		</div>	
		</div>
	</div>
	<jsp:include page="down.jsp" />
</body>
</html>
