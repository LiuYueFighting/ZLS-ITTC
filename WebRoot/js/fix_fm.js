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
    canvas.addChild(bg);

    //管道的公用变量，包括颜色速度的设置
    var speed_all=1.5,
    	speed_GD=2,
        width_all=20,
        color_GD="#007fff",
        color_GD_new="blue",
        lineHeight_all=10;

    var GD01=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 707 ,y_cell: 96},
            {x_cell: 707 ,y_cell: 225}          
        ],
        state:1,
        speed:speed_GD,
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
            {x_cell: 989, y_cell: 345}
        ],
        state:1,
        GDwidth:width_all,
        speed:6,
        color:color_GD
    });//2
    var GD0102=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 989 ,y_cell: 345},
            {x_cell: 989, y_cell: 355}
        ],
        state:1,
        GDwidth:width_all,
        speed:0.3,
        color:color_GD
    });//2
    var GD02=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 747 ,y_cell: 98},
            {x_cell: 747 ,y_cell: 221},
            {x_cell: 775 ,y_cell: 240},
            {x_cell: 1019 ,y_cell: 240},
            {x_cell: 1019 , y_cell: 256}
        ],
        state:1,
        GDwidth:width_all,
        speed:speed_GD,
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
        speed:speed_GD,
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
        speed:speed_GD,
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
        speed:speed_GD,
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
        speed:speed_GD,
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
        speed:speed_GD,
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
        speed:speed_GD,
        color:color_GD
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
        speed:speed_GD,
        color:color_GD
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
        speed:speed_GD,
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
        speed:speed_GD,
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
        speed:speed_GD,
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
        speed:speed_GD,
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
        speed:speed_GD,
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
        speed:speed_GD,
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
        speed:speed_GD,
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
        speed:speed_GD,
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
        speed:speed_GD,
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
        speed:speed_GD,
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
        speed:speed_GD,
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
        speed:speed_GD,
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
        speed:speed_GD,
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
        speed:speed_GD,
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
        speed:speed_GD,
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
        speed:speed_GD,
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
        speed:speed_GD,
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
        speed:speed_GD,
        color:color_GD
    });//28
    var GD25=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 993 ,y_cell: 296},
            {x_cell: 1018 ,y_cell: 296}
        ],
        state:1,
        GDwidth:width_all,
        speed:0.3,
        color:color_GD
    });
    var GD30=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 881 ,y_cell: 570},
            {x_cell: 881 ,y_cell: 635},
        ],
        state:1,
        GDwidth:width_all,
        speed:speed_GD,
        color:color_GD
    });//34   
    var GD36=createGD1({
        parent:canvas,
        cells:[
            {x_cell: 885 ,y_cell: 605},
            {x_cell: 848 ,y_cell: 605}
        ],
        state:1,
        GDwidth:width_all,
        speed:speed_GD,
        color:color_GD
        
    });//40

    var img1=canvas.display.image({
        x:692,
        y:58,
        image:"image/main/qs.png"
    });
    canvas.addChild(img1);
//    img1.bind("click",function(){
//       // window.location.href="QS.jsp";
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
//      //  window.location.href="QS.jsp";
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
//       // window.location.href="JJC.jsp";
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
//        },100);
//    });

    var img21=img2.clone({
        x:1049,
        y:340
    });
    canvas.addChild(img21);
//    img21.bind("click",function(){
//     //   window.location.href="JJC.jsp";
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
//       // window.location.href="JJC.jsp";
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
    //V?????????
    var img3=canvas.display.image({
        x:847,
        y:665,
        image:"image/main/6.png"
    });
    canvas.addChild(img3);
//    img3.bind("click",function(){
//      //  window.location.href="VL.jsp";
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

    //?????????
    var img4=canvas.display.image({
        x:967,
        y:352,
        image:"image/main/hhj.png"
    });
    canvas.addChild(img4);
//    img4.bind("click",function(){
//   //     window.location.href="hhj.jsp";
//    }).bind("mouseenter",function(){
//        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//        //$("#name_HHJ").css("display","inline");
//    }).bind("mouseleave",function(){
//        //$("#name_HHJ").css("display","none");
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
//    //    window.location.href="hhj.jsp";
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
    //???????
    var img5=canvas.display.image({
        x:810,
        y:529,
        image:"image/main/hx.png"
    });
    canvas.addChild(img5);
//    img5.bind("click",function(){
//     //   window.location.href="hx.jsp";
//    }).bind("mouseenter",function(){
//        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//        //$("#name_HX").css("display","inline");
//    }).bind("mouseleave",function(){
//        //$("#name_HX").css("display","none");
//        this.shadow="0 0 0px #eee";
//        canvas.mouse.cursor("default");
//    }).bind("flash",function(){
//
//        this.unbind("flash");
//        window.setTimeout(function(){
//            GD13.paused=1;
//            //GD14.paused=1;
//            GD141.paused=1;
//        },100);
//
//    });

    var img6=canvas.display.image({
        x:284,
        y:435,
        image:"image/main/qsc1.png"
    });
    canvas.addChild(img6);
//    img6.bind("click",function(){
//     //   window.location.href="qsc.jsp";
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
//      //  window.location.href="qsc.jsp";
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
//      //  window.location.href="qsc.jsp";
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
//      //  window.location.href="qsc.jsp";
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
//      //  window.location.href="hxt.jsp";
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
//    //    window.location.href="hxt.jsp";
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
//      //  window.location.href="cy.jsp";
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
//       // window.location.href="cy.jsp";
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


    canvas.setLoop(function () {
        GD01.advance();
        GD0101.advance();
        GD0102.advance();
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
        GD25.advance();
        GD30.advance();
        GD36.advance();
        
//        if((GD0101.state==1)&&(GD25.state==1)){
//        	blinTwice("#step_3");
//        }
//        if((GD11.state==0)&&(GD1001.state==0)){        	
//        	setFMColorRed("FM018");
//        	GD141.state=2;
//        }
//        if((GD11.state==1)&&(GD1001.state==1)){        	
//        	GD141.state=3;
//        }
        
//        if(GD01.full==1){
//            GD0101.paused=1;
//        }
//        if(GD02.full==1){
//            GD03.paused=1;
//            GD04.paused=1;
//        }
//        if(GD04.full==1){
//            img4.trigger("flash");
//            img41.trigger("flash");
//        }
//        if(GD07.full==1){
//            img2.trigger("flash");
//            img21.trigger("flash");
//            img22.trigger("flash");
//        }
//        if(GD09.full==1)
//        {
//            img5.trigger("flash");
//            img3.trigger("flash");
//        }
//        if(GD10.full==1){
//            GD1001.paused=1;
//            GD1002.paused=1;
//            GD11.paused=1;
//        }
//        if(GD15.full==1){
//            img9.trigger("flash");
//        }
//        if(GD17.full==1){
//            img8.trigger("flash");
//            img81.trigger("flash");
//        }
//        if(GD19.full==1){
//            img6.trigger("flash");
//
//        }
//        if(GD21.full==1){
//            img61.trigger("flash");
//        }
//        if(GD23.full==1){
//            img63.trigger("flash");
//        }
//        if(GD24.full==1){
//            img62.trigger("flash");
//        }
        canvas.redraw();
    });
//    GD01.paused=1;
//    GD02.paused=1;
//    GD22.paused=1;
    canvas.timeline.start();


    function restart(){
        canvas.timeline.start();
    }

    function init(){
        GD01.init();
        GD02.init();
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
        GD25.init();
        GD30.init();
        GD36.init();
        
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

    function clearAll(){
    	GD0101.state=1;
    	GD0102.state=1;
    	GD05.state=1;
    	GD25.state=1;
//    	GD11.state=3;
//    	GD1001.state=3;

//        canvas.children[2].fill=color_GD;
//        canvas.children[14].fill=color_GD;
//        canvas.children[12].fill=color_GD;
//        canvas.children[17].fill=color_GD;
//        canvas.children[18].fill=color_GD;
//        canvas.children[19].fill="rgba(1,1,1,0)";
        canvas.redraw();
      
        //恢复阀门的默认颜色
        setDefaultFMColor();
        //只显示重要的阀门和标签
        $(".fm_default_hide").attr("style","display:none;");
        $(".fm_default_green").attr("style","display:block;");
        $(".fm_default_red").attr("style","display:block;");
        $(".fm_tag").removeClass("FMStyle");
        
        //清空单元格的内容
		for (i=1;i<7;i++){
	        $("#step_" + i).html("&nbsp;");
	        $("#step_" + i + "_result").html("&nbsp;");
		}
		
		//重置面板提示的内容
		$("#fix_head").html("请点击需要维修的阀门");
		$("#init_state").html("初始状态");
		$("#init_stat").html("全厂正常运行");
		
		$(".table_content").css('background','#ffffff');
        $("#scheme").html("&nbsp;");
        $("#scheme_extra").html("&nbsp;");
        $("#export").html("&nbsp;");
        $("#reset").html("&nbsp;");
        document.getElementById("export").href="#";
        
		//恢复构筑物及标签的颜色
		$(".name_ob").css('color','#283a45');
		$(".name_ob").attr("style","background:transparent;text-decoration: none;");

        $(".hiden").hide();
    }
    function restore_fm062(){
        
        $("#fix_head").html("62#阀门维修配合方案");
        
        $("#init_stat").html('062#阀门恢复<span class="caret"></span>');
        document.getElementById("export").href="download/FM_ 62_RECOVER.docx";
 		

 		$(".table_content").css('background','#ffffff');

        $("#step_1").html("1&nbsp;&nbsp;打开旧混合井西侧搅拌浆");
        $("#step_2").html("2&nbsp;&nbsp;打开064#阀门");
        $("#step_3").html("3&nbsp;&nbsp;打开09#阀门");
        $("#step_4").html("&nbsp;");
 		
        $('.table_content').unbind();
		//动画队列
    	function next(delay){
			setTimeout(function(){
	    		$(document).dequeue("restore_fm062_queue");
	    	},delay);
		}
    	
    	var restore_fm062_queue = [
			function() {
				$("#step_1").css('background','rgba(194,215,245,0.5)');
				next(1000);
			},
			function() {
				setFMColorGreen("FM062");
				next(1000);
			},
			function() {
				$("#step_2").css('background','rgba(194,215,245,0.5)');
				next(1000);
			},
			function(){
				setFMColorGreen("FM064");
				next(1000);
			},
			function() {
				$("#step_3").css('background','rgba(194,215,245,0.5)');
				next(1000);
			},
			function() {
				setFMColorGreen("FM09");
				next(1000);
			},
			function() {
				GD0101.state = 3;
				$(document).on('overflow', function(){
					$(document).off('overflow');
					next(1000);
				});
			},
			function() {
				GD25.state = 3;
				$(document).on('overflow', function(){
					$(document).off('overflow');
					next(1000);
				});
			},
			function() {
				GD0102.state = 3;
				$(document).on('overflow', function(){
					$(document).off('overflow');
					next(1000);
				});
			},
			function() {
				GD05.state = 3;
			}
        ];
    	$(document).queue("restore_fm062_queue",restore_fm062_queue);
    	initReset();
    	
    	function initReset(){
    		//Start of animation,reset all animation
    		$(document).off('overflow');
    		
    		setFMColorRed("FM09");
    		setFMColorRed("FM064");
    		document.getElementById("FM062").src="image/y1.png";
    		
    		$(".table_content").css("background","#ffffff");
    		
    		GD0101.state = 0;
    		GD25.state = 0;
    		GD0102.state = 0;
    		GD05.state = 0;
    		$(document).dequeue("restore_fm062_queue");
    	}
    	
    	$('.table_content').unbind();
    	$('#step_1').click(function(){
    		$(document).clearQueue("restore_fm062_queue");
    		$(document).queue("restore_fm062_queue",restore_fm062_queue);
    		initReset();
    	});
    	
    	$('#step_2').click(function(){
    		$(document).clearQueue("restore_fm062_queue");
    		var tempQueue = restore_fm062_queue.slice(0);
    		tempQueue.splice(0,2,function(){
    			$("#step_1").css('background','rgba(194,215,245,0.5)');
    			setFMColorGreen("FM062");
				setTimeout(function(){
					$(document).dequeue("restore_fm062_queue");
				},1000);
    		});
    		$(document).queue("restore_fm062_queue",tempQueue);
    		initReset();
    	});
    	
    	$('#step_3').click(function(){
    		$(document).clearQueue("restore_fm062_queue");
    		var tempQueue = restore_fm062_queue.slice(0);
    		tempQueue.splice(0,4,function(){
    			$("#step_1").css('background','rgba(194,215,245,0.5)');
    			setFMColorGreen("FM062");
    			$("#step_2").css('background','rgba(194,215,245,0.5)');
    			setFMColorGreen("FM064");
				setTimeout(function(){
					$(document).dequeue("restore_fm062_queue");
				},1000);
    		});
    		$(document).queue("restore_fm062_queue",tempQueue);
    		initReset();
    	});
        
 		$("div.hiden").show();
    }
    function fix_fm062(){
        $("#fix_head").html("62#阀门维修配合方案");
        document.getElementById("FM062").src="image/y1.png";
        
    	$("#init_state").text("状态");
    	$("#init_stat").html('062#阀门维修<span class="caret"></span>');

    	$(".table_content").css('background','#ffffff');
        $("#step_1").html("1&nbsp;&nbsp;关闭09#阀门");
        $("#step_2").html("2&nbsp;&nbsp;关闭064#阀门");
        $("#step_3").html("3&nbsp;&nbsp;停旧混合井西侧搅拌浆");
        $("#step_4").html("4&nbsp;&nbsp;1#机加池停止进水");
		
        $("#export").text("生成方案");
		document.getElementById("export").href="download/FM_ 62_FIX.docx";
		$("#reset").text("重置");
		$("#scheme").text("62#阀门恢复");
		
		//动画队列
		$(document).off('drain');
		
    	var fix_fm062_queue = [
			function() {
				$("#step_1").css('background','rgba(194,215,245,0.5)');
				setTimeout(function(){
		    		$(document).dequeue("fix_fm062_queue");
		    	},1000);
			},
			function() {
				setFMColorRed("FM09");
		    	setTimeout(function(){
		    		$(document).dequeue("fix_fm062_queue");
		    	},1000);
			},
			function() {
		        GD0101.state = 2;
				$(document).on('drain', function(){
					setTimeout(function(){
						$(document).off('drain');
						$(document).dequeue("fix_fm062_queue");
					},1000);
				});
			},
			function() {
				$("#step_2").css('background','rgba(194,215,245,0.5)');
		    	setTimeout(function(){
		    		$(document).dequeue("fix_fm062_queue");
		    	},1000);
			},
			function(){
				setFMColorRed("FM064");
		    	setTimeout(function(){
		    		$(document).dequeue("fix_fm062_queue");
		    	},1000);
			},
			function() {
				GD25.state = 2;
				
				$(document).on('drain', function(){
					setTimeout(function(){
						$(document).off('drain');
						$(document).dequeue("fix_fm062_queue");
					},1000);
				});
			},
			function() {
				$("#step_3").css('background','rgba(194,215,245,0.5)');
    			setTimeout(function(){
    				$(document).dequeue("fix_fm062_queue");
    			},1000);
			},
			function() {
				GD0102.state = 2;

				$(document).on('drain', function(){
					setTimeout(function(){
						$(document).off('drain');
						$(document).dequeue("fix_fm062_queue");
					},1000);
				});
			},
			function() {
				$("#step_4").css('background','rgba(194,215,245,0.5)');
    			setTimeout(function(){
    				$(document).dequeue("fix_fm062_queue");
    			},1000);
			},
			function() {
				GD05.state = 2;
			}
        ];
    	$(document).queue("fix_fm062_queue",fix_fm062_queue);
    	$(document).dequeue("fix_fm062_queue");
    	
    	var fix_fm062_queue_mask = [
		    function(){
		    	//Start of animation,reset all animation
		    	$(document).off('drain');
		    	
		    	setFMColorGreen("FM09");
		    	setFMColorGreen("FM064");
				$(".table_content").css("background-color","#ffffff");
				GD0101.state = 1;
				GD0102.state = 1;
				GD25.state = 1;
				GD05.state = 1;
				$(document).dequeue("fix_fm062_queue");
		    },
  			function() {
  				$("#step_1").css('background','rgba(194,215,245,0.5)');
  				$(document).dequeue("fix_fm062_queue");
  			},
  			function() {
  				setFMColorRed("FM09");
	    		$(document).dequeue("fix_fm062_queue");
  			},
  			function() {
  		        GD0101.state = 0;
				$(document).dequeue("fix_fm062_queue");
  			},
  			function() {
  				$("#step_2").css('background','rgba(194,215,245,0.5)');
	    		$(document).dequeue("fix_fm062_queue");
  			},
  			function(){
  				setFMColorRed("FM064");
	    		$(document).dequeue("fix_fm062_queue");
  			},
  			function() {
  				GD25.state = 0;
				$(document).dequeue("fix_fm062_queue");
  			},
  			function() {
  				$("#step_3").css('background','rgba(194,215,245,0.5)');
  				$(document).dequeue("fix_fm062_queue");
  			},
  			function() {
  				GD0102.state = 0;
				$(document).dequeue("fix_fm062_queue");
  			},
  			function() {
  				$("#step_4").css('background','rgba(194,215,245,0.5)');
  				$(document).dequeue("fix_fm062_queue");
  			}
          ];
    	
    	$('.table_content').unbind();
    	$('#step_1').click(function(){
    		$(document).clearQueue("fix_fm062_queue");
    		var tempQueue = fix_fm062_queue.slice(0);
    		var swapQueue = fix_fm062_queue_mask.slice(0);
    		
    		var s1 = swapQueue.shift();
    		tempQueue.unshift(s1);
    			
    		$(document).queue("fix_fm062_queue",tempQueue);
        	$(document).dequeue("fix_fm062_queue");
    	});
    	
    	$('#step_2').click(function(){
    		$(document).clearQueue("fix_fm062_queue");
    		var tempQueue = fix_fm062_queue.slice(0);
    		var swapQueue = fix_fm062_queue_mask.slice(0);
    		
    		var s1 = swapQueue.shift();
    		var s2 = swapQueue.shift();
    		var s3 = swapQueue.shift();
    		var s4 = swapQueue.shift();
    		tempQueue.splice(0,3,s1,s2,s3,s4);
    			
    		$(document).queue("fix_fm062_queue",tempQueue);
        	$(document).dequeue("fix_fm062_queue");
    	});
    	
    	$('#step_3').click(function(){
    		$(document).clearQueue("fix_fm062_queue");
    		var tempQueue = fix_fm062_queue.slice(0);
    		var swapQueue = fix_fm062_queue_mask.slice(0);
    		
    		var s1 = swapQueue.shift();
    		var s2 = swapQueue.shift();
    		var s3 = swapQueue.shift();
    		var s4 = swapQueue.shift();
    		var s5 = swapQueue.shift();
    		var s6 = swapQueue.shift();
    		var s7 = swapQueue.shift();
    		tempQueue.splice(0,6,s1,s2,s3,s4,s5,s6,s7);
    			
    		$(document).queue("fix_fm062_queue",tempQueue);
        	$(document).dequeue("fix_fm062_queue");
    	});
    	
    	$('#step_4').click(function(){
    		$(document).clearQueue("fix_fm062_queue");
    		var tempQueue = fix_fm062_queue.slice(0);
    		var swapQueue = fix_fm062_queue_mask.slice(0);
    		
    		var s1 = swapQueue.shift();
    		var s2 = swapQueue.shift();
    		var s3 = swapQueue.shift();
    		var s4 = swapQueue.shift();
    		var s5 = swapQueue.shift();
    		var s6 = swapQueue.shift();
    		var s7 = swapQueue.shift();
    		var s8 = swapQueue.shift();
    		var s9 = swapQueue.shift();
    		var s10 = swapQueue.shift();
    		tempQueue.splice(0,9,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10);
    			
    		$(document).queue("fix_fm062_queue",tempQueue);
        	$(document).dequeue("fix_fm062_queue");
    	});
		
        $("div.hiden").show();
    }
//    function  fix_fm019(){
//        clearAll();
//        document.getElementById("fix_head").innerHTML="19#阀门维修配合方案";
//        document.getElementById("FM019").src="image/y1.png";
//        //setFMColorRed("FM016");
////        setFMColorRed("FM018");
////        setFMColorRed("FM020");
////        setFMColorRed("FM021");
//////        setFMColorRed("FM023");
////        setFMColorRed("FM054");
//
//        document.getElementById("step_1").innerHTML="关闭阀门16#";
//        document.getElementById("step_2").innerHTML="关闭阀门18#";
//        document.getElementById("step_3").innerHTML="关闭阀门20#";
//        document.getElementById("step_4").innerHTML="关闭阀门21#";
//        document.getElementById("step_5").innerHTML="关闭阀门23#";
//        document.getElementById("step_6").innerHTML="关闭阀门54#";
//        document.getElementById("step_1_result").innerHTML="对19#进行施工";
//
//        setShow();
//
//    }

    $("#FM062").click(function(){
//        if(confirm("是否将“62#阀门”设置为维修状态？")){
    	$.messager.confirm('确认','是否将<strong>62#阀门</strong>设置为维修状态？', function(r){
    		if(r){
    	        clearAll();
    	        hideAllFM();
    	        $(".hiden").show();
    			setFMColorGreen("FM064");
    	        setFMColorGreen("FM09");
    	        setFMColorGreen("FM062");
    	        $('#init_stat').html('选择维修方案<span class="caret"></span>');
    	        $("#WFM09").addClass("FMStyle");
    	        $("#WFM062").addClass("FMStyle");
    	        $("#WFM064").addClass("FMStyle");
    			$('#fix_scheme').click(function(){
				    fix_fm062();
    			});
    			$('#restore_scheme').click(function(){
  				    restore_fm062();
    			});
    		}
    	});
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

//    $("#FM019").click(function(){
//        if(confirm("是否将“19#阀门”设置为维修状态？")){
//            fix_fm019();
//            document.getElementById("scheme").onclick="";
//            
//            document.getElementById("export").href="download/fix-fm019.docx";
//            setFMColorRed("FM016");
//            GD1001.state=2;
//            GD11.state=2;
//            document.getElementById("reset").onclick=function(){
//            	window.setTimeout(function(){
//           		setFMColorGreen("FM018");
//                 },300);
//                window.setTimeout(function(){
//                	setFMColorGreen("FM016");
//                	clearAll();
//                 },700);
//            };
////            window.setTimeout(function(){
////                canvas.children[19].fill=color_GD;
////                decay(12,1);
////                decay(14,1);
////                decay(17,1);
////                decay(18,1);
////            },100);
//            setShow();
//        }
//    });

    $("#fix_head").bind("mouseenter", function () {
        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//        canvas.redraw();
    }).bind("mouseleave", function () {
        canvas.mouse.cursor("default");
//        this.shadow="0 0 0px #eee";
//        canvas.redraw();
    });
    
    $("#reset").bind("click", function () {
        clearAll();
    });

//    $("#name_QS").click(function(){
//        if(confirm("是否将“取水泵房”设置为维修状态？")){
//            fix_qs_right();
//            document.getElementById("scheme").onclick=function(){
//                fix_qs_left();
//            };
//            document.getElementById("lastPage").onclick=function(){
//                fix_qs_right();
//            };
//            document.getElementById("export").href="download/fix-qs.doc";
//            setShow();
//        }
//    });
//    $("#name_JJC1").click(function(){
//        if(confirm("是否将“#1机加池”设置为维修状态？")){
//            fix_jjc1();
//            document.getElementById("scheme").onclick="";
//            document.getElementById("lastPage").onclick="";
//            document.getElementById("export").href="download/fix-jjc1.docx";
//            setShow();
//        }
//    });
//    $("#name_JJC2").click(function(){
//        if(confirm("是否将“#2机加池”设置为维修状态？")){
//            fix_jjc2();
//            document.getElementById("scheme").onclick="";
//            document.getElementById("lastPage").onclick="";
//            document.getElementById("export").href="download/fix-jjc2.docx";
//            setShow();
//        }
//    });
//    $("#name_JJC3").click(function(){
//        if(confirm("是否将“#3机加池”设置为维修状态？3")){
//            fix_jjc3();
//            document.getElementById("scheme").onclick="";
//            document.getElementById("lastPage").onclick="";
//            document.getElementById("export").href="download/fix-jjc3.docx";
//            setShow();
//        }
//    });
//    $("#name_VL").click(function(){
//        if(confirm("是否将“V型滤池设置为维修状态？”")){
//            fix_vl();
//            document.getElementById("scheme").onclick="";
//            document.getElementById("lastPage").onclick="";
//            document.getElementById("export").href="download/fix-vl.docx";
//            setShow();
//        }
//    });
//    $("#name_TC").click(function(){
//        if(confirm("是否将“现有活性炭池”设置为维修状态？")){
//            fix_tc_old();
//            document.getElementById("scheme").onclick="";
//            document.getElementById("lastPage").onclick="";
//            document.getElementById("export").href="download/fix-tc-old.doc";
//        }
//    });
//    $("#name_TC1").click(function(){
//        if(confirm("是否将“新建活性炭池”设置为维修状态？")){
//            fix_tc_new();
//            document.getElementById("scheme").onclick="";
//            document.getElementById("lastPage").onclick="";
//            document.getElementById("export").href="download/fix-tc-new.doc";
//        }
//    });
//    $("#name_CY").click(function(){
//        if(confirm("是否将“臭氧接触池”设置为维修状态？")){
//            fix_cy_right();
//            document.getElementById("scheme").onclick=function(){
//                fix_cy_left();
//            };
//            document.getElementById("lastPage").onclick=function(){
//                fix_cy_right();
//            };
//            document.getElementById("export").href="download/fix-cy.doc";
//            setShow();
//        }
//    });
//    $("#name_HHJ1").click(function(){
//        if(confirm("是否将“旧混合井”设置为维修状态？")){
//            fix_hh_right();
//            document.getElementById("scheme").onclick=function(){
//                fix_hh_left();
//            };
//            document.getElementById("lastPage").onclick=function(){
//                fix_hh_right();
//            };
//            document.getElementById("export").href="download/fix-hh-old.doc";
//            setShow();
//        }
//    });
//    $("#name_HHJ2").click(function(){
//        if(confirm("是否将“新混合井”设置为维修状态？")){
//            fix_hh_new();
//            document.getElementById("scheme").onclick="";
//            document.getElementById("lastPage").onclick="";
//            document.getElementById("export").href="download/fix-hh-new.docx";
//        }
//    });
//    $("#name_HX").click(function(){
//        if(confirm("是否将“虹吸滤池”设置为维修状态？")){
//
//            fix_hx_right();
//            document.getElementById("scheme").onclick=function(){
//                fix_hx_left();
//            };
//            document.getElementById("lastPage").onclick=function(){
//                fix_hx_right();
//            };
//            document.getElementById("export").href="download/fix-hx.doc";
//            setShow();
//
//        }
//    });
//
//    $("#name_QSC1").click(function(){
//        if(confirm("是否将“#1清水池”设置为维修状态？")){
//            fix_qsc3();
//            document.getElementById("scheme").onclick=function(){
//            };
//            document.getElementById("lastPage").onclick=function(){
//            };
//            document.getElementById("export").href="download/fix-qsc3.docx";
//            setShow();
//        }
//    });
//    $("#name_QSC2").click(function(){
//        if(confirm("是否将“#2清水池”设置为维修状态？")){
//            fix_qsc1();
//            document.getElementById("scheme").onclick=function(){
//            };
//            document.getElementById("lastPage").onclick=function(){
//            };
//            document.getElementById("export").href="download/fix-qsc1.doc";
//            setShow();
//
//        }
//    });
//    $("#name_QSC3").click(function(){
//        if(confirm("是否将“#3清水池”设置为维修状态？")){
//            fix_qsc2();
//            document.getElementById("scheme").onclick=function(){
//            };
//            document.getElementById("lastPage").onclick=function(){
//            };
//            document.getElementById("export").href="download/fix-qsc2.doc";
//            setShow();
//        }
//    });
//    $("#name_QSC4").click(function(){
//        if(confirm("是否将“#4清水池”设置为维修状态？")){
//            fix_qsc4();
//            document.getElementById("scheme").onclick=function(){
//            };
//            document.getElementById("lastPage").onclick=function(){
//            };
//            document.getElementById("export").href="download/fix-qsc4.docx";
//            setShow();
//        }
//    });
    $("#panel_heading").click(function(){$(".hiden").toggle();});
    
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
	function setFMColorRed(id){
    	var image = document.getElementById(id);
    	var FMTagId = "W" + id;
    	var tag = document.getElementById(FMTagId);

   		image.style.display = "block"
   		tag.style.display = "block"
    	image.src = "image/y2-35x37.png";
    }
  
    function setFMColorGreen(id){
    	var image = document.getElementById(id);
    	var FMTagId = "W" + id;
    	var tag = document.getElementById(FMTagId);

   		image.style.display = "block"
   		tag.style.display = "block"
    	image.src = "image/y3-35x37.png";
    }

    function hideAllFM(){
	   	//隐藏所有阀门（包括阀门对应的标签）
		$(".fm_default_green").attr("style","display:none;");
		$(".fm_default_red").attr("style","display:none;");
		$(".fm_default_hide").attr("style","display:none;");
	}
    
	/* 重置阀门颜色 */
	function setDefaultFMColor(){
		$(".fm_default_green").attr("src","image/y3-35x37.png");
        $(".fm_default_red").attr("src","image/y2-35x37.png");
	}
    
});

