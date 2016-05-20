/**
 * Created by Administrator on 2015/7/21.
 */
oCanvas.domReady(function(){
   $("#btn_start").text("开始演示");
    //var canvas=oCanvas.create({
    //    canvas:"#canvas_test",
    //    background:"#eee"
    //});
    //var button_keep=canvas.display.rectangle({
    //        x:30,
    //        y:80,
    //        width:200,
    //        height:150,
    //        fill:"#000"
    //    }),
    //    button_clear=button_keep.clone({
    //        x:250
    //    });
    //canvas.addChild(button_keep);
    //canvas.addChild(button_clear);
    //button_keep.bind("click tap", function () {
    //    canvas.clear();
    //});
    //button_clear.dragAndDrop();
    //

    //水池的构造器，上升型
    var constructor = function (settings, core) {

        return oCanvas.extend({
            core: core,
            shapeType: "rectangular",

            init: function () {

            },
            advance: function () {
                if(this.height_now<this.height){
                    this.height_now+=1;
                }
                else{
                    this.height_now=0;
                }
            },
            draw: function () {
                var canvas = this.core.canvas,
                    origin = this.getOrigin(),
                    x = this.abs_x - origin.x,
                    y = this.abs_y - origin.y;

                canvas.beginPath();

                if (this.fill !== "") {
                    canvas.fillStyle = this.fill;
                    canvas.fillRect(x, y+this.height-this.height_now, this.width, this.height_now);
                }
                canvas.strokeStyle = this.strokeColor;
                canvas.lineWidth = this.strokeWidth;
                canvas.strokeRect(x,y,this.width,this.height);
                //
                //if (this.strokeWidth > 0) {
//                    canvas.strokeStyle = this.strokeColor;
//                    canvas.lineWidth = this.strokeWidth;
                //    canvas.strokeRect(x, y+this.height-this.height_now, this.width, this.height_now);
                //}
                canvas.stroke();
                canvas.closePath();
            }
        }, settings);
    };
//水池的构造函数
    oCanvas.registerDisplayObject("SC", constructor, "init");
//创建画布
    var canvas = oCanvas.create({
        canvas: "#canvas_QS",
        background: "#eeeeed",
        fps:1
    });
    var bg=canvas.display.image({
        x:130,
        y: -13,
        width:1340,
        height:771,
        opacity:1,
        image:"./image/FMControl.png"
    });
    canvas.addChild(bg);
    var img1=canvas.display.image({
        x:692,
        y:58,
        image:"image/main/qs.png"
    });
    canvas.addChild(img1);
//    img1.bind("click",function(){
//        window.location.href="GN_getWater.jsp";
//    }).bind("mouseenter", function () {
//            canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//            canvas.redraw();
//    }).bind("mouseleave", function () {
//        canvas.mouse.cursor("default");
//        this.shadow="0 0 0px #eee";
//
//        canvas.redraw();
//     });
//    var img1_2=canvas.display.image({
//        x:678,
//        y:141,
//        image:"image/main/qs2.png"
//    });
//    canvas.addChild(img1_2);
//    img1_2.bind("click",function(){
//        window.location.href="GN_getWater.jsp";
//    }).bind("mouseenter", function () {
//        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//    }).bind("mouseleave", function () {
//        canvas.mouse.cursor("default");
//        this.shadow="0 0 0px #eee";
//    });
//    //????????
    var img11=canvas.display.image({
        x:678,
        y:141,
        image:"image/main/qs2.png"
    });
    canvas.addChild(img11);
//    img2.bind("click",function(){
//        window.location.href="GN_JJ.jsp";
//    }).bind("mouseenter", function () {
//        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//        canvas.redraw();
//    }).bind("mouseleave", function () {
//        canvas.mouse.cursor("default");
//        this.shadow="0 0 0px #eee";
//        canvas.redraw();
//    });
//    //???????????
    var img2=canvas.display.image({
        x:839,
        y:342,
        image:"image/main/5.png"
    });
    canvas.addChild(img2);
//    img21.bind("click",function(){
//        window.location.href="GN_JJ.jsp";
//    }).bind("mouseenter", function () {
//        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//        canvas.redraw();
//    }).bind("mouseleave", function () {
//        canvas.mouse.cursor("default");
//        this.shadow="0 0 0px #eee";
//        canvas.redraw();
//    });
    var img21=img2.clone({
        x:1049,
        y:340
    });
    canvas.addChild(img21);
    var img22=img2.clone({
        x:1127,
        y:573
    });
    canvas.addChild(img22);
    var img3=canvas.display.image({
        x:847,
        y:665,
        image:"image/main/6.png"
    });
    canvas.addChild(img3);
    var img4=canvas.display.image({
        x:967,
        y:352,
        image:"image/main/hhj.png"
    });
    var img41=canvas.display.image({
        x:1179,
        y:381,
        image:"image/main/hhj2.png"
    });
    canvas.addChild(img41);
    var img5=canvas.display.image({
        x:810,
        y:529,
        image:"image/main/hx.png"
    });
    canvas.addChild(img5);
    var img6=canvas.display.image({
        x:284,
        y:435,
        image:"image/main/qsc1.png"
    });
    canvas.addChild(img6);
    var img61=canvas.display.image({
        x:287,
        y:253,
        image:"image/main/qsc2.png"
    });
    canvas.addChild(img61);
    var img62=canvas.display.image({
        x:462,
        y:251,
        image:"image/main/qsc2.png"
    });
    canvas.addChild(img62);
    var img63=canvas.display.image({
        x:432,
        y:434,
        image:"image/main/qsc3.png"
    });
    canvas.addChild(img63);
    var img7=canvas.display.image({
        x:870,
        y:-7,
        image:"image/main/1.png"
    });
    canvas.addChild(img7);
    var img8=canvas.display.image({
        x:379,
        y:652,
        image:"image/main/tc.png"
    });
    canvas.addChild(img8);
    var img81=canvas.display.image({
        x:488,
        y:652,
        image:"image/main/tc.png"
    });
    canvas.addChild(img81);
    var img9=canvas.display.image({
        x:613,
        y:645,
        image:"image/main/cy.png"
    });
    canvas.addChild(img9);
    var img10=canvas.display.image({
        x:623,
        y:465,
        image:"image/main/cyc.png"
    });
    canvas.addChild(img10);
    
    var fg=canvas.display.image({
        x:130,
        y: -13,
        height:1,
        width:1,
//        fill:rgba(0,0,0,0.5);
        image:"./image/FMControl_v1.png"
    });
    canvas.addChild(fg);


//    img22.bind("click",function(){
//        window.location.href="GN_JJ.jsp";
//    }).bind("mouseenter", function () {
//        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//        canvas.redraw();
//    }).bind("mouseleave", function () {
//        canvas.mouse.cursor("default");
//        this.shadow="0 0 0px #eee";
//
//        canvas.redraw();
//    });
//    //V?????????
//    var img3=canvas.display.image({
//        x:847,
//        y:665,
//        image:"image/main/6.png"
//    });
//    canvas.addChild(img3);
//    img3.bind("click",function(){
//        window.location.href="GN_VL.jsp";
//    }).bind("mouseenter", function () {
//        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//        canvas.redraw();
//    }).bind("mouseleave", function () {
//        canvas.mouse.cursor("default");
//        this.shadow="0 0 0px #eee";
//       canvas.redraw();
//    });
//
//    //?????????
//    var img4=canvas.display.image({
//        x:967,
//        y:352,
//        image:"image/main/hhj.png"
//    });
//    canvas.addChild(img4);
//    img4.bind("click",function(){
//        window.location.href="GN_HH.jsp";
//    }).bind("mouseenter", function () {
//        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//         canvas.redraw();
//    }).bind("mouseleave", function () {
//        canvas.mouse.cursor("default");
//        this.shadow="0 0 0px #eee";
//        canvas.redraw();
//    });
//    var img10=canvas.display.image({
//        x:1179,
//        y:381,
//        image:"image/main/hhj2.png"
//    });
//    canvas.addChild(img10);
//    img10.bind("click",function(){
//        window.location.href="GN_HH.jsp";
//    }).bind("mouseenter", function () {
//        this.shadow="0 0 10px #eee";
//         canvas.redraw();
//        canvas.mouse.cursor("pointer");
//    }).bind("mouseleave", function () {
//        canvas.mouse.cursor("default");
//        this.shadow="0 0 0px #eee";
//        canvas.redraw();
//    });
//    //???????
//    var img5=canvas.display.image({
//        x:810,
//        y:529,
//        image:"image/main/hx.png"
//    });
//    canvas.addChild(img5);
//    img5.bind("click",function(){
//        window.location.href="GN_HX.jsp";
//    }).bind("mouseenter", function () {
//        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//       canvas.redraw();
//    }).bind("mouseleave", function () {
//        canvas.mouse.cursor("default");
//        this.shadow="0 0 0px #eee";
//       canvas.redraw();
//    });
//    //?????
//    var img6=canvas.display.image({
//        x:284,
//        y:435,
//        image:"image/main/qsc1.png"
//    });
//    canvas.addChild(img6);
//    img6.bind("click",function(){
//        window.location.href="GN_QingS_new.jsp";
//    }).bind("mouseenter", function () {
//        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//         canvas.redraw();
//    }).bind("mouseleave", function () {
//        canvas.mouse.cursor("default");
//        this.shadow="0 0 0px #eee";
//        canvas.redraw();
//    });
//    var img61=canvas.display.image({
//        x:287,
//        y:253,
//        image:"image/main/qsc2.png"
//    });
//    canvas.addChild(img61);
//    img61.bind("click",function(){
//        window.location.href="GN_QingS.jsp";
//    }).bind("mouseenter", function () {
//        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//         canvas.redraw();
//    }).bind("mouseleave", function () {
//        canvas.mouse.cursor("default");
//        this.shadow="0 0 0px #eee";
//        canvas.redraw();
//    });
//    var img62=canvas.display.image({
//        x:462,
//        y:251,
//        image:"image/main/qsc2.png"
//    });
//    canvas.addChild(img62);
//    img62.bind("click",function(){
//        window.location.href="GN_QingS.jsp";
//    }).bind("mouseenter", function () {
//        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//         canvas.redraw();
//    }).bind("mouseleave", function () {
//        canvas.mouse.cursor("default");
//        this.shadow="0 0 0px #eee";
//        canvas.redraw();
//    });
//    var img63=canvas.display.image({
//        x:432,
//        y:434,
//        image:"image/main/qsc3.png"
//    });
//    canvas.addChild(img63);
//    img63.bind("click",function(){
//        window.location.href="GN_QingS_new.jsp";
//    }).bind("mouseenter", function () {
//        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//         canvas.redraw();
//    }).bind("mouseleave", function () {
//        canvas.mouse.cursor("default");
//        this.shadow="0 0 0px #eee";
//        canvas.redraw();
//    });
//
//    var img7=canvas.display.image({
//        x:870,
//        y:-7,
//        image:"image/main/1.png"
//    });
//    canvas.addChild(img7);
//    img7.bind("click",function(){
//        window.location.href="#";
//    }).bind("mouseenter", function () {
//        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//        canvas.redraw();
//    }).bind("mouseleave", function () {
//        canvas.mouse.cursor("default");
//        this.shadow="0 0 0px #eee";
//        canvas.redraw();
//    });
//    var img8=canvas.display.image({
//        x:379,
//        y:652,
//        image:"image/main/tc.png"
//    });
//    canvas.addChild(img8);
//    img8.bind("click",function(){
//        window.location.href="GN_TC01.jsp";
//    }).bind("mouseenter", function () {
//        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//       canvas.redraw();
//    }).bind("mouseleave", function () {
//        canvas.mouse.cursor("default");
//        this.shadow="0 0 0px #eee";
//       canvas.redraw();
//    });
//
//    var img8_1=canvas.display.image({
//        x:488,
//        y:652,
//        image:"image/main/tc.png"
//    });
//    canvas.addChild(img8_1);
//    img8_1.bind("click",function(){
//        window.location.href="GN_TC01.jsp";
//    }).bind("mouseenter", function () {
//        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//        canvas.redraw();
//    }).bind("mouseleave", function () {
//        canvas.mouse.cursor("default");
//        this.shadow="0 0 0px #eee";
//        canvas.redraw();
//    });
//
//    var img9=canvas.display.image({
//        x:613,
//        y:645,
//        image:"image/main/cy.png"
//    });
//    canvas.addChild(img9);
//    img9.bind("click",function(){
//        window.location.href="GN_CY.jsp";
//    }).bind("mouseenter", function () {
//        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//        canvas.redraw();
//    }).bind("mouseleave", function () {
//        canvas.mouse.cursor("default");
//        this.shadow="0 0 0px #eee";
//         canvas.redraw();
//    });
//
//    var img10=canvas.display.image({
//        x:623,
//        y:465,
//        image:"image/main/cyc.png"
//    });
//    canvas.addChild(img10);
//    img10.bind("click",function(){
//        window.location.href="#";
//    }).bind("mouseenter", function () {
//        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//        canvas.redraw();
//    }).bind("mouseleave", function () {
//        canvas.mouse.cursor("default");
//        this.shadow="0 0 0px #eee";
//        canvas.redraw();
//    });




//    var flag = 0;
//    var step = 5;
//    $("button#btn_start").click(function(){
//        if(flag==1){
//            flag=0;
//            $(this).text("开始演示");}
//        else{
//            flag=1;
//            $(this).text("暂停演示");}
//    });
//    $("#btn_fast").click(function(){
//        step += 5;
//    });
//    $("#btn_slow").click(function(){
//        step -= 5;
//    });
//    $("#btn_zero").click(function(){
//        step = 5;
//    });
//    $("#btn_reset").click(function(){
//        t=0;
//        flag=0;
//        step = 5;
//        $("#btn_start").text("开始演示");
//        document.cookie="time=0";
//    });
//    var strCookie =document.cookie;
//    //将多cookie切割为多个名/值对
//    var arrCookie=strCookie.split(";");
//    var t;
//    //遍历cookie数组，处理每个cookie对
//    for(var i=0;i<arrCookie.length;i++){
//        var arr=arrCookie[i].split("=");
//        //找到名称为time的cookie，并返回它的值
//        if("time"==arr[0]){
//            t = parseFloat(arr[1]);
//            break;
//        }
//    }
//    canvas.setLoop(function () {
////        var testCookie =document.cookie;
////        document.getElementById("test1").innerHTML="cookies:"+testCookie;
//        document.getElementById("SimTime").innerHTML="仿真时间: "+t+"秒";
//        document.getElementById("step").innerHTML="步长: "+step+"秒";
//
//        if(flag==1){
//            t+=step;
//        }
//        else{
//            t+=0;
//        }
//        var writeCookie="time="+t;
//        document.cookie=writeCookie;
//
//        canvas.redraw();
//    }).start();
    canvas.timeline.start();
    $("#btn_submit").click(function(){   
    	
    	fg.width=1340;
    	fg.height=771;
    	bg.opacity=0;
    	img1.opacity=0.2;
    	img11.opacity=0.2;
    	img2.opacity=0.2;
    	img21.opacity=0.2;
    	img22.opacity=0.2;
    	img3.opacity=0.2;
    	img4.opacity=0.2;
    	img41.opacity=0.2;
    	img5.opacity=0.2;
    	img6.opacity=0.2;
    	img61.opacity=0.2;
    	img62.opacity=0.2;
    	img63.opacity=0.2;
    	img7.opacity=0.2;
    	img8.opacity=0.2;
    	img81.opacity=0.2;
    	img9.opacity=0.2;
    	img10.opacity=0.2;
    	document.getElementById("name_QS").style.opacity=0.2;
    	document.getElementById("name_QS2").style.opacity=0.2;
    	document.getElementById("name_JJC1").style.opacity=0.2;
    	document.getElementById("name_JJC2").style.opacity=0.2;
    	document.getElementById("name_JJC3").style.opacity=0.2;
    	document.getElementById("name_VL").style.opacity=0.2;
    	document.getElementById("name_HHJ1").style.opacity=0.2;
    	document.getElementById("name_HHJ2").style.opacity=0.2;
    	document.getElementById("name_HX").style.opacity=0.2;
    	document.getElementById("name_QSC1").style.opacity=0.2;
    	document.getElementById("name_CY").style.opacity=0.2;
    	document.getElementById("name_QSC2").style.opacity=0.2;
    	document.getElementById("name_QSC3").style.opacity=0.2;
    	document.getElementById("name_QSC4").style.opacity=0.2;
    	document.getElementById("name_TC").style.opacity=0.2;
    	document.getElementById("name_TC1").style.opacity=0.2;
    	document.getElementById("name_YC").style.opacity=0.2;
    	document.getElementById("name_CYC").style.opacity=0.2;
    	
//    	img1.
//    	img1.opacity=0.2;
//    	img1.opacity=0.2;
//    	img1.opacity=0.2;
//    	canvas.addChild(fg);
    	canvas.redraw()
    	changeInput();
//        	console.log(bg);
//        	bg.width=1;
//    	bg.height=1;
    });
    
    var read = 1800;
    var openDgree_062=100;
    var openDgree_063=100;
    var openDgree_065=100;
 
    function changeInput(){
    showPanel();
    read =parseFloat(document.getElementById("read").value);
        if(read<0||read>1800||isNaN(read)){

			$.messager.alert('错误', '<strong>进厂水量输入有误！</strong> </br>进厂水量范围为0-1800m<sup>3</sup>/h', 'info');
			hidePanel(); 
        return;
    }
    var textFeild =document.getElementById("write");
    textFeild.innerHTML=+read;
    var read_062=parseFloat(document.getElementById("read_FM62").value) ;
    var read_063=parseFloat(document.getElementById("read_FM63").value);
    var read_065=parseFloat(document.getElementById("read_FM65").value);
    if(read_062==0&&read_063==0&&read_065==0){

		$.messager.alert('错误', '<strong>开启度不能全部为0!</strong> </br>请重新输入！', 'info');
		hidePanel();
        return;
    }
    setOpenDgree("FM062",read_062);
    setOpenDgree("FM063",read_063);
    setOpenDgree("FM065",read_065);
    computeAll();
    write();
    blinTwice("#Prediction_results");
    }
    
    function showPanel(){
    		document.getElementById("Prediction_results").style.display="block";
    	}
    function hidePanel(){
			document.getElementById("Prediction_results").style.display="none";
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

				hidePanel();
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
		
    	if (openDgree_062 == openDgree_063 && openDgree_063 == openDgree_065) {
			hh2In=hh1In1=hh1In2=parseInt(read/3/50)*50;
		}else if (openDgree_062+openDgree_063 != 0) {
			hh2In=Math.round(read*4/9*openDgree_065/100/50)*50;
        	hh1In1=Math.round((read-hh2In)*openDgree_062/(openDgree_062+openDgree_063)/50)*50;
        	hh1In2=Math.round((read-hh2In)*openDgree_063/(openDgree_062+openDgree_063)/50)*50;
		}else {
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


    function write(){

        document.getElementById("jjc1In").innerHTML=jjc1In.toFixed(0);
        document.getElementById("jjc2In").innerHTML=jjc2In.toFixed(0);
        document.getElementById("jjc3In").innerHTML=jjc3In.toFixed(0);

        }
});
