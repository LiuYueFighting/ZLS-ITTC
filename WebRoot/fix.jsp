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
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/top_down.css">
    <link rel="stylesheet" href="css/breadcrumb.css">
    <link rel="stylesheet" href="css/swich.css" media="screen" type="text/css">
    <link rel="stylesheet" href="css/FM&GZW_name.css">
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/ocanvas-2.7.4.min.js"></script>
    <script src="js/my_oCanvas.js"></script>
    <script src="js/fix.js"></script>
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
    #show_hide{
    position: absolute;
    top: 6px;
    left: 147px;
    font-size: 13px;
    }
    #export{
    position: absolute;
    left: 70px;
    top: 580px;
    /* background: rgba(290,140,110,0.5); */
    font-size: 14px;
    }
    #reset{
    position: absolute;
    left: 81px;
    top: 527px;
    /* background: rgba(290,140,110,0.5); */
    font-size: 14px;
    }
    #nextPage{
    position: absolute;
    left: 15px;
    top: 540px;
    /* background: rgba(290,140,110,0.5); */
    font-size: 14px;
    }
    #lastPage{
    position: absolute;
    right: 15px;
    top: 540px;
    /* background: rgba(290,140,110,0.5); */
    font-size: 14px;
    }
    .name_Model{
    font-family: '微软雅黑','Arial';
    color: #223bb8;
    font-size: 17px;
    font-weight: bold;

    }
    #fix-panel{
    height: 604px;
    width: 183px;
    position: absolute;
    left: 91.2%;
    top: 4.7%;
    Z-INDEX: 999;
    }
    #panel_heading{
    cursor: pointer;
    vertical-align: middle;
    padding: 5px 5px;
    border-bottom: 1px solid transparent;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    height: 85px;
    width: 181px;
    Z-INDEX: 999;
    /* border: 1px solid; */
    background: rgba(255,255,255,0.5);
    border: 2px solid #008fd7;
    text-align: center;
    }
    #panel_heading:hover{
    background: rgba(194,215,245,0.5);
    }
    #panel_heading h2{
    color: #283a45;
    font-weight: bolder;
    }
    #fix{
    height: 535px;
    width: 181px;
    Z-INDEX: 999;
    display: none;
    border: 2px solid #008fd7;
    }
    #chackBox_name{
    position:absolute;
    top: 707px;
    left: 1369px;
    }
    #WShow{
    position:absolute;
    top: 683px;
    left: 1372px;
    z-index:999;
    }
    .panel{
    height: 529px;
    width: 175px;
    background: rgba(255,255,255,0.7);
    color: black;
    }
    #setConfig h1{
    font-size:20px;
    color:#ff4400;
    font-weight:bold;
    }
    #setConfig input{
    width:50px;
    padding:2px;
    font-size:12px;
    }
    #fix_table{
    font-size:12px
    }
    </style>
    <script>
    var hide=1;
    function changeImage(id){
       var image = document.getElementById(id);
       if(image.src.match("image/y3-35x37.png"))
	      image.src = "image/y2-35x37.png";
       else image.src = "image/y3-35x37.png";
    }

    function setFMColorRed(id){
    	var image = document.getElementById(id);
    	var FMTagId = "W" + id;
    	var tag = document.getElementById(FMTagId);
		if( image.style.display == "none")
    		image.style.display = "block"
		if( tag.style.display == "none")
    		tag.style.display = "block"
    	image.src = "image/y2-35x37.png";
    }
  
    function setFMColorGreen(id){
    	var image = document.getElementById(id);
    	var FMTagId = "W" + id;
    	var tag = document.getElementById(FMTagId);
		if( image.style.display == "none")
    		image.style.display = "block"
		if( tag.style.display == "none")
    		tag.style.display = "block"
    	image.src = "image/y3-35x37.png";
    }    


    function showName(e){
    	var structureNameGroup = ["name_QS", "name_JJC1", "name_JJC2", "name_JJC3", 
   								  "name_VL", "name_TC", "name_TC1", "name_CY", 
   								  "name_YC", "name_HHJ1", "name_HHJ2", "name_HX", 
   								  "name_QSC1", "name_QSC2", "name_QSC3", "name_QSC4"]
		//Update to jQuery
		//$("div#name_gzw .name_ob").attr("style","display:block;");
		//$("div#name_gzw .name_ob").attr("style","display:none;");
	    if(e.checked == true){
	    	for (i=0;i<structureNameGroup.length;i++){
				document.getElementById(structureNameGroup[i]).style.display="block";
			}
	    }else if(e.checked == false){
    		for (i=0;i<structureNameGroup.length;i++){
				document.getElementById(structureNameGroup[i]).style.display="none";
			}
    	}
    }
    
    function hideList(){
    	document.getElementById("fix").style.display="none";
    }
    function showList(){
    	document.getElementById("fix").style.display="block";
    }
    function hideAllFM(){
    	var FMGroup = [/* color green */
    				   "FM05",  "FM06",  "FM07",  "FM09",  "FM010", "FM014", 
                       "FM015", "FM016", "FM017", "FM018", "FM019", "FM020", 
                       "FM021", "FM024", "FM025", "FM026", "FM044", "FM045", 
                       "FM046", "FM047", "FM048", "FM049", "FM051", "FM052", 
                       "FM053", "FM054", "FM055", "FM057", "FM058", "FM059", 
                       "FM062", "FM063", "FM064", "FM065", "FM066", "FM067", "FM069", 
                       /* color red */
                       "FM022", "FM023", "FM050", "FM056", "FM068",
                       /* FM tag */
                       "WFM05",  "WFM06",  "WFM07",  "WFM09",  "WFM010", "WFM014", 
                       "WFM015", "WFM016", "WFM017", "WFM018", "WFM019", "WFM020", 
                       "WFM021", "WFM024", "WFM025", "WFM026", "WFM044", "WFM045", 
                       "WFM046", "WFM047", "WFM048", "WFM049", "WFM051", "WFM052", 
                       "WFM053", "WFM054", "WFM055", "WFM057", "WFM058", "WFM059", 
                       "WFM062", "WFM063", "WFM064", "WFM065", "WFM066", "WFM067", "WFM069", 
                       /* color red tag */
                       "WFM022", "WFM023", "WFM050", "WFM056", "WFM068"
                       ];
        for (i=0; i<FMGroup.length; i++){
        	document.getElementById(FMGroup[i]).style.display="none";
		}
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
    </script>
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
	
   	<!-- 
	<div id="show_name">
   		<p class="name_Model" id="WShow">显示名称</p>
    	<label><input id="chackBox_name" class="mui-switch mui-switch-anim" type="checkbox" checked="checked" onclick="showName(this)"> 默认未选中</label> 
 	</div>
 	-->
		<div id="name_gzw">
		    <a href="#" id="name_QS"   class="name_ob" style="text-decoration: none">取水泵房</a>
		    <a href="#" id="name_JJC1" class="name_ob" style="text-decoration: none">1#机加池</a>
		    <a href="#" id="name_JJC2" class="name_ob" style="text-decoration: none" >2#机加池</a>
		    <a href="#" id="name_JJC3" class="name_ob" style="text-decoration: none" >3#机加池</a>
		    <a href="#" id="name_VL"   class="name_ob" style="text-decoration: none" >V型滤池</a>
		    <a href="#" id="name_TC"   class="name_ob" style="text-decoration: none">1#活性炭池</a>
		    <a href="#" id="name_TC1"  class="name_ob" style="text-decoration: none">2#活性炭池</a>
		    <a href="#" id="name_CY"   class="name_ob" style="text-decoration: none">臭氧混合池</a>
		    <a href="#" id="name_YC"   class="name_ob" style="text-decoration: none">预沉池</a>
		    <a href="#" id="name_HHJ1" class="name_ob" style="text-decoration: none">混合井</a>
		    <a href="#" id="name_HHJ2" class="name_ob" style="text-decoration: none">混合井</a>
		    <a href="#" id="name_HX"   class="name_ob" style="text-decoration: none"> 虹吸滤池</a>
		    <a href="#" id="name_QSC1" class="name_ob" style="text-decoration: none">3#清水池</a>
		    <a href="#" id="name_QSC2" class="name_ob" style="text-decoration: none">1#清水池</a>
		    <a href="#" id="name_QSC3" class="name_ob" style="text-decoration: none">2#清水池</a>
		    <a href="#" id="name_QSC4" class="name_ob" style="text-decoration: none">4#清水池</a>
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
		
			<!-- class="name_FM" -->
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
		    <!-- 不显示多余阀门下方标号 class="name_FM"-->
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
    
    <div id="fix-panel">
    <button type="button" id="panel_heading" onclick="changeHide()">
    <h2 id="fix_head" >请点击需要维修的构筑物</h2>
    <%--<a href="#" id="show_hide" onclick="changeHide()">显示</a>--%>

    </button>
    <div id="fix">
    <div class="panel panel-default">
    <!-- Default panel contents -->

    <%--<div class="panel-body" id="fix-content">--%>
    <%--<p><h3>配合开关闸门顺序表</h3></p>--%>
    <%--</div>--%>
	
    <!-- Table -->
    <table id="fix_table" class="table" >
    <tbody>
	<tr><td>&nbsp</td><td>初始状态</td></tr>
    <tr><td>&nbsp</td><td>全场正常运行</td></tr>
    <td>#</td><td>操作步骤</td>
    <tr><td>&nbsp</td><td id="fix_line1"></td></tr>
    <tr><td>&nbsp</td><td id="fix_line2"></td></tr>
    <tr><td>&nbsp</td><td id="fix_line3"></td></tr>
    <tr><td>&nbsp</td><td id="fix_line4"></td></tr>
    <tr><td>&nbsp</td><td id="fix_line5"></td></tr>
    <tr><td>&nbsp</td><td id="fix_line6"></td></tr>
    <tr><td>&nbsp</td><td id="fix_line7"></td></tr>
    <tr><td>&nbsp</td><td id="fix_line8"> </td></tr>
    <tr><td>&nbsp</td><td id="fix_line9"></td></tr>
    <tr><td>&nbsp</td><td id="fix_line10"></td></tr>
    </tbody>
    </table>
    <div id="panel_button">
    <a href="#" id="nextPage" style="display:none;">方案1</a>
    <a href="#" id="lastPage" style="display:none;">方案2</a>
    <a href="#" id="export">生成方案</a>
    <i id="reset" class="icon iconfont iconbtn">&#xe67c;</i>
    <!-- <a href="#" id="reset" onclick="clearAll()">重置</a> -->
    </div>
    </div>
    </div>
    </div>

    <jsp:include page="down.jsp" />
</div>

</body>
</html>