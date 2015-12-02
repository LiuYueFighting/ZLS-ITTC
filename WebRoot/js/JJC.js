/**
 * Created by Administrator on 2015/7/21.
 */
oCanvas.domReady(function () {
    var speed_all=1.5,
        width_all=30,
        speed_SC=0.9,
        color_GD="#007fff",
        color_SC="#43d9f9";
    var canvas = oCanvas.create({
        canvas: "#canvas_JJC",
        background: "#ccc",
        fps: 25
    });

    var bg = canvas.display.image({
        x: 0,
        y: 0,
        image: "image/JJC_bg1.png"
    });

    var left_t=createSC({
        parent:canvas,
        x:468,y:429,height:38,width:45,trail_flag:1,speed:speed_SC,color:color_SC,
        trail: [
            {x_t: 0, y_t: 38},
            {x_t: 35, y_t: 38},
            {x_t: 35, y_t: 0}
        ]
    });

    var right_t=createSC({
        parent:canvas,
        x:792,y:429,height:38,width:45,trail_flag:1,speed:speed_SC,color:color_SC,
        trail: [
            {x_t: 0, y_t: 0},
            {x_t: 0, y_t: 38},
            {x_t: 35, y_t: 38}
        ]
    });

    var SC01=createSC({
        parent:canvas,
        x:212,y:349,height:230,width:860,trail_flag:1,speed:speed_SC,color:color_SC,
         trail: [
             {x_t: 0, y_t: 17},
             {x_t: 0, y_t: 230},
             {x_t: 860, y_t: 230},
             {x_t: 860, y_t: 17},
             {x_t: 829, y_t: 17},
             {x_t: 829, y_t: 8},
             {x_t: 572, y_t: 8},
             {x_t: 572, y_t: 0},
             {x_t: 292, y_t: 0},
             {x_t: 292, y_t: 8},
             {x_t: 31, y_t: 8},
             {x_t: 31, y_t: 17}
         ]
    });

    var x=140;
    var xx=140;
    var t=200;
    var sprite = canvas.display.sprite({
        x:574,
        y:451,
        origin: { x: "left", y: "top" },
        image: "image/JJC_flash.png",
        frames:[
            {x:0,y:0,h:200,w:x,d:t},
            {x:xx,y:0,h:200,w:x,d:t},
            {x:2*xx,y:0,h:200,w:x,d:t},
            {x:3*xx,y:0,h:200,w:x,d:t},
            {x:4*xx,y:0,h:200,w:x,d:t},
            {x:5*xx,y:0,h:200,w:x,d:t},
            {x:6*xx,y:0,h:200,w:x,d:t},
            {x:7*xx,y:0,h:200,w:x,d:t},
            {x:8*xx,y:0,h:200,w:x,d:t}
        ],
        frame:1
    }).add();
    canvas.addChild(bg);

    var arrow_1=canvas.display.sprite({
        x: 475,
        y: 442,
        image: "image/water-arrow/down.png",
        generate:false,
        frames: [
            {x:20,y:0,w:20,h:60,d:400},
            {x:0,y:0,w:20,h:60,d:800}
        ]
    }).add();

    var arrow_2=canvas.display.sprite({
        x: 785,
        y: 442,
        image: "image/water-arrow/down.png",
        generate:false,
        frames: [
            {x:20,y:0,w:20,h:60,d:400},
            {x:0,y:0,w:20,h:60,d:800}
        ]
    }).add();
    var arrow_3=canvas.display.sprite({
        x: 474,
        y: 292+36,
        image: "image/water-arrow/left_roll.png",
        generate:false,
        frames: [
            {x:60,y:0,w:60,h:60,d:400},
            {x:0,y:0,w:60,h:60,d:800}

        ]
    }).add();
    var arrow_4=canvas.display.sprite({
        x: 760,
        y: 292+36,
        image: "image/water-arrow/right_roll.png",
        generate:false,
        frames: [
            {x:60,y:0,w:60,h:60,d:400},
            {x:0,y:0,w:60,h:60,d:800}
        ]
    }).add();
    var arrow_5=canvas.display.sprite({
        x: 384,
        y: 515,
        image: "image/water-arrow/right.png",
        generate:false,
        frames: [
            {x:60,y:0,w:60,h:40,d:400},
            {x:0,y:0,w:60,h:40,d:800}
        ]
    }).add();
    var arrow_6=canvas.display.sprite({
        x: 850,
        y: 515,
        image: "image/water-arrow/left.png",
        generate:false,
        frames: [
            {x:60,y:0,w:60,h:40,d:400},
            {x:0,y:0,w:60,h:40,d:800}
        ]
    }).add();
    var arrow_7=canvas.display.sprite({
        x: 775+280,
        y: 310+30,
        image: "image/water-arrow/right.png",
        generate:false,
        frames: [
            {x:60,y:0,w:60,h:40,d:400},
            {x:0,y:0,w:60,h:40,d:800}
        ]
    }).add();

    var arrow_81=canvas.display.sprite({
        x: 256,
        y: 340,
        image: "image/water-arrow/upright_roll5.png",
        generate:false,
        frames: [
            {x:240,y:0,w:30,h:50,d:400},
            {x:0,y:0,w:200,h:50,d:800}
        ]
    }).add();
    var arrow_91=canvas.display.sprite({
        x: 838,
        y: 340,
        image: "image/water-arrow/upleft_roll5.png",
        generate:false,
        frames: [
            {x:240,y:0,w:30,h:50,d:400},
            {x:0,y:0,w:200,h:50,d:800}
        ]
    }).add();
    var arrow_101=canvas.display.sprite({
        x: 324,
        y: 465,
        image: "image/water-arrow/nike_left.png",
        generate:false,
        frames: [
            {x:80,y:0,w:80,h:50,d:400},
            {x:0,y:0,w:80,h:50,d:800}
        ]
    }).add();
    var arrow_102=canvas.display.sprite({
        x: 886,
        y: 465,
        image: "image/water-arrow/nike_right.png",
        generate:false,
        frames: [
            {x:80,y:0,w:80,h:50,d:400},
            {x:0,y:0,w:80,h:50,d:800}
        ]
    }).add();
    var arrow_111=canvas.display.sprite({
        x: 324+185,
        y: 465+57,
        image: "image/water-arrow/right_throw.png",
        generate:false,
        frames: [
            {x:70,y:0,w:70,h:50,d:400},
            {x:0,y:0,w:70,h:50,d:800}

        ]
    }).add();
    var arrow_112=canvas.display.sprite({
        x: 324+381,
        y: 465+52,
        image: "image/water-arrow/left_throw.png",
        generate:false,
        frames: [
            {x:70,y:0,w:70,h:50,d:400},
            {x:0,y:0,w:70,h:50,d:800}

        ]
    }).add();

    var GD01=createGD({
        parent:canvas,
        cells:[
            {x_cell: 127,y_cell: 511},
            {x_cell: 189, y_cell: 511},
            {x_cell: 258, y_cell: 448},
            {x_cell: 477, y_cell: 448}
        ],
        GDwidth:width_all,
        color:color_GD
    });

    var GD02=createGD({
        parent:canvas,
        cells:[
            {x_cell: 1109,y_cell: 380},
            {x_cell: 1109, y_cell: 505},
            {x_cell: 1130, y_cell: 523},
            {x_cell: 1209, y_cell: 523}
        ],
        GDwidth:width_all,
        color:color_GD
    });

    var txt1=canvas.display.text({
        x:650,
        y:30,
        origin: { x:"center", y: "top" },
        font: "bold 36px sans-serif",
        fill:"#337ab7",
        text:"机加池工艺展示纵剖图"
    });
    canvas.addChild(txt1);
    var txt2=canvas.display.text({
        x:110,
        y:460,
        origin: { x:"center", y: "top" },
        font: "bold 25px sans-serif",
        fill:"#337ab7",
        text:"混合井来水"
    });
    canvas.addChild(txt2);
    var txt3=canvas.display.text({
        x:1220,
        y:470,
        origin: { x:"center", y: "top" },
        font: "bold 25px sans-serif",
        fill:"#337ab7",
        text:"机加池出水"
    });
    canvas.addChild(txt3);

    canvas.setLoop(function () {
        GD01.advance();
        GD02.advance();
        SC01.advance();
        left_t.advance();
        right_t.advance();
        
        if(GD01.full==1){
            left_t.start=1;
            right_t.start=1;

            arrow_1.start();
            arrow_2.start();
            arrow_111.start();
            arrow_112.start();
        }
        if(left_t.full==1 && right_t.full==1){
            SC01.start=1;
            arrow_1.frame=2;
            arrow_2.frame=2;
            arrow_3.start();
            arrow_4.start();
            arrow_5.start();
            arrow_6.start();

            arrow_101.start();
            arrow_102.start();
            arrow_111.frame=2;
            arrow_112.frame=2;
        }
        if(SC01.height_now>=SC01.Height*0.8){
            arrow_81.start();
            arrow_91.start();
        }
        if(SC01.full==1){
        	GD02.paused = 1;
            arrow_7.start();
        }
        if(GD02.full==1){
            arrow_3.frame=2;
            arrow_4.frame=2;
            arrow_5.frame=2;
            arrow_6.frame=2;
            arrow_81.frame=2;
            arrow_91.frame=2;
            arrow_101.frame=2;
            arrow_102.frame=2;
        }

        canvas.redraw();
    }).start();
    GD01.paused=1;
    canvas.timeline.start();
    sprite.startAnimation();
    $("#btn_start").click(function(){
        if(this.value==1){
            GD01.paused=1;
            canvas.redraw();
            this.innerHTML="&#xe61f;";
            this.value=0;
            canvas.timeline.start();
            sprite.startAnimation();
        }
        else{
            this.innerHTML='&#xe626;';
            this.value=1;
            canvas.timeline.stop();
            sprite.stopAnimation();
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
        //GD02.init();
        //left_t.init();
        //right_t.init();
        //GD01.paused=1;
    });
});
