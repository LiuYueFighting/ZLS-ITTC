<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Access-Control-Allow-Origin" content="*">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <title>北京自来水集团工艺平台</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="icon_btn/iconfont.css">
    <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/breadcrumb.css">
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/ocanvas-2.7.4.min.js"></script>
    <script src="js/my_oCanvas.js"></script>
    <script src="js/ZP_new.js"></script>
    <style>
    #ZP_New_content {
    font-family: '微软雅黑','Source Sans Pro';
    position:relative;
    font-size: 15px;
    width: 1600px;
    height: 800px;
    margin:0 auto;
    }
    #btn_group_container{
    position:relative;
    width:100%;
    height:50px;
    }
    #btn_group{
    margin:0 auto;
    position:absolute;
    top:0;
    left:40%;
    }
    #btn_group i{
    margin-left:10px;
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
    <ol class="breadcrumb" style="background-color: transparent;">
    <li><a href="main.jsp">动态演示</a></li>
    <li class="active">新系列工艺线</li>
    </ol>
    <div id="ZP_New_content">
    	<%--<div id="btn_menu">--%>
    		<%--<button id="btn_start" class="btn btn-info">开始</button>--%>
		    <%--<button id="btn_downS" class="btn btn-info">减速</button>--%>
		    <%--<span id="txt_speed">1.0X</span>--%>
		    <%--<button id="btn_upS" class="btn btn-info">加速</button>--%>
		    <%--<button id="btn_reset" class="btn btn-info">重置</button>--%>
        <%--</div>--%>
    	<div id="mainView" style="position: absolute;z-index: 1" >
        	<canvas id="canvas_ZP_new" width="1600" height="757"></canvas>

    	</div>
    </div>
    <div id="btn_group_container">
            <div id="btn_group" class="list-group">
                <i id="btn_downS" class="icon iconfont iconbtn">&#xe617;</i>
                <i  id="btn_start" class="icon iconfont iconbtn">&#xe608;</i>
                <i id="btn_upS" class="icon iconfont iconbtn">&#xe616;</i>
                <i id="btn_reset" class="icon iconfont iconbtn">&#xe690;</i>
                <i id="speed" class="icon iconfont icontext">1.0X</i>
            </div>
    </div>
    <jsp:include page="down.jsp" />
</body>
</html>