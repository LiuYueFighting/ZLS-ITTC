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
    <link rel="stylesheet" type="text/css" href="css/GN_FMControl.css" />
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/ocanvas-2.7.4.min.js"></script>
    <script src="js/GN_FMControl.js"></script>
    <script type="text/javascript" src="easyui/jquery.easyui.min.js"></script>
    <script type="text/javascript" src="easyui/locale/easyui-lang-zh_CN.js"></script>
</head>
<body>
    <jsp:include page="top.jsp"/>
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
                <P>当前进水量：<span id="write" class="flow">1800</span> m<sup>3</sup>/h</P>
            </div>

            <div id="setConfig">
                <h1>参数设置：</h1>
                <h2> 1. 进水量</h2>
                <p><input id="read" type="text"size="10px" autofocus value="1800" />&nbsp;m<sup>3</sup>/h</p>

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
                        <td><span class="flow">1#</span><span id="jjc1In" class="flow">600</span></td>
                        <td><span class="flow">m<sup>3</sup>/h</span></td>
                    </tr>
                    <tr>
                        <td><span class="flow">2#</span><span id="jjc2In" class="flow">600</span></td>
                        <td><span class="flow">m<sup>3</sup>/h</span></td>
                    </tr>
                    <tr>
                        <td><span class="flow">3#</span><span id="jjc3In" class="flow">600</span></td>
                        <td><span class="flow">m<sup>3</sup>/h</span></td>
                    </tr>
                </table>
            </div>

            <div>
                <!-- <a href="#" id="name_QS" style="text-decoration: none" class="name_ob">取水泵房</a> -->
                <a id="name_QS"   class="name_ob">取水泵房</a>
                <a id="name_QS2"  class="name_ob">取水泵房</a>
                <a id="name_JJC1" class="name_ob">1#<br>机加池</a>
                <a id="name_JJC2" class="name_ob">2#<br>机加池</a>
                <a id="name_JJC3" class="name_ob">3#<br>机加池</a>
                <a id="name_VL"   class="name_ob">V型滤池</a>
                <a id="name_TC"   class="name_ob">1#炭滤池</a>
                <a id="name_TC1"  class="name_ob">2#炭滤池</a>
                <a id="name_CY"   class="name_ob">臭氧<br>接触池</a>
                <a id="name_CYC"  class="name_ob">臭氧生产车间</a>
                <a id="name_YC"   class="name_ob">预沉池</a>
                <a id="name_HHJ1" class="name_ob">旧混合井</a>
                <a id="name_HHJ2" class="name_ob">新混合井</a>
                <a id="name_HX"   class="name_ob">虹吸滤池</a>
                <a id="name_QSC1" class="name_ob">3#清水池</a>
                <a id="name_QSC2" class="name_ob">1#清水池</a>
                <a id="name_QSC3" class="name_ob">2#清水池</a>
                <a id="name_QSC4" class="name_ob">4#清水池</a>

                <img id="FM065" src="image/y3.png" >
                <img id="FM062" src="image/y3.png" >
                <img id="FM063" src="image/y3.png" >

                <p id="WFM065" class="name_FM">065#</p>
                <p id="WFM062" class="name_FM">062#</p>
                <p id="WFM063" class="name_FM">063#</p>
            </div>
        </div>
    </div>
    <jsp:include page="down.jsp"/>
</body>
</html>
