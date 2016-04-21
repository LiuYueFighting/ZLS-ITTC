
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
     x:258,y:245,height:346,width:127,trail_flag:0,speed:speed_SC,color:color_SC
 });
    var SC011=createSC({
        parent:canvas,
        x:258,y:244,height:282,width:49,trail_flag:0,speed:speed_SC*1.1,color:color_SC
    });
    var SC00=createSC({
        parent:canvas,
        x:50,y:365,height:29,width:209,trail_flag:0,speed:speed_SC*0.15,color:color_SC
    });
 var SC02=createSC({
     parent:canvas,
     x:398,y:244,height:349,width:178,trail_flag:0,speed:speed_SC,color:color_SC
 });
    var SC021=createSC({
        parent:canvas,
        x:398,y:246,height:282,width:65,trail_flag:0,speed:speed_SC*1.1,color:color_SC
    });
 var SC03=createSC({
     parent:canvas,
     x:588,y:244,height:349,width:271,trail_flag:0,speed:speed_SC,color:color_SC
 });
    var SC031=createSC({
        parent:canvas,
        x:588,y:246,height:282,width:71,trail_flag:0,speed:speed_SC*1.1,color:color_SC
    });
 var SC04=createSC({
     parent:canvas,
     x:873,y:244,height:349,width:182,trail_flag:0,speed:speed_SC,color:color_SC
 });
    var SC041=createSC({
        parent:canvas,
        x:873,y:246,height:282,width:71,trail_flag:0,speed:speed_SC*1.1,color:color_SC
    });
 var SC05=createSC({
     parent:canvas,
     x:1064,y:244,height:349,width:224,trail_flag:0,speed:speed_SC,color:color_SC
 });
//添加背景图片
 var bg = canvas.display.image({
     x: 0,
     y: 0,
     image: "image/cy_v1.png"
 }).add();
//画箭头
 var arrow_1=canvas.display.sprite({
     x: 367,
     y: 227,
     loop:false,
     image: "image/water-arrow/ld.png",
     generate:false,
     frames: [
		{x: 500, y: 0, w: 72, h: 60, d: 100},
		{x: 0, y: 0, w: 72, h: 60, d: 100},
		{x: 75, y: 0, w: 72, h: 60, d: 100},
		{x: 151, y: 0, w: 72, h: 60, d: 200},
		{x: 227, y: 0, w: 72, h: 60, d: 500},
		{x: 303, y: 0, w: 72, h: 60, d: 500}
     ]
 }).add();
 var arrow_2=canvas.display.sprite({
     x: 556,
     y: 227,
     loop:false,
     image: "image/water-arrow/ld.png",
     generate:false,
     frames: [
		{x: 500, y: 0, w: 72, h: 60, d: 100},
		{x: 0, y: 0, w: 72, h: 60, d: 100},
		{x: 75, y: 0, w: 72, h: 60, d: 100},
		{x: 151, y: 0, w: 72, h: 60, d: 200},
		{x: 227, y: 0, w: 72, h: 60, d: 500},
		{x: 303, y: 0, w: 72, h: 60, d: 500}
     ]
 }).add();
 var arrow_3=canvas.display.sprite({
     x: 841,
     y: 227,
     loop:false,
     image: "image/water-arrow/ld.png",
     generate:false,
     frames: [
		{x: 500, y: 0, w: 72, h: 60, d: 100},
		{x: 0, y: 0, w: 72, h: 60, d: 100},
		{x: 75, y: 0, w: 72, h: 60, d: 100},
		{x: 151, y: 0, w: 72, h: 60, d: 200},
		{x: 227, y: 0, w: 72, h: 60, d: 500},
		{x: 303, y: 0, w: 72, h: 60, d: 500}
     ]
 }).add();
 var arrow_4=canvas.display.sprite({
     x: 1032,
     y: 227,
     loop:false,
     image: "image/water-arrow/ld.png",
     generate:false,
     frames: [
		{x: 500, y: 0, w: 72, h: 60, d: 100},
		{x: 0, y: 0, w: 72, h: 60, d: 100},
		{x: 75, y: 0, w: 72, h: 60, d: 100},
		{x: 151, y: 0, w: 72, h: 60, d: 200},
		{x: 227, y: 0, w: 72, h: 60, d: 500},
		{x: 303, y: 0, w: 72, h: 60, d: 500}
     ]
 }).add();
//绘制两条管道
 var GD01=createGD({
     parent:canvas,
     cells:[
         {x_cell: 55,y_cell: 379},
         {x_cell: 258, y_cell: 379}
     ],
     GDwidth:width_all,
     color:color_GD
 });
 var GD02=createGD({
     parent:canvas,
     cells:[
         {x_cell: 1159,y_cell: 559},
         {x_cell: 1286, y_cell: 559}
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
        x: 290,
        y: 495,
        loop:false,
        image: "image/water-arrow/lu.png",
        generate: false,
        frames: [
            {x: 500, y: 0, w: 72, h: 60, d: 100},
            {x: 0, y: 0, w: 72, h: 60, d: 100},
            {x: 77, y: 0, w: 72, h: 60, d: 100},
            {x: 152, y: 0, w: 72, h: 60, d: 100},
            {x: 228, y: 0, w: 72, h: 60, d: 200},
            {x: 304, y: 0, w: 72, h: 60, d: 500}
//            {x: 304, y: 0, w: 94, h: 60, d: 200},
//            {x: 202, y: 0, w: 94, h: 60, d: 100},
//            {x: 101, y: 0, w: 94, h: 60, d: 100}
        ]
    }).add();
    var arrow_6 = canvas.display.sprite({
        x: 444,
        y: 495,
        loop:false,
        image: "image/water-arrow/lu.png",
        generate: false,
        frames: [
			{x: 500, y: 0, w: 72, h: 60, d: 100},
            {x: 0, y: 0, w: 72, h: 60, d: 100},
            {x: 77, y: 0, w: 72, h: 60, d: 100},
            {x: 152, y: 0, w: 72, h: 60, d: 100},
            {x: 228, y: 0, w: 72, h: 60, d: 200},
            {x: 304, y: 0, w: 72, h: 60, d: 500}

        ]
    }).add();
    var arrow_7 = canvas.display.sprite({
        x: 636,
        y: 495,
        loop:false,
        image: "image/water-arrow/lu.png",
        generate: false,
        frames: [
     		{x: 500, y: 0, w: 72, h: 60, d: 100},
            {x: 0, y: 0, w: 72, h: 60, d: 100},
            {x: 77, y: 0, w: 72, h: 60, d: 100},
            {x: 152, y: 0, w: 72, h: 60, d: 100},
            {x: 228, y: 0, w: 72, h: 60, d: 200},
            {x: 304, y: 0, w: 72, h: 60, d: 500}
    		
        ]
    }).add();
    var arrow_8 = canvas.display.sprite({
        x: 920,
        y: 495,
        loop:false,
        image: "image/water-arrow/lu.png",
        generate: false,
        frames: [
     		{x: 500, y: 0, w: 72, h: 60, d: 100},
            {x: 0, y: 0, w: 72, h: 60, d: 100},
            {x: 77, y: 0, w: 72, h: 60, d: 100},
            {x: 152, y: 0, w: 72, h: 60, d: 100},
            {x: 228, y: 0, w: 72, h: 60, d: 200},
            {x: 304, y: 0, w: 72, h: 60, d: 500}
    		
        ]
    }).add();
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
     SC00.advance();
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
//         arrow_5.frame=2;
         arrow_5.stopAnimation();
     }
     if(SC02.full==1){
         SC03.start=1;
         arrow_2.start();
//         arrow_1.frame=2;
         arrow_1.stopAnimation();

     }
     if(SC03.height_now>=60){
         SC031.start=1;
         arrow_7.start();
//         arrow_6.frame=2;
         arrow_6.stopAnimation();

     }
     if(SC03.full==1){
         SC04.start=1;
         arrow_3.start();
//         arrow_2.frame=2;
         arrow_2.stopAnimation();
     }
     if(SC04.height_now>=60){
         SC041.start=1;
         arrow_8.start();
//         arrow_7.frame=2;

     }
     if(SC04.full==1){
         SC05.start=1;
         arrow_4.start();
//         arrow_3.frame=2;
     }
     if(SC05.height_now>=20){
         GD02.paused=1;
     }
     if(GD02.full==1){
//         arrow_4.frame=2;
//         arrow_8.frame=2;
     }
     canvas.redraw();
 }).start();
//添加按钮函数
    GD01.paused=1;
    SC00.start=1;
    canvas.timeline.start();
    $("#btn_start").click(function(){
	 if(this.value==0){
		 SC00.start=1;
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
