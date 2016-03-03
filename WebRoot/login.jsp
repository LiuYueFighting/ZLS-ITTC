<%-- <%@page import="sun.org.mozilla.javascript.internal.json.JsonParser"%> --%>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="java.util.Enumeration"%>
<%@ page import="firsttest.mysql" %>
<%@ page import="java.sql.*,java.text.*,java.util.*"%> 
	<% request.setCharacterEncoding("utf-8"); %>
	<%
		mysql data1=new mysql();

		int da=data1.queryUser(request.getParameter("name"),request.getParameter("pwd"));
//  		out.print(da);
		if(da==1)
		{
			/* String json="{status:'Success',title:'on'}";
			response.getWriter().write(json); */
			/* String result="window.location.href='CP_show.jsp';"; */
			response.sendRedirect("CP_show.jsp");
		} 
		else{
			response.sendRedirect("error.html");
		}
	 %>
	 
<%!  
    public String codeToString(String str){ //处理中文字符串的函数  
    String s=str;  
    try  
    {  
            byte tempB[]=s.getBytes("ISO-8859-1");  
            s=new String(tempB);  
            return s;  
              
    }catch(Exception e)  
    {  
        return s;  
    }  
  
      
}  
%>  
<%  
    String username=request.getParameter("name");  
    String userpassword=request.getParameter("pwd");  
    if(username!=null &userpassword!=null)  
    {  
        //如果用户名和密码都合法,则记下用户名,一般把用户和密码存在数据库中  
        //用数据库中的信息与提交的用户名和密码比较以进行用户合法性检查  
        session.setAttribute("name", codeToString(username));  
        //response.sendRedirect("sessionUserLogin1.jsp");  
    }  
%>

