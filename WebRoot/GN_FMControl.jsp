    <%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<%if(null == request.getSession().getAttribute("user")){
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
    <link rel="stylesheet" href="css/normal.css">
    <link rel="stylesheet" href="css/top_down.css">
    <link rel="stylesheet" href="css/breadcrumb.css">

    <link rel="stylesheet" href="css/FM&GZW_name.css">
    <link rel="stylesheet" href="css/swich.css" media="screen" type="text/css">

    
    <link rel="stylesheet" type="text/css" href="easyui/themes/default/easyui.css" />
    
     <link rel="stylesheet" href="css/bootstrap.min.css">
    
	<link rel="stylesheet" type="text/css" href="easyui/themes/icon.css" />
	<link rel="stylesheet" type="text/css" href="style/myeasyui.css" />    
    
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/ocanvas-2.7.4.min.js"></script>
    <script src="js/GN_FMControl.js"></script>

    
    <script type="text/javascript" src="easyui/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="easyui/locale/easyui-lang-zh_CN.js"></script> 
    
    <style>
        #myContent {
	    margin: 0px 0px 0px 0px;
	    position: relative;
	    height: 750px;
	    width: 1600px;
        }
    
   .name_ob{
    font-family: '微软雅黑','Arial';
    color: #283a45;
    font-size: 20px;
    font-weight:bold;
    }
    
    .name_ob_input{
    font-family: '微软雅黑','Arial';

    font-size: 16px;
    font-weight:bold;

    }
        .name_ob_input span{
        font-family: '微软雅黑','Arial';

        font-size: 16px;
        font-weight:bold;

        }
        #name_QS{
        position: absolute;
        left: 682px;
        top: 67px;
        }
         #name_QS2{
    	position: absolute;
    	left: 677px;
    	top: 147px;
    	height: 50px;
    	width: auto;
    }
        #name_JJC1{
        position: absolute;
        left: 855px;
        top: 373px;
        text-align:center;
        }
        #name_JJC2{
        position: absolute;
        left: 1065px;
        top: 373px;
        text-align:center;
        }
        #name_JJC3{
        position: absolute;
        left:1143px;
        top: 603px;
        text-align:center;
        }
        #name_VL{
        position: absolute;
        left: 867px;
        top: 685px;
        }
        #name_HHJ1{
        position: absolute;
    	left:956px;
   	 	top: 351px;
    	font-size:17px;
    	height: 50px;
    	width: auto;
        }
        #name_HHJ2{
        position: absolute;
    	left:1165px;
    	top: 361px;
    	font-size:17px;
    	height: auto;
    	width: 30px;
        }
        #name_HX{
        position: absolute;
        left:842px;
        top: 533px;
        }
        #name_QSC1{
        position: absolute;
        left: 288px;
        top: 485px;
        }
        #name_CY{
        position: absolute;
        left:607px;
        top: 649px;
        text-align:center;
        }
        #name_QSC2{
        position: absolute;
        left: 309px;
        top: 298px;
        }
        #name_QSC3{
        position: absolute;
        left:485px;
        top: 298px;
        }
        #name_QSC4{
        position: absolute;
        left: 436px;
        top: 485px;
        }
        #name_TC{
        position: absolute;
        left:373px;
        top: 648px;
        }
        #name_TC1{
        position: absolute;
        left:484px;
        top: 648px;
        }
        #name_YC{
        position: absolute;
        left:969px;
        top: 150px;
        }
        #name_CYC{
    	position: absolute;
    	left:626px;
    	top: 452px;
    	 height: auto;
         width: 30px;
    	}
    #readout_input{
        position: absolute;
        left: 687px;
        top: 35px;
        z-index: 998;
        color: #333;
    }
    #panelHeading{
        width: 124px;
    text-align: center;
    font-size: 19px;
    font-weight: bold;

    }
    #setConfig{
    font-family: '微软雅黑','Arial';
    position: absolute;
    left: 1472px;
    top: -5px;
    z-index: 999;
    font-size: 18px;
    width: 137px;
    font-weight: bold;
    }
    #setConfig p{
    margin: -6px 0 22px;
     }
    #setConfig h1{
    font-size: 27px;
    color: #333;
    font-weight: bold;
    margin-bottom: 28px;
    }
    #setConfig h2{
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 25px;
    }
    #setConfig input{
    width: 50px;
    padding: 2px;
    font-size: 16px;
    }
    #btn_submit{
        margin: 13px auto auto 28px;
    }

        .flow{
        font-family: '微软雅黑','Arial';
        color: #333;
        font-size: 16px;
        border: 0px;

        padding: 3px;
        font-weight: bold;
        }

   #Prediction_results{
  
      position: absolute;
        left:1472px;
        top: 413px;
        z-index:999;
    }
    #WFM062{
    		background: rgba(26,215,255,1);
    		font-size: 20px;
    		position: absolute;
    		left: 929px;
    		top: 332px;
    		z-index: 999;
    }
    #WFM063{
    		background: rgba(26,215,255,1);
    		font-size: 20px;
    		position: absolute;
    		left: 1029px;
    		top: 332px;
    		z-index: 999;
    }
    #WFM065{
    		background: rgba(26,215,255,1);
    		font-size: 20px;
    		position: absolute;
    		left: 1026px;
    		top: 227px;
    		z-index: 999;
    }
    .panel-heading {
    padding: 9px 1px;
	}
	p {
		margin:0;
		white-space:nowrap;
	}
	.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th{
		padding: 0px;
		line-height: 3.5;
		text-align: left;
	}
	
    </style>
    
    <script>
    var read = 1800;
    var openDgree_062=100;
    var openDgree_063=100;
    var openDgree_065=100;
 
    function changeInput(){
    read =parseFloat(document.getElementById("read").value);
        if(read<0||read>1800||isNaN(read)){

			$.messager.alert('错误', '<strong>进厂水量输入有误！</strong> </br>进厂水量范围为0-1800m<sup>3</sup>/h', 'info');
        return;
    }
    var textFeild =document.getElementById("write");
    textFeild.innerHTML=+read;
    var read_062=parseFloat(document.getElementById("read_FM62").value) ;
    var read_063=parseFloat(document.getElementById("read_FM63").value);
    var read_065=parseFloat(document.getElementById("read_FM65").value);
    if(read_062==0&&read_063==0&&read_065==0){

		$.messager.alert('错误', '<strong>开启度不能全部为0!</strong> </br>请重新输入！', 'info');
        return;
    }
    setOpenDgree("FM062",read_062);
    setOpenDgree("FM063",read_063);
    setOpenDgree("FM065",read_065);
    computeAll();
    write();
    showPanel();
    blinTwice("#Prediction_results")
    }
    
    function showPanel(){
    		document.getElementById("Prediction_results").style.display="block";
    	}
    function blinTwice(jqueryDom){
       $(jqueryDom).animate({
           opacity:'1'},'fast');
       $(jqueryDom).animate({
           opacity:'0'},'fast');
       $(jqueryDom).animate({
           opacity:'1'},'fast');
       $(jqueryDom).animate({
           opacity:'0'},'fast');
       $(jqueryDom).animate({
           opacity:'1'},'fast');
   }	
    function setOpenDgree(id,openDgree){
        var num = id.substr(2);

        var image = document.getElementById(id);

        if(openDgree<0||openDgree>100||isNaN(openDgree)){

				$.messager.alert('错误', '<strong>阀门</strong>'+num+'<strong>的开启度输入有误！</br>请重新输入！</strong>', 'info');
            return;
        }
    switch(id){
    case "FM062":
    openDgree_062=openDgree;
    break;
    case "FM063":
    openDgree_063=openDgree;
    break;
    case "FM065":
    openDgree_065=openDgree;
    break;
    }
    if (openDgree==0){

             image.src = "image/y2.png";

    return;
        }
        else if(openDgree==100)
    {

            image.src = "image/y3.png";

    return;

    }

        else{

             image.src = "image/y6.png";

    return;

    }
    }
    function showName(e){
        if(e.checked==true){
        document.getElementById("name_QS" ).style.display="block";
        document.getElementById("name_JJC1").style.display="block";
        document.getElementById("name_JJC2").style.display="block";
        document.getElementById("name_JJC3").style.display="block";
        document.getElementById("name_VL" ).style.display="block";
        document.getElementById("name_TC" ).style.display="block";
        document.getElementById("name_TC1").style.display="block";
        document.getElementById("name_CY" ).style.display="block";

        document.getElementById("name_YC" ).style.display="block";
        document.getElementById("name_HHJ1").style.display="block";
        document.getElementById("name_HHJ2").style.display="block";
        document.getElementById("name_HX" ).style.display="block";
        document.getElementById("name_QSC1").style.display="block";
        document.getElementById("name_QSC2").style.display="block";
        document.getElementById("name_QSC3").style.display="block";
        document.getElementById("name_QSC4").style.display="block";

        }
        if(e.checked==false){
        document.getElementById("name_QS").style.display="none";
        document.getElementById("name_JJC1").style.display="none";
        document.getElementById("name_JJC2").style.display="none";
        document.getElementById("name_JJC3").style.display="none";
        document.getElementById("name_VL" ).style.display="none";
        document.getElementById("name_TC" ).style.display="none";
        document.getElementById("name_TC1").style.display="none";
        document.getElementById("name_CY" ).style.display="none";

        document.getElementById("name_YC" ).style.display="none";
        document.getElementById("name_HHJ1").style.display="none";
        document.getElementById("name_HHJ2").style.display="none";
        document.getElementById("name_HX" ).style.display="none";
        document.getElementById("name_QSC1").style.display="none";
        document.getElementById("name_QSC2").style.display="none";
        document.getElementById("name_QSC3").style.display="none";
        document.getElementById("name_QSC4").style.display="none";
        }
        }

        var jjc1In;
        var jjc2In;
        var jjc3In;

    function computeAll(){
        compute1();

    }
    function compute1(){
    	if (openDgree_062 == 100 && 
            openDgree_063 == 100 &&
            openDgree_065 == 100) {
			hh2In=hh1In1=hh1In2=600;
		}else if (openDgree_062+openDgree_063 != 0) {
			hh2In=Math.round(read*4/9*openDgree_065/100/50)*50;
        	hh1In1=Math.round((read-hh2In)*openDgree_062/(openDgree_062+openDgree_063)/50)*50;
        	hh1In2=Math.round((read-hh2In)*openDgree_063/(openDgree_062+openDgree_063)/50)*50;
		}else {
				hh2In=read;
        		hh1In1=hh1In2=0;
		}

// if(openDgree_062+openDgree_063 != 0){
//         hh2In=Math.round(read*4/9*openDgree_065/100/50)*50;
//         hh1In1=Math.round((read-hh2In)*openDgree_062/(openDgree_062+openDgree_063)/50)*50;
//         hh1In2=Math.round((read-hh2In)*openDgree_063/(openDgree_062+openDgree_063)/50)*50;
//         }else if(openDgree_062 == 100 && 
//         		 openDgree_063 == 100 &&
//         		 openDgree_065 == 100){
//         		 	hh2In=hh1In1=hh1In2=600;
//         }else{
//         			hh2In=read;
//         			hh1In1=hh1In2=0;
//         }
        hh1Out1=hh1In1;
        hh1Out2=hh1In2;
        hh2Out=hh2In;
        jjc1In=hh1Out1;
        jjc1Out = jjc1In;
        jjc2In=hh1Out2;
        jjc2Out = jjc2In;
        jjc3In=hh2Out;
        jjc3Out = jjc3In;
        hx1In=hx2In=(jjc1Out+jjc2Out)/2;
        vlIn = jjc3Out;
        hx1Out=hx1In;
        hx2Out=hx2In;
        vlOut=vlIn;
    }


    function write(){

        document.getElementById("jjc1In").innerHTML=jjc1In.toFixed(0);
        document.getElementById("jjc2In").innerHTML=jjc2In.toFixed(0);
        document.getElementById("jjc3In").innerHTML=jjc3In.toFixed(0);

        }


    </script>
</head>
<body>
    <jsp:include page="top.jsp" />
    <ol class="breadcrumb">
    <li><a href="main.jsp">水量控制</a></li>
    <li class="active">水量分配</li>
    </ol>
<div id="myPage">
    <div id="myContent" style="overflow: hidden">
        <canvas id="canvas_QS" width="1600" height="753"></canvas>
        <div id="SC01">
        <!--<div id="test1">-->
            <!--<p>测试cookie</p>-->
        <!--</div>-->
        </div>
        <div id="readout_input" class="name_ob_input">

           <P >当前进水量：<span id="write" class="flow">1800</span> m<sup>3</sup>/h</P>

        </div>
        <div id="setConfig">
            <h1>参数设置：</h1>
             <h2> 1. 进水量</h2>

            <p><input id="read" type="text"size="10px" autofocus  value="1800"/>&nbsp;m<sup>3</sup>/h</p>

            <h2> 2. 阀门开启度</h2>
            <p>62#&nbsp;&nbsp;<input id="read_FM62" type="text" size="10px" value="100"/>&nbsp;%</p>
            <p>63#&nbsp;&nbsp;<input id="read_FM63" type="text"size="10px" value="100"/>&nbsp;%</p>
            <p>65#&nbsp;&nbsp;<input id="read_FM65" type="text"size="10px" value="100"/>&nbsp;%</p>
            <button id="btn_submit" class="btn btn-info btn_main" value="0" onclick="changeInput()">预测</button>
        </div>
        <div class="panel panel-info" id="Prediction_results" style="display:none">
            <div class="panel-heading" id="panelHeading">机加池水量</div>
                <table class="table">
                <tr>
                <td><span class="flow">1#</span><span id="jjc1In" class="flow">600</span></td><td><span class="flow">m<sup>3</sup>/h</span></td>
                </tr>
                <tr>
                <td><span class="flow">2#</span><span id="jjc2In" class="flow">600</span></td><td><span class="flow">m<sup>3</sup>/h</span></td>
                </tr>
                 <tr>
                <td><span class="flow">3#</span><span id="jjc3In" class="flow">600</span></td><td><span class="flow">m<sup>3</sup>/h</span></td>
                </tr>
                </table>
        </div>
                
       <div>


<!--         <a href="#" id="name_QS"  style="text-decoration: none" class="name_ob">取水泵房</a> -->
		<a href="#"  id="name_QS"    style="text-decoration: none" class="name_ob">取水泵房</a>
		<a href="#"  id="name_QS2"    style="text-decoration: none" class="name_ob">取水泵房</a>
        <a href="#" id="name_JJC1" style="text-decoration: none" class="name_ob">1#<br>机加池</a>
        <a href="#" id="name_JJC2" style="text-decoration: none" class="name_ob">2#<br>机加池</a>
        <a href="#" id="name_JJC3" style="text-decoration: none" class="name_ob">3#<br>机加池</a>
        <a href="#" id="name_VL" style="text-decoration: none" class="name_ob">V型滤池</a>
        <a href="#" id="name_TC" class="name_ob" style="text-decoration: none">1#炭滤池</a>
        <a href="#" id="name_TC1" class="name_ob" style="text-decoration: none">2#炭滤池</a>
        <a href="#" id="name_CY" class="name_ob" style="text-decoration: none">臭氧<br>接触池</a>
        <a href="#"  id="name_CYC"  class="name_ob" style="text-decoration: none">臭氧生产车间</a>
        <a href="#" id="name_YC" class="name_ob" style="text-decoration: none">预沉池</a>
        <a href="#" id="name_HHJ1" class="name_ob" style="text-decoration: none">旧混合井</a>
        <a href="#" id="name_HHJ2" class="name_ob" style="text-decoration: none">新混合井</a>
        <a href="#" id="name_HX" class="name_ob" style="text-decoration: none"> 虹吸滤池</a>
        <a href="#" id="name_QSC1" class="name_ob" style="text-decoration: none">3#清水池</a>
        <a href="#" id="name_QSC2" class="name_ob" style="text-decoration: none">1#清水池</a>
        <a href="#" id="name_QSC3" class="name_ob" style="text-decoration: none">2#清水池</a>
        <a href="#" id="name_QSC4" class="name_ob" style="text-decoration: none">4#清水池</a>

    <img id="FM065" src="image/y3.png" >
    <img id="FM062" src="image/y3.png" >
    <img id="FM063" src="image/y3.png" >

    <p id="WFM065" class="name_FM">065#</p>
    <p id="WFM062" class="name_FM">062#</p>
    <p id="WFM063" class="name_FM">063#</p>

                
        
    

    </div>

    <jsp:include page="down.jsp" />
</div>
</body>
</html>
