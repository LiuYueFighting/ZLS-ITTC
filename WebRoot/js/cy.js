
oCanvas.domReady(function () {
	 var width_all=30,
     speed_SC=0.9,
     color_GD="#007fff",
     color_SC="#43d9f9";
 var canvas = oCanvas.create({
     canvas: "#canvas_cy",
     background: "#ccc",
     fps: 25
 });
//绘制两个水池
 var SC01=createSC({
     parent:canvas,
     x:261,y:244,height:346,width:127,trail_flag:0,speed:speed_SC,color:color_SC
 });
    var SC011=createSC({
        parent:canvas,
        x:261,y:244,height:282,width:49,trail_flag:0,speed:speed_SC*1.1,color:color_SC
    });
 var SC02=createSC({
     parent:canvas,
     x:398,y:247,height:349,width:176,trail_flag:0,speed:speed_SC,color:color_SC
 });
    var SC021=createSC({
        parent:canvas,
        x:398,y:247,height:282,width:65,trail_flag:0,speed:speed_SC*1.1,color:color_SC
    });
 var SC03=createSC({
     parent:canvas,
     x:588,y:247,height:349,width:271,trail_flag:0,speed:speed_SC,color:color_SC
 });
    var SC031=createSC({
        parent:canvas,
        x:588,y:247,height:282,width:71,trail_flag:0,speed:speed_SC*1.1,color:color_SC
    });
 var SC04=createSC({
     parent:canvas,
     x:873,y:247,height:349,width:182,trail_flag:0,speed:speed_SC,color:color_SC
 });
    var SC041=createSC({
        parent:canvas,
        x:873,y:247,height:282,width:71,trail_flag:0,speed:speed_SC*1.1,color:color_SC
    });
 var SC05=createSC({
     parent:canvas,
     x:1062,y:247,height:349,width:94,trail_flag:0,speed:speed_SC,color:color_SC
 });
//添加背景图片
 var bg = canvas.display.image({
     x: 0,
     y: 0,
     image: "image/cy.png"
 }).add();
//画箭头
 var arrow_1=canvas.display.sprite({
     x: 368,
     y: 227,
     image: "image/water-arrow/right_roll.png",
     generate:false,
     frames: [
         {x:60,y:0,w:60,h:60,d:400},
         {x:0,y:0,w:60,h:60,d:800}

     ]
 }).add();
 var arrow_2=canvas.display.sprite({
     x: 560,
     y: 227,
     image: "image/water-arrow/right_roll.png",
     generate:false,
     frames: [
         {x:60,y:0,w:60,h:60,d:400},
         {x:0,y:0,w:60,h:60,d:800}

     ]
 }).add();
 var arrow_3=canvas.display.sprite({
     x: 843,
     y: 227,
     image: "image/water-arrow/right_roll.png",
     generate:false,
     frames: [
         {x:60,y:0,w:60,h:60,d:400},
         {x:0,y:0,w:60,h:60,d:800}

     ]
 }).add();
 var arrow_4=canvas.display.sprite({
     x: 1035,
     y: 227,
     image: "image/water-arrow/right_roll.png",
     generate:false,
     frames: [
         {x:60,y:0,w:60,h:60,d:400},
         {x:0,y:0,w:60,h:60,d:800}

     ]
 }).add();
//绘制两条管道
 var GD01=createGD({
     parent:canvas,
     cells:[
         {x_cell: 54,y_cell: 379},
         {x_cell: 264, y_cell: 379}
     ],
     GDwidth:width_all,
     color:color_GD
 });
 var GD02=createGD({
     parent:canvas,
     cells:[
         {x_cell: 1159,y_cell: 559},
         {x_cell: 1291, y_cell: 559}
     ],
     GDwidth:width_all,
     color:color_GD
 });

//添加文字标注
 var txt1=canvas.display.text({
     x:700,
     y:30,
     origin: { x:"center", y: "top" },
     font: "bold 36px sans-serif",
     fill:"#0e406b",
     text:"臭氧接触池工艺展示纵剖图"
 }).add();
 var txt2=canvas.display.text({
     x:110,
     y:425,
     origin: { x:"center", y: "top" },
     font: "bold 25px sans-serif",
     fill:"#337ab7",
     text:"滤池来水"
 }).add();
 var txt3=canvas.display.text({
     x:1250,
     y:485,
     origin: { x:"center", y: "top" },
     font: "bold 25px sans-serif",
     fill:"#337ab7",
     text:"臭氧接\n触池出水"
 }).add();
    var arrow_5 = canvas.display.sprite({
        x: 352,
        y: 554,
        image: "image/water-arrow/zuo.png",
        generate: false,
        frames: [
            {x: 60, y: 0, w: 60, h: 60, d: 400},
            {x: 0, y: 0, w: 60, h: 60, d: 800}
        ]
    }).rotate(180).add();
    var arrow_6 = canvas.display.sprite({
        x: 505,
        y: 554,
        image: "image/water-arrow/zuo.png",
        generate: false,
        frames: [
            {x: 60, y: 0, w: 60, h: 60, d: 400},
            {x: 0, y: 0, w: 60, h: 60, d: 800}
        ]
    }).rotate(180).add();
    var arrow_7 = canvas.display.sprite({
        x: 695,
        y: 554,
        image: "image/water-arrow/zuo.png",
        generate: false,
        frames: [
            {x: 60, y: 0, w: 60, h: 60, d: 400},
            {x: 0, y: 0, w: 60, h: 60, d: 800}
        ]
    }).rotate(180).add();
    var arrow_8 = canvas.display.sprite({
        x: 979,
        y: 554,
        image: "image/water-arrow/zuo.png",
        generate: false,
        frames: [
            {x: 60, y: 0, w: 60, h: 60, d: 400},
            {x: 0, y: 0, w: 60, h: 60, d: 800}
        ]
    }).rotate(180).add();
 var pp1=canvas.display.bubble({
     start:{x:425,y:566},
     container:SC02,
     width:50,
     offset:1,
     speed:5
 }).add();
    var pp2=canvas.display.bubble({
        start:{x:620,y:566},
        container:SC03,
        width:50,
        offset:1,
        speed:5
    }).add();
    var pp3=canvas.display.bubble({
        start:{x:903,y:566},
        container:SC04,
        width:50,
        offset:1.5,
        speed:5
    }).add();
//设置循环
 canvas.setLoop(function () {
     GD01.advance();
     GD02.advance();
     SC01.advance();
     SC011.advance();
     SC02.advance();
     SC021.advance();
     SC03.advance();
     SC031.advance();
     SC04.advance();
     SC041.advance();
     SC05.advance();
     pp1.advance();
     pp2.advance();
     pp3.advance();

     if(GD01.full==1){
         SC01.start=1;
     }
     if(SC01.height_now>=60){
         SC011.start=1;
         arrow_5.start();
     }
     if(SC01.full==1){
         SC02.start=1;
         arrow_1.start();
     }
     if(SC02.height_now>=60){
         SC021.start=1;
         arrow_6.start();
         arrow_5.frame=2;
         arrow_5.stopAnimation();
     }
     if(SC02.full==1){
         SC03.start=1;
         arrow_2.start();
         arrow_1.frame=2;
         arrow_1.stopAnimation();

     }
     if(SC03.height_now>=60){
         SC031.start=1;
         arrow_7.start();
         arrow_6.frame=2;
         arrow_6.stopAnimation();

     }
     if(SC03.full==1){
         SC04.start=1;
         arrow_3.start();
         arrow_2.frame=2;
         arrow_2.stopAnimation();
     }
     if(SC04.height_now>=60){
         SC041.start=1;
         arrow_8.start();
         arrow_7.frame=2;

     }
     if(SC04.full==1){
         SC05.start=1;
         arrow_4.start();
         arrow_3.frame=2;
     }
     if(SC05.height_now>=20){
         GD02.paused=1;
     }
     if(GD02.full==1){
         arrow_4.frame=2;
         arrow_8.frame=2;
     }
     canvas.redraw();
 }).start();
//添加按钮函数
    GD01.paused=1;
    canvas.timeline.start();
    $("#btn_start").click(function(){
	 if(this.value==0){

         GD01.paused=1;
         canvas.redraw();
         this.innerHTML="&#xe61f;";
         this.value=1;
         canvas.timeline.start();
     }
     else{
         this.innerHTML='&#xe626;';
         this.value=0;
         canvas.timeline.stop();
     }
	 });
    $("#btn_upS").click(function(){
        canvas.settings.fps+=5;
        var spanText=document.getElementById("speed");
        var speed=(canvas.settings.fps/25).toFixed(1);
        spanText.innerHTML=speed+"X";
        console.log(spanText.innerHTML);
    });
    $("#btn_downS").click(function(){
        canvas.settings.fps-=5;
        var spanText=document.getElementById("speed");
        var speed=(canvas.settings.fps/25).toFixed(1);
        spanText.innerHTML=speed+"X";
    });
    $("#btn_reset").click(function(){
        window.location.reload();
        //GD01.init();
        //SC01.init();
        //SC02.init();
        //GD02.init();
        //SC03.init();
        //SC04.init();
        //SC05.init();
        //pp1.init();
        //pp2.init();
        //pp3.init();
        //GD01.paused=1;
    });

});
