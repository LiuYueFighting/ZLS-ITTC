oCanvas.domReady(function () {

    var canvas = oCanvas.create({
        canvas: "#canvas_fix",
        background: "#eeeeed",
        fps: 15
    });
    var bg = canvas.display.image({
        x:130,
        y: -13,
        image: "image/fix.png"
    });
    canvas.addChild(bg);

    function fix_qs_right(){
        clearAll();
        document.getElementById("fix_head").innerHTML="取水泵房东侧配合方案";
        document.getElementById("name_QS").style.color="#8dd9ff";
        document.getElementById("name_QS").style.background="rgba(255,0,0,0.7)";
        document.getElementById("nextPage").style.display="block";
        document.getElementById("lastPage").style.display="block";

        setOpenDgree("FM07");
        setOpenDgree("FM010");


        document.getElementById("fix_line1").innerHTML="打开阀门64#";
        document.getElementById("fix_line2").innerHTML="关闭阀门04#";
        document.getElementById("fix_line3").innerHTML="关闭阀门07#";
        document.getElementById("fix_line4").innerHTML="关闭阀门10#";
        document.getElementById("fix_line5").innerHTML="关闭阀门08#";
        document.getElementById("fix_line6").innerHTML="打开东侧池排空泵#";
//        document.getElementById("fix_line6").innerHTML="关闭阀门68#";
//            document.getElementById("fix_line7").innerHTML="打开阀门45#";

        setShow();
    }

    function fix_qs_left(){
        clearAll();
        document.getElementById("fix_head").innerHTML="取水泵房西侧配合方案";
        document.getElementById("name_QS").style.color="#8dd9ff";
        document.getElementById("name_QS").style.background="rgba(255,0,0,0.7)";
        document.getElementById("nextPage").style.display="block";
        document.getElementById("lastPage").style.display="block";

        setOpenDgree("FM07");
        setOpenDgree("FM09");

        document.getElementById("fix_line1").innerHTML="打开阀门64#";
        document.getElementById("fix_line2").innerHTML="关闭阀门03#";
        document.getElementById("fix_line3").innerHTML="关闭阀门07#";
        document.getElementById("fix_line4").innerHTML="关闭阀门09#";
        document.getElementById("fix_line5").innerHTML="打开西侧池排空泵#";

        setShow();
    }

    function  fix_hh_right(){
        clearAll();
        document.getElementById("fix_head").innerHTML="现有混合井东侧配合方案";
        document.getElementById("name_HHJ1").style.color="#8dd9ff";
        document.getElementById("name_HHJ1").style.background="rgba(255,0,0,0.7)";
        document.getElementById("nextPage").style.display="block";
        document.getElementById("lastPage").style.display="block";

        setOpenDgree("FM015");
        setOpenDgree("FM063");
        setOpenDgree("FM069");
        setOpenDgree("FM068");

        document.getElementById("fix_line1").innerHTML="打开阀门62#";
        document.getElementById("fix_line2").innerHTML="打开阀门65#";
        document.getElementById("fix_line3").innerHTML="关闭阀门63#";
        document.getElementById("fix_line4").innerHTML="关闭阀门15#";
        document.getElementById("fix_line5").innerHTML="关闭阀门69#";
        document.getElementById("fix_line6").innerHTML="打开东侧池排水泵";

        setShow();

    }

    function  fix_hh_left(){
        clearAll();
        document.getElementById("fix_head").innerHTML="现有混合井西侧配合方案";
        document.getElementById("name_HHJ1").style.color="#8dd9ff";
        document.getElementById("name_HHJ1").style.background="rgba(255,0,0,0.7)";
        document.getElementById("nextPage").style.display="block";
        document.getElementById("lastPage").style.display="block";

        setOpenDgree("FM062");
        setOpenDgree("FM045");
        setOpenDgree("FM068");

        document.getElementById("fix_line1").innerHTML="关闭阀门62#";
        document.getElementById("fix_line2").innerHTML="打开阀门63#";
        document.getElementById("fix_line3").innerHTML="打开阀门15#";
        document.getElementById("fix_line4").innerHTML="打开阀门69#";
        document.getElementById("fix_line5").innerHTML="关闭阀门45#";
        document.getElementById("fix_line6").innerHTML="打开西侧池排水泵";

        setShow();

    }

    function fix_hh_new(){
        clearAll();
        document.getElementById("fix_head").innerHTML="#新建混合井维修配合方案";
        document.getElementById("name_HHJ2").style.color="#8dd9ff";
        document.getElementById("name_HHJ2").style.background="rgba(255,0,0,0.7)";
        setOpenDgree("FM065");
        setOpenDgree("FM066");
        setOpenDgree("FM068");

        document.getElementById("fix_line1").innerHTML="打开阀门62#";
        document.getElementById("fix_line2").innerHTML="打开阀门63#";
        document.getElementById("fix_line3").innerHTML="关闭阀门65#";
        document.getElementById("fix_line4").innerHTML="关闭阀门66#";
        document.getElementById("fix_line5").innerHTML="打开新建混合井排水泵";
        setShow();
    }

    function fix_jjc1(){
        clearAll();
        document.getElementById("fix_head").innerHTML="#1机加池维修闸门配合方案";
        document.getElementById("name_JJC1").style.color="#8dd9ff";
        document.getElementById("name_JJC1").style.background="rgba(255,0,0,0.7)";


        setOpenDgree("FM062");
        setOpenDgree("FM045");
        setOpenDgree("FM068");
        setOpenDgree("FM014");

        document.getElementById("fix_line1").innerHTML="缓慢关闭阀门62#";
        document.getElementById("fix_line2").innerHTML="适量调整阀门65#";
        document.getElementById("fix_line3").innerHTML="适量调整阀门63#";
        document.getElementById("fix_line4").innerHTML="关闭阀门45#";
        document.getElementById("fix_line5").innerHTML="关闭阀门14#";
        document.getElementById("fix_line6").innerHTML="打开1#机加池排水泵";

        setShow();
    }

    function fix_jjc2(){
        clearAll();
        document.getElementById("fix_head").innerHTML="#2机加池维修闸门配合方案";
        document.getElementById("name_JJC2").style.color="#8dd9ff";
        document.getElementById("name_JJC2").style.background="rgba(255,0,0,0.7)";

        setOpenDgree("FM015");
        setOpenDgree("FM069");
        setOpenDgree("FM068");
        setOpenDgree("FM063");
//        setOpenDgree("FM014");

        document.getElementById("fix_line1").innerHTML="打开阀门65#";
        document.getElementById("fix_line2").innerHTML="打开阀门62#";
        document.getElementById("fix_line3").innerHTML="打开阀门45#";
        document.getElementById("fix_line4").innerHTML="打开阀门66#";
        document.getElementById("fix_line5").innerHTML="关闭阀门63#";
        document.getElementById("fix_line6").innerHTML="关闭阀门69#";
        document.getElementById("fix_line7").innerHTML="关闭阀门15#";
        document.getElementById("fix_line8").innerHTML="打开2#机加池排水泵";

        setShow();
    }

    function fix_jjc3(){
        clearAll();
        document.getElementById("fix_head").innerHTML="#3机加池维修闸门配合方案";
        document.getElementById("name_JJC3").style.color="#8dd9ff";
        document.getElementById("name_JJC3").style.background="rgba(255,0,0,0.7)";
        setOpenDgree("FM065");
        setOpenDgree("FM066");
        setOpenDgree("FM068");
        setOpenDgree("FM067");
//        setOpenDgree("FM014");

        document.getElementById("fix_line1").innerHTML="打开阀门63#";
        document.getElementById("fix_line2").innerHTML="打开阀门62#";
        document.getElementById("fix_line3").innerHTML="打开阀门45#";
        document.getElementById("fix_line4").innerHTML="打开阀门69#";
        document.getElementById("fix_line5").innerHTML="关闭阀门65#";
        document.getElementById("fix_line6").innerHTML="关闭阀门66#";
        document.getElementById("fix_line7").innerHTML="关闭阀门67#";
        document.getElementById("fix_line8").innerHTML="打开3#机加池排水泵";

        setShow();
    }
    function fix_hx_right(){
        clearAll();
        document.getElementById("fix_head").innerHTML="东侧虹吸滤池闸门配合方案";
        document.getElementById("name_HX").style.color="#8dd9ff";
        document.getElementById("name_HX").style.background="rgba(255,0,0,0.7)";
        document.getElementById("nextPage").style.display="block";
        document.getElementById("lastPage").style.display="block";
        setOpenDgree("FM016");
        setOpenDgree("FM018");
//            setOpenDgree("FM068");
        setOpenDgree("FM019");

        document.getElementById("fix_line1").innerHTML="关闭阀门16#";
        document.getElementById("fix_line2").innerHTML="关闭阀门9#~14#小虹吸";
        document.getElementById("fix_line3").innerHTML="关闭阀门18#";
        document.getElementById("fix_line4").innerHTML="打开9#~14#滤池排空闸";
        document.getElementById("fix_line5").innerHTML="断开东西滤池清水联通闸";
        document.getElementById("fix_line6").innerHTML="关闭阀门19#";
//            document.getElementById("fix_line7").innerHTML="打开阀门45#";

        setShow();
    }
    function  fix_hx_left(){
        clearAll();
        document.getElementById("fix_head").innerHTML="西侧虹吸滤池闸门配合方案";
        document.getElementById("name_HX").style.color="#8dd9ff";
        document.getElementById("name_HX").style.background="rgba(255,0,0,0.7)";
        document.getElementById("nextPage").style.display="block";
        document.getElementById("lastPage").style.display="block";
        setOpenDgree("FM014");
        setOpenDgree("FM017");
        setOpenDgree("FM019");

        document.getElementById("fix_line1").innerHTML="关闭阀门14#";
        document.getElementById("fix_line2").innerHTML="关闭阀门1#~8#小虹吸";
        document.getElementById("fix_line3").innerHTML="关闭阀门17#";
        document.getElementById("fix_line4").innerHTML="打开1#~8#滤池排空闸";
        document.getElementById("fix_line5").innerHTML="断开东西滤池清水联通闸";
        document.getElementById("fix_line6").innerHTML="关闭阀门19#";

        setShow();

    }

    function fix_vl(){
        clearAll();
        document.getElementById("fix_head").innerHTML="V型滤池维修闸门配合方案";
        document.getElementById("name_VL").style.color="#8dd9ff";
        document.getElementById("name_VL").style.background="rgba(255,0,0,0.7)";

        setOpenDgree("FM052");
        setOpenDgree("FM020");
         setOpenDgree("FM056");
//        setOpenDgree("FM014");

        document.getElementById("fix_line1").innerHTML="打开阀门68#";
        document.getElementById("fix_line2").innerHTML="关闭1#~5#滤格控制阀";
        document.getElementById("fix_line3").innerHTML="关闭阀门52#";
        document.getElementById("fix_line4").innerHTML="关闭阀门20#";
        document.getElementById("fix_line5").innerHTML="关闭阀门56#";

        setShow();
    }
    function fix_cy_right(){
        clearAll();
        document.getElementById("fix_head").innerHTML="东侧臭氧池闸门配合方案";
        document.getElementById("name_CY").style.color="#8dd9ff";
        document.getElementById("name_CY").style.background="rgba(255,0,0,0.7)";
        document.getElementById("nextPage").style.display="block";
        document.getElementById("lastPage").style.display="block";
        setOpenDgree("FM053");
        setOpenDgree("FM058");
        setOpenDgree("FM056");
        setOpenDgree("FM057");
//        setOpenDgree("FM023");
        setOpenDgree("FM021");

        document.getElementById("fix_line1").innerHTML="打开阀门22#";
        document.getElementById("fix_line2").innerHTML="打开阀门24#";
        document.getElementById("fix_line3").innerHTML="关闭阀门53#";
        document.getElementById("fix_line4").innerHTML="关闭阀门58#";
        document.getElementById("fix_line5").innerHTML="关闭阀门57#";
        document.getElementById("fix_line6").innerHTML="关闭阀门56#";
//            document.getElementById("fix_line7").innerHTML="打开阀门45#";

        setShow();
    }
    function  fix_cy_left(){
        clearAll();
        document.getElementById("fix_head").innerHTML="西侧臭氧池闸门配合方案";
        document.getElementById("name_CY").style.color="#8dd9ff";
        document.getElementById("name_CY").style.background="rgba(255,0,0,0.7)";
        document.getElementById("nextPage").style.display="block";
        document.getElementById("lastPage").style.display="block";
        setOpenDgree("FM022");
        setOpenDgree("FM054");
        setOpenDgree("FM058");
        setOpenDgree("FM059");
        setOpenDgree("FM056");

        document.getElementById("fix_line1").innerHTML="打开阀门21#";
        document.getElementById("fix_line2").innerHTML="打开阀门23#";
        document.getElementById("fix_line3").innerHTML="关闭阀门54#";
        document.getElementById("fix_line4").innerHTML="关闭阀门58#";
        document.getElementById("fix_line5").innerHTML="关闭阀门59#";
        document.getElementById("fix_line6").innerHTML="关闭阀门56#";

        setShow();

    }
    function fix_tc_old(){
        clearAll();
        document.getElementById("fix_head").innerHTML="现有碳池闸门配合方案";
        document.getElementById("name_TC").style.color="#8dd9ff";
        document.getElementById("name_TC").style.background="rgba(255,0,0,0.7)";
        setOpenDgree("FM056");
        setOpenDgree("FM057");
        setOpenDgree("FM044");
        setOpenDgree("FM022");
        setOpenDgree("FM024");
        setOpenDgree("FM021");


        document.getElementById("fix_line1").innerHTML="打开阀门20#";
        document.getElementById("fix_line2").innerHTML="打开阀门52#";
        document.getElementById("fix_line3").innerHTML="关闭阀门56#";
        document.getElementById("fix_line4").innerHTML="关闭阀门57#";
        document.getElementById("fix_line5").innerHTML="打开阀门58#";
        document.getElementById("fix_line6").innerHTML="打开阀门59#";
        document.getElementById("fix_line7").innerHTML="打开阀门55#";
        document.getElementById("fix_line8").innerHTML="关闭阀门44#";

        setShow();

//            document.getElementById("fix_line7").innerHTML="打开阀门45#";
    }
    function fix_tc_new(){
        clearAll();
        document.getElementById("fix_head").innerHTML="新建碳池闸门配合方案";
        document.getElementById("name_TC1").style.color="#8dd9ff";
        document.getElementById("name_TC1").style.background="rgba(255,0,0,0.7)";
        setOpenDgree("FM056");
        setOpenDgree("FM059");
        setOpenDgree("FM055");
        setOpenDgree("FM022");
        setOpenDgree("FM024");
        setOpenDgree("FM021");


        document.getElementById("fix_line1").innerHTML="打开阀门20#";
        document.getElementById("fix_line2").innerHTML="打开阀门52#";
        document.getElementById("fix_line3").innerHTML="关闭阀门56#";
        document.getElementById("fix_line4").innerHTML="打开阀门57#";
        document.getElementById("fix_line5").innerHTML="打开阀门58#";
        document.getElementById("fix_line6").innerHTML="关闭阀门59#";
        document.getElementById("fix_line7").innerHTML="关闭阀门55#";
        document.getElementById("fix_line8").innerHTML="打开阀门44#";

        setShow();

//            document.getElementById("fix_line7").innerHTML="打开阀门45#";
    }

    function fix_qsc1(){
        clearAll();
        document.getElementById("fix_head").innerHTML="1#清水池施工空池倒泵方案";
        document.getElementById("name_QSC2").style.color="#8dd9ff";
        document.getElementById("name_QSC2").style.background="rgba(255,0,0,0.7)";

        document.getElementById("fix_line1").innerHTML="关闭东、西池间连通闸27#";
        document.getElementById("fix_line2").innerHTML="关闭清水池出水闸29#";
        document.getElementById("fix_line3").innerHTML="5#配水泵倒成4#";
        document.getElementById("fix_line4").innerHTML="7#配水泵倒成2#";
        document.getElementById("fix_line5").innerHTML="断管施工";
        document.getElementById("fix_line6").innerHTML="开启1/连通闸27#";
        document.getElementById("fix_line7").innerHTML="来水降至1800m3/h";
        document.getElementById("fix_line8").innerHTML="开启连通闸27#";
        document.getElementById("fix_line9").innerHTML="开启清水池出水闸29#";
        document.getElementById("fix_line10").innerHTML="来水涨至1950m3/h";

        setShow();

//            document.getElementById("fix_line7").innerHTML="打开阀门45#";
    }


    function fix_qsc2(){
        clearAll();
        document.getElementById("fix_head").innerHTML="2#清水池施工空池倒泵方案";
        document.getElementById("name_QSC3").style.color="#8dd9ff";
        document.getElementById("name_QSC3").style.background="rgba(255,0,0,0.7)";

        document.getElementById("fix_line1").innerHTML="关闭东、西池间连通闸27#";
        document.getElementById("fix_line2").innerHTML="关闭清水池出水闸30#";
        document.getElementById("fix_line3").innerHTML="__#配水泵倒成__#";
        document.getElementById("fix_line4").innerHTML="断管施工";
        document.getElementById("fix_line5").innerHTML="开启1/连通闸27#";
        document.getElementById("fix_line6").innerHTML="来水降至__m3/h";
        document.getElementById("fix_line7").innerHTML="开启连通闸27";
        document.getElementById("fix_line8").innerHTML="开启清水池出水闸30#";
        document.getElementById("fix_line9").innerHTML="来水涨至__m3/h";

        setShow();

//            document.getElementById("fix_line7").innerHTML="打开阀门45#";
    }

    function  fix_qsc3(){
        clearAll();
        document.getElementById("fix_head").innerHTML="#3清水池维修闸门配合方案";
        document.getElementById("name_QSC1").style.color="#8dd9ff";
        document.getElementById("name_QSC1").style.background="rgba(255,0,0,0.7)";
        setOpenDgree("FM046");
        setOpenDgree("FM047");
        setOpenDgree("FM048");

        document.getElementById("fix_line1").innerHTML="关闭阀门46#";
        document.getElementById("fix_line2").innerHTML="关闭阀门47#";
        document.getElementById("fix_line3").innerHTML="关闭阀门48#";
        document.getElementById("fix_line4").innerHTML="打开3#清水池抽水泵";

        setShow();

    }

    function  fix_qsc4(){
        clearAll();
        document.getElementById("fix_head").innerHTML="#4清水池维修闸门配合方案";
        document.getElementById("name_QSC4").style.color="#8dd9ff";
        document.getElementById("name_QSC4").style.background="rgba(255,0,0,0.7)";
        setOpenDgree("FM049");
        setOpenDgree("FM051");

        document.getElementById("fix_line1").innerHTML="关闭阀门49#";
        document.getElementById("fix_line2").innerHTML="关闭阀门51#";
        document.getElementById("fix_line3").innerHTML="打开4#清水池抽水泵";

        setShow();

    }

    $("#fix_head").bind("mouseenter", function () {
        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//        canvas.redraw();
    }).bind("mouseleave", function () {
        canvas.mouse.cursor("default");
//        this.shadow="0 0 0px #eee";
//        canvas.redraw();
    });

    $("#name_QS").click(function(){
        if(confirm("是否将“取水泵房”设置为维修状态？")){
            fix_qs_right();
            document.getElementById("nextPage").onclick=function(){
                fix_qs_left();
            };
            document.getElementById("lastPage").onclick=function(){
                fix_qs_right();
            };
            document.getElementById("export").href="download/fix-qs.doc";
            setShow();
        }
    });
    $("#name_JJC1").click(function(){
        if(confirm("是否将“#1机加池”设置为维修状态？")){
            fix_jjc1();
            document.getElementById("nextPage").onclick="";
            document.getElementById("lastPage").onclick="";
            document.getElementById("export").href="download/fix-jjc1.docx";
            setShow();
        }
    });
    $("#name_JJC2").click(function(){
        if(confirm("是否将“#2机加池”设置为维修状态？")){
            fix_jjc2();
            document.getElementById("nextPage").onclick="";
            document.getElementById("lastPage").onclick="";
            document.getElementById("export").href="download/fix-jjc2.docx";
            setShow();
        }
    });
    $("#name_JJC3").click(function(){
        if(confirm("是否将“#3机加池”设置为维修状态？3")){
            fix_jjc3();
            document.getElementById("nextPage").onclick="";
            document.getElementById("lastPage").onclick="";
            document.getElementById("export").href="download/fix-jjc3.docx";
            setShow();
        }
    });
    $("#name_VL").click(function(){
        if(confirm("是否将“V型滤池设置为维修状态？”")){
            fix_vl();
            document.getElementById("nextPage").onclick="";
            document.getElementById("lastPage").onclick="";
            document.getElementById("export").href="download/fix-vl.docx";
            setShow();
        }
    });
    $("#name_TC").click(function(){
        if(confirm("是否将“现有活性炭池”设置为维修状态？")){
            fix_tc_old();
            document.getElementById("nextPage").onclick="";
            document.getElementById("lastPage").onclick="";
            document.getElementById("export").href="download/fix-tc-old.doc";
        }
    });
    $("#name_TC1").click(function(){
        if(confirm("是否将“新建活性炭池”设置为维修状态？")){
            fix_tc_new();
            document.getElementById("nextPage").onclick="";
            document.getElementById("lastPage").onclick="";
            document.getElementById("export").href="download/fix-tc-new.doc";
        }
    });
    $("#name_CY").click(function(){
        if(confirm("是否将“臭氧接触池”设置为维修状态？")){
            fix_cy_right();
            document.getElementById("nextPage").onclick=function(){
                fix_cy_left();
            };
            document.getElementById("lastPage").onclick=function(){
                fix_cy_right();
            };
            document.getElementById("export").href="download/fix-cy.doc";
            setShow();
        }
    });
    $("#name_HHJ1").click(function(){
        if(confirm("是否将“旧混合井”设置为维修状态？")){
            fix_hh_right();
            document.getElementById("nextPage").onclick=function(){
                fix_hh_left();
            };
            document.getElementById("lastPage").onclick=function(){
                fix_hh_right();
            };
            document.getElementById("export").href="download/fix-hh-old.doc";
            setShow();
        }
    });
    $("#name_HHJ2").click(function(){
        if(confirm("是否将“新混合井”设置为维修状态？")){
            fix_hh_new();
            document.getElementById("nextPage").onclick="";
            document.getElementById("lastPage").onclick="";
            document.getElementById("export").href="download/fix-hh-new.docx";
        }
    });
    $("#name_HX").click(function(){
        if(confirm("是否将“虹吸滤池”设置为维修状态？")){

            fix_hx_right();
            document.getElementById("nextPage").onclick=function(){
                fix_hx_left();
            };
            document.getElementById("lastPage").onclick=function(){
                fix_hx_right();
            };
            document.getElementById("export").href="download/fix-hx.doc";
            setShow();

        }
    });

    $("#name_QSC1").click(function(){
        if(confirm("是否将“#1清水池”设置为维修状态？")){
            fix_qsc3();
            document.getElementById("nextPage").onclick=function(){
            };
            document.getElementById("lastPage").onclick=function(){
            };
            document.getElementById("export").href="download/fix-qsc3.docx";
            setShow();
        }
    });
    $("#name_QSC2").click(function(){
        if(confirm("是否将“#2清水池”设置为维修状态？")){
            fix_qsc1();
            document.getElementById("nextPage").onclick=function(){
            };
            document.getElementById("lastPage").onclick=function(){
            };
            document.getElementById("export").href="download/fix-qsc1.doc";
            setShow();

        }
    });
    $("#name_QSC3").click(function(){
        if(confirm("是否将“#3清水池”设置为维修状态？")){
            fix_qsc2();
            document.getElementById("nextPage").onclick=function(){
            };
            document.getElementById("lastPage").onclick=function(){
            };
            document.getElementById("export").href="download/fix-qsc2.doc";
            setShow();
        }
    });
    $("#name_QSC4").click(function(){
        if(confirm("是否将“#4清水池”设置为维修状态？")){
            fix_qsc4();
            document.getElementById("nextPage").onclick=function(){
            };
            document.getElementById("lastPage").onclick=function(){
            };
            document.getElementById("export").href="download/fix-qsc4.docx";
            setShow();
        }
    });

    function clearAll(){
        clearOpenDgree("FM05");
        clearOpenDgree("FM06");
        clearOpenDgree("FM07");
        clearOpenDgree("FM09");
        clearOpenDgree("FM010");
        clearOpenDgree("FM065");
        clearOpenDgree("FM062");
        clearOpenDgree("FM063");
        clearOpenDgree("FM064");
        clearOpenDgree("FM066");
        clearOpenDgree("FM069");
        clearOpenDgree("FM015");
        clearOpenDgree("FM045");
        clearOpenDgree("FM014");
        clearOpenDgree("FM016");
        clearOpenDgree("FM068");
        clearOpenDgree("FM067");
        clearOpenDgree("FM017");
        clearOpenDgree("FM018");
        clearOpenDgree("FM019");
        clearOpenDgree("FM067");
        clearOpenDgree("FM052");
        clearOpenDgree("FM020");
        clearOpenDgree("FM056");
        clearOpenDgree("FM057");
        clearOpenDgree("FM058");
        clearOpenDgree("FM053");
        clearOpenDgree("FM054");
        clearOpenDgree("FM021");
        clearOpenDgree("FM022");
        clearOpenDgree("FM024");

        clearOpenDgree("FM059");
        clearOpenDgree("FM046");
        clearOpenDgree("FM044");
        clearOpenDgree("FM055");
        clearOpenDgree("FM026");
        clearOpenDgree("FM051");
        clearOpenDgree("FM055");
        clearOpenDgree("FM047");
        clearOpenDgree("FM048");
        clearOpenDgree("FM049");

        document.getElementById("nextPage").style.display="none";
        document.getElementById("lastPage").style.display="none";


        document.getElementById("fix_line1").innerHTML="";
        document.getElementById("fix_line2").innerHTML="";
        document.getElementById("fix_line3").innerHTML="";
        document.getElementById("fix_line4").innerHTML="";
        document.getElementById("fix_line5").innerHTML="";
        document.getElementById("fix_line6").innerHTML="";
        document.getElementById("fix_line7").innerHTML="";
        document.getElementById("fix_line8").innerHTML="";
        document.getElementById("fix_line9").innerHTML="";
        document.getElementById("fix_line10").innerHTML="";
        changeHide();

        document.getElementById("fix_head").innerHTML="请点击需要维修的构筑物";
        document.getElementById("name_QS").style.color="#283a45";
        document.getElementById("name_JJC1").style.color="#283a45";
        document.getElementById("name_HHJ1").style.color="#283a45";
        document.getElementById("name_HHJ2").style.color="#283a45";
        document.getElementById("name_JJC2").style.color="#283a45";
        document.getElementById("name_JJC3").style.color="#283a45";
        document.getElementById("name_HX").style.color="#283a45";
        document.getElementById("name_VL").style.color="#283a45";
        document.getElementById("name_CY").style.color="#283a45";
        document.getElementById("name_TC").style.color="#283a45";
        document.getElementById("name_TC1").style.color="#283a45";
        document.getElementById("name_QSC1").style.color="#283a45";
        document.getElementById("name_QSC2").style.color="#283a45";
        document.getElementById("name_QSC3").style.color="#283a45";
        document.getElementById("name_QSC4").style.color=" #283a45";
        document.getElementById("name_QS").style.background="rgba(255,255,255,0.5)";
        document.getElementById("name_JJC1").style.background="rgba(255,255,255,0.5)";
        document.getElementById("name_HHJ1").style.background="rgba(255,255,255,0.5)";
        document.getElementById("name_HHJ2").style.background="rgba(255,255,255,0.5)";
        document.getElementById("name_JJC2").style.background="rgba(255,255,255,0.5)";
        document.getElementById("name_JJC3").style.background="rgba(255,255,255,0.5)";
        document.getElementById("name_HX").style.background="rgba(255,255,255,0.5)";
        document.getElementById("name_VL").style.background="rgba(255,255,255,0.5)";
        document.getElementById("name_CY").style.background="rgba(255,255,255,0.5)";
        document.getElementById("name_TC").style.background="rgba(255,255,255,0.5)";
        document.getElementById("name_TC1").style.background="rgba(255,255,255,0.5)";
        document.getElementById("name_QSC1").style.background="rgba(255,255,255,0.5)";
        document.getElementById("name_QSC2").style.background="rgba(255,255,255,0.5)";
        document.getElementById("name_QSC3").style.background="rgba(255,255,255,0.5)";
        document.getElementById("name_QSC4").style.background="rgba(255,255,255,0.5)";
    }

});
