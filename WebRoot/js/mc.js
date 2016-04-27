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
    var SC02=createSC({
        parent:canvas,
        x:269,y:281,height:180,width:102,trail_flag:0,speed:speed_SC,color:color_SC
    });
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
        image: "image/mc_test.png"
    });
    canvas.addChild(fg);

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

        if(GD00.full==1&&GD01.full==1){
        	SC01.start=1;
        	GD00.full=0;
        	GD01.full=0;
        }
        if(SC01.full==1){
        	SC03.start=1;
        	SC04.start=1;
        	GD02.paused=1;
        	GD03.paused=1;
        	SC01.full=0;
        }
        if(SC03.height_now>=86){
        	SC02.start=1;        	
        	GD03.full=0;
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
