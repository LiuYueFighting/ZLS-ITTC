/**
 * Created by Administrator on 2015/12/2.
 */
/**
 * Created by Administrator on 2015/7/21.
 */
oCanvas.domReady(function () {

    var canvas = oCanvas.create({
        canvas: "#canvas_QS_mc",
        background: "#ccc",
        fps: 25
    });
    var width_all=30,
        speed_SC=0.9,
        color_GD="#007fff",
        color_SC="#43d9f9";
    
    
    
    var SC00=createSC({
        parent:canvas,
        x:250,y:565,height:46,width:113,trail_flag:0,speed:speed_SC,color:color_SC
    });
    var SC01=createSC({
        parent:canvas,
        x:259,y:533,height:32,width:103,trail_flag:0,speed:speed_SC,color:color_SC
    });
//    var SC02=createSC1({
//        parent:canvas,
//        x:269,y:281,height:180,width:102,trail_flag:0,speed:speed_SC,a:0,color:"rgba(26,215,255,0)"
//    });
    var SC02 = canvas.display.SC_show_fill({
        x: 269,
        y: 281,
        Width: 102,
        Height: 180,
        height_now: 180,
        trail_flag: 0,
        t: 7540,
        speed:speed_SC*1.5,
//        a:0.1,
        fill:"rgba(26,215,255,0)",
        full:0,
        start:0
    });
    canvas.addChild(SC02);
    var SC03=createSC({
        parent:canvas,
        x:291,y:311,height:228,width:13,trail_flag:0,speed:speed_SC*1.2,color:color_SC
    });
    var SC04=createSC({
        parent:canvas,
        x:342,y:311,height:228,width:13,trail_flag:0,speed:speed_SC*1.2,color:color_SC
    });

    
    
    var GD00=createGD({
        parent:canvas,
        cells:[
            {x_cell: 272,y_cell: 605},
            {x_cell: 272, y_cell: 565}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD01=createGD({
        parent:canvas,
        cells:[
            {x_cell: 322,y_cell: 605},
            {x_cell: 322, y_cell: 565}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD02=createGD({
        parent:canvas,
        cells:[
            {x_cell: 297,y_cell: 533},
            {x_cell: 297, y_cell: 314}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD03=createGD({
        parent:canvas,
        cells:[
            {x_cell: 348,y_cell: 533},
            {x_cell: 348, y_cell: 314}
        ],
        GDwidth:width_all,
        color:color_GD
    });

    var fg = canvas.display.image({
        x: 0,
        y: 0,
//        height:100,
//        width:100,
        image: "image/mc_test.png"
    });
    canvas.addChild(fg);
    var bg = canvas.display.image({
        x: 390,
        y: 129,
        height:1,
        width:1,
        image: "image/mc_bg2.png"
    });
    canvas.addChild(bg);
    var jtbg = canvas.display.image({
        x: 390,
        y: 100,
        height:1,
        width:1,
        image: "image/mc_bg.png"
    });
    canvas.addChild(jtbg);
        
//    var SC05=createSC({
//        parent:canvas,
//        x:830,y:200,height:45,width:45,trail_flag:0,speed:speed_SC*1.2,color:color_SC
//    });
    var SC05 = canvas.display.SC_show_down({
        x: 805,
        y: 160,
        Width: 31,
        Height: 80,
        height_now: 0,
        trail_flag: 0,
        t: 7540,
        speed:speed_SC*2,
        fill:color_SC,
        full:0,
        start:0
    });
    canvas.addChild(SC05);
    var SC051 = canvas.display.SC_show_down({
        x: 717,
        y: 237,
        Width: 196,
        Height: 90,
        height_now: 0,
        trail_flag: 0,
        t: 7540,
        speed:speed_SC*2.8,
        fill:color_SC,
        full:0,
        start:0
    });
    canvas.addChild(SC051);
    var SC06=createSC({
        parent:canvas,
        x:805,y:467,height:80,width:31,trail_flag:0,speed:speed_SC*2,color:color_SC
    });
    var SC061=createSC({
        parent:canvas,
        x:717,y:377,height:90,width:186,trail_flag:0,speed:speed_SC*1.7,color:color_SC
    });
    var SC07 = canvas.display.SC_show_fill({
        x: 511,
        y: 243,
        Width: 209,
        Height: 107,
        height_now: 107,
        trail_flag: 1,
        trail: [
		{x_t: 0, y_t: 0},
		{x_t: 0, y_t: 107},
		{x_t: 148, y_t: 107},
		{x_t: 148, y_t: 87},
		{x_t: 209, y_t: 87},
		{x_t: 209, y_t: 0}
		],
        t: 7540,
        speed:speed_SC*1.5,
//        a:0.1,
        fill:"rgba(26,215,255,0)",
        full:0,
        start:0
    });
    canvas.addChild(SC07);
    
    var SC071 = canvas.display.SC_show_fill({
        x: 511,
        y: 361,
        Width: 209,
        Height: 104,
        height_now: 107,
        trail_flag: 1,
        trail: [
		{x_t: 0, y_t: 0},
		{x_t: 150, y_t: 0},
		{x_t: 150, y_t: 17},
		{x_t: 209, y_t: 17},
		{x_t: 209, y_t: 104},
		{x_t: 0, y_t: 104}
		],
        t: 7540,
        speed:speed_SC*1.5,
//        a:0.1,
        fill:"rgba(26,215,255,0)",
        full:0,
        start:0
    });
    canvas.addChild(SC071);
    
    var GD04=createGD({
        parent:canvas,
        cells:[
            {x_cell: 821,y_cell: 162},
            {x_cell: 821, y_cell: 240}
        ],
        GDwidth:width_all,
        color:color_GD
    });   
    var GD05=createGD({
        parent:canvas,
        cells:[
            {x_cell: 821,y_cell: 545},
            {x_cell: 821, y_cell: 467}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var SC08=createSC({
        parent:canvas,
        x:680,y:331,height:45,width:345,trail_flag:0,speed:speed_SC*0.1,color:color_SC
    });
    var SC081=createSC({
        parent:canvas,
        x:438,y:351,height:10,width:242,trail_flag:0,speed:speed_SC*0.05,color:color_SC
    });
    var GD06=createGD({
        parent:canvas,
        cells:[
            {x_cell: 571,y_cell: 355},
            {x_cell: 1020, y_cell: 355}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD061=createGD({
        parent:canvas,
        cells:[
            {x_cell: 571,y_cell: 355},
            {x_cell: 438, y_cell: 355}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    
    var detail = canvas.display.image({
        x: 390,
        y: 100,
        height:1,
        width:1,
        image: "image/mc_in.png"
    });
    canvas.addChild(detail);     

    var txt1=canvas.display.text({
        x:700,
        y:30,
        origin: { x:"center", y: "top" },
        font: "bold 36px 微软雅黑",
        fill:"#0e406b",
        text:"膜车间工艺展示纵剖图"
    });
    canvas.addChild(txt1);

    var txt2=canvas.display.text({
        x:205,
        y:585,
        origin: { x:"center", y: "top" },
        font: "bold 25px 微软雅黑",
        fill:"#337ab7",
        text:"来水"
    }).add();

    var txt3=canvas.display.text({
        x:1159,
        y:581,
        origin: { x:"center", y: "top" },
        font: "bold 25px 微软雅黑",
        fill:"#337ab7",
        text:"出水"
    }).add();
    
    canvas.setLoop(function () {
       
    	GD00.advance();
    	GD01.advance();
    	SC00.advance();
        SC01.advance();
        GD02.advance();
        GD03.advance();
        SC02.advance();
        SC03.advance();
        SC04.advance();
        GD04.advance();
        GD05.advance();
        SC05.advance();
        SC051.advance();
        SC06.advance();
        SC061.advance();
        SC07.advance();
        SC071.advance();
        GD06.advance();
        GD061.advance();
        SC08.advance();
        SC081.advance();

        if(GD00.full==1&&GD01.full==1){
        	SC01.start=1;
        	GD00.full=0;
        	GD01.full=0;
//        	fg.width=1;
//        	fg.height=1;
//        	canvas.redraw();
        	
        }
        if(SC01.full==1){
        	SC03.start=1;
        	SC04.start=1;
        	GD02.paused=1;
        	GD03.paused=1;
        	SC01.full=0;
        }
        if(GD03.full==1){
        	SC02.start=1;        	
        	GD03.full=0;
        	
        }
        if(SC02.full==1){
        	detail.width=650;
        	detail.height=500;
        	bg.width=650;
        	bg.height=450;
        	jtbg.width=650;
        	jtbg.height=500;
        	GD04.paused=1;
        	GD05.paused=1;
        	SC05.start=1;
        	SC06.start=1;       	
        }
        if(GD04.full==1){
        	SC051.start=1;
        	SC061.start=1;
//        	SC07.start=1;
//        	console.log(GD06.state);
//        	GD06.state=3;
//        	console.log(GD06.state);
        	
        }
        if(SC051.full==1){       	
        	SC07.start=1;
        	SC071.start=1;
        }
        if(SC07.full==1){       	
        	GD06.paused=1;
        	GD061.paused=1;
        	SC08.start=1;
        	SC081.start=1;
        }
        if(SC081.full==1){       	
        	SC08.start=1;
        }
        canvas.redraw();
    }).start();
       SC00.start=1;
       GD00.paused=1;
       GD01.paused=1;
       
       canvas.timeline.start();
    $("#btn_start").click(function(){
        if(this.value==1){
        	SC00.start=1;
        	GD00.paused=1;
            GD01.paused=1;
//            detail.width=600;
//        	detail.height=350;
//        	jtbg.width=600;
//        	jtbg.height=350;
            
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
    });

});
