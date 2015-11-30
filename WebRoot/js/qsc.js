oCanvas.domReady(function () {

	var width_all=30,
    speed_SC=0.4,
    color_GD="#007fff",
    color_SC="#43d9f9";
var canvas = oCanvas.create({
    canvas: "#canvas_qsc",
    background: "#ccc",
    fps: 25
});
//绘制两个水池
var SC01=createSC({
    parent:canvas,
    x:586,y:483,height:64,width:60,trail_flag:0,speed:speed_SC,color:color_SC
});
var SC02=createSC({
    parent:canvas,
    x:109,y:452,height:95,width:475,trail_flag:0,speed:speed_SC/4,color:color_SC
});
var SC03=createSC({
    parent:canvas,
    x:766,y:451,height:96,width:470,trail_flag:0,speed:speed_SC/4,color:color_SC
});
//添加背景图片
var bg = canvas.display.image({
    x: 0,
    y: 0,
    image: "image/qsc.png"
}).add();
//绘制管道
var GD01=createGD({
    parent:canvas,
    cells:[
        {x_cell: 1231,y_cell: 516},
        {x_cell: 1277, y_cell: 516}
    ],
    GDwidth:width_all,
    color:color_GD
});
//添加箭头
var arrow_1 = canvas.display.sprite({
    x: 554,
    y: 503,
    image: "image/water-arrow/left.png",
    generate: false,
    frames: [
        {x: 60, y: 0, w: 60, h: 60, d: 400},
        {x: 0, y: 0, w: 60, h: 60, d: 800}
    ]
}).scale(0.6).add();
var arrow_2 = canvas.display.sprite({
    x: 466,
    y: 503,
    image: "image/water-arrow/left.png",
    generate: false,
    frames: [
        {x: 60, y: 0, w: 60, h: 60, d: 400},
        {x: 0, y: 0, w: 60, h: 60, d: 800}
    ]
}).scale(0.6).add();
var arrow_3 = canvas.display.sprite({
    x: 386,
    y: 503,
    image: "image/water-arrow/left.png",
    generate: false,
    frames: [
        {x: 60, y: 0, w: 60, h: 60, d: 400},
        {x: 0, y: 0, w: 60, h: 60, d: 800}
    ]
}).scale(0.6).add();
var arrow_4 = canvas.display.sprite({
    x: 311,
    y: 503,
    image: "image/water-arrow/left.png",
    generate: false,
    frames: [
        {x: 60, y: 0, w: 60, h: 60, d: 400},
        {x: 0, y: 0, w: 60, h: 60, d: 800}
    ]
}).scale(0.6).add();
var arrow_5 = canvas.display.sprite({
    x: 233,
    y: 503,
    image: "image/water-arrow/left.png",
    generate: false,
    frames: [
        {x: 60, y: 0, w: 60, h: 60, d: 400},
        {x: 0, y: 0, w: 60, h: 60, d: 800}
    ]
}).scale(0.6).add();
var arrow_6 = canvas.display.sprite({
    x: 156,
    y: 503,
    image: "image/water-arrow/left.png",
    generate: false,
    frames: [
        {x: 60, y: 0, w: 60, h: 60, d: 400},
        {x: 0, y: 0, w: 60, h: 60, d: 800}
    ]
}).scale(0.6).add();
var arrow_7 = canvas.display.sprite({
    x: 742,
    y: 503,
    image: "image/water-arrow/right.png",
    generate: false,
    frames: [
        {x: 60, y: 0, w: 60, h: 60, d: 400},
        {x: 0, y: 0, w: 60, h: 60, d: 800}
    ]
}).scale(0.6).add();
var arrow_8 = canvas.display.sprite({
    x: 823,
    y: 503,
    image: "image/water-arrow/right.png",
    generate: false,
    frames: [
        {x: 60, y: 0, w: 60, h: 60, d: 400},
        {x: 0, y: 0, w: 60, h: 60, d: 800}
    ]
}).scale(0.6).add();
var arrow_9 = canvas.display.sprite({
    x: 902,
    y: 503,
    image: "image/water-arrow/right.png",
    generate: false,
    frames: [
        {x: 60, y: 0, w: 60, h: 60, d: 400},
        {x: 0, y: 0, w: 60, h: 60, d: 800}
    ]
}).scale(0.6).add();
var arrow_10 = canvas.display.sprite({
    x: 980,
    y: 503,
    image: "image/water-arrow/right.png",
    generate: false,
    frames: [
        {x: 60, y: 0, w: 60, h: 60, d: 400},
        {x: 0, y: 0, w: 60, h: 60, d: 800}
    ]
}).scale(0.6).add();
var arrow_11 = canvas.display.sprite({
    x: 1055,
    y: 503,
    image: "image/water-arrow/right.png",
    generate: false,
    frames: [
        {x: 60, y: 0, w: 60, h: 60, d: 400},
        {x: 0, y: 0, w: 60, h: 60, d: 800}
    ]
}).scale(0.6).add();
var arrow_12 = canvas.display.sprite({
    x: 1133,
    y: 503,
    image: "image/water-arrow/right.png",
    generate: false,
    frames: [
        {x: 60, y: 0, w: 60, h: 60, d: 400},
        {x: 0, y: 0, w: 60, h: 60, d: 800}
    ]
}).scale(0.6).add();

//添加文字标注
var txt1=canvas.display.text({
    x:710,
    y:30,
    origin: { x:"center", y: "top" },
    font: "bold 36px sans-serif",
    fill:"#337ab7",
    text:"清水池工艺展示纵剖图"
}).add();
var txt2=canvas.display.text({
    x:630,
    y:565,
    origin: { x:"center", y: "top" },
    font: "bold 25px sans-serif",
    fill:"#337ab7",
    text:"活性炭池来水"
}).add();
var txt3=canvas.display.text({
    x:1220,
    y:565,
    origin: { x:"center", y: "top" },
    font: "bold 25px sans-serif",
    fill:"#337ab7",
    text:"清水池出水"
}).add();
//设置循环
canvas.setLoop(function () {
    SC01.advance();
    SC02.advance();
    SC03.advance();
    GD01.advance();
    if(SC01.full==1){
        SC02.start=1;
        SC03.start=1;
        arrow_1.start();
        arrow_2.start();
        arrow_3.start();
        arrow_4.start();
        arrow_5.start();
        arrow_6.start();
        arrow_7.start();
        arrow_8.start();
        arrow_9.start();
        arrow_10.start();
        arrow_11.start();
        arrow_12.start();
    }
    if(SC02.height_now>=SC02.Height*0.3){
        GD01.paused=1;
    }
    if(SC02.full==1){
        arrow_1.frame=2;
        arrow_2.frame=2;
        arrow_3.frame=2;
        arrow_4.frame=2;
        arrow_5.frame=2;
        arrow_6.frame=2;
        arrow_7.frame=2;
        arrow_8.frame=2;
        arrow_9.frame=2;
        arrow_10.frame=2;
        arrow_11.frame=2;
        arrow_12.frame=2;
        arrow_1.stopAnimation();
        arrow_2.stopAnimation();
        arrow_3.stopAnimation();
        arrow_4.stopAnimation();
        arrow_5.stopAnimation();
        arrow_6.stopAnimation();
        arrow_7.stopAnimation();
        arrow_8.stopAnimation();
        arrow_9.stopAnimation();
        arrow_10.stopAnimation();
        arrow_11.stopAnimation();
        arrow_12.stopAnimation();
    }
    canvas.redraw();
}).start();
    SC01.start=1;
    canvas.timeline.start();
//添加按钮函数
$("#btn_start").click(function(){
	if(this.value==1){
        SC01.start=1;
        canvas.redraw();
        this.innerHTML="&#xe608;";
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
        //window.location.reload();
        //GD01.init();
        //SC01.init();
        //SC02.init();
        //SC03.init();
        //SC01.start=1;
        canvas.clear();
        SC01.start=1;
    });

});
