oCanvas.domReady(function () {

    var canvas = oCanvas.create({
        canvas: "#canvas_fix",
        background: "#ccc",
        fps: 15
    });
    var bg = canvas.display.image({
        x: 0,
        y: 0,
        image: "image/fix.png"
    });
    canvas.addChild(bg);

    function fix_hh_right(){
        document.getElementById("fix_head").innerHTML="现有混合井东侧配合方案";
        clearAll();

        document.getElementById("nextPage").style.display="block";
        document.getElementById("lastPage").style.display="block";

        setOpenDgree("FM015");
        setOpenDgree("FM069");
        setOpenDgree("FM068");
//        setOpenDgree("FM057");
//        setOpenDgree("FM023");
//        setOpenDgree("FM021");

        document.getElementById("fix_line1").innerHTML="打开阀门62#";
        document.getElementById("fix_line2").innerHTML="打开阀门65#";
        document.getElementById("fix_line3").innerHTML="打开东侧池排水泵";
        document.getElementById("fix_line4").innerHTML="关闭阀门15#";
        document.getElementById("fix_line5").innerHTML="关闭阀门69#";
        document.getElementById("fix_line6").innerHTML="关闭阀门68#";
//            document.getElementById("fix_line7").innerHTML="打开阀门45#";

        setShow();
    }
    function  fix_hh_left(){
        document.getElementById("fix_head").innerHTML="现有混合井西侧配合方案";
        clearAll();

        document.getElementById("nextPage").style.display="block";
        document.getElementById("lastPage").style.display="block";

        setOpenDgree("FM062");
        setOpenDgree("FM045");
        setOpenDgree("FM068");

        document.getElementById("fix_line1").innerHTML="关闭阀门62#";
        document.getElementById("fix_line2").innerHTML="打开阀门65#";
        document.getElementById("fix_line3").innerHTML="打开阀门15#";
        document.getElementById("fix_line4").innerHTML="打开阀门69#";
        document.getElementById("fix_line5").innerHTML="打开西侧池排水泵";
        document.getElementById("fix_line6").innerHTML="关闭阀门45#";

        setShow();

    }

    function fix_hh_new(){
        document.getElementById("fix_head").innerHTML="#新建混合井维修闸门配合方案";

        clearAll();
        setOpenDgree("FM065");
        setOpenDgree("FM066");
        setOpenDgree("FM068");

        document.getElementById("fix_line1").innerHTML="关闭阀门65#";
        document.getElementById("fix_line2").innerHTML="关闭阀门66#";
        document.getElementById("fix_line3").innerHTML="打开新建混合井排水泵";
        setShow();
    }

    function fix_jjc1(){
        document.getElementById("fix_head").innerHTML="#1机加池维修闸门配合方案";

        clearAll();
        setOpenDgree("FM062");
        setOpenDgree("FM045");
        setOpenDgree("FM068");
        setOpenDgree("FM014");

        document.getElementById("fix_line1").innerHTML="打开阀门65#";
        document.getElementById("fix_line2").innerHTML="打开阀门66#";
        document.getElementById("fix_line3").innerHTML="打开阀门69#";
        document.getElementById("fix_line4").innerHTML="打开阀门15#";
        document.getElementById("fix_line5").innerHTML="打开阀门16#";
        document.getElementById("fix_line6").innerHTML="关闭阀门62#";
        document.getElementById("fix_line7").innerHTML="关闭阀门45#";
        document.getElementById("fix_line8").innerHTML="关闭阀门14#";

        setShow();
    }

    function fix_jjc2(){
        document.getElementById("fix_head").innerHTML="#2机加池维修闸门配合方案";

        clearAll();
        setOpenDgree("FM015");
        setOpenDgree("FM069");
        setOpenDgree("FM068");
//        setOpenDgree("FM014");

        document.getElementById("fix_line1").innerHTML="打开阀门65#";
        document.getElementById("fix_line2").innerHTML="打开阀门66#";
        document.getElementById("fix_line3").innerHTML="打开阀门62#";
        document.getElementById("fix_line4").innerHTML="打开阀门45#";
        document.getElementById("fix_line5").innerHTML="打开阀门14#";
        document.getElementById("fix_line6").innerHTML="打开阀门16#";
        document.getElementById("fix_line7").innerHTML="关闭阀门15#";
        document.getElementById("fix_line8").innerHTML="关闭阀门69#";
        document.getElementById("fix_line9").innerHTML="关闭阀门68#";

        setShow();
    }

    function fix_jjc3(){
        document.getElementById("fix_head").innerHTML="#3机加池维修闸门配合方案";

        clearAll();
        setOpenDgree("FM065");
        setOpenDgree("FM066");
        setOpenDgree("FM068");
        setOpenDgree("FM067");
//        setOpenDgree("FM014");

        document.getElementById("fix_line1").innerHTML="打开阀门62#";
        document.getElementById("fix_line2").innerHTML="打开阀门45#";
        document.getElementById("fix_line3").innerHTML="打开阀门14#";
        document.getElementById("fix_line4").innerHTML="打开阀门69#";
        document.getElementById("fix_line5").innerHTML="打开阀门15#";
        document.getElementById("fix_line6").innerHTML="打开阀门16#";
        document.getElementById("fix_line7").innerHTML="关闭阀门65#";
        document.getElementById("fix_line8").innerHTML="关闭阀门66#";
        document.getElementById("fix_line9").innerHTML="关闭阀门68#";
        document.getElementById("fix_line10").innerHTML="关闭阀门67#";

        setShow();
    }
    function fix_hx_right(){
        document.getElementById("fix_head").innerHTML="东侧虹吸滤池闸门配合方案";
        clearAll();
        document.getElementById("nextPage").style.display="block";
        document.getElementById("lastPage").style.display="block";
        setOpenDgree("FM016");
        setOpenDgree("FM018");
//            setOpenDgree("FM068");
        setOpenDgree("FM019");

        document.getElementById("fix_line1").innerHTML="关闭阀门65#";
        document.getElementById("fix_line2").innerHTML="关闭阀门9#~14#小虹吸";
        document.getElementById("fix_line3").innerHTML="关闭阀门18#";
        document.getElementById("fix_line4").innerHTML="打开9#~14#滤池排空闸";
        document.getElementById("fix_line5").innerHTML="断开东西滤池清水联通闸";
        document.getElementById("fix_line6").innerHTML="关闭阀门19#";
//            document.getElementById("fix_line7").innerHTML="打开阀门45#";

        setShow();
    }
    function  fix_hx_left(){
        document.getElementById("fix_head").innerHTML="西侧虹吸滤池闸门配合方案";
        clearAll();
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
        document.getElementById("fix_head").innerHTML="V型滤池维修闸门配合方案";

        clearAll();
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
        document.getElementById("fix_head").innerHTML="东侧臭氧池闸门配合方案";
        clearAll();
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
        document.getElementById("fix_head").innerHTML="西侧臭氧池闸门配合方案";
        clearAll();
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
        document.getElementById("fix_head").innerHTML="现有碳池闸门配合方案";
        clearAll();
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
        document.getElementById("fix_head").innerHTML="新建碳池闸门配合方案";
        clearAll();
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
        document.getElementById("fix_head").innerHTML="1#清水池施工空池倒泵方案";
        clearAll();

        document.getElementById("fix_line1").innerHTML="关闭东、西两清水池之间的连通闸（27#）";
        document.getElementById("fix_line2").innerHTML="关闭清水池出水管路的连通闸（29#）";
        document.getElementById("fix_line3").innerHTML="将5#配水泵倒成4#配水泵";
        document.getElementById("fix_line4").innerHTML="将7#配水泵倒成2#配水泵";
        document.getElementById("fix_line5").innerHTML="断管施工";
        document.getElementById("fix_line6").innerHTML="开启东、西两清水池之间的连通闸（27#）约一半";
        document.getElementById("fix_line7").innerHTML="将来水降至1800m3/h";
        document.getElementById("fix_line8").innerHTML="开启东、西两清水池之间的连通闸27#";
        document.getElementById("fix_line9").innerHTML="开启清水池出水管路的连通闸（29#）";
        document.getElementById("fix_line10").innerHTML="清水池满足满水状态，将来水涨至1950m3/h";

        setShow();

//            document.getElementById("fix_line7").innerHTML="打开阀门45#";
    }


    function fix_qsc2(){
        document.getElementById("fix_head").innerHTML="2#清水池施工空池倒泵方案";
        clearAll();

        document.getElementById("fix_line1").innerHTML="关闭东、西两清水池之间的连通闸（27#）";
        document.getElementById("fix_line2").innerHTML="关闭清水池出水管路的连通闸（30#）";
        document.getElementById("fix_line3").innerHTML="将____配水泵倒成____配水泵";
        document.getElementById("fix_line4").innerHTML="断管施工";
        document.getElementById("fix_line5").innerHTML="开启东、西两清水池之间的连通闸（27#）约一半";
        document.getElementById("fix_line6").innerHTML="将来水降至____m3/h";
        document.getElementById("fix_line7").innerHTML="开启东、西两清水池之间的连通闸27#";
        document.getElementById("fix_line8").innerHTML="开启清水池出水管路的连通闸（29#）";
        document.getElementById("fix_line9").innerHTML="清水池满足满水状态，将来水涨至____m3/h";

        setShow();

//            document.getElementById("fix_line7").innerHTML="打开阀门45#";
    }

    function  fix_qsc3(){
        document.getElementById("fix_head").innerHTML="#3清水池维修闸门配合方案";
        clearAll();
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
        document.getElementById("fix_head").innerHTML="#4清水池维修闸门配合方案";
        clearAll();
        setOpenDgree("FM049");
        setOpenDgree("FM051");

        document.getElementById("fix_line1").innerHTML="关闭阀门49#";
        document.getElementById("fix_line2").innerHTML="关闭阀门51#";
        document.getElementById("fix_line3").innerHTML="打开4#清水池抽水泵";

        setShow();

    }



    $("name_QS").click(function(){
        if(confirm("是否将“取水泵房”设置为维修状态？")){
            document.getElementById("fix_head").innerHTML="取水泵房维修闸门配合方案";
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

});
