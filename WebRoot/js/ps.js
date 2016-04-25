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
        x:275,y:665,height:58,width:225,trail_flag:0,speed:speed_SC*0.18,color:color_SC
    });
    var SC01=createSC({
        parent:canvas,
        x:601,y:665,height:39,width:51,trail_flag:0,speed:speed_SC,color:color_SC
    });

    var SC02=createSC({
        parent:canvas,
        x:707,y:665,height:39,width:44,trail_flag:0,speed:speed_SC,color:color_SC
    });

    var SC03=createSC({
        parent:canvas,
        x:776,y:665,height:39,width:228,trail_flag:0,speed:speed_SC*0.2,color:color_SC
    });

    var bg = canvas.display.image({
        x: 0,
        y: 0,
        image: "image/ps.png"
    }).add();

    var GD01=createGD({
        parent:canvas,
        cells:[
            {x_cell: 277, y_cell: 681},
            {x_cell: 494, y_cell: 681}
        ],
        GDwidth:width_all,
        color:color_GD
    });

    var GD02=createGD({
        parent:canvas,
        cells:[
            {x_cell: 604, y_cell: 686},
            {x_cell: 655, y_cell: 686}
        ],
        GDwidth:width_all,
        color:color_GD
    });

    var GD03=createGD({
        parent:canvas,
        cells:[
            {x_cell: 707, y_cell: 686},
            {x_cell: 755, y_cell: 686}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD04=createGD({
        parent:canvas,
        cells:[
            {x_cell: 772, y_cell: 686},
            {x_cell: 1005, y_cell: 686}
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
        x:643,
        y:25,
        origin: { x:"center", y: "top" },
        font: "bold 36px 微软雅黑",
        fill:"#0e406b",
        text:"配水泵房工艺展示纵剖图"
    });
    canvas.addChild(txt1);

    var txt2=canvas.display.text({
        x:304,
        y:611,
        origin: { x:"center", y: "top" },
        font: "bold 25px 微软雅黑",
        fill:"#337ab7",
        text:"来水"
    }).add();

    var txt3=canvas.display.text({
        x:1035,
        y:611,
        origin: { x:"center", y: "top" },
        font: "bold 25px 微软雅黑",
        fill:"#337ab7",
        text:"配水泵房出水"
    }).add();

    canvas.setLoop(function () {
        GD01.advance();        
        SC00.advance();
        GD02.advance();
        SC01.advance();
        SC02.advance();
        SC03.advance();
        GD03.advance();
        GD04.advance();

        if(GD01.full==1){
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
