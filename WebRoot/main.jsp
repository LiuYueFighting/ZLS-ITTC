<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%if(null == request.getSession().getAttribute("user")){
       response.getWriter().write("<script>window.location.href = 'notSignIn.jsp'</script>");
     }
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="Access-Control-Allow-Origin" content="*">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>北京自来水集团工艺平台</title>
<link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="icon_btn/iconfont.css">
    <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
<link rel="stylesheet" href="css/breadcrumb.css">
<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/ocanvas-2.7.4.min.js"></script>
<script src="js/my_oCanvas.js"></script>
<script src="js/main.js"></script>
<style>
    body {
        background: #eeeeed;
        text-align:center;
    }
    #myPage {
        font-family: '微软雅黑', 'Source Sans Pro';
        font-size: 1px;
        width: 1600px;
        margin: 0px auto;
    }
    a{
        margin-left: 10px;
    }
    #myContent {
        margin: 0px 0px 0px 0px;
        position: relative;
        height: 750px;
        width: 1600px;
    }
    <%--#btn_start{--%>
    <%--position: absolute;--%>
    <%--left: 1475px;--%>
    <%--top: 50px;--%>
    <%--}--%>
    <%--#btn_downS{--%>
    <%--position: absolute;--%>
    <%--left: 1475px;--%>
    <%--top: 100px;--%>
    <%--}--%>
    <%--#btn_upS{--%>
    <%--position: absolute;--%>
    <%--left: 1475px;--%>
    <%--top: 150px;--%>
    <%--}--%>
    <%--#btn_reset{--%>
    <%--position: absolute;--%>
    <%--left: 1475px;--%>
    <%--top: 200px;--%>
    <%--}--%>
    .btn_main{
    width: 120px;
    background-color: #337ab7;
    }
    #check_div{
    position: absolute;
    left: 1475px;
    top: 300px;
    font-size: 15px;
    font-weight: 700;
    font-family: '微软雅黑', 'Arial';
    width: 142px;
    text-align: left;

    }

    #check_div h1{
    color: #223bb8;
    font-weight: bold;
    font-size: 18px;
    }
/*     #myContent a{
    color: #283a45;
    background: rgba(255,255,255,0.5);
    border: 1px solid black;
    } */ 

    .name_ob{
    font-family: '微软雅黑','Arial';
    color: #283a45;
    font-size: 20px;
    font-weight:bold;
    }
    #name_QS{
    position: absolute;
    left: 683px;
    top: 69px;
    height: 50px;
    width: auto;
    }
    #name_QS2{
    position: absolute;
    left: 679px;
    top: 148px;
    height: 50px;
    width: auto;
    }
    #name_JJC1{
    position: absolute;
    left: 859px;
    top: 373px;
    height: 50px;
    width: auto;
    }
    #name_JJC2{
    position: absolute;
    left: 1069px;
    top: 373px;
    height: 50px;
    width: auto;
    }
    #name_JJC3{
    position: absolute;
    left:1147px;
    top: 603px;
    height: 50px;
    width: auto;
    }
    #name_VL{
    position: absolute;
    left: 862px;
    top: 686px;
    height: 50px;
    width: auto;
    }
    #name_HHJ{
    position: absolute;
    left:961px;
    top: 352px;
    font-size:17px;
    height: 50px;
    width: auto;
    }
    #name_HHJ2{
    position: absolute;
    left:1166px;
    top: 365px;
    font-size:17px;
    height: auto;
    width: 30px;
    }
    #name_HX{
    position: absolute;
    left:837px;
    top: 539px;
    height: 50px;
    width: auto;
    }
    #name_QSC1{
    position: absolute;
    left:260px;
    top: 485px;
    height: 50px;
    width: 150px;
    }
    #name_CY{
    position: absolute;
    left:609px;
    top: 653px;
    height: 50px;
    width: auto;
    }
    #name_CYC{
    position: absolute;
    left:626px;
    top: 452px;
    height: auto;
    width: 30px;
    }
    #name_QSC2{
    position: absolute;
    left:315px;
    top: 301px;
    height: 50px;
    width: auto;
    }
    #name_QSC3{
    position: absolute;
    left:487px;
    top: 301px;
    height: 50px;
    width: auto;
    }
    #name_QSC4{
    position: absolute;
    left:440px;
    top: 489px;
    height: 50px;
    width: auto;
    }
    #name_TC{
    position: absolute;
    left:378px;
    top: 652px;
    height: 50px;
    width: auto;
    }
    #name_TC1{
    position: absolute;
    left:485px;
    top: 652px;
    height: 50px;
    width: auto;
    }
    #name_YC{
    position: absolute;
    left:968px;
    top: 139px;
    height: 50px;
    width: auto;
    }
/*  #mainView>a{
    color: #ff4400;
    } */
    #btn_group_container{
    position:relative;
    width:100%;
    height:50px;
    }
    #btn_group{
    margin:0 auto;
    position:absolute;
    top:0;
    left:42%;
    }
    #btn_group i{
    margin-left:10px;
    }
</style>

</head>
<body>
<div style="overflow:hidden">
	<jsp:include page="top.jsp" />
    <ol class="breadcrumb">
    <li><a href="main.jsp">动态演示</a></li>
    <li class="active">厂平展示</li>
    </ol>
	<div id="myPage">
    <div id="myContent" style="overflow: hidden">
    <div id="mainView" style="position: absolute;z-index: 1" >
    <%--<button id="btn_start" class="btn btn-info btn-lg btn_main" value="0">开始</button>--%>
    <%--<button id="btn_upS" class="btn btn-info btn-lg btn_main">加速</button>--%>
    <%--<button id="btn_downS" class="btn btn-info btn-lg btn_main">减速</button>--%>
    <%--<button id="btn_reset" class="btn btn-info btn-lg btn_main">重新开始</button>--%>
    <div id="check_div">
    <h1>请选择工艺线：</h1>
     <div>
        <input id="btn_new" type="checkbox" name="line" value="1" checked>新工艺线
    </div>
    <div>
        <input id="btn_old" type="checkbox" name="line" value="2" checked>老工艺线
    </div>
        <%--<label id="btn_new" class="btn btn-info active" value="1">--%>
            <%--<input type="checkbox" name="line" value="1" checked>新工艺线--%>
        <%--</label>--%>
        <%--<label id="btn_old" class="btn btn-info active" value="1">--%>
            <%--<input type="checkbox" name="line" value="2" checked>老工艺线--%>
        <%--</label>--%>
    </div>
    <canvas id="canvas_main" width="1600" height="757"></canvas>

    <a href="QS.jsp"  id="name_QS"    style="text-decoration: none" class="name_ob">取水泵房</a>
    <a href="QS.jsp"  id="name_QS2"    style="text-decoration: none" class="name_ob">取水泵房</a>
    <a href="JJC.jsp" id="name_JJC1"  style="text-decoration: none" class="name_ob">1#<br>机加池</a>
    <a href="JJC.jsp" id="name_JJC2"  style="text-decoration: none" class="name_ob">2#<br>机加池</a>
    <a href="JJC.jsp" id="name_JJC3"  style="text-decoration: none" class="name_ob">3#<br>机加池</a>
    <a href="VL.jsp"  id="name_VL"    style="text-decoration: none" class="name_ob">V型滤池</a>
    <a href="hxt.jsp" id="name_TC"   class="name_ob" style="text-decoration: none">1#炭滤池</a>
    <a href="hxt.jsp" id="name_TC1"  class="name_ob" style="text-decoration: none">2#炭滤池</a>
    <a href="cy.jsp"  id="name_CY"   class="name_ob" style="text-decoration: none">臭氧<br>接触池</a>
    <a href="cy.jsp"  id="name_CYC"  class="name_ob" style="text-decoration: none">臭氧生产车间</a>
    <a href="#"       id="name_YC"   class="name_ob" style="text-decoration: none">预沉池</a>
    <a href="hhj.jsp" id="name_HHJ"  class="name_ob" style="text-decoration: none">旧混合井</a>
    <a href="hhj.jsp" id="name_HHJ2" class="name_ob" style="text-decoration: none">新混合井</a>
    <a href="hx.jsp"  id="name_HX"   class="name_ob" style="text-decoration: none">虹吸滤池</a>
    <a href="qsc.jsp" id="name_QSC1" class="name_ob" style="text-decoration: none">3#清水池</a>
    <a href="qsc.jsp" id="name_QSC2" class="name_ob" style="text-decoration: none">1#清水池</a>
    <a href="qsc.jsp" id="name_QSC3" class="name_ob" style="text-decoration: none">2#清水池</a>
    <a href="qsc.jsp" id="name_QSC4" class="name_ob" style="text-decoration: none">4#清水池</a>
    </div>
    </div>
	</div>
    <div id="btn_group_container">
    <div id="btn_group" class="list-group">
    <i id="btn_downS" class="icon iconfont iconbtn">&#xe69c;</i>
    <i  id="btn_start" class="icon iconfont iconbtn">&#xe61f;</i>
    <i id="btn_upS" class="icon iconfont iconbtn">&#xe69d;</i>
    <i id="btn_reset" class="icon iconfont iconbtn">&#xe67c;</i>
    <i id="speed" class="icon iconfont icontext">1.0X</i>
    </div>
    </div>
    <jsp:include page="down.jsp" />
</div>
</body>
</html>
