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
    <%--<link rel="stylesheet" href="css/normalize.css">--%>
    <link rel="stylesheet" href="css/FM&GZW_name.css">
    <link rel="stylesheet" href="css/swich.css" media="screen" type="text/css">
    <link rel="stylesheet" href="css/flat/zebra_dialog.css" type="text/css">
    
    <link rel="stylesheet" type="text/css" href="easyui/themes/default/easyui.css" />
    
     <link rel="stylesheet" href="css/bootstrap.min.css">
    
	<link rel="stylesheet" type="text/css" href="easyui/themes/icon.css" />
	<link rel="stylesheet" type="text/css" href="style/myeasyui.css" />    
    
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/ocanvas-2.7.4.min.js"></script>
    <script src="js/GN_FMControl.js"></script>
	<script>window.jQuery || document.write('<script src="js/jquery.min.js"><\/script>')</script>
    <script type="text/javascript" src="js/zebra_dialog.js"></script>
    
    <script type="text/javascript" src="easyui/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="easyui/locale/easyui-lang-zh_CN.js"></script> 
    
    <style>
        #myContent {
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
    .name_ob{
        font-family: '微软雅黑','Arial';
        color:#ff4400;
        font-size: 18px;
        font-weight:bold;
        <%--display:none;--%>
        height: auto;
        width: auto;
        z-index: 1000;
        padding: 4px;
    }
    .name_ob_input{
    font-family: '微软雅黑','Arial';
    <%--color:#ff4400;--%>
    font-size: 16px;
    font-weight:bold;
    <%--display:none;--%>
    }
        .name_ob_input span{
        font-family: '微软雅黑','Arial';
        <%--color:#ff4400;--%>
        font-size: 16px;
        font-weight:bold;
        <%--display:none;--%>
        }
        #name_QS{
        position: absolute;
        left: 682px;
        top: 67px;
        }
        #name_JJC1{
        position: absolute;
        left: 845px;
        top: 392px;
        }
        #name_JJC2{
        position: absolute;
        left: 1056px;
        top: 389px;
        }
        #name_JJC3{
        position: absolute;
        left:1134px;
        top: 622px;
        }
        #name_VL{
        position: absolute;
        left: 867px;
        top: 685px;
        }
        #name_HHJ1{
        position: absolute;
        left: 962px;
        top: 350px;
        }
        #name_HHJ2{
        position: absolute;
        left: 1190px;
        top: 385px;
        }
        #name_HX{
        position: absolute;
        left:842px;
        top: 533px;
        }
        #name_QSC1{
        position: absolute;
        left: 291px;
        top: 507px;
        }
        #name_CY{
        position: absolute;
        left:601px;
        top: 670px;
        }
        #name_QSC2{
        position: absolute;
        left: 309px;
        top: 303px;
        }
        #name_QSC3{
        position: absolute;
        left:485px;
        top: 303px;
        }
        #name_QSC4{
        position: absolute;
        left: 438px;
        top: 507px;
        }
        #name_TC{
        position: absolute;
        left:359px;
        top: 666px;
        }
        #name_TC1{
        position: absolute;
        left:476px;
        top: 666px;
        }
        #name_YC{
        position: absolute;
        left:969px;
        top: 150px;
        }
    #readout_input{
        position: absolute;
        left: 687px;
        top: 35px;
        z-index: 998;
        color: #223bb8;
    }
    #panelHeading{
        width: 117px;
    text-align: center;
    /* font-size: 19px; */
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
    color: #223bb8;
    font-weight: bold;
    margin-bottom: 28px;
    }
    #setConfig h2{
    font-size: 19px;
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
        #jjc1In{
        position: absolute;
        left:1507px;
        top: 462px;
        z-index:999;
        }
        #jjc2In{
        position: absolute;
        left:1507px;
        top: 501px;
        z-index:999;
        }
        #jjc3In{
        position: absolute;
        left:1507px;
        top: 540px;
        z-index:999;
        }
/*         #hx1Out{ */
/*         position: absolute; */
/*         left: 760px; */
/*         top: 576px; */
/*         z-index:999; */
/*         } */
/*         #hx2Out{ */
/*         position: absolute; */
/*         left: 760px; */
/*         top: 643px; */
/*         z-index:999; */
/*         } */
/*         #vlOut{ */
/*         position: absolute; */
/*         left: 750px; */
/*         top: 725px;; */
/*         z-index:999; */
/*         } */

/*         #qsc3In1{ */
/*         position: absolute; */
/*         left: 355px; */
/*         top: 611px; */
/*         z-index:999; */
/*         } */
/*         #qsc3In2{ */
/*         position: absolute; */
/*         left:484px; */
/*         top: 613px; */
/*         z-index:999; */
/*         } */

        .flow{
        font-family: '微软雅黑','Arial';
        color: #0D3C65;
        font-size: 20px;
        border: 0px;
/*         background: rgba(255,255,255,0.9); */
        /* width: 40px; */
        padding: 0px;
        font-weight: bold;
        }
<%--        .name_Model{
        font-family: '微软雅黑','Arial';
        color: #223bb8;
        font-size: 17px;
        font-weight: bold;
        }
--%>
<%--        #chackBox_name{
        position:absolute;
        top: 703px;
        left: 1365px;
        }
--%>
<%--
        #WShow{
        position:absolute;
        top: 681px;
        left: 1372px;
        z-index:999;
        }
--%>
   #Prediction_results{
  
      position: absolute;
        left:1472px;
        top: 413px;
        z-index:999;
    }
    .panel-heading {
    padding: 9px 1px;
	}
    </style>
    
    <script>
    <%--function changeImage(id){--%>
    <%--var image = document.getElementById(id);--%>
    <%--if(image.src.match("image/y3.png"))--%>
    <%--image.src = "image/y2.png";--%>
    <%--else image.src = "image/y3.png";--%>
    <%--}--%>
    var read = 1800;
    var openDgree_062=100;
    var openDgree_063=100;
    var openDgree_065=100;
    
/* 提示框 */    
function sAlert(str){ 
    var msgw,msgh,bordercolor; 
    msgw=400;//Width
    msgh=100;//Height 
    titleheight=25 //title Height
    bordercolor="#336699";//boder color
    titlecolor="#99CCFF";//title color
   
    var sWidth,sHeight; 
    sWidth=document.body.offsetWidth; 
    sHeight=screen.height; 
    var bgObj=document.createElement("div"); 
    bgObj.setAttribute('id','bgDiv'); 
    bgObj.style.position="absolute"; 
    bgObj.style.top="0"; 
    bgObj.style.background="#777"; 
    bgObj.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=3,opacity=25,finishOpacity=75"; 
    bgObj.style.opacity="0.6"; 
    bgObj.style.left="0"; 
    bgObj.style.width=sWidth + "px"; 
    bgObj.style.height=sHeight + "px"; 
    bgObj.style.zIndex = "10000"; 
    document.body.appendChild(bgObj); 
     
    var msgObj=document.createElement("div") 
    msgObj.setAttribute("id","msgDiv"); 
    msgObj.setAttribute("align","center"); 
    msgObj.style.background="white"; 
    msgObj.style.border="1px solid " + bordercolor; 
    msgObj.style.position = "fixed"; 
    msgObj.style.left = "50%"; 
    msgObj.style.top = "50%"; 
    msgObj.style.font="24px/1.6em Verdana, Geneva, Arial, Helvetica, sans-serif"; 
    msgObj.style.marginLeft = "-225px" ; 
    msgObj.style.marginTop = -75+document.documentElement.scrollTop+"px"; 
    msgObj.style.width = msgw + "px"; 
    msgObj.style.height =msgh + "px"; 
    msgObj.style.textAlign = "center"; 
    msgObj.style.lineHeight ="25px"; 
    msgObj.style.zIndex = "10001"; 
     
    var title=document.createElement("h4"); 
    title.setAttribute("id","msgTitle"); 
    title.setAttribute("align","right"); 
    title.style.margin="0"; 
    title.style.padding="3px"; 
    title.style.background=bordercolor; 
    title.style.filter="progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);"; 
    title.style.opacity="0.75"; 
    title.style.border="1px solid " + bordercolor; 
    title.style.height="18px"; 
    title.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif"; 
    title.style.color="white"; 
    title.style.cursor="pointer"; 
    title.innerHTML="关闭"; 
    title.onclick=function(){ 
           document.body.removeChild(bgObj); 
           document.getElementById("msgDiv").removeChild(title); 
           document.body.removeChild(msgObj); 
         } 
    document.body.appendChild(msgObj); 
    document.getElementById("msgDiv").appendChild(title); 
    var txt=document.createElement("p"); 
    txt.style.margin="1em 0" 
    txt.setAttribute("id","msgTxt"); 
    txt.innerHTML=str; 
    document.getElementById("msgDiv").appendChild(txt); 
 } 
 
 
    function changeInput(){
    read =parseFloat(document.getElementById("read").value);
        if(read<0||read>1800||isNaN(read)){
//        alert("进厂水量输入有误！请重新输入！"); 
//        sAlert("进厂水量输入有误！请重新输入！");
//$.Zebra_Dialog('<strong>进厂水量输入有误！</strong> </br>进厂水量范围为0-1800m<sup>3</sup>/h', {
//    'type':     'warning',
//    'title':    '错误'
//});
			$.messager.alert('错误', '<strong>进厂水量输入有误！</strong> </br>进厂水量范围为0-1800m<sup>3</sup>/h', 'info');
        return;
    }
    var textFeild =document.getElementById("write");
    textFeild.innerHTML=+read;
    var read_062=parseFloat(document.getElementById("read_FM62").value) ;
    var read_063=parseFloat(document.getElementById("read_FM63").value);
    var read_065=parseFloat(document.getElementById("read_FM65").value);
    if(read_062==0&&read_063==0&&read_065==0){
//        sAlert("开启度不能全部为0，请重新输入！");
//		$.Zebra_Dialog('<strong>开启度不能全部为0!</strong> </br>请重新输入！', {
//	    'type':     'warning',
//	    'title':    '错误'
//		});
		$.messager.alert('错误', '<strong>开启度不能全部为0!</strong> </br>请重新输入！', 'info');
        return;
    }
    setOpenDgree("FM062",read_062);
    setOpenDgree("FM063",read_063);
    setOpenDgree("FM065",read_065);
    computeAll();
    write();
    }
    function setOpenDgree(id,openDgree){
        var num = id.substr(2);
        <%--var table =document.getElementById(num);--%>
        var image = document.getElementById(id);
        <%--var openDgree = prompt("请输入"+id+"开启度   (输入范围0-100的整数：0为关闭，1为完全开启):","0");--%>
        if(openDgree<0||openDgree>100||isNaN(openDgree)){
//            sAlert("阀门"+num+"的开启度输入有误！请重新输入！");
//				$.Zebra_Dialog('<strong>阀门</strong>'+num+'<strong>的开启度输入有误！</br>请重新输入！</strong>', {
//    			'type':     'warning',
//    			'title':    '错误'
//				});
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
        <%--document.getElementById("name_CYC").style.display="block";--%>
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
        <%--document.getElementById("name_CYC").style.display="none";--%>
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
        <%--var qsOut1;--%>
        <%--var qsOut2;--%>
        <%--var hh1In1;--%>
        <%--var hh1In2;--%>
        <%--var hh2In;--%>
        <%--var hh1Out1;--%>
        <%--var hh1Out2;--%>
        <%--var hh2Out;--%>
        var jjc1In;
        var jjc2In;
        var jjc3In;
        <%--var jjc1Out;--%>
        <%--var jjc2Out;--%>
        <%--var jjc3Out;--%>
        <%--var hx1In;--%>
        <%--var hx2In;--%>
        <%--var hx1Out;--%>
        <%--var hx2Out;--%>
        <%--var vlIn;--%>
        <%--var vlOut;--%>
        <%--var cy1In;--%>
        <%--var cy2In;--%>
        <%--var cy1Out;--%>
        <%--var cy2Out;--%>
        <%--var tc1In;--%>
        <%--var tc1Out;--%>
        <%--var tc2In;--%>
        <%--var tc2Out;--%>
        <%--var qsc1In;--%>
        <%--var qsc1Out;--%>
        <%--var qsc2In1;--%>
        <%--var qsc2In2;--%>
        <%--var qsc2Out;--%>
        <%--var qsc3In;--%>
        <%--var qsc3In1;--%>
        <%--var qsc3In2;--%>
        <%--var qsc3In3;--%>
        <%--var qsc3Out;--%>
        <%--var qsc4In;--%>
        <%--var qsc4Out;--%>
    function computeAll(){
        compute1();
        <%--compute2();--%>
    }
    function compute1(){
        <%--clearModle1();--%>
        <%--changeModle1(c);--%>
<%--        qsOut1=qsOut2=read/2;
        hh1In1=(qsOut1+qsOut2)*(openDgree_062/(openDgree_062+openDgree_063+openDgree_065));
        hh1In2=(qsOut1+qsOut2)*openDgree_063/(openDgree_062+openDgree_063+openDgree_065);
        hh2In=(qsOut1+qsOut2)*openDgree_065/(openDgree_062+openDgree_063+openDgree_065);
--%>
if(openDgree_062+openDgree_063 != 0){
        hh2In=read*4/9*openDgree_065/100;
        hh1In1=(read-hh2In)*openDgree_062/(openDgree_062+openDgree_063);
        hh1In2=(read-hh2In)*openDgree_063/(openDgree_062+openDgree_063);
        }else{
        	hh2In=read;
        	hh1In1=hh1In2=0;
        }
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
    <%--function compute2(){--%>
        <%--cy1In=vlOut+hx2Out;--%>
        <%--cy2In=hx1Out;--%>
        <%--qsc3In3=0;--%>
        <%--qsc2In2=0;--%>
        <%--cy1Out=cy2Out=(cy1In+cy2In)/2;--%>
        <%--tc1In=cy1Out;--%>
        <%--tc2In=cy2Out;--%>
        <%--tc1Out=tc1In;--%>
        <%--tc2Out=tc2In;--%>
        <%--qsc3In1=tc1Out;--%>
        <%--qsc3In2=tc2Out;--%>
        <%--}--%>

    function write(){
        <%--document.getElementById("qsOut1").innerHTML=qsOut1.toFixed(0);--%>
        <%--document.getElementById("qsOut2").innerHTML=qsOut2.toFixed(0);--%>
        <%--document.getElementById("hh1In1").innerHTML=hh1In1.toFixed(0);--%>
        <%--document.getElementById("hh1In2").innerHTML=hh1In2.toFixed(0);--%>
        <%--document.getElementById("hh2In").innerHTML=hh2In.toFixed(0);--%>
        document.getElementById("jjc1In").innerHTML=jjc1In.toFixed(0);
        document.getElementById("jjc2In").innerHTML=jjc2In.toFixed(0);
        document.getElementById("jjc3In").innerHTML=jjc3In.toFixed(0);
        <%--document.getElementById("hx1Out").innerHTML=hx1Out.toFixed(0);--%>
        <%--document.getElementById("hx2Out").innerHTML=hx2Out.toFixed(0);--%>
        <%--document.getElementById("vlOut").innerHTML=vlOut.toFixed(0);--%>
        <%--document.getElementById("cy1In").innerHTML=cy1In.toFixed(0);--%>
        <%--document.getElementById("cy2In").innerHTML=cy2In.toFixed(0);--%>
        <%--document.getElementById("tc1In").innerHTML=tc1In.toFixed(0);--%>
        <%--document.getElementById("tc2In").innerHTML=tc2In.toFixed(0);--%>
        <%--document.getElementById("qsc2In2").innerHTML=qsc2In2.toFixed(0);--%>
        <%--document.getElementById("qsc3In1").innerHTML=qsc3In1.toFixed(0);--%>
        <%--document.getElementById("qsc3In2").innerHTML=qsc3In2.toFixed(0);--%>
        <%--document.getElementById("qsc3In3").innerHTML=qsc3In3.toFixed(0);--%>
        }
    <%--function clearModle1(){--%>
        <%--<%--clearEmphasize1();--%>
        <%--clearOpenDgree("FM05");--%>
        <%--clearOpenDgree("FM06");--%>
        <%--clearOpenDgree("FM07");--%>
        <%--clearOpenDgree("FM09");--%>
        <%--clearOpenDgree("FM010");--%>
        <%--clearOpenDgree("FM065");--%>
        <%--clearOpenDgree("FM062");--%>
        <%--clearOpenDgree("FM066");--%>
        <%--clearOpenDgree("FM069");--%>
        <%--clearOpenDgree("FM015");--%>
        <%--clearOpenDgree("FM045");--%>
        <%--clearOpenDgree("FM014");--%>
        <%--clearOpenDgree("FM016");--%>
        <%--clearOpenDgree("FM068");--%>
        <%--clearOpenDgree("FM067");--%>
    <%--}--%>
    <%--function clearModle2(){--%>
        <%--<%--clearEmphasize2();--%>
        <%--clearOpenDgree("FM017");--%>
        <%--clearOpenDgree("FM018");--%>
        <%--clearOpenDgree("FM019");--%>
        <%--clearOpenDgree("FM067");--%>
        <%--clearOpenDgree("FM052");--%>
        <%--clearOpenDgree("FM020");--%>
        <%--clearOpenDgree("FM056");--%>
        <%--clearOpenDgree("FM057");--%>
        <%--clearOpenDgree("FM058");--%>
        <%--clearOpenDgree("FM053");--%>
        <%--clearOpenDgree("FM054");--%>
        <%--clearOpenDgree("FM021");--%>
        <%--clearOpenDgree("FM022");--%>
        <%--clearOpenDgree("FM024");--%>
        <%--}--%>
    <%--function changeModle2(c){--%>
        <%--setEmphasize2(c);--%>
        <%--if(c==1){--%>
        <%--setOpenDgree("FM056");--%>
        <%--setOpenDgree("FM054");--%>
        <%--setOpenDgree("FM022");--%>
        <%--setOpenDgree("FM024");--%>
        <%--}--%>
        <%--else if(c==2){--%>
        <%--setOpenDgree("FM053");--%>
        <%--setOpenDgree("FM021");--%>
        <%--}--%>
        <%--else if(c==3){--%>
        <%--setOpenDgree("FM056");--%>
        <%--setOpenDgree("FM021");--%>
        <%--setOpenDgree("FM022");--%>
        <%--setOpenDgree("FM024");--%>
        <%--}--%>
        <%--}--%>
    <%--function changeModle1(c){--%>
    <%--setEmphasize1(c);--%>
    <%--if(c==1){--%>
    <%--setOpenDgree("FM062");--%>
    <%--setOpenDgree("FM045");--%>
    <%--setOpenDgree("FM068");--%>
    <%--}--%>
    <%--else if(c==2){--%>
    <%--setOpenDgree("FM069");--%>
    <%--setOpenDgree("FM015");--%>
    <%--setOpenDgree("FM068");--%>
    <%--}--%>
    <%--else if(c==3){--%>
    <%--setOpenDgree("FM065");--%>
    <%--setOpenDgree("FM066");--%>
    <%--setOpenDgree("FM068");--%>
    <%--setOpenDgree("FM067");--%>
    <%--}--%>
    <%--else if(c==4){--%>
    <%--setOpenDgree("FM068");--%>
        <%--}--%>
    <%--}--%>

    </script>
</head>
<body>
    <jsp:include page="top.jsp" />
    <ol class="breadcrumb">
    <li><a href="main.jsp">水量控制</a></li>
    <li class="active">水量增减</li>
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
        <div class="panel panel-info" id="Prediction_results">
                <div class="panel-heading" id="panelHeading">机加池水量</div>
                <table class="table">
                <tr>
                <td>1#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;m<sup>3</sup>/h</td>
                </tr>
                <tr>
                <td>2#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;m<sup>3</sup>/h</td>
                </tr>
                 <tr>
                <td>3#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;m<sup>3</sup>/h</td>
                </tr>
                </table>
                </div>
                <div>

<!--         <p class="name_Model" id="WShow">显示名称</p> -->
<!--         <label><input id="chackBox_name" class="mui-switch mui-switch-anim" type="checkbox" checked="checked" onclick="showName(this)"> 默认未选中</label> -->

    <%--<a href="#" id="name_QS"  class="name_ob" style="text-decoration: none" class="name_ob">取水泵房</a>--%>
    <%--<a href="#" id="name_JJC1" class="name_ob" style="text-decoration: none " class="name_ob">1#机加池</a>--%>
    <%--<a href="#" id="name_JJC2" class="name_ob" style="text-decoration: none" class="name_ob">2#机加池</a>--%>
    <%--<a href="#" id="name_JJC3" class="name_ob" style="text-decoration: none" class="name_ob">3#机加池</a>--%>
    <%--<a href="#" id="name_VL" class="name_ob" style="text-decoration: none" class="name_ob">V型滤池</a>--%>
    <%--<a href="#" id="name_TC" class="name_ob" style="text-decoration: none ">1#活性炭池</a>--%>
    <%--<a href="#" id="name_TC1" class="name_ob" style="text-decoration: none ">2#活性炭池</a>--%>
    <%--<a href="#" id="name_CY" class="name_ob" style="text-decoration: none ">臭氧混合池</a>--%>
    <%--<a href="#" id="name_CYC" class="name_ob" style="text-decoration: none ">臭氧生产池</a>--%>
    <%--<a href="#" id="name_YC" class="name_ob" style="text-decoration: none">预沉池</a>--%>
    <%--<a href="#" id="name_HHJ1" class="name_ob" style="text-decoration: none">老混合井</a>--%>
    <%--<a href="#" id="name_HHJ2" class="name_ob" style="text-decoration: none ">新混合井</a>--%>
    <%--<a href="#" id="name_HX" class="name_ob" style="text-decoration: none "> 虹吸滤池</a>--%>
    <%--<a href="#" id="name_QSC1" class="name_ob" style="text-decoration: none">3#清水池</a>--%>
    <%--<a href="#" id="name_QSC2" class="name_ob" style="text-decoration: none ">1#清水池</a>--%>
    <%--<a href="#" id="name_QSC3" class="name_ob" style="text-decoration: none ">2#清水池</a>--%>
    <%--<a href="#" id="name_QSC4" class="name_ob" style="text-decoration: none">4#清水池</a>--%>

        <a href="#" id="name_QS"  style="text-decoration: none" class="name_ob">取水泵房</a>
        <a href="#" id="name_JJC1" style="text-decoration: none" class="name_ob">1#机加池</a>
        <a href="#" id="name_JJC2" style="text-decoration: none" class="name_ob">2#机加池</a>
        <a href="#" id="name_JJC3" style="text-decoration: none" class="name_ob">3#机加池</a>
        <a href="#" id="name_VL" style="text-decoration: none" class="name_ob">V型滤池</a>
        <a href="#" id="name_TC" class="name_ob" style="text-decoration: none">1#活性炭池</a>
        <a href="#" id="name_TC1" class="name_ob" style="text-decoration: none">2#活性炭池</a>
        <a href="#" id="name_CY" class="name_ob" style="text-decoration: none">臭氧混合池</a>
        <a href="#" id="name_YC" class="name_ob" style="text-decoration: none">预沉池</a>
        <a href="#" id="name_HHJ1" class="name_ob" style="text-decoration: none">混合井</a>
        <a href="#" id="name_HHJ2" class="name_ob" style="text-decoration: none">混合井</a>
        <a href="#" id="name_HX" class="name_ob" style="text-decoration: none"> 虹吸滤池</a>
        <a href="#" id="name_QSC1" class="name_ob" style="text-decoration: none">3#清水池</a>
        <a href="#" id="name_QSC2" class="name_ob" style="text-decoration: none">1#清水池</a>
        <a href="#" id="name_QSC3" class="name_ob" style="text-decoration: none">2#清水池</a>
        <a href="#" id="name_QSC4" class="name_ob" style="text-decoration: none">4#清水池</a>

<!--     <img id="FM05" src="image/y3.png" > -->
<!--     <img id="FM06" src="image/y3.png" > -->
<!--     <img id="FM07" src="image/y3.png" > -->
<!--     <img id="FM09" src="image/y3.png" > -->
<!--     <img id="FM010" src="image/y3.png" > -->
    <img id="FM065" src="image/y3.png" >
    <img id="FM062" src="image/y3.png" >
    <img id="FM063" src="image/y3.png" >
<!--     <img id="FM064" src="image/y3.png" > -->
<!--     <img id="FM045" src="image/y3.png" > -->
<!--     <img id="FM014" src="image/y3.png" > -->
<!--     <img id="FM015" src="image/y3.png" > -->
<!--     <img id="FM069" src="image/y3.png" > -->
<!--     <img id="FM066" src="image/y3.png" > -->
<!--     <img id="FM016" src="image/y3.png" > -->
<!--     <img id="FM068" src="image/y3.png" > -->
<!--     <img id="FM067" src="image/y3.png" > -->
<!--     <img id="FM017" src="image/y3.png" > -->
<!--     <img id="FM018" src="image/y3.png" > -->
<!--     <img id="FM019" src="image/y3.png" > -->
<!--     <img id="FM020" src="image/y3.png" > -->
<!--     <img id="FM052" src="image/y3.png" > -->
<!--     <img id="FM056" src="image/y3.png" > -->
<!--     <img id="FM053" src="image/y3.png" > -->
<!--     <img id="FM054" src="image/y3.png" > -->
<!--     <img id="FM057" src="image/y3.png" > -->
<!--     <img id="FM058" src="image/y3.png" > -->
<!--     <img id="FM059" src="image/y3.png" > -->
<!--     <img id="FM021" src="image/y3.png" > -->
<!--     <img id="FM022" src="image/y3.png" > -->
<!--     <img id="FM046" src="image/y3.png" > -->
<!--     <img id="FM023" src="image/y3.png" > -->
<!--     <img id="FM024" src="image/y3.png" > -->
<!--     <img id="FM025" src="image/y3.png" > -->
<!--     <img id="FM044" src="image/y3.png" > -->
<!--     <img id="FM055" src="image/y3.png" > -->
<!--     <img id="FM026" src="image/y3.png" > -->
<!--     <img id="FM047" src="image/y3.png" > -->
<!--     <img id="FM048" src="image/y3.png" > -->
<!--     <img id="FM049" src="image/y3.png" > -->
<!--     <img id="FM050" src="image/y3.png" > -->
<!--     <img id="FM051" src="image/y3.png" > -->

    <%--<p id="WFM05" class="name_FM">05#</p>--%>
    <%--<p id="WFM06" class="name_FM">06#</p>--%>
    <%--<p id="WFM07" class="name_FM">07#</p>--%>
    <%--<p id="WFM09" class="name_FM">09#</p>--%>
    <%--<p id="WFM010" class="name_FM">010#</p>--%>
    <p id="WFM065" class="name_FM">065#</p>
    <p id="WFM062" class="name_FM">062#</p>
    <p id="WFM063" class="name_FM">063#</p>
    <%--<p id="WFM045" class="name_FM">045#</p>--%>
    <%--<p id="WFM014" class="name_FM">014#</p>--%>
    <%--<p id="WFM015" class="name_FM">015#</p>--%>
    <%--<p id="WFM069" class="name_FM">069#</p>--%>
    <%--<p id="WFM066" class="name_FM">066#</p>--%>
    <%--<p id="WFM016" class="name_FM">016#</p>--%>
    <%--<p id="WFM068" class="name_FM">068#</p>--%>
    <%--<p id="WFM067" class="name_FM">067#</p>--%>
    <%--<p id="WFM017" class="name_FM">017#</p>--%>
    <%--<p id="WFM018" class="name_FM">018#</p>--%>
    <%--<p id="WFM019" class="name_FM">019#</p>--%>
    <%--<p id="WFM020" class="name_FM">020#</p>--%>
    <%--<p id="WFM052" class="name_FM">052#</p>--%>
    <%--<p id="WFM056" class="name_FM">056#</p>--%>
    <%--<p id="WFM053" class="name_FM">053#</p>--%>
    <%--<p id="WFM054" class="name_FM">054#</p>--%>
    <%--<p id="WFM057" class="name_FM">057#</p>--%>
    <%--<p id="WFM058" class="name_FM">058#</p>--%>
    <%--<p id="WFM059" class="name_FM">059#</p>--%>
    <%--<p id="WFM021" class="name_FM">021#</p>--%>
    <%--<p id="WFM022" class="name_FM">022#</p>--%>
    <%--<p id="WFM046" class="name_FM">046#</p>--%>
    <%--<p id="WFM024" class="name_FM">024#</p>--%>
    <%--<p id="WFM044" class="name_FM">044#</p>--%>
    <%--<p id="WFM055" class="name_FM">055#</p>--%>
    <%--<p id="WFM026" class="name_FM">026#</p>--%>
    <%--<p id="WFM047" class="name_FM">047#</p>--%>
    <%--<p id="WFM048" class="name_FM">048#</p>--%>
    <%--<p id="WFM049" class="name_FM">049#</p>--%>
    <%--<p id="WFM050" class="name_FM">050#</p>--%>
    <%--<p id="WFM051" class="name_FM">051#</p>--%>

        <%--<p id="qsOut1" class="flow"></p>--%>
        <%--<p id="qsOut2" class="flow"></p>--%>
        <%--<p id="hh1In1" class="flow"></p>--%>
        <%--<p id="hh1In2" class="flow"></p>--%>
        <%--<p id="hh2In" class="flow"></p>--%>
        <p id="jjc1In" class="flow">500</p>        
        <p id="jjc2In" class="flow">500</p>
        <p id="jjc3In" class="flow">800</p>
        <p id="hx1Out" class="flow"></p>
        <p id="hx2Out" class="flow"></p>
        <p id="vlOut" class="flow"></p>
        <%--<p id="cy1In" class="flow"></p>--%>
        <%--<p id="cy2In" class="flow"></p>--%>
        <%--<p id="tc1In" class="flow"></p>--%>
        <%--<p id="tc2In" class="flow"></p>--%>
        <%--<p id="qsc2In1" class="flow"></p>--%>
        <%--<p id="qsc2In2" class="flow"></p>--%>
        <p id="qsc3In1" class="flow"></p>
        <p id="qsc3In2" class="flow"></p>
        <%--<p id="qsc3In3" class="flow"></p>--%>
        <%--<p id="qsOut1" class="flow"></p>--%>
        <%--<p id="qsOut1" class="flow"></p>--%>
        <%--<p id="qsOut1" class="flow"></p>--%>
        <%--<p id="qsOut1" class="flow"></p>--%>
        <%--<p id="qsOut1" class="flow"></p>--%>
        <%--<p id="qsOut1" class="flow"></p>--%>
        <%--<p id="qsOut1" class="flow"></p>--%>
        <%--<p id="qsOut1" class="flow"></p>--%>
        <%--<p id="Wmodel1" class="name_Model">机加池模式</p>--%>
        <%--<button id="btn_model1_1" class="btn btn-info btn-sm btn_main"  onclick="chose1(1)">关闭机加池1</button>--%>
        <%--<button id="btn_model1_2" class="btn btn-info btn-sm btn_main"  onclick="chose1(2)">关闭机加池2</button>--%>
        <%--<button id="btn_model1_3" class="btn btn-info btn-sm btn_main"  onclick="chose1(3)">关闭机加池3</button>--%>
        <%--<button id="btn_model1_4" class="btn btn-info btn-sm btn_main"  onclick="chose1(4)">开启所有</button>--%>
        <%--<p id="Wmodel2" class="name_Model">臭氧接触池模式</p>--%>
        <%--<button id="btn_model2_1" class="btn btn-info btn-sm btn_main"  onclick="chose2(1)">关闭接触池1</button>--%>
        <%--<button id="btn_model2_2" class="btn btn-info btn-sm btn_main"  onclick="chose2(2)">关闭接触池2</button>--%>
        <%--<button id="btn_model2_3" class="btn btn-info btn-sm btn_main"  onclick="chose2(3)">开启所有</button>--%>
    </div>
    <%--<div id="FMList">--%>

    <%--<!-- Table -->--%>
    <%--<table id="FM_table" class="table table-bordered " >--%>
    <%--<thead>--%>
    <%--<td>#</td>--%>
    <%--<td>开启度</td>--%>
    <%--<td>#</td>--%>
    <%--<td>开启度</td>--%>
    <%--<td>#</td>--%>
    <%--<td>开启度</td>--%>
    <%--<td>#</td>--%>
    <%--<td>开启度</td>--%>
    <%--<td>#</td>--%>
    <%--<td>开启度</td>--%>
    <%--<td>#</td>--%>
    <%--<td>开启度</td>--%>
    <%--<td>#</td>--%>
    <%--<td>开启度</td>--%>
    <%--<td>#</td>--%>
    <%--<td>开启度</td>--%>
    <%--</thead>--%>
    <%--<tbody>--%>
    <%--<tr><td>05</td><td id="05">100</td><td>06</td><td id="06" >100</td><td>07</td><td id="07" >100</td><td>09</td><td id="09">100</td><td>010</td><td id="010">100</td><td>065</td><td id="065">100</td><td>062</td><td id="062">100</td><td>045</td><td id="045">100</td></tr>--%>
    <%--<tr><td>014</td><td id="014">100</td><td>015</td><td id="015">100</td><td>069</td><td id="069">100</td><td>066</td><td id="066">100</td><td>016</td><td id="016">100</td><td>068</td><td id="068">100</td><td>067</td><td id="067">100</td><td>017</td><td id="017">100</td></tr>--%>
    <%--<tr><td>018</td><td id="018">100</td><td>019</td><td id="019">100</td><td>020</td><td id="020">100</td><td>052</td><td id="052">100</td><td>056</td><td id="056">100</td><td>053</td><td id="053">100</td><td>054</td><td id="054">100</td><td>057</td><td id="057">100</td></tr>--%>
    <%--<tr><td>058</td><td id="058">100</td><td>059</td><td id="059">100</td><td>021</td><td id="021">100</td><td>022</td><td id="022">100</td><td>046</td><td id="046">100</td><td>024</td><td id="024">100</td><td>044</td><td id="044">100</td><td>055</td><td id="055">100</td></tr>--%>
    <%--<tr><td>026</td><td id="026">100</td><td>047</td><td id="047">100</td><td>048</td><td id="048</">100</td><td>049</td><td id="049">100</td><td>050</td><td id="050">100</td><td>051</td><td id="051">100</td></tr>--%>

    <%--</tbody>--%>
    <%--</table>--%>
    <%--</div>--%>
    <jsp:include page="down.jsp" />
    <script>
        function open_mainView(){
            window.open("main1.html",'_self');
        }
    </script>
</div>
</body>
</html>
