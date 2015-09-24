/**
 * Created by Administrator on 2015/7/21.
 */
oCanvas.domReady(function(){
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
        canvas: "#canvas_CY",
        background: "#eeeeef",
        fps:1
    });
    var bg=canvas.display.image({
        x:0,
        y:0,
        image:"./image/GN_CY.png"
    });
    canvas.addChild(bg);
//  var bg=canvas.display.image({
//      x:0,
//      y:0,
//      image:"../image/m00005.png"
//  });
//  canvas.addChild(bg);
    
    var CY_Y1A = canvas.display.SC({
        x: 980,
        y: 400,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #ff4400"
    });
    canvas.addChild(CY_Y1A);
    
    
   
    var CY_Y2A = canvas.display.SC({
        x: 800,
        y: 400,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #ff4400"
    });
     canvas.addChild(CY_Y2A);
   
    
   
    var CY_Y3A = canvas.display.SC({
        x: 550,
        y: 400,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #ff4400"
    });
     canvas.addChild(CY_Y3A);
    
       
   
	 var CY_Y4A = canvas.display.SC({
        x: 300,
        y: 400,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #ff4400"
    });
     canvas.addChild(CY_Y4A);
    
      
    
	 var CY_Y5A = canvas.display.SC({
        x: 200,
        y: 400,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #ff4400"
    });
    canvas.addChild(CY_Y5A);

       
    var flag = 1;
    var step = 5;
//    $("#btn_start").toggle(
//        function () {
//            flag = 0;
//            },
//        function() {
//            flag = 1;
//        });
    $("button#btn_start").click(function(){
        if(flag==1){
            flag=0;
              $(this).text("开始演示");
            }

        else{
            flag=1;
            $(this).text("暂停演示");}
    });
    $("#btn_fast").click(function(){
        step += 5;
    });
    $("#btn_slow").click(function(){
        step -= 5;
    });
    $("#btn_zero").click(function(){
        step = 5;
    });
    $("#btn_reset").click(function(){
        t=0
        flag=0;
        step = 5;
        $("#btn_start").text("开始演示");
        document.cookie="time=0";
    });
    $("#btn_last").click(function(){
        window.location.assign("./GN_VL.jsp");
    });
    $("#btn_next").click(function(){
        window.location.assign("./GN_TC01.jsp");
    });
	$("#btn_CYB").click(function(){
        window.location.assign("./GN_CYB.jsp");
    });
    $("#btn_home").click(function(){
        window.location.assign("./GN_FMControl.jsp");
    });
    var strCookie =document.cookie;
    //将多cookie切割为多个名/值对
    var arrCookie=strCookie.split(";");
    var t;
    //遍历cookie数组，处理每个cookie对
    for(var i=0;i<arrCookie.length;i++){
        var arr=arrCookie[i].split("=");
        //找到名称为time的cookie，并返回它的值
        if("time"==arr[0]){
            t = parseFloat(arr[1]);
            break;
        }
    }
    canvas.setLoop(function () {
//        var testCookie =document.cookie;
//        document.getElementById("test1").innerHTML="cookies:"+testCookie;
        document.getElementById("SimTime").innerHTML="仿真时间: "+t+"秒";
        document.getElementById("step").innerHTML="步长: "+step+"秒";
        //Y1A
        $.post("./updateYOnload.jsp",{id:"MTG_CY_Y1A",t:t},function(Onload){
//        	alert(data);
            CY_Y1A.height_now=parseFloat(Onload);
//            document.getElementById("readout_CY_Y1A_Onload").innerHTML="堰1A负载"+Onload+"%";
            if(Onload>85){
                CY_Y1A.fill="#0767c8";
            }
            else{
                CY_Y1A.fill="#43d9f9";
            }
        });
        $.post("./updateYVNow.jsp",{id:"MTG_CY_Y1A",t:t},function(VNow) {
            document.getElementById("readout_CY_Y1A_Vnow").innerHTML = "堰1A水量" +VNow+"立方米";
        });
        
        //CY1_Y1
        $.post("./updateYOnload.jsp",{id:"MTG_CY_Y2A",t:t},function(Onload){
//        	alert(data);
            CY_Y2A.height_now=parseFloat(Onload);
//            document.getElementById("readout_CY_Y2A_Onload").innerHTML="堰2A负载"+Onload+"%";
            if(Onload>85){
                CY_Y2A.fill="#0767c8";
            }
            else{
                CY_Y2A.fill="#43d9f9";
            }
        });
        $.post("./updateYVNow.jsp",{id:"MTG_CY_Y2A",t:t},function(VNow) {
            document.getElementById("readout_CY_Y2A_Vnow").innerHTML = "堰2A水量" +VNow+"立方米";
        });
        //CY1_Y2
       
        //CY2_Y1
        $.post("./updateYOnload.jsp",{id:"MTG_CY_Y3A",t:t},function(Onload){
//        	alert(data);
            CY_Y3A.height_now=parseFloat(Onload);
//            document.getElementById("readout_CY_Y3A_Onload").innerHTML="堰3A负载"+Onload+"%";
            if(Onload>85){
                CY_Y3A.fill="#0767c8";
            }
            else{
                CY_Y3A.fill="#43d9f9";
            }
        });
        $.post("./updateYVNow.jsp",{id:"MTG_CY_Y3A",t:t},function(VNow) {
            document.getElementById("readout_CY_Y3A_Vnow").innerHTML = "堰3A水量" +VNow+"立方米";
        });
        //CY2_Y2
       
		  //CY2_Y1
        $.post("./updateYOnload.jsp",{id:"MTG_CY_Y4A",t:t},function(Onload){
//        	alert(data);
            CY_Y4A.height_now=parseFloat(Onload);
//            document.getElementById("readout_CY_Y4A_Onload").innerHTML="堰4负载"+Onload+"%";
            if(Onload>85){
                CY_Y4A.fill="#0767c8";
            }
            else{
                CY_Y4A.fill="#43d9f9";
            }
        });
        $.post("./updateYVNow.jsp",{id:"MTG_CY_Y4A",t:t},function(VNow) {
            document.getElementById("readout_CY_Y4A_Vnow").innerHTML = "堰4A水量" +VNow+"立方米";
        });
        //CY2_Y2
        
		 //CY2_Y1
        $.post("./updateYOnload.jsp",{id:"MTG_CY_Y5A",t:t},function(Onload){
//        	alert(data);
            CY_Y5A.height_now=parseFloat(Onload);
//            document.getElementById("readout_CY_Y5A_Onload").innerHTML="堰5A负载"+Onload+"%";
            if(Onload>85){
                CY_Y5A.fill="#0767c8";
            }
            else{
                CY_Y5A.fill="#43d9f9";
            }
        });
        $.post("./updateYVNow.jsp",{id:"MTG_CY_Y5A",t:t},function(VNow) {
            document.getElementById("readout_CY_Y5A_Vnow").innerHTML = "堰5A水量" +VNow+"立方米";
        });
        //CY2_Y2
       
        if(flag==1){
            t+=step;
        }
        else{
            t+=0;
        }
        var writeCookie="time="+t;
        document.cookie=writeCookie;
        canvas.redraw();
    }).start();
});
