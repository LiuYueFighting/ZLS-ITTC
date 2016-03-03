<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="content-type" content="text/html;charset=utf-8">
    <title>错误！用户未登录</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
    <script src="js/common.js"></script>
    <script src="js/jquery.min.js"></script>
    <style>
        body{
            font-family: '微软雅黑','Arial';
           /*  background: #337ab7; */
           background-color:#333;
        }
        #page_login{
        	position:relative;
            width: 1600px;
            height: 775px;
            margin: 0 auto;
            background: url("image/login/denglu.jpg");
            background-size: 1600px 800px;
        }
        #errorArea{
            height:292px;
            width:347px;
            position:absolute;
            left:816px;
            top:285px;
            color: blue;
            font-weight:bolder;
        	text-align: center;
        	font-size: 20px;
        }
        #errorArea p {
            position: relative;
            top: 100px;
        }
</style>

</head>
<body>
<div id="page_login">
	<div id="errorArea">
	<p>您尚未登录！！！<br/>
	<span id="time" style="color:red"></span>s后跳转到登录界面...<br/>
	如不跳转，请<a href="newlogin.jsp">点击链接</a>
	</p>
	</div>
</div>

</body>
</html>

<script type="text/javascript">
var t = 6;
function delayURL() {
	--t;
	document.getElementById("time").innerHTML = t;
    if(t == 0)
    window.location.href = "newlogin.jsp";
    setTimeout("delayURL()", 1000);
}
delayURL();
</script>