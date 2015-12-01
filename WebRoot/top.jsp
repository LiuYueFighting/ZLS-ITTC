<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head lang="en">
    <meta charset="UTF-8">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="css/top_down.css" type="text/css" rel="stylesheet">
<title>TOP</title>
</head>
<body>
<div class="top">
    <div class="top_a">
        <div class="top_logo"><img src="images/logo.png"></div>
        <div class="top_logo_02"><img src="images/Top_logo_2.png"/></div>
        <div class="nav">
            <ul class="nav__menu">
                <li class="nav_bag01"> 动态演示<img src="images/12.png" />
                    <ul class="Secondary_menu">
                        <li class="Secondary_menu_item"><a href="main.jsp">厂平展示</a></li>
                        <li class="Secondary_menu_item"><a href="ZP_new.jsp">新工艺流程图</a></li>
                        <li class="Secondary_menu_item"><a href="ZP_old.jsp">老工艺流程图</a></li>
                    </ul>
                </li>
                <li class="nav_bag02"> 水量控制<img src="images/12.png" />
                    <ul class="Secondary_menu">
                        <li class="Secondary_menu_item"><a href="GN_FMControl.jsp">水量增减</a></li>
                        <li class="Secondary_menu_item"><a href="DataAnalysis.jsp">数据分析</a></li>
                    </ul>
                </li>
                <li class="nav_bag03"> 设备检修<img src="images/12.png" />
                    <ul class="Secondary_menu">
                        <li class="Secondary_menu_item"><a href="fix.jsp">构筑物维修</a></li>
                        <li class="Secondary_menu_item"><a href="fix_fm.jsp">阀门维修</a></li>
                        <%--<li class="Secondary_menu_item"><a href="fangan.jsp">方案生成</a></li>--%>
                    </ul>
                </li>
                <li class="nav_bag04"> 运行评估
                    <ul class="Secondary_menu">
                        <li class="Secondary_menu_item"><a href="PoolEvaluate.jsp">机加池分析</a></li>
                        <li class="Secondary_menu_item"><a href="QualityOfOutWater.jsp">出水池分析</a></li>
                        <li class="Secondary_menu_item"><a href="#">膜池分析</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>
<div class="content">
    <div class="content_Bg1"></div>
</div>
</body>
</html>