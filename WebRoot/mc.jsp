    <%@ page language="java" contentType="text/html; charset=UTF-8"
             pageEncoding="UTF-8"%>

        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
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
        <script src="js/mc.js"></script>

        <style>
        body {
        background: #eeeeef;
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
        margin: 0 auto;
        position: relative;
        height: 750px;
        width: 1600px;
        background-color: #eeeeef;
        }
        * {
        font-family: '微软雅黑', 'Arial';
        }

        #down{
        height:100%;
        background-color: #eeeeef;
        }
        #left {
        position:relative;
        padding-right: 0px;
        padding-top: 0px;
        padding-left: 0px;
        margin-left:5%;
        margin-top: 0px;
        margin-right: 0px;
        }
        #right {
        padding-right: 0;
        padding-top: 0;
        padding-left: 0;
        margin-left: 0;
        margin-top: 0;
        margin-right:0;
        }
        #btn_group_container{
        position:absolute;
        bottom:5px;
        width:100%;
        height:500px;
        overflow:hidden;
        }
        #btn_group_both{
        position:absolute;
        left:0;
        top:0;
        width:100%;
        height:100px;
        -webkit-transition: all 0.5s ease-out 0s;
        -moz-transition: all 0.5s ease-out 0s;
        transition: all 0.5s ease-out 0s;
        }
        #btn_group_both:hover{
        top:-50px;
        }
        #btn_group_up{
        width:100%;
        height:500px;
        }
        #btn_group{
        margin:0 auto;
        position:absolute;
        top:500px;
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
            font-size:15px;
            font-weight:bolder;
        }
        #list_group{
            width:150px;
            position:absolute;
            top:65%;
            font-size:20px;
        }
        .panel-heading{
        font-size:18px;
        }
        #list_group>select{
        border: solid 1px #337ab7;
        -moz-border-radius: 15px;
        -webkit-border-radius: 15px;
        border-radius: 6px;
        margin: 0;
        width: 136px;
        }

        </style>
        </head>
        <body>
        <jsp:include page="top.jsp" />
        <ol class="breadcrumb">
        <li><a href="main.jsp">首页</a></li>
        <li><a href="main.jsp">厂平展示</a></li>
        <li class="active">膜车间</li>
        </ol>
        <div class="container-fluid">
        <div id="myContent" class="row" style="overflow: hidden;">
        <div id="left" class="col-lg-10 col-md-10" style="height: 753px;">
        <canvas id="canvas_QS_mc" width="1400" height="775"></canvas>
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


        <div>
        <div class="panel panel-info" id="run_info">
        <div class="panel-heading">运行参数</div>
        <table class="table">
        <tr>
        <td>膜通量</td><td>&le;60L/h&middot;m<sup>2</sup></td>
        </tr>
        <tr>
        <td>跨膜压差</td><td>&le;100KPa</td>
        </tr>
        <tr>
            <td>水冲周期</td><td>90min</td>
        </tr>
        <tr>
        <td>维护性清洗周期</td><td>40水冲周期</td>
        </tr>
        </table>
        </div>
        <div>

        <div class="panel panel-info" id="run_danger">
        <div class="panel-heading">水质标准</div>
        <table class="table">
        <tr>
        <td>出水浊度</td><td><0.1 NTU</td>
        </tr>
        
        </table>
        </div>
        </div>

        <div id="list_group" class="list-group">
        <select name="server" onchange="self.location.href=options[selectedIndex].value" id="server">
        <option value="QS.jsp">取水泵房</option>
        <option value="hhj.jsp">混合井</option>
        <option value="JJC1.jsp">1#机加池</option>
        <option value="JJC2.jsp">2#机加池</option>
        <option value="JJC.jsp">3#机加池</option>
        <option value="VL.jsp">V型滤池</option>
        <option value="hx.jsp">虹吸滤池</option>
        <option value="cy.jsp">臭氧接触池</option>
        <option value="hxt.jsp">活性炭池</option>
        <option value="qsc.jsp">清水池</option>
        <option value="mc.jsp" selected>膜车间</option>
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
