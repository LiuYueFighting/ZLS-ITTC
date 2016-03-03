<%@ page import="org.apache.catalina.connector.Request"%> 
<%@ page import="java.io.*,java.util.*" %>
<%@ page language="java" pageEncoding="UTF-8"%>
<%@ page import="java.util.Enumeration"%>
<%@ page import="firsttest.mysql" %>
<%@ page import="java.sql.*,java.text.*,java.util.*"%> 
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" 
						"http://www.w3.org/TR/html4/loose.dtd">

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="content-type" content="text/html;charset=utf-8">
    <title>北京自来水集团工艺平台登陆</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
    <script src="js/common.js"></script>
    <script src="js/jquery.min.js"></script>
    <style>
        body{
            font-family: '微软雅黑','Arial';
           /*  background: #337ab7; */
           background-color:#727272;
        }
        #page_login{
        	position:relative;
            width: 1600px;
            height: 775px;
            margin: 0 auto;
            background:url(image/login/logo.png);
            background-size: 1600px 775px;
        }
        #login_box{
        	height:292px;
        	width:347px;
        	position:absolute;
        	left:855px;
        	top:285px;
        }
		
        #username{
            position: absolute;
            background:url(image/login/name.png) no-repeat;
            left: 50px;
            top: 20px;
            width: 209px;
            height: 25px;
            border: none;
            padding-left: 50px;
            outline:none;
			
        }
       
        #password{
            display: block;
            background:url(image/login/pwd.png) no-repeat;
            position: absolute;
            left: 50px;
            top: 70px;
            width: 209px;
            height: 25px;
            border: none;
            padding-left: 50px;
            outline:none;
        }
       
        #label_sever{
        	position: absolute;
        	float:left;
            left: 52px;
            top: 120px;
            width: 40px;
            margin-top:2px;
            border: 0;
            text-align: center;
            font-size: 16px;
        }
        #label_sever span{
        	border:0;
        	outline:none;
        }
        #server{
            display: block;
            float:left;
            position: absolute;
            left: 103px;
            top: 120px;
            width: 205px;
			height:29px;
            /*height: 20px;*/
            border: 0;
            text-align: center;
            border: 1px solid #afd9ee;
            font-size: 16px;
        }
        #btn_submit{
			cursor:pointer;
            background:url(image/login/btn.png) no-repeat;
            position: absolute;
            border:0;
            left: 50px;
            top: 170px;
            width: 255px;
            height: 38px;
            outline:none;
        }
        #btn_submit:focus
        {
            background:url(image/login/btn1.png) no-repeat;
        }
    </style>
</head>
<body>
<div id="page_login">
	<div id="login_box">
		<form name="form1" action="login" method="post">
			<s:textfield id="username" name="username" label="用户名" size="40"></s:textfield>
			<s:password id="password" name="password" label="密码" size="40"></s:password>
	    	<div id="label_sever">
	    		<span>水厂:</span>
	    	</div>
	     	<select name="server" id="server">
		        <option value="第一水厂">第一水厂</option>
		        <option value="第二水厂">第二水厂</option>
		        <option value="第三水厂">第三水厂</option>
		        <option value="第四水厂">第四水厂</option>
		        <option value="第五水厂">第五水厂</option>
		        <option value="第六水厂">第六水厂</option>
		        <option value="第七水厂">第七水厂</option>
		        <option value="第八水厂">第八水厂</option>
		        <option value="第九水厂">第九水厂</option>
		        <option value="门头沟分公司水厂" selected="selected">门头沟分公司水厂</option>
		        <option value="长辛店分公司水厂" >长辛店分公司水厂</option>
		        <option value="南口分公司水厂" >南口分公司水厂</option>
		        <option value="怀柔分公司水厂" >怀柔分公司水厂</option>
	    	</select>
	    	<s:submit id="btn_submit" value="" onclick="on_submit()" />
	</form>
	</div>
</div>
</body>
</html>