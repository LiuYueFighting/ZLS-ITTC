//JQuery的入口
$(function() {
	//alert("Initialization call dealsearch");
	dealSearch();
	
});

var tlist=new Array();
var strDate = '';
var searchMode = 0;
$(document).ready(function() {
	$('#addButton').click(function(event) {
		event.preventDefault();
		//++addCount;
		var _len = $("#tab tr").length;
		//alert(_len);
		$('#tab').append(
			"<tr id='tr" + _len + "'>"
			+ "<td style='width: 1px; height: 26px'><input type='hidden' id='splitSign' name='split' style='width:1px;height:25px'/></td>"
			+ "<td style='width: 1px; height: 26px'><input type='hidden' id='IDAdd' name='outStat.ID' style='width:1px;height:25px' /></td>"
			+ "<td id='indexNum" + _len + "'  style='width: 40px; height: 26px'>" + _len + "</td>"
			+ "<td style='width: 152px; height: 26px'><input name='outStat.t' id='tAdd' type='date' style='width:150px;height:25px'/></td>"
			+ "<td style='width: 102px; height: 26px'><select name='outStat.PoolID' id='PoolIDAdd' style='width:100px;height:25px'><option value='MTG_QingS_SC01'>2# 清水池</option><option value='MTG_QingS_SC02'>2# 清水池</option><option value='MTG_QingS_SC03'  selected='selected'>3# 清水池</option></select></td>"
			+ "<td style='width: 72px; height: 26px'><input style='width:70px;height:25px' id='NTU' name='outStat.NTU' data-options='min:0,precision:3,' /></td>"
			+ "<td style='width: 52px; height: 26px'><input style='width:50px;height:25px' id='Cl' name='outStat.Cl' data-options='min:0,precision:3' /></td>"
			+ "<td style='width: 52px; height: 26px'><input style='width:50px;height:25px' id='Fe' name='outStat.Fe' data-options='min:0,precision:3'/></td>"
			+ "<td style='width: 52px; height: 26px'><input style='width:50px;height:25px' id='Al' name='outStat.Al' data-options='min:0,precision:3'/></td>"
			+ "<td id='delete" + _len + "' style='width:40px;height:26px'><a href='#' onclick='deltr(" + _len + ",event)'>删除</a></td>"
			+ "</tr>");
	});
	$('.radioItem').change(function() {
		//var $selectedValue = $('input[name="chooseIndexButton"]:checked').val();
		//alert("$selectedValue = " + $selectedValue);
		hideImportPanel();
		searchMode = 0;
		//alert("menu change call dealsearch");
		dealSearch();
	});
	
/*	$('#chooseIndexButton2').combobox({  
        onChange:function(){  
    		hideImportPanel();
    		if(searchMode!=1){ //不是从查询窗口进入的
	    		searchMode=0;
	    		$("#frmSearch").form('clear');
	    		dealSearch();
    		}
        }
	}); */
	
});
function changeButton2(){
	hideImportPanel();
	if(searchMode!=1){ //不是从查询窗口进入的
		searchMode=0;
		$("#frmSearch").form('clear');
		dealSearch();
	}
}
$(document).ready(function() {
	var count = 0;
	$('#menu').click(function() {
		hideImportPanel();
		count += 1;
		if(count % 2 == 1) {
			$('#menu').text("隐藏");
			$('#add').animate({
				'left': '120px',
				'top': '0'
			},{
				//duration: 'slow'
			});
			$('#edit').animate({
				'left': '49px',
				'top': '21px'
			},{
				//duration: 'slow'
			});	
			$('#delete').animate({
				'left': '6px',
				'top': '83px'
			},{
				//duration: 'slow'
			});	
			$('#search').animate({
				'left': '6px',
				'top': '157px'
			},{
				//duration: 'slow'
			});
			$('#export').animate({
				'left': '49px',
				'top': '217px'
			},{
				//duration: 'slow'
			});
			$('#import').animate({
				'left': '120px',
				'top': '250px'
			},{
				//duration: 'slow'
			});
//			$('#template').animate({
//				'left': '120px',
//				'top': '250px'
//			},{
//				//duration: 'slow'
//			});

		} else {
			$('#menu').text("功能");
			$('#add').animate({
				'left': '120px',
				'top': '110px'
			},{
				//duration: 'slow'
			});
			$('#edit').animate({
				'left': '120px',
				'top': '110px'
			},{
				//duration: 'slow'
			});	
			$('#delete').animate({
				'left': '120px',
				'top': '110px'
			},{
				//duration: 'slow'
			});	
			$('#search').animate({
				'left': '120px',
				'top': '110px'
			},{
				//duration: 'fast'
			});
			$('#export').animate({
				'left': '120px',
				'top': '110px'
			},{
				//duration: 'slow'
			});
			$('#import').animate({
				'left': '120px',
				'top': '110px'
			},{
				//duration: 'slow'
			});
//			$('#template').animate({
//				'left': '120px',
//				'top': '110px'
//			},{
//				//duration: 'slow'
//			});
		}
		
	});
	$('#add').click(function() {
		hideImportPanel();
		addOutStat();
	});
	$('#edit').click(function() {
		hideImportPanel();
		editOutStat();
	});
	$('#delete').click(function() {
		hideImportPanel();
		deleteOutStat();
	});
	$('#search').click(function() {
		hideImportPanel();
		searchMode = 1;
		searchOutStat();
	});
	$('#export').click(function() {
		hideImportPanel();
		showSearchforExportForm();
		//export2excel();
	});
	$('#import').click(function() {
		showImportPanel();
	});
	//$('#template').click(function() {
	//	$('#download').click();
	//});
	$('#btn-cancel').click(function() {
		$('#tab_export').css('display','none');
	});
});

function hideImportPanel() {
	$('#import').text('导入');
	$("#frmImportEdit").form('clear');
	$('#tab_Import').dialog('close');
}

function showImportPanel() {
	$('#import').text('导入');
	$("#tab_Import").dialog({
		modal : true,// 模式窗口
		title : '导入文件操作',
		iconCls : 'icon-redo',
		closed:false,
		buttons : [ {
			text : '确认',
			handler : function() {
				// 进行表单字段验证，当全部字段都有效时返回true和validatebox一起使用
				if ($('#frmImportEdit').form('validate')) {
					import2DB();
					// 关闭窗口
					hideImportPanel();
				} else {
					$.messager.alert('验证', '项目信息有误或不完整', 'error');
				}
			}
		}, {
			text : '取消',
			handler : function() {
				hideImportPanel();				
			}
		} ]

	});
}

var deltr = function(index, event) {
	event.preventDefault();
	var _len = $("#tab tr").length;
	$("tr[id='tr" + index + "']").remove();
	for(var i = index + 1; i < _len; ++i) {
		//alert("i = " + i + " _len = " + _len);
		$("tr[id='tr" + i + "']").replaceWith("<tr id='tr" + (i-1) + "'>"
				+ "<td style='width: 1px; height: 26px'><input type='hidden' id='split' name='split' style='width:1px;height:25px'/></td>"
				+ "<td style='width: 1px; height: 26px'><input type='hidden' id='IDAdd' name='outStat.ID' style='width:1px;height:25px' /></td>"
				+ "<td id='indexNum" + (i-1) + "' style='width: 40px; height: 26px'>" + (i-1) + "</td>"
				+ "<td style='width: 152px; height: 26px'><input name='outStat.t' id='tAdd' type='date' style='width:150px;height:25px'/></td>"
				+ "<td style='width: 102px; height: 26px'><select name='outStat.PoolID' id='PoolIDAdd' style='width:100px;height:25px'><option value='MTG_QingS_SC01'>1# 清水池</option><option value='MTG_QingS_SC02'>2# 清水池</option><option value='MTG_QingS_SC03'  selected='selected'>3# 清水池</option></select></td>"
				+ "<td style='width: 72px; height: 26px'><input style='width:70px;height:25px' id='NTU' name='outStat.NTU' data-options='min:0,precision:3,' /></td>"
				+ "<td style='width: 52px; height: 26px'><input style='width:50px;height:25px' id='Cl' name='outStat.Cl' data-options='min:0,precision:3' /></td>"
				+ "<td style='width: 52px; height: 26px'><input style='width:50px;height:25px' id='Fe' name='outStat.Fe' data-options='min:0,precision:3'/></td>"
				+ "<td style='width: 52px; height: 26px'><input style='width:50px;height:25px' id='Al' name='outStat.Al' data-options='min:0,precision:3'/></td>"
				+ "<td id='delete" + (i-1) + "' style='width:40px;height:26px'><a href='#' onclick='deltr(" + (i-1) + ",event)'>删除</a></td>"
				+ "</tr>");
	}
}

var tburl = 'searchOutStat.action';
var datalist = new Array();
var title;
//加载项目列表
function listOutStat(data) {
	$("#outStatbody").datagrid({
		title: title,
		width : "1300",
		height : "300",
//		iconCls : 'icon-save', // 表格左上角的图标样式
		/*url : 'listOutStat.action', // 访问服务器的地址，要求返回JSON对象*/
		url:tburl,
//		loadData:datalist,//加载
		data:data,
		rownumbers : true, // 在最前面显示行号
		fitColumns : true, // 自动适应列宽
		striped : true, // 隔行变色
		singleSelect : true, // 每次只选中一行
		loadMsg : '正在加载项目列表，请稍后...',
		remoteSort : false, // 排序，true表示从服务器端排序
		
//		pagination : true, // 在底部显示分页工具栏
//		pageSize : 5, // 指定每页的大小，服务器要加上page属性和total属性
//		pageList : [ 3,5,10,15,20], // 可以设置每页记录条数的列表，服务器要加上rows属性
		
		idField : 'ID', // 主键属性
		onLoadSuccess: function(data){
			if(data.rows!=datalist){		
				datalist = eval(data).rows;
				prehImage(); //作图			
			}
		},
		columns : [[
		            {field : 't', title : '时间',align : 'center', sortable : true, width:100,
		            	formatter : function(value) {
		            		return value.substring(0, 10);  //显示日期到小时
		            		}
		            },
		            {field : 'poolID', title : '清水池编号', align : 'center', sortable : true,width:100,
		            	formatter:function(value){
		            		return formPoolID(value);
		            		}
		            },
		            {field : 'NTU', title : '出水浊度NTU', align :'center', sortable : true, width:100,
		            	styler: function(value) {
		            		if(value> 0.25 && value < 0.3){
		            			return 'background-color:#FFFF00;font-weight:bolder;border:2px solid #FFFF00';
		            		} else if(value> 0.3) {
		            			return 'background-color:#FF0033;font-weight:bolder;border:2px solid #FF0033' ;
		            		}
		            	}
		            },
		            {field : 'cl', title : '余氯mg/L', align : 'center', sortable : true,width:100,
		            	formatter : function(value) {  //只显示两位小数
	            			  return value.toFixed(2);
		            	},
		            	styler: function(value) {
		            		if(value < 0.3){
		            			return 'background-color:#FFFF00;font-weight:bolder;border:2px solid #FFFF00';
		            		} 
		            	}
		            },
		            {field : 'fe', title : '铁含量mg/L', align :'center', sortable : true,width:100,
		            	formatter : function(value) {  //只显示两位小数
	            			  return value.toFixed(2);
		            	},
		            	styler: function(value) {
		            		if(value> 0.2 && value < 0.3){
		            			return 'background-color:#FFFF00;font-weight:bolder;border:2px solid #FFFF00';
		            		} else if(value> 0.3) {
		            			return 'background-color:#FF0033;font-weight:bolder;border:2px solid #FF0033' ;
		            		}
		            	}
		            	
		            },
		            {field : 'al', title : '铝含量mg/L', align : 'center', sortable : true,width:100,
		            	formatter : function(value) {  //只显示两位小数
	            			  return value.toFixed(3);
		            	},
		            	styler: function(value) {
		            		if(value> 0.15 && value < 0.2){
		            			return 'background-color:#FFFF00;font-weight:bolder;border:2px solid #FFFF00';
		            		} else if(value> 0.2) {
		            			return 'background-color:#FF0033;font-weight:bolder;border:2px solid #FF0033' ;
		            		}
		            	}
		            },
		            ]],

		 onDblClickRow: function (rowIndex,rowData){
			 				editOutStat();
			 			},
		
		 onHeaderContextMenu: function(e, field){
			 					  e.preventDefault();
			 					  if (!cmenu){
			 						  createColumnMenu();
			 						  }
			 					  cmenu.menu('show', {
			 						  left:e.pageX,
			 						  top:e.pageY
			 						  }
			 					  );
			 				  }
	});
}

var cmenu;
function createColumnMenu(){
	cmenu = $('<div/>').appendTo('body');
	cmenu.menu({
		onClick: function(item){
			if (item.iconCls == 'icon-ok'){
				$('#outStatbody').datagrid('hideColumn', item.name);
				cmenu.menu('setIcon', {
					target: item.target,
					iconCls: 'icon-empty'
				});
			} else {
				$('#outStatbody').datagrid('showColumn', item.name);
				cmenu.menu('setIcon', {
					target: item.target,
					iconCls: 'icon-ok'
				});
			}
		}
	});
	var fields = $('#outStatbody').datagrid('getColumnFields');
	for(var i=0; i<fields.length; i++){
		var field = fields[i];
		var col = $('#outStatbody').datagrid('getColumnOption', field);
		cmenu.menu('appendItem', {
			text: col.title,
			name: field,
			iconCls: 'icon-ok'
		});
	}
}






//关闭窗口
function closeForm() {
	$("#formEdit").form('clear');
	$('#tableEdit').dialog('close');
}

function closeAddForm() {
	$("#formAdd").form('clear');
	$('#tableAdd').dialog('close');
}

//添加的函数
function addOutStat() {

	// 清空原有的数据
	$('#formAdd').form('clear');

	// 显示添加对话框
	showAddForm();
}

function showAddForm() {
	$("#tableAdd").dialog({
		modal : true,// 模式窗口
		title : '添加操作',
		iconCls : 'icon-edit',
		closed:false,
		buttons : [{
			text : '确认',
			handler : function() {
				//$.messager.alert('表单数据', $('#newfrmEdit').serialize(), 'info');
				//$.messager.alert('验证信息', $('#newfrmEdit').form('validate'), 'info');
				//alert('test of Test1');
				// 进行表单字段验证，当全部字段都有效时返回true和validatebox一起使用
				if ($('#formAdd').form('validate')) {
					//alert('If condition');
					// 提交到服务器并写入数据库
					dealAddSave();
					// 关闭窗口
					closeAddForm();
				} else {
					$.messager.alert('验证', '项目信息有误或不完整', 'error');
				}
			}
		}, {
			text : '取消',
			handler : function() {
				//alert('click Camcel!');
				closeAddForm();
			}
		} ]
	});
}

//编辑按钮的操作
function editOutStat() {
	//alert("into editOutStat() function!");
	var outStat = $('#outStatbody').datagrid('getSelected');// 得到选中的一行数据
	// 如果没有选中记录
	if (outStat == null) {
		$.messager.alert('项目', '请先选中要编辑的项目', 'info');
		return;
	}
	$('#formEdit').form('clear');
	//alert("clear formEdit...Done!");

	// 填充数据 填充的是json数据
	$("#ID").val(outStat.ID);
	$("#PoolID").combobox('setValue',outStat.poolID);
	$("#t").datebox("setValue",(outStat.t).replace('T',' '));
	$("#NTU").numberbox('setValue',outStat.NTU);
	$("#CL").numberbox('setValue',outStat.cl);
	$("#Fe").numberbox('setValue',outStat.fe);
	$("#AL").numberbox('setValue',outStat.al);
	//alert("ID = " + outStat.ID + 
	//		"\nPoolID = " + outStat.poolID + 
	//		"\nt = " + (outStat.t).replace('T',' ') + 
	//		"\nNTU = " + outStat.NTU + 
	//		"\nCL = " + outStat.cl +
	//		"\nFe = " + outStat.fe +
	//		"\nAL = " + outStat.al);
	showEditForm();
}

//显示编辑窗口
function showEditForm() {
	$("#tableEdit").dialog({
		modal : true,// 模式窗口
		title : '编辑操作',
		iconCls : 'icon-edit',
		closed:false,
		buttons : [{
			text : '确认',
			handler : function() {
				// 进行表单字段验证，当全部字段都有效时返回true和validatebox一起使用
				//alert($('#formEdit').form('validate'));
				if ($('#formEdit').form('validate')) {
					// 提交到服务器并写入数据库
					dealSave();
					// 关闭窗口
					closeForm();
				} else {
					$.messager.alert('验证', '项目信息有误或不完整', 'error');
				}
			}
		},{
			text : '取消',
			handler : function() {
				closeForm();
			}
		}]
	});
}


//在增加和更新时点确定按钮的处理函数
function dealSave() {
	//$('#dateTemp').val($("#t").datebox("getValue"));
	// 表单数据序列化成一个字符串用&拼接
	var params = $("#formEdit").serialize();
	//alert('edit form = ' + params);
	// 表示更新
	$.post("updateOutStat.action", params, function(result) {
		if (result.operateSuccess) {
			location.reload();
			//$('#outStatbody').datagrid('reload');// 重新加载
			$.messager.alert('更新', '更新成功', 'info');
			} else {
				$.messager.alert('更新', '更新失败', 'warning');
			}
	});
}

function dealAddSave() {
	// 表单数据序列化成一个字符串用&拼接
	var params = $("#formAdd").serialize();
	//alert(params);
	var paramsArray = params.split("split=&");
	//alert('Form表单Array.length = ' + paramsArray.length + 
	//		"\nForm表单Array = " + paramsArray);
	var errorMessage = '';
	var flag = true;
	var errorMessage = '';
	for(var i = 1; i < paramsArray.length; ++i) {
		var re_ID = new RegExp(/outStat.PoolID=MTG_QingS_SC0\d/);
		var re_t = new RegExp(/outStat.t=\d{4}-\d{2}\-\d{2}/);
		var test = re_t.test(paramsArray[i]) && re_ID.test(paramsArray[i]);
//		alert("paramsArray[" + i +"] = " + paramsArray[i] +
//				"\nre_t" + re_t +
//				"\nre_ID" + re_ID);
		
		if(!test) {
			if(i == 1)
				errorMessage = '错误！第' + i + '条记录ID和日期有误！';
			else if(i > 3) {
				errorMessage += '<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;错误！第' + i + '条记录ID和日期有误！';
			} else {
				errorMessage += '<br />错误！第' + i + '条记录ID和日期有误！';
			}
			//errorMessage += errorMessageTemp;
			flag = false;
		}//test = false; 
		else {

				$.post("addOutStat.action", paramsArray[i], function(result) {
					//alert('test' + result.operateSuccess);
					if (result.operateSuccess){
						location.reload();
//						$('#dataAnalysisbody').datagrid('reload');// 重新加载
						$.messager.alert('添加', '添加成功', 'info');
					} else {
						$.messager.alert('添加', '添加失败', 'warning');
					}
				});
			
		}//test = trye
	}//for loop
	if(flag == false)
		$.messager.alert('错误', errorMessage, 'error');	
}


//删除项目
function deleteOutStat() {
	var outStat = $('#outStatbody').datagrid('getSelected');// 得到选中的一行数据
	// 如果没有选中记录
	if (outStat == null) {
		$.messager.alert('删除', '请先选中要删除的项目', 'info');
		return;
	}
	$.messager.confirm('确认', '真的要删除选中的记录吗？', function(r) {
		if (r) {
			var url = "deleteOutStat.action?outStat.ID=" + outStat.ID;
			// 试一下get方法（地址，回调函数）
			$.get(url, function(result) {
				if (result.operateSuccess) {
					location.reload();
//					$.messager.alert('删除', '选中的项目成功删除！', 'info');
					// 重新加载
					$("#outStatbody").datagrid('reload');
				} else {
					$.messager.alert('删除', '删除失败！', 'warning');
				}
			});
		}
	});
}

////查询全部
//function listAllOutStat(){
//	$('#fromSearch').form('clear');
//	dealSearch();
//}

//条件查询
function searchOutStat(){
//	$("#searchT").val(searchT);
	$("#lowT").val(lowT);
	$("#highT").val(highT);
	$("#searchPoolID").val(searchPoolID);
	showSearchForm();
}

function dealSearch() {
	var indexButton = $('#indexForm').serialize();
//	var buttonID = indexButton.slice(-6);  //buttonID = 'index3'
//	var buttonID=$('#chooseIndexButton2').combobox('getValue');
	var buttonID=$('#chooseIndexButton2 option:selected').val();
	var poolIDInMode2;
	var newParams = '';
	var failAppearence = false;

	if(searchMode == 0) {   //如果是从三个radio进行查询
		var params = $("#frmSearch").form('clear').serialize(); 
		// lowT=&highT=&searchPoolID=&lowNTU=0&highNTU=100&lowAlgaeContent=0&highAlgaeContent=100&lowOutNTU=0&highOutNTU=100&lowSV=0.00&highSV=100.00
		switch(buttonID) {
//		case 'index1':
		case 'MTG_QingS_SC01':
			title = '清水池 水质分析表';
			ImageTitle = "清水池水质分析图 ";
			newParams = params.replace(/searchPoolID=/,'searchPoolID=MTG_QingS_SC01');
			//treeURL = '${pageContext.request.contextPath}/searchOutStat.action?dataAnalysis.PoolID=MTG_QingS_SC01';
			break;
//		case 'index2':
		case 'MTG_QingS_SC02':
			title = '2# 清水池 水质分析表';
			ImageTitle = "2# 清水池水质分析图 ";
			newParams = params.replace(/searchPoolID=/,'searchPoolID=MTG_QingS_SC02');
			//treeURL = '${pageContext.request.contextPath}/searchOutStat.action?dataAnalysis.PoolID=MTG_QingS_SC02';
			break;
//		case 'index3':
		case 'MTG_QingS_SC03':
			title = '3# 清水池 水质分析表';
			ImageTitle = "3# 清水池水质分析图 ";
			newParams = params.replace(/searchPoolID=/,'searchPoolID=MTG_QingS_SC03');
			//treeURL = '${pageContext.request.contextPath}/searchOutStat.action?dataAnalysis.PoolID=MTG_QingS_SC03';
			break;
		default :
			title = '清水池 水质分析表';
			ImageTitle = "清水池水质分析图 ";
			newParams = params;
			//treeURL = '${pageContext.request.contextPath}/searchOutStat.action';
		}
	} else if(searchMode == 1){  //如果是从查询窗口进入
		var params = $("#frmSearch").serialize(); 
		/*
		 * lowT= 或 lowT=XXXX-XX-XX
		 * highT=(不确定是否有值) 或 highT=XXXX-XX-XX
		 * searchPoolID=(不确定是否有值) 或 searchPoolID=MTG_QingS_SC0X
		 */
		//alert("poolID " + poolID);
		
		var reLowTime = new RegExp(/^lowT=\d{4}-\d{2}\-\d{2}/);
		var testLowTime = reLowTime.test(params);
		var reHighTime = new RegExp(/highT=\d{4}-\d{2}\-\d{2}/);
		var testHighTime = reHighTime.test(params);
		var reID = new RegExp(/searchPoolID=MTG_QingS_SC0\d{1}/);
		var testID = reID.test(params);
		
		
		if(testLowTime && testHighTime && testID) {  // lowT、highT、searchPoolID均不为空
			var lowTimeStr = params.substring(5, 15);
			var highTimeStr = params.substring(22, 32);
			var index = params.substring(57, 58);
			if (lowTimeStr != highTimeStr)
				TimeStr = lowTimeStr + '~' + highTimeStr;
			else 
				TimeStr = lowTimeStr;

			switch(index) {
				case '1':
					title = '清水池 水质分析表' + ' ' + TimeStr;
					ImageTitle = "清水池水质分析图 " + ' ' + TimeStr;
					$('input[name="chooseIndexButton"][value="index1"]').attr("checked", true);
//					$('#chooseIndexButton2').combobox('setValue', 'MTG_QingS_SC01');
					$('#chooseIndexButton2').val('MTG_QingS_SC01');
					newParams = params;
					break;
				case '2':
					title = '2# 清水池 水质分析表' + ' ' + TimeStr;
					ImageTitle = "2# 清水池水质分析图 " + ' ' + TimeStr;
					$('input[name="chooseIndexButton"][value="index2"]').attr("checked", true);
//					$('#chooseIndexButton2').combobox('setValue', 'MTG_QingS_SC02');
					$('#chooseIndexButton2').val('MTG_QingS_SC02');
					newParams = params;
					break;
				case '3':
					title = '3# 清水池 水质分析表' + ' ' + TimeStr;
					ImageTitle = "3# 清水池水质分析图 " + ' ' + TimeStr;
					$('input[name="chooseIndexButton"][value="index3"]').attr("checked", true);
//					$('#chooseIndexButton2').combobox('setValue', 'MTG_QingS_SC03');
					$('#chooseIndexButton2').val('MTG_QingS_SC03');
					newParams = params;
					break;
				default :
					title = '清水池 水质分析表' + ' ' + TimeStr;
					ImageTitle = "清水池水质分析图 " + ' ' + TimeStr;
					$('input[name="chooseIndexButton"][value="index3"]').attr("checked", true);
					newParams = params;
					
				}
		} else {  // 如果  lowT、highT、searchPoolID均不为空  不满足，退出查询
			failAppearence = true;
			$.messager.alert('错误', '查询失败！<br />起始/结束日期、清水池编号不能为空！', 'warning');
			//设置一个错误的数据，使得查询失败，避免图表刷新，因为即便是数据缺失，SQLServer也会返回特定结果
			newParams = 'lowT=2015-01-01&highT=2014-01-01&searchPoolID';
			//closeSearchForm();
		}
		searchMode=0; //将设置模式重置，否则此时改变下拉框会不起作用
	} else if(searchMode == 2) { 
		/*
		 * lowT=XXXX-XX-XX
		 * highT=XXXX-XX-XX
		 * searchPoolID=空
		 * 其余参数也为空
		 */
		var params = $("#frmSearch").serialize(); 
		var lowTimeStr = params.substring(5, 15);
		var highTimeStr = params.substring(22, 32);
		var TimeStr = "";
		if (lowTimeStr != highTimeStr)
			TimeStr = lowTimeStr + '~' + highTimeStr;
		else 
			TimeStr = lowTimeStr;
		switch(buttonID) {
//			case 'index1':
			case 'MTG_QingS_SC01':
				title = '清水池 水质分析表' + ' ' + TimeStr;
				ImageTitle = "清水池水质分析图 " + ' ' + TimeStr;
				poolIDInMode2 = 'MTG_QingS_SC01';
				newParams = params.substring(0, 46) + poolIDInMode2 + params.substring(46);
				break;
//			case 'index2':
			case 'MTG_QingS_SC02':
				title = '2# 清水池 水质分析表' + ' ' + TimeStr;
				ImageTitle = "2# 清水池水质分析图 " + ' ' + TimeStr;
				poolIDInMode2 = 'MTG_QingS_SC02';
				newParams = params.substring(0, 46) + poolIDInMode2 + params.substring(46);
				break;
//			case 'index3':
			case 'MTG_QingS_SC03':
				title = '3# 清水池 水质分析表' + ' ' + TimeStr;
				ImageTitle = "3# 清水池水质分析图 " + ' ' + TimeStr;
				poolIDInMode2 = 'MTG_QingS_SC03';
				newParams = params.substring(0, 46) + poolIDInMode2 + params.substring(46);
				break;
			default :
				title = '清水池 水质分析表' + ' ' + TimeStr;
				ImageTitle = "清水池水质分析图 " + ' ' + TimeStr;
				poolIDInMode2 = 'MTG_QingS_SC03';
				newParams = params.substring(0, 46) + poolIDInMode2 + params.substring(46);
				
		}
	}	  

//	alert("newParams = " + newParams);
	$.post("searchOutStat.action", newParams, function(result) {
		if (result.total!=0) {
			tlist = result.tlist;
			listOutStat(result);
			if(searchMode != 2) {
				listTreeNode(tlist);
			}
		} else {
			if(!failAppearence) {
				//如果已经出现了查询失败窗口，见mode2，就不必要再出现下面的窗口
				$.messager.alert('查询', '查询失败,未查找到相关信息', 'warning');
			}
		}
	});
}

/*
//查询处理
function dealSearch() {
	var indexButton = $('#indexForm').serialize();
	var buttonID = indexButton.slice(-6);  //searchID = 'index3'

	var ImageTitleTemp;
	var newParams = '';
	
	if(searchMode == 0) {   //如果是从三个radio进行查询
		var params = $("#fromSearch").form('clear').serialize(); //params = 'searchT=&searchPoolID='
		switch(buttonID) {
		case 'index1':
			title = '1# 出水池水质分析表';
			ImageTitle = "1# 出水池水质分析图 ";
			newParams = params + 'MTG_QingS_SC01';
			treeURL = '${pageContext.request.contextPath}/searchOutStat.action?dataAnalysis.PoolID=MTG_QingS_SC01';
			break;
		case 'index2':
			title = '2# 出水池水质分析表';
			ImageTitle = "2# 出水池水质分析图 ";
			newParams = params + 'MTG_QingS_SC02';
			treeURL = '${pageContext.request.contextPath}/searchOutStat.action?dataAnalysis.PoolID=MTG_QingS_SC02';
			break;
		case 'index3':
			title = '3# 出水池水质分析表';
			ImageTitle = "3# 出水池水质分析图 ";
			newParams = params + 'MTG_QingS_SC03';
			treeURL = '${pageContext.request.contextPath}/searchOutStat.action?dataAnalysis.PoolID=MTG_QingS_SC03';
			break;
		default :
			title = '出水池 水质分析表';
			ImageTitle = "出水池水质分析图 ";
			newParams = params;
			treeURL = '${pageContext.request.contextPath}/searchOutStat.action';
		}
	} else if(searchMode == 1){  //如果是从查询窗口进入
		var params = $("#fromSearch").serialize(); //params = 'searchT=不确定是否为空&searchPoolID=不确定是否为空'
		//alert("poolID " + poolID);
		
		var reTime = new RegExp(/^searchT=\d{4}-\d{2}\-\d{2}/);
		var testTime = reTime.test(params);
		var reID = new RegExp(/searchPoolID=MTG_QingS_SC0\d{1}/);
		var testID = reID.test(params);
		
		if(!testTime && !testID) {  //日期空 ID空     searchT=&searchPoolID=
			switch(buttonID) {
				case 'index1':
					titleTemp = '1# 出水池水质分析表';
					ImageTitleTemp = "1# 出水池水质分析图 ";
					newParams = params + 'MTG_QingS_SC01';
					treeURL = '${pageContext.request.contextPath}/searchOutStat.action?dataAnalysis.PoolID=MTG_QingS_SC01';
					break;
				case 'index2':
					titleTemp = '2# 出水池水质分析表';
					ImageTitleTemp = "2# 出水池水质分析图 ";
					newParams = params + 'MTG_QingS_SC02';
					treeURL = '${pageContext.request.contextPath}/searchOutStat.action?dataAnalysis.PoolID=MTG_QingS_SC02';
					break;
				case 'index3':
					titleTemp = '3# 出水池水质分析表';
					ImageTitleTemp = "3# 出水池水质分析图 ";
					newParams = params + 'MTG_QingS_SC03';
					treeURL = '${pageContext.request.contextPath}/searchOutStat.action?dataAnalysis.PoolID=MTG_QingS_SC03';
					break;
				default :
					titleTemp = '出水池 水质分析表';
					ImageTitleTemp = "出水池水质分析图 ";
					newParams = params;
					treeURL = '${pageContext.request.contextPath}/searchOutStat.action';
			}   //searchT=&searchPoolID=MTG_QingS_SC0X
			title = titleTemp;
			ImageTitle = ImageTitleTemp;
		}  //忽略日期，只显示水池，且树形菜单时间与水池数据对应
		
		if(!testTime && testID) {  //日期空 ID不空     searchT=&searchPoolID=MTG_QingS_SC0X
			var index = params.slice(-1);
			switch(index) {
				case '1':
					titleTemp = '1# 出水池水质分析表';
					ImageTitleTemp = "1# 出水池水质分析图 ";
					newParams = params;
					treeURL = '${pageContext.request.contextPath}/searchOutStat.action?dataAnalysis.PoolID=MTG_QingS_SC01';
					$('input[name="chooseIndexButton"][value="index1"]').attr("checked", true);
					break;
				case '2':
					titleTemp = '2# 出水池水质分析表';
					ImageTitleTemp = "2# 出水池水质分析图 ";
					newParams = params;
					treeURL = '${pageContext.request.contextPath}/searchOutStat.action?dataAnalysis.PoolID=MTG_QingS_SC02';
					$('input[name="chooseIndexButton"][value="index2"]').attr("checked", true);
					break;
				case '3':
					titleTemp = '3# 出水池水质分析表';
					ImageTitleTemp = "3# 出水池水质分析图 ";
					newParams = params;
					treeURL = '${pageContext.request.contextPath}/searchOutStat.action?dataAnalysis.PoolID=MTG_QingS_SC03';
					$('input[name="chooseIndexButton"][value="index3"]').attr("checked", true);
					break;
				default :
					titleTemp = '出水池水质分析表';
					ImageTitleTemp = "出水池水质分析图 ";
					newParams = params;
					treeURL = '${pageContext.request.contextPath}/searchOutStat.action';
					$('input[name="chooseIndexButton"][value="index3"]').attr("checked", true);
			}//searchT=&searchPoolID=MTG_QingS_SC0X
			title = titleTemp;
			ImageTitle = ImageTitleTemp;
		}//忽略日期，只显示水池，且树形菜单时间与水池数据对应
		
		if(testTime && !testID) {  //日期不空 ID空     searchT=XXXX-XX-XX&searchPoolID=
			switch(buttonID) {
				case 'index1':
					titleTemp = '1# 出水池水质分析表';
					ImageTitleTemp = "1# 出水池水质分析图 ";
					newParams = params + 'MTG_QingS_SC01';
					treeURL = '${pageContext.request.contextPath}/searchOutStat.action?dataAnalysis.PoolID=MTG_QingS_SC01';
					break;
				case 'index2':
					titleTemp = '2# 出水池水质分析表';
					ImageTitleTemp = "2# 出水池水质分析图 ";
					newParams = params + 'MTG_QingS_SC02';
					treeURL = '${pageContext.request.contextPath}/searchOutStat.action?dataAnalysis.PoolID=MTG_QingS_SC02';
					break;
				case 'index3':
					titleTemp = '3# 出水池水质分析表';
					ImageTitleTemp = "3# 出水池水质分析图 ";
					newParams = params + 'MTG_QingS_SC03';
					treeURL = '${pageContext.request.contextPath}/searchOutStat.action?dataAnalysis.PoolID=MTG_QingS_SC03';
					break;
				default :
					titleTemp = '出水池 水质分析表';
					ImageTitleTemp = "出水池水质分析图 ";
					newParams = params;
					treeURL = '${pageContext.request.contextPath}/searchOutStat.action';
			} //searchT=XXXX-XX-XX&searchPoolID=MTG_QingS_SC0X
			var strDate = ' ' + params.substring(8, 18);  // XXXX-XX-XX
			title = titleTemp + strDate;
			ImageTitle = ImageTitleTemp + strDate;
		}//图标显示日期，显示水池编号，且树形菜单时间与水池数据对应
		
		if(testTime && testID) {  //日期不空 ID不空     searchT=XXXX-XX-XX&searchPoolID=MTG_QingS_SC0X
			var index = params.slice(-1);
			switch(index) {
				case '1':
					titleTemp = '1# 出水池水质分析表';
					ImageTitleTemp = "1# 出水池水质分析图 ";
					newParams = params;
					treeURL = '${pageContext.request.contextPath}/searchOutStat.action?dataAnalysis.PoolID=MTG_QingS_SC01';
					$('input[name="chooseIndexButton"][value="index1"]').attr("checked", true);
					break;
				case '2':
					titleTemp = '2# 出水池水质分析表';
					ImageTitleTemp = "2# 出水池水质分析图 ";
					newParams = params;
					treeURL = '${pageContext.request.contextPath}/searchOutStat.action?dataAnalysis.PoolID=MTG_QingS_SC02';
					$('input[name="chooseIndexButton"][value="index2"]').attr("checked", true);
					break;
				case '3':
					titleTemp = '3# 出水池水质分析表';
					ImageTitleTemp = "3# 出水池水质分析图 ";
					newParams = params;
					treeURL = '${pageContext.request.contextPath}/searchOutStat.action?dataAnalysis.PoolID=MTG_QingS_SC03';
					$('input[name="chooseIndexButton"][value="index3"]').attr("checked", true);
					break;
				default :
					titleTemp = '出水池 水质分析表';
					ImageTitleTemp = "出水池水质分析图 ";
					newParams = params;
					treeURL = '${pageContext.request.contextPath}/searchOutStat.action';
					$('input[name="chooseIndexButton"][value="index3"]').attr("checked", true);
			}//searchT=XXXX-XX-XX&searchPoolID=MTG_QingS_SC0X
			var strDate = ' ' + params.substring(8, 18);  // XXXX-XX-XX
			title = titleTemp + strDate;
			ImageTitle = ImageTitleTemp + strDate;
		}//图标显示日期，只显示水池，且树形菜单时间与水池数据对应
	} else if(searchMode == 2) {  //如果是从树形菜单进入  
		var params = $("#fromSearch").serialize();  //params = 'searchT=XXXX-XX-XX&searchPoolID=不关心有没有'
//		alert(params);
		strDate = params.substring(8, 18);  //'XXXX-XX-XX'
		switch(buttonID) {  //先查看现在radio的值为多少
			case 'index1':
				title = '1# 出水池水质分析表' + '' + strDate;
				ImageTitle = "1# 出水池水质分析图 " + ' ' + strDate;
				newParams = 'searchT=' + strDate + '&searchPoolID=MTG_QingS_SC01';
				//treeURL = '${pageContext.request.contextPath}/searchOutStat.action?dataAnalysis.PoolID=MTG_QingS_SC01';
				break;
			case 'index2':
				title = '2# 出水池水质分析表' + '' + strDate;
				ImageTitle = "2# 出水池水质分析图 " + ' ' + strDate;
				newParams = 'searchT=' + strDate + '&searchPoolID=MTG_QingS_SC02';
				//treeURL = '${pageContext.request.contextPath}/searchOutStat.action?dataAnalysis.PoolID=MTG_QingS_SC02';
				break;
			case 'index3':
				title = '3# 出水池水质分析表' + '' + strDate;
				ImageTitle = "3# 出水池水质分析图 " + ' ' + strDate;
				newParams = 'searchT=' + strDate + '&searchPoolID=MTG_QingS_SC03';
				//treeURL = '${pageContext.request.contextPath}/searchOutStat.action?dataAnalysis.PoolID=MTG_QingS_SC03';
				break;
			default :
				title = '出水池水质分析表' + '' + strDate;
				ImageTitle = "出水池水质分析图 " + ' ' + strDate;
				newParams = params;
				//treeURL = '${pageContext.request.contextPath}/searchOutStat.action';
		}
	}
	
	//alert("searchMode = " + searchMode +
		//	"\nbuttonID = " + buttonID + 
			//"\nnewParams = " + newParams);
	
	
	
		$.post("searchOutStat.action", newParams, function(result) {
			if (result.total!=0) {
				//$('#outStatbody').datagrid('reload');// 重新加载
				tlist = result.tlist;
				listOutStat(result);
				if(searchMode != 2) {
					listTreeNode(tlist);
				}				
			} else {
				$.messager.alert('查询', '未查询到相关信息', 'warning');
			}
		});
}*/


//显示查询窗口
function showSearchForm() {
	$("#searchArea").dialog({
		modal : true,// 模式窗口
		title : '查询操作',
		iconCls : 'icon-search',
		closed:false,
		buttons : [ {
			text : '确认',
			handler : function() {
				// 进行表单字段验证，当全部字段都有效时返回true和validatebox一起使用
				//if ($('#frmSearch').form('validate')) {
					// 提交到服务器并写入数据库
				
					dealSearch();
					// 关闭窗口
					closeSearchForm();
				//} else {
				//	$.messager.alert('验证', '项目信息有误或不完整', 'error');
				//}
			}
		}, {
			text : '取消',
			handler : function() {
				closeSearchForm();
			}
		} ]
	});
}

//关闭查询窗口
function closeSearchForm() {
	$("#fromSearch").form('clear');
	$('#searchArea').dialog('close');
}

//水池编号转换
function formPoolID(value){
	var strs = new Array();
	var poolID;
	strs=value.split("_");//字符切割
	poolID = strs[2].replace(/SC0/,'');
	poolID = poolID.replace(/SC0/,'');
	return poolID + "#"+"清水池" ;	
}


//var tlist = new Array();
//var poolIDlist  = new Array();
////查询下拉框显示的数据
//var url = "${pageContext.request.contextPath}/listOutStat.action";
//$.getJSON(url, function(json) {
//	//去除重复项
//	//alert("json<br />" + json);
//	//alert("eval(json)<br />" + eval(json));
//	var datalist = eval(json).rows;
//	//alert("datalist<br />" + datalist);
//	var tempPoolIDlist = new Array();
//	for(var i=0;i<json.total;i++){
//		var row = datalist[i];
//		if(jQuery.inArray(row.poolID, tempPoolIDlist)<0){
//			tempPoolIDlist.push(row.poolID);
//			poolIDlist.push({poolID:row.poolID,text:formPoolID(row.poolID)});
//		}
//		if(jQuery.inArray(row.t, tlist)<0){
//			tlist.push(row.t);
//		}
//	}//for
//	
//	$('#searchPoolID').combobox({
//		data : poolIDlist.sort(keysrt('poolID',false)),
//		valueField:'poolID',
//		textField:'text',
//		onLoadSuccess: function () {
//			$(this).combobox('setText', '');
//		}			
//	});
//	listTreeNode(tlist.sort());
//});


//根据对象key 对对象数组排序，使用 arr.sort(keystr('key',true)); false表示升序，ture表示降序 
function keysrt(key,desc) {
	return function(a,b){
		return desc ? ~~(a[key] < b[key]) : ~~(a[key] > b[key]);
	}
}

//预测水位分析图
var ImageTitle;
function prehImage(){
	
	var OUTNTUArray=new Array();		// 出水浊度
	var CLArray=new Array();			// CL
	var FeArray=new Array();			// Fe
	var ALArray = new Array();			// AL
	
	var poollist = new Array();
	var options;
	if (datalist.length>0){					
		for (var i=0; i<datalist.length;i++){
			var row = datalist[i]; 
			var flag_i = jQuery.inArray(row.poolID, poollist); //判断水池是否存在
			if(flag_i<0){  //不存在
				poollist.push(row.poolID);	//添加水池
				flag_i=poollist.length-1;
				
				OUTNTUArray[flag_i]=[];	
				CLArray[flag_i]=[];	
				FeArray[flag_i]=[];	
				ALArray[flag_i]=[];						
			}//if flag_i
			OUTNTUArray[flag_i].push([Date.UTC(row.t.substring(0, 4),
					row.t.substring(5, 7)-1, //highcharts 月份要减一，因为Date.UTC从0-11计数
					row.t.substring(8, 10),
					row.t.substring(11, 13)
			),row.NTU]);	//填充数据，PAC投加量
			CLArray[flag_i].push([Date.UTC(row.t.substring(0, 4),
					row.t.substring(5, 7)-1, //highcharts 月份要减一，因为Date.UTC从0-11计数
					row.t.substring(8, 10),
					row.t.substring(11, 13)
			),row.cl]);	//填充数据，FeCl3投加量	
			FeArray[flag_i].push([Date.UTC(row.t.substring(0, 4),
					row.t.substring(5, 7)-1, //highcharts 月份要减一，因为Date.UTC从0-11计数
					row.t.substring(8, 10),
					row.t.substring(11, 13)
			),row.fe]);	//填充数据，原水浊度
			ALArray[flag_i].push([Date.UTC(row.t.substring(0, 4),
					row.t.substring(5, 7)-1, //highcharts 月份要减一，因为Date.UTC从0-11计数
					row.t.substring(8, 10),
					row.t.substring(11, 13)
			),row.al]);	//填充数据，出水浊度
		} //for
	} //if datalist.length
	//var data=listArray[0].sort();
	/**绘图**/
	options = {
			chart: {
				borderColor: '#95B8E7',	//边框颜色
			    selectionMarkerFill: 'rgba(0,0,0, 0.2)',
			    height: 650,
			    //width:1200,
			    zoomType: 'y',
			},
			colors: ['#000000', '#FF0000', '#0000C6', '#00A600',
			         '#000000', '#FF0000', '#0000C6', '#00A600',
			         '#000000', '#FF0000', '#0000C6', '#00A600'],
			credits: {//Highchart by default puts a credits label in the lower right corner of the chart. This can be changed using these options.
				enabled: false,
				text: '北京市自来水集团',
				href: '',
				position: {
				    align: 'right',
				    x: -10,
				    verticalAlign: 'bottom',
				    y: -25
				},
				style: {                            // 样式设置
				    cursor: 'default',
				    color: 'blue',
				    fontSize: '12px'
				}
			},	//显示图表版权信息
			exporting : {
				type:'image/svg+xml',
				filename: 'QualityOfOutWater',
				buttons: {
	                contextButton: {
	                    enabled:false
	                },
	                exportButton:{
	                	text:'导出',
	                	onclick: function () {
	                        this.exportChart();
	                    }
//	                	menuItems: Highcharts.getOptions().exporting.buttons.contextButton.menuItems.splice(1)
	                },
	                printButton: {
	                    text: '打印',
	                    onclick: function () {
	                        this.print();
	                    }
	                }
	            },
			},
			lang:{						
				printChart: '打印',
				downloadJPEG: 'JPEG 图片',
			    downloadPDF: 'PDF文档',
			    downloadPNG: 'PNG 图片',
			    downloadSVG: 'SVG 矢量图',
			    exportButtonTitle: '下载图片',
				noData: '没有查询到数据',
				Zoom: '时间选择',
			},
			legend: {  //The legend is a box containing a symbol and name for each series item or point item in the chart.
		        enabled: true,	//显示图例	
		        layout:"vertical",
		        align: 'right', //水平方向位置
		        verticalAlign: 'top', //垂直方向位置
		        x:0,
		        y:100		            	            
		    },
		    navigation : {
		        menuItemStyle: {
		        fontWeight: 'normal',
		        background: 'none'
		    },
		    menuItemHoverStyle: {
		        fontWeight: 'bolder',
		        background: 'none',
		        color: 'black'
		    }, 
		    menuStyle: {
		        background: '#E0E0E0'
		    },
            buttonOptions:{
            	theme:{
            		 style: {
            			 fontWeight: 'bolder',
     	                 background: 'none',
     	                 color: 'black',
                     }
            	}
            	
            }
		},
		navigator: {
			enabled : true,
			handles: {
		    	backgroundColor: '#66CCFF',
		    	borderColor: '#6650FF'
		    },
		    margin: 2,
		    maskFill: 'rgba(102,204,255, 0.5)'
		},
		rangeSelector: {
	    	allButtonsEnabled: true,
	        buttonTheme: { // styles for the buttons
	            fill: 'none',
	            stroke: 'none',
	            'stroke-width': 0,
	            r: 3,
	            style: {
	                color: '#039',
	                fontWeight: 'bold'
	            },
	            states: {
	                hover: {
	                },
	                select: {
	                    fill: '#039',
	                    style: {
	                        color: 'white'
	                    }
	                }
	            }
	        },
	        buttons: [{
            	type: 'week',
            	count: 1,
            	text: '1周'
            },{
            	type: 'week',
            	count: 2,
            	text: '2周'
            },{
    	    	type: 'week',
    	    	count: 3,
    	    	text: '3周'
    			}, {
    			type: 'month',
    			count: 1,
    			text: '1月'
    			}],
			buttonSpacing: 10,
	        inputBoxBorderColor: 'gray',
	        inputBoxWidth: 120,
	        //inputBoxHeight: 40,
	        inputEnabled: true,
	        inputEditDateFormat: '%Y-%m-%d',
	        inputDateFormat: '%Y-%m-%d',
	        inputDateParser: function(value) {
	        	value = value.split('-');
	        	return Date.UTC(value[0], (value[1] - 1), value[2]);
	        },
	        inputStyle: {
	            color: '#000000',
	            fontWeight: 'bold'
	        },
	        labelStyle: {
	            color: 'red',
	            fontWeight: 'bold'
	        },
	        selected: 0
	    },
		scrollbar: {
			barBackgroundColor: 'gray',
		    barBorderRadius: 7,
		            barBorderWidth: 0,
		            buttonBackgroundColor: 'gray',
		            buttonBorderWidth: 0,
		            buttonArrowColor: 'yellow',
		            buttonBorderRadius: 7,
		            rifleColor: 'yellow',
		            trackBackgroundColor: 'white',
		            trackBorderWidth: 1,
		            trackBorderColor: 'silver',
		            trackBorderRadius: 7
		},
				// 按钮样式
			    title:{
			    	text: ImageTitle,
					style:{
						font: '20px',
						color: '#0E2D5F',
						fontWeight: 'bold',
						fontFamily:'微软雅黑',
						fontSize:'20px',
					}
				},
				tooltip: {
		            backgroundColor: {
		                linearGradient: {
		                    x1: 0,
		                    y1: 0,
		                    x2: 0,
		                    y2: 1
		                },
		                stops: [
		                    [0, 'white'],
		                    [1, '#EEE']
		                ]
		            },
		            borderColor: 'gray',
		            borderWidth: 1,
		            dateTimeLabelFormats: { // don't display the dummy year
		            	minute: "%Y-%m-%d %H:%M",
		            	hour: "%Y-%m-%d %H时",
		            	day: "%Y-%m-%d",
					},
		        },
		        xAxis: {
					//title:{
					//	text:" 日  期 "
					//},
//					categories: tlist   //指定x轴分组
					type: 'datetime',
					dateTimeLabelFormats: { // don't display the dummy year
						hours: '%H时',
						day: "%m-%d",
						month:'%Y年 %m月',
						year: '%Y年'
					},
					tickColor: 'green',
		            tickLength: 10,
		            tickWidth: 3,
		            tickPosition: 'inside',
					labels: { 
						//rotation: -45 
					} 
				},
		yAxis: [{	//第二个Y坐标
			min: 0,
		    //max: 1,
		    startOnTick: true,
	        endOnTick: true,
	        minPadding: 0,
	        maxPadding: 0,
		    gridLineColor: 'silver',
		    showLastLabel: true,
		    //tickAmount: 5,
		    tickColor: 'green',
	        tickLength: 10,
	        tickWidth: 3,
	        tickPosition: 'inside',
	        //tickPositions: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
		    
	        //linkedTo: 0,
			labels: {
	            formatter: function () {
	                return this.value;
	            }
	        },
			//title: {
			//	enable: true,
			//	text: '开启度/转速/沉降比'                  //指定y轴的标题
			//},
	        
	        
	        
	        title: {
			        		text: '出水浊度(NTU)/铁/铝含量(mg/L)'                  //指定y轴的标题
			},

		},{	//第一个y轴坐标
			min: 0,
		    //max: 1,
		    startOnTick: true,
	        endOnTick: true,
	        minPadding: 0,
	        maxPadding: 0,
		    gridLineColor: 'silver',
		    opposite:false,
		    showLastLabel: true,
		    //tickAmount: 5,
		    tickColor: 'green',
	        tickLength: 10,
	        tickWidth: 3,
	        tickPosition: 'inside',
	        //linkedTo: 0,
	        //tickPositions: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
			title: {
				text: '余氯(mg/L)'                  //指定y轴的标题
			},
			plotLines:[
        	           {//第一条标示线	
        	        	   color:'red',           //线的颜色，定义为红色
        	        	   dashStyle:'ShortDash',     //默认值，这里定义为实线
        	        	   value:0.8,               //定义在那个值上显示标示线，这里是在y轴上刻度为3的值处垂直化一条线
        	        	   width:2,               //标示线的宽度，2px
        	        	   label:{
        	        		   text:'出水浊度最高值 0.8',     //标签的内容
//        	        		   align:'left',                //标签的水平位置，水平居左,默认是水平居中center
        	        		   //y:10                         //标签相对于被定位的位置水平偏移的像素，重新定位，水平居左10px
        	        	   },
        	        	   zIndex:100, 				//标示线位置，值越大，显示在越前面
        	           },
        	           {//第二条标示线	
        	        	   color:'orange',           //线的颜色，定义为橙色
        	        	   dashStyle:'ShortDash',     //默认值，这里定义为实线
        	        	   value:0.2,               //定义在那个值上显示标示线，这里是在y轴上刻度为0.5的值处垂直化一条线
        	        	   width:2,               //标示线的宽度，2px
        	        	   label:{
        	        		   text:'出水浊度最低值 0.2',     //标签的内容
        	        	   },
        	        	   zIndex:100, 			//标示线位置，值越大，显示在越前面
        	           }]
				        
			},
			
			],
				       //显示数据
			plotOptions: {
				line: {
					dataLabels: {
						enabled: true,
						formatter: function() {
							return this.y;
						} 
				    },
				    enableMouseTracking: true,
				}, 
			},
				        //指定数据列
				        series: []
		};//options
	options.series = new Array();
	for(var i=0;i<poollist.length;i++)
	{	
		// OUTNTU
		options.series[i+poollist.length*2] = new Object();
		options.series[i+poollist.length*2].data=OUTNTUArray[i].sort(); //对listArray[i]进行排序，否则会造成时间轴上的图错乱
		options.series[i+poollist.length*2].name='出水浊度';
		options.series[i+poollist.length*2].type="line";
		options.series[i+poollist.length*2].yAxis=1;
		
		// CL
		options.series[i+poollist.length*3] = new Object();
		options.series[i+poollist.length*3].data=CLArray[i].sort(); //对listArray[i]进行排序，否则会造成时间轴上的图错乱
		options.series[i+poollist.length*3].name='余氯';
		options.series[i+poollist.length*3].type="line";
		options.series[i+poollist.length*3].yAxis=1;
		
		// Fe
		options.series[i] = new Object();
		options.series[i].data=FeArray[i].sort(); //对listArray[i]进行排序，否则会造成时间轴上的图错乱
		options.series[i].name='铁含量';
		options.series[i].type="line";
		options.series[i].yAxis=0;
		
		// OUTNTU
		options.series[i+poollist.length*1] = new Object();
		options.series[i+poollist.length*1].data=ALArray[i].sort(); //对listArray[i]进行排序，否则会造成时间轴上的图错乱
		options.series[i+poollist.length*1].name='铝含量';
		options.series[i+poollist.length*1].type="line";
		options.series[i+poollist.length*1].yAxis=0;
	}
	options.series.sort(keysrt("name",false));
	//chart = new Highcharts.Chart(options);
	$('#imageContainer').highcharts('StockChart',options);
	
}//preH;

//左侧时间列表显示
function listTreeNode(tlist){
	$('#timeTree').tree({
//		url: 'tree_data.json',
		data: tlist,
		animate:true,	//动画效果
		lines:true,
		onClick:function(node){
			hideImportPanel()
			searchMode = 2;
			var pnode=$('#timeTree').tree('getParent',node.target);
			var out=node.text;
			
			while(pnode.text!="时间列表"){
				out=pnode.text+out;
				pnode=$('#timeTree').tree('getParent',pnode.target);	
			}
			if($('#timeTree').tree('isLeaf',node.target)){	//是根节点
				out=out.replace("年",'-'); out=out.replace("月",'-'); out=out.replace("日",'');
//				$("#searchT").datebox("setValue",out);
				$("#lowT").datebox("setValue",out);
				$("#highT").datebox("setValue",out);
				$("#searchPoolID").val();
				//alert('Tree node call')
				dealSearch();		
			}
		},
		cascadeCheck:true,//是否支持级联选择
		
	});
}

function GetNode(type){  
    var node = $('#timeTree').tree('getChecked');  
    var chilenodes = '';  
    var parantsnodes = '';  
    var prevNode = '';  
    for (var i = 0; i < node.length; i++) {  
     
        if ($('#timeTree').tree('isLeaf', node[i].target)) {  
            chilenodes += node[i].text + ',';  
             
            var pnode = $('#timeTree').tree('getParent', node[i].target);  
            if (prevNode != pnode.text) {  
                parantsnodes += pnode.text + ',';  
                prevNode = pnode.text;  
            }  
        }  
    }  
    chilenodes = chilenodes.substring(0, chilenodes.length - 1);  
    parantsnodes = parantsnodes.substring(0, parantsnodes.length - 1);  
     
    if (type == 'child') {  
        return chilenodes;  
    }  
    else {  
        return parantsnodes  
    };  
}; 

//显示导出前的查询窗口
function showSearchforExportForm() {
	$("#tabSearchForExport").dialog({
		modal : true,// 模式窗口
		title : '请选择导出的数据范围',
		iconCls : 'icon-search',
		closed:false,
		buttons : [ {
			text : '确认',
			handler : function() {
				// 进行表单字段验证，当全部字段都有效时返回true和validatebox一起使用
				//if ($('#frmSearch').form('validate')) {
					// 提交到服务器并写入数据库
					// 关闭窗口
					export2excel();
					closeSearchForExportForm();
				//} else {
				//	$.messager.alert('验证', '项目信息有误或不完整', 'error');
				//}
			}
		}, {
			text : '取消',
			handler : function() {
				closeSearchForExportForm();
			}
		} ]
	});
}


//关闭导出前打开的查询窗口
function closeSearchForExportForm() {
	$("#frmSearchForExport").form('clear');
	$('#tabSearchForExport').dialog('close');
}

//导出到excel
function export2excel(){
	var params = $("#frmSearchForExport").serialize(); 
	var reLowTime = new RegExp(/^lowT=\d{4}-\d{2}\-\d{2}/);
	var testLowTime = reLowTime.test(params);
	var reHighTime = new RegExp(/highT=\d{4}-\d{2}\-\d{2}/);
	var testHighTime = reHighTime.test(params);
	var reID = new RegExp(/searchPoolID=MTG_Qing_SC0\d{1}/);
	var testID = reID.test(params);
	
	var url="exportOutStat.action?"+params;
	var downloadPath = "downloadTempForOut/OutStat.xls";
	$.post(url, function(result) {
	if (result.operateSuccess){
		window.location.href=downloadPath;
//		$.messager.alert('导出', '导出成功,请在浏览器下载路径中查看', 'info');		
	} else {
		if(result.state==1){  //导出失败原因  1-没有相关数据
			$.messager.alert('导出', '导出失败,没有相关数据', 'warning');
		}else if(result.state==2){
			$.messager.alert('导出', '导出失败,程序抛出异常', 'warning');
		}else{
			$.messager.alert('导出', '导出失败', 'warning');
		}
	
	}});
}

//导入文件操作
function import2DB(){
	var params=$('#upload').val();
	if(''==params || null== params){
		$.messager.alert('导入', '请选择上传文件', 'warning');
	}
	else
	{
		$.ajaxFileUpload({
			url : "importCheckOutStat.action",
//			url :'uploadOutStat.action',
			fileElementId:'upload',
			dataType:'json',
			success: function(data, status){
				if (data.operateSuccess){ //没有冲突
						$.ajaxFileUpload({
								url : "importOutStat.action",
								fileElementId:'upload',
								dataType:'json',
								success: function(result){
									if (result.operateSuccess){	
										$.messager.alert('导入', '导入成功', 'info');	
										$("#outStatbody").data().datagrid.cache = null;
										$('#outStatbody').datagrid('reload');// 重新加载
									} else {
//										$.messager.alert('导入', '导入失败<br><br>'+$('#errMsg').val(), 'warning');
										$.messager.alert('导入', '导入失败<br><br>', 'warning');
									}
								},//success
								error:function(result){
									console.log("error 上传失败");
//									$.messager.alert('导入', '导入失败<br><br>'+$('#errMsg').val(), 'warning');
									$.messager.alert('导入', '导入失败<br><br>', 'warning');
								} //error
							});//ajaxFileUpload	
						location.reload();
				} 
				else {		//有冲突
					$.messager.confirm("导入提示",'已存在相关日期的数据，是否继续覆盖导入？',function(r){
						if (r) { //上传文件
							$.ajaxFileUpload({
								url : "importOutStat.action",
								fileElementId:'upload',
								dataType:'json',
								success: function(data, status){
									if (data.operateSuccess){
										$("#outStatbody").data().datagrid.cache = null;
										$('#outStatbody').datagrid('reload');// 重新加载/
										$.messager.alert('导入', '导入成功', 'info');
										
									} else {
//										$.messager.alert('导入', '导入失败<br><br>'+$('#errMsg').val(), 'warning');
										$.messager.alert('导入', '导入失败<br><br>', 'warning');
									}
									location.reload();
								},//success
								error:function(data,status){
									console.log("error 上传失败");
//									$.messager.alert('导入', '导入失败<br><br>'+$('#errMsg').val(), 'warning');
									$.messager.alert('导入', '导入失败<br><br>', 'warning');
									$("#poolEvaluatebody").data().datagrid.cache = null;
									$('#poolEvaluatebody').datagrid('reload');// 重新加载
								} //error
							}//ajaxFileUpload
							);
						}//if r
					}) //confirm	
				}
			},
			error:function(data, status){
				$.messager.alert('导入', '导入失败<br><br>请检查文件格式是否正确！', 'warning');
			}
		});
	}
	$('#fakeUpload').val('');
}