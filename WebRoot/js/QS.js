/**
 * Created by Administrator on 2015/7/21.
 */
oCanvas.domReady(function () {

    var canvas = oCanvas.create({
        canvas: "#canvas_QS_zp",
        background: "#ccc",
        fps: 25
    });
    var width_all=30,
        speed_SC=0.9,
        color_GD="#007fff",
        color_SC="#43d9f9";
    var SC01=createSC({
        parent:canvas,
        x:326,y:200,height:438,width:181,trail_flag:0,speed:speed_SC,color:color_SC
    });

    var SC02=createSC({
        parent:canvas,
        x:496,y:567,height:72,width:186,trail_flag:0,speed:speed_SC,color:color_SC
    });

    var SC03=createSC({
        parent:canvas,
        x:841,y:219,height:393,width:144,trail_flag:0,speed:speed_SC,color:color_SC
    });

    var fg = canvas.display.image({
        x: 0,
        y: 0,
        image: "image/QS_v.png"
    });
    canvas.addChild(fg);

    var arrow_1=canvas.display.sprite({
        x: 845,
        y: 200,
        image: "image/water-arrow/left_roll.png",
        generate:false,
        frames: [
            {x:60,y:0,w:60,h:60,d:400},
            {x:0,y:0,w:60,h:60,d:800}
        ]
    }).add();

    var arrow_2=canvas.display.sprite({
        x: 910,
        y: 200,
        image: "image/water-arrow/right_roll.png",
        generate:false,
        frames: [
            {x:60,y:0,w:60,h:60,d:400},
            {x:0,y:0,w:60,h:60,d:800}
        ]
    }).add();

    var GD01=createGD({
        parent:canvas,
        cells:[
            {x_cell: 195, y_cell: 587},
            {x_cell: 335, y_cell: 587}
        ],
        GDwidth:width_all,
        color:color_GD
    });

    var GD02=createGD({
        parent:canvas,
        cells:[
            {x_cell: 599, y_cell: 600},
            {x_cell: 599, y_cell: 521},
            {x_cell: 907, y_cell: 521},
            {x_cell: 907, y_cell: 232}
        ],
        GDwidth:width_all,
        color:color_GD
    });

    var GD03=createGD({
        parent:canvas,
        cells:[
            {x_cell: 985, y_cell: 587},
            {x_cell: 1146, y_cell: 587}
        ],
        GDwidth:width_all,
        color:color_GD
    });

    var txt1=canvas.display.text({
        x:700,
        y:30,
        origin: { x:"center", y: "top" },
        font: "bold 36px Tahoma",
        fill:"#337ab7",
        text:"取水泵房工艺展示纵剖图"
    });
    canvas.addChild(txt1);

    var txt2=canvas.display.text({
        x:204,
        y:531,
        origin: { x:"center", y: "top" },
        font: "bold 25px sans-serif",
        fill:"#337ab7",
        text:"来水"
    }).add();

    var txt3=canvas.display.text({
        x:1149,
        y:531,
        origin: { x:"center", y: "top" },
        font: "bold 25px sans-serif",
        fill:"#337ab7",
        text:"取水泵房出水"
    }).add();

    canvas.setLoop(function () {
        GD01.advance();
        SC01.advance();
        SC02.advance();
        GD02.advance();
        SC03.advance();
        GD03.advance();

        if(GD01.full==1){
        	SC01.start = 1;
        	SC02.start = 1;
        }

        if(SC02.full==1){
        	GD02.paused = 1;
        }
        if(GD02.full==1) {
        	SC03.start = 1;
            arrow_1.start();
            arrow_2.start();
        }
        if(SC03.full==1) {
        	GD03.paused = 1;
        }
        canvas.redraw();
    }).start();
    GD01.paused=1;
    canvas.timeline.start();
    $("#btn_start").click(function(){
        if(this.value==1){
            GD01.paused=1;
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
