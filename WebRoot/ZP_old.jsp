<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Access-Control-Allow-Origin" content="*">
    <meta http-equiv="Content-Type" content="text/html; charset=gb2312"/>
    <title>北京自来水集团工艺平台</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/top_down.css">
    <link rel="stylesheet" href="css/breadcrumb.css">
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/ocanvas-2.7.4.min.js"></script>
    <script src="js/my_oCanvas.js"></script>
    
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
    #myContent{
    margin: 0px 0px 0px 0px;
    position: relative;
    height: 800px;
    width: 1600px;
    }
    #btn_menu{
    position:absolute;
    left: 1100px;
    z-index: 11;
    top: 15px;
    }
    #btn_start{
    float:left;
    }
    #btn_upS{
    float:left;
    }
    #txt_speed{
    float:left;
    text-align: center;
    width:50px;
    height:34px;
    padding-top:7px;
    display: inline-block;
    background-color:#5cc0de;
    color:#ffffff;
    }
    #btn_downS{
    float:left;
    }
    #btn_reset{
    float:left;
    }
    </style>
    
</head>
<body>
    <jsp:include page="top.jsp" />
    <ol class="breadcrumb">
    <li><a href="main.jsp">动态演示</a></li>
    <li class="active">旧系列工艺线</li>
    </ol>
<div id="myPage">
    <div id="myContent" style="overflow: auto">
        <div id="btn_menu">
            <button id="btn_start" class="btn btn-info">开始</button>
            <button id="btn_downS" class="btn btn-info">减速</button>
            <span id="txt_speed">1.0</span>
            <button id="btn_upS" class="btn btn-info">加速</button>
            <button id="btn_reset" class="btn btn-info">重置</button>
        </div>
        <div id="mainView" style="position: absolute;z-index: 1" >
            <canvas id="canvas_ZP_old" width="1600" height="757"></canvas>
        </div>
    </div>
    <jsp:include page="down.jsp" />
</div>
<script src="js/ZP_old.js"></script>
</body>

</html>