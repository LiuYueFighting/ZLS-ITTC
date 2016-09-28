package com.water.util;

import java.util.Map;

import com.opensymphony.xwork2.interceptor.AbstractInterceptor;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionInvocation;
import com.water.action.UserAction;
import com.water.beans.User;

public class CheckLoginInterceptor extends AbstractInterceptor{
	@Override
	  public String intercept(ActionInvocation actionInvocation) throws Exception {
	    // TODO Auto-generated method stub
	        // 对LoginAction不做该项拦截
	        Object action = actionInvocation.getAction();
	        
	        if (action instanceof UserAction) {
	            //System.out.println("exit check login, because this is login action.");
	            //UserInfoAction userinfoAction = (UserInfoAction)action;
	            return actionInvocation.invoke();
	        }
	        // 确认Session中是否存在User
	        User user = (User) ActionContext.getContext().getSession().get("user");
	        if (user != null) {
	            // 存在的情况下进行后续操作。
	            //System.out.println("already login!");
	            return actionInvocation.invoke();
	        } else {
	            // 否则终止后续操作，返回LOGIN
	            System.out.println("no login, forward login page!");
	            return "notSignIn";
	        }
	  }

}
