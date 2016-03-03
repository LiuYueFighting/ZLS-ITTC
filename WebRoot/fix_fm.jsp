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
    <script src="js/fix_fm.js"></script>
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
    top: 541px;
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
    .panel{
    height: 529px;
    width: 175px;
    background: rgba(255,255,255,0.7);
    color: black;
    }
    #fix-panel{
    height: 604px;
    width: 183px;
    position: absolute;
    left: 79.2%;
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
    #WFM062,#WFM019{
    color: #6dceff;
    background: rgba(255,0,0,0.6);
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

    function setOpenDgree(id){
    var openDgree = 0;
    var num = id.substr(2);
    <%--var table =document.getElementById(num);--%>
    var image = document.getElementById(id);
    <%--var openDgree = prompt("请输入"+id+"开启度   (输入范围0-100的整数：0为关闭，1为完全开启):","0");--%>
    <%--if(openDgree<0||openDgree>100||isNaN(openDgree)){--%>
    <%--alert("输入有误！请重新输入！");--%>
    <%--return;--%>
    <%--}--%>
    <%--else if(openDgree==null){--%>
    <%--return;--%>
    <%--}--%>
    if (openDgree==0){
    <%--table.innerHTML=openDgree+"%";--%>
    image.src = "image/y2.png";
    <%--$('#'+num).toggleClass('danger');--%>
    return;
    }
    else if(openDgree==100)
    {
    <%--table.innerHTML=openDgree+"%";--%>
    image.src = "image/y3.png";
    <%--$('#'+num).toggleClass('info');--%>
    return;
    }
    else{
    <%--table.innerHTML=openDgree+"%";--%>
    image.src = "image/y1.png";
    <%--$('#'+num).toggleClass('warning');--%>
    return;
    }
    }

    function clearOpenDgree(id){
    var openDgree = 100;
    var num = id.substr(2);
    <%--var table =document.getElementById(num);--%>
    var image =document.getElementById(id);
    <%--var openDgree = prompt("请输入"+id+"开启度   (输入范围0-100的整数：0为关闭，1为完全开启):","0");--%>
    <%--if(openDgree<0||openDgree>100||isNaN(openDgree)){--%>
    <%--alert("输入有误！请重新输入！");--%>
    <%--return;--%>
    <%--}--%>
    <%--else if(openDgree==null){--%>
    <%--return;--%>
    <%--}--%>
    if (openDgree==0){
    <%--table.innerHTML=openDgree+"%";--%>
    image.src = "image/y2.png";
    <%--$('#'+num).toggleClass('danger');--%>
    return;
    }
    else if(openDgree==100)
    {
    <%--table.innerHTML=openDgree+"%";--%>
    image.src = "image/y3.png";
    <%--$('#'+num).toggleClass('info');--%>
    return;
    }
    else{
    <%--table.innerHTML=openDgree+"%";--%>
    image.src = "image/y1.png";
    <%--$('#'+num).toggleClass('warning');--%>
    return;
    }
    }

    function clearAll(){
    clearOpenDgree("FM05");
    clearOpenDgree("FM06");
    clearOpenDgree("FM07");
    clearOpenDgree("FM09");
    clearOpenDgree("FM010");
    clearOpenDgree("FM065");
    clearOpenDgree("FM062");
    clearOpenDgree("FM063");
    clearOpenDgree("FM064");
    clearOpenDgree("FM066");
    clearOpenDgree("FM069");
    clearOpenDgree("FM015");
    clearOpenDgree("FM045");
    clearOpenDgree("FM014");
    clearOpenDgree("FM016");
    clearOpenDgree("FM068");
    clearOpenDgree("FM067");
    clearOpenDgree("FM017");
    clearOpenDgree("FM018");
    clearOpenDgree("FM019");
    clearOpenDgree("FM067");
    clearOpenDgree("FM052");
    clearOpenDgree("FM020");
    clearOpenDgree("FM056");
    clearOpenDgree("FM057");
    clearOpenDgree("FM058");
    clearOpenDgree("FM053");
    clearOpenDgree("FM054");
    clearOpenDgree("FM021");
    clearOpenDgree("FM022");
    clearOpenDgree("FM024");

    clearOpenDgree("FM059");
    clearOpenDgree("FM046");
    clearOpenDgree("FM044");
    clearOpenDgree("FM055");
    clearOpenDgree("FM026");
    clearOpenDgree("FM051");
    clearOpenDgree("FM055");
    clearOpenDgree("FM047");
    clearOpenDgree("FM048");
    clearOpenDgree("FM049");

    document.getElementById("nextPage").style.display="none";
    document.getElementById("lastPage").style.display="none";


    document.getElementById("fix_line1").innerHTML="";
    document.getElementById("fix_line2").innerHTML="";
    document.getElementById("fix_line3").innerHTML="";
    document.getElementById("fix_line4").innerHTML="";
    document.getElementById("fix_line5").innerHTML="";
    document.getElementById("fix_line6").innerHTML="";
    document.getElementById("fix_line7").innerHTML="";
    document.getElementById("fix_line8").innerHTML="";
    document.getElementById("fix_line9").innerHTML="";
    document.getElementById("fix_line10").innerHTML="";
    changeHide();

    document.getElementById("fix_head").innerHTML="请点击需要维修的阀门";

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
    function hideList(){
    document.getElementById("fix").style.display="none";
    }
    function showList(){
    document.getElementById("fix").style.display="block";
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
    <li class="active">阀门维修</li>
    </ol>
<div id="myPage">
    <div id="myContent" style="overflow: hidden">
        <div id="mainView" style="position: absolute;z-index: 1" >
            <canvas id="canvas_fix" width="1583" height="757"></canvas>
        </div>
    <p class="name_Model" id="WShow">显示名称</p>
    <label><input id="chackBox_name" class="mui-switch mui-switch-anim" type="checkbox" checked="checked" onclick="showName(this)"> 默认未选中</label>
    <a  id="name_QS"  style="text-decoration: none" class="name_ob">取水泵房</a>
    <a  id="name_JJC1" style="text-decoration: none" class="name_ob">1#机加池</a>
    <a  id="name_JJC2" style="text-decoration: none" class="name_ob">2#机加池</a>
    <a  id="name_JJC3" style="text-decoration: none" class="name_ob">3#机加池</a>
    <a  id="name_VL" style="text-decoration: none" class="name_ob">V型滤池</a>
    <a  id="name_TC" class="name_ob" style="text-decoration: none">1#活性炭池</a>
    <a  id="name_TC1" class="name_ob" style="text-decoration: none">2#活性炭池</a>
    <a  id="name_CY" class="name_ob" style="text-decoration: none">臭氧混合池</a>
    <a  id="name_YC" class="name_ob" style="text-decoration: none">预沉池</a>
    <a  id="name_HHJ1" class="name_ob" style="text-decoration: none">混合井</a>
    <a  id="name_HHJ2" class="name_ob" style="text-decoration: none">混合井</a>
    <a  id="name_HX" class="name_ob" style="text-decoration: none"> 虹吸滤池</a>
    <a  id="name_QSC1" class="name_ob" style="text-decoration: none">3#清水池</a>
    <a  id="name_QSC2" class="name_ob" style="text-decoration: none">1#清水池</a>
    <a  id="name_QSC3" class="name_ob" style="text-decoration: none">2#清水池</a>
    <a  id="name_QSC4" class="name_ob" style="text-decoration: none">4#清水池</a>

    <img id="FM05" src="image/y3.png" >
    <img id="FM06" src="image/y3.png" >
    <img id="FM07" src="image/y3.png" >
    <img id="FM09" src="image/y3.png" >
    <img id="FM010" src="image/y3.png" >
    <img id="FM065" src="image/y3.png" >
    <img id="FM062" src="image/y3.png" >
    <img id="FM063" src="image/y3.png" >
    <img id="FM064" src="image/y3.png" >
    <img id="FM045" src="image/y3.png" >
    <img id="FM014" src="image/y3.png" >
    <img id="FM015" src="image/y3.png" >
    <img id="FM069" src="image/y3.png" >
    <img id="FM066" src="image/y3.png" >
    <img id="FM016" src="image/y3.png" >
    <img id="FM068" src="image/y3.png" >
    <img id="FM067" src="image/y3.png" >
    <img id="FM017" src="image/y3.png" >
    <img id="FM018" src="image/y3.png" >
    <img id="FM019" src="image/y3.png" >
    <img id="FM020" src="image/y3.png" >
    <img id="FM052" src="image/y3.png" >
    <img id="FM056" src="image/y3.png" >
    <img id="FM053" src="image/y3.png" >
    <img id="FM054" src="image/y3.png" >
    <img id="FM057" src="image/y3.png" >
    <img id="FM058" src="image/y3.png" >
    <img id="FM059" src="image/y3.png" >
    <img id="FM021" src="image/y3.png" >
    <img id="FM022" src="image/y3.png" >
    <img id="FM046" src="image/y3.png" >
    <img id="FM023" src="image/y3.png" >
    <img id="FM024" src="image/y3.png" >
    <img id="FM025" src="image/y3.png" >
    <img id="FM044" src="image/y3.png" >
    <img id="FM055" src="image/y3.png" >
    <img id="FM026" src="image/y3.png" >
    <img id="FM047" src="image/y3.png" >
    <img id="FM048" src="image/y3.png" >
    <img id="FM049" src="image/y3.png" >
    <img id="FM050" src="image/y3.png" >
    <img id="FM051" src="image/y3.png" >

    <p id="WFM05" class="name_FM">05#</p>
    <p id="WFM06" class="name_FM">06#</p>
    <p id="WFM07" class="name_FM">07#</p>
    <p id="WFM09" class="name_FM">09#</p>
    <p id="WFM010" class="name_FM">010#</p>
    <p id="WFM065" class="name_FM">065#</p>
    <p id="WFM062" class="name_FM">062#</p>
    <p id="WFM063" class="name_FM">063#</p>
    <p id="WFM064" class="name_FM">064#</p>
    <p id="WFM045" class="name_FM">045#</p>
    <p id="WFM014" class="name_FM">014#</p>
    <p id="WFM015" class="name_FM">015#</p>
    <p id="WFM069" class="name_FM">069#</p>
    <p id="WFM066" class="name_FM">066#</p>
    <p id="WFM016" class="name_FM">016#</p>
    <p id="WFM068" class="name_FM">068#</p>
    <p id="WFM067" class="name_FM">067#</p>
    <p id="WFM017" class="name_FM">017#</p>
    <p id="WFM018" class="name_FM">018#</p>
    <p id="WFM019" class="name_FM">019#</p>
    <p id="WFM020" class="name_FM">020#</p>
    <p id="WFM052" class="name_FM">052#</p>
    <p id="WFM056" class="name_FM">056#</p>
    <p id="WFM053" class="name_FM">053#</p>
    <p id="WFM054" class="name_FM">054#</p>
    <p id="WFM057" class="name_FM">057#</p>
    <p id="WFM058" class="name_FM">058#</p>
    <p id="WFM059" class="name_FM">059#</p>
    <p id="WFM021" class="name_FM">021#</p>
    <p id="WFM022" class="name_FM">022#</p>
    <p id="WFM046" class="name_FM">046#</p>
    <p id="WFM023" class="name_FM">024#</p>
    <p id="WFM024" class="name_FM">024#</p>
    <p id="WFM025" class="name_FM">024#</p>
    <p id="WFM044" class="name_FM">044#</p>
    <p id="WFM055" class="name_FM">055#</p>
    <p id="WFM026" class="name_FM">026#</p>
    <p id="WFM047" class="name_FM">047#</p>
    <p id="WFM048" class="name_FM">048#</p>
    <p id="WFM049" class="name_FM">049#</p>
    <p id="WFM050" class="name_FM">050#</p>
    <p id="WFM051" class="name_FM">051#</p>
    </div>
    <div id="fix-panel">
    <button type="button" id="panel_heading" onclick="changeHide()">
    <h2 id="fix_head" >请点击需要维修的阀门</h2>
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
    <thead>
    <td>#</td>
    <td>操作</td>
    </thead>
    <tbody>
    <tr><td>1</td><td id="fix_line1"></td></tr>
    <tr><td>2</td><td id="fix_line2"></td></tr>
    <tr><td>3</td><td id="fix_line3"></td></tr>
    <tr><td>4</td><td id="fix_line4"></td></tr>
    <tr><td>5</td><td id="fix_line5"></td></tr>
    <tr><td>6</td><td id="fix_line6"></td></tr>
    <tr><td>7</td><td id="fix_line7"></td></tr>
    <tr><td>8</td><td id="fix_line8"> </td></tr>
    <tr><td>9</td><td id="fix_line9"></td></tr>
    <tr><td>10</td><td id="fix_line10"></td></tr>
    </tbody>
    </table>
    <div id="panel_button">
    <a href="#" id="nextPage">西侧</a>
    <a href="#" id="lastPage">东侧</a>
    <a  href="#" id="export">生成方案</a>
    <a  href="#" id="reset">重置</a>
    </div>
    </div>
    </div>
    </div>

    <jsp:include page="down.jsp" />
</div>

</body>
</html>