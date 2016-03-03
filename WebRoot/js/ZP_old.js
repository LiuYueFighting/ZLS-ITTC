/**
 * Created by Administrator on 2015/7/28.
 */
$(document).ready(function(){
	
    oCanvas.domReady(function () {
    	
        var speed_all=1.5,
            width_all=20,
            speed_SC=0.9,
            color_GD="#007fff",
            color_SC="#43d9f9",
            color_txt="#337ab7";

        var start_all = 0,
            paused_all = 0;

        var canvas = oCanvas.create({
            canvas: "#canvas_ZP_old",
            background: "#ccc",
            fps: 40
        });
        var bg = canvas.display.image({
            x: 0,
            y: 0,
            image: "image/waterLine_old.png"
        });
        var bg1 = canvas.display.image({
            x: 0,
            y: 0,
            image: "image/waterLine_bg.png"
        });

        canvas.addChild(bg1);
        
        var SC01 = canvas.display.SC_show({
            x: 234, y: 178,
            Width: 359, Height: 175,
            height_now: 0,
            trail_flag: 0,
            t: 0,
            start:start_all,
            full:0,
            speed:speed_SC,
            fill: color_SC
        });
        canvas.addChild(SC01);

        var SC02 = canvas.display.SC_show({
            x: 718, y: 180,
            Width: 74, Height: 161,
            height_now: 0,
            trail_flag: 0,
            t: 0,
            start:start_all,
            full:0,
            speed:speed_SC,
            fill: color_SC
        });
        canvas.addChild(SC02);

        var SC03 = canvas.display.SC_show({
            x: 792, y: 180,
            Width: 37, Height:163,
            height_now: 0,
            trail_flag: 0,
            t: 0,
            start:start_all,
            full:0,
            speed:speed_SC,
            fill: color_SC
        });
        canvas.addChild(SC03);
        var left_t=canvas.display.SC_show({
            x:1161,
            y:292,
            Width:15,
            Height:15,
            height_now:0,
            trail_flag:1,
            trail:[
                {x_t:0,y_t:15},
                {x_t:15,y_t:15},
                {x_t:15,y_t:0}
            ],
            fill: color_SC,
            speed:speed_SC,
            full:0,
            start:start_all
        }).add();
        var right_t=canvas.display.SC_show({
            x:1308,
            y:284,
            Width:25,
            Height:25,
            height_now:0,
            trail_flag:1,
            trail:[
                {x_t:0,y_t:0},
                {x_t:0,y_t:25},
                {x_t:25,y_t:25}
            ],
            fill: color_SC,
            speed:speed_SC,
            full:0,
            start:start_all
        }).add();
        var SC04 = canvas.display.SC_show({
            x: 1026,
            y: 185,
            Width: 431,
            Height: 208,
            height_now: 0,
            trail_flag: 1,
            trail: [
                {x_t: 0, y_t: 24},
                {x_t: 78, y_t: 208},
                {x_t: 335, y_t: 208},
                {x_t: 417, y_t: 24},
                {x_t: 417, y_t: 0},
                {x_t: 22, y_t: 0},
                {x_t: 22, y_t: 24}
            ],
            t: 1405,
            fill: color_SC,
            speed:speed_SC,
            full:0,
            start:start_all
        });
        canvas.addChild(SC04);

        //5、6原来表示的是机加池左右的两个池子
        var SC05 = canvas.display.SC_show({
            x: 1034,
            y: 196,
            Width: 424,
            Height: 16,
            height_now: 0,
            trail_flag: 0,
            t: 1405,
            fill: color_SC,
            speed:speed_SC,
            full:0,
            start:start_all
        });
        canvas.addChild(SC05);

        var SC06 = canvas.display.SC_show({
            x: 1458,
            y: 196,
            Width: 14,
            Height: 18,
            height_now: 0,
            trail_flag: 0,
            t: 0,
            fill: color_SC,
            speed:speed_SC,
            full:0,
            start:start_all
        });
        canvas.addChild(SC06);

        var SC07 = canvas.display.SC_show({
            x: 1200,
            y: 595,
            Width: 153,
            Height: 51,
            height_now: 0,
            trail_flag: 0,
            t: 0,
            fill: color_SC,
            speed:speed_SC/2,
            full:0,
            start:start_all
        });
        canvas.addChild(SC07);

        var SC08 = canvas.display.SC_show({
            x: 1149,
            y: 631,
            Width: 50,
            Height: 38,
            height_now: 0,
            trail_flag: 0,
            t: 0,
            fill: color_SC,
            speed:speed_SC/2,
            full:0,
            start:start_all
        });
        canvas.addChild(SC08);

        var SC09 = canvas.display.SC_show({
            x: 1021,
            y: 562,
            Width: 38,
            Height: 92,
            height_now: 0,
            trail_flag: 0,
            t: 0,
            fill: color_SC,
            speed:speed_SC,
            full:0,
            start:start_all
        });
        canvas.addChild(SC09);

        var SC10 = canvas.display.SC_show({
            x: 971,
            y: 562,
            Width: 51,
            Height: 92,
            height_now: 0,
            trail_flag: 0,
            t: 0,
            fill: color_SC,
            speed:speed_SC,
            full:0,
            start:start_all
        });
        canvas.addChild(SC10);

        var SC11 = canvas.display.SC_show({
            x: 895,
            y: 562,
            Width: 75,
            Height: 92,
            height_now: 0,
            trail_flag: 0,
            t: 0,
            fill: color_SC,
            speed:speed_SC,
            full:0,
            start:start_all
        });
        canvas.addChild(SC11);

        var SC12 = canvas.display.SC_show({
            x: 845,
            y: 562,
            Width: 52,
            Height: 92,
            height_now: 0,
            trail_flag: 0,
            t: 0,
            fill: color_SC,
            speed:speed_SC,
            full:0,
            start:start_all
        });
        canvas.addChild(SC12);

        var SC13 = canvas.display.SC_show({
            x: 814,
            y: 562,
            Width: 30,
            Height: 92,
            height_now: 0,
            trail_flag: 0,
            t: 0,
            fill: color_SC,
            speed:speed_SC,
            full:0,
            start:start_all
        });
        canvas.addChild(SC13);

        var SC14 = canvas.display.SC_show({
            x: 536,
            y: 590,
            Width: 113,
            Height: 65,
            height_now: 0,
            trail_flag: 0,
            t: 0,
            fill: color_SC,
            speed:speed_SC,
            full:0,
            start:start_all
        });
        canvas.addChild(SC14);
        var SC131 = canvas.display.SC_show({
            x: 649,
            y: 622,
            Width: 14,
            Height: 29,
            height_now: 0,
            trail_flag: 0,
            t: 0,
            fill: color_SC,
            speed:speed_SC,
            full:0,
            start:start_all
        });
        var SC141 = canvas.display.SC_show({
            x: 516,
            y: 586,
            Width: 19,
            Height: 17,
            height_now: 0,
            trail_flag: 0,
            t: 0,
            fill: color_SC,
            speed:speed_SC,
            full:0,
            start:start_all
        });
        canvas.addChild(SC14);
        var SC15 = canvas.display.SC_show({
            x: 164,
            y: 576,
            Width: 336,
            Height: 77,
            height_now: 0,
            trail_flag: 0,
            t: 0,
            fill: color_SC,
            speed:speed_SC,
            full:0,
            start:start_all
        });
        canvas.addChild(SC15);




        var GD01 = canvas.display.GD({
            destination: {
                x_d: 0, y_d: 0
            },
            cells: [
                {x_cell: 170 ,y_cell: 333},
                {x_cell: 242, y_cell: 333}
            ],
            deta: 1,
            deta_x: 1,
            deta_y: 0,
            flag_x: 1,
            flag_y: 0,
            cellIndex: 0,
            Speed: speed_all,
            GDwidth: 30,
            LineHeight: 5,
            x_now: 0,
            y_now: 0,
            firstX: 0,
            firstY: 0,
            beginHeight: 0,
            endHeight: 0,
            legacyHeight: 0,
            paused: 1,
            fill:color_GD,
            full:0
        });
        canvas.addChild(GD01);

        var GD02 = canvas.display.GD({
            destination: {
                x_d: 0, y_d: 0
            },
            cells: [
                {x_cell: 581, y_cell: 330},
                {x_cell: 749, y_cell: 330},
                {x_cell: 749, y_cell: 305}
            ],  //锟秸碉拷锟斤拷锟斤拷
            deta: 1,
            deta_x: 1, deta_y: 0,
            flag_x: 1, flag_y: 0,
            cellIndex: 0,
            Speed:speed_all,
            GDwidth: 20,
            LineHeight: 5,
            x_now: 0,  y_now: 0,
            firstX: 0, firstY: 0,
            beginHeight: 0, endHeight: 0,
            legacyHeight: 0,
            paused: paused_all,
            fill:color_GD,
            full:0
        });
        canvas.addChild(GD02);

        var GD03 = canvas.display.GD({
            destination: {
                x_d: 0, y_d: 0
            },
            cells: [
                {x_cell: 821, y_cell: 333},
                {x_cell: 1041, y_cell: 333},
                {x_cell: 1085, y_cell: 298},
                {x_cell: 1160, y_cell: 298}
            ],  //锟秸碉拷锟斤拷锟斤拷
            deta: 1,
            deta_x: 1, deta_y: 0,
            flag_x: 1, flag_y: 0,
            cellIndex: 0,
            Speed: speed_all,
            GDwidth: 20,
            LineHeight: 5,
            x_now: 0,  y_now: 0,
            firstX: 0, firstY: 0,
            beginHeight: 0, endHeight: 0,
            legacyHeight: 0,
            paused: paused_all,
            fill:color_GD,
            full:0
        });
        canvas.addChild(GD03);

        var GD04 = canvas.display.GD({
            destination: {
                x_d: 0, y_d: 0
            },
            cells: [
                {x_cell: 1463, y_cell: 215},
                {x_cell: 1463, y_cell: 576},
                {x_cell: 1353, y_cell: 576}
            ],
            deta: 1,
            deta_x: 1, deta_y: 0,
            flag_x: 1, flag_y: 0,
            cellIndex: 0,
            Speed: speed_all,
            GDwidth: 30,
            LineHeight: 5,
            x_now: 0,  y_now: 0,
            firstX: 0, firstY: 0,
            beginHeight: 0, endHeight: 0,
            legacyHeight: 0,
            paused: paused_all,
            fill:color_GD,
            full:0
        });
        canvas.addChild(GD04);

        var GD05 = canvas.display.GD({
            destination: {
                x_d: 0, y_d: 0
            },
            cells: [
                {x_cell: 1352, y_cell: 577},
                {x_cell: 1200, y_cell: 577}
            ],
            deta: 1,
            deta_x: 1, deta_y: 0,
            flag_x: 1, flag_y: 0,
            cellIndex: 0,
            Speed: speed_all,
            GDwidth:30,
            LineHeight: 5,
            x_now: 0,  y_now: 0,
            firstX: 0, firstY: 0,
            beginHeight: 0, endHeight: 0,
            legacyHeight: 0,
            paused: paused_all,
            fill:color_GD,
            full:0
        });


        //var GD06 = canvas.display.GD({
        //    destination: {
        //        x_d: 0, y_d: 0
        //    },
        //    cells: [
        //        {x_cell: 1264, y_cell: 640},
        //        {x_cell: 1264, y_cell: 536},
        //        {x_cell: 1284, y_cell: 536},
        //        {x_cell: 1284, y_cell: 697},
        //        {x_cell: 1052, y_cell: 697},
        //        {x_cell: 1052, y_cell: 634},
        //        {x_cell: 1016, y_cell: 634}
        //    ],  //锟秸碉拷锟斤拷锟斤拷
        //    deta: 1,
        //    deta_x: 1, deta_y: 0,
        //    flag_x: 1, flag_y: 0,
        //    cellIndex: 0,
        //    Speed: speed_all,
        //    GDwidth: 20,
        //    LineHeight: 5,
        //    x_now: 0,  y_now: 0,
        //    firstX: 0, firstY: 0,
        //    beginHeight: 0, endHeight: 0,
        //    legacyHeight: 0,
        //    paused: paused_all,
        //    fill:color_GD,
        //    full:0
        //});
        //canvas.addChild(GD06);
        //
        //var GD07 = canvas.display.GD({
        //    destination: {
        //        x_d: 0, y_d: 0
        //    },
        //    cells: [
        //            {x_cell: 1264, y_cell: 640},
        //            {x_cell: 1264, y_cell: 536},
        //            {x_cell: 1284, y_cell: 536},
        //            {x_cell: 1284, y_cell: 697},
        //            {x_cell: 515, y_cell: 697},
        //            {x_cell: 515, y_cell: 633},
        //            {x_cell: 493, y_cell: 633}
        //    ],  //锟秸碉拷锟斤拷锟斤拷
        //    deta: 1,
        //    deta_x: 1, deta_y: 0,
        //    flag_x: 1, flag_y: 0,
        //    cellIndex: 0,
        //    Speed:speed_all,
        //    GDwidth: 20,
        //    LineHeight: 5,
        //    x_now: 0,  y_now: 0,
        //    firstX: 0, firstY: 0,
        //    beginHeight: 0, endHeight: 0,
        //    legacyHeight: 0,
        //    paused: paused_all,
        //    fill:color_GD,
        //    full:0
        //});
        //canvas.addChild(GD07);

        var GD08 = canvas.display.GD({
            destination: {
                x_d: 0, y_d: 0
            },
            cells: [
                {x_cell: 1175, y_cell: 670},
                {x_cell: 1175, y_cell: 700},
                {x_cell: 1106, y_cell: 700},
                {x_cell: 1106, y_cell: 598},
                {x_cell: 1060, y_cell: 598}
            ],
            deta: 1,
            deta_x: 1, deta_y: 0,
            flag_x: 1, flag_y: 0,
            cellIndex: 0,
            Speed:speed_all,
            GDwidth: 20,
            LineHeight: 5,
            x_now: 0,  y_now: 0,
            firstX: 0, firstY: 0,
            beginHeight: 0, endHeight: 0,
            legacyHeight: 0,
            paused: paused_all,
            fill:color_GD,
            full:0
        });
        canvas.addChild(GD08);
        
        var GD09 = canvas.display.GD({
            destination: {
                x_d: 0, y_d: 0
            },
            cells: [
                {x_cell: 1332, y_cell: 640},
                {x_cell: 1332, y_cell: 536},
                {x_cell: 1312, y_cell: 536},
                {x_cell: 1312, y_cell: 719},
                {x_cell: 304, y_cell: 719},
                {x_cell: 304, y_cell: 650}
            ],
            deta: 1,
            deta_x: 1, deta_y: 0,
            flag_x: 1, flag_y: 0,
            cellIndex: 0,
            Speed:speed_all,
            GDwidth: 20,
            LineHeight: 5,
            x_now: 0,  y_now: 0,
            firstX: 0, firstY: 0,
            beginHeight: 0, endHeight: 0,
            legacyHeight: 0,
            paused: paused_all,
            fill:color_GD,
            full:0
        });
        canvas.addChild(GD09);
        
        var GD10 = canvas.display.GD({
            destination: {
                x_d: 0, y_d: 0
            },
            cells: [
                {x_cell: 137, y_cell: 651},
                {x_cell: 137, y_cell: 606},
                {x_cell:  49, y_cell: 606}
            ],
            deta: 1,
            deta_x: 1, deta_y: 0,
            flag_x: 1, flag_y: 0,
            cellIndex: 0,
            Speed:speed_all,
            GDwidth: 20,
            LineHeight: 5,
            x_now: 0,  y_now: 0,
            firstX: 0, firstY: 0,
            beginHeight: 0, endHeight: 0,
            legacyHeight: 0,
            paused: paused_all,
            fill:color_GD,
            full:0
        });
        canvas.addChild(GD10);
        
        var GD11 = canvas.display.GD({
            destination: {
                x_d: 0, y_d: 0
            },
            cells: [
                {x_cell: 825, y_cell: 643},
                {x_cell: 697, y_cell: 643}
            ],
            deta: 1,
            deta_x: 1, deta_y: 0,
            flag_x: 1, flag_y: 0,
            cellIndex: 0,
            Speed:speed_all,
            GDwidth: 20,
            LineHeight: 5,
            x_now: 0,  y_now: 0,
            firstX: 0, firstY: 0,
            beginHeight: 0, endHeight: 0,
            legacyHeight: 0,
            paused: paused_all,
            fill:color_GD,
            full:0
        });
        canvas.addChild(GD11);
        
        var GD12 = canvas.display.GD({
            destination: {
                x_d: 0, y_d: 0
            },
            cells: [
                {x_cell: 529, y_cell: 597},
                {x_cell: 529, y_cell: 635},
                {x_cell: 493, y_cell: 635}
            ],
            deta: 1,
            deta_x: 1, deta_y: 0,
            flag_x: 1, flag_y: 0,
            cellIndex: 0,
            Speed:speed_all,
            GDwidth: 20,
            LineHeight: 5,
            x_now: 0,  y_now: 0,
            firstX: 0, firstY: 0,
            beginHeight: 0, endHeight: 0,
            legacyHeight: 0,
            paused: paused_all,
            fill:color_GD,
            full:0
        });
        canvas.addChild(GD12);
        
        canvas.addChild(bg);
        canvas.addChild(GD05);

//        var txt1=canvas.display.text({
//            x: 770,
//            y: 10,
//            origin: { x: "center", y: "top" },
//            font: "bold 25px sans-serif",
//            text: "当前速度:"+((canvas.settings.fps-50)/50+1)+"倍速",
//            fill: color_txt
//        });

        var txt_QS=canvas.display.text({
            x:300,
            y:400,
            origin: { x: "center", y: "top" },
            font: "bold 22px sans-serif",
            text: "取水泵房",
            fill: color_txt
        });

        var txt_Title=canvas.display.text({
            x:180,
            y:20,
            origin: { x: "center", y: "top" },
            font: "bold 29px Tahoma",
            text:"老工艺流程图",
            fill:"#0e406b"
        });
        var txt_HHJ=txt_QS.clone({
            x:780,
            text:"混合井"
        });

        var txt_JJC=txt_QS.clone({
            x:1250,
            y:440,
            text:"机加池"
        });

        var txt_HX=txt_QS.clone({
            x:1290,
            y:726,
            text:"虹吸滤池"
        });
        var txt_CY=txt_QS.clone({
            x:890,
            y:726,
            text:"臭氧接触池"
        });
        var txt_TC=txt_QS.clone({
            x:640,
            y:726,
            text:"活性炭池"
        });
        var txt_QSC=txt_QS.clone({
            x:340,
            y:726,
            text:"清水池"
        });

        canvas.addChild(txt_Title);
        canvas.addChild(txt_QS);
        canvas.addChild(txt_HHJ);
        canvas.addChild(txt_JJC);
        canvas.addChild(txt_HX);
        canvas.addChild(txt_CY);
        canvas.addChild(txt_TC);
        canvas.addChild(txt_QSC);


        canvas.setLoop(function () {
            
            GD01.advance();
            GD02.advance();
            GD03.advance();
            GD04.advance();
            GD05.advance();
            //GD06.advance();
//            GD07.advance();
            GD08.advance();
//            GD09.advance();
            GD10.advance();
            GD11.advance();
            GD12.advance();

            SC01.advance();
            SC02.advance();
            SC03.advance();
            right_t.advance();
            left_t.advance();
            SC04.advance();
            SC05.advance();
            SC06.advance();
            SC07.advance();
            SC08.advance();
            SC09.advance();
            SC10.advance();
            SC11.advance();
            SC12.advance();
            SC13.advance();
            SC131.advance();
            SC14.advance();
            SC141.advance();
            SC15.advance();



            if(GD01.full==1){
                SC01.start = 1;
            }
            if(SC01.full==1){
                GD02.paused = 1;
            }
            if(GD02.full==1) {
                SC02.start = 1;
            }
            if(SC02.full==1) {
                SC03.start = 1;
                GD03.paused = 1;
            }
            if(GD03.full==1) {
                left_t.start=1;
                right_t.start=1;
            }
            if(right_t.full==1) {
                SC04.start = 1;
            }
            if(SC04.full==1) {
                SC05.start = 1;

            }
            if(SC05.full==1 ) {
                SC06.start = 1;
                GD04.paused = 1;
            }
            if(GD04.full==1 ) {
                GD05.paused=1;
                SC07.start=1;
            }

            if(SC07.full==1 ) {
               SC08.start=1;
            }
            if(SC08.full==1){
                //GD06.paused=1;
                GD08.paused=1;
            }
            if(GD08.full==1) {
                SC09.start = 1;
            }
            if(SC09.full==1) {
            	SC10.start = 1;
            }
            if(SC10.full==1) {
                SC11.start = 1;
            }
            if(SC11.full==1) {
                SC12.start = 1;
            }
            if(SC12.full==1) {
                SC13.start = 1;
            }
            if(SC13.height_now>=SC13.Height*0.2) {
                GD11.paused = 1;
            }
            if( GD11.full==1) {
                SC131.start=1;
            }
            if(SC131.full==1){
                SC14.start = 1;
            }
            if(SC14.full==1) {
                SC141.start=1;
                GD12.paused = 1;
            }
//            if(GD07.full==1 && GD09.full==1 && GD12.full==1) {
            if(GD12.full==1) {
                SC15.start = 1;
            }
            if(SC15.full==1) {
                GD10.paused = 1;
            } 
            canvas.redraw();
        }).start();
        GD01.paused=1;
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
        $("#btn_reset").click(function(){

            GD01.init();
            GD02.init();
            GD03.init();
            GD04.init();
            GD05.init();
            GD08.init();
            GD09.init();
            GD10.init();
            GD11.init();
            GD12.init();

            left_t.init();
            right_t.init();
            SC01.init();
            SC02.init();
            SC03.init();
            SC04.init();
            SC05.init();
            SC06.init();
            SC07.init();
            SC08.init();
            SC09.init();
            SC10.init();
            SC11.init();
            SC12.init();
            SC13.init();
            SC131.init();
            SC14.init();
            SC141.init();
            SC15.init();
            GD01.paused=1;
            canvas.settings.fps=40;
            var spanText=document.getElementById("speed");
            var speed=(canvas.settings.fps/40).toFixed(1);
            spanText.innerHTML=speed+"X";
            $("#btn_start").innerHTML="&#xe61f;";
            $("#btn_start").value=0;


        });
        $("#btn_upS").click(function(){
            canvas.settings.fps+=5;
            var spanText=document.getElementById("speed");
            var speed=(canvas.settings.fps/40).toFixed(1);
            spanText.innerHTML=speed+"X";
            canvas.redraw();
        });
        $("#btn_downS").click(function () {
            if(canvas.settings.fps>=25)
                canvas.settings.fps-=5;
            var spanText=document.getElementById("speed");
            var speed=(canvas.settings.fps/40).toFixed(1);
            spanText.innerHTML=speed+"X";
            canvas.redraw();
        });
    });
});