<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	// 防止未登录用户非法跳转页面
	if(null == request.getSession().getAttribute("user")){
       response.getWriter().write("<script>window.location.href = 'notSignIn.jsp'</script>");
    }
%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Access-Control-Allow-Origin" content="*">
    <meta http-equiv="Content-Type" content="text/html; charset=gb2312"/>
    <title>北京自来水集团工艺平台</title>
    <link rel="stylesheet" href="icon_btn/iconfont.css">
   
    <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/top_down.css">
    <link rel="stylesheet" href="css/breadcrumb.css">
    <link rel="stylesheet" href="css/swich.css" media="screen" type="text/css">
    <link rel="stylesheet" href="css/FM&GZW_name.css">
    <link rel="stylesheet" href="css/flat/zebra_dialog.css" type="text/css">
    <link rel="stylesheet" type="text/css" href="easyui/themes/default/easyui.css" />
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="easyui/themes/icon.css" />
	<link rel="stylesheet" type="text/css" href="style/myeasyui.css" /> 
	<link rel="stylesheet" type="text/css" href="css/equiment_fix.css" />       
    
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/ocanvas-2.7.4.min.js"></script>
    <script src="js/my_oCanvas.js"></script>
    <script src="js/fix.js"></script>
    <script>window.jQuery || document.write('<script src="js/jquery.min.js"><\/script>')</script>
    <script type="text/javascript" src="js/zebra_dialog.js"></script>
    <script type="text/javascript" src="easyui/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="easyui/locale/easyui-lang-zh_CN.js"></script> 

</head>
<body>
    <jsp:include page="top.jsp" />
    <ol class="breadcrumb">
    <li><a href="main.jsp">设备检修</a></li>
    <li class="active">构筑物维修</li>
    </ol>
<div id="myPage">
    <div id="myContent" style="overflow: hidden">
        <div id="mainView" style="position: absolute;z-index: 1" >
            <canvas id="canvas_fix" width="1583" height="757"></canvas>
        </div>
	
   	<!-- 显示名称模块
	<div id="show_name">
   		<p class="name_Model" id="WShow">显示名称</p>
    	<label><input id="chackBox_name" class="mui-switch mui-switch-anim" type="checkbox" checked="checked" onclick="showName(this)"> 默认未选中</label> 
 	</div>
 	-->
		<div id="name_gzw">
		    <a href="#" id="name_QS1"  class="name_ob">取水泵房</a>
		    <a href="#" id="name_QS2"  class="name_ob">取水泵房</a>
		    <a href="#" id="name_JJC1" class="name_ob">&nbsp;&nbsp;&nbsp;1#<br>机加池</a>
		    <a href="#" id="name_JJC2" class="name_ob">&nbsp;&nbsp;&nbsp;2#<br>机加池</a>
		    <a href="#" id="name_JJC3" class="name_ob">&nbsp;&nbsp;&nbsp;3#<br>机加池</a>
		    <a href="#" id="name_VL"   class="name_ob">V型滤池</a>
		    <a href="#" id="name_TC"   class="name_ob">1#炭滤池</a>
		    <a href="#" id="name_TC1"  class="name_ob">2#炭滤池</a>
		    <a href="#" id="name_CY"   class="name_ob">&nbsp;臭氧<br>接触池</a>
		    <a href="#" id="name_CYC"  class="name_ob">臭氧生产车间</a>
		    <a href="#" id="name_YC"   class="name_ob">预沉池</a>
		    <a href="#" id="name_HHJ1" class="name_ob">旧混合井</a>
		    <a href="#" id="name_HHJ2" class="name_ob">新混合井</a>
		    <a href="#" id="name_HX"   class="name_ob"> 虹吸滤池</a>
		    <a href="#" id="name_QSC1" class="name_ob">3#清水池</a>
		    <a href="#" id="name_QSC2" class="name_ob">1#清水池</a>
		    <a href="#" id="name_QSC3" class="name_ob">2#清水池</a>
		    <a href="#" id="name_QSC4" class="name_ob">4#清水池</a>
		</div>
		<div id="FM_group">
			<!-- 阀门显示为红色 -->
		    <img id="FM022" src="image/y2-35x37.png" class="fm_default_red">
		    <img id="FM023" src="image/y2-35x37.png" class="fm_default_red">
		    <img id="FM050" src="image/y2-35x37.png" class="fm_default_red">
		    <img id="FM056" src="image/y2-35x37.png" class="fm_default_red">
		    <img id="FM068" src="image/y2-35x37.png" class="fm_default_red">
		    <!-- 阀门显示为绿色 -->
			<img id="FM05" src="image/y3-35x37.png"  class="fm_default_green">
		    <img id="FM06" src="image/y3-35x37.png"  class="fm_default_green">
		    <img id="FM07" src="image/y3-35x37.png"  class="fm_default_green">
		    <img id="FM09" src="image/y3-35x37.png"  class="fm_default_green">
		    <img id="FM010" src="image/y3-35x37.png" class="fm_default_green">
		    <img id="FM014" src="image/y3-35x37.png" class="fm_default_green">
		    <img id="FM015" src="image/y3-35x37.png" class="fm_default_green">
		    <img id="FM016" src="image/y3-35x37.png" class="fm_default_green">
		    <img id="FM017" src="image/y3-35x37.png" class="fm_default_green">
		    <img id="FM018" src="image/y3-35x37.png" class="fm_default_green">
		    <img id="FM019" src="image/y3-35x37.png" class="fm_default_green">
		    <img id="FM020" src="image/y3-35x37.png" class="fm_default_green">
		    <img id="FM044" src="image/y3-35x37.png" class="fm_default_green">
		    <img id="FM045" src="image/y3-35x37.png" class="fm_default_green">
		    <img id="FM052" src="image/y3-35x37.png" class="fm_default_green">
		    <img id="FM055" src="image/y3-35x37.png" class="fm_default_green">
		    <img id="FM057" src="image/y3-35x37.png" class="fm_default_green">
		    <img id="FM059" src="image/y3-35x37.png" class="fm_default_green">
		    <img id="FM062" src="image/y3-35x37.png" class="fm_default_green">
		    <img id="FM063" src="image/y3-35x37.png" class="fm_default_green">
		    <img id="FM064" src="image/y3-35x37.png" class="fm_default_green">
		    <img id="FM065" src="image/y3-35x37.png" class="fm_default_green">
		    <img id="FM066" src="image/y3-35x37.png" class="fm_default_green">
		    <img id="FM067" src="image/y3-35x37.png" class="fm_default_green">
		    <img id="FM069" src="image/y3-35x37.png" class="fm_default_green">
			<!-- 不显示多余的阀门     -->
		    <img id="FM021" src="image/y3-35x37.png" class="fm_default_hide" style="display:none;">
		    <img id="FM024" src="image/y3-35x37.png" class="fm_default_hide" style="display:none;">
		    <img id="FM025" src="image/y3-35x37.png" class="fm_default_hide" style="display:none;">
		    <img id="FM026" src="image/y3-35x37.png" class="fm_default_hide" style="display:none;">
		    <img id="FM046" src="image/y3-35x37.png" class="fm_default_hide" style="display:none;">
		    <img id="FM047" src="image/y3-35x37.png" class="fm_default_hide" style="display:none;">
		    <img id="FM048" src="image/y3-35x37.png" class="fm_default_hide" style="display:none;">
		    <img id="FM049" src="image/y3-35x37.png" class="fm_default_hide" style="display:none;">
		    <img id="FM051" src="image/y3-35x37.png" class="fm_default_hide" style="display:none;"> 
		    <img id="FM053" src="image/y3-35x37.png" class="fm_default_hide" style="display:none;">
		    <img id="FM054" src="image/y3-35x37.png" class="fm_default_hide" style="display:none;">
		    <img id="FM058" src="image/y3-35x37.png" class="fm_default_hide" style="display:none;">
		
			<!-- 阀门对应的标签 -->
		    <p id="WFM05"  class="fm_default_green">05#</p>
		    <p id="WFM06"  class="fm_default_green">06#</p>
		    <p id="WFM07"  class="fm_default_green">07#</p>
		    <p id="WFM09"  class="fm_default_green">09#</p>
		    <p id="WFM010" class="fm_default_green">010#</p>
		    <p id="WFM065" class="fm_default_green">065#</p>
		    <p id="WFM062" class="fm_default_green">062#</p>
		    <p id="WFM063" class="fm_default_green">063#</p>
		    <p id="WFM064" class="fm_default_green">064#</p>
		    <p id="WFM045" class="fm_default_green">045#</p>
		    <p id="WFM014" class="fm_default_green">014#</p>
		    <p id="WFM015" class="fm_default_green">015#</p>
		    <p id="WFM069" class="fm_default_green">069#</p>
		    <p id="WFM066" class="fm_default_green">066#</p>
		    <p id="WFM016" class="fm_default_green">016#</p>
		    <p id="WFM067" class="fm_default_green">067#</p>
		    <p id="WFM017" class="fm_default_green">017#</p>
		    <p id="WFM018" class="fm_default_green">018#</p>
		    <p id="WFM019" class="fm_default_green">019#</p>
		    <p id="WFM020" class="fm_default_green">020#</p>
		    <p id="WFM052" class="fm_default_green">052#</p>
		    <p id="WFM057" class="fm_default_green">057#</p>
		    <p id="WFM059" class="fm_default_green">059#</p>
		    <p id="WFM044" class="fm_default_green">044#</p>
		    <p id="WFM055" class="fm_default_green">055#</p>
		    <p id="WFM022" class="fm_default_red">022#</p>
		    <p id="WFM023" class="fm_default_red">023#</p>
		    <p id="WFM050" class="fm_default_red">050#</p>
		    <p id="WFM056" class="fm_default_red">056#</p>
		    <p id="WFM068" class="fm_default_red">068#</p>
		    <!-- 不显示多余阀门下方标号 -->
		    <p id="WFM021" class="fm_default_hide" style="display:none;">021#</p>
		    <p id="WFM024" class="fm_default_hide" style="display:none;">024#</p>
		    <p id="WFM025" class="fm_default_hide" style="display:none;">025#</p>
		    <p id="WFM026" class="fm_default_hide" style="display:none;">026#</p>
		    <p id="WFM046" class="fm_default_hide" style="display:none;">046#</p>
		    <p id="WFM047" class="fm_default_hide" style="display:none;">047#</p>
		    <p id="WFM048" class="fm_default_hide" style="display:none;">048#</p>
		    <p id="WFM049" class="fm_default_hide" style="display:none;">049#</p>
		    <p id="WFM051" class="fm_default_hide" style="display:none;">051#</p>
		    <p id="WFM053" class="fm_default_hide" style="display:none;">053#</p>
		    <p id="WFM054" class="fm_default_hide" style="display:none;">054#</p>
		    <p id="WFM058" class="fm_default_hide" style="display:none;">058#</p>
	    </div>
    </div>
    
    <!-- 页面右侧面板 -->
    <div id="fix-panel">
    	<div>
	    	<button type="button" id="panel_heading" class="hcc">
	    		<h2 id="fix_head" >请点击需要维修的构筑物</h2>
	    	</button>
	    </div>

 		<div class="hiden panel panel-info"> 
			<div class="panel-heading" id="init_state">初始状态</div> 
		</div>
		
		<div class="hiden btn-group">
		   <button type="button" id="init_stat" class="btn btn-default dropdown-toggle" 
		      data-toggle="dropdown">
		         	全厂正常运行
		   </button>
		   <ul class="dropdown-menu" role="menu">
		      <li id="fix_scheme">西侧阀门维修</li>
		      <li id="restore_scheme">西侧阀门恢复</li>
		      <li id="extra_fix_scheme">东侧阀门维修</li>
		      <li id="extra_restore_scheme">东侧阀门恢复</li>
		   </ul>  
		</div>

		<div class="hiden panel panel-info" id="fix_table">
			<div class="panel-heading">操作步骤</div>
			<table class="table" id="left-align-td">
				<tr><td id="step_1" class="table_content">&nbsp;</td></tr>
				<tr><td id="step_1_result" class="table_content">&nbsp;</td></tr>
				<tr><td id="step_2" class="table_content">&nbsp;</td></tr>
				<tr><td id="step_2_result" class="table_content">&nbsp;</td></tr>
				<tr><td id="step_3" class="table_content">&nbsp;</td></tr>
				<tr><td id="step_3_result" class="table_content">&nbsp;</td></tr>
				<tr><td id="step_4" class="table_content">&nbsp;</td></tr>
				<tr><td id="step_4_result" class="table_content">&nbsp;</td></tr>
				<tr><td id="step_5" class="table_content">&nbsp;</td></tr>
				<tr><td id="step_5_result" class="table_content">&nbsp;</td></tr>
				<tr><td id="step_6" class="table_content">&nbsp;</td></tr>
				<tr><td id="step_6_result" class="table_content">&nbsp;</td></tr>
			</table>
		</div>

		<div class="hiden panel panel-info" id="panel_button">
			<div class="panel-heading">功能</div>
			<table class="table">
				<!-- <tr><td id="scheme_extra" class="hcc">&nbsp;</td><td id="scheme" class="hcc">&nbsp;</td></tr> -->
				<tr><td class="hcc"><a href="#" id="export">&nbsp;</a></td><td id="reset" class="hcc">&nbsp;</td></tr>
			</table>
		</div>
    </div>
    <jsp:include page="down.jsp" />
</div>

</body>
</html>