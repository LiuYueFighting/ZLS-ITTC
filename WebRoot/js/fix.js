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
        width_all=20,
        color_GD="#007fff",
        color_GD_new="blue",
        lineHeight_all=10;

    var GD01=createGD({
        parent:canvas,
        cells:[
            {x_cell: 707 ,y_cell: 96},
            {x_cell: 707 ,y_cell: 150}          
        ],
        GDwidth:width_all,
        color:color_GD
    });//1
    var GD0101=createGD({
        parent:canvas,
        cells:[
            {x_cell: 707 ,y_cell: 160},//160
            {x_cell: 707 ,y_cell: 223},
            {x_cell: 765 ,y_cell: 258},
            {x_cell: 989 ,y_cell: 258},
            {x_cell: 989, y_cell: 348}
        ],
        GDwidth:width_all,
        color:color_GD
    });//2
    var GD02=createGD({
        parent:canvas,
        cells:[
            {x_cell: 748 ,y_cell: 98},
            {x_cell: 748 ,y_cell: 222},
            {x_cell: 775 ,y_cell: 240},
            {x_cell: 1020 ,y_cell: 240},
            {x_cell: 1020, y_cell: 256}
        ],
        GDwidth:width_all,
        color:color_GD
    });//3
    var GD03=createGD({
        parent:canvas,
        cells:[
            {x_cell: 1020 ,y_cell: 256},
            {x_cell: 1020, y_cell: 348}
        ],
        GDwidth:width_all,
        color:color_GD
    });//4
    var GD04=createGD({
        parent:canvas,
        cells:[
            {x_cell: 1026,y_cell: 256},
            {x_cell: 1188 ,y_cell: 256},
            {x_cell: 1188, y_cell: 374}
        ],
        GDwidth:width_all,
        color:color_GD
    });//5
    var GD05=createGD({
        parent:canvas,
        cells:[
            {x_cell: 989 ,y_cell: 365},
            {x_cell: 989 ,y_cell: 411},
            {x_cell: 955, y_cell: 411}
        ],
        GDwidth:width_all,
        color:color_GD
    });//6
    var GD06=createGD({
        parent:canvas,
        cells:[
            {x_cell: 1019 ,y_cell: 360},
            {x_cell: 1019, y_cell: 411},
            {x_cell: 1058, y_cell: 411}
        ],
        GDwidth:width_all,
        color:color_GD
    });//7
    var GD07=createGD({
        parent:canvas,
        cells:[
            {x_cell: 1188,y_cell: 412},
            {x_cell: 1188,y_cell: 567}
        ],
        GDwidth:width_all,
        color:color_GD
    });//8
    var GD08=createGD({
        parent:canvas,
        cells:[
            {x_cell: 896 ,y_cell: 445},
            {x_cell: 896 ,y_cell: 482},
            {x_cell: 792 ,y_cell: 482},
            {x_cell: 792 ,y_cell: 539},
            {x_cell: 819, y_cell: 539}
        ],
        GDwidth:width_all,
        color:color_GD
    });//9
    var GD09=createGD({
        parent:canvas,
        cells:[
            {x_cell: 896 ,y_cell: 445},
            {x_cell: 896 ,y_cell: 482},
            {x_cell: 792 ,y_cell: 482},
            {x_cell: 792 ,y_cell: 562},
            {x_cell: 819, y_cell: 562}
        ],
        GDwidth:width_all,
        color:color_GD
    });//10
    var GD10=createGD({
        parent:canvas,
        cells:[
            {x_cell: 1108 ,y_cell: 445},
            {x_cell: 1108 ,y_cell: 482},
            {x_cell: 990 ,y_cell: 482},
            {x_cell: 990 ,y_cell: 527}
        ],
        GDwidth:width_all,
        color:color_GD
    });//11
    var GD1001=createGD({
        parent:canvas,
        cells:[
            {x_cell: 990 ,y_cell: 482},
            {x_cell: 990 ,y_cell: 542},
            {x_cell: 970, y_cell: 542}
        ],
        GDwidth:width_all,
        color:color_GD
    });//12
    var GD1002=createGD({
        parent:canvas,
        cells:[
            {x_cell: 990 ,y_cell: 482},
            {x_cell: 900 ,y_cell: 482}
        ],
        GDwidth:width_all,
        color:color_GD
    });//13
    var GD11=createGD({
        parent:canvas,
        cells:[
            {x_cell: 990 ,y_cell: 482},
            {x_cell: 990 ,y_cell: 562},
            {x_cell: 970, y_cell: 562}
        ],
        GDwidth:width_all,
        color:color_GD
    });//14
    var GD12=createGD({
        parent:canvas,
        cells:[
            {x_cell: 1124 ,y_cell: 650},
            {x_cell: 962, y_cell: 650},
            {x_cell: 962, y_cell: 667}
        ],
        GDwidth:width_all,
        color:color_GD
    });//15
    var GD13=createGD({
        parent:canvas,
        cells:[
            {x_cell: 848 ,y_cell: 570},
            {x_cell: 848 ,y_cell: 605},
            {x_cell: 660 ,y_cell: 605},
            {x_cell:660, y_cell: 641}
        ],
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
    var GD141=createGD({
        parent:canvas,
        cells:[
            {x_cell: 879 ,y_cell: 570},
            {x_cell: 879 ,y_cell: 635},
            {x_cell: 714 ,y_cell: 633},
            {x_cell: 636 ,y_cell: 633},
            {x_cell: 636, y_cell: 646}
        ],
        GDwidth:width_all,
        color:color_GD
    });//17

    var GD15=createGD({
        parent:canvas,
        cells:[
            {x_cell: 807 ,y_cell: 708},
            {x_cell: 715 ,y_cell: 708},
            {x_cell: 715 ,y_cell: 633},
            {x_cell: 636 ,y_cell: 633},
            {x_cell: 636, y_cell: 646}
        ],
        GDwidth:width_all,
        color:color_GD
    });//18
    var GD1501=createGD({
        parent:canvas,
        cells:[
            {x_cell: 807 ,y_cell: 708},
            {x_cell: 715 ,y_cell: 708},
            {x_cell: 715 ,y_cell: 735},
            {x_cell: 673, y_cell: 735}
        ],
        GDwidth:width_all,
        color:color_GD
    });//19
    var GD16=createGD({
        parent:canvas,
        cells:[
            {x_cell: 615 ,y_cell: 673},
            {x_cell: 582, y_cell: 673}
        ],
        GDwidth:width_all,
        color:color_GD
    });//20
    var GD17=createGD({
        parent:canvas,
        cells:[
            {x_cell: 675 ,y_cell: 697},
            {x_cell: 675 ,y_cell: 734},
            {x_cell: 436 ,y_cell: 734},
            {x_cell: 436, y_cell: 691}
        ],
        GDwidth:width_all,
        color:color_GD
    });//21
    var GD18=createGD({
        parent:canvas,
        cells:[
            {x_cell: 415 ,y_cell: 657},
            {x_cell: 415, y_cell: 568}
        ],
        GDwidth:width_all,
        color:color_GD
    });//22
    var GD19=createGD({
        parent:canvas,
        cells:[
            {x_cell: 539 ,y_cell: 654},
            {x_cell: 539 ,y_cell: 603},
            {x_cell: 415 ,y_cell: 603},
            {x_cell: 415, y_cell: 563}
        ],
        GDwidth:width_all,
        color:color_GD
    });//23
    var GD20=createGD({
        parent:canvas,
        cells:[
            {x_cell: 403 ,y_cell: 482},
            {x_cell: 372 ,y_cell: 482}
        ],
        GDwidth:width_all,
        color:color_GD
    });//24
    var GD21=createGD({
        parent:canvas,
        cells:[
            {x_cell: 309 ,y_cell: 431},
            {x_cell: 309, y_cell: 401},
            {x_cell: 405, y_cell: 401},
            {x_cell: 405, y_cell: 376}
        ],
        GDwidth:width_all,
        color:color_GD
    });//25
    var GD22=createGD({
        parent:canvas,
        cells:[
            {x_cell: 707 ,y_cell: 96},
            {x_cell: 707 ,y_cell: 223},
            {x_cell: 765 ,y_cell: 258},
            {x_cell: 989 ,y_cell: 258},
            {x_cell: 989, y_cell: 297},
            {x_cell: 1018, y_cell: 297},
            {x_cell: 1018, y_cell: 349}
        ],
        GDwidth:width_all,
        color:"rgba(1,0,0,0)"
    });//26

    var GD23=createGD({
        parent:canvas,
        cells:[
            {x_cell: 421 ,y_cell: 433},
            {x_cell: 421, y_cell: 401},
            {x_cell: 465, y_cell: 401},
            {x_cell: 465, y_cell: 435}
        ],
        GDwidth:width_all,
        color:color_GD
    });//27
    var GD24=createGD({
        parent:canvas,
        cells:[
            {x_cell: 527 ,y_cell: 439},
            {x_cell: 527 ,y_cell: 401},
            {x_cell: 592 ,y_cell: 401},
            {x_cell: 592, y_cell: 375}
        ],
        GDwidth:width_all,
        color:color_GD
    });//28
    
    var GD25=createGD({
        parent:canvas,
        cells:[
            {x_cell: 748 ,y_cell: 98},
            {x_cell: 748 ,y_cell: 222},
        ],
        GDwidth:width_all,
        color:color_GD
    });//29
    
    var GD26=createGD({
        parent:canvas,
        cells:[
            //{x_cell: 896 ,y_cell: 445},
            {x_cell: 896 ,y_cell: 482},
            {x_cell: 792 ,y_cell: 482},
            {x_cell: 792 ,y_cell: 539},
            {x_cell: 819, y_cell: 539}
        ],
        GDwidth:width_all,
        color:color_GD
    });//30
    var GD27=createGD({
        parent:canvas,
        cells:[
            //{x_cell: 896 ,y_cell: 445},
            {x_cell: 896 ,y_cell: 482},
            {x_cell: 792 ,y_cell: 482},
            {x_cell: 792 ,y_cell: 562},
            {x_cell: 819, y_cell: 562}
        ],
        GDwidth:width_all,
        color:color_GD
    });//31
    var GD28=createGD({
        parent:canvas,
        cells:[
            {x_cell: 707 ,y_cell: 160},//160
            {x_cell: 707 ,y_cell: 223}
        ],
        GDwidth:width_all,
        color:color_GD
    });//32
    var GD29=createGD({
        parent:canvas,
        cells:[
            {x_cell: 896 ,y_cell: 445},
            {x_cell: 896 ,y_cell: 482},
            {x_cell: 832 ,y_cell: 482},
            
        ],
        GDwidth:width_all,
        color:color_GD
    });//33
    var GD30=createGD({
        parent:canvas,
        cells:[
            {x_cell: 879 ,y_cell: 570},
            {x_cell: 879 ,y_cell: 635},
        ],
        GDwidth:width_all,
        color:color_GD
    });//34
    var GD31=createGD({
        parent:canvas,
        cells:[
            {x_cell: 707 ,y_cell: 160},//160
            {x_cell: 707 ,y_cell: 223},
            {x_cell: 765 ,y_cell: 258},
            {x_cell: 989 ,y_cell: 258},
            {x_cell: 989, y_cell: 298},
            {x_cell: 1020, y_cell: 298},
            {x_cell: 1020, y_cell: 348}
        ],
        GDwidth:width_all,
        color:color_GD
    });//35
    var GD32=createGD({
        parent:canvas,
        cells:[
            {x_cell: 1020, y_cell: 298},
            {x_cell: 1020, y_cell: 258}
        ],
        GDwidth:width_all,
        color:"rgba(26,215,255,0)"
    });//36
    var GD33=createGD({
        parent:canvas,
        cells:[                       
            {x_cell: 1020, y_cell: 298},
            {x_cell: 989, y_cell: 298},
            {x_cell: 989, y_cell: 348}
        ],
        GDwidth:width_all,
        color:"rgba(26,215,255,0)"
    });//37
    var GD34=createGD({
        parent:canvas,
        cells:[
			{x_cell: 1124 ,y_cell: 650},
			{x_cell: 1023, y_cell: 650},
            {x_cell: 1023, y_cell: 482}
            //{x_cell: 1023, y_cell: 650}
        ],
        GDwidth:width_all,
        color:"rgba(26,215,255,0)"
    });//38
    var GD35=createGD({
        parent:canvas,
        cells:[
            {x_cell: 421 ,y_cell: 433},
            {x_cell: 421, y_cell: 401},
            {x_cell: 592 ,y_cell: 401},
            {x_cell: 592, y_cell: 375}
        ],
        GDwidth:width_all,
        color:"rgba(26,215,255,0)"
    });//39

    var img1=canvas.display.image({
        x:692,
        y:58,
        image:"image/main/qs.png"
    });
    canvas.addChild(img1);
    img1.bind("click",function(){
        //window.location.href="QS.jsp";
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
            setShow();
        }
    });
    img1.bind("mouseenter", function () {
        canvas.mouse.cursor("pointer");
        //$("#name_QS").css("display","inline");
        this.shadow="0 0 10px #eee";
    }).bind("mouseleave", function () {
        canvas.mouse.cursor("default");
        this.shadow="0 0 0px #eee";
        //$("#name_QS").css("display","none");
    }).bind("flash",function(){
        this.unbind("flash");
        window.setTimeout(function(){
            GD01.paused=1;
            GD22.paused=1;
            GD02.paused=1;
        },100);

    });
    var img11=canvas.display.image({
        x:678,
        y:141,
        image:"image/main/qs2.png"
    });
    canvas.addChild(img11);
    img11.bind("click",function(){
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
            setShow();
        }
    });
    img11.bind("mouseenter", function () {
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 10px #eee";
        //$("#name_QS2").css("display","inline");
    }).bind("mouseleave", function () {
        canvas.mouse.cursor("default");
        this.shadow="0 0 0px #eee";
        //$("#name_QS2").css("display","none");
    }).bind("flash",function(){
        this.unbind("flash");
    });
    var img2=canvas.display.image({
        x:839,
        y:342,
        image:"image/main/5.png"
    });
    canvas.addChild(img2);
    img2.bind("click",function(){
        //window.location.href="JJC.jsp";
    	if(confirm("是否将“#1机加池”设置为维修状态？")){
            fix_jjc1();
            document.getElementById("nextPage").onclick="";
            document.getElementById("lastPage").onclick="";
            document.getElementById("export").href="download/fix-jjc1.docx";
            window.setTimeout(function(){
            	decay(6,1);
                decay(10,1);
                decay(9,1);
                decay(13,1);
             },100);
            setShow();
        }
    }).bind("mouseenter", function () {
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 10px #eee";
        //$("#name_JJC1").css("display","inline");
    }).bind("mouseleave", function () {
        canvas.mouse.cursor("default");
        this.shadow="0 0 0 #eee";
        //$("#name_JJC1").css("display","none");
    }).bind("flash",function(){

        this.unbind("flash");
        window.setTimeout(function(){
            GD08.paused=1;
            GD09.paused=1;
            GD26.paused=1;
            GD27.paused=1;
            GD29.paused=1;
        },100);
    });

    var img21=img2.clone({
        x:1049,
        y:340
    });
    canvas.addChild(img21);
    img21.bind("click",function(){
        //window.location.href="JJC.jsp";
    	if(confirm("是否将“#2机加池”设置为维修状态？")){
            fix_jjc2();
            document.getElementById("nextPage").onclick="";
            document.getElementById("lastPage").onclick="";
            document.getElementById("export").href="download/fix-jjc2.docx";
            window.setTimeout(function(){
                decay(7,1);
                decay(11,1);
                decay(12,1);
                decay(13,1);
                decay(14,1);
             },100);
            setShow();
        }
    }).bind("mouseenter", function () {
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 10px #eee";
        //$("#name_JJC2").css("display","inline");
    }).bind("mouseleave", function () {
        canvas.mouse.cursor("default");
        this.shadow="0 0 0px #eee";
        //$("#name_JJC2").css("display","none");
    }).bind("flash",function(){

        this.unbind("flash");
        window.setTimeout(function(){
            GD10.paused=1;
        },100);

    });
    var img22=img2.clone({
        x:1127,
        y:573
    });
    canvas.addChild(img22);
    img22.bind("click",function(){
        //window.location.href="JJC.jsp";
    	if(confirm("是否将“#3机加池”设置为维修状态？")){
            fix_jjc3();
            document.getElementById("nextPage").onclick="";
            document.getElementById("lastPage").onclick="";
            document.getElementById("export").href="download/fix-jjc3.docx";
            window.setTimeout(function(){              
            	decay(5,1);//GD04
            	decay(8,1);//GD07
            	decay(15,1);//GD12
             },100);
            setShow();
        }
    }).bind("mouseenter", function () {
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 10px #eee";
        //$("#name_JJC3").css("display","inline");
    }).bind("mouseleave", function () {
        canvas.mouse.cursor("default");
        this.shadow="0 0 0px #eee";
        //$("#name_JJC3").css("display","none");
    }).bind("flash",function(){

        this.unbind("flash");
        window.setTimeout(function(){
            GD12.paused=1;
        },100);

    });
    //V?????????
    var img3=canvas.display.image({
        x:847,
        y:665,
        image:"image/main/6.png"
    });
    canvas.addChild(img3);
    img3.bind("click",function(){
        //window.location.href="VL.jsp";
    	if(confirm("是否将“V型滤池设置为维修状态？”")){
            fix_vl();
            document.getElementById("nextPage").onclick="";
            document.getElementById("lastPage").onclick="";
            document.getElementById("export").href="download/fix-vl.docx";
            window.setTimeout(function(){
            	decay(18,1);//GD15
            	decay(15,1);
            	canvas.children[38].fill=color_GD;
            },100);
            setShow();
        }
    }).bind("mouseenter", function () {
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 10px #eee";
        //$("#name_VL").css("display","inline");
    }).bind("mouseleave", function () {
        canvas.mouse.cursor("default");
        this.shadow="0 0 0px #eee";
        //$("#name_VL").css("display","none");

    }).bind("flash",function(){

        this.unbind("flash");
        window.setTimeout(function(){
            GD15.paused=1;
            GD1501.paused=1;
            canvas.children[19].fill="rgba(1,1,1,0)";
        },100);

    });

    //?????????
    var img4=canvas.display.image({
        x:967,
        y:352,
        image:"image/main/hhj.png"
    });
    canvas.addChild(img4);
    img4.bind("click",function(){
        //window.location.href="qsc.jsp";
    	if(confirm("是否将“旧混合井”设置为维修状态？")){
            fix_hh_right();
            document.getElementById("nextPage").onclick=function(){
                fix_hh_left();
            };
            document.getElementById("lastPage").onclick=function(){
                fix_hh_right();
            };
            document.getElementById("export").href="download/fix-hh-old.doc";
            window.setTimeout(function(){
                decay(7,1);
                decay(11,1);
                decay(12,1);
                decay(13,1);
                decay(14,1);
             },100);
            setShow();
        }
    }).bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 10px #eee";
        //$("#name_QSC1").css("display","inline");
    }).bind("mouseleave",function(){
        //$("#name_QSC1").css("display","none");
        this.shadow="0 0 0px #eee";
        canvas.mouse.cursor("default");
    }).bind("flash",function(){

        img4.unbind("flash");

        window.setTimeout(function(){GD05.paused=1;
            GD06.paused=1;
            GD07.paused=1;},100);


    });
    var img41=canvas.display.image({
        x:1179,
        y:381,
        image:"image/main/hhj2.png"
    });
    canvas.addChild(img41);
    img41.bind("click",function(){
        //window.location.href="hhj.jsp";
    	if(confirm("是否将“新混合井”设置为维修状态？")){
            fix_hh_new();
            document.getElementById("nextPage").onclick="";
            document.getElementById("lastPage").onclick="";
            document.getElementById("export").href="download/fix-hh-new.docx";
            window.setTimeout(function(){              
            	decay(5,1);//GD04
            	decay(8,1);//GD07
            	decay(15,1);
            	decay(18,1);
             },100);
        }
    }).bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 10px #eee";
        //$("#name_HHJ2").css("display","inline");
    }).bind("mouseleave",function(){
        //$("#name_HHJ2").css("display","none");
        this.shadow="0 0 0px #eee";
        canvas.mouse.cursor("default");
    }).bind("flash",function(){

        img41.unbind("flash");

    });
    //???????
    var img5=canvas.display.image({
        x:810,
        y:529,
        image:"image/main/hx.png"
    });
    canvas.addChild(img5);
    img5.bind("click",function(){
        //window.location.href="hx.jsp";
    	if(confirm("是否将“虹吸滤池”设置为维修状态？")){

            fix_hx_right();
            document.getElementById("nextPage").onclick=function(){
                fix_hx_left();
            };
            document.getElementById("lastPage").onclick=function(){
                fix_hx_right();
            };
            document.getElementById("export").href="download/fix-hx.doc";
            window.setTimeout(function(){              
            	decay(12,1);//GD04
            	decay(14,1);//GD07
            	decay(17,1);//GD141
             },100);
            setShow();

        }
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
    img6.bind("click",function(){
        //window.location.href="qsc.jsp";
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
            setShow();
        }
    }).bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 10px #eee";
        //$("#name_QSC1").css("display","inline");
    }).bind("mouseleave",function(){
        //$("#name_QSC1").css("display","none");
        this.shadow="0 0 0px #eee";
        canvas.mouse.cursor("default");
    }).bind("flash",function(){

        this.unbind("flash");
        window.setTimeout(function(){
            GD21.paused=1;
            GD23.paused=1;
            GD35.paused=1;
        },100);

    });
    var img61=canvas.display.image({
        x:287,
        y:253,
        image:"image/main/qsc2.png"
    });
    canvas.addChild(img61);
    img61.bind("click",function(){
        //window.location.href="qsc.jsp";
    	if(confirm("是否将“#1清水池”设置为维修状态？")){
            fix_qsc1();
            document.getElementById("nextPage").onclick=function(){
            };
            document.getElementById("lastPage").onclick=function(){
            };
            document.getElementById("export").href="download/fix-qsc1.doc";
            window.setTimeout(function(){              
            	decay(25,1);//GD21
             },100);
            setShow();

        }
    }).bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 10px #eee";
        //$("#name_QSC2").css("display","inline");
    }).bind("mouseleave",function(){
        //$("#name_QSC2").css("display","none");
        this.shadow="0 0 0px #eee";
        canvas.mouse.cursor("default");
    }).bind("flash",function(){

        this.unbind("flash");
    });
    var img62=canvas.display.image({
        x:462,
        y:251,
        image:"image/main/qsc2.png"
    });
    canvas.addChild(img62);
    img62.bind("click",function(){
        //window.location.href="qsc.jsp";
    	if(confirm("是否将“#2清水池”设置为维修状态？")){
            fix_qsc2();
            document.getElementById("nextPage").onclick=function(){
            };
            document.getElementById("lastPage").onclick=function(){
            };
            document.getElementById("export").href="download/fix-qsc2.doc";         
            window.setTimeout(function(){              
            	decay(28,1);//GD24
             },100);
            setShow();
        }
    }).bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 10px #eee";
        //$("#name_QSC3").css("display","inline");
    }).bind("mouseleave",function(){
        //$("#name_QSC3").css("display","none");
        this.shadow="0 0 0px #eee";
        canvas.mouse.cursor("default");
    }).bind("flash",function(){

        this.unbind("flash");
    });
    var img63=canvas.display.image({
        x:432,
        y:434,
        image:"image/main/qsc3.png"
    });
    canvas.addChild(img63);
    img63.bind("click",function(){
        //window.location.href="qsc.jsp";
    	if(confirm("是否将“#4清水池”设置为维修状态？")){
            fix_qsc4();
            document.getElementById("nextPage").onclick=function(){
            };
            document.getElementById("lastPage").onclick=function(){
            };
            document.getElementById("export").href="download/fix-qsc4.docx";
            window.setTimeout(function(){              
            	decay(27,1);
            	decay(28,1);//GD24
            	canvas.children[39].fill=color_GD;
             },100);
            setShow();
        }
    }).bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 10px #eee";
        //$("#name_QSC4").css("display","inline");
    }).bind("mouseleave",function(){
        //$("#name_QSC4").css("display","none");
        this.shadow="0 0 0px #eee";
        canvas.mouse.cursor("default");
    }).bind("flash",function(){

        this.unbind("flash");
        window.setTimeout(function(){
            GD24.paused=1;
        },100);


    });

    var img7=canvas.display.image({
        x:870,
        y:-7,
        image:"image/main/1.png"
    });
    canvas.addChild(img7);
    img7.bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 10px #eee";
        //$("#name_YC").css("display","inline");
    }).bind("mouseleave",function(){
        //$("#name_YC").css("display","none");
        this.shadow="0 0 0px #eee";
        canvas.mouse.cursor("default");
    });

    var img8=canvas.display.image({
        x:379,
        y:652,
        image:"image/main/tc.png"
    });
    canvas.addChild(img8);
    img8.bind("click",function(){
        //window.location.href="hxt.jsp";
    	if(confirm("是否将“现有活性炭池”设置为维修状态？")){
            fix_tc_old();
            document.getElementById("nextPage").onclick="";
            document.getElementById("lastPage").onclick="";
            document.getElementById("export").href="download/fix-tc-old.doc";
            window.setTimeout(function(){              
            	decay(21,1);//GD17  
            	decay(22,1);//GD18
             },100);
        }
    }).bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 10px #eee";
        //$("#name_TC").css("display","inline");
    }).bind("mouseleave",function(){
        this.shadow="0 0 0px #eee";
        //$("#name_TC").css("display","none");
        canvas.mouse.cursor("default");
    }).bind("flash",function(){

        this.unbind("flash");
        window.setTimeout(function(){
            GD18.paused=1;
            GD19.paused=1;
        },100);

    });
    var img81=canvas.display.image({
        x:488,
        y:652,
        image:"image/main/tc.png"
    });
    canvas.addChild(img81);
    img81.bind("click",function(){
        //window.location.href="hxt.jsp";
    	if(confirm("是否将“新建活性炭池”设置为维修状态？")){
            fix_tc_new();
            document.getElementById("nextPage").onclick="";
            document.getElementById("lastPage").onclick="";
            document.getElementById("export").href="download/fix-tc-new.doc";
            window.setTimeout(function(){              
            	decay(23,1);//GD19
            	decay(20,1);//GD16
             },100);
        }
    }).bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 10px #eee";
        //$("#name_TC1").css("display","inline");
    }).bind("mouseleave",function(){
        //$("#name_TC1").css("display","none");
        this.shadow="0 0 0px #eee";
        canvas.mouse.cursor("default");
    }).bind("flash",function(){

        this.unbind("flash");

    });
    var img9=canvas.display.image({
        x:613,
        y:645,
        image:"image/main/cy.png"
    });
    canvas.addChild(img9);
    img9.bind("click",function(){
        //window.location.href="cy.jsp";
    	if(confirm("是否将“臭氧接触池”设置为维修状态？")){
            fix_cy_right();
            document.getElementById("nextPage").onclick=function(){
                fix_cy_left();
            };
            document.getElementById("lastPage").onclick=function(){
                fix_cy_right();
            };
            document.getElementById("export").href="download/fix-cy.doc";
            window.setTimeout(function(){              
            	decay(21,1);//GD17
             },100);
            setShow();
        }

    }).bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 10px #eee";
        //$("#name_CY").css("display","inline");
    }).bind("mouseleave",function(){
        //$("#name_CY").css("display","none");
        this.shadow="0 0 0px #eee";
        canvas.mouse.cursor("default");
    }).bind("flash",function(){

        this.unbind("flash");
        window.setTimeout(function(){
            GD16.paused=1;
            GD17.paused=1;
        },100);

    });
    var img10=canvas.display.image({
        x:623,
        y:465,
        image:"image/main/cyc.png"
    });
    canvas.addChild(img10);
    img10.bind("click",function(){
        window.location.href="cy.jsp";
    }).bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 10px #eee";
        //$("#name_CYC").css("display","inline");
    }).bind("mouseleave",function(){
        //$("#name_CYC").css("display","none");
        this.shadow="0 0 0px #eee";
        canvas.mouse.cursor("default");
    });


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

        if(GD01.full==1){
            GD0101.paused=1;
            GD28.paused=1;
            GD31.paused=1;
        }
        if(GD02.full==1){
            GD03.paused=1;
            GD04.paused=1;
            GD32.paused=1;
            GD33.paused=1;
        }
        if(GD04.full==1){
            img4.trigger("flash");
            img41.trigger("flash");
        }
        if(GD07.full==1){
            img2.trigger("flash");
            img21.trigger("flash");
            img22.trigger("flash");
        }
        if(GD09.full==1)
        {
            img5.trigger("flash");
            img3.trigger("flash");
        }
        if(GD10.full==1){
            GD1001.paused=1;
            GD1002.paused=1;
            GD11.paused=1;
            GD34.paused=1;
        }
        if(GD15.full==1){
            img9.trigger("flash");
        }
        if(GD17.full==1){
            img8.trigger("flash");
            img81.trigger("flash");
        }
        if(GD19.full==1){
            img6.trigger("flash");

        }
        if(GD21.full==1){
            img61.trigger("flash");
        }
        if(GD23.full==1){
            img63.trigger("flash");
        }
        if(GD24.full==1){
            img62.trigger("flash");
        }
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
    //function reset(){
    //    canvas.timeline.stop();
    //    canvas.children[1].fill=color_GD;
    //    canvas.children[2].fill=color_GD;
    //    canvas.children[3].fill=color_GD;
    //    canvas.children[5].fill=color_GD;
    //    canvas.children[6].fill=color_GD;
    //    canvas.children[8].fill=color_GD;
    //    canvas.children[9].fill=color_GD;
    //    canvas.children[10].fill=color_GD;
    //    canvas.children[11].fill=color_GD;
    //    canvas.children[13].fill=color_GD;
    //    canvas.children[14].fill=color_GD;
    //    canvas.children[17].fill=color_GD;
    //    canvas.children[18].fill=color_GD;
    //    canvas.children[4].fill=color_GD;
    //    canvas.children[7].fill=color_GD;
    //    canvas.children[12].fill=color_GD;
    //    canvas.children[15].fill=color_GD;
    //    canvas.children[16].fill=color_GD;
    //    canvas.children[19].fill=color_GD;
    //    canvas.children[22].fill="rgba(1,1,1,0)";
    //    GD01.init();
    //    GD02.init();
    //    GD03.init();
    //    GD04.init();
    //    GD05.init();
    //    GD06.init();
    //    GD07.init();
    //    GD08.init();
    //    GD09.init();
    //    GD10.init();
    //    GD11.init();
    //    GD12.init();
    //    GD13.init();
    //    GD14.init();
    //    GD15.init();
    //    GD16.init();
    //    GD17.init();
    //    GD18.init();
    //    GD19.init();
    //    GD20.init();
    //    GD21.init();
    //    GD22.init();
    //    GD23.init();
    //    GD24.init();
    //    img1.bind("flash",function(){
    //        GD01.paused=1;
    //        GD22.paused=1;
    //        GD02.paused=1;
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
    //    });
    //    img2.bind("flash",function(){
    //        GD08.paused=1;
    //        GD09.paused=1;
    //    });
    //
    //
    //    img21.bind("flash",function(){
    //        GD10.paused=1;
    //        GD11.paused=1;
    //    });
    //
    //    img22.bind("flash",function(){
    //        GD12.paused=1;
    //    });
    //
    //    img3.bind("flash",function(){
    //        GD15.paused=1;
    //    });
    //
    //    img4.bind("flash",function(){
    //        GD05.paused=1;
    //        GD06.paused=1;
    //        GD07.paused=1;
    //    });
    //
    //    img5.bind("flash",function(){
    //        GD13.paused=1;
    //        GD14.paused=1;
    //    });
    //
    //    img6.bind("flash",function(){
    //        GD21.paused=1;
    //        GD23.paused=1;
    //    });
    //
    //    img61.bind("flash",function(){
    //    });
    //
    //    img62.bind("flash",function(){
    //    });
    //
    //    img63.bind("flash",function(){
    //        GD24.paused=1;
    //    });
    //
    //    img8.bind("flash",function(){
    //        GD18.paused=1;
    //        GD19.paused=1;
    //    });
    //
    //    img9.bind("flash",function(){
    //        GD16.paused=1;
    //        GD17.paused=1;
    //    });
    //    GD01.paused=1;
    //    GD22.paused=1;
    //    GD02.paused=1;
    //    canvas.settings.fps=40;
    //    var spanText=document.getElementById("speed");
    //    var speed=(canvas.settings.fps/40).toFixed(1);
    //    spanText.innerHTML=speed+"X";
    //    var btn_start=$("#btn_start");
    //    btn_start.innerHTML="&#xe61f;";
    //    btn_start.value=0;
    //
    //    canvas.redraw();
    //    canvas.timeline.start();
    //}
    //function line_new(){
    //    canvas.timeline.stop();
    //    console.log("new");
    //    reset();
    //
    //    canvas.children[1].fill="rgba(1,0,0,0)";
    //    canvas.children[3].fill="rgba(1,0,0,0)";
    //    canvas.children[5].fill="rgba(1,0,0,0)";
    //    canvas.children[6].fill="rgba(1,0,0,0)";
    //    canvas.children[8].fill="rgba(1,0,0,0)";
    //    canvas.children[9].fill="rgba(1,0,0,0)";
    //    canvas.children[10].fill="rgba(1,0,0,0)";
    //    canvas.children[11].fill="rgba(1,0,0,0)";
    //    canvas.children[13].fill="rgba(1,0,0,0)";
    //    canvas.children[14].fill="rgba(1,0,0,0)";
    //    canvas.children[17].fill="rgba(1,0,0,0)";
    //    canvas.children[18].fill="rgba(1,0,0,0)";
    //
    //}
    //function line_old(){
    //    canvas.timeline.stop();
    //    console.log("old");
    //    reset();
    //    canvas.children[2].fill="rgba(1,0,0,0)";
    //    canvas.children[3].fill="rgba(1,0,0,0)";
    //    canvas.children[4].fill="rgba(1,0,0,0)";
    //    canvas.children[7].fill="rgba(1,0,0,0)";
    //    canvas.children[12].fill="rgba(1,0,0,0)";
    //    canvas.children[15].fill="rgba(1,0,0,0)";
    //    canvas.children[16].fill="rgba(1,0,0,0)";
    //    canvas.children[19].fill="rgba(1,0,0,0)";
    //    canvas.children[22].fill=color_GD;
    //}
    //function line_none(){
    //    canvas.timeline.stop();
    //    GD03.color="rgba(0,0,0,0)";
    //    reset();
    //}
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
        img1.bind("flash",function(){
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
        });
        canvas.settings.fps=40;
        GD01.paused=1;
    }
    function fix_qs_right(){
        clearAll();
        document.getElementById("fix_head").innerHTML="取水泵房东侧配合方案";
        document.getElementById("name_QS").style.color="#8dd9ff";
        document.getElementById("name_QS").style.background="rgba(255,0,0,0.7)";
        document.getElementById("nextPage").style.display="block";
        document.getElementById("lastPage").style.display="block";

        setOpenDgree("FM07");
        setOpenDgree("FM010");
        setOpenDgree("FM068");


        document.getElementById("fix_line1").innerHTML="打开阀门64#";
        document.getElementById("fix_line2").innerHTML="关闭阀门04#";
        document.getElementById("fix_line3").innerHTML="关闭阀门07#";
        document.getElementById("fix_line4").innerHTML="关闭阀门10#";
        document.getElementById("fix_line5").innerHTML="关闭阀门08#";
        document.getElementById("fix_line6").innerHTML="打开东侧池排空泵#";
//        document.getElementById("fix_line6").innerHTML="关闭阀门68#";
//            document.getElementById("fix_line7").innerHTML="打开阀门45#";

        setShow();
    }

    function fix_qs_left(){
        clearAll();
        document.getElementById("fix_head").innerHTML="取水泵房西侧配合方案";
        document.getElementById("name_QS").style.color="#8dd9ff";
        document.getElementById("name_QS").style.background="rgba(255,0,0,0.7)";
        document.getElementById("nextPage").style.display="block";
        document.getElementById("lastPage").style.display="block";

        setOpenDgree("FM07");
        setOpenDgree("FM09");
        setOpenDgree("FM068");

        document.getElementById("fix_line1").innerHTML="打开阀门64#";
        document.getElementById("fix_line2").innerHTML="关闭阀门03#";
        document.getElementById("fix_line3").innerHTML="关闭阀门07#";
        document.getElementById("fix_line4").innerHTML="关闭阀门09#";
        document.getElementById("fix_line5").innerHTML="打开西侧池排空泵#";

        setShow();
    }

    function  fix_hh_right(){
        clearAll();
        document.getElementById("fix_head").innerHTML="现有混合井东侧配合方案";
        document.getElementById("name_HHJ1").style.color="#8dd9ff";
        document.getElementById("name_HHJ1").style.background="rgba(255,0,0,0.7)";
        document.getElementById("nextPage").style.display="block";
        document.getElementById("lastPage").style.display="block";

        setOpenDgree("FM015");
        setOpenDgree("FM063");
        setOpenDgree("FM069");
        setOpenDgree("FM068");

        document.getElementById("fix_line1").innerHTML="打开阀门62#";
        document.getElementById("fix_line2").innerHTML="打开阀门65#";
        document.getElementById("fix_line3").innerHTML="关闭阀门63#";
        document.getElementById("fix_line4").innerHTML="关闭阀门15#";
        document.getElementById("fix_line5").innerHTML="关闭阀门69#";
        document.getElementById("fix_line6").innerHTML="打开东侧池排水泵";

        setShow();

    }

    function  fix_hh_left(){
        clearAll();
        document.getElementById("fix_head").innerHTML="现有混合井西侧配合方案";
        document.getElementById("name_HHJ1").style.color="#8dd9ff";
        document.getElementById("name_HHJ1").style.background="rgba(255,0,0,0.7)";
        document.getElementById("nextPage").style.display="block";
        document.getElementById("lastPage").style.display="block";

        setOpenDgree("FM062");
        setOpenDgree("FM045");
        setOpenDgree("FM068");

        document.getElementById("fix_line1").innerHTML="关闭阀门62#";
        document.getElementById("fix_line2").innerHTML="打开阀门63#";
        document.getElementById("fix_line3").innerHTML="打开阀门15#";
        document.getElementById("fix_line4").innerHTML="打开阀门69#";
        document.getElementById("fix_line5").innerHTML="关闭阀门45#";
        document.getElementById("fix_line6").innerHTML="打开西侧池排水泵";

        setShow();

    }

    function fix_hh_new(){
        clearAll();
        document.getElementById("fix_head").innerHTML="#新建混合井维修配合方案";
        document.getElementById("name_HHJ2").style.color="#8dd9ff";
        document.getElementById("name_HHJ2").style.background="rgba(255,0,0,0.7)";
        setOpenDgree("FM065");
        setOpenDgree("FM066");
        setOpenDgree("FM068");

        document.getElementById("fix_line1").innerHTML="打开阀门62#";
        document.getElementById("fix_line2").innerHTML="打开阀门63#";
        document.getElementById("fix_line3").innerHTML="关闭阀门65#";
        document.getElementById("fix_line4").innerHTML="关闭阀门66#";
        document.getElementById("fix_line5").innerHTML="打开新建混合井排水泵";
        setShow();
    }

    function fix_jjc1(){
        clearAll();
        document.getElementById("fix_head").innerHTML="#1机加池维修闸门配合方案";
        document.getElementById("name_JJC1").style.color="#8dd9ff";
        document.getElementById("name_JJC1").style.background="rgba(255,0,0,0.7)";


        setOpenDgree("FM062");
        setOpenDgree("FM045");
        setOpenDgree("FM068");
        setOpenDgree("FM014");

        document.getElementById("fix_line1").innerHTML="缓慢关闭阀门62#";
        document.getElementById("fix_line2").innerHTML="适量调整阀门65#";
        document.getElementById("fix_line3").innerHTML="适量调整阀门63#";
        document.getElementById("fix_line4").innerHTML="关闭阀门45#";
        document.getElementById("fix_line5").innerHTML="关闭阀门14#";
        document.getElementById("fix_line6").innerHTML="打开1#机加池排水泵";

        setShow();
    }

    function fix_jjc2(){
        clearAll();
        document.getElementById("fix_head").innerHTML="#2机加池维修闸门配合方案";
        document.getElementById("name_JJC2").style.color="#8dd9ff";
        document.getElementById("name_JJC2").style.background="rgba(255,0,0,0.7)";

        setOpenDgree("FM015");
        setOpenDgree("FM069");
        setOpenDgree("FM068");
        setOpenDgree("FM063");
//        setOpenDgree("FM014");

        document.getElementById("fix_line1").innerHTML="打开阀门65#";
        document.getElementById("fix_line2").innerHTML="打开阀门62#";
        document.getElementById("fix_line3").innerHTML="打开阀门45#";
        document.getElementById("fix_line4").innerHTML="打开阀门66#";
        document.getElementById("fix_line5").innerHTML="关闭阀门63#";
        document.getElementById("fix_line6").innerHTML="关闭阀门69#";
        document.getElementById("fix_line7").innerHTML="关闭阀门15#";
        document.getElementById("fix_line8").innerHTML="打开2#机加池排水泵";

        setShow();
    }

    function fix_jjc3(){
        clearAll();
        document.getElementById("fix_head").innerHTML="#3机加池维修闸门配合方案";
        document.getElementById("name_JJC3").style.color="#8dd9ff";
        document.getElementById("name_JJC3").style.background="rgba(255,0,0,0.7)";
        setOpenDgree("FM065");
        setOpenDgree("FM066");
        setOpenDgree("FM068");
        setOpenDgree("FM067");
//        setOpenDgree("FM014");

        document.getElementById("fix_line1").innerHTML="打开阀门63#";
        document.getElementById("fix_line2").innerHTML="打开阀门62#";
        document.getElementById("fix_line3").innerHTML="打开阀门45#";
        document.getElementById("fix_line4").innerHTML="打开阀门69#";
        document.getElementById("fix_line5").innerHTML="关闭阀门65#";
        document.getElementById("fix_line6").innerHTML="关闭阀门66#";
        document.getElementById("fix_line7").innerHTML="关闭阀门67#";
        document.getElementById("fix_line8").innerHTML="打开3#机加池排水泵";

        setShow();
    }
    function fix_hx_right(){
        clearAll();
        document.getElementById("fix_head").innerHTML="东侧虹吸滤池闸门配合方案";
        document.getElementById("name_HX").style.color="#8dd9ff";
        document.getElementById("name_HX").style.background="rgba(255,0,0,0.7)";
        document.getElementById("nextPage").style.display="block";
        document.getElementById("lastPage").style.display="block";
        setOpenDgree("FM016");
        setOpenDgree("FM018");
//            setOpenDgree("FM068");
        setOpenDgree("FM068");
        setOpenDgree("FM019");

        document.getElementById("fix_line1").innerHTML="关闭阀门16#";
        document.getElementById("fix_line2").innerHTML="关闭阀门9#~14#小虹吸";
        document.getElementById("fix_line3").innerHTML="关闭阀门18#";
        document.getElementById("fix_line4").innerHTML="打开9#~14#滤池排空闸";
        document.getElementById("fix_line5").innerHTML="断开东西滤池清水联通闸";
        document.getElementById("fix_line6").innerHTML="关闭阀门19#";
//            document.getElementById("fix_line7").innerHTML="打开阀门45#";

        setShow();
    }
    function  fix_hx_left(){
        clearAll();
        document.getElementById("fix_head").innerHTML="西侧虹吸滤池闸门配合方案";
        document.getElementById("name_HX").style.color="#8dd9ff";
        document.getElementById("name_HX").style.background="rgba(255,0,0,0.7)";
        document.getElementById("nextPage").style.display="block";
        document.getElementById("lastPage").style.display="block";
        setOpenDgree("FM014");
        setOpenDgree("FM017");
        setOpenDgree("FM019");
        setOpenDgree("FM068");

        document.getElementById("fix_line1").innerHTML="关闭阀门14#";
        document.getElementById("fix_line2").innerHTML="关闭阀门1#~8#小虹吸";
        document.getElementById("fix_line3").innerHTML="关闭阀门17#";
        document.getElementById("fix_line4").innerHTML="打开1#~8#滤池排空闸";
        document.getElementById("fix_line5").innerHTML="断开东西滤池清水联通闸";
        document.getElementById("fix_line6").innerHTML="关闭阀门19#";

        setShow();

    }

    function fix_vl(){
        clearAll();
        document.getElementById("fix_head").innerHTML="V型滤池维修闸门配合方案";
        document.getElementById("name_VL").style.color="#8dd9ff";
        document.getElementById("name_VL").style.background="rgba(255,0,0,0.7)";

        setOpenDgree("FM052");
        setOpenDgree("FM020");
         setOpenDgree("FM056");
//        setOpenDgree("FM014");

        document.getElementById("fix_line1").innerHTML="打开阀门68#";
        document.getElementById("fix_line2").innerHTML="关闭1#~5#滤格控制阀";
        document.getElementById("fix_line3").innerHTML="关闭阀门52#";
        document.getElementById("fix_line4").innerHTML="关闭阀门20#";
        document.getElementById("fix_line5").innerHTML="关闭阀门56#";

        setShow();
    }
    function fix_cy_right(){
        clearAll();
        document.getElementById("fix_head").innerHTML="东侧臭氧池闸门配合方案";
        document.getElementById("name_CY").style.color="#8dd9ff";
        document.getElementById("name_CY").style.background="rgba(255,0,0,0.7)";
        document.getElementById("nextPage").style.display="block";
        document.getElementById("lastPage").style.display="block";
        setOpenDgree("FM053");
        setOpenDgree("FM058");
        setOpenDgree("FM056");
        setOpenDgree("FM057");
//        setOpenDgree("FM023");
        setOpenDgree("FM021");

        document.getElementById("fix_line1").innerHTML="打开阀门22#";
        document.getElementById("fix_line2").innerHTML="打开阀门24#";
        document.getElementById("fix_line3").innerHTML="关闭阀门53#";
        document.getElementById("fix_line4").innerHTML="关闭阀门58#";
        document.getElementById("fix_line5").innerHTML="关闭阀门57#";
        document.getElementById("fix_line6").innerHTML="关闭阀门56#";
//            document.getElementById("fix_line7").innerHTML="打开阀门45#";

        setShow();
    }
    function  fix_cy_left(){
        clearAll();
        document.getElementById("fix_head").innerHTML="西侧臭氧池闸门配合方案";
        document.getElementById("name_CY").style.color="#8dd9ff";
        document.getElementById("name_CY").style.background="rgba(255,0,0,0.7)";
        document.getElementById("nextPage").style.display="block";
        document.getElementById("lastPage").style.display="block";
        setOpenDgree("FM022");
        setOpenDgree("FM054");
        setOpenDgree("FM058");
        setOpenDgree("FM059");
        setOpenDgree("FM056");

        document.getElementById("fix_line1").innerHTML="打开阀门21#";
        document.getElementById("fix_line2").innerHTML="打开阀门23#";
        document.getElementById("fix_line3").innerHTML="关闭阀门54#";
        document.getElementById("fix_line4").innerHTML="关闭阀门58#";
        document.getElementById("fix_line5").innerHTML="关闭阀门59#";
        document.getElementById("fix_line6").innerHTML="关闭阀门56#";

        setShow();

    }
    function fix_tc_old(){
        clearAll();
        document.getElementById("fix_head").innerHTML="现有碳池闸门配合方案";
        document.getElementById("name_TC").style.color="#8dd9ff";
        document.getElementById("name_TC").style.background="rgba(255,0,0,0.7)";
        setOpenDgree("FM056");
        setOpenDgree("FM057");
        setOpenDgree("FM044");
        setOpenDgree("FM022");
        setOpenDgree("FM024");
        setOpenDgree("FM021");


        document.getElementById("fix_line1").innerHTML="打开阀门20#";
        document.getElementById("fix_line2").innerHTML="打开阀门52#";
        document.getElementById("fix_line3").innerHTML="关闭阀门56#";
        document.getElementById("fix_line4").innerHTML="关闭阀门57#";
        document.getElementById("fix_line5").innerHTML="打开阀门58#";
        document.getElementById("fix_line6").innerHTML="打开阀门59#";
        document.getElementById("fix_line7").innerHTML="打开阀门55#";
        document.getElementById("fix_line8").innerHTML="关闭阀门44#";

        setShow();

//            document.getElementById("fix_line7").innerHTML="打开阀门45#";
    }
    function fix_tc_new(){
        clearAll();
        document.getElementById("fix_head").innerHTML="新建碳池闸门配合方案";
        document.getElementById("name_TC1").style.color="#8dd9ff";
        document.getElementById("name_TC1").style.background="rgba(255,0,0,0.7)";
        setOpenDgree("FM056");
        setOpenDgree("FM059");
        setOpenDgree("FM055");
        setOpenDgree("FM022");
        setOpenDgree("FM024");
        setOpenDgree("FM021");


        document.getElementById("fix_line1").innerHTML="打开阀门20#";
        document.getElementById("fix_line2").innerHTML="打开阀门52#";
        document.getElementById("fix_line3").innerHTML="关闭阀门56#";
        document.getElementById("fix_line4").innerHTML="打开阀门57#";
        document.getElementById("fix_line5").innerHTML="打开阀门58#";
        document.getElementById("fix_line6").innerHTML="关闭阀门59#";
        document.getElementById("fix_line7").innerHTML="关闭阀门55#";
        document.getElementById("fix_line8").innerHTML="打开阀门44#";

        setShow();

//            document.getElementById("fix_line7").innerHTML="打开阀门45#";
    }

    function fix_qsc1(){
        clearAll();
        document.getElementById("fix_head").innerHTML="1#清水池施工空池倒泵方案";
        document.getElementById("name_QSC2").style.color="#8dd9ff";
        document.getElementById("name_QSC2").style.background="rgba(255,0,0,0.7)";
        setOpenDgree("FM047");
        setOpenDgree("FM048");
        
        document.getElementById("fix_line1").innerHTML="关闭东、西池间连通闸27#";
        document.getElementById("fix_line2").innerHTML="关闭清水池出水闸29#";
        document.getElementById("fix_line3").innerHTML="5#配水泵倒成4#";
        document.getElementById("fix_line4").innerHTML="7#配水泵倒成2#";
        document.getElementById("fix_line5").innerHTML="断管施工";
        document.getElementById("fix_line6").innerHTML="开启1/连通闸27#";
        document.getElementById("fix_line7").innerHTML="来水降至1800m3/h";
        document.getElementById("fix_line8").innerHTML="开启连通闸27#";
        document.getElementById("fix_line9").innerHTML="开启清水池出水闸29#";
        document.getElementById("fix_line10").innerHTML="来水涨至1950m3/h";

        setShow();

//            document.getElementById("fix_line7").innerHTML="打开阀门45#";
    }


    function fix_qsc2(){
        clearAll();
        document.getElementById("fix_head").innerHTML="2#清水池施工空池倒泵方案";
        document.getElementById("name_QSC3").style.color="#8dd9ff";
        document.getElementById("name_QSC3").style.background="rgba(255,0,0,0.7)";
        setOpenDgree("FM051");
        
        document.getElementById("fix_line1").innerHTML="关闭东、西池间连通闸27#";
        document.getElementById("fix_line2").innerHTML="关闭清水池出水闸30#";
        document.getElementById("fix_line3").innerHTML="__#配水泵倒成__#";
        document.getElementById("fix_line4").innerHTML="断管施工";
        document.getElementById("fix_line5").innerHTML="开启1/连通闸27#";
        document.getElementById("fix_line6").innerHTML="来水降至__m3/h";
        document.getElementById("fix_line7").innerHTML="开启连通闸27";
        document.getElementById("fix_line8").innerHTML="开启清水池出水闸30#";
        document.getElementById("fix_line9").innerHTML="来水涨至__m3/h";

        setShow();

//            document.getElementById("fix_line7").innerHTML="打开阀门45#";
    }

    function  fix_qsc3(){
        clearAll();
        document.getElementById("fix_head").innerHTML="#3清水池维修闸门配合方案";
        document.getElementById("name_QSC1").style.color="#8dd9ff";
        document.getElementById("name_QSC1").style.background="rgba(255,0,0,0.7)";
        setOpenDgree("FM046");
        setOpenDgree("FM047");
        setOpenDgree("FM048");

        document.getElementById("fix_line1").innerHTML="关闭阀门46#";
        document.getElementById("fix_line2").innerHTML="关闭阀门47#";
        document.getElementById("fix_line3").innerHTML="关闭阀门48#";
        document.getElementById("fix_line4").innerHTML="打开3#清水池抽水泵";

        setShow();

    }

    function  fix_qsc4(){
        clearAll();
        document.getElementById("fix_head").innerHTML="#4清水池维修闸门配合方案";
        document.getElementById("name_QSC4").style.color="#8dd9ff";
        document.getElementById("name_QSC4").style.background="rgba(255,0,0,0.7)";
        setOpenDgree("FM049");
        setOpenDgree("FM051");

        document.getElementById("fix_line1").innerHTML="关闭阀门49#";
        document.getElementById("fix_line2").innerHTML="关闭阀门51#";
        document.getElementById("fix_line3").innerHTML="打开4#清水池抽水泵";

        setShow();

    }

    $("#fix_head").bind("mouseenter", function () {
        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//        canvas.redraw();
    }).bind("mouseleave", function () {
        canvas.mouse.cursor("default");
//        this.shadow="0 0 0px #eee";
//        canvas.redraw();
    });

    $("#name_QS").click(function(){
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
            setShow();
        }
    });
    $("#name_JJC1").click(function(){
        if(confirm("是否将“#1机加池”设置为维修状态？")){
            fix_jjc1();
            document.getElementById("nextPage").onclick="";
            document.getElementById("lastPage").onclick="";
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
            setShow();
        }
    });
    $("#name_JJC2").click(function(){
        if(confirm("是否将“#2机加池”设置为维修状态？")){
            fix_jjc2();
            document.getElementById("nextPage").onclick="";
            document.getElementById("lastPage").onclick="";
            document.getElementById("export").href="download/fix-jjc2.docx";
            window.setTimeout(function(){
                decay(7,1);
                decay(11,1);
                decay(12,1);
                decay(13,1);
                decay(14,1);
             },100);
            setShow();
        }
    });
    $("#name_JJC3").click(function(){
        if(confirm("是否将“#3机加池”设置为维修状态？")){
            fix_jjc3();
            document.getElementById("nextPage").onclick="";
            document.getElementById("lastPage").onclick="";
            document.getElementById("export").href="download/fix-jjc3.docx";
            window.setTimeout(function(){              
            	decay(5,1);//GD04
            	decay(8,1);//GD07
            	decay(15,1);//GD12
            	decay(18,1);
             },100);
            setShow();
        }
    });
    $("#name_VL").click(function(){
        if(confirm("是否将“V型滤池设置为维修状态？”")){
            fix_vl();
            document.getElementById("nextPage").onclick="";
            document.getElementById("lastPage").onclick="";
            document.getElementById("export").href="download/fix-vl.docx";
            window.setTimeout(function(){
            	decay(15,1);
            	decay(18,1);//GD15
            	canvas.children[38].fill=color_GD;
            },100);
            setShow();
        }
    });
    $("#name_TC").click(function(){
        if(confirm("是否将“现有活性炭池”设置为维修状态？")){
            fix_tc_old();
            document.getElementById("nextPage").onclick="";
            document.getElementById("lastPage").onclick="";
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
            document.getElementById("nextPage").onclick="";
            document.getElementById("lastPage").onclick="";
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
            setShow();
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
            setShow();
        }
    });
    $("#name_HHJ2").click(function(){
        if(confirm("是否将“新混合井”设置为维修状态？")){
            fix_hh_new();
            document.getElementById("nextPage").onclick="";
            document.getElementById("lastPage").onclick="";
            document.getElementById("export").href="download/fix-hh-new.docx";
            window.setTimeout(function(){              
            	decay(5,1);//GD04
            	decay(8,1);//GD07
            	decay(15,1);
            	decay(18,1);
             },100);
        }
    });
    $("#name_HX").click(function(){
        if(confirm("是否将“虹吸滤池”设置为维修状态？")){

            fix_hx_right();
            document.getElementById("nextPage").onclick=function(){
                fix_hx_left();
                window.setTimeout(function(){              
                	decay(16,1);//GD04
                	decay(17,1);//GD07
                	decay(9,1);//GD141
                	decay(10,1);
                	decay(30,1);
                	decay(31,1);
                 },100);
            };
            document.getElementById("lastPage").onclick=function(){
                fix_hx_right();
                window.setTimeout(function(){              
                	decay(12,1);//GD04
                	decay(14,1);//GD07
                	decay(17,1);//GD141
                	decay(34,1);
                 },100);
            };
            document.getElementById("export").href="download/fix-hx.doc";
            window.setTimeout(function(){              
            	decay(12,1);//GD04
            	decay(14,1);//GD07
            	decay(17,1);//GD141
            	decay(34,1);
             },100);
            setShow();

        }
    });

    $("#name_QSC1").click(function(){
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
            setShow();
        }
    }); //???
    $("#name_QSC2").click(function(){
        if(confirm("是否将“#1清水池”设置为维修状态？")){
            fix_qsc1();
            document.getElementById("nextPage").onclick=function(){
            };
            document.getElementById("lastPage").onclick=function(){
            };
            document.getElementById("export").href="download/fix-qsc1.doc";
            window.setTimeout(function(){              
            	decay(25,1);//GD21
             },100);
            setShow();

        }
    });
    $("#name_QSC3").click(function(){
        if(confirm("是否将“#2清水池”设置为维修状态？")){
            fix_qsc2();
            document.getElementById("nextPage").onclick=function(){
            };
            document.getElementById("lastPage").onclick=function(){
            };
            document.getElementById("export").href="download/fix-qsc2.doc";         
            window.setTimeout(function(){              
            	decay(28,1);//GD24
             },100);
            setShow();
        }
    });
    $("#name_QSC4").click(function(){
        if(confirm("是否将“#4清水池”设置为维修状态？")){
            fix_qsc4();
            document.getElementById("nextPage").onclick=function(){
            };
            document.getElementById("lastPage").onclick=function(){
            };
            document.getElementById("export").href="download/fix-qsc4.docx";
            window.setTimeout(function(){              
            	decay(27,1);
            	decay(28,1);//GD24
            	canvas.children[39].fill=color_GD;
             },100);
            setShow();
        }
    });
    
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
    function clearAll(){
    	canvas.children[2].fill=color_GD;
    	canvas.children[3].fill=color_GD;
    	canvas.children[4].fill=color_GD;
    	canvas.children[5].fill=color_GD;
    	canvas.children[6].fill=color_GD;
    	canvas.children[7].fill=color_GD;
    	canvas.children[8].fill=color_GD;
    	canvas.children[9].fill=color_GD;
        canvas.children[10].fill=color_GD;
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

        document.getElementById("fix_head").innerHTML="请点击需要维修的构筑物";
        document.getElementById("name_QS").style.color="#283a45";
        document.getElementById("name_JJC1").style.color="#283a45";
        document.getElementById("name_HHJ1").style.color="#283a45";
        document.getElementById("name_HHJ2").style.color="#283a45";
        document.getElementById("name_JJC2").style.color="#283a45";
        document.getElementById("name_JJC3").style.color="#283a45";
        document.getElementById("name_HX").style.color="#283a45";
        document.getElementById("name_VL").style.color="#283a45";
        document.getElementById("name_CY").style.color="#283a45";
        document.getElementById("name_TC").style.color="#283a45";
        document.getElementById("name_TC1").style.color="#283a45";
        document.getElementById("name_QSC1").style.color="#283a45";
        document.getElementById("name_QSC2").style.color="#283a45";
        document.getElementById("name_QSC3").style.color="#283a45";
        document.getElementById("name_QSC4").style.color=" #283a45";
        document.getElementById("name_QS").style.background="rgba(255,255,255,0.5)";
        document.getElementById("name_JJC1").style.background="rgba(255,255,255,0.5)";
        document.getElementById("name_HHJ1").style.background="rgba(255,255,255,0.5)";
        document.getElementById("name_HHJ2").style.background="rgba(255,255,255,0.5)";
        document.getElementById("name_JJC2").style.background="rgba(255,255,255,0.5)";
        document.getElementById("name_JJC3").style.background="rgba(255,255,255,0.5)";
        document.getElementById("name_HX").style.background="rgba(255,255,255,0.5)";
        document.getElementById("name_VL").style.background="rgba(255,255,255,0.5)";
        document.getElementById("name_CY").style.background="rgba(255,255,255,0.5)";
        document.getElementById("name_TC").style.background="rgba(255,255,255,0.5)";
        document.getElementById("name_TC1").style.background="rgba(255,255,255,0.5)";
        document.getElementById("name_QSC1").style.background="rgba(255,255,255,0.5)";
        document.getElementById("name_QSC2").style.background="rgba(255,255,255,0.5)";
        document.getElementById("name_QSC3").style.background="rgba(255,255,255,0.5)";
        document.getElementById("name_QSC4").style.background="rgba(255,255,255,0.5)";
    }

});
