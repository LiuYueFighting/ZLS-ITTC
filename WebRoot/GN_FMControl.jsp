    <%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Access-Control-Allow-Origin" content="*">
    <meta http-equiv="Content-Type" content="text/html; charset=gb2312"/>
    <title>北京自来水集团工艺平台</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/normal.css">
    <link rel="stylesheet" href="css/top_down.css">
    <link rel="stylesheet" href="css/breadcrumb.css">
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/ocanvas-2.7.4.min.js"></script>
    <script src="js/GN_FMControl.js"></script>


    <style>
        #myContent {
	    margin: 0px 0px 0px 0px;
	    position: relative;
	    height: 750px;
	    width: 1600px;
        }
    #myContent a{
    color: #ff4400;
    }
    .name_ob{
    font-family: '微软雅黑','Arial';
    color:#ff4400;
    font-size: 20px;
    font-weight:bold;
    display:none;
    }
    #name_QS{
    position: absolute;
    left: 681px;
    top: 62px;
    height: 50px;
    width: auto;
    z-index:999;
    }
    #name_JJC1{
    position: absolute;
    left: 858px;
    top: 383px;
    height: 50px;
    width: auto;
    z-index:999;
    }
    #name_JJC2{
    position: absolute;
    left: 1067px;
    top: 383px;
    height: 50px;
    width: auto;
    z-index:999;
    }
    #name_JJC3{
    position: absolute;
    left:1146px;
    top: 616px;
    height: 50px;
    width: auto;
    z-index:999;
    }
    #name_VL{
    position: absolute;
    left: 860px;
    top: 681px;
    height: 50px;
    width: auto;
    z-index:999;
    }
    #name_HHJ1{
    position: absolute;
    left:965px;
    top: 343px;
    height: 50px;
    width: auto;
    z-index:999;
    }
    #name_HHJ2{
    position: absolute;
    left:1166px;
    top: 355px;
    height: auto;
    width: 30px;
    z-index:999;
    }
    #name_HX{
    position: absolute;
    left:837px;
    top: 532px;
    height: 50px;
    width: auto;
    z-index:999;
    }
    #name_QSC1{
    position: absolute;
    left:305px;
    top: 485px;
    height: 50px;
    width: 150px;
    z-index:999;
    }
    #name_CY{
    position: absolute;
    left:590px;
    top: 663px;
    height: 50px;
    width: auto;
    z-index:999;
    }
    #name_CYC{
    position: absolute;
    left:620px;
    top: 453px;
    height: auto;
    width: 30px;
    z-index:999;
    }
    #name_QSC2{
    position: absolute;
    left:315px;
    top: 301px;
    height: 50px;
    width: auto;
    z-index:999;
    }
    #name_QSC3{
    position: absolute;
    left:487px;
    top: 301px;
    height: 50px;
    width: auto;
    z-index:999;
    }
    #name_QSC4{
    position: absolute;
    left:450px;
    top: 489px;
    height: 50px;
    width: auto;
    z-index:999;
    }
    #name_TC{
    position: absolute;
    left:375px;
    top: 655px;
    height: 50px;
    width: auto;
    z-index:999;
    }
    #name_TC1{
    position: absolute;
    left:485px;
    top: 655px;
    height: 50px;
    width: auto;
    z-index:999;
    }
    #name_YC{
    position: absolute;
    left:960px;
    top: 139px;
    height: 50px;
    width: auto;
    z-index:999;
    }
    #FM05{
    position: absolute;
    left:695px;
    top: 106px;
    z-index:999;
    }
    #FM06{
    position: absolute;
    left:733px;
    top: 106px;
    z-index:999;
    }
    #FM05{
    position: absolute;
    left:695px;
    top: 106px;
    z-index:999;
    }
    #FM07{
    position: absolute;
    left:713px;
    top: 172px;
    z-index:999;
    }#FM09{
    position: absolute;
    left:688px;
    top: 192px;
    z-index:999;
    }#FM010{
    position: absolute;
    left:738px;
    top: 193px;
    z-index:999;
    }#FM065{
    position: absolute;
    left:1032px;
    top: 240px;
    z-index:999;
    }#FM062{
    position: absolute;
    left:978px;
    top: 275px;
    z-index:999;
    }#FM045{
    position: absolute;
    left:879px;
    top: 458px;
    z-index:999;
    }
    #FM014{
    position: absolute;
    left:826px;
    top: 475px;
    z-index:999;
    }#FM015{
    position: absolute;
    left:989px;
    top: 463px;
    z-index:999;
    }#FM069{
    position: absolute;
    left:1034px;
    top: 463px;
    z-index:999;
    }#FM066{
    position: absolute;
    left:1174px;
    top: 466px;
    z-index:999;
    }#FM016{
    position: absolute;
    left:978px;
    top: 501px;
    z-index:999;
    }#FM068{
    position: absolute;
    left:1012px;
    top: 567px;
    z-index:999;
    }#FM067{
    position: absolute;
    left:1011px;
    top: 635px;
    z-index:999;
    }#FM017{
    position: absolute;
    left:834px;
    top:569px;
    z-index:999;
    }#FM018{
    position: absolute;
    left:869px;
    top: 569px;
    z-index:999;
    }#FM019{
    position: absolute;
    left:867px;
    top: 605px;
    z-index:999;
    }#FM020{
    position: absolute;
    left:705px;
    top: 645px;
    z-index:999;
    }
    #FM052{
    position: absolute;
    left:756px;
    top: 693px;
    z-index:999;
    }
    #FM056{
    position: absolute;
    left:692px;
    top: 723px;
    z-index:999;
    }#FM053{
    position: absolute;
    left:653px;
    top:634px;
    z-index:999;
    }#FM054{
    position: absolute;
    left:622px;
    top: 632px;
    z-index:999;
    }#FM057{
    position: absolute;
    left:663px;
    top: 699px;
    z-index:999;
    }#FM058{
    position: absolute;
    left:633px;
    top: 703px;
    z-index:999;
    }#FM059{
    position: absolute;
    left:588px;
    top: 657px;
    z-index:999;
    }
    #FM021{
    position: absolute;
    left:597px;
    top: 616px;
    z-index:999;
    }
    #FM022{
    position: absolute;
    left:611px;
    top: 578px;
    z-index:999;
    }
    #FM046{
    position: absolute;
    left:382px;
    top: 469px;
    z-index:999;
    }
    #FM024{
    position: absolute;
    left:559px;
    top: 578px;
    z-index:999;
    }#FM044{
    position: absolute;
    left:402px;
    top: 627px;
    z-index:999;
    }
    #FM055{
    position: absolute;
    left:526px;
    top: 618px;
    z-index:999;
    }
    #FM026{
    position: absolute;
    left:401px;
    top: 572px;
    z-index:999;
    }
    #FM047{
    position: absolute;
    left:347px;
    top: 394px;
    z-index:999;
    }#FM048{
    position: absolute;
    left:389px;
    top: 415px;
    z-index:999;
    }#FM049{
    position: absolute;
    left:451px;
    top: 418px;
    z-index:999;
    }#FM050{
    position: absolute;
    left:485px;
    top: 392px;
    z-index:999;
    }
    #FM051{
    position: absolute;
    left:515px;
    top: 416px;
    z-index:999;
    }
    #readout_input{
    position: absolute;
    left: 665px;
    top: 24px;
    z-index: 999;
    }
    #setConfig{
    font-family: '微软雅黑','Arial';
    position: absolute;
    left:1472px;
    top: -5px;
    z-index: 999;
    font-size:15px;
    width:137px;
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
    #btn_submit{
    margin:60px auto auto 30px ;
    }
    #FMhelp{
    position: absolute;
    left:1203px;
    top: 27px;
    z-index: 999;
    color:black;
    }
    #WFM05{
    position: absolute;
    left:695px;
     top: 106px;
    z-index:999;
    }
    #WFM06{
    position: absolute;
    left:733px;
    top: 106px;
    z-index:999;
    }
    #WFM05{
    position: absolute;
    left:695px;
    top: 106px;
    z-index:999;
    }
    #WFM07{
    position: absolute;
    left:713px;
    top: 172px;
    z-index:999;
    }#WFM09{
    position: absolute;
    left:688px;
    top: 192px;
    z-index:999;
    }#WFM010{
    position: absolute;
    left:738px;
    top: 193px;
    z-index:999;
    }#WFM065{
    position: absolute;
    left:1032px;
    top: 240px;
    z-index:999;
    }#WFM062{
    position: absolute;
    left:978px;
    top: 275px;
    z-index:999;
    }#WFM045{
    position: absolute;
    left:879px;
    top: 458px;
    z-index:999;
    }
    #WFM014{
    position: absolute;
    left:826px;
    top: 475px;
    z-index:999;
    }#WFM015{
    position: absolute;
    left:989px;
    top: 463px;
    z-index:999;
    }#WFM069{
    position: absolute;
    left:1034px;
    top: 463px;
    z-index:999;
    }#WFM066{
    position: absolute;
    left:1174px;
    top: 466px;
    z-index:999;
    }#WFM016{
    position: absolute;
    left:978px;
    top: 501px;
    z-index:999;
    }#WFM068{
    position: absolute;
    left:1012px;
    top: 567px;
    z-index:999;
    }#WFM067{
    position: absolute;
    left:1011px;
    top: 635px;
    z-index:999;
    }#WFM017{
    position: absolute;
    left:834px;
    top:569px;
    z-index:999;
    }#WFM018{
    position: absolute;
    left:869px;
    top: 569px;
    z-index:999;
    }#WFM019{
    position: absolute;
    left:867px;
    top: 605px;
    z-index:999;
    }#WFM020{
    position: absolute;
    left:705px;
    top: 645px;
    z-index:999;
    }
    #WFM052{
    position: absolute;
    left:756px;
    top: 693px;
    z-index:999;
    }
    #WFM056{
    position: absolute;
    left:692px;
    top: 723px;
    z-index:999;
    }#WFM053{
    position: absolute;
    left:653px;
    top:634px;
    z-index:999;
    }#WFM054{
    position: absolute;
    left:622px;
    top: 632px;
    z-index:999;
    }#WFM057{
    position: absolute;
    left:663px;
    top: 699px;
    z-index:999;
    }#WFM058{
    position: absolute;
    left:633px;
    top: 703px;
    z-index:999;
    }#WFM059{
    position: absolute;
    left:588px;
    top: 657px;
    z-index:999;
    }
    #WFM021{
    position: absolute;
    left:597px;
    top: 616px;
    z-index:999;
    }
    #WFM022{
    position: absolute;
    left:611px;
    top: 578px;
    z-index:999;
    }
    #WFM046{
    position: absolute;
    left:382px;
    top: 469px;
    z-index:999;
    }
    #WFM024{
    position: absolute;
    left:559px;
    top: 578px;
    z-index:999;
    }#WFM044{
    position: absolute;
    left:402px;
    top: 627px;
    z-index:999;
    }
    #WFM055{
    position: absolute;
    left:526px;
    top: 618px;
    z-index:999;
    }
    #WFM026{
    position: absolute;
    left:401px;
    top: 572px;
    z-index:999;
    }
    #WFM047{
    position: absolute;
    left:347px;
    top: 394px;
    z-index:999;
    }#WFM048{
    position: absolute;
    left:389px;
    top: 415px;
    z-index:999;
    }#WFM049{
    position: absolute;
    left:451px;
    top: 418px;
    z-index:999;
    }#WFM050{
    position: absolute;
    left:485px;
    top: 392px;
    z-index:999;
    }
    #WFM051{
    position: absolute;
    left:515px;
    top: 416px;
    z-index:999;
    }
    #qsOut1{
        position: absolute;
        left:639px;
        top: 200px;
        z-index:999;
        }
        #qsOut2{
        position: absolute;
        left:780px;
        top: 200px;
        z-index:999;
        }
        #hh1In1{
        position: absolute;
        left:943px;
        top: 328px;
        z-index:999;
        }#hh1In2{
        position: absolute;
        left:1031px;
        top: 328px;
        z-index:999;
        }#hh2In{
        position: absolute;
        left:1200px;
        top: 328px;
        z-index:999;
        }
        #jjc1In{
        position: absolute;
        left:960px;
        top: 419px;
        z-index:999;
        }
        #jjc2In{
        position: absolute;
        left:1010px;
        top: 419px;
        z-index:999;
        }
        #jjc3In{
        position: absolute;
        left:1142px;
        top: 540px;
        z-index:999;
        }
        #hx1In{
        position: absolute;
        left:750px;
        top: 540px;
        z-index:999;
        }
        #hx2In{
        position: absolute;
        left:990px;
        top: 540px;
        z-index:999;
        }
        #vlIn{
        position: absolute;
        left:940px;
        top: 625px;
        z-index:999;
        }
        #cy1In{
        position: absolute;
        left:590px;
        top: 637px;
        z-index:999;
        }
        #cy2In{
        position: absolute;
        left:670px;
        top: 637px;
        z-index:999;
        }
        #tc1In{
        position: absolute;
        left:388px;
        top: 711px;
        z-index:999;
        }
        #tc2In{
        position: absolute;
        left:570px;
        top: 693px;
        z-index:999;
        }
        #qsc2In2{
        position: absolute;
        left:609px;
        top: 367px;
        z-index:999;
        }
        #qsc3In1{
        position: absolute;
        left:364px;
        top: 611px;
        z-index:999;
        }
        #qsc3In2{
        position: absolute;
        left:488px;
        top: 613px;
        z-index:999;
        }
        #qsc3In3{
        position: absolute;
        left:545px;
        top: 553px;
        z-index:999;
        }
        #Wmodel1{
        position: absolute;
        left:37px;
        top: 5px;
        z-index:999;
        }
        #btn_model1_1{
        position:absolute;
        top:40px;
        left:30px;
        z-index:999;
        }
        #btn_model1_2{
        position:absolute;
        top:80px;
        left:30px;
        z-index:999;
        }
        #btn_model1_3{
        position:absolute;
        top:120px;
        left:30px;
        z-index:999;
        }#btn_model1_4{
        position:absolute;
        top:160px;
        left:40px;
        z-index:999;
        }
        #Wmodel2{
        position: absolute;
        left:17px;
        top: 205px;
        z-index:999;
        }
        #btn_model2_1{
        position:absolute;
        top:240px;
        left:30px;
        z-index:999;
        }
        #btn_model2_2{
        position:absolute;
        top:280px;
        left:30px;
        z-index:999;
        }
        #btn_model2_3{
        position:absolute;
        top:320px;
        left:40px;
        z-index:999;
        }
    .name_FM{
    font-family: '微软雅黑','Arial';
    color:black;
    font-size: 15px;
    font-weight:bold;
    }
        .flow{
        font-family: '微软雅黑','Arial';
        color:#8dd9ff;
        font-size: 15px;
        font-weight:bold;
        border:1px solid #008fd7;
        background:rgba(0,0,0,0.5);
        <%--background-color:rgba(0,0,0,0.2);--%>
        <%--background:red;--%>
        width:40px;
        }
        .name_Model{
        font-family: '微软雅黑','Arial';
        color:#ff4400;
        font-size: 15px;
        font-weight:bold;
        }
    #FMList{
    margin-left:144px;
    margin-top:10px;
    }
    #FM_table{
    height:257px;
    width:1333px;
    text-align:center;
    }
    </style>
    <script>
    function changeImage(id){
    var image = document.getElementById(id);
    if(image.src.match("image/y3.png"))
    image.src = "image/y2.png";
    else image.src = "image/y3.png";
    }
    var read = 3600;
    function changeInput(){
    read =document.getElementById("read").value ;
    var textFeild =document.getElementById("write");
    textFeild.innerHTML="进水量："+read+" m3/h";
    computeAll();
    write();
    }
    function setOpenDgree(id){
        var openDgree = 0;
        var num = id.substr(2);
        var table =document.getElementById(num);
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
             table.innerHTML=openDgree+"%";
             image.src = "image/y2.png";
             $('#'+num).toggleClass('danger');
    return;
        }
        else if(openDgree==100)
    {
    table.innerHTML=openDgree+"%";
            image.src = "image/y3.png";
             $('#'+num).toggleClass('info');
    return;

    }

        else{
    table.innerHTML=openDgree+"%";
             image.src = "image/y1.png";
             $('#'+num).toggleClass('warning');
    return;

    }
    }
        var qsOut1;
        var qsOut2;
        var hh1In1;
        var hh1In2;
        var hh2In;
        var hh1Out1;
        var hh1Out2;
        var hh2Out;
        var jjc1In;
        var jjc2In;
        var jjc3In;
        var jjc1Out;
        var jjc2Out;
        var jjc3Out;
        var hx1In;
        var hx2In;
        var hx1Out;
        var hx2Out;
        var vlIn;
        var vlOut;
        var cy1In;
        var cy2In;
        var cy1Out;
        var cy2Out;
        var tc1In;
        var tc1Out;
        var tc2In;
        var tc2Out;
        var qsc1In;
        var qsc1Out;
        var qsc2In1;
        var qsc2In2;
        var qsc2Out;
        var qsc3In;
        var qsc3In1;
        var qsc3In2;
        var qsc3In3;
        var qsc3Out;
        var qsc4In;
        var qsc4Out;
    function clearOpenDgree(id){
    var openDgree = 100;
    var num = id.substr(2);
    var table =document.getElementById(num);
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
    table.innerHTML=openDgree+"%";
    image.src = "image/y2.png";
    $('#'+num).toggleClass('danger');
    return;
    }
    else if(openDgree==100)
    {
    table.innerHTML=openDgree+"%";
    image.src = "image/y3.png";
    $('#'+num).toggleClass('info');
    return;
    }
    else{
    table.innerHTML=openDgree+"%";
    image.src = "image/y1.png";
    $('#'+num).toggleClass('warning');
    return;
    }
    }
    var model1=4;
    var model2=3;

    function chose1(c){
        model1 = c;
        computeAll();
        write();
        }
    function chose2(c){
        model2 = c;
        computeAll();
        write();
        }
    function computeAll(){
        compute1(model1);
        compute2(model2)
    }
    function compute1(c){
        clearModle1();
        changeModle1(c);
        qsOut1=qsOut2=read/2;
        if(c==1){
        hh1In1=0;
        hh1In2=hh2In=(qsOut1+qsOut2)/2;
        }
        else if(c==2){
        hh1In2=0;
        hh1In1=hh2In=(qsOut1+qsOut2)/2;
        }
        else if(c==3){
        hh2In=0;
        hh1In2=hh1In1=(qsOut1+qsOut2)/2;
        }
        else if(c==4){
        hh1In2=hh1In1=hh2In=(qsOut1+qsOut2)/3;
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
    function compute2(c){
        clearModle2();
        changeModle2(c);
        if(c==1){
        cy1In=0;
        cy2In=hx1Out;
        qsc2In2 = vlOut+hx2Out;
        qsc3In3=0;
        }
        if(c==2){
        cy1In= vlOut+hx2Out;
        cy2In=0;
        qsc3In3=hx1Out;
        qsc2In2=0;
        }
        if(c==3){
        cy1In=vlOut+hx2Out;
        cy2In=hx1Out;
        qsc3In3=0;
        qsc2In2=0;
        }
        cy1Out=cy2Out=(cy1In+cy2In)/2;
        tc1In=cy1Out;
        tc2In=cy2Out;
        tc1Out=tc1In;
        tc2Out=tc2In;
        qsc3In1=tc1Out;
        qsc3In2=tc2Out;
        }
    function write(){
        document.getElementById("qsOut1").innerHTML=qsOut1;
        document.getElementById("qsOut2").innerHTML=qsOut2;
        document.getElementById("hh1In1").innerHTML=hh1In1;
        document.getElementById("hh1In2").innerHTML=hh1In2;
        document.getElementById("hh2In").innerHTML=hh2In;
        document.getElementById("jjc1In").innerHTML=jjc1In;
        document.getElementById("jjc2In").innerHTML=jjc2In;
        document.getElementById("jjc3In").innerHTML=jjc3In;
        document.getElementById("hx1In").innerHTML=hx1In;
        document.getElementById("hx2In").innerHTML=hx2In;
        document.getElementById("vlIn").innerHTML=vlIn;
        document.getElementById("cy1In").innerHTML=cy1In;
        document.getElementById("cy2In").innerHTML=cy2In;
        document.getElementById("tc1In").innerHTML=tc1In;
        document.getElementById("tc2In").innerHTML=tc2In;
        <%--document.getElementById("qsc2In1").innerHTML=qsc2In1;--%>
        document.getElementById("qsc2In2").innerHTML=qsc2In2;
        document.getElementById("qsc3In1").innerHTML=qsc3In1;
        document.getElementById("qsc3In2").innerHTML=qsc3In2;
        document.getElementById("qsc3In3").innerHTML=qsc3In3;
        }
    function clearModle1(){
        clearOpenDgree("FM05");
        clearOpenDgree("FM06");
        clearOpenDgree("FM07");
        clearOpenDgree("FM09");
        clearOpenDgree("FM010");
        clearOpenDgree("FM065");
        clearOpenDgree("FM062");
        clearOpenDgree("FM066");
        clearOpenDgree("FM069");
        clearOpenDgree("FM015");
        clearOpenDgree("FM045");
        clearOpenDgree("FM014");
        clearOpenDgree("FM016");
        clearOpenDgree("FM068");
        clearOpenDgree("FM067");
    }
    function clearModle2(){
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
        }
    function changeModle2(c){
        if(c==1){
        setOpenDgree("FM056");
        setOpenDgree("FM054");
        setOpenDgree("FM022");
        setOpenDgree("FM024");
        }
        else if(c==2){
        setOpenDgree("FM053");
        setOpenDgree("FM021");
        }
        else if(c==3){
        setOpenDgree("FM056");
        setOpenDgree("FM021");
        setOpenDgree("FM022");
        setOpenDgree("FM024");
        }
        }
    function changeModle1(c){
    if(c==1){
    setOpenDgree("FM062");
    setOpenDgree("FM045");
    setOpenDgree("FM068");
    }
    else if(c==2){
    setOpenDgree("FM069");
    setOpenDgree("FM015");
    setOpenDgree("FM068");
    }
    else if(c==3){
    setOpenDgree("FM065");
    setOpenDgree("FM066");
    setOpenDgree("FM068");
    setOpenDgree("FM067");
    }
    else if(c==4){
    setOpenDgree("FM068");
        }
    }

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
        <div id="readout_input" class="name_ob">
           <P id="write">进水量：3600 m3/h</P>
        </div>
        <div id="setConfig">
            <h1>参数设置：</h1>
             <p> 1. 进水量</p>
            <p><input id="read" type="text"size="10px"/>&nbsp;m3/h</p>
            <button id="btn_submit" class="btn btn-info btn-sm btn_main" value="0" onclick="changeInput()">提交</button>
        </div>
        <div id="qs1" calss = "waterOut">

        </div>
    <a href="#" id="name_QS"  class="name_ob" style="text-decoration: none" class="name_ob">取水泵房</a>
    <a href="#" id="name_JJC1" class="name_ob" style="text-decoration: none " class="name_ob">1#机加池</a>
    <a href="#" id="name_JJC2" class="name_ob" style="text-decoration: none" class="name_ob">2#机加池</a>
    <a href="#" id="name_JJC3" class="name_ob" style="text-decoration: none" class="name_ob">3#机加池</a>
    <a href="#" id="name_VL" class="name_ob" style="text-decoration: none" class="name_ob">V型滤池</a>
    <a href="#" id="name_TC" class="name_ob" style="text-decoration: none ">活性炭池</a>
    <a href="#" id="name_TC1" class="name_ob" style="text-decoration: none ">活性炭池</a>
    <a href="#" id="name_CY" class="name_ob" style="text-decoration: none ">臭氧混合池</a>
    <a href="#" id="name_CYC" class="name_ob" style="text-decoration: none ">臭氧生产池</a>
    <a href="#" id="name_YC" class="name_ob" style="text-decoration: none">预沉池</a>
    <a href="#" id="name_HHJ1" class="name_ob" style="text-decoration: none">老混合井</a>
    <a href="#" id="name_HHJ2" class="name_ob" style="text-decoration: none ">新混合井</a>
    <a href="#" id="name_HX" class="name_ob" style="text-decoration: none "> 虹吸滤池</a>
    <a href="#" id="name_QSC1" class="name_ob" style="text-decoration: none">3#清水池</a>
    <a href="#" id="name_QSC2" class="name_ob" style="text-decoration: none ">1#清水池</a>
    <a href="#" id="name_QSC3" class="name_ob" style="text-decoration: none ">2#清水池</a>
    <a href="#" id="name_QSC4" class="name_ob" style="text-decoration: none">4#清水池</a>

    <img id="FM05" src="image/y3.png" onclick="setOpenDgree('FM05')" hover="heighlight()">
    <img id="FM06" src="image/y3.png" onclick="setOpenDgree('FM06')">
    <img id="FM07" src="image/y3.png" onclick="setOpenDgree('FM07')">
    <img id="FM09" src="image/y3.png" onclick="setOpenDgree('FM09')">
    <img id="FM010" src="image/y3.png" onclick="setOpenDgree('FM010')">
    <img id="FM065" src="image/y3.png" onclick="setOpenDgree('FM065')">
    <img id="FM062" src="image/y3.png" onclick="setOpenDgree('FM062')">
    <img id="FM045" src="image/y3.png" onclick="setOpenDgree('FM045')">
    <img id="FM014" src="image/y3.png" onclick="setOpenDgree('FM014')">
    <img id="FM015" src="image/y3.png" onclick="setOpenDgree('FM015')">
    <img id="FM069" src="image/y3.png" onclick="setOpenDgree('FM069')">
    <img id="FM066" src="image/y3.png" onclick="setOpenDgree('FM066')">
    <img id="FM016" src="image/y3.png" onclick="setOpenDgree('FM016')">
    <img id="FM068" src="image/y3.png" onclick="setOpenDgree('FM068')">
    <img id="FM067" src="image/y3.png" onclick="setOpenDgree('FM067')">
    <img id="FM017" src="image/y3.png" onclick="setOpenDgree('FM017')">
    <img id="FM018" src="image/y3.png" onclick="setOpenDgree('FM018')">
    <img id="FM019" src="image/y3.png" onclick="setOpenDgree('FM019')">
    <img id="FM020" src="image/y3.png" onclick="setOpenDgree('FM020')">
    <img id="FM052" src="image/y3.png" onclick="setOpenDgree('FM052')">
    <img id="FM056" src="image/y3.png" onclick="setOpenDgree('FM056')">
    <img id="FM053" src="image/y3.png" onclick="setOpenDgree('FM053')">
    <img id="FM054" src="image/y3.png" onclick="setOpenDgree('FM054')">
    <img id="FM057" src="image/y3.png" onclick="setOpenDgree('FM057')">
    <img id="FM058" src="image/y3.png" onclick="setOpenDgree('FM058')">
    <img id="FM059" src="image/y3.png" onclick="setOpenDgree('FM059')">
    <img id="FM021" src="image/y3.png" onclick="setOpenDgree('FM021')">
    <img id="FM022" src="image/y3.png" onclick="setOpenDgree('FM022')">
    <img id="FM046" src="image/y3.png" onclick="setOpenDgree('FM046')">
    <img id="FM024" src="image/y3.png" onclick="setOpenDgree('FM024')">
    <img id="FM044" src="image/y3.png" onclick="setOpenDgree('FM044')">
    <img id="FM055" src="image/y3.png" onclick="setOpenDgree('FM055')">
    <img id="FM026" src="image/y3.png" onclick="setOpenDgree('FM026')">
    <img id="FM047" src="image/y3.png" onclick="setOpenDgree('FM047')">
    <img id="FM048" src="image/y3.png" onclick="setOpenDgree('FM048')">
    <img id="FM049" src="image/y3.png" onclick="setOpenDgree('FM049')">
    <img id="FM050" src="image/y3.png" onclick="setOpenDgree('FM050')">
    <img id="FM051" src="image/y3.png" onclick="setOpenDgree('FM051')">

    <p id="WFM05" class="name_FM">05#</p>
    <p id="WFM06" class="name_FM">06#</p>
    <p id="WFM07" class="name_FM">07#</p>
    <p id="WFM09" class="name_FM">09#</p>
    <p id="WFM010" class="name_FM">010#</p>
    <p id="WFM065" class="name_FM">065#</p>
    <p id="WFM062" class="name_FM">062#</p>
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
    <p id="WFM024" class="name_FM">024#</p>
    <p id="WFM044" class="name_FM">044#</p>
    <p id="WFM055" class="name_FM">055#</p>
    <p id="WFM026" class="name_FM">026#</p>
    <p id="WFM047" class="name_FM">047#</p>
    <p id="WFM048" class="name_FM">048#</p>
    <p id="WFM049" class="name_FM">049#</p>
    <p id="WFM050" class="name_FM">050#</p>
    <p id="WFM051" class="name_FM">051#</p>

        <p id="qsOut1" class="flow"></p>
        <p id="qsOut2" class="flow"></p>
        <p id="hh1In1" class="flow"></p>
        <p id="hh1In2" class="flow"></p>
        <p id="hh2In" class="flow"></p>
        <p id="jjc1In" class="flow"></p>
        <p id="jjc2In" class="flow"></p>
        <p id="jjc3In" class="flow"></p>
        <p id="hx1In" class="flow"></p>
        <p id="hx2In" class="flow"></p>
        <p id="vlIn" class="flow"></p>
        <p id="cy1In" class="flow"></p>
        <p id="cy2In" class="flow"></p>
        <p id="tc1In" class="flow"></p>
        <p id="tc2In" class="flow"></p>
        <%--<p id="qsc2In1" class="flow"></p>--%>
        <p id="qsc2In2" class="flow"></p>
        <p id="qsc3In1" class="flow"></p>
        <p id="qsc3In2" class="flow"></p>
        <p id="qsc3In3" class="flow"></p>
        <p id="qsOut1" class="flow"></p>
        <p id="qsOut1" class="flow"></p>
        <p id="qsOut1" class="flow"></p>
        <p id="qsOut1" class="flow"></p>
        <p id="qsOut1" class="flow"></p>
        <p id="qsOut1" class="flow"></p>
        <p id="qsOut1" class="flow"></p>
        <p id="qsOut1" class="flow"></p>
        <p id="Wmodel1" class="name_Model">机加池模式</p>
        <button id="btn_model1_1" class="btn btn-info btn-sm btn_main"  onclick="chose1(1)">关闭机加池1</button>
        <button id="btn_model1_2" class="btn btn-info btn-sm btn_main"  onclick="chose1(2)">关闭机加池2</button>
        <button id="btn_model1_3" class="btn btn-info btn-sm btn_main"  onclick="chose1(3)">关闭机加池3</button>
        <button id="btn_model1_4" class="btn btn-info btn-sm btn_main"  onclick="chose1(4)">开启所有</button>
        <p id="Wmodel2" class="name_Model">臭氧接触池模式</p>
        <button id="btn_model2_1" class="btn btn-info btn-sm btn_main"  onclick="chose2(1)">关闭接触池1</button>
        <button id="btn_model2_2" class="btn btn-info btn-sm btn_main"  onclick="chose2(2)">关闭接触池2</button>
        <button id="btn_model2_3" class="btn btn-info btn-sm btn_main"  onclick="chose2(3)">开启所有</button>
    </div>
    <div id="FMList">

    <!-- Table -->
    <table id="FM_table" class="table table-bordered " >
    <thead>
    <td>#</td>
    <td>开启度</td>
    <td>#</td>
    <td>开启度</td>
    <td>#</td>
    <td>开启度</td>
    <td>#</td>
    <td>开启度</td>
    <td>#</td>
    <td>开启度</td>
    <td>#</td>
    <td>开启度</td>
    <td>#</td>
    <td>开启度</td>
    <td>#</td>
    <td>开启度</td>
    </thead>
    <tbody>
    <tr><td>05</td><td id="05">100</td><td>06</td><td id="06" >100</td><td>07</td><td id="07" >100</td><td>09</td><td id="09">100</td><td>010</td><td id="010">100</td><td>065</td><td id="065">100</td><td>062</td><td id="062">100</td><td>045</td><td id="045">100</td></tr>
    <tr><td>014</td><td id="014">100</td><td>015</td><td id="015">100</td><td>069</td><td id="069">100</td><td>066</td><td id="066">100</td><td>016</td><td id="016">100</td><td>068</td><td id="068">100</td><td>067</td><td id="067">100</td><td>017</td><td id="017">100</td></tr>
    <tr><td>018</td><td id="018">100</td><td>019</td><td id="019">100</td><td>020</td><td id="020">100</td><td>052</td><td id="052">100</td><td>056</td><td id="056">100</td><td>053</td><td id="053">100</td><td>054</td><td id="054">100</td><td>057</td><td id="057">100</td></tr>
    <tr><td>058</td><td id="058">100</td><td>059</td><td id="059">100</td><td>021</td><td id="021">100</td><td>022</td><td id="022">100</td><td>046</td><td id="046">100</td><td>024</td><td id="024">100</td><td>044</td><td id="044">100</td><td>055</td><td id="055">100</td></tr>
    <tr><td>026</td><td id="026">100</td><td>047</td><td id="047">100</td><td>048</td><td id="048</">100</td><td>049</td><td id="049">100</td><td>050</td><td id="050">100</td><td>051</td><td id="051">100</td></tr>

    </tbody>
    </table>
    </div>
    <jsp:include page="down.jsp" />
    <script>
        function open_mainView(){
            window.open("main1.html",'_self');
        }
    </script>
</div>
</body>
</html>