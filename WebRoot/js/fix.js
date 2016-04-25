oCanvas.domReady(function () {

	var canvas = oCanvas.create({
        canvas: "#canvas_fix",
        background: "#eeeeed",
        fps: 35
    });
    var bg = canvas.display.image({
        x:130,
        y: -13,
        image: "image/fix.png"
    });
    canvas.addChild(bg);//1
    var speed_all=1.5,
        width_all=16,
        color_GD="#007fff",
        color_GD_new="blue",
        lineHeight_all=10;

    var GD01=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 707 ,y_cell: 96},
            {x_cell: 707 ,y_cell: 150}          
        ],
        state:1,
        GDwidth:width_all,
        color:color_GD
    });//1
    var GD0101=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 707 ,y_cell: 160},//160
            {x_cell: 707 ,y_cell: 223},
            {x_cell: 769 ,y_cell: 261},
            {x_cell: 989 ,y_cell: 261},
            {x_cell: 989, y_cell: 355}
        ],
        state:1,
        GDwidth:width_all,
        color:color_GD
    });//2
    var GD02=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 747 ,y_cell: 98},
            {x_cell: 747 ,y_cell: 222},
            {x_cell: 775 ,y_cell: 240},
            {x_cell: 1019 ,y_cell: 240},
            {x_cell: 1019 , y_cell: 256}
        ],
        state:1,
        GDwidth:width_all,
        color:color_GD
    });//3
    var GD03=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 1019 ,y_cell: 256},
            {x_cell: 1019, y_cell: 355}
        ],
        state:1,
        GDwidth:width_all,
        color:color_GD
    });//4
    var GD04=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 1023,y_cell: 261},
            {x_cell: 1188 ,y_cell: 261},
            {x_cell: 1188, y_cell: 374}
        ],
        state:1,
        GDwidth:width_all,
        color:color_GD
    });//5
    var GD05=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 989 ,y_cell: 365},
            {x_cell: 989 ,y_cell: 411},
            {x_cell: 955, y_cell: 411}
        ],
        state:1,
        GDwidth:width_all,
        color:color_GD
    });//6
    var GD06=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 1019 ,y_cell: 360},
            {x_cell: 1019, y_cell: 411},
            {x_cell: 1058, y_cell: 411}
        ],
        state:1,
        GDwidth:width_all,
        color:color_GD
    });//7
    var GD07=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 1187,y_cell: 412},
            {x_cell: 1187,y_cell: 573}
        ],
        state:1,
        GDwidth:width_all,
        color:color_GD
    });//8
    var GD08=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 897 ,y_cell: 445},
            {x_cell: 897 ,y_cell: 485},
            {x_cell: 793 ,y_cell: 485},
            {x_cell: 793 ,y_cell: 542},
            {x_cell: 818, y_cell: 542}
        ],
        state:1,
        GDwidth:width_all,
        color:"rgba(26,215,255,0)"
    });//9
    var GD09=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 897 ,y_cell: 445},
            {x_cell: 897 ,y_cell: 485},
            {x_cell: 793 ,y_cell: 485},
            {x_cell: 793 ,y_cell: 562},
            {x_cell: 818, y_cell: 562}
        ],
        state:1,
        GDwidth:width_all,
        color:"rgba(26,215,255,0)"
    });//10
    var GD10=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 1109 ,y_cell: 445},
            {x_cell: 1109 ,y_cell: 485},
            {x_cell: 990 ,y_cell: 485},
            {x_cell: 990 ,y_cell: 527}
        ],
        state:1,
        GDwidth:width_all,
        color:color_GD
    });//11
    var GD1001=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 990 ,y_cell: 485},
            {x_cell: 990 ,y_cell: 543},
            {x_cell: 970, y_cell: 543}
        ],
        state:1,
        GDwidth:width_all,
        color:color_GD
    });//12
    var GD1002=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 990 ,y_cell: 485},
            {x_cell: 900 ,y_cell: 485}
        ],
        state:1,
        GDwidth:width_all,
        color:color_GD
    });//13
    var GD11=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 990 ,y_cell: 485},
            {x_cell: 990 ,y_cell: 563},
            {x_cell: 970, y_cell: 563}
        ],
        state:1,
        GDwidth:width_all,
        color:color_GD
    });//14
    var GD12=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 1129 ,y_cell: 653},
            {x_cell: 962, y_cell: 653},
            {x_cell: 962, y_cell: 667}
        ],
        state:1,
        GDwidth:width_all,
        color:color_GD
    });//15
    var GD13=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 848 ,y_cell: 570},
            {x_cell: 848 ,y_cell: 605},
            {x_cell: 659 ,y_cell: 605},
            {x_cell:659, y_cell: 646}
        ],
        state:1,
        GDwidth:width_all,
        color:color_GD
    });//16

    //var GD14=createGD({
    //    parent:canvas,
    //    cells:[
    //        {x_cell: 879 ,y_cell: 570},
    //        {x_cell: 879 ,y_cell: 605},
    //        {x_cell: 844 ,y_cell: 605}
    //    ],
    //    GDwidth:width_all,
    //    color:color_GD
    //});
    var GD141=createGD1({
        parent:canvas,
        cells:[
            //{x_cell: 879 ,y_cell: 570},
            {x_cell: 879 ,y_cell: 633},
            {x_cell: 714 ,y_cell: 633}
            //{x_cell: 636 ,y_cell: 633}
            //{x_cell: 636, y_cell: 646}
        ],
        state:1,
        GDwidth:width_all,
        color:color_GD
    });//17

    var GD15=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 808 ,y_cell: 711},
            {x_cell: 717 ,y_cell: 711},
            {x_cell: 717 ,y_cell: 633},
            {x_cell: 633 ,y_cell: 633},
            {x_cell: 633, y_cell: 646}
        ],
        state:1,
        GDwidth:width_all,
        color:color_GD
    });//18
    var GD1501=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 807 ,y_cell: 708},
            {x_cell: 715 ,y_cell: 708},
            {x_cell: 715 ,y_cell: 735},
            {x_cell: 673, y_cell: 735}
        ],
        state:1,
        GDwidth:width_all,
        color:"rgba(1,0,0,0)"
    });//19
    var GD16=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 615 ,y_cell: 673},
            {x_cell: 582, y_cell: 673}
        ],
        state:1,
        GDwidth:width_all,
        color:color_GD
    });//20
    var GD17=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 676 ,y_cell: 697},
            {x_cell: 676 ,y_cell: 736},
            {x_cell: 435 ,y_cell: 736},
            {x_cell: 435, y_cell: 691}
        ],
        state:1,
        GDwidth:width_all,
        color:color_GD
    });//21
    var GD18=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 414 ,y_cell: 657},
            {x_cell: 414, y_cell: 568}
        ],
        state:1,
        GDwidth:width_all,
        color:color_GD
    });//22
    var GD19=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 540 ,y_cell: 654},
            {x_cell: 540 ,y_cell: 605},
            {x_cell: 414 ,y_cell: 605},
            {x_cell: 414, y_cell: 563}
        ],
        state:1,
        GDwidth:width_all,
        color:color_GD
    });//23
    var GD20=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 403 ,y_cell: 485},
            {x_cell: 372 ,y_cell: 485}
        ],
        state:1,
        GDwidth:width_all,
        color:color_GD
    });//24
    var GD21=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 308 ,y_cell: 435},
            {x_cell: 308, y_cell: 403},
            {x_cell: 407, y_cell: 403},
            {x_cell: 407, y_cell: 376}
        ],
        state:1,
        GDwidth:width_all,
        color:color_GD
    });//25
    var GD22=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 707 ,y_cell: 96},
            {x_cell: 707 ,y_cell: 223},
            {x_cell: 769 ,y_cell: 261},
            {x_cell: 989 ,y_cell: 261},
            {x_cell: 989, y_cell: 297},
            {x_cell: 1018, y_cell: 297},
            {x_cell: 1018, y_cell: 349}
        ],
        state:1,
        GDwidth:width_all,
        color:"rgba(1,0,0,0)"
    });//26

    var GD23=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 422 ,y_cell: 435},
            {x_cell: 422, y_cell: 403},
            {x_cell: 464, y_cell: 403},
            {x_cell: 464, y_cell: 435}
        ],
        state:1,
        GDwidth:width_all,
        color:color_GD
    });//27
    var GD24=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 527 ,y_cell: 439},
            {x_cell: 527 ,y_cell: 403},
            {x_cell: 593 ,y_cell: 403},
            {x_cell: 593, y_cell: 375}
        ],
        state:1,
        GDwidth:width_all,
        color:color_GD
    });//28
    
    var GD25=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 747 ,y_cell: 98},
            {x_cell: 747 ,y_cell: 222},
        ],
        state:1,
        GDwidth:width_all,
        color:color_GD
    });//29
    
    var GD26=createGD1({
        parent:canvas,
        cells:[
            //{x_cell: 896 ,y_cell: 445},
            {x_cell: 832 ,y_cell: 485},
            {x_cell: 793 ,y_cell: 485},
            {x_cell: 793 ,y_cell: 541},
            {x_cell: 818, y_cell: 541}
        ],
        state:1,
        GDwidth:width_all,
        color:color_GD
    });//30
    var GD27=createGD1({
        parent:canvas,
        cells:[
            //{x_cell: 896 ,y_cell: 445},
            {x_cell: 832 ,y_cell: 485},
            {x_cell: 793 ,y_cell: 485},
            {x_cell: 793 ,y_cell: 562},
            {x_cell: 818, y_cell: 562}
        ],
        state:1,
        GDwidth:width_all,
        color:color_GD
    });//31
    var GD28=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 707 ,y_cell: 160},//160
            {x_cell: 707 ,y_cell: 223}
        ],
        state:1,
        GDwidth:width_all,
        color:color_GD
    });//32
    var GD29=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 897 ,y_cell: 445},
            {x_cell: 897 ,y_cell: 485},
            {x_cell: 832 ,y_cell: 485},
            
        ],
        state:1,
        GDwidth:width_all,
        color:color_GD
    });//33
    var GD30=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 881 ,y_cell: 570},
            {x_cell: 881 ,y_cell: 635},
        ],
        state:1,
        GDwidth:width_all,
        color:color_GD
    });//34
    var GD31=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 707 ,y_cell: 160},//160
            {x_cell: 707 ,y_cell: 223},
            {x_cell: 765 ,y_cell: 258},
            {x_cell: 989 ,y_cell: 258},
            {x_cell: 989, y_cell: 298},
            {x_cell: 1019, y_cell: 298},
            {x_cell: 1019, y_cell: 348}
        ],
        state:1,
        GDwidth:width_all,
        color:color_GD
    });//35
    var GD32=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 1019, y_cell: 298},
            {x_cell: 1019, y_cell: 258}
        ],
        state:1,
        GDwidth:width_all,
        color:"rgba(26,215,255,0)"
    });//36
    var GD33=createGD1({
        parent:canvas,
        cells:[                       
            {x_cell: 1019, y_cell: 298},
            {x_cell: 989, y_cell: 298},
            {x_cell: 989, y_cell: 348}
        ],
        state:1,
        GDwidth:width_all,
        color:"rgba(26,215,255,0)"
    });//37
    var GD34=createGD1({
        parent:canvas,
        cells:[
			{x_cell: 1124 ,y_cell: 650},
			{x_cell: 1023, y_cell: 650},
            {x_cell: 1023, y_cell: 482}
            //{x_cell: 1023, y_cell: 650}
        ],
        state:1,
        GDwidth:width_all,
        color:"rgba(26,215,255,0)"
    });//38
    var GD35=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 421 ,y_cell: 433},
            {x_cell: 421, y_cell: 401},
            {x_cell: 592 ,y_cell: 401},
            {x_cell: 592, y_cell: 375}
        ],
        state:1,
        GDwidth:width_all,
        color:"rgba(26,215,255,0)"
    });//39
    var GD36=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 885 ,y_cell: 605},
            {x_cell: 848 ,y_cell: 605}
        ],
        state:1,
        GDwidth:width_all,
        color:color_GD
        
    });//40
    var GD37=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 848 ,y_cell: 560},
            {x_cell: 848 ,y_cell: 570}          
        ],
        state:1,
        GDwidth:width_all,
        color:color_GD
    });

    var img1=canvas.display.image({
        x:692,
        y:58,
        image:"image/main/qs.png"
    });
    canvas.addChild(img1);
//    img1.bind("click",function(){
//        //window.location.href="QS.jsp";
//    	if(confirm("是否将“取水泵房”设置为维修状态？")){
//            fix_qs_right();
//            document.getElementById("nextPage").onclick=function(){
//                fix_qs_left();
//                window.setTimeout(function(){              
//                	decay(2,1);//GD0101
//                	//decay(6,1);//GD05
//                	//decay(9,1);
//                	decay(10,1);
//                	//decay(33,1);
//                	decay(35,1);
//                	canvas.children[37].fill=color_GD;
//                 },100);
//            };
//            document.getElementById("lastPage").onclick=function(){
//                fix_qs_right();
//                window.setTimeout(function(){  
//                	//GD32.paused=1;
//                	canvas.children[36].fill=color_GD;
//                	decay(3,1);//GD02
//                	decay(4,1);//GD03
//                	//decay(5,1);//GD04
//                	//decay(7,1);
//                	//decay(8,1);//GD07
//                	//decay(11,1);
//                	//decay(12,1);
//                	//decay(13,1);
//                	//decay(14,1);
//                	//decay(15,1);//GD12
//                	//decay(18,1);
//                 },100);
//            };
//            document.getElementById("export").href="download/fix-qs.doc";
//            window.setTimeout(function(){  
//            	//GD32.paused=1;
//            	canvas.children[36].fill=color_GD;
//            	decay(3,1);//GD02
//            	decay(4,1);//GD03
//            	//decay(5,1);//GD04
//            	//decay(7,1);
//            	//decay(8,1);//GD07
//            	//decay(11,1);
//            	//decay(12,1);
//            	//decay(13,1);
//            	//decay(14,1);
//            	//decay(15,1);//GD12
//            	//decay(18,1);
//             },100);
//            $("div.panel").show();
//        }
//    });
//    img1.bind("mouseenter", function () {
//        canvas.mouse.cursor("pointer");
//        //$("#name_QS").css("display","inline");
//        this.shadow="0 0 10px #eee";
//    }).bind("mouseleave", function () {
//        canvas.mouse.cursor("default");
//        this.shadow="0 0 0px #eee";
//        //$("#name_QS").css("display","none");
//    }).bind("flash",function(){
//        this.unbind("flash");
//        window.setTimeout(function(){
//            GD01.paused=1;
//            GD22.paused=1;
//            GD02.paused=1;
//        },100);
//
//    });
    var img11=canvas.display.image({
        x:678,
        y:141,
        image:"image/main/qs2.png"
    });
    canvas.addChild(img11);
//    img11.bind("click",function(){
//    	if(confirm("是否将“取水泵房”设置为维修状态？")){
//            fix_qs_right();
//            document.getElementById("nextPage").onclick=function(){
//                fix_qs_left();
//                window.setTimeout(function(){              
//                	decay(2,1);//GD0101
//                	//decay(6,1);//GD05
//                	//decay(9,1);
//                	decay(10,1);
//                	//decay(33,1);
//                	decay(35,1);
//                	canvas.children[37].fill=color_GD;
//                 },100);
//            };
//            document.getElementById("lastPage").onclick=function(){
//                fix_qs_right();
//                window.setTimeout(function(){  
//                	//GD32.paused=1;
//                	canvas.children[36].fill=color_GD;
//                	decay(3,1);//GD02
//                	decay(4,1);//GD03
//                	//decay(5,1);//GD04
//                	//decay(7,1);
//                	//decay(8,1);//GD07
//                	//decay(11,1);
//                	//decay(12,1);
//                	//decay(13,1);
//                	//decay(14,1);
//                	//decay(15,1);//GD12
//                	//decay(18,1);
//                 },100);
//            };
//            document.getElementById("export").href="download/fix-qs.doc";
//            window.setTimeout(function(){  
//            	//GD32.paused=1;
//            	canvas.children[36].fill=color_GD;
//            	decay(3,1);//GD02
//            	decay(4,1);//GD03
//            	//decay(5,1);//GD04
//            	//decay(7,1);
//            	//decay(8,1);//GD07
//            	//decay(11,1);
//            	//decay(12,1);
//            	//decay(13,1);
//            	//decay(14,1);
//            	//decay(15,1);//GD12
//            	//decay(18,1);
//             },100);
//            $("div.panel").show();
//        }
//    });
//    img11.bind("mouseenter", function () {
//        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//        //$("#name_QS2").css("display","inline");
//    }).bind("mouseleave", function () {
//        canvas.mouse.cursor("default");
//        this.shadow="0 0 0px #eee";
//        //$("#name_QS2").css("display","none");
//    }).bind("flash",function(){
//        this.unbind("flash");
//    });
    var img2=canvas.display.image({
        x:839,
        y:342,
        image:"image/main/5.png"
    });
    canvas.addChild(img2);
//    img2.bind("click",function(){
//        //window.location.href="JJC.jsp";
//    	if(confirm("是否将“#1机加池”设置为维修状态？")){
//            fix_jjc1();
//            document.getElementById("scheme").onclick="";
//
//            document.getElementById("export").href="download/fix-jjc1.docx";
//            window.setTimeout(function(){
//            	decay(6,1);
//                decay(10,1);
//                decay(9,1);
//                decay(13,1);
//             },100);
//            $("div.panel").show();
//        }
//    }).bind("mouseenter", function () {
//        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//        //$("#name_JJC1").css("display","inline");
//    }).bind("mouseleave", function () {
//        canvas.mouse.cursor("default");
//        this.shadow="0 0 0 #eee";
//        //$("#name_JJC1").css("display","none");
//    }).bind("flash",function(){
//
//        this.unbind("flash");
//        window.setTimeout(function(){
//            GD08.paused=1;
//            GD09.paused=1;
//            GD26.paused=1;
//            GD27.paused=1;
//            GD29.paused=1;
//        },100);
//    });

    var img21=img2.clone({
        x:1049,
        y:340
    });
    canvas.addChild(img21);
//    img21.bind("click",function(){
//        //window.location.href="JJC.jsp";
//    	if(confirm("是否将“#2机加池”设置为维修状态？")){
//            fix_jjc2();
//            document.getElementById("scheme").onclick="";
//
//            document.getElementById("export").href="download/fix-jjc2.docx";
//            window.setTimeout(function(){
//                decay(7,1);
//                decay(11,1);
//                decay(12,1);
//                decay(13,1);
//                decay(14,1);
//             },100);
//            $("div.panel").show();
//        }
//    }).bind("mouseenter", function () {
//        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//        //$("#name_JJC2").css("display","inline");
//    }).bind("mouseleave", function () {
//        canvas.mouse.cursor("default");
//        this.shadow="0 0 0px #eee";
//        //$("#name_JJC2").css("display","none");
//    }).bind("flash",function(){
//
//        this.unbind("flash");
//        window.setTimeout(function(){
//            GD10.paused=1;
//        },100);
//
//    });
    var img22=img2.clone({
        x:1127,
        y:573
    });
    canvas.addChild(img22);
//    img22.bind("click",function(){
//        //window.location.href="JJC.jsp";
//    	if(confirm("是否将“#3机加池”设置为维修状态？")){
//            fix_jjc3();
//            document.getElementById("scheme").onclick="";
//
//            document.getElementById("export").href="download/fix-jjc3.docx";
//            window.setTimeout(function(){              
//            	decay(5,1);//GD04
//            	decay(8,1);//GD07
//            	decay(15,1);//GD12
//             },100);
//            $("div.panel").show();
//        }
//    }).bind("mouseenter", function () {
//        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//        //$("#name_JJC3").css("display","inline");
//    }).bind("mouseleave", function () {
//        canvas.mouse.cursor("default");
//        this.shadow="0 0 0px #eee";
//        //$("#name_JJC3").css("display","none");
//    }).bind("flash",function(){
//
//        this.unbind("flash");
//        window.setTimeout(function(){
//            GD12.paused=1;
//        },100);
//
//    });

    var img3=canvas.display.image({
        x:847,
        y:665,
        image:"image/main/6.png"
    });
    canvas.addChild(img3);
//    img3.bind("click",function(){
//        //window.location.href="VL.jsp";
//    	if(confirm("是否将“V型滤池设置为维修状态？”")){
//            fix_vl();
//            document.getElementById("scheme").onclick="";
//
//            document.getElementById("export").href="download/fix-vl.docx";
//            window.setTimeout(function(){
//            	decay(18,1);//GD15
//            	decay(15,1);
//            	canvas.children[38].fill=color_GD;
//            },100);
//            $("div.panel").show();
//        }
//    }).bind("mouseenter", function () {
//        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//        //$("#name_VL").css("display","inline");
//    }).bind("mouseleave", function () {
//        canvas.mouse.cursor("default");
//        this.shadow="0 0 0px #eee";
//        //$("#name_VL").css("display","none");
//
//    }).bind("flash",function(){
//
//        this.unbind("flash");
//        window.setTimeout(function(){
//            GD15.paused=1;
//            GD1501.paused=1;
//            canvas.children[19].fill="rgba(1,1,1,0)";
//        },100);
//
//    });

    
    var img4=canvas.display.image({
        x:967,
        y:352,
        image:"image/main/hhj.png"
    });
    canvas.addChild(img4);
//    img4.bind("click",function(){
//        //window.location.href="qsc.jsp";
//    	if(confirm("是否将“旧混合井”设置为维修状态？")){
//            fix_hh_right();
//            document.getElementById("nextPage").onclick=function(){
//                fix_hh_left();
//            };
//            document.getElementById("lastPage").onclick=function(){
//                fix_hh_right();
//            };
//            document.getElementById("export").href="download/fix-hh-old.doc";
//            window.setTimeout(function(){
//                decay(7,1);
//                decay(11,1);
//                decay(12,1);
//                decay(13,1);
//                decay(14,1);
//             },100);
//            $("div.panel").show();
//        }
//    }).bind("mouseenter",function(){
//        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//        //$("#name_QSC1").css("display","inline");
//    }).bind("mouseleave",function(){
//        //$("#name_QSC1").css("display","none");
//        this.shadow="0 0 0px #eee";
//        canvas.mouse.cursor("default");
//    }).bind("flash",function(){
//
//        img4.unbind("flash");
//
//        window.setTimeout(function(){GD05.paused=1;
//            GD06.paused=1;
//            GD07.paused=1;},100);
//
//
//    });
    var img41=canvas.display.image({
        x:1179,
        y:381,
        image:"image/main/hhj2.png"
    });
    canvas.addChild(img41);
//    img41.bind("click",function(){
//        //window.location.href="hhj.jsp";
//    	if(confirm("是否将“新混合井”设置为维修状态？")){
//            fix_hh_new();
//            document.getElementById("scheme").onclick="";
//
//            document.getElementById("export").href="download/fix-hh-new.docx";
//            window.setTimeout(function(){              
//            	decay(5,1);//GD04
//            	decay(8,1);//GD07
//            	decay(15,1);
//            	decay(18,1);
//             },100);
//        }
//    }).bind("mouseenter",function(){
//        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//        //$("#name_HHJ2").css("display","inline");
//    }).bind("mouseleave",function(){
//        //$("#name_HHJ2").css("display","none");
//        this.shadow="0 0 0px #eee";
//        canvas.mouse.cursor("default");
//    }).bind("flash",function(){
//
//        img41.unbind("flash");
//
//    });

    var img5=canvas.display.image({
        x:810,
        y:529,
        image:"image/main/hx.png"
    });
    canvas.addChild(img5);
    img5.bind("click",function(){
    //window.location.href="hx.jsp";  	
    //弹窗提示样式    	
    	$.messager.confirm('确认','是否将<strong>虹吸滤池</strong>设置为维修状态？', function(r){
    		if(r){
            	fix_hx_right();
    		}
    		});                     	
    }).bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 10px #eee";
        //$("#name_HX").css("display","inline");
    }).bind("mouseleave",function(){
        //$("#name_HX").css("display","none");
        this.shadow="0 0 0px #eee";
        canvas.mouse.cursor("default");
    }).bind("flash",function(){

        this.unbind("flash");
        window.setTimeout(function(){
            GD13.paused=1;
            //GD14.paused=1;
            GD141.paused=1;
            GD30.paused=1;
        },100);

    });

    var img6=canvas.display.image({
        x:284,
        y:435,
        image:"image/main/qsc1.png"
    });
    canvas.addChild(img6);
//    img6.bind("click",function(){
//        //window.location.href="qsc.jsp";
//    	if(confirm("是否将“#3清水池”设置为维修状态？")){
//            fix_qsc3();
//            document.getElementById("scheme").onclick=function(){
//            };
//            document.getElementById("export").href="download/fix-qsc3.docx";
//            window.setTimeout(function(){              
//            	decay(25,1);//GD21
//             },100);
//            $("div.panel").show();
//        }
//    }).bind("mouseenter",function(){
//        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//        //$("#name_QSC1").css("display","inline");
//    }).bind("mouseleave",function(){
//        //$("#name_QSC1").css("display","none");
//        this.shadow="0 0 0px #eee";
//        canvas.mouse.cursor("default");
//    }).bind("flash",function(){
//
//        this.unbind("flash");
//        window.setTimeout(function(){
//            GD21.paused=1;
//            GD23.paused=1;
//            GD35.paused=1;
//        },100);
//
//    });
    var img61=canvas.display.image({
        x:287,
        y:253,
        image:"image/main/qsc2.png"
    });
    canvas.addChild(img61);
//    img61.bind("click",function(){
//        //window.location.href="qsc.jsp";
//    	if(confirm("是否将“#1清水池”设置为维修状态？")){
//            fix_qsc1();
//            document.getElementById("scheme").onclick=function(){
//            };
//
//            document.getElementById("export").href="download/fix-qsc1.doc";
//            window.setTimeout(function(){              
//            	decay(25,1);//GD21
//             },100);
//            $("div.panel").show();
//
//        }
//    }).bind("mouseenter",function(){
//        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//        //$("#name_QSC2").css("display","inline");
//    }).bind("mouseleave",function(){
//        //$("#name_QSC2").css("display","none");
//        this.shadow="0 0 0px #eee";
//        canvas.mouse.cursor("default");
//    }).bind("flash",function(){
//
//        this.unbind("flash");
//    });
    var img62=canvas.display.image({
        x:462,
        y:251,
        image:"image/main/qsc2.png"
    });
    canvas.addChild(img62);
//    img62.bind("click",function(){
//        //window.location.href="qsc.jsp";
//    	if(confirm("是否将“#2清水池”设置为维修状态？")){
//            fix_qsc2();
//            document.getElementById("scheme").onclick=function(){
//            };
//
//            document.getElementById("export").href="download/fix-qsc2.doc";         
//            window.setTimeout(function(){              
//            	decay(28,1);//GD24
//             },100);
//            $("div.panel").show();
//        }
//    }).bind("mouseenter",function(){
//        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//        //$("#name_QSC3").css("display","inline");
//    }).bind("mouseleave",function(){
//        //$("#name_QSC3").css("display","none");
//        this.shadow="0 0 0px #eee";
//        canvas.mouse.cursor("default");
//    }).bind("flash",function(){
//
//        this.unbind("flash");
//    });
    var img63=canvas.display.image({
        x:432,
        y:434,
        image:"image/main/qsc3.png"
    });
    canvas.addChild(img63);
//    img63.bind("click",function(){
//        //window.location.href="qsc.jsp";
//    	if(confirm("是否将“#4清水池”设置为维修状态？")){
//            fix_qsc4();
//            document.getElementById("scheme").onclick=function(){
//            };
//            document.getElementById("export").href="download/fix-qsc4.docx";
//            window.setTimeout(function(){              
//            	decay(27,1);
//            	decay(28,1);//GD24
//            	canvas.children[39].fill=color_GD;
//             },100);
//            $("div.panel").show();
//        }
//    }).bind("mouseenter",function(){
//        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//        //$("#name_QSC4").css("display","inline");
//    }).bind("mouseleave",function(){
//        //$("#name_QSC4").css("display","none");
//        this.shadow="0 0 0px #eee";
//        canvas.mouse.cursor("default");
//    }).bind("flash",function(){
//
//        this.unbind("flash");
//        window.setTimeout(function(){
//            GD24.paused=1;
//        },100);
//
//
//    });

    var img7=canvas.display.image({
        x:870,
        y:-7,
        image:"image/main/1.png"
    });
    canvas.addChild(img7);
//    img7.bind("mouseenter",function(){
//        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//        //$("#name_YC").css("display","inline");
//    }).bind("mouseleave",function(){
//        //$("#name_YC").css("display","none");
//        this.shadow="0 0 0px #eee";
//        canvas.mouse.cursor("default");
//    });

    var img8=canvas.display.image({
        x:379,
        y:652,
        image:"image/main/tc.png"
    });
    canvas.addChild(img8);
//    img8.bind("click",function(){
//        //window.location.href="hxt.jsp";
//    	if(confirm("是否将“现有活性炭池”设置为维修状态？")){
//            fix_tc_old();
//            document.getElementById("scheme").onclick="";
//
//            document.getElementById("export").href="download/fix-tc-old.doc";
//            window.setTimeout(function(){              
//            	decay(21,1);//GD17  
//            	decay(22,1);//GD18
//             },100);
//        }
//    }).bind("mouseenter",function(){
//        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//        //$("#name_TC").css("display","inline");
//    }).bind("mouseleave",function(){
//        this.shadow="0 0 0px #eee";
//        //$("#name_TC").css("display","none");
//        canvas.mouse.cursor("default");
//    }).bind("flash",function(){
//
//        this.unbind("flash");
//        window.setTimeout(function(){
//            GD18.paused=1;
//            GD19.paused=1;
//        },100);
//
//    });
    var img81=canvas.display.image({
        x:488,
        y:652,
        image:"image/main/tc.png"
    });
    canvas.addChild(img81);
//    img81.bind("click",function(){
//        //window.location.href="hxt.jsp";
//    	if(confirm("是否将“新建活性炭池”设置为维修状态？")){
//            fix_tc_new();
//            document.getElementById("scheme").onclick="";
//
//            document.getElementById("export").href="download/fix-tc-new.doc";
//            window.setTimeout(function(){              
//            	decay(23,1);//GD19
//            	decay(20,1);//GD16
//             },100);
//        }
//    }).bind("mouseenter",function(){
//        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//        //$("#name_TC1").css("display","inline");
//    }).bind("mouseleave",function(){
//        //$("#name_TC1").css("display","none");
//        this.shadow="0 0 0px #eee";
//        canvas.mouse.cursor("default");
//    }).bind("flash",function(){
//
//        this.unbind("flash");
//
//    });
    var img9=canvas.display.image({
        x:613,
        y:645,
        image:"image/main/cy.png"
    });
    canvas.addChild(img9);
//    img9.bind("click",function(){
//        //window.location.href="cy.jsp";
//    	if(confirm("是否将“臭氧接触池”设置为维修状态？")){
//            fix_cy_right();
//            document.getElementById("nextPage").onclick=function(){
//                fix_cy_left();
//            };
//            document.getElementById("lastPage").onclick=function(){
//                fix_cy_right();
//            };
//            document.getElementById("export").href="download/fix-cy.doc";
//            window.setTimeout(function(){              
//            	decay(21,1);//GD17
//             },100);
//            $("div.panel").show();
//        }
//
//    }).bind("mouseenter",function(){
//        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//        //$("#name_CY").css("display","inline");
//    }).bind("mouseleave",function(){
//        //$("#name_CY").css("display","none");
//        this.shadow="0 0 0px #eee";
//        canvas.mouse.cursor("default");
//    }).bind("flash",function(){
//
//        this.unbind("flash");
//        window.setTimeout(function(){
//            GD16.paused=1;
//            GD17.paused=1;
//        },100);
//
//    });
    var img10=canvas.display.image({
        x:623,
        y:465,
        image:"image/main/cyc.png"
    });
    canvas.addChild(img10);
//    img10.bind("click",function(){
//        window.location.href="cy.jsp";
//    }).bind("mouseenter",function(){
//        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//        //$("#name_CYC").css("display","inline");
//    }).bind("mouseleave",function(){
//        //$("#name_CYC").css("display","none");
//        this.shadow="0 0 0px #eee";
//        canvas.mouse.cursor("default");
//    });


    GD15.bind("start",function(){
        canvas.timeline.stop();
        window.setTimeout(restart,1000);
        this.paused=1;
    });
    canvas.addChild(GD15);
    GD01.paused=1;
    GD22.paused=1;
    GD02.paused=1;
    GD25.paused=1;


    canvas.setLoop(function () {
        GD01.advance();
        GD0101.advance();
        GD25.advance();
        GD02.advance();
        GD03.advance();
        GD04.advance();
        GD05.advance();
        GD06.advance();
        GD07.advance();
        GD08.advance();
        GD09.advance();
        GD10.advance();
        GD1001.advance();
        GD1002.advance();
        GD11.advance();
        GD12.advance();
        GD13.advance();
        //GD14.advance();
        GD141.advance();
        GD15.advance();
        GD1501.advance();
        GD16.advance();
        GD17.advance();
        GD18.advance();
        GD19.advance();
        GD20.advance();
        GD21.advance();
        GD22.advance();
        GD23.advance();
        GD24.advance();
        GD26.advance();
        GD27.advance();
        GD28.advance();
        GD29.advance();
        GD30.advance();
        GD31.advance();
        GD32.advance();
        GD33.advance();
        GD34.advance();
        GD35.advance();
        GD36.advance();
        GD37.advance();

        if((GD11.state==0)&&(GD1001.state==0)){
//            console.log("GD30:");
//    		console.log(GD30.state);
    		if((GD30.state!=0)&&(GD30.state!=2)){
    		GD30.state=2;
    		setFMColorRed("FM018");
//    		console.log(document.getElementById("FM018").src=='http://localhost:8080/ZLS-ITTC/image/y2-35x37.png');

			blinTwice("#step_3");
			blinTwice("#step_3_result");
			blinTwice("#step_4");
			blinTwice("#step_4_result");
			blinTwice("#step_5");
			blinTwice("#step_5_result");
    		
    		}
    		//clearTimeout(timer);
    		
    		//console.log("GD30:");
    		//console.log(GD30.state);
    	}
        if((GD30.state!=2)&&(GD30.state!=1)&&(GD141.state==1)){
        	//console.log(GD1001.state);
        	if(GD141.state!=0){
        		GD141.state=2;
//        		document.getElementById("step_6").style.background = "rgba(194,215,245,0.5)";
//        		document.getElementById("step_6_result").style.background = "rgba(194,215,245,0.5)";
        		blinTwice("#step_6");
        		blinTwice("#step_6_result");
        		}
        	setFMColorRed("FM019");
    		//GD141.state=2;
    	}
        if((GD11.state==1)&&(GD1001.state==1)){    		
    		if(GD30.state!=1)
    		GD30.state=3;
    		//console.log("GD30:");
    		//console.log(GD30.state);
    	}
        if(GD30.state==1){    		
    		if(GD141.state!=1)
    		GD141.state=3;
    		//console.log("GD30:");
    		//console.log(GD30.state);
    	}
        
        if((GD26.state==0)&&(GD27.state==0)){
    		
    		if(GD37.state==1&&GD141.state==1){
    		GD37.state=2;
    		setFMColorRed("FM017");

//    		document.getElementById("step_3").style.background = "rgba(194,215,245,0.5)";
//    		document.getElementById("step_3_result").style.background = "rgba(194,215,245,0.5)";
//    		document.getElementById("step_4").style.background = "rgba(194,215,245,0.5)";
//    		document.getElementById("step_4_result").style.background = "rgba(194,215,245,0.5)";
//    		document.getElementById("step_5").style.background = "rgba(194,215,245,0.5)";
//    		document.getElementById("step_5_result").style.background = "rgba(194,215,245,0.5)";
    		blinTwice("#step_3");
    		blinTwice("#step_3_result");
    		blinTwice("#step_4");
    		blinTwice("#step_4_result");
    		blinTwice("#step_5");
    		blinTwice("#step_5_result");

    		}
    		
    		//console.log("GD30:");
    		//console.log(GD30.state);
    	}
        if((GD37.state==0)){//(GD13.state!=2)&&(GD13.state!=1)
        	//console.log(GD37.state);
        	if((GD141.state==1)){
        		blinTwice("#step_6");
        		blinTwice("#step_6_result");
        		setFMColorRed("FM019");
        		}
        	if(document.getElementById("FM019").src=='http://localhost:8080/ZLS-ITTC/image/y2-35x37.png'){
        		GD141.state=2;
        		}
//        	console.log("GD141:");
//    		console.log(GD141.state);

//    		document.getElementById("step_6").style.background = "rgba(194,215,245,0.5)";
//    		document.getElementById("step_6_result").style.background = "rgba(194,215,245,0.5)";
    		

    		//GD141.state=2;
    	}
//        if((GD26.state==1)&&(GD27.state==1)){    		
//    		if(GD13.state!=1)
//    		GD13.state=3;
//    		//console.log("GD30:");
//    		//console.log(GD30.state);
//    	}
//        if((GD13.state==1)&&(GD11.state==1)&&(GD30.state==1)){    		
//    		if(GD141.state!=1)
//    		GD141.state=3;
//    		//console.log("GD30:");
//    		//console.log(GD30.state);
//    	}

        canvas.redraw();
    });
    GD01.paused=1;
    GD02.paused=1;
    GD25.paused=1;
    GD22.paused=1;
    canvas.timeline.start();


    function restart(){
        canvas.timeline.start();
    }

    function init(){
        GD01.init();
        GD02.init();
        Gd25.init();
        GD03.init();
        GD04.init();
        GD05.init();
        GD06.init();
        GD07.init();
        GD08.init();
        GD09.init();
        GD10.init();
        GD11.init();
        GD12.init();
        GD13.init();
        //GD14.init();
        GD15.init();
        GD16.init();
        GD17.init();
        GD18.init();
        GD19.init();
        GD20.init();
        GD21.init();
        GD22.init();
        GD23.init();
        GD24.init();
        GD26.init();
        GD27.init();
        GD29.init();
        GD32.init();
        GD33.init();
        GD34.init();
        GD35.init();
        GD36.init();
        GD37.init();
/*        img1.bind("flash",function(){
            $("#name_QS").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_QS").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_QS").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_QS").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_QS").animate({
                height:'200px',opacity:'1'},'fast');
            this.unbind("flash");
        });

        img2.bind("flash",function(){
            $("#name_JJC1").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_JJC1").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_JJC1").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_JJC1").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_JJC1").animate({
                height:'200px',opacity:'1'},'fast');
            this.unbind("flash");
            GD08.paused=1;
            GD09.paused=1;
            GD26.paused=1;
            GD27.paused=1;
            GD29.paused=1;
        });


        img21.bind("flash",function(){
            $("#name_JJC2").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_JJC2").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_JJC2").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_JJC2").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_JJC2").animate({
                height:'200px',opacity:'1'},'fast');
            this.unbind("flash");

            GD10.paused=1;
            GD11.paused=1;
        });

        img22.bind("flash",function(){
            $("#name_JJC3").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_JJC3").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_JJC3").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_JJC3").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_JJC3").animate({
                height:'200px',opacity:'1'},'fast');
            this.unbind("flash");

            GD12.paused=1;
        });

        img3.bind("flash",function(){
            $("#name_VL").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_VL").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_VL").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_Vl").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_Vl").animate({
                height:'200px',opacity:'1'},'fast');
            this.unbind("flash");

            GD15.paused=1;
        });

        img4.bind("flash",function(){
            $("#name_HHJ").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_HHJ").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_HHJ").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_HHJ").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_HHJ").animate({
                height:'200px',opacity:'1'},'fast');
            img4.unbind("flash");

            GD05.paused=1;
            GD06.paused=1;
            GD07.paused=1;
        });

        img5.bind("flash",function(){
            $("#name_HX").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_HX").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_HX").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_HX").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_HX").animate({
                height:'200px',opacity:'1'},'fast');
            this.unbind("flash");

            GD13.paused=1;
            GD14.paused=1;
        });

        img6.bind("flash",function(){
            $("#name_QSC1").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_QSC1").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_QSC1").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_QSC1").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_QSC1").animate({
                height:'200px',opacity:'1'},'fast');
            this.unbind("flash");
        });

        img61.bind("flash",function(){
            $("#name_QSC2").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_QSC2").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_QSC2").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_QSC2").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_QSC2").animate({
                height:'200px',opacity:'1'},'fast');
            this.unbind("flash");
        });

        img62.bind("flash",function(){
            $("#name_QSC3").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_QSC3").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_QSC3").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_QSC3").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_QSC3").animate({
                height:'200px',opacity:'1'},'fast');
            this.unbind("flash");
        });

        img63.bind("flash",function(){
            $("#name_QSC4").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_QSC4").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_QSC4").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_QSC4").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_QSC4").animate({
                height:'200px',opacity:'1'},'fast');
            this.unbind("flash");
        });

        img8.bind("flash",function(){
            $("#name_TC").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_TC").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_TC").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_TC").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_TC").animate({
                height:'200px',opacity:'1'},'fast');
            this.unbind("flash");

            GD18.paused=1;
            GD19.paused=1;
        });

        img9.bind("flash",function(){
            $("#name_CY").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_CY").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_CY").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_CY").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_CY").animate({
                height:'200px',opacity:'1'},'fast');
            this.unbind("flash");

            GD16.paused=1;
            GD17.paused=1;
        });*/
        canvas.settings.fps=40;
        GD01.paused=1;
        
    }
    
    $("#panel_heading").click(function(){$("div.panel").toggle();}); 
    
    function fix_qs_right(){
        clearAll();
        hideAllFM();
        document.getElementById("fix_head").innerHTML="取水泵房东侧配合方案";
        document.getElementById("name_QS").style.color="#8dd9ff";
        document.getElementById("name_QS").style.background="rgba(255,0,0,0.7)";
        document.getElementById("scheme").style.display="block";

        setFMColorRed("FM07");
        setFMColorRed("FM010");
        
        document.getElementById("step_1").innerHTML="打开阀门64#";
        document.getElementById("step_1_result").innerHTML="关闭阀门04#";
        document.getElementById("step_2").innerHTML="关闭阀门07#";
        document.getElementById("step_2_result").innerHTML="关闭阀门10#";
        document.getElementById("step_3").innerHTML="关闭阀门08#";
        document.getElementById("step_3_result").innerHTML="打开东侧池排空泵#";
//        document.getElementById("step_3_result").innerHTML="关闭阀门68#";
//            document.getElementById("step_4").innerHTML="打开阀门45#";

        $("div.panel").show();
    }

    function fix_qs_left(){
        clearAll();
        hideAllFM();
        document.getElementById("fix_head").innerHTML="取水泵房西侧配合方案";
        document.getElementById("name_QS").style.color="#8dd9ff";
        document.getElementById("name_QS").style.background="rgba(255,0,0,0.7)";
        document.getElementById("scheme").style.display="block";

        setFMColorRed("FM07");
        setFMColorRed("FM09");
        
        document.getElementById("step_1").innerHTML="关闭阀门03#";
        document.getElementById("step_1_result").innerHTML="关闭阀门07#";
        document.getElementById("step_2").innerHTML="关闭阀门09#";
        document.getElementById("step_2_result").innerHTML="打开西侧池排空泵#";

        $("div.panel").show();
    }

    function  fix_hh_right(){
        clearAll();
        hideAllFM();
        document.getElementById("fix_head").innerHTML="现有混合井东侧配合方案";
        document.getElementById("name_HHJ1").style.color="#8dd9ff";
        document.getElementById("name_HHJ1").style.background="rgba(255,0,0,0.7)";
        document.getElementById("scheme").style.display="block";

        setFMColorRed("FM015");
        setFMColorRed("FM063");
        setFMColorRed("FM069");
        

        document.getElementById("step_1").innerHTML="打开阀门62#";
        document.getElementById("step_1_result").innerHTML="打开阀门65#";
        document.getElementById("step_2").innerHTML="关闭阀门63#";
        document.getElementById("step_2_result").innerHTML="关闭阀门15#";
        document.getElementById("step_3").innerHTML="关闭阀门69#";
        document.getElementById("step_3_result").innerHTML="打开东侧池排水泵";

        $("div.panel").show();

    }

    function  fix_hh_left(){
        clearAll();
        hideAllFM();
        document.getElementById("fix_head").innerHTML="现有混合井西侧配合方案";
        document.getElementById("name_HHJ1").style.color="#8dd9ff";
        document.getElementById("name_HHJ1").style.background="rgba(255,0,0,0.7)";
        document.getElementById("scheme").style.display="block";


        setFMColorRed("FM062");
        setFMColorRed("FM045");

        document.getElementById("step_1").innerHTML="关闭阀门62#";
        document.getElementById("step_1_result").innerHTML="打开阀门63#";
        document.getElementById("step_2").innerHTML="打开阀门15#";
        document.getElementById("step_2_result").innerHTML="打开阀门69#";
        document.getElementById("step_3").innerHTML="关闭阀门45#";
        document.getElementById("step_3_result").innerHTML="打开西侧池排水泵";

        $("div.panel").show();

    }

    function fix_hh_new(){
        clearAll();
        hideAllFM();
        document.getElementById("fix_head").innerHTML="#新建混合井维修配合方案";
        document.getElementById("name_HHJ2").style.color="#8dd9ff";
        document.getElementById("name_HHJ2").style.background="rgba(255,0,0,0.7)";
        setFMColorRed("FM065");
        setFMColorRed("FM066");

        document.getElementById("step_1").innerHTML="打开阀门62#";
        document.getElementById("step_1_result").innerHTML="打开阀门63#";
        document.getElementById("step_2").innerHTML="关闭阀门65#";
        document.getElementById("step_2_result").innerHTML="关闭阀门66#";
        document.getElementById("step_3").innerHTML="打开新建混合井排水泵";
        $("div.panel").show();
    }

    function fix_jjc1(){
        clearAll();
        hideAllFM();
        document.getElementById("fix_head").innerHTML = "1#机加池停池检修<br>方案";
        document.getElementById("name_JJC1").style.color="#8dd9ff";
        document.getElementById("name_JJC1").style.background="rgba(255,0,0,0.7)";

        setFMColorRed("FM062");
        setFMColorRed("FM045");
        setFMColorRed("FM014");

        document.getElementById("step_1").innerHTML="缓慢关闭阀门62#";
        document.getElementById("step_1_result").innerHTML="适量调整阀门65#";
        document.getElementById("step_2").innerHTML="适量调整阀门63#";
        document.getElementById("step_2_result").innerHTML="关闭阀门45#";
        document.getElementById("step_3").innerHTML="关闭阀门14#";
        document.getElementById("step_3_result").innerHTML="打开1#机加池排水泵";

        $("div.panel").show();
    }

    function fix_jjc2(){
        clearAll();
        hideAllFM();
        document.getElementById("fix_head").innerHTML="2#机加池停池检修<br>方案";
        document.getElementById("name_JJC2").style.color="#8dd9ff";
        document.getElementById("name_JJC2").style.background="rgba(255,0,0,0.7)";

        setFMColorRed("FM015");
        setFMColorRed("FM069");
        setFMColorRed("FM063");

        document.getElementById("step_1").innerHTML="关闭阀门63#";
        document.getElementById("step_1_result").innerHTML="关闭阀门69#";
        document.getElementById("step_2").innerHTML="关闭阀门15#";
        document.getElementById("step_2_result").innerHTML="打开2#机加池排水泵";

        $("div.panel").show();
    }

    function fix_jjc3(){
        clearAll();
        hideAllFM();
        document.getElementById("fix_head").innerHTML="3#机加池停池检修<br>方案";
        document.getElementById("name_JJC3").style.color="#8dd9ff";
        document.getElementById("name_JJC3").style.background="rgba(255,0,0,0.7)";
        
        setFMColorRed("FM065");
        setFMColorRed("FM066");
        setFMColorRed("FM067");

        document.getElementById("step_1").innerHTML="关闭阀门65#";
        document.getElementById("step_1_result").innerHTML="关闭阀门66#";
        document.getElementById("step_2").innerHTML="关闭阀门67#";
        document.getElementById("step_2_result").innerHTML="打开3#机加池排水泵";

        $("div.panel").show();
    }
    function fix_hx_right(){
    	//初始化
        clearAll();
		hideAllFM();
		setDefaultFMColor();
		
		setFMColorGreen("FM016");
        setFMColorGreen("FM018");
        setFMColorGreen("FM019");
        document.getElementById("fix_head").innerHTML="东侧虹吸滤池闸门改造配合<br>方案";
        document.getElementById("name_HX").style.color="#8dd9ff";
        document.getElementById("name_HX").style.background="rgba(255,0,0,0.7)";
        document.getElementById("scheme").style.display="block";
        
/*      setFMColorRed("FM016");
        setFMColorRed("FM018");
        setFMColorRed("FM019");*/

        var todolist = [
			{ "content":"1&nbsp;&nbsp;关闭阀门16#", 		"result":"&nbsp;&nbsp;&nbsp;&nbsp;停止东侧虹吸进水" },
			{ "content":"2&nbsp;&nbsp;关闭阀门9#~14#小虹吸", "result":"&nbsp;&nbsp;&nbsp;&nbsp;停止东侧进水" },
			{ "content":"3&nbsp;&nbsp;关闭阀门18#", 		"result":"&nbsp;&nbsp;&nbsp;&nbsp;防止西侧反水" },
			{ "content":"4&nbsp;&nbsp;打开9#~14#滤池排空闸", "result":"&nbsp;&nbsp;&nbsp;&nbsp;9#~14#滤格排空" },
			{ "content":"5&nbsp;&nbsp;断开东西滤池清水联通闸",  "result":"&nbsp;&nbsp;&nbsp;&nbsp;断开联通" },
			{ "content":"6&nbsp;&nbsp;关闭阀门19#", 		"result":"&nbsp;&nbsp;&nbsp;&nbsp;保持滤池出水进东侧臭氧接触池" }
		];

		for (i=0;i<todolist.length;i++){
			var offset = i+1;
	        document.getElementById("step_" + offset).innerHTML=todolist[i].content;
	        document.getElementById("step_" + offset + "_result").innerHTML=todolist[i].result;
		}
		
		$("#scheme_extra").text("西侧维修");
		document.getElementById("scheme_extra").onclick=function(){
//			fix_hx_left();
			//提示：请先完成东侧恢复
			$.messager.alert('错误',  '<strong>请先完成东侧恢复</strong>', 'info');
		}
		$("#scheme").text("东侧恢复");
		document.getElementById("scheme").onclick=function(){
			restore_hx_right();
		}
		document.getElementById("export").href="download/EAST_HX_FIX.doc";
		$("#export").text("生成方案");
		$("#reset").text("重置");

		//动态效果
        setFMColorRed("FM016");  
		/*document.getElementById("step_1").style.background = "rgba(194,215,245,0.5)";
		document.getElementById("step_1_result").style.background = "rgba(194,215,245,0.5)";
		document.getElementById("step_2").style.background = "rgba(194,215,245,0.5)";
		document.getElementById("step_2_result").style.background = "rgba(194,215,245,0.5)";*/
		/* js版blinblin
		 * var demo = document.getElementById("step_1");
		   blinTwice(demo);
		 */
        $("#init_state").text("状态");
        $("#init_statement").text("东侧阀门维修中");
        
		blinTwice("#step_1");
		blinTwice("#step_1_result");
		blinTwice("#step_2");
		blinTwice("#step_2_result");
		
    	//管道退水
		GD11.state=2;
    	GD1001.state=2;
    	
    	//显示面板
        $("div.panel").show();
        
    }
    
    function restore_hx_right(){
    	
    	document.getElementById("name_HX").style.color="#283a45";
    	document.getElementById("name_HX").style.background="rgba(255,255,255,0.5)";
    	//静态部分
    	$("#init_state").text("状态");
    	$("#init_statement").text("东侧阀门恢复中");
        /*$(".table_line").attr("style","text-align:left");*/
        document.getElementById("fix_head").innerHTML="东侧虹吸滤池闸门改造配合<br>方案";
        
/*      setFMColorGreen("FM016");
        setFMColorGreen("FM018");
        setFMColorGreen("FM019");*/
        
        var todolist = [
			{"content":"1&nbsp;&nbsp;打开阀门16#", "result":"&nbsp;&nbsp;&nbsp;&nbsp;恢复东侧虹吸进水" },
			{"content":"2&nbsp;&nbsp;打开阀门9#~14#小虹吸", "result":"&nbsp;&nbsp;&nbsp;&nbsp;逐格滤料冲洗合格后可以恢复" },
			{"content":"3&nbsp;&nbsp;打开阀门18#", "result":"&nbsp;&nbsp;&nbsp;&nbsp;恢复正常出水" },
			{"content":"4&nbsp;&nbsp;关闭9#~14#滤池排空闸", "result":"&nbsp;&nbsp;&nbsp;&nbsp;恢复正常出水" },
			{"content":"5&nbsp;&nbsp;开启东西滤池清水联通闸", "result":"&nbsp;&nbsp;&nbsp;&nbsp;平衡东西两侧水量" },
			{"content":"6&nbsp;&nbsp;打开阀门19#", "result":"&nbsp;&nbsp;&nbsp;&nbsp;保持滤池出水进东侧臭氧接触池" }
		];
        
		for (i=0;i<todolist.length;i++){
			var offset = i+1;
	        document.getElementById("step_" + offset).innerHTML=todolist[i].content;
	        document.getElementById("step_" + offset + "_result").innerHTML=todolist[i].result;
		}
        
    	$("#scheme_extra").text("西侧维修");
    	document.getElementById("scheme_extra").onclick=function(){
    		fix_hx_left();
    	}
    	$("#scheme").text("东侧维修");
    	document.getElementById("scheme").onclick=function(){
    		fix_hx_right();
    	}
    	document.getElementById("export").href="download/EAST_HX_RECOVER.doc";
    	$("#export").text("生成方案");
    	$("#reset").text("重置");
		
		//动态部分
    	//计时器控制阀门颜色和对应维修步骤变化情况
    	window.setTimeout(function(){              
    		setFMColorGreen("FM019");
//    		document.getElementById("step_6").style.background = "rgba(194,215,245,0.5)";
//    		document.getElementById("step_6_result").style.background = "rgba(194,215,245,0.5)";
//    		document.getElementById("step_5").style.background = "rgba(194,215,245,0.5)";
//    		document.getElementById("step_5_result").style.background = "rgba(194,215,245,0.5)";
    		blinTwice("#step_6");
    		blinTwice("#step_6_result");
    		blinTwice("#step_5");
    		blinTwice("#step_5_result");
         },300);
        window.setTimeout(function(){              
        	setFMColorGreen("FM018");
//    		document.getElementById("step_3").style.background = "rgba(194,215,245,0.5)";
//    		document.getElementById("step_3_result").style.background = "rgba(194,215,245,0.5)";
//    		document.getElementById("step_4").style.background = "rgba(194,215,245,0.5)";
//    		document.getElementById("step_4_result").style.background = "rgba(194,215,245,0.5)";
    		blinTwice("#step_3");
    		blinTwice("#step_3_result");
    		blinTwice("#step_4");
    		blinTwice("#step_4_result");
         },1000);
        window.setTimeout(function(){              
        	setFMColorGreen("FM016");
//        	document.getElementById("step_1").style.background = "rgba(194,215,245,0.5)";
//    		document.getElementById("step_1_result").style.background = "rgba(194,215,245,0.5)";
//    		document.getElementById("step_2").style.background = "rgba(194,215,245,0.5)";
//    		document.getElementById("step_2_result").style.background = "rgba(194,215,245,0.5)";
    		blinTwice("#step_1");
    		blinTwice("#step_1_result");
    		blinTwice("#step_2");
    		blinTwice("#step_2_result");
        	GD1001.state=3;
        	GD11.state=3;
         },1700);
        
    }
    
    function restore_hx_left(){
    	document.getElementById("name_HX").style.color="#283a45";
    	document.getElementById("name_HX").style.background="rgba(255,255,255,0.5)";
    	//静态部分
    	$("#init_state").text("状态");
    	$("#init_statement").text("西侧阀门恢复中");
        /*$(".table_line").attr("style","text-align:left");*/
        document.getElementById("fix_head").innerHTML="西侧虹吸滤池闸门改造配合<br>方案";
        
/*      setFMColorGreen("FM014");
        setFMColorGreen("FM017");
        setFMColorGreen("FM019");*/
        
        var todolist = [
			{ "content":"1&nbsp;&nbsp;打开阀门14#", "result":"&nbsp;&nbsp;&nbsp;&nbsp;恢复西侧虹吸进水" },
			{ "content":"2&nbsp;&nbsp;打开阀门1#~8#小虹吸", "result":"&nbsp;&nbsp;&nbsp;&nbsp;逐格滤料冲洗合格后可以恢复" },
			{ "content":"3&nbsp;&nbsp;打开阀门17#", "result":"&nbsp;&nbsp;&nbsp;&nbsp;恢复正常出水" },
			{ "content":"4&nbsp;&nbsp;关闭1#~8#滤池排空闸", "result":"&nbsp;&nbsp;&nbsp;&nbsp;恢复正常出水" },
			{ "content":"5&nbsp;&nbsp;开启东西滤池清水联通闸", "result":"&nbsp;&nbsp;&nbsp;&nbsp;平衡东西两侧水量" },
			{ "content":"6&nbsp;&nbsp;打开阀门19#", "result":"&nbsp;&nbsp;&nbsp;&nbsp;保持滤池出水进东侧臭氧接触池" }
		];

		for (i=0;i<todolist.length;i++){
			var offset = i+1;
	  
	        document.getElementById("step_" + offset).innerHTML=todolist[i].content;
	        document.getElementById("step_" + offset + "_result").innerHTML=todolist[i].result;
		}
		
		//执行完恢复运行后解除恢复运行绑定的函数
		$("#scheme").text("东侧维修");
        document.getElementById("scheme").onclick=function(){
        	fix_hx_right();
        };
        $("#scheme_extra").text("西侧维修");
        document.getElementById("scheme_extra").onclick=function(){
        	fix_hx_left();
        };
    	document.getElementById("export").href="download/WEST_HX_RECOVER.docx";
    	$("#export").text("生成方案");
    	$("#reset").text("重置");
		
		//动态部分
    	//计时器控制阀门颜色和对应维修步骤变化情况
    	window.setTimeout(function(){              
    		setFMColorGreen("FM019");
    		//GD37.state=3;
    		GD141.state=3;
//    		console.log("GD141:");
//    		console.log(GD141.state);
//    		document.getElementById("step_6").style.background = "rgba(194,215,245,0.5)";
//    		document.getElementById("step_6_result").style.background = "rgba(194,215,245,0.5)";
//    		document.getElementById("step_5").style.background = "rgba(194,215,245,0.5)";
//    		document.getElementById("step_5_result").style.background = "rgba(194,215,245,0.5)";
    		blinTwice("#step_6");
    		blinTwice("#step_6_result");
    		blinTwice("#step_5");
    		blinTwice("#step_5_result");
         },300);
        window.setTimeout(function(){              
        	setFMColorGreen("FM017");
        	GD37.state=3;
//    		document.getElementById("step_3").style.background = "rgba(194,215,245,0.5)";
//    		document.getElementById("step_3_result").style.background = "rgba(194,215,245,0.5)";
//    		document.getElementById("step_4").style.background = "rgba(194,215,245,0.5)";
//    		document.getElementById("step_4_result").style.background = "rgba(194,215,245,0.5)";
    		blinTwice("#step_3");
    		blinTwice("#step_3_result");
    		blinTwice("#step_4");
    		blinTwice("#step_4_result");
         },1500);
        window.setTimeout(function(){              
        	setFMColorGreen("FM014");
        	GD26.state=3;
        	GD27.state=3;
//        	document.getElementById("step_1").style.background = "rgba(194,215,245,0.5)";
//    		document.getElementById("step_1_result").style.background = "rgba(194,215,245,0.5)";
//    		document.getElementById("step_2").style.background = "rgba(194,215,245,0.5)";
//    		document.getElementById("step_2_result").style.background = "rgba(194,215,245,0.5)";
    		blinTwice("#step_1");
    		blinTwice("#step_1_result");
    		blinTwice("#step_2");
    		blinTwice("#step_2_result");
    		
//        	GD1001.state=3;
//        	GD11.state=3;
         },2500);
    }
    
    function  fix_hx_left(){
    	//初始化
        clearAll();
		hideAllFM();
		setDefaultFMColor();
		
		setFMColorGreen("FM014");
        setFMColorGreen("FM017");
        setFMColorGreen("FM018");
        setFMColorGreen("FM019");
        
        document.getElementById("fix_head").innerHTML="西侧虹吸滤池闸门改造配合<br>方案";
        document.getElementById("name_HX").style.color="#8dd9ff";
        document.getElementById("name_HX").style.background="rgba(255,0,0,0.7)";
        
        var todolist = [
		{ "content":"1&nbsp;&nbsp;关闭阀门14#", "result":"&nbsp;&nbsp;&nbsp;&nbsp;停止西侧虹吸进水" },
		{ "content":"2&nbsp;&nbsp;关闭阀门1#~8#小虹吸", "result":"&nbsp;&nbsp;&nbsp;&nbsp;停止西侧进水" },
		{ "content":"3&nbsp;&nbsp;关闭阀门17#", "result":"&nbsp;&nbsp;&nbsp;&nbsp;防止东侧反水" },
		{ "content":"4&nbsp;&nbsp;打开1#~8#滤池排空闸", "result":"&nbsp;&nbsp;&nbsp;&nbsp;1#~8#滤格排空" },
		{ "content":"5&nbsp;&nbsp;断开东西滤池清水联通闸", "result":"&nbsp;&nbsp;&nbsp;&nbsp;断开联通" },
		{ "content":"6&nbsp;&nbsp;关闭阀门19#", "result":"&nbsp;&nbsp;&nbsp;&nbsp;保持滤池出水进东侧臭氧接触池" }
		];

		for (i=0;i<todolist.length;i++){
			var offset = i+1;
	        document.getElementById("step_" + offset).innerHTML=todolist[i].content;
	        document.getElementById("step_" + offset + "_result").innerHTML=todolist[i].result;
		}
		
		document.getElementById("scheme").style.display="block";
    	$("#scheme").text("东侧维修");
    	document.getElementById("scheme").onclick=function(){
//    		fix_hx_right();
    		//提示：请先完成西侧恢复
    		$.messager.alert('提示', '<strong>请先完成西侧恢复</strong>', 'info');
    	}
    	$("#scheme_extra").text("西侧恢复");
    	document.getElementById("scheme_extra").onclick=function(){
    		restore_hx_left();
    	}
    	document.getElementById("export").href="download/WEST_HX_FIX.docx";
    	$("#export").text("生成方案");
    	$("#reset").text("重置");
    	
    	//动态效果
        setFMColorRed("FM014");  
//		document.getElementById("step_1").style.background = "rgba(194,215,245,0.5)";
//		document.getElementById("step_1_result").style.background = "rgba(194,215,245,0.5)";
//		document.getElementById("step_2").style.background = "rgba(194,215,245,0.5)";
//		document.getElementById("step_2_result").style.background = "rgba(194,215,245,0.5)";
        $("#init_state").text("状态");
        $("#init_statement").text("西侧阀门维修中");
        blinTwice("#step_1");
		blinTwice("#step_1_result");
		blinTwice("#step_2");
		blinTwice("#step_2_result");
    	GD26.state=2;
    	GD27.state=2;

        $("div.panel").show();
    }

    function fix_vl(){
        clearAll();
        hideAllFM();
        document.getElementById("fix_head").innerHTML="V型滤池维修闸门配合方案";
        document.getElementById("name_VL").style.color="#8dd9ff";
        document.getElementById("name_VL").style.background="rgba(255,0,0,0.7)";

        setFMColorRed("FM052");
        setFMColorRed("FM020");
         
//        setFMColorRed("FM014");

        document.getElementById("step_1").innerHTML="打开阀门68#";
        document.getElementById("step_1_result").innerHTML="关闭1#~5#滤格控制阀";
        document.getElementById("step_2").innerHTML="关闭阀门52#";
        document.getElementById("step_2_result").innerHTML="关闭阀门20#";
        document.getElementById("step_3").innerHTML="关闭阀门56#";

        $("div.panel").show();
    }
    
    function fix_cy_right(){
        clearAll();
        hideAllFM();
        document.getElementById("fix_head").innerHTML="东侧臭氧池闸门配合方案";
        document.getElementById("name_CY").style.color="#8dd9ff";
        document.getElementById("name_CY").style.background="rgba(255,0,0,0.7)";
        document.getElementById("nextPage").style.display="block";
        document.getElementById("lastPage").style.display="block";
        setFMColorRed("FM053");
        setFMColorRed("FM058");
        
        setFMColorRed("FM057");
//        setFMColorRed("FM023");
        setFMColorRed("FM021");

        document.getElementById("step_1").innerHTML="打开阀门22#";
        document.getElementById("step_1_result").innerHTML="打开阀门24#";
        document.getElementById("step_2").innerHTML="关闭阀门53#";
        document.getElementById("step_2_result").innerHTML="关闭阀门58#";
        document.getElementById("step_3").innerHTML="关闭阀门57#";
        document.getElementById("step_3_result").innerHTML="关闭阀门56#";
//            document.getElementById("step_4").innerHTML="打开阀门45#";

        $("div.panel").show();
    }
    
    function  fix_cy_left(){
        clearAll();
        hideAllFM();
        document.getElementById("fix_head").innerHTML="西侧臭氧池闸门配合方案";
        document.getElementById("name_CY").style.color="#8dd9ff";
        document.getElementById("name_CY").style.background="rgba(255,0,0,0.7)";
        document.getElementById("nextPage").style.display="block";
        document.getElementById("lastPage").style.display="block";
        
        setFMColorRed("FM054");
        setFMColorRed("FM058");
        setFMColorRed("FM059");
        

        document.getElementById("step_1").innerHTML="打开阀门21#";
        document.getElementById("step_1_result").innerHTML="打开阀门23#";
        document.getElementById("step_2").innerHTML="关闭阀门54#";
        document.getElementById("step_2_result").innerHTML="关闭阀门58#";
        document.getElementById("step_3").innerHTML="关闭阀门59#";
        document.getElementById("step_3_result").innerHTML="关闭阀门56#";

        $("div.panel").show();

    }
    
    function fix_tc_old(){
        clearAll();
        hideAllFM();
        document.getElementById("fix_head").innerHTML="现有碳池闸门配合方案";
        document.getElementById("name_TC").style.color="#8dd9ff";
        document.getElementById("name_TC").style.background="rgba(255,0,0,0.7)";
        
        setFMColorRed("FM057");
        setFMColorRed("FM044");
        setFMColorRed("FM024");
        setFMColorRed("FM021");

/*        var todolist = [
			{ "index":"1" , "content":"关闭阀门19#", "result":"防止20#不严" },
			{ "index":"2" , "content":"关闭阀门20#", "result":"必须关闭" },
			{ "index":"3" , "content":"关闭阀门21#", "result":"为防止20#不严" },
			{ "index":"4" , "content":"关闭阀门25#", "result":"必须关闭" },
			{ "index":"5" , "content":"关闭阀门44#", "result":"必须关闭" },
			{ "index":"6" , "content":"关闭炭池6个进水阀", "result":"防止炭池反水" },
			{ "index":"7" , "content":"打开阀门22#", "result":"为跨越炭池" },
			{ "index":"8" , "content":"打开阀门23#", "result":"为跨越炭池" }
		];

		for (i=0;i<todolist.length;i++){
			var offset = i+1
	        document.getElementById("index_"+ offset).innerHTML=todolist[i].index;
	        document.getElementById("step_" + offset).innerHTML=todolist[i].content;
	        document.getElementById("step_" + offset + "_result").innerHTML=todolist[i].result;
		}*/

        document.getElementById("step_1").innerHTML="打开阀门20#";
        document.getElementById("step_1_result").innerHTML="打开阀门52#";
        document.getElementById("step_2").innerHTML="关闭阀门56#";
        document.getElementById("step_2_result").innerHTML="关闭阀门57#";
        document.getElementById("step_3").innerHTML="打开阀门58#";
        document.getElementById("step_3_result").innerHTML="打开阀门59#";
        document.getElementById("step_4").innerHTML="打开阀门55#";
        document.getElementById("step_4_result").innerHTML="关闭阀门44#";
//      document.getElementById("step_4").innerHTML="打开阀门45#";
        $("div.panel").show();
    }
    
    function fix_tc_new(){
        clearAll();
        hideAllFM();
        document.getElementById("fix_head").innerHTML="新建碳池闸门配合方案";
        document.getElementById("name_TC1").style.color="#8dd9ff";
        document.getElementById("name_TC1").style.background="rgba(255,0,0,0.7)";
        
        setFMColorRed("FM059");
        setFMColorRed("FM055");
        
        setFMColorRed("FM024");
        setFMColorRed("FM021");


        document.getElementById("step_1").innerHTML="打开阀门20#";
        document.getElementById("step_1_result").innerHTML="打开阀门52#";
        document.getElementById("step_2").innerHTML="关闭阀门56#";
        document.getElementById("step_2_result").innerHTML="打开阀门57#";
        document.getElementById("step_3").innerHTML="打开阀门58#";
        document.getElementById("step_3_result").innerHTML="关闭阀门59#";
        document.getElementById("step_4").innerHTML="关闭阀门55#";
        document.getElementById("step_4_result").innerHTML="打开阀门44#";

        $("div.panel").show();

//            document.getElementById("step_4").innerHTML="打开阀门45#";
    }

    function fix_qsc1(){
        clearAll();
        hideAllFM();
        document.getElementById("fix_head").innerHTML="1#清水池施工空池倒泵方案";
        document.getElementById("name_QSC2").style.color="#8dd9ff";
        document.getElementById("name_QSC2").style.background="rgba(255,0,0,0.7)";
        setFMColorRed("FM047");
        setFMColorRed("FM048");
        
        document.getElementById("step_1").innerHTML="关闭东、西池间连通闸27#";
        document.getElementById("step_1_result").innerHTML="关闭清水池出水闸29#";
        document.getElementById("step_2").innerHTML="5#配水泵倒成4#";
        document.getElementById("step_2_result").innerHTML="7#配水泵倒成2#";
        document.getElementById("step_3").innerHTML="断管施工";
        document.getElementById("step_3_result").innerHTML="开启1/连通闸27#";
        document.getElementById("step_4").innerHTML="来水降至1800m3/h";
        document.getElementById("step_4_result").innerHTML="开启连通闸27#";
        document.getElementById("step_5").innerHTML="开启清水池出水闸29#";
        document.getElementById("step_5_result").innerHTML="来水涨至1950m3/h";

        $("div.panel").show();

//            document.getElementById("step_4").innerHTML="打开阀门45#";
    }

    function fix_qsc2(){
        clearAll();
        hideAllFM();
        document.getElementById("fix_head").innerHTML="2#清水池施工空池倒泵方案";
        document.getElementById("name_QSC3").style.color="#8dd9ff";
        document.getElementById("name_QSC3").style.background="rgba(255,0,0,0.7)";
        setFMColorRed("FM051");
        
        document.getElementById("step_1").innerHTML="关闭东、西池间连通闸27#";
        document.getElementById("step_1_result").innerHTML="关闭清水池出水闸30#";
        document.getElementById("step_2").innerHTML="__#配水泵倒成__#";
        document.getElementById("step_2_result").innerHTML="断管施工";
        document.getElementById("step_3").innerHTML="开启1/连通闸27#";
        document.getElementById("step_3_result").innerHTML="来水降至__m3/h";
        document.getElementById("step_4").innerHTML="开启连通闸27";
        document.getElementById("step_4_result").innerHTML="开启清水池出水闸30#";
        document.getElementById("step_5").innerHTML="来水涨至__m3/h";
//      document.getElementById("step_4").innerHTML="打开阀门45#";

        $("div.panel").show();

    }

    function  fix_qsc3(){
        clearAll();
        hideAllFM();
        document.getElementById("fix_head").innerHTML="#3清水池维修闸门配合方案";
        document.getElementById("name_QSC1").style.color="#8dd9ff";
        document.getElementById("name_QSC1").style.background="rgba(255,0,0,0.7)";
        setFMColorRed("FM046");
        setFMColorRed("FM047");
        setFMColorRed("FM048");

        document.getElementById("step_1").innerHTML="关闭阀门46#";
        document.getElementById("step_1_result").innerHTML="关闭阀门47#";
        document.getElementById("step_2").innerHTML="关闭阀门48#";
        document.getElementById("step_2_result").innerHTML="打开3#清水池抽水泵";

        $("div.panel").show();

    }

    function  fix_qsc4(){
        clearAll();
        hideAllFM();
        document.getElementById("fix_head").innerHTML="#4清水池维修闸门配合方案";
        document.getElementById("name_QSC4").style.color="#8dd9ff";
        document.getElementById("name_QSC4").style.background="rgba(255,0,0,0.7)";
        setFMColorRed("FM049");
        setFMColorRed("FM051");

        document.getElementById("step_1").innerHTML="关闭阀门49#";
        document.getElementById("step_1_result").innerHTML="关闭阀门51#";
        document.getElementById("step_2").innerHTML="打开4#清水池抽水泵";

        $("div.panel").show();

    }

/*    $("#name_QS").click(function(){
        if(confirm("是否将“取水泵房”设置为维修状态？")){
            fix_qs_right();
            document.getElementById("nextPage").onclick=function(){
                fix_qs_left();                
                window.setTimeout(function(){              
                	decay(2,1);//GD0101
                	//decay(6,1);//GD05
                	//decay(9,1);
                	decay(10,1);
                	//decay(33,1);
                	decay(35,1);
                	canvas.children[37].fill=color_GD;
                 },100);
            };
            document.getElementById("lastPage").onclick=function(){
                fix_qs_right();
                window.setTimeout(function(){  
                	//GD32.paused=1;
                	canvas.children[36].fill=color_GD;
                	decay(3,1);//GD02
                	decay(4,1);//GD03
                	//decay(5,1);//GD04
                	//decay(7,1);
                	//decay(8,1);//GD07
                	//decay(11,1);
                	//decay(12,1);
                	//decay(13,1);
                	//decay(14,1);
                	//decay(15,1);//GD12
                	//decay(18,1);
                 },100);
            };
            document.getElementById("export").href="download/fix-qs.doc";
            window.setTimeout(function(){              
            	//GD32.paused=1;
            	decay(3,1);//GD02
            	decay(4,1);//GD03
            	canvas.children[36].fill=color_GD;
            	//decay(5,1);//GD04
            	//decay(7,1);
            	//decay(8,1);//GD07
            	//decay(11,1);
            	//decay(12,1);
            	//decay(13,1);
            	//decay(14,1);
            	//decay(15,1);//GD12
            	//decay(18,1);
             },100);
            $("div.panel").show();
        }
    });
    $("#name_JJC1").click(function(){
        if(confirm("是否将“#1机加池”设置为维修状态？")){
            fix_jjc1();
            document.getElementById("scheme").onclick="";

            document.getElementById("export").href="download/fix-jjc1.docx";
            window.setTimeout(function(){
            	decay(6,1);
                decay(10,1);
                decay(9,1);
                decay(13,1);
                decay(30,1);
                decay(31,1);
                decay(33,1);
             },100);
            $("div.panel").show();
        }
    });
    $("#name_JJC2").click(function(){
        if(confirm("是否将“#2机加池”设置为维修状态？")){
            fix_jjc2();
            document.getElementById("scheme").onclick="";

            document.getElementById("export").href="download/fix-jjc2.docx";
            window.setTimeout(function(){
                decay(7,1);
                decay(11,1);
                decay(12,1);
                decay(13,1);
                decay(14,1);
             },100);
            $("div.panel").show();
        }
    });
    $("#name_JJC3").click(function(){
        if(confirm("是否将“#3机加池”设置为维修状态？")){
            fix_jjc3();
            document.getElementById("scheme").onclick="";

            document.getElementById("export").href="download/fix-jjc3.docx";
            window.setTimeout(function(){              
            	decay(5,1);//GD04
            	decay(8,1);//GD07
            	decay(15,1);//GD12
            	decay(18,1);
             },100);
            $("div.panel").show();
        }
    });
    $("#name_VL").click(function(){
        if(confirm("是否将“V型滤池设置为维修状态？”")){
            fix_vl();
            document.getElementById("scheme").onclick="";

            document.getElementById("export").href="download/fix-vl.docx";
            window.setTimeout(function(){
            	decay(15,1);
            	decay(18,1);//GD15
            	canvas.children[38].fill=color_GD;
            },100);
            $("div.panel").show();
        }
    });
    $("#name_TC").click(function(){
        if(confirm("是否将“现有活性炭池”设置为维修状态？")){
            fix_tc_old();
            document.getElementById("scheme").onclick="";

            document.getElementById("export").href="download/fix-tc-old.doc";
            window.setTimeout(function(){              
            	decay(21,1);//GD17  
            	decay(22,1);//GD18
             },100);
        }
    });
    $("#name_TC1").click(function(){
        if(confirm("是否将“新建活性炭池”设置为维修状态？")){
            fix_tc_new();
            document.getElementById("scheme").onclick="";

            document.getElementById("export").href="download/fix-tc-new.doc";
            window.setTimeout(function(){              
            	decay(23,1);//GD19
            	decay(20,1);//GD16
             },100);
        }
    });
    $("#name_CY").click(function(){
        if(confirm("是否将“臭氧接触池”设置为维修状态？")){
            fix_cy_right();
            document.getElementById("nextPage").onclick=function(){
                fix_cy_left();
                window.setTimeout(function(){              
                	decay(20,1);//GD17
                 },100);
            };
            document.getElementById("lastPage").onclick=function(){
                fix_cy_right();
                window.setTimeout(function(){              
                	decay(21,1);//GD17
                	decay(22,1);
                 },100);
            };
            document.getElementById("export").href="download/fix-cy.doc";
            window.setTimeout(function(){              
            	decay(21,1);//GD17
            	decay(22,1);
             },100);
            $("div.panel").show();
        }
    });
    $("#name_HHJ1").click(function(){
        if(confirm("是否将“旧混合井”设置为维修状态？")){
            fix_hh_right();
            document.getElementById("nextPage").onclick=function(){
                fix_hh_left();
                window.setTimeout(function(){
                    decay(6,1);
                    decay(9,1);
                    decay(10,1);
                    decay(30,1);
                    decay(31,1);
                    decay(33,1);
                 },100);
            };
            document.getElementById("lastPage").onclick=function(){
                fix_hh_right();
                window.setTimeout(function(){
                    decay(7,1);
                    decay(11,1);
                    decay(12,1);
                    decay(13,1);
                    decay(14,1);
                 },100);
            };
            document.getElementById("export").href="download/fix-hh-old.doc";
            window.setTimeout(function(){
                decay(7,1);
                decay(11,1);
                decay(12,1);
                decay(13,1);
                decay(14,1);
             },100);
            $("div.panel").show();
        }
    });
    
    $("#name_HHJ2").click(function(){
        if(confirm("是否将“新混合井”设置为维修状态？")){
            fix_hh_new();
            document.getElementById("scheme").onclick="";

            document.getElementById("export").href="download/fix-hh-new.docx";
            window.setTimeout(function(){              
            	decay(5,1);//GD04
            	decay(8,1);//GD07
            	decay(15,1);
            	decay(18,1);
             },100);
        }
    });*/
    
	$("#name_HX").click(function(){$.messager.confirm('确认','是否将<strong>虹吸滤池</strong>设置为维修状态？', function(r){
		if(r){
        	fix_hx_right();
		}
    });
	});
/*    $("#name_QSC1").click(function(){
        if(confirm("是否将“#3清水池”设置为维修状态？")){
            fix_qsc3();
            document.getElementById("nextPage").onclick=function(){
            };
            document.getElementById("lastPage").onclick=function(){
            };
            document.getElementById("export").href="download/fix-qsc3.docx";
            window.setTimeout(function(){              
            	decay(25,1);//GD21
             },100);
            $("div.panel").show();
        }
    }); //???
    $("#name_QSC2").click(function(){
        if(confirm("是否将“#1清水池”设置为维修状态？")){
            fix_qsc1();
            
            document.getElementById("scheme").onclick=function(){
            };

            document.getElementById("export").href="download/fix-qsc1.doc";
            window.setTimeout(function(){              
            	decay(25,1);//GD21
             },100);
            $("div.panel").show();

        }
    });
    $("#name_QSC3").click(function(){
        if(confirm("是否将“#2清水池”设置为维修状态？")){
            fix_qsc2();
            
            document.getElementById("scheme").onclick=function(){
            };

            document.getElementById("export").href="download/fix-qsc2.doc";         
            window.setTimeout(function(){              
            	decay(28,1);//GD24
             },100);
            $("div.panel").show();
        }
    });
    $("#name_QSC4").click(function(){
        if(confirm("是否将“#4清水池”设置为维修状态？")){
            fix_qsc4();
            document.getElementById("scheme").onclick=function(){
            };

            document.getElementById("export").href="download/fix-qsc4.docx";
            window.setTimeout(function(){              
            	decay(27,1);
            	decay(28,1);//GD24
            	canvas.children[39].fill=color_GD;
             },100);
            $("div.panel").show();
        }
    });*/

    $("#reset").bind("click", function () {
        clearAll();
    });


    function decay(a,b){
        if(b>0){
            canvas.children[a].fill="rgba(26,215,255,b)";
            switch(b){
                case 1.0:
                    canvas.children[a].fill="rgba(26,215,255,1)";
                    break;
                case 0.9:
                    canvas.children[a].fill="rgba(26,215,255,0.99)";
                    break;
                case 0.8:
                    canvas.children[a].fill="rgba(26,215,255,0.98)";
                    break;
                case 0.7:
                    canvas.children[a].fill="rgba(26,215,255,0.97)";
                    break;
                case 0.6:
                    canvas.children[a].fill="rgba(26,215,255,0.96)";
                    break;
                case 0.5:
                    canvas.children[a].fill="rgba(26,215,255,0.95)";
                    break;
                case 0.4:
                    canvas.children[a].fill="rgba(26,215,255,0.93)";
                    break;
                case 0.3:
                    canvas.children[a].fill="rgba(26,215,255,0.92)";
                    break;
                case 0.2:
                    canvas.children[a].fill="rgba(26,215,255,0.9)";
                    break;
                case 0.1:
                    canvas.children[a].fill="rgba(26,215,255,0.7)";
                    break;
                default :
                    canvas.children[a].fill="rgba(26,215,255,0)";
            }
            window.setTimeout(function(){
                decay(a,b-0.1);
            },100);
        }
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
    
    
    function clearAll(){
    	GD1001.state=3;
    	GD11.state=3;
    	GD37.state=3;
    	GD26.state=3;
    	GD27.state=3;
    	canvas.children[2].fill=color_GD;
    	canvas.children[3].fill=color_GD;
    	canvas.children[4].fill=color_GD;
    	canvas.children[5].fill=color_GD;
    	canvas.children[6].fill=color_GD;
    	canvas.children[7].fill=color_GD;
    	canvas.children[8].fill=color_GD;
//    	canvas.children[9].fill=color_GD;
//      canvas.children[10].fill=color_GD;
        canvas.children[11].fill=color_GD;
        canvas.children[12].fill=color_GD;
        canvas.children[13].fill=color_GD;
        canvas.children[14].fill=color_GD;
        canvas.children[15].fill=color_GD;
        canvas.children[16].fill=color_GD;
        canvas.children[17].fill=color_GD;
        canvas.children[18].fill=color_GD;
        canvas.children[20].fill=color_GD;
        canvas.children[21].fill=color_GD;
        canvas.children[22].fill=color_GD;
        canvas.children[23].fill=color_GD;
        canvas.children[24].fill=color_GD;
        canvas.children[25].fill=color_GD;
        canvas.children[27].fill=color_GD;
        canvas.children[28].fill=color_GD;
        canvas.children[30].fill=color_GD;
        canvas.children[31].fill=color_GD;
        canvas.children[33].fill=color_GD;
        canvas.children[34].fill=color_GD;
        canvas.children[35].fill=color_GD;
        canvas.children[36].fill="rgba(0,0,0,0)";
        canvas.children[37].fill="rgba(0,0,0,0)";
        canvas.children[38].fill="rgba(0,0,0,0)";
        canvas.children[39].fill="rgba(0,0,0,0)";
          
		/*
		 * cheatsheet
		 * 默认颜色为绿色的阀门
		 * ["FM05",  "FM06",  "FM07",  "FM09",  "FM010", "FM014", 
		 *  "FM015", "FM016", "FM017", "FM018", "FM019", "FM020", 
		 *  "FM044", "FM045", "FM052", "FM055", "FM057", "FM059", 
		 *  "FM062", "FM063", "FM064", "FM065", "FM066", "FM067", "FM069"]
		 * 默认颜色为红色的阀门
		 * ["FM022","FM023","FM050","FM056","FM068"]
		 * 默认颜色为绿色但是不显示的阀门
		 * ["FM021", "FM024", "FM025", "FM026", "FM046", "FM047", 
		 *  "FM048", "FM049", "FM051", "FM053", "FM054", "FM058"]
		 */

        //恢复阀门的默认颜色
        $("div#FM_group img.fm_default_green").attr("src","image/y3-35x37.png");
        $("div#FM_group img.fm_default_red").attr("src","image/y2-35x37.png");
        //只显示重要的阀门和标签
        $(".fm_default_hide").attr("style","display:none;");
        $("div#FM_group .fm_default_green").attr("style","display:block;");
        $("div#FM_group .fm_default_red").attr("style","display:block;");

        //右侧
        //清空单元格的内容
		for (i=1;i<7;i++){
	        document.getElementById("step_" + i).innerHTML="&nbsp;";
	        document.getElementById("step_" + i + "_result").innerHTML="&nbsp;";
		}
		
		//重置面板提示的内容
        $("#fix_head").text("请点击需要维修的构筑物");
        $("#init_state").text("初始状态");
        $("#init_statement").text("全场正常运行");
        
        $("#scheme").html("&nbsp;");
        $("#scheme_extra").html("&nbsp;");
        $("#export").html("&nbsp;");
        $("#reset").html("&nbsp;");
        
        //恢复构筑物及其标签的颜色
        $("div#name_gzw .name_ob").attr("style","color:#283a45;");
        $("div#name_gzw .name_ob").attr("style","background:transparent;");
        //左对齐
        /*$(".table_line").attr("style","text-align:left;");*/
        
        //解除功能面板的函数绑定
//      document.getElementById("scheme").onclick = function(){提示};
//      document.getElementById("restore").onclick = function(){提示};
//      document.getElementById("export").onclick = function(){提示};
        document.getElementById("export").href="#";
        //隐藏表格面板
        $("div.panel").hide();
    }

});
