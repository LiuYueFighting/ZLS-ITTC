/**
 * Created by Administrator on 2015/7/26.
 */
oCanvas.domReady(function () {

    var canvas = oCanvas.create({
        canvas: "#canvas_main",
        background: "#eeeeef",
        fps: 40
    });
    var bg = canvas.display.image({
        x: 0,
        y: 0,
        image: "image/main/main.png"
    });
    canvas.addChild(bg);


//管道的公用变量，包括颜色速度的设置
    var speed_all=1.5,
        width_all=20,
        color_GD="#007fff",
        color_GD_new="blue",
        lineHeight_all=10;

    var GD01=createGD({
        parent:canvas,
        cells:[
            {x_cell: 707 ,y_cell: 96},
            {x_cell: 707 ,y_cell: 223},
            {x_cell: 765 ,y_cell: 258},
            {x_cell: 989 ,y_cell: 258},
            {x_cell: 989, y_cell: 349}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    
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
    });
    var GD03=createGD({
        parent:canvas,
        cells:[
            {x_cell: 1020 ,y_cell: 256},
            {x_cell: 1020, y_cell: 348}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD04=createGD({
        parent:canvas,
        cells:[
            {x_cell: 1026,y_cell: 256},
            {x_cell: 1188 ,y_cell: 256},
            {x_cell: 1188, y_cell: 374}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD05=createGD({
        parent:canvas,
        cells:[
            {x_cell: 989 ,y_cell: 365},
            {x_cell: 989 ,y_cell: 411},
            {x_cell: 955, y_cell: 411}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD06=createGD({
        parent:canvas,
        cells:[
            {x_cell: 1019 ,y_cell: 360},
            {x_cell: 1019, y_cell: 411},
            {x_cell: 1058, y_cell: 411}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD07=createGD({
        parent:canvas,
        cells:[
            {x_cell: 1188,y_cell: 412},
            {x_cell: 1188,y_cell: 567}
        ],
        GDwidth:width_all,
        color:color_GD
    });
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
    });
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
    });
    var GD10=createGD({
        parent:canvas,
        cells:[
            {x_cell: 1108 ,y_cell: 445},
            {x_cell: 1108 ,y_cell: 482},
            {x_cell: 990 ,y_cell: 482},
            {x_cell: 990 ,y_cell: 542},
            {x_cell: 970, y_cell: 542}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD11=createGD({
        parent:canvas,
        cells:[
            {x_cell: 1108 ,y_cell: 445},
            {x_cell: 1108 ,y_cell: 482},
            {x_cell: 990 ,y_cell: 482},
            {x_cell: 990 ,y_cell: 562},
            {x_cell: 970, y_cell: 562}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD12=createGD({
        parent:canvas,
        cells:[
            {x_cell: 1124 ,y_cell: 650},
            {x_cell: 962, y_cell: 650},
            {x_cell: 962, y_cell: 667}
        ],
        GDwidth:width_all,
        color:color_GD
    });
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
    });

    var GD14=createGD({
        parent:canvas,
        cells:[
            {x_cell: 879 ,y_cell: 570},
            {x_cell: 879 ,y_cell: 605},
            {x_cell: 844 ,y_cell: 605}
        ],
        GDwidth:width_all,
        color:color_GD
    });

    var GD15=createGD({
        parent:canvas,
        cells:[
            {x_cell: 807 ,y_cell: 708},
            {x_cell: 715 ,y_cell: 708},
            {x_cell: 715 ,y_cell: 630},
            {x_cell: 636 ,y_cell: 630},
            {x_cell: 636, y_cell: 646}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD16=createGD({
        parent:canvas,
        cells:[
            {x_cell: 615 ,y_cell: 673},
            {x_cell: 582, y_cell: 673}
        ],
        GDwidth:width_all,
        color:color_GD
    });
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
    });
    var GD18=createGD({
        parent:canvas,
        cells:[
            {x_cell: 415 ,y_cell: 657},
            {x_cell: 415, y_cell: 568}
        ],
        GDwidth:width_all,
        color:color_GD
    });
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
    });
    var GD20=createGD({
        parent:canvas,
        cells:[
            {x_cell: 403 ,y_cell: 482},
            {x_cell: 372 ,y_cell: 482}
        ],
        GDwidth:width_all,
        color:color_GD
    });
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
    });
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
    });
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
    });
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
    });   
    var GD011=createGD({
        parent:canvas,
        cells:[
            {x_cell: 707 ,y_cell: 96},
            {x_cell: 707 ,y_cell: 223},
            {x_cell: 765 ,y_cell: 258},
            {x_cell: 989 ,y_cell: 258},
            {x_cell: 989 ,y_cell: 295},
            {x_cell: 1020, y_cell: 295}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD00=createGD({
        parent:canvas,
        cells:[
            {x_cell: 707 ,y_cell: 96},
            {x_cell: 707 ,y_cell: 156}
        ],
        GDwidth:width_all,
        color:color_GD
    });

    var img1=canvas.display.image({
        x:692,
        y:58,
        image:"image/main/qs.png"
    });
    canvas.addChild(img1);
    img1.bind("click",function(){
        window.location.href="QS.jsp";
    });
    img1.bind("mouseenter", function () {
        canvas.mouse.cursor("pointer");
        //$("#name_QS").css("display","inline");
        this.shadow="0 0 30px #eee";
    }).bind("mouseleave", function () {
        canvas.mouse.cursor("default");
        this.shadow="0 0 0px #eee";
        //$("#name_QS").css("display","none");
    }).bind("flash",function(){
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
        window.setTimeout(function(){
            GD01.paused=1;
            GD22.paused=1;
            GD02.paused=1;
        },1200);

    });
    var img11=canvas.display.image({
        x:678,
        y:141,
        image:"image/main/qs2.png"
    });
    canvas.addChild(img11);
    img11.bind("click",function(){
        window.location.href="QS.jsp";
    });
    img11.bind("mouseenter", function () {
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 30px #eee";
        //$("#name_QS2").css("display","inline");
    }).bind("mouseleave", function () {
        canvas.mouse.cursor("default");
        this.shadow="0 0 0px #eee";
        //$("#name_QS2").css("display","none");
    }).bind("flash",function(){
        $("#name_QS2").animate({
            height:'200px',opacity:'1'},'fast');
        $("#name_QS2").animate({
            height:'200px',opacity:'0'},'fast');
        $("#name_QS2").animate({
            height:'200px',opacity:'1'},'fast');
        $("#name_QS2").animate({
            height:'200px',opacity:'0'},'fast');
        $("#name_QS2").animate({
            height:'200px',opacity:'1'},'fast');
        this.unbind("flash");        

    });
    var img2=canvas.display.image({
        x:839,
        y:342,
        image:"image/main/5.png"
    });
    canvas.addChild(img2);
    img2.bind("click",function(){
        window.location.href="JJC.jsp";
    }).bind("mouseenter", function () {
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 20px #eee";
        //$("#name_JJC1").css("display","inline");
    }).bind("mouseleave", function () {
        canvas.mouse.cursor("default");
        this.shadow="0 0 0 #eee";
        //$("#name_JJC1").css("display","none");
    }).bind("flash",function(){
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
        window.setTimeout(function(){
            GD08.paused=1;
            GD09.paused=1;
        },1200);
    });
    var img21=img2.clone({
        x:1049,
        y:340
    });
    canvas.addChild(img21);
    img21.bind("click",function(){
        window.location.href="JJC.jsp";
    }).bind("mouseenter", function () {
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 20px #eee";
        //$("#name_JJC2").css("display","inline");
    }).bind("mouseleave", function () {
        canvas.mouse.cursor("default");
        this.shadow="0 0 0px #eee";
        //$("#name_JJC2").css("display","none");
    }).bind("flash",function(){
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
        window.setTimeout(function(){
            GD10.paused=1;
            GD11.paused=1;
        },1200);

    });
    var img22=img2.clone({
        x:1127,
        y:573
    });
    canvas.addChild(img22);
    img22.bind("click",function(){
        window.location.href="JJC.jsp";
    }).bind("mouseenter", function () {
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 20px #eee";
        //$("#name_JJC3").css("display","inline");
    }).bind("mouseleave", function () {
        canvas.mouse.cursor("default");
        this.shadow="0 0 0px #eee";
        //$("#name_JJC3").css("display","none");
    }).bind("flash",function(){
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
        window.setTimeout(function(){
            GD12.paused=1;
        },600);

    });
    //V?????????
    var img3=canvas.display.image({
        x:847,
        y:665,
        image:"image/main/6.png"
    });
    canvas.addChild(img3);
    img3.bind("click",function(){
        window.location.href="VL.jsp";
    }).bind("mouseenter", function () {
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 30px #eee";
        //$("#name_VL").css("display","inline");
    }).bind("mouseleave", function () {
        canvas.mouse.cursor("default");
        this.shadow="0 0 0px #eee";
        //$("#name_VL").css("display","none");

    }).bind("flash",function(){
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
        window.setTimeout(function(){
            GD15.paused=1;
        },600);

    });

    //?????????
    var img4=canvas.display.image({
        x:967,
        y:352,
        image:"image/main/hhj.png"
    });
    canvas.addChild(img4);
    img4.bind("click",function(){
        window.location.href="hhj.jsp";
    }).bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 30px #eee";
        //$("#name_HHJ").css("display","inline");
    }).bind("mouseleave",function(){
        //$("#name_HHJ").css("display","none");
        this.shadow="0 0 0px #eee";
        canvas.mouse.cursor("default");
    }).bind("flash",function(){
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

        window.setTimeout(function(){
        	GD05.paused=1;
            GD06.paused=1;
//            GD07.paused=1;
            }
        ,2000);


    });
    var img41=canvas.display.image({
        x:1179,
        y:381,
        image:"image/main/hhj2.png"
    });
    canvas.addChild(img41);
    img41.bind("click",function(){
        window.location.href="hhj.jsp";
    }).bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 30px #eee";
        //$("#name_HHJ2").css("display","inline");
    }).bind("mouseleave",function(){
        //$("#name_HHJ2").css("display","none");
        this.shadow="0 0 0px #eee";
        canvas.mouse.cursor("default");
    }).bind("flash",function(){
        $("#name_HHJ2").animate({
            height:'200px',opacity:'1'},'fast');
        $("#name_HHJ2").animate({
            height:'200px',opacity:'0'},'fast');
        $("#name_HHJ2").animate({
            height:'200px',opacity:'1'},'fast');
        $("#name_HHJ2").animate({
            height:'200px',opacity:'0'},'fast');
        $("#name_HHJ2").animate({
            height:'200px',opacity:'1'},'fast');
        img41.unbind("flash");
        window.setTimeout(function(){
//        	GD05.paused=1;
//            GD06.paused=1;
            GD07.paused=1;
            }
        ,1200);

    });
    //???????
    var img5=canvas.display.image({
        x:810,
        y:529,
        image:"image/main/hx.png"
    });
    canvas.addChild(img5);
    img5.bind("click",function(){
        window.location.href="hx.jsp";
    }).bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 30px #eee";
        //$("#name_HX").css("display","inline");
    }).bind("mouseleave",function(){
        //$("#name_HX").css("display","none");
        this.shadow="0 0 0px #eee";
        canvas.mouse.cursor("default");
    }).bind("flash",function(){
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
        window.setTimeout(function(){
            GD13.paused=1;
            GD14.paused=1;
        },1200);

    });

    var img6=canvas.display.image({
        x:284,
        y:435,
        image:"image/main/qsc1.png"
    });
    canvas.addChild(img6);
    img6.bind("click",function(){
        window.location.href="qsc.jsp";
    }).bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 30px #eee";
        //$("#name_QSC1").css("display","inline");
    }).bind("mouseleave",function(){
        //$("#name_QSC1").css("display","none");
        this.shadow="0 0 0px #eee";
        canvas.mouse.cursor("default");
    }).bind("flash",function(){
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
        window.setTimeout(function(){
            GD21.paused=1;
            GD23.paused=1;
        },1200);

    });
    var img61=canvas.display.image({
        x:287,
        y:253,
        image:"image/main/qsc2.png"
    });
    canvas.addChild(img61);
    img61.bind("click",function(){
        window.location.href="qsc.jsp";
    }).bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 30px #eee";
        //$("#name_QSC2").css("display","inline");
    }).bind("mouseleave",function(){
        //$("#name_QSC2").css("display","none");
        this.shadow="0 0 0px #eee";
        canvas.mouse.cursor("default");
    }).bind("flash",function(){
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
    var img62=canvas.display.image({
        x:462,
        y:251,
        image:"image/main/qsc2.png"
    });
    canvas.addChild(img62);
    img62.bind("click",function(){
        window.location.href="qsc.jsp";
    }).bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 30px #eee";
        //$("#name_QSC3").css("display","inline");
    }).bind("mouseleave",function(){
        //$("#name_QSC3").css("display","none");
        this.shadow="0 0 0px #eee";
        canvas.mouse.cursor("default");
    }).bind("flash",function(){
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
    var img63=canvas.display.image({
        x:432,
        y:434,
        image:"image/main/qsc3.png"
    });
    canvas.addChild(img63);
    img63.bind("click",function(){
        window.location.href="qsc.jsp";
    }).bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 30px #eee";
        //$("#name_QSC4").css("display","inline");
    }).bind("mouseleave",function(){
        //$("#name_QSC4").css("display","none");
        this.shadow="0 0 0px #eee";
        canvas.mouse.cursor("default");
    }).bind("flash",function(){
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
        window.setTimeout(function(){
            GD24.paused=1;
        },1200);


    });

    var img7=canvas.display.image({
        x:870,
        y:-7,
        image:"image/main/1.png"
    });
    canvas.addChild(img7);
    img7.bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 30px #eee";
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
        window.location.href="hxt.jsp";
    }).bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 30px #eee";
        //$("#name_TC").css("display","inline");
    }).bind("mouseleave",function(){
        this.shadow="0 0 0px #eee";
        //$("#name_TC").css("display","none");
        canvas.mouse.cursor("default");
    }).bind("flash",function(){
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
        window.setTimeout(function(){
            GD18.paused=1;
//            GD19.paused=1;
        },1200);

    });
    var img81=canvas.display.image({
        x:488,
        y:652,
        image:"image/main/tc.png"
    });
    canvas.addChild(img81);
    img81.bind("click",function(){
        window.location.href="hxt.jsp";
    }).bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 30px #eee";
        //$("#name_TC1").css("display","inline");
    }).bind("mouseleave",function(){
        //$("#name_TC1").css("display","none");
        this.shadow="0 0 0px #eee";
        canvas.mouse.cursor("default");
    }).bind("flash",function(){
        $("#name_TC1").animate({
            height:'200px',opacity:'1'},'fast');
        $("#name_TC1").animate({
            height:'200px',opacity:'0'},'fast');
        $("#name_TC1").animate({
            height:'200px',opacity:'1'},'fast');
        $("#name_TC1").animate({
            height:'200px',opacity:'0'},'fast');
        $("#name_TC1").animate({
            height:'200px',opacity:'1'},'fast');
        this.unbind("flash");
        window.setTimeout(function(){
//            GD18.paused=1;
            GD19.paused=1;
        },2400);

    });
    var img9=canvas.display.image({
        x:613,
        y:645,
        image:"image/main/cy.png"
    });
    canvas.addChild(img9);
    img9.bind("click",function(){
        window.location.href="cy.jsp";
    }).bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 40px #eee";
        //$("#name_CY").css("display","inline");
    }).bind("mouseleave",function(){
        //$("#name_CY").css("display","none");
        this.shadow="0 0 0px #eee";
        canvas.mouse.cursor("default");
    }).bind("flash",function(){
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
        window.setTimeout(function(){
            GD16.paused=1;
            GD17.paused=1;
        },1200);

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
        this.shadow="0 0 30px #eee";
        //$("#name_CYC").css("display","inline");
    }).bind("mouseleave",function(){
        //$("#name_CYC").css("display","none");
        this.shadow="0 0 0px #eee";
        canvas.mouse.cursor("default");
    });

    var txt1=canvas.display.text({
        x: 540,
        y: 60,
        origin: { x: "center", y: "top" },
        font: "bold 25px sans-serif",
        text: "当前速度:"+((canvas.settings.fps-50)/50+1)+"倍速",
        fill: "#9966CC"
    });
//canvas.addChild(txt1);

    GD15.bind("start",function(){
        canvas.timeline.stop();
        window.setTimeout(restart,1000);
        this.paused=1;
    });
    canvas.addChild(GD15);
    GD00.paused=1;
    img1.trigger("flash");
    GD01.paused=1;
    GD011.paused=1;
    GD22.paused=1;
    GD02.paused=1;


    canvas.setLoop(function () {
    	GD00.advance();
    	GD01.advance();
        GD011.advance();
        GD02.advance();
        GD03.advance();
        GD04.advance();
        GD05.advance();
        GD06.advance();
        GD07.advance();
        GD08.advance();
        GD09.advance();
        GD10.advance();
        GD11.advance();
        GD12.advance();
        GD13.advance();
        GD14.advance();
        GD15.advance();
        GD16.advance();
        GD17.advance();
        GD18.advance();
        GD19.advance();
        GD20.advance();
        GD21.advance();
        GD22.advance();
        GD23.advance();
        GD24.advance();

        if(GD00.full==1){
        	img11.trigger("flash");
        }
        if(GD02.full==1){
            GD03.paused=1;
            GD04.paused=1;
        }
        if(GD04.full==1){
//            img4.trigger("flash");
            img41.trigger("flash");
        }
        if(GD03.full==1){
            img4.trigger("flash");
//            img41.trigger("flash");
        }
        if(GD06.full==1){
            img2.trigger("flash");
            img21.trigger("flash");
//            img22.trigger("flash");
        }
        if(GD07.full==1){
//            img2.trigger("flash");
//            img21.trigger("flash");
            img22.trigger("flash");
        }
        if(GD09.full==1)
        {
            img5.trigger("flash");
//            img3.trigger("flash");
        }
        if(GD12.full==1)
        {
//            img5.trigger("flash");
            img3.trigger("flash");
        }

        if(GD15.full==1){
            img9.trigger("flash");
        }
        if(GD16.full==1){
//            img8.trigger("flash");
            img81.trigger("flash");
        }
        if(GD17.full==1){
            img8.trigger("flash");
//            img81.trigger("flash");
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
    GD00.paused=1;
    img1.trigger("flash");
    GD01.paused=1;
    GD011.paused=1;
    GD02.paused=1;
    GD22.paused=1;
    canvas.timeline.start();
    $("#btn_start").click(function(){
        if(this.value==1){
            canvas.redraw();
            this.innerHTML="&#xe61f;";
            this.value=0;
            canvas.timeline.start();
        }
        else{
            this.innerHTML='&#xe626;';
            this.value=1;
            canvas.timeline.stop();
        }
    });

    $("#btn_reset").click(function(){
        reset();
        $("#btn_new").prop('checked',true);
        $("#btn_old").prop('checked',true);
        var btn_start=$("#btn_start");
        btn_start.innerHTML="&#xe61f;";
        btn_start.value=0;
    });
    $("#btn_upS").click(function(){
        canvas.settings.fps+=5;
        var spanText=document.getElementById("speed");
        var speed=(canvas.settings.fps/40).toFixed(1);
        spanText.innerHTML=speed+"X";
        canvas.redraw();
    });
    $("#btn_downS").click(function () {
        if(canvas.settings.fps>=25)
            canvas.settings.fps-=5;
        var spanText=document.getElementById("speed");
        var speed=(canvas.settings.fps/40).toFixed(1);
        spanText.innerHTML=speed+"X";
        canvas.redraw();
    });

    $("#btn_new").change(function () {
        if($("#btn_new").is(":checked")){
            if($("#btn_old").is(":checked")){
                reset();
            }
            else{
                line_new();
            }
        }else{
            if($("#btn_old").is(":checked")){
                line_old();
            }
            else{
                line_none();
            }
        }
    });
    $("#btn_old").change(function () {
        if($("#btn_old").is(":checked")){
            if($("#btn_new").is(":checked")){
                reset();
            }
            else{
                line_old();
            }
        }else{
            if($("#btn_new").is(":checked")){
                line_new();
            }
            else{
                line_none();
            }
        }
    });

    function restart(){
        canvas.timeline.start();
    }
    function reset(){
        canvas.timeline.stop();
        canvas.children[1].fill=color_GD;
        canvas.children[2].fill=color_GD;
        canvas.children[3].fill=color_GD;
        canvas.children[5].fill=color_GD;
        canvas.children[6].fill=color_GD;
        canvas.children[8].fill=color_GD;
        canvas.children[9].fill=color_GD;
        canvas.children[10].fill=color_GD;
        canvas.children[11].fill=color_GD;
        canvas.children[13].fill=color_GD;
        canvas.children[14].fill=color_GD;
        canvas.children[17].fill=color_GD;
        canvas.children[18].fill=color_GD;
        canvas.children[4].fill=color_GD;
        canvas.children[7].fill=color_GD;
        canvas.children[12].fill=color_GD;
        canvas.children[15].fill=color_GD;
        canvas.children[16].fill=color_GD;
        canvas.children[19].fill=color_GD;
        canvas.children[25].fill=color_GD;
        canvas.children[22].fill="rgba(1,1,1,0)";
        GD00.init();
        GD01.init();
        GD011.init();
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
        GD14.init();
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
        img1.bind("flash",function(){
        	GD00.paused=1;
        	img1.trigger("flash");
        	GD01.paused=1;
            GD011.paused=1;
            GD22.paused=1;
            GD02.paused=1;
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
        });
        img2.bind("flash",function(){
            GD08.paused=1;
            GD09.paused=1;
        });


        img21.bind("flash",function(){
            GD10.paused=1;
            GD11.paused=1;
        });

        img22.bind("flash",function(){
            GD12.paused=1;
        });

        img3.bind("flash",function(){
            GD15.paused=1;
        });

        img4.bind("flash",function(){
            GD05.paused=1;
            GD06.paused=1;
            GD07.paused=1;
        });

        img5.bind("flash",function(){
            GD13.paused=1;
            GD14.paused=1;
        });

        img6.bind("flash",function(){
            GD21.paused=1;
            GD23.paused=1;
        });

        img61.bind("flash",function(){
        });

        img62.bind("flash",function(){
        });

        img63.bind("flash",function(){
            GD24.paused=1;
        });

        img8.bind("flash",function(){
            GD18.paused=1;
            GD19.paused=1;
        });

        img9.bind("flash",function(){
            GD16.paused=1;
            GD17.paused=1;
        });
        img1.trigger("flash");
        GD01.paused=1;
        GD011.paused=1;
        GD22.paused=1;
        GD02.paused=1;
        canvas.settings.fps=40;
        var spanText=document.getElementById("speed");
        var speed=(canvas.settings.fps/40).toFixed(1);
        spanText.innerHTML=speed+"X";
        var btn_start=$("#btn_start");
        btn_start.innerHTML="&#xe61f;";
        btn_start.value=0;

        canvas.redraw();
        canvas.timeline.start();
    }
    function line_new(){
        canvas.timeline.stop();
        console.log("new");
        reset();

        canvas.children[1].fill="rgba(1,0,0,0)";
        canvas.children[3].fill="rgba(1,0,0,0)";
        canvas.children[5].fill="rgba(1,0,0,0)";
        canvas.children[6].fill="rgba(1,0,0,0)";
        canvas.children[8].fill="rgba(1,0,0,0)";
        canvas.children[9].fill="rgba(1,0,0,0)";
        canvas.children[10].fill="rgba(1,0,0,0)";
        canvas.children[11].fill="rgba(1,0,0,0)";
        canvas.children[13].fill="rgba(1,0,0,0)";
        canvas.children[14].fill="rgba(1,0,0,0)";
        canvas.children[17].fill="rgba(1,0,0,0)";
        canvas.children[18].fill="rgba(1,0,0,0)";
        canvas.children[25].fill="rgba(1,0,0,0)";

    }
    function line_old(){
        canvas.timeline.stop();
        console.log("old");
        reset();
        canvas.children[2].fill="rgba(1,0,0,0)";
        canvas.children[3].fill="rgba(1,0,0,0)";
        canvas.children[4].fill="rgba(1,0,0,0)";
        canvas.children[7].fill="rgba(1,0,0,0)";
        canvas.children[12].fill="rgba(1,0,0,0)";
        canvas.children[15].fill="rgba(1,0,0,0)";
        canvas.children[16].fill="rgba(1,0,0,0)";
        canvas.children[19].fill="rgba(1,0,0,0)";
        canvas.children[22].fill=color_GD;
    }
    function line_none(){
        canvas.timeline.stop();
        GD03.color="rgba(0,0,0,0)";
        reset();
    }
    function init(){
        GD01.init();
        GD011.init();
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
        GD14.init();
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
        $("#btn_start").innerHTML='&#xe626;';
        $("#btn_start").value=0;
    }
});