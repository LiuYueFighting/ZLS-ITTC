
oCanvas.domReady(function () {

//��������
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
        }
    });
    function fix_jjc1(){
        document.getElementById("fix_head").innerHTML="#1机加池维修闸门配合方案";

        clearAll();
        setOpenDgree("FM062");
        setOpenDgree("FM045");
        setOpenDgree("FM068");
        setOpenDgree("FM014");

        document.getElementById("fix_line1").innerHTML="打开阀门65#";
        document.getElementById("fix_line2").innerHTML="打开阀门66#";
        document.getElementById("fix_line3").innerHTML="打开阀门14#";
        document.getElementById("fix_line4").innerHTML="打开阀门15#";
        document.getElementById("fix_line5").innerHTML="打开阀门16#";
        document.getElementById("fix_line6").innerHTML="关闭阀门62#";
        document.getElementById("fix_line7").innerHTML="打开阀门45#";

        setShow();
    }
    $("#name_JJC2").click(function(){
        if(confirm("是否将“#2机加池”设置为维修状态？")){
            setShow();
            document.getElementById("fix_head").innerHTML="#2机加池维修闸门配合方案";
        }
    });
    $("#name_JJC3").click(function(){
        if(confirm("是否将“#3机加池”设置为维修状态？3")){
            setShow();
            document.getElementById("fix_head").innerHTML="#3机加池维修闸门配合方案";
        }
    });
    $("#name_VL").click(function(){
        if(confirm("是否将“V型滤池设置为维修状态？”")){
            setShow();
            document.getElementById("fix_head").innerHTML="V型滤池维修闸门配合方案";
        }
    });
    $("#name_TC").click(function(){
        if(confirm("是否将“活性炭池”设置为维修状态？")){
        	document.getElementById("fix_head").innerHTML="活性炭池维修闸门配合方案";
        }
    });
    $("#name_CY").click(function(){
        if(confirm("是否将“臭氧接触池”设置为维修状态？")){
            setShow();
            document.getElementById("fix_head").innerHTML="臭氧接触池维修闸门配合方案";
        }
    });
    $("#name_HHJ1").click(function(){
        if(confirm("是否将“旧混合井”设置为维修状态？")){
            setShow();
            document.getElementById("fix_head").innerHTML="旧混合井维修闸门配合方案";
        }
    });
    $("#name_HHJ2").click(function(){
        if(confirm("是否将“新混合井”设置为维修状态？")){
            setShow();
            document.getElementById("fix_head").innerHTML="新混合井维修闸门配合方案";
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
    function fix_hx_right(){
        document.getElementById("fix_head").innerHTML="东侧虹吸滤池闸门配合方案";
        clearAll();
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
    }
    function  fix_hx_left(){
        document.getElementById("fix_head").innerHTML="西侧虹吸滤池闸门配合方案";
        clearAll();
        setOpenDgree("FM014");
        setOpenDgree("FM017");
//            setOpenDgree("FM068");
        setOpenDgree("FM019");

        document.getElementById("fix_line1").innerHTML="关闭阀门14#";
        document.getElementById("fix_line2").innerHTML="关闭阀门1#~8#小虹吸";
        document.getElementById("fix_line3").innerHTML="关闭阀门17#";
        document.getElementById("fix_line4").innerHTML="打开1#~8#滤池排空闸";
        document.getElementById("fix_line5").innerHTML="断开东西滤池清水联通闸";
        document.getElementById("fix_line6").innerHTML="关闭阀门19#";
//            document.getElementById("fix_line7").innerHTML="打开阀门45#";
    }
    $("#name_QSC1").click(function(){
        if(confirm("是否将“#1清水池”设置为维修状态？")){
            setShow();
            document.getElementById("fix_head").innerHTML="#1清水池维修闸门配合方案";
        }
    });
    $("#name_QSC2").click(function(){
        if(confirm("是否将“#2清水池”设置为维修状态？")){
            setShow();
            document.getElementById("fix_head").innerHTML="#2清水池维修闸门配合方案";
        }
    });
    $("#name_QSC3").click(function(){
        if(confirm("是否将“#3清水池”设置为维修状态？")){
            setShow();
            document.getElementById("fix_head").innerHTML="#3清水池维修闸门配合方案";
        }
    });
    $("#name_QSC4").click(function(){
        if(confirm("是否将“#4清水池”设置为维修状态？")){
            setShow();
            document.getElementById("fix_head").innerHTML="#4清水池维修闸门配合方案";
        }
    });

});