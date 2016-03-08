oCanvas.domReady(function () {
	 var width_all=30,
     speed_SC=0.9,
     color_GD="#007fff",
     color_SC="#43d9f9";
 var canvas = oCanvas.create({
     canvas: "#canvas_hxt",
     background: "#ccc",
     fps: 25
 });
//绘制两个水池
 var SC01=createSC({
     parent:canvas,
     x:512,y:538,height:120,width:39,trail_flag:0,speed:speed_SC,color:color_SC
 });
 var SC02=createSC({
     parent:canvas,
     x:570,y:393,height:246,width:418,trail_flag:0,speed:speed_SC,color:color_SC
 });
    var SC03=createSC({
        parent:canvas,
        x:1000,y:396,height:64,width:64,trail_flag:0,speed:speed_SC/2,color:color_SC
    });
//添加背景图片
 var bg = canvas.display.image({
     x: 0,
     y: 0,
     image: "image/hxt.png"
 }).add();
//添加箭头
    var arrow_0=canvas.display.sprite({
        x: 544,
        y: 637,
        image: "image/water-arrow/right.png",
        generate:false,
        frames: [
            {x:60,y:0,w:60,h:40,d:400},
            {x:0,y:0,w:60,h:40,d:800}
        ]
    }).scale(0.8,0.8).add();
 //var arrow_1=canvas.display.sprite({
 //    x: 1012,
 //    y: 400,
 //    image: "image/water-arrow/down.png",
 //    generate:false,
 //    frames: [
 //        {x:20,y:0,w:20,h:60,d:400},
 //        {x:0,y:0,w:20,h:60,d:800}
 //
 //    ]
 //}).scale(1.5,1.1).add();
 var arrow_2=canvas.display.sprite({
     x: 632,
     y: 457,
     image: "image/water-arrow/up.png",
     generate:false,
     frames: [
         {x:20,y:0,w:20,h:60,d:400},
         {x:0,y:0,w:20,h:60,d:800}

     ]
 }).add();
 var arrow_3=canvas.display.sprite({
     x: 724,
     y: 457,
     image: "image/water-arrow/up.png",
     generate:false,
     frames: [
         {x:20,y:0,w:20,h:60,d:400},
         {x:0,y:0,w:20,h:60,d:800}

     ]
 }).add();
 var arrow_4=canvas.display.sprite({
     x: 816,
     y: 457,
     image: "image/water-arrow/up.png",
     generate:false,
     frames: [
         {x:20,y:0,w:20,h:60,d:400},
         {x:0,y:0,w:20,h:60,d:800}

     ]
 }).add();
 var arrow_5=canvas.display.sprite({
     x: 908,
     y: 457,
     image: "image/water-arrow/up.png",
     generate:false,
     frames: [
         {x:20,y:0,w:20,h:60,d:400},
         {x:0,y:0,w:20,h:60,d:800}

     ]
 }).add();
//绘制两条管道
 var GD01=createGD({
     parent:canvas,
     cells:[
         {x_cell: 388,y_cell: 621},
         {x_cell: 419, y_cell: 621}
     ],
     GDwidth:width_all,
     color:color_GD
 });
 var GD02=createGD({
     parent:canvas,
     cells:[
         {x_cell: 477,y_cell: 621},
         {x_cell: 512, y_cell: 621}
     ],
     GDwidth:width_all,
     color:color_GD
 });

 var GD04=createGD({
     parent:canvas,
     cells:[
         {x_cell: 572,y_cell: 408},
         {x_cell: 1006, y_cell: 408}
     ],
     GDwidth:width_all,
     color:color_GD
 });
 var GD05=createGD({
     parent:canvas,
     cells:[
         {x_cell: 1029,y_cell: 458},
         {x_cell: 1029,y_cell: 570},
         {x_cell: 1066,y_cell: 597},
         {x_cell: 1146,y_cell: 597}
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
     text:"活性炭池工艺展示纵剖图"
 }).add();
 var txt2=canvas.display.text({
     x:410,
     y:675,
     origin: { x:"center", y: "top" },
     font: "bold 25px sans-serif",
     fill:"#337ab7",
     text:"臭氧接触池来水"
 }).add();
 var txt3=canvas.display.text({
     x:1227,
     y:585,
     origin: { x:"center", y: "top" },
     font: "bold 25px sans-serif",
     fill:"#337ab7",
     text:"活性炭池出水"
 }).add();
//设置循环
 canvas.setLoop(function () {
     GD01.advance();
     GD02.advance();
     GD04.advance();
     GD05.advance();
     SC01.advance();
     SC02.advance();
     SC03.advance();
     if(GD01.full==1){
         GD02.paused=1;
         GD01.full=0;
     }
     if(GD02.full==1){
         SC01.start=1;
         arrow_0.start();
         GD02.full=0;
     }
     if(SC01.full==1){
         SC01.full=0;
         SC02.start=1;
         arrow_2.start();
         arrow_3.start();
         arrow_4.start();
         arrow_5.start();
     }
     if(SC02.full==1){
         GD04.paused=1;
         SC02.full=0;
     }
     if(GD04.full==1){
         GD05.paused=1;
         SC03.start=1;
         //arrow_1.start();
         GD04.full=0;
     }
     if(GD05.full==1){
         arrow_2.stopAnimation();
         arrow_3.stopAnimation();
         arrow_4.stopAnimation();
         arrow_5.stopAnimation();
         arrow_3.frame=2;
         arrow_4.frame=2;
         arrow_5.frame=2;
         arrow_2.frame=2;
         GD05.full=0;
     }
     canvas.redraw();
 }).start();
    GD01.paused=1;
    canvas.timeline.start();
//添加按钮函数
$("#btn_start").click(function(){
	 if(this.value==1){
         GD01.paused=1;
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
        //SC03.init();
        //GD02.init();
        //GD04.init();
        //GD05.init();
        //GD01.paused=1;
    });

});
