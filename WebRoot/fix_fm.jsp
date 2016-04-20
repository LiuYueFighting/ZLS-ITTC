<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
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
    <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/top_down.css">
    <link rel="stylesheet" href="css/breadcrumb.css">
    <link rel="stylesheet" href="css/swich.css" media="screen" type="text/css">
    <link rel="stylesheet" href="css/FM&GZW_name.css">
    
    <link rel="stylesheet" type="text/css" href="easyui/themes/default/easyui.css" />
    
    <link rel="stylesheet" href="css/bootstrap.min.css">
    
    <link rel="stylesheet" type="text/css" href="easyui/themes/icon.css" />
	<link rel="stylesheet" type="text/css" href="style/myeasyui.css" />    
    
    
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/ocanvas-2.7.4.min.js"></script>
    <script src="js/my_oCanvas.js"></script>
    <script src="js/fix_fm.js"></script>
    
    <script type="text/javascript" src="easyui/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="easyui/locale/easyui-lang-zh_CN.js"></script> 
    
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
            position:relative;
        }
        #myContent{
            margin: 0px 0px 0px 0px;
            position: relative;
            height: 750px;
            width: 1600px;
        }
        #myContent a{
	    color: #283a45;
	    background: rgba(255,255,255,0.5);
	    border: 1px solid black;
	    } 
	    .name_Model{
	    font-family: '微软雅黑','Arial';
	    color: #223bb8;
	    font-size: 17px;
	    font-weight: bold;
	    }
	    #fix-panel{
	    left: 91.2%;
	    top: 4.7%;
	    Z-INDEX: 999;
	    position:absolute;
	    }
	    #panel_heading{
	    cursor: pointer;
	    vertical-align: middle;
	    padding: 5px 5px;
	    border-bottom: 1px solid transparent;
	    border-top-left-radius: 3px;
	    border-top-right-radius: 3px;
	    height: 75px;
	    width: 245px;
	    Z-INDEX: 999;
	    -webkit-transition-property:background-color;
	    -webkit-transition-duration:1s;
	    -webkit-transition-timing-function:ease;
	    /* border: 1px solid; */
	    background: rgba(255,255,255,0.5);
	    border: 2px solid #008fd7;
	    text-align: center;
	    }
	    #panel_heading:hover{
	    background: rgba(194,215,245,0.5);
	    }
	    /* hcc:hover change color */
	    .hcc{
	   	-webkit-transition-property:background-color;
	    -webkit-transition-duration:0.5s;
	    -webkit-transition-timing-function:ease;
	    cursor: pointer;
	    }
	    .hcc:hover{
	    background: rgba(194,215,245,0.5);
	    }
	    
		/* demo  	    
		#step_1{
	    -webkit-transition-property:background-color;
	    -webkit-transition-duration:0.5s;
	    -webkit-transition-timing-function:ease;
	    }
	    #step_1:hover{
	    background: rgba(194,215,245,0.5);
	    } */
	    
	    #panel_heading h2{
	    color: #283a45;
	    font-weight: bolder;
	    }
	    .panel{
	    /* height: 651px; */
	    width: 245px;
	    background: rgba(255,255,255,0.7);
	    color: black;
	    margin-bottom:0px;
	    display:none;
	    }
	    .panel-heading{
	    text-align: center;
	    }
	    #fix_table{
	    font-size:12px
	    }
	    .table_td_left{
	    text-align: left;
	    } 
	    #WShow{
	    position: absolute;
	    top: 704px;
	    left: 1297px;
	    z-index: 999;
	    }
	    #FMShow{
	    position: absolute;
	    top: 729px;
	    left: 1316px;
	    z-index: 999;
	    }
	    #WFM062,#WFM019{
	    color: #6dceff;
	    background: rgba(255,0,0,0.6);
	    }
	   	.panel a{
	    text-decoration: none;
	    color: black;
	    }
    </style>
    <script>
    var hide=1;
        function changeImage(id){
        var image = document.getElementById(id);
        if(image.src.match("image/y3.png"))
        image.src = "image/y2.png";
        else image.src = "image/y3.png";
        }

	function setFMColorRed(id){
    	var image = document.getElementById(id);
    	var FMTagId = "W" + id;
    	var tag = document.getElementById(FMTagId);

   		image.style.display = "block"
   		tag.style.display = "block"
    	image.src = "image/y2-35x37.png";
    }
  
    function setFMColorGreen(id){
    	var image = document.getElementById(id);
    	var FMTagId = "W" + id;
    	var tag = document.getElementById(FMTagId);

   		image.style.display = "block"
   		tag.style.display = "block"
    	image.src = "image/y3-35x37.png";
    }

    function showFMName(id){
    document.getElementById(id).style.display="block";
    document.getElementById("W"+id).style.display="block";

    }
    function notShowFMName(id){
    if(id=="FM062"||id=="FM019") return;
    document.getElementById(id).style.display="none";
    document.getElementById("W"+id).style.display="none";
    }

    function hideList(){
    $("div.panel").hide();
    }
    function showList(){
    $("div.panel").show();
    }
    function setShow(){
    showList();
    <%--document.getElementById("show_hide").innerHTML='隐藏';--%>
    hide=0;
    }
    function changeHide(){
        if(hide==1){
            showList();
            <%--document.getElementById("show_hide").innerHTML='隐藏';--%>
            hide=0;
            return;
        }
        else if(hide==0){
            hideList();
            <%--document.getElementById("show_hide").innerHTML='显示';--%>
            hide=1;
            return;
        }
    }

    <%--function load(){--%>
    <%--for(i in fmArray){--%>
    <%--clearOpenDgree(fmArray[i]);--%>
    <%--}--%>
    <%--}--%>
    var fmArray = new Array("FM05","FM06","FM07","FM09","FM010","FM065","FM062","FM063","FM064","FM045","FM014","FM015","FM069","FM066","FM016","FM068","FM017","FM018","FM019","FM020","FM052","FM056","FM053","FM054","FM057","FM058","FM059","FM021","FM022","FM046","FM023","FM024","FM025","FM044","FM055","FM026","FM047","FM048","FM049","FM050","FM051");
    function showFM(e){
    if(e.checked==false){
    for(i in fmArray){
    showFMName(fmArray[i]);
    }
    }

    else {
    for(i in fmArray){
    notShowFMName(fmArray[i]);
    }
    }
    }
    </script>
</head>
<body>
    <jsp:include page="top.jsp" />
    <ol class="breadcrumb">
    <li><a href="main.jsp">设备检修</a></li>
    <li class="active">阀门维修</li>
    </ol>
<div id="myPage">
    <div id="myContent" style="overflow: hidden">
        <div id="mainView" style="position: absolute;z-index: 1" >
            <canvas id="canvas_fix" width="1583" height="757"></canvas>
        </div>
<!--<p class="name_Model" id="WShow">构筑物显示</p>
    <label><input id="chackBox_name" class="mui-switch mui-switch-anim" type="checkbox" checked="true" onclick="showName(this)"> 默认未选中</label>
    <p class="name_Model" id="FMShow">阀门显示</p>
    <label><input id="chackBox_showFM" class="mui-switch mui-switch-anim" type="checkbox" checked="false" onclick="showFM(this)"> 默认未选中</label> -->
    <a  id="name_QS"   class="name_ob" style="text-decoration: none">取水泵房</a>
    <a  id="name_JJC1" class="name_ob" style="text-decoration: none">1#机加池</a>
    <a  id="name_JJC2" class="name_ob" style="text-decoration: none">2#机加池</a>
    <a  id="name_JJC3" class="name_ob" style="text-decoration: none">3#机加池</a>
    <a  id="name_VL"   class="name_ob" style="text-decoration: none">V型滤池</a>
    <a  id="name_TC"   class="name_ob" style="text-decoration: none">1#炭滤池</a>
    <a  id="name_TC1"  class="name_ob" style="text-decoration: none">2#炭滤池</a>
    <a  id="name_CY"   class="name_ob" style="text-decoration: none">臭氧混合池</a>
    <a  id="name_YC"   class="name_ob" style="text-decoration: none">预沉池</a>
    <a  id="name_HHJ1" class="name_ob" style="text-decoration: none">混合井</a>
    <a  id="name_HHJ2" class="name_ob" style="text-decoration: none">混合井</a>
    <a  id="name_HX"   class="name_ob" style="text-decoration: none"> 虹吸滤池</a>
    <a  id="name_QSC1" class="name_ob" style="text-decoration: none">3#清水池</a>
    <a  id="name_QSC2" class="name_ob" style="text-decoration: none">1#清水池</a>
    <a  id="name_QSC3" class="name_ob" style="text-decoration: none">2#清水池</a>
    <a  id="name_QSC4" class="name_ob" style="text-decoration: none">4#清水池</a>

    <img id="FM05"  src="image/y3.png" class="fm_default_green">
    <img id="FM06"  src="image/y3.png" class="fm_default_green">
    <img id="FM07"  src="image/y3.png" class="fm_default_green">
    <img id="FM09"  src="image/y3.png" class="fm_default_green">
    <img id="FM010" src="image/y3.png" class="fm_default_green">
    <img id="FM014" src="image/y3.png" class="fm_default_green">
    <img id="FM015" src="image/y3.png" class="fm_default_green">
    <img id="FM016" src="image/y3.png" class="fm_default_green">
    <img id="FM017" src="image/y3.png" class="fm_default_green">
    <img id="FM018" src="image/y3.png" class="fm_default_green">
    <img id="FM019" src="image/y3.png" class="fm_default_green">
    <img id="FM020" src="image/y3.png" class="fm_default_green">
    <img id="FM021" src="image/y3.png" class="fm_default_green">
    <img id="FM022" src="image/y3.png" class="fm_default_green">
    <img id="FM024" src="image/y3.png" class="fm_default_green">
    <img id="FM026" src="image/y3.png" class="fm_default_green">
    <img id="FM044" src="image/y3.png" class="fm_default_green">
    <img id="FM045" src="image/y3.png" class="fm_default_green">
    <img id="FM046" src="image/y3.png" class="fm_default_green">
    <img id="FM047" src="image/y3.png" class="fm_default_green">
    <img id="FM048" src="image/y3.png" class="fm_default_green">
    <img id="FM049" src="image/y3.png" class="fm_default_green">
    <img id="FM051" src="image/y3.png" class="fm_default_green">
    <img id="FM052" src="image/y3.png" class="fm_default_green">
    <img id="FM053" src="image/y3.png" class="fm_default_green">
    <img id="FM054" src="image/y3.png" class="fm_default_green">
    <img id="FM055" src="image/y3.png" class="fm_default_green">
    <img id="FM056" src="image/y3.png" class="fm_default_green">
    <img id="FM057" src="image/y3.png" class="fm_default_green">
    <img id="FM058" src="image/y3.png" class="fm_default_green">
    <img id="FM059" src="image/y3.png" class="fm_default_green">
    <img id="FM062" src="image/y3.png" class="fm_default_green">
    <img id="FM063" src="image/y3.png" class="fm_default_green">
    <img id="FM064" src="image/y3.png" class="fm_default_green">
    <img id="FM065" src="image/y3.png" class="fm_default_green">
    <img id="FM066" src="image/y3.png" class="fm_default_green">
    <img id="FM067" src="image/y3.png" class="fm_default_green">
    <img id="FM068" src="image/y3.png" class="fm_default_green">
    <img id="FM069" src="image/y3.png" class="fm_default_green">

    <img id="FM023" src="image/y3.png" class="fm_default_red">
    <img id="FM025" src="image/y3.png" class="fm_default_red">
    <img id="FM050" src="image/y3.png" class="fm_default_red">

    <p id="WFM05" class="name_FM fm_default_green">05#</p>
    <p id="WFM06" class="name_FM fm_default_green">06#</p>
    <p id="WFM07" class="name_FM fm_default_green">07#</p>
    <p id="WFM09" class="name_FM fm_default_green">09#</p>
    <p id="WFM010" class="name_FM fm_default_green">010#</p>
    <p id="WFM014" class="name_FM fm_default_green">014#</p>
    <p id="WFM015" class="name_FM fm_default_green">015#</p>
    <p id="WFM016" class="name_FM fm_default_green">016#</p>
    <p id="WFM017" class="name_FM fm_default_green">017#</p>
    <p id="WFM018" class="name_FM fm_default_green">018#</p>
    <p id="WFM019" class="name_FM fm_default_green">019#</p>
    <p id="WFM020" class="name_FM fm_default_green">020#</p>
    <p id="WFM021" class="name_FM fm_default_green">021#</p>
    <p id="WFM022" class="name_FM fm_default_green">022#</p>
    <p id="WFM024" class="name_FM fm_default_green">024#</p>
    <p id="WFM026" class="name_FM fm_default_green">026#</p>
    <p id="WFM044" class="name_FM fm_default_green">044#</p>
    <p id="WFM045" class="name_FM fm_default_green">045#</p>
    <p id="WFM046" class="name_FM fm_default_green">046#</p>
    <p id="WFM047" class="name_FM fm_default_green">047#</p>
    <p id="WFM048" class="name_FM fm_default_green">048#</p>
    <p id="WFM049" class="name_FM fm_default_green">049#</p>
    <p id="WFM051" class="name_FM fm_default_green">051#</p>
    <p id="WFM052" class="name_FM fm_default_green">052#</p>
    <p id="WFM053" class="name_FM fm_default_green">053#</p>
    <p id="WFM054" class="name_FM fm_default_green">054#</p>
    <p id="WFM055" class="name_FM fm_default_green">055#</p>
    <p id="WFM056" class="name_FM fm_default_green">056#</p>
    <p id="WFM057" class="name_FM fm_default_green">057#</p>
    <p id="WFM058" class="name_FM fm_default_green">058#</p>
    <p id="WFM059" class="name_FM fm_default_green">059#</p>
    <p id="WFM062" class="name_FM fm_default_green">062#</p>
    <p id="WFM063" class="name_FM fm_default_green">063#</p>
    <p id="WFM064" class="name_FM fm_default_green">064#</p>
    <p id="WFM065" class="name_FM fm_default_green">065#</p>
    <p id="WFM066" class="name_FM fm_default_green">066#</p>
    <p id="WFM067" class="name_FM fm_default_green">067#</p>
    <p id="WFM068" class="name_FM fm_default_green">068#</p>
    <p id="WFM069" class="name_FM fm_default_green">069#</p>

    <p id="WFM023" class="name_FM fm_default_red">023#</p>
    <p id="WFM025" class="name_FM fm_default_red">025#</p>
    <p id="WFM050" class="name_FM fm_default_red">050#</p>
    </div>
    
    <!-- 页面右侧面板 -->
    <div id="fix-panel">
    	<div>
	    	<button type="button" id="panel_heading" class="hcc">
	    		<h2 id="fix_head" >请点击需要维修的构筑物</h2>
	    	</button>
	    </div>

		<div class="panel panel-info" id="init_stage">
			<div class="panel-heading">初始状态</div>
			<table class="table">
				<tr><td id="init_state">全场正常运行</td></tr>
			</table>
		</div>

		<div class="panel panel-info" id="fix_table">
			<div class="panel-heading">操作步骤</div>
			<table class="table">
				<tr><td id="index_1">&nbsp;</td><td id="step_1" class="table_td_left" style="text-align: left">&nbsp;</td></tr>
				<tr><td>&nbsp;</td><td id="step_1_result" class="table_td_left" style="text-align: left"></td></tr>
				<tr><td id="index_2">&nbsp;</td><td id="step_2" class="table_td_left" style="text-align: left"></td></tr>
				<tr><td>&nbsp;</td><td id="step_2_result" class="table_td_left" style="text-align: left"></td></tr>
				<tr><td id="index_3">&nbsp;</td><td id="step_3" class="table_td_left" style="text-align: left"></td></tr>
				<tr><td>&nbsp;</td><td id="step_3_result" class="table_td_left" style="text-align: left"></td></tr>
				<tr><td id="index_4">&nbsp;</td><td id="step_4" class="table_td_left" style="text-align: left"></td></tr>
				<tr><td>&nbsp;</td><td id="step_4_result" class="table_td_left" style="text-align: left"> </td></tr>
				<tr><td id="index_5">&nbsp;</td><td id="step_5" class="table_td_left" style="text-align: left"></td></tr>
				<tr><td>&nbsp;</td><td id="step_5_result" class="table_td_left" style="text-align: left"></td></tr>
				<tr><td id="index_6">&nbsp;</td><td id="step_6" class="table_td_left" style="text-align: left"></td></tr>
				<tr><td>&nbsp;</td><td id="step_6_result" class="table_td_left" style="text-align: left"></td></tr>
			</table>
		</div>

		<div class="panel panel-info" id="panel_button">
			<div class="panel-heading">功能</div>
			<table class="table">
				<tr><td id="scheme" class="hcc">方案二</td><td id="restore" class="hcc">恢复运行</td></tr>
				<tr><td class="hcc"><a href="#" id="export">生成方案</a></td><td id="reset" class="hcc">重置</td></tr>
			</table>
		</div>
    </div>
    <jsp:include page="down.jsp" />
</div>

</body>
</html>