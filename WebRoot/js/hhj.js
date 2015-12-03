oCanvas.domReady(function () {

	 var width_all=30,
     speed_SC=0.9,
     color_GD="#007fff",
     color_SC="#43d9f9";
 var canvas = oCanvas.create({
     canvas: "#canvas_hhj",
     background: "#ccc",
     fps: 25
 });
//绘制两个水池
 var SC01=createSC({
     parent:canvas,
     x:560,y:306,height:357,width:140,trail_flag:0,speed:speed_SC,color:color_SC
 });
 var SC02=createSC({
     parent:canvas,
     x:703,y:307,height:347,width:85,trail_flag:0,speed:speed_SC,color:color_SC
 });
//添加背景图片
 var bg = canvas.display.image({
     x: 0,
     y: 0,
     image: "image/hhj.png"
 }).add();
//绘制两条管道
 var GD01=createGD({
     parent:canvas,
     cells:[
         {x_cell: 330,y_cell: 628},
         {x_cell: 632, y_cell: 628},
         {x_cell: 630, y_cell: 526}
     ],
     GDwidth:width_all,
     color:color_GD
 });
 var GD02=createGD({
     parent:canvas,
     cells:[
         {x_cell: 785,y_cell: 628},
         {x_cell: 1027, y_cell: 628}
     ],
     GDwidth:width_all,
     color:color_GD
 });
//添加箭头
 var arrow_1 = canvas.display.sprite({
     x: 568,
     y: 495,
     image: "image/water-arrow/left_roll.png",
     generate: false,
     frames: [
         {x: 60, y: 0, w: 60, h: 60, d: 400},
         {x: 0, y: 0, w: 60, h: 60, d: 800}
     ]
 }).add();

 var arrow_2 = canvas.display.sprite({
     x: 632,
     y: 495,
     image: "image/water-arrow/right_roll.png",
     generate: false,
     frames: [
         {x: 60, y: 0, w: 60, h: 60, d: 400},
         {x: 0, y: 0, w: 60, h: 60, d: 800}
     ]
 }).add();
 var arrow_3=canvas.display.sprite({
     x: 686,
     y: 287,
     image: "image/water-arrow/right_roll.png",
     generate:false,
     frames: [
         {x:60,y:0,w:60,h:60,d:400},
         {x:0,y:0,w:60,h:60,d:800}

     ]
 }).scale(0.5,1).add();
//添加文字标注
 var txt1=canvas.display.text({
     x:650,
     y:10,
     origin: { x:"center", y: "top" },
     font: "bold 36px sans-serif",
     fill:"#0e406b",
     text:"混合井工艺展示纵剖图"
 }).add();
 var txt2=canvas.display.text({
     x:230,
     y:615,
     origin: { x:"center", y: "top" },
     font: "bold 25px sans-serif",
     fill:"#337ab7",
     text:"取水泵房来水"
 }).add();
 var txt3=canvas.display.text({
     x:1120,
     y:615,
     origin: { x:"center", y: "top" },
     font: "bold 25px sans-serif",
     fill:"#337ab7",
     text:"混合井出水"
 }).add();
//设置循环
 canvas.setLoop(function () {
     GD01.advance();
     GD02.advance();
     SC01.advance();
     SC02.advance();
     if(GD01.full==1){
         SC01.start=1;
         arrow_1.start();
         arrow_2.start();
     }
     if(SC01.full==1){
         SC02.start=1;
         arrow_3.start();
         GD02.paused=1;
     }
     canvas.redraw();
 }).start();
//添加按钮函数
    GD01.paused=1;
    canvas.timeline.start();
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
        //GD02.init();
        //GD01.paused=1;
    });

});
