/**
 * Created by Administrator on 2016/4/25.
 */
oCanvas.domReady(function () {

    var canvas = oCanvas.create({
        canvas: "#canvas_ps",
        background: "#ccc",
        fps: 25
    });
    var width_all=30,
        speed_SC=0.9,
        color_GD="#007fff",
        color_SC="#43d9f9";
    var SC00=createSC({
        parent:canvas,
        x:247,y:600,height:58,width:159,trail_flag:0,speed:speed_SC*0.3,color:color_SC
    });
    var SC001=createSC({
        parent:canvas,
        x:422,y:610,height:35,width:27,trail_flag:0,speed:speed_SC,color:color_SC
    });
    var SC01=createSC({
        parent:canvas,
        x:542,y:615,height:39,width:51,trail_flag:0,speed:speed_SC,color:color_SC
    });

    var SC02=createSC({
        parent:canvas,
        x:638,y:615,height:39,width:44,trail_flag:0,speed:speed_SC,color:color_SC
    });

    var SC03=createSC({
        parent:canvas,
        x:700,y:615,height:39,width:210,trail_flag:0,speed:speed_SC*0.21,color:color_SC
    });

    var bg = canvas.display.image({
        x: 0,
        y: 0,
        image: "image/ps.png"
    }).add();

    var GD01=createGD({
        parent:canvas,
        cells:[
            {x_cell: 247, y_cell: 626},
            {x_cell: 406, y_cell: 626}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD001=createGD({
        parent:canvas,
        cells:[
            {x_cell: 423, y_cell: 626},
            {x_cell: 472, y_cell: 626}
        ],
        GDwidth:width_all,
        color:color_GD
    });

    var GD02=createGD({
        parent:canvas,
        cells:[
            {x_cell: 542, y_cell: 631},
            {x_cell: 591, y_cell: 631}
        ],
        GDwidth:width_all,
        color:color_GD
    });

    var GD03=createGD({
        parent:canvas,
        cells:[
            {x_cell: 638, y_cell: 631},
            {x_cell: 680, y_cell: 631}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD04=createGD({
        parent:canvas,
        cells:[
            {x_cell: 700, y_cell: 631},
            {x_cell: 935, y_cell: 631}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var fg = canvas.display.image({
        x: 0,
        y: 0,
        image: "image/ps.png"
    }).add();

    var txt1=canvas.display.text({
        x:580,
        y:25,
        origin: { x:"center", y: "top" },
        font: "bold 36px 微软雅黑",
        fill:"#0e406b",
        text:"配水泵房工艺展示纵剖图"
    });
    canvas.addChild(txt1);

    var txt2=canvas.display.text({
        x:280,
        y:578, 
        origin: { x:"center", y: "top" },
        font: "bold 25px 微软雅黑",
        fill:"#337ab7",
        text:"来水"
    }).add();

    var txt3=canvas.display.text({
        x:930,
        y:578,
        origin: { x:"center", y: "top" },
        font: "bold 25px 微软雅黑",
        fill:"#337ab7",
        text:"配水泵房出水"
    }).add();

    canvas.setLoop(function () {
        GD01.advance();
        GD001.advance();
        SC00.advance();
        SC001.advance();
        GD02.advance();
        SC01.advance();
        SC02.advance();
        SC03.advance();
        GD03.advance();
        GD04.advance();

        if(GD01.full==1){
        	SC001.start = 1;
        	GD001.paused = 1;
        }
        if(GD001.full==1){
        	SC01.start = 1;
        	GD02.paused = 1;
        }
        if(GD02.full==1) {
        	SC02.start = 1;
        	GD03.paused = 1;
        }
        if(GD03.full==1) {
        	SC03.start = 1;
        	GD04.paused = 1;
        }
        canvas.redraw();
    }).start();
    SC00.start=1;
    GD01.paused=1;
    canvas.timeline.start();
    $("#btn_start").click(function(){
        if(this.value==1){
        	SC00.start=1;
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
        //SC03.init();
        //GD03.init();
        //GD01.paused=1;
    });

});
