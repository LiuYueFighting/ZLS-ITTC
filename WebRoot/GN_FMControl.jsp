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

    <link rel="stylesheet" href="css/FM&GZW_name.css">
    <link rel="stylesheet" href="css/swich.css" media="screen" type="text/css">

    
    <link rel="stylesheet" type="text/css" href="easyui/themes/default/easyui.css" />
    
     <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/breadcrumb.css">
    
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
	a:focus, a:hover {
    color: #283a45;
}
	#FM062 {
    position: absolute;
    left: 979px;
    top: 320px;
    z-index: 999;
    cursor: auto;
    </style>
    
</head>
<body>
    <jsp:include page="top.jsp" />
    <ol class="breadcrumb">
    <li><a href="main.jsp">首页</a></li>
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

            <p><input id="read" type="text"size="10px" autofocus  value="1800" />&nbsp;m<sup>3</sup>/h</p>

            <h2> 2. 阀门开启度</h2>
            <p>62#&nbsp;&nbsp;<input id="read_FM62" type="text" size="10px" value="100"/>&nbsp;%</p>
            <p>63#&nbsp;&nbsp;<input id="read_FM63" type="text"size="10px" value="100" />&nbsp;%</p>
            <p>65#&nbsp;&nbsp;<input id="read_FM65" type="text"size="10px" value="100" />&nbsp;%</p>
            <button id="btn_submit" class="btn btn-info btn_main" value="0">预测</button>
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
		<a id="name_QS"    style="text-decoration: none" class="name_ob">取水泵房</a>
		<a id="name_QS2"    style="text-decoration: none" class="name_ob">取水泵房</a>
        <a id="name_JJC1" style="text-decoration: none" class="name_ob">1#<br>机加池</a>
        <a id="name_JJC2" style="text-decoration: none" class="name_ob">2#<br>机加池</a>
        <a id="name_JJC3" style="text-decoration: none" class="name_ob">3#<br>机加池</a>
        <a id="name_VL" style="text-decoration: none" class="name_ob">V型滤池</a>
        <a id="name_TC" class="name_ob" style="text-decoration: none">1#炭滤池</a>
        <a id="name_TC1" class="name_ob" style="text-decoration: none">2#炭滤池</a>
        <a id="name_CY" class="name_ob" style="text-decoration: none">臭氧<br>接触池</a>
        <a id="name_CYC"  class="name_ob" style="text-decoration: none">臭氧生产车间</a>
        <a id="name_YC" class="name_ob" style="text-decoration: none">预沉池</a>
        <a id="name_HHJ1" class="name_ob" style="text-decoration: none">旧混合井</a>
        <a id="name_HHJ2" class="name_ob" style="text-decoration: none">新混合井</a>
        <a id="name_HX" class="name_ob" style="text-decoration: none"> 虹吸滤池</a>
        <a id="name_QSC1" class="name_ob" style="text-decoration: none">3#清水池</a>
        <a id="name_QSC2" class="name_ob" style="text-decoration: none">1#清水池</a>
        <a id="name_QSC3" class="name_ob" style="text-decoration: none">2#清水池</a>
        <a id="name_QSC4" class="name_ob" style="text-decoration: none">4#清水池</a>

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
