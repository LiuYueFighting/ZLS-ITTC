package com.water.util;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Tools {
	//判断字符串是否是数字
	public static boolean isNumeric(String str){ 
		if (str==null){
				return false;
		}
	   Pattern pattern = Pattern.compile("[0-9]*"); 
	   Matcher isNum = pattern.matcher(str);
	   if( !isNum.matches() ){
	       return false; 
	   } 
	   return true; 
	}
}
