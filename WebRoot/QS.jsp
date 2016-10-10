<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="Access-Control-Allow-Origin" content="*">
    <meta http-equiv="Pragma" content="no-cache">
    <Meta http-equiv="Page-Enter" Content="blendTrans(Duration=0.5)">
    <Meta http-equiv="Page-Exit" Content="blendTrans(Duration=0.5)">
    <meta http-equiv="Content-Type" content="text/html; charset=gb2312"/>
    <title>北京自来水集团工艺平台</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="icon_btn/iconfont.css">
    <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/breadcrumb.css">
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/ocanvas-2.7.4.min.js"></script>
    <script src="js/my_oCanvas.js"></script>
    <script src="js/QS.js"></script>

    <style>
        body {
            background: #eeeeef;
            width:100%;
            font-size: 100%;
        }

        .sidebar a{
            color: #000000;
            margin-top: 2px;
        }
        .sidebar a:hover{
            color:blue;
        }
        .sidebar a:hover{
            background: #f5f5dc;
        }
        a {
            margin-left: 10px;
        }
         #myContent{
            margin: 0px auto;
            position: relative;
            width: 89%;
        }
        * {
            font-family: '微软雅黑', 'Arial';
        }

        #down{
        width:100%;
            height:100%;
            background-color: #eeeeef;
        }
        #left {
            position:relative;
            padding-right: 0px;
            padding-top: 0px;
            padding-left: 0px;
            margin-left: 5%;
            margin-top: 0px;
            margin-right: 0px;
            width:80%;
            height:120%;
        }
        #right {
            padding-right: 0;
            padding-top: 0;
            padding-left: 0;
            margin-left: 0;
            margin-top: 0;
            margin-right:0;
            width:auto;
        }
        #btn_group_container{
        position:absolute;
        bottom:5px;
        width:100%;
        height:73%;
        overflow:hidden;
         }
        #btn_group_both{
        position:absolute;
        left:0;
        top:0;
        width:100%;
        height:20%;
        -webkit-transition: all 0.5s ease-out 0s;
        -moz-transition: all 0.5s ease-out 0s;
        transition: all 0.5s ease-out 0s;
        }
        #btn_group_both:hover{
        top:-50px;
        }
        #btn_group_up{
        width:100%;
        height:500%;
        }
        #btn_group{
            margin:0 auto;
            position:absolute;
            left:43%;
        }
        #btn_group i{
            margin-left:10px;
        }
    #run_info{
    margin-bottom:-1px;

    }
    #run_info,#run_danger{
    position:relative;
    top:110px;
    font-size:1.5em;
    font-weight:bolder;
    }
    #list_group{
    width:80%;
    position:absolute;
    top:50%;
    font-size:2em;
    }
    .panel-heading{
    font-size:1.27em;
    }
    #list_group>select{
    border: solid 2px #337ab7;
    -moz-border-radius: 15px;
    -webkit-border-radius: 15px;
    border-radius: 6px;
    margin: 0;
    width: 91%;
    }
    #canvas_QS_zp{
	width:100%;
    }
    img { 
    max-width: 100%;
    }
    canvas { display: block; }

    </style>
</head>
<body>
    <jsp:include page="top.jsp" />
    <ol class="breadcrumb">
    <li><a href="main.jsp">首页</a></li>
    <li><a href="main.jsp">厂平展示</a></li>
    <li class="active">取水泵房</li>
    </ol>
    <div class="container-fluid">
        <div id="myContent" class="row" style="overflow: hidden;">
    <div id="left" class="col-lg-10 col-md-10">
    <canvas id="canvas_QS_zp" width="1330" height="750"></canvas>
    <div id="btn_group_container">
        <div id="btn_group_both">
            <div id="btn_group_up"></div>
            <div id="btn_group" class="list-group">
                <i id="btn_downS" class="icon iconfont iconbtn">&#xe69c;</i>
                <i  id="btn_start" class="icon iconfont iconbtn">&#xe61f;</i>
                <i id="btn_upS" class="icon iconfont iconbtn">&#xe69d;</i>
                <i id="btn_reset" class="icon iconfont iconbtn">&#xe67c;</i>
                <i id="speed" class="icon iconfont icontext">1.0X</i>
            </div>
        </div>

    </div>

    </div>
    <div id="right" class="col-lg-1 col-md-1" style="height: 753px;">
    <div id="down">

    <%--<div id="list_group" class="list-group">--%>
    <%--<button  class="btn btn-info  btn_list active" onclick="window.location.href='QS.jsp'" >取水泵房</button>--%>
    <%--<button  class="btn btn-info  btn_list" onclick="window.location.href='hhj.jsp'">混合井</button>--%>
    <%--<button  class="btn btn-info  btn_list" onclick="window.location.href='JJC.jsp'">机加池</button>--%>
    <%--<button  class="btn btn-info  btn_list" onclick="window.location.href='VL.jsp'">V型滤池</button>--%>
    <%--<button  class="btn btn-info  btn_list" onclick="window.location.href='hx.jsp'">虹吸滤池</button>--%>
    <%--<button  class="btn btn-info  btn_list" onclick="window.location.href='cy.jsp'" >臭氧池</button>--%>
    <%--<button  class="btn btn-info  btn_list" onclick="window.location.href='hxt.jsp'">活性炭池</button>--%>
    <%--<button class="btn btn-info  btn_list" onclick="window.location.href='qsc.jsp'">清水池</button>--%>
    <%--<button class="btn btn-info  btn_list " onclick="window.location.href='mc.jsp'">膜车间</button>--%>
    <%--</div>--%>
    <div class="panel panel-info" id="run_info">
    <div class="panel-heading">运行参数</div>
    <table class="table">
    <tr>
    <td>取水能力</td><td>2000m<sup>3</sup>/h</td>
    </tr>
    <tr>
    <td>次氯酸钠</td><td>2.0mg/L</td>
    </tr>
    </table>
    </div>
    <div>

    <div class="panel panel-info" id="run_danger">
    <div class="panel-heading">水质标准</div>
    <table class="table">
    <tr>
    <td>出水浊度</td><td><20NTU</td>
    </tr>
    </table>
    </div>
    </div>
    <div id="list_group" class="list-group">
    <select name="server" onchange="self.location.href=options[selectedIndex].value" id="server">
    <option value="QS.jsp" selected>取水泵房</option>
    <option value="hhj.jsp">混合井</option>
    <option value="JJC1.jsp">1#机加池</option>
    <option value="JJC2.jsp">2#机加池</option>
    <option value="JJC.jsp">3#机加池</option>
    <option value="VL.jsp">V型滤池</option>
    <option value="hx.jsp">虹吸滤池</option>
    <option value="cy.jsp">臭氧接触池</option>
    <option value="hxt.jsp">活性炭池</option>
    <option value="qsc.jsp">清水池</option>
    <option value="mc.jsp" >膜车间</option>
    <option value="ps.jsp">配水泵房</option>
    </select>
    </div>


    </div>
    </div>
    </div>
    </div>
    <jsp:include page="down.jsp" />

</div>
</body>
</html>
