//JQuery的入口
$(function() {
	dealSearch();
});
var tlist = new Array();
var strDate = '';
var searchMode = 0;
$(document).ready(function() {
	$('#addButton').click(function(event) {
		event.preventDefault();
		var _len = $("#tab tr").length;
		//alert(_len);
		$('#tab').append(
			"<tr id='tr" + _len + "'>"
			+ "<td style='width:1px;height:26px'><input type='hidden' id='splitSign' name='split' style='width:1px;height:25px'/></td>"
			+ "<td style='width:1px;height:26px'><input type='hidden' id='dateTempAdd' name='dateTemp' style='width:1px;height:25px' /></td>"
			+ "<td style='width:1px;height:26px'><input type='hidden' id='IDAdd' name='dataAnalysis.ID' style='width:1px;height:25px' /></td>"
			+ "<td id='indexNum" + _len + "'style='text-align:center; width:40px;height:26px'>" + _len + "</td>"
			+ "<td style='width:152px;height:26px'><input name='dataAnalysis.t' id='tAdd' type='datetime-local' style='width:150px;height:25px'/></td>"
			+ "<td style='width:102px;height:26px'><select name='dataAnalysis.PoolID' id='PoolIDAdd' style='width:100px;height:25px'><option value='MTG_QingS_SC01' selected='selected'>清水池01#</option><option value='MTG_QingS_SC02'>清水池02#</option><option value='MTG_QingS_SC03'>清水池03#</option></select></td>"
			+ "<td style='width:72px;height:26px'><input style='width:70px;height:25px' id='InV' name='dataAnalysis.InV' data-options='min:0,precision:0,' /></td>"
			+ "<td style='width:62px;height:26px'><input style='width:60px;height:25px' id='OutV' name='dataAnalysis.OutV' data-options='min:0,precision:0' /></td>"
			+ "<td style='width:102px;height:26px'><input style='width:100px;height:25px' id='HXOutV' name='dataAnalysis.HXOutV' data-options='min:0,precision:0'/></td>"
			+ "<td style='width:102px;height:26px'><input style='width:100px;height:25px' id='LCOutV' name='dataAnalysis.LCOutV' data-options='min:0,precision:0'/></td>"
			+ "<td style='width:82px;height:26px'><input style='width:80px;height:25px' id='TCOutV' name='dataAnalysis.TCOutV' data-options='min:0,precision:0' /></td>"
			+ "<td style='width:82px;height:26px'><input style='width:80px;height:25px' id='JJOutV' name='dataAnalysis.JJOutV' data-options='min:0,precision:0'/></td>"
			+ "<td style='width:72px;height:26px'><input style='width:70px;height:25px' id='HLInV' name='dataAnalysis.HLInV' data-options='min:0,precision:0'/></td>"
			+ "<td style='width:52px;height:26px'><input style='width:50px;height:25px' id='Storage' name='dataAnalysis.Storage'  data-options='precision:0'/></td>"
			+ "<td style='width:72px;height:26px'><input style='width:70px;height:25px' id='PreH' name='dataAnalysis.PreH' data-options='precision:2'/></td>"
			+ "<td id='delete" + _len + "'style='width:40px;height:26px'><a href='#' onclick='deltr(" + _len + ",event)'>删除</a></td>"
			+ "</tr>");
	});
	
	$('.radioItem').change(function() {
		//var $selectedValue = $('input[name="chooseIndexButton"]:checked').val();
		//alert("$selectedValue = " + $selectedValue);
		hideImportPanel();
		searchMode = 0;
		dealSearch();
	});
});


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
				'left': '60px',
				'top': '16px'
			},{
				//duration: 'slow'
			});	
			$('#delete').animate({
				'left': '16px',
				'top': '60px'
			},{
				//duration: 'slow'
			});	
			$('#search').animate({
				'left': '0px',
				'top': '120px'
			},{
				//duration: 'slow'
			});
			$('#export').animate({
				'left': '16px',
				'top': '180px'
			},{
				//duration: 'slow'
			});
			$('#import').animate({
				'left': '60px',
				'top': '224px'
			},{
				//duration: 'slow'
			});
			$('#template').animate({
				'left': '120px',
				'top': '250px'
			},{
				//duration: 'slow'
			});

		} else {
			$('#menu').text("菜单");
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
			$('#template').animate({
				'left': '120px',
				'top': '110px'
			},{
				//duration: 'slow'
			});
		}
		
	});
	$('#add').click(function() {
		hideImportPanel();
		addDataAnalysis();
	});
	$('#edit').click(function() {
		hideImportPanel();
		editDataAnalysis();
	});
	$('#delete').click(function() {
		hideImportPanel();
		deleteDataAnalysis();
	});
	$('#search').click(function() {
		hideImportPanel();
		searchMode = 1;
		searchDataAnalysis();
	});
	$('#export').click(function() {
		hideImportPanel();
		export2excel();
	});
	$('#import').click(function() {
		$('#tab_export').css('display','block');
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
	$('#tab_export').css('display','none');
	//alert($('#tab_export').css('display'));
}

var deltr = function(index, event) {
	event.preventDefault();
	var _len = $("#tab tr").length;
	$("tr[id='tr" + index + "']").remove();
	for(var i = index + 1; i < _len; ++i) {
		//alert("i = " + i + " _len = " + _len);
		$("tr[id='tr" + i + "']").replaceWith("<tr id='tr" + (i-1) + "'>"
				+ "<td style='width:1px;height:26px'><input type='hidden' id='splitSign' name='split' style='width:1px;height:25px'/></td>"
				+ "<td style='width:1px;height:26px'><input type='hidden' id='dateTempAdd' name='dateTemp' style='width:1px;height:25px' /></td>"
				+ "<td style='width:1px;height:26px'><input type='hidden' id='IDAdd' name='dataAnalysis.ID' style='width:1px;height:25px' /></td>"
				+ "<td id='indexNum" + (i-1) + "'style='text-align:center; width:40px;height:26px'>" + (i-1) + "</td>"
				+ "<td style='width:152px;height:26px'><input name='dataAnalysis.t' id='tAdd' type='datetime-local' style='width:150px;height:25px'/></td>"
				+ "<td style='width:102px;height:26px'><select name='dataAnalysis.PoolID' id='PoolIDAdd' style='width:100px;height:25px'><option value='MTG_QingS_SC01' selected='selected'>清水池01#</option><option value='MTG_QingS_SC02'>清水池02#</option><option value='MTG_QingS_SC03'>清水池03#</option></select></td>"
				+ "<td style='width:72px;height:26px'><input style='width:70px;height:25px' id='InV' name='dataAnalysis.InV' data-options='min:0,precision:0,' /></td>"
				+ "<td style='width:62px;height:26px'><input style='width:60px;height:25px' id='OutV' name='dataAnalysis.OutV' data-options='min:0,precision:0' /></td>"
				+ "<td style='width:102px;height:26px'><input style='width:100px;height:25px' id='HXOutV' name='dataAnalysis.HXOutV' data-options='min:0,precision:0'/></td>"
				+ "<td style='width:102px;height:26px'><input style='width:100px;height:25px' id='LCOutV' name='dataAnalysis.LCOutV' data-options='min:0,precision:0'/></td>"
				+ "<td style='width:82px;height:26px'><input style='width:80px;height:25px' id='TCOutV' name='dataAnalysis.TCOutV' data-options='min:0,precision:0' /></td>"
				+ "<td style='width:82px;height:26px'><input style='width:80px;height:25px' id='JJOutV' name='dataAnalysis.JJOutV' data-options='min:0,precision:0'/></td>"
				+ "<td style='width:72px;height:26px'><input style='width:70px;height:25px' id='HLInV' name='dataAnalysis.HLInV' data-options='min:0,precision:0'/></td>"
				+ "<td style='width:52px;height:26px'><input style='width:50px;height:25px' id='Storage' name='dataAnalysis.Storage'  data-options='precision:0'/></td>"
				+ "<td style='width:72px;height:26px'><input style='width:70px;height:25px' id='PreH' name='dataAnalysis.PreH' data-options='precision:2'/></td>"
				+ "<td id='delete" + (i-1) + "'style='width:40px;height:26px'><a href='#' onclick='deltr(" + (i-1) + ",event)'>删除</a></td>"
				+ "</tr>");
	}
}





var tburl = 'searchDataAnalysis.action';
var datalist = new Array();
var title="清水池水位计算表" + strDate;
//加载项目列表
function listDataAnalysis(data) {
	$("#dataAnalysisbody").datagrid({
		title: title,
		width : "1300",
		height : "300",
//		iconCls : 'icon-save', // 表格左上角的图标样式
		/*url : 'listDataAnalysis.action', // 访问服务器的地址，要求返回JSON对象*/
		//url:tburl,
		data:data,//加载
		rownumbers : true, // 在最前面显示行号
		fitColumns : true, // 自动适应列宽
		striped : true, // 隔行变色
		singleSelect : true, // 每次只选中一行
		loadMsg : '正在加载项目列表，请稍后...',
		remoteSort : false, // 排序，true表示从服务器端排序
		collapsible:true,
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
		            {field : 't', title : '时间',align : 'center', sortable : true, width:110,
		            	  formatter : function(value) { //显示日期到小时
		            		  return value.substring(0, 10)+" "+value.substring(11,13)+"时";
		            	  }
		            },
		            {field : 'poolID', title : '水池编号', align : 'center', sortable : true,width:80,
			            	  formatter:function(value){
			            		    return formPoolID(value);
			            	  }
		            },
		            {field : 'inV', title : '总来水量', align :'center', sortable : true, width:80},
		            {field : 'outV', title : '出水量', align : 'center', sortable : true,width:70},
		            {field : 'HXOutV', title : '虹吸滤池反冲洗', align :'center', sortable : true,width:105},
		            {field : 'LCOutV', title : 'V型滤池反冲洗', align : 'center', sortable : true,width:105},
		            {field : 'TCOutV', title : '炭池反冲洗', align :'center', sortable : true,width:90},
		            {field : 'JJOutV', title : '机加池排泥', align : 'center', sortable : true,width:90},
		            {field : 'HLInV', title : '回流进水', align : 'center', sortable : true,width:80},
		            {field : 'storage',	title : '蓄水量',	align : 'center',sortable : true,width:70},
		            {field : 'preH', title : '预测水位', align :'center', sortable : true,width:80,
		            	formatter : function(value) {  //只显示两位小数
		            			  return value.toFixed(2);
		            	},
		            	styler: function(value) {
		            		if(value <= 2) {
		            			return 'background-color:#FFFF00;font-weight:bolder;border:2px solid #FFFF00';
		            		} else if(value> 2 && value < 4.9) {
		            			return 'background-color:#66FF33;border:0';
		            		} else {
		            			return 'background-color:#FF0033;font-weight:bolder;border:2px solid #FF0033' ;
		            		}
		            	}
		            }
		            ]],
		onLoadError: function () {
			 $.messager.alert("提示", "服务器忙，请稍后再试！", "warning");
		},
		            	  
		onDblClickRow: function (rowIndex,rowData){
			editDataAnalysis();
		},
		
		onHeaderContextMenu: function(e, field){
			e.preventDefault();
			if (!cmenu){
				createColumnMenu();
			}
			cmenu.menu('show', {
				left:e.pageX,
				top:e.pageY
			});
		}
	});
}


var cmenu;
function createColumnMenu(){
	cmenu = $('<div/>').appendTo('body');
	cmenu.menu({
		onClick: function(item){
			if (item.iconCls == 'icon-ok'){
				$('#dataAnalysisbody').datagrid('hideColumn', item.name);
				cmenu.menu('setIcon', {
					target: item.target,
					iconCls: 'icon-empty'
				});
			} else {
				$('#dataAnalysisbody').datagrid('showColumn', item.name);
				cmenu.menu('setIcon', {
					target: item.target,
					iconCls: 'icon-ok'
				});
			}
		}
	});
	var fields = $('#dataAnalysisbody').datagrid('getColumnFields');
	for(var i=0; i<fields.length; i++){
		var field = fields[i];
		var col = $('#dataAnalysisbody').datagrid('getColumnOption', field);
		cmenu.menu('appendItem', {
			text: col.title,
			name: field,
			iconCls: 'icon-ok'
		});
	}
}


	
//显示编辑窗口
function showEditForm() {
	$("#tabEdit").dialog({
		modal : true,// 模式窗口
		title : '编辑操作',
		iconCls : 'icon-edit',
		closed:false,
		buttons : [ {
			text : '确认',
			handler : function() {
				//alert('表单数据' + $('#frmEdit').serialize());
				// 进行表单字段验证，当全部字段都有效时返回true和validatebox一起使用
				if ($('#frmEdit').form('validate')) {
					// 提交到服务器并写入数据库
					dealSave();
					// 关闭窗口
					closeForm();
				} else {
					$.messager.alert('验证', '项目信息有误或不完整', 'error');
				}
			}
		}, {
			text : '取消',
			handler : function() {
				closeForm();
			}
		} ]
	});
}




//关闭窗口
function closeForm() {
	$("#frmEdit").form('clear');
	$('#tabEdit').dialog('close');
}

function closeAddForm() {
	$("#newfrmEdit").form('clear');
	$('#newEdit').dialog('close');
}

//添加的函数
function addDataAnalysis() {

	// 清空原有的数据
	$('#newfrmEdit').form('clear');

	// 显示添加对话框
	showAddForm();
}

function showAddForm() {
	$("#newEdit").dialog({
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
				if ($('#newfrmEdit').form('validate')) {
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
function editDataAnalysis() {
	var dataAnalysis = $('#dataAnalysisbody').datagrid('getSelected');// 得到选中的一行数据
	// 如果没有选中记录
	if (dataAnalysis == null) {
		$.messager.alert('项目', '请先选中要编辑的项目', 'info');
		return;
	}
	$('#frmEdit').form('clear');

	// 填充数据 填充的是json数据
	$("#ID").val(dataAnalysis.ID);
	$("#PoolID").combobox('setValue',dataAnalysis.poolID);
	$("#t").datetimebox("setValue",(dataAnalysis.t).replace('T',' '));
	$("#InV").numberbox('setValue',dataAnalysis.inV);
	$("#OutV").numberbox('setValue',dataAnalysis.outV);
	$("#HLInV").numberbox('setValue',dataAnalysis.HLInV);
	$("#HXOutV").numberbox('setValue',dataAnalysis.HXOutV);
	$("#LCOutV").numberbox('setValue',dataAnalysis.LCOutV);
	$("#TCOutV").numberbox('setValue',dataAnalysis.TCOutV);
	$("#JJOutV").numberbox('setValue',dataAnalysis.JJOutV);
	$("#Storage").numberbox('setValue',dataAnalysis.storage);
	$("#PreH").numberbox('setValue',dataAnalysis.preH);
	// 显示编辑页面
	showEditForm();
}

//在增加和更新时点确定按钮的处理函数
function dealSave() {
	$('#dateTemp').val($("#t").datetimebox("getValue"));
	// 表单数据序列化成一个字符串用&拼接
	var params = $("#frmEdit").serialize();
	//alert('edit form' + $("#frmEdit").serialize());
	// 得到id的值，为空串表示添加
	if ($("#ID").val() == "") {
		$.post("addDataAnalysis.action", params, function(result) {
			if (result.operateSuccess){
				location.reload();
//				$('#dataAnalysisbody').datagrid('reload');// 重新加载
				$.messager.alert('添加', '添加成功', 'info');
			} else {
				$.messager.alert('添加', '添加失败', 'warning');
			}
		});
	} else {
		// 表示更新
		$.post("updateDataAnalysis.action", params, function(result) {
			if (result.operateSuccess) {
				location.reload();
//				$('#dataAnalysisbody').datagrid('reload');// 重新加载
				$.messager.alert('更新', '更新成功', 'info');
			} else {
				$.messager.alert('更新', '更新失败', 'warning');
			}
		});
	}
}

function dealAddSave() {
	// 表单数据序列化成一个字符串用&拼接
	var params = $("#newfrmEdit").serialize();
	//alert("prams is " + params);
	var paramsArray = params.split("split=&");
	//alert("paramsArray.length is " + paramsArray.length);
	//alert("pramsArray is " + paramsArray);
	var strLength;
	var tempStr;
	var newStr;
	for(var i = 1; i < paramsArray.length; ++i) {
		//alert("Into for loop!");
		strLength = paramsArray[i].length;
		tempStr = paramsArray[i].substring(42, 60);
		//alert("old tempStr" + tempStr);
		newtempStr = tempStr.substring(0, 10) + '+' + tempStr.substring(11, tempStr.length);
		//alert("new temStr" + newtempStr);
		newStr = paramsArray[i].substring(0, 9) + newtempStr + paramsArray[i].substring(9, 42)
					+ newtempStr + paramsArray[i].substring(60, strLength);
		paramsArray[i] = newStr;
		
	}
	//strTAddalert('Form表单' + params);
	//alert('Form表单Array' + paramsArray);
	var errorMessage = '';
	var flag = true;
	for(var i = 1; i < paramsArray.length; ++i) {
		//alert('Form表单Array' + i + "\n" + paramsArray[i]);
		// 得到id的值，为空串表示添加
		var re = new RegExp(/^dateTemp=\d{4}-\d{2}\-\d{2}\+\d{2}%3A\d{2}/);
		var test = re.test(paramsArray[i]);
		//alert(test);
		
		if(!test) {
			var errorMessageTemp = '';
			if(i == 1)
				errorMessageTemp = '错误！第' + i + '条记录时间和日期均不能为空！';
			else {
				errorMessageTemp += '<br />错误！第' + i + '条记录时间和日期均不能为空！';
			}
			errorMessage += errorMessageTemp;
			flag = false;
		}//test = false; 
		else {
			if ($("#IDAdd").val() == "") {
				//alert('Add POST test');
				$.post("addDataAnalysis.action", paramsArray[i], function(result) {
					//alert('test' + result.operateSuccess);
					if (result.operateSuccess){
						location.reload();
//						$('#dataAnalysisbody').datagrid('reload');// 重新加载
						$.messager.alert('添加', '添加成功', 'info');
					} else {
						$.messager.alert('添加', '添加失败', 'warning');
					}
				});
			}//添加if
			else {
				// 表示更新
				$.post("updateDataAnalysis.action", params, function(result) {
					if (result.operateSuccess) {
						location.reload();
//						$('#dataAnalysisbody').datagrid('reload');// 重新加载
						$.messager.alert('更新', '更新成功', 'info');
					} else {
						$.messager.alert('更新', '更新失败', 'warning');
					}
				});
			}//更新else
			//flag = true;
			
		}//test = trye
	}//for loop
	if(flag == false)
		$.messager.alert('错误', errorMessage, 'error');	
}


//删除项目
function deleteDataAnalysis() {
	var dataAnalysis = $('#dataAnalysisbody').datagrid('getSelected');// 得到选中的一行数据
	// 如果没有选中记录
	if (dataAnalysis == null) {
		$.messager.alert('删除', '请先选中要删除的项目', 'info');
		return;
	}
	$.messager.confirm('确认', '真的要删除选中的记录吗？', function(r) {
		if (r) {
			var url = "deleteDataAnalysis.action?dataAnalysis.ID=" + dataAnalysis.ID;
			// 试一下get方法（地址，回调函数）
			$.get(url, function(result) {
				if (result.operateSuccess) {
					location.reload();
//					$.messager.alert('删除', '选中的项目成功删除！', 'info');
					// 重新加载
					$("#dataAnalysisbody").datagrid('reload');
				} else {
					$.messager.alert('删除', '删除失败！', 'warning');
				}
			});
		}
	});
}

//查询全部
function listAllDataAnalysis(){
	$('#frmSearch').form('clear');
	dealSearch();
}

//条件查询
function searchDataAnalysis(){
	//$("#searchT").val(searchT);
	//$("#searchPoolID").val(searchPoolID);
	showSearchForm();
}

var treeURL; //params = 'searchT=&searchPoolID

//查询处理
function dealSearch() {
	var indexButton = $('#indexForm').serialize();
	var buttonID = indexButton.slice(-6);  //searchID = 'index3'

	var ImageTitleTemp;
	var newParams = '';

	if(searchMode == 0) {   //如果是从三个radio进行查询
		var params = $("#frmSearch").form('clear').serialize(); //params = 'searchT=&searchPoolID='
		switch(buttonID) {
		case 'index1':
			title = '1# 清水池水位计算表';
			ImageTitle = "1#清水池水位预测图 ";
			newParams = params + 'MTG_QingS_SC01';
			treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action?dataAnalysis.PoolID=MTG_QingS_SC01';
			break;
		case 'index2':
			title = '2#清水池水位计算表';
			ImageTitle = "2#清水池水位预测图 ";
			newParams = params + 'MTG_QingS_SC02';
			treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action?dataAnalysis.PoolID=MTG_QingS_SC02';
			break;
		case 'index3':
			title = '3#清水池水位计算表';
			ImageTitle = "3#清水池水位预测图 ";
			newParams = params + 'MTG_QingS_SC03';
			treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action?dataAnalysis.PoolID=MTG_QingS_SC03';
			break;
		default :
			title = '清水池水位计算表';
			ImageTitle = "清水池水位预测图 ";
			newParams = params;
			treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action';
		}
	} else if(searchMode == 1){  //如果是从查询窗口进入
		var params = $("#frmSearch").serialize(); //params = 'searchT=不确定是否为空&searchPoolID=不确定是否为空'
		//alert("poolID " + poolID);
		
		var reTime = new RegExp(/^searchT=\d{4}-\d{2}\-\d{2}/);
		var testTime = reTime.test(params);
		var reID = new RegExp(/searchPoolID=MTG_QingS_SC0\d{1}/);
		var testID = reID.test(params);
		
		if(!testTime && !testID) {  //日期空 ID空     searchT=&searchPoolID=
			switch(buttonID) {
				case 'index1':
					titleTemp = '1#清水池水位计算表';
					ImageTitleTemp = "1#清水池水位预测图 ";
					newParams = params + 'MTG_QingS_SC01';
					treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action?dataAnalysis.PoolID=MTG_QingS_SC01';
					break;
				case 'index2':
					titleTemp = '2#清水池水位计算表';
					ImageTitleTemp = "2#清水池水位预测图 ";
					newParams = params + 'MTG_QingS_SC02';
					treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action?dataAnalysis.PoolID=MTG_QingS_SC02';
					break;
				case 'index3':
					titleTemp = '3#清水池水位计算表';
					ImageTitleTemp = "3#清水池水位预测图 ";
					newParams = params + 'MTG_QingS_SC03';
					treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action?dataAnalysis.PoolID=MTG_QingS_SC03';
					break;
				default :
					titleTemp = '清水池水位计算表';
					ImageTitleTemp = "清水池水位预测图 ";
					newParams = params;
					treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action';
			}   //searchT=&searchPoolID=MTG_QingS_SC0X
			title = titleTemp;
			ImageTitle = ImageTitleTemp;
		}  //忽略日期，只显示水池，且树形菜单时间与水池数据对应
		
		if(!testTime && testID) {  //日期空 ID不空     searchT=&searchPoolID=MTG_QingS_SC0X
			var index = params.slice(-1);
			switch(index) {
				case '1':
					titleTemp = '1#清水池水位计算表';
					ImageTitleTemp = "1#清水池水位预测图 ";
					newParams = params;
					treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action?dataAnalysis.PoolID=MTG_QingS_SC01';
					$('input[name="chooseIndexButton"][value="index1"]').attr("checked", true);
					break;
				case '2':
					titleTemp = '2#清水池水位计算表';
					ImageTitleTemp = "2#清水池水位预测图 ";
					newParams = params;
					treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action?dataAnalysis.PoolID=MTG_QingS_SC02';
					$('input[name="chooseIndexButton"][value="index2"]').attr("checked", true);
					//alert($("input[name='chooseIndexButton'][checked]").val());
					break;
				case '3':
					titleTemp = '3#清水池水位计算表';
					ImageTitleTemp = "3#清水池水位预测图 ";
					newParams = params;
					treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action?dataAnalysis.PoolID=MTG_QingS_SC03';
					$('input[name="chooseIndexButton"][value="index3"]').attr("checked", true);
					break;
				default :
					titleTemp = '清水池水位计算表';
					ImageTitleTemp = "清水池水位预测图 ";
					newParams = params;
					treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action';
					$('input[name="chooseIndexButton"][value="index3"]').attr("checked", true);
			}//searchT=&searchPoolID=MTG_QingS_SC0X
			title = titleTemp;
			ImageTitle = ImageTitleTemp;
		}//忽略日期，只显示水池，且树形菜单时间与水池数据对应
		
		if(testTime && !testID) {  //日期不空 ID空     searchT=XXXX-XX-XX&searchPoolID=
			switch(buttonID) {
				case 'index1':
					titleTemp = '1#清水池水位计算表';
					ImageTitleTemp = "1#清水池水位预测图 ";
					newParams = params + 'MTG_QingS_SC01';
					treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action?dataAnalysis.PoolID=MTG_QingS_SC01';
					break;
				case 'index2':
					titleTemp = '2#清水池水位计算表';
					ImageTitleTemp = "2#清水池水位预测图 ";
					newParams = params + 'MTG_QingS_SC02';
					treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action?dataAnalysis.PoolID=MTG_QingS_SC02';
					break;
				case 'index3':
					titleTemp = '3#清水池水位计算表';
					ImageTitleTemp = "3#清水池水位预测图 ";
					newParams = params + 'MTG_QingS_SC03';
					treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action?dataAnalysis.PoolID=MTG_QingS_SC03';
					break;
				default :
					titleTemp = '清水池水位计算表';
					ImageTitleTemp = "清水池水位预测图 ";
					newParams = params;
					treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action';
			} //searchT=XXXX-XX-XX&searchPoolID=MTG_QingS_SC0X
			var strDate = ' ' + params.substring(8, 18);  // XXXX-XX-XX
			title = titleTemp + strDate;
			ImageTitle = ImageTitleTemp + strDate;
		}//图标显示日期，显示水池编号，且树形菜单时间与水池数据对应
		
		if(testTime && testID) {  //日期不空 ID不空     searchT=XXXX-XX-XX&searchPoolID=MTG_QingS_SC0X
			var index = params.slice(-1);
			switch(index) {
				case '1':
					titleTemp = '1#清水池水位计算表';
					ImageTitleTemp = "1#清水池水位预测图 ";
					newParams = params;
					treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action?dataAnalysis.PoolID=MTG_QingS_SC01';
					$('input[name="chooseIndexButton"][value="index1"]').attr("checked", true);
					break;
				case '2':
					titleTemp = '2#清水池水位计算表';
					ImageTitleTemp = "2#清水池水位预测图 ";
					newParams = params;
					treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action?dataAnalysis.PoolID=MTG_QingS_SC02';
					$('input[name="chooseIndexButton"][value="index2"]').attr("checked", true);
					break;
				case '3':
					titleTemp = '3#清水池水位计算表';
					ImageTitleTemp = "3#清水池水位预测图 ";
					newParams = params;
					treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action?dataAnalysis.PoolID=MTG_QingS_SC03';
					$('input[name="chooseIndexButton"][value="index3"]').attr("checked", true);
					break;
				default :
					titleTemp = '清水池水位计算表';
					ImageTitleTemp = "清水池水位预测图 ";
					newParams = params;
					treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action';
					$('input[name="chooseIndexButton"][value="index3"]').attr("checked", true);
			}//searchT=XXXX-XX-XX&searchPoolID=MTG_QingS_SC0X
			var strDate = ' ' + params.substring(8, 18);  // XXXX-XX-XX
			title = titleTemp + strDate;
			ImageTitle = ImageTitleTemp + strDate;
		}//图标显示日期，只显示水池，且树形菜单时间与水池数据对应
	} else if(searchMode == 2) {  //如果是从树形菜单进入  
		var params = $("#frmSearch").serialize();  //params = 'searchT=XXXX-XX-XX&searchPoolID=不关心有没有'
//		alert(params);
		strDate = params.substring(8, 18);  //'XXXX-XX-XX'
		switch(buttonID) {  //先查看现在radio的值为多少
			case 'index1':
				title = '1#清水池水位计算表' + '' + strDate;
				ImageTitle = "1#清水池水位预测图 " + ' ' + strDate;
				newParams = 'searchT=' + strDate + '&searchPoolID=MTG_QingS_SC01';
				//treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action?dataAnalysis.PoolID=MTG_QingS_SC01';
				break;
			case 'index2':
				title = '2#清水池水位计算表' + '' + strDate;
				ImageTitle = "2#清水池水位预测图 " + '' + strDate;
				newParams = 'searchT=' + strDate + '&searchPoolID=MTG_QingS_SC02';
				//treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action?dataAnalysis.PoolID=MTG_QingS_SC02';
				break;
			case 'index3':
				title = '3#清水池水位计算表' + '' + strDate;
				ImageTitle = "3#清水池水位预测图 " + '' + strDate;
				newParams = 'searchT=' + strDate + '&searchPoolID=MTG_QingS_SC03';
				//treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action?dataAnalysis.PoolID=MTG_QingS_SC03';
				break;
			default :
				title = '清水池水位计算表';
				ImageTitle = "清水池水位预测图 ";
				newParams = params;
				//treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action';
		}
	}
	//alert("searchMode = " + searchMode +
	//		"\nbuttonID = " + buttonID + 
	//		"\nnewParams = " + newParams);
	
	$.post("searchDataAnalysis.action", newParams, function(result) {
			if (result.total!=0) {
				//$('#dataAnalysisbody').datagrid('reload');// 重新加载
				tlist = result.tlist;
				listDataAnalysis(result);
				if(searchMode != 2) {
					listTreeNode(tlist);
				}
			} else {
				$.messager.alert('查询', '未查询到相关信息', 'warning');
			}
	});
	
	//alert("treeURL = " +  treeURL);
	
	/*
	if(searchMode != 2) {
		//tlist = [];
		$.getJSON(treeURL, function(json) {
			//去除重复项
			//alert("json<br />" + json);
			//alert("eval(json)<br />" + eval(json));
			var datalist = eval(json).rows;
			//alert("datalist<br />" + datalist);
			var tempPoolIDlist = new Array();
			for(var i=0;i<json.total;i++){
				var row = datalist[i];
				if(jQuery.inArray(row.poolID, tempPoolIDlist)<0){
					tempPoolIDlist.push(row.poolID);
					poolIDlist.push({poolID:row.poolID,text:formPoolID(row.poolID)});
				}
//				if(jQuery.inArray(row.t, tlist)<0){
//					tlist.push(row.t);
//				}
			}//for
			
//			listTreeNode(tlist.sort());
			listTreeNode(tlist);
		});
	}
	*/
	
	
}


//显示查询窗口
function showSearchForm() {
	$("#tabSearch").dialog({
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
	$("#frmSearch").form('clear');
	$('#tabSearch').dialog('close');
}

//var tlist = new Array();
var poolIDlist  = new Array();
//查询下拉框显示的数据




//var url = "${pageContext.request.contextPath}/searchDataAnalysis.action";


//水池编号转换
function formPoolID(value){
	var strs = new Array();
	var poolID;
	strs=value.split("_");//字符切割
	poolID = strs[2].replace(/SC/,'');
	return 	"清水池" + poolID + "#";
}


//根据对象key 对对象数组排序，使用 arr.sort(keystr('key',true)); false表示升序，ture表示降序 
function keysrt(key,desc) {
	return function(a,b){
		return desc ? ~~(a[key] < b[key]) : ~~(a[key] > b[key]);
	}
}

//预测水位分析图
var ImageTitle="清水池水位预测图" + strDate;
function prehImage(){
	var listArray=new Array();
	var poollist = new Array();
	var options;
	if (datalist.length>0){					
		for (var i=0; i<datalist.length;i++){
			var row = datalist[i]; 
			var flag_i = jQuery.inArray(row.poolID, poollist); //判断水池是否存在
			if(flag_i<0){  //不存在
				poollist.push(row.poolID);	//添加水池
				flag_i=poollist.length-1;
				listArray[flag_i]=[];							
			}//if flag_i
			listArray[flag_i].push([Date.UTC(row.t.substring(0, 4),
					row.t.substring(5, 7)-1, //highcharts 月份要减一，因为Date.UTC从0-11计数
					row.t.substring(8, 10),
					row.t.substring(11, 13)
			),row.preH]);	//填充数据，预测高度
		} //for
	} //if datalist.length
	//var data=listArray[0].sort();
	/**绘图**/
	options = {
			//Options regarding the chart area and plot area as well as general chart options.
			chart: {
				borderColor: '#95B8E7',	//边框颜色
		        selectionMarkerFill: 'rgba(0,0,0, 0.2)',
		        height: 650,
			},
			 credits: {//Highchart by default puts a credits label in the lower right corner of the chart. This can be changed using these options.
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
				buttons: {
	                contextButton: {
	                    text: '导出'
	                }
	            }
			},
			lang:{						
				printChart: '打印',
				downloadJPEG: '下载JPEG 图片',
                downloadPDF: '下载PDF文档',
                downloadPNG: '下载PNG 图片',
                downloadSVG: '下载SVG 矢量图',
                exportButtonTitle: '导出图片',
				noData: '没有查询到数据',	
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
	             }
	        },
	        navigator: {
	            handles: {
	                backgroundColor: '#66CCFF',
	                borderColor: '#6600FF'
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
	            	type: 'day',
	            	count: 1,
	            	text: '1天'
	            },{
	            	type: 'day',
	            	count: 3,
	            	text: '3天'
	            },{
	    	    	type: 'week',
	    	    	count: 1,
	    	    	text: '1周'
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
	            selected: 1
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
	        
	        
			title:{
				text: ImageTitle,
				style:{
					font: '18px',
					color: '#0E2D5F',
					fontWeight: 'bold',
					fontSize:'18px',
					fontFamily:'微软雅黑'
				}
			},
			//鼠标移动时显示的数据
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
				formatter: function() {
					var indexButton = $('#indexForm').serialize();
					var buttonID = indexButton.slice(-6);  //searchID = 'index3'
					var poolName;
					var s;
					switch(buttonID) {
					case 'index1':
						poolName = '清水池01#';
						break;
					case 'index2':
						poolName = '清水池02#';
						break;
					case 'index3':
						poolName = '清水池03#';
						break;
					default:
						poolName = '';
					}
					if(this.y <= 2.0) {
						s = Highcharts.dateFormat('%Y-%m-%d %H时', this.x) + 
							'<br />' + poolName + 
							'<br />预测水位: ' + 
							'<span style="color:orange;font-weight:bolder">' + this.y + '</span> 米';
					} else if(this.y >= 4.9) {
						s = Highcharts.dateFormat('%Y-%m-%d %H时', this.x) + 
							'<br />' + poolName + 
							'<br />预测水位: ' + 
							'<span style="color:red;font-weight:bolder">' + this.y + '</span> 米';
					} else {
						s = Highcharts.dateFormat('%Y-%m-%d %H时', this.x) + 
							'<br />' + poolName + 
							'<br />预测水位: ' + 
							'<span style="color:black;font-weight:bolder">' + this.y + '</span> 米';
					}
					return s;
				},
	        },
			xAxis: {
				//title:{
				//	text:" 日  期 "
				//},
//				categories: tlist   //指定x轴分组
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
			yAxis: [{	//第一个y轴坐标
				labels: {
	            	overflow: 'justify'
	            },
				min: 0,
			    max: 5,
			    startOnTick: true,
	            endOnTick: true,
	            minPadding: 0,
	            maxPadding: 0,
			    gridLineColor: 'silver',
			    opposite:false,
			    tickColor: 'green',
	            tickLength: 10,
	            tickWidth: 3,
	            tickPosition: 'inside',
			    showLastLabel: true,
			    title: {
			    	text: '预测水位(/m)'                  //指定y轴的标题
			    },
			    //添加标示线
			    plotLines:[{//第一条标示线
			    	color:'red',
			    	dashStyle:'ShortDash',     //默认值，这里定义为实线
			    	value:4.9,               //定义在那个值上显示标示线，这里是在y轴上刻度为3的值处垂直化一条线
			    	width:2,               //标示线的宽度，2px
			    	label:{
			    		text:'高预警线 4.9m',     //标签的内容
			    	},
			    	zIndex:100,
			    },{//第二条标示线
			    	color:'orange',           //线的颜色，定义为橙色
			    	dashStyle:'ShortDash',     //默认值，这里定义为实线
			    	value:2,               //定义在那个值上显示标示线，这里是在y轴上刻度为0.5的值处垂直化一条线
			    	width:2,               //标示线的宽度，2px
			    	label:{
			    		text:'低预警线 2m',     //标签的内容
			    	},
			    	zIndex:100,
			    }]
			},],
			        
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
		options.series[i] = new Object();
		options.series[i].data=listArray[i].sort(); //对listArray[i]进行排序，否则会造成时间轴上的图错乱
		options.series[i].name='预测水位';
		options.series[i].type="line";
	}
	options.series.sort(keysrt("name",false));
	//chart = new Highcharts.Chart(options);
	$('#imageContainer').highcharts('StockChart',options);
	
}//preH;

//左侧时间列表显示
var treeNodeList= [{id:1,name:"时间列表",text:"时间列表",parentId:0}];
function listTreeNode(tlist){
//	var yearlist = new Array();
//	var monthlist = new Array();
//	var daylist = new Array();
//	var j=1; 
//	for(var i=0;i<tlist.length;i++){
//		var year = tlist[i].substring(0,4);
//		var month = tlist[i].substring(0,7);
//		var day = tlist[i].substring(0,10);
//		var yearIndex=yearlist.indexOf(year);
//		var monthIndex=monthlist.indexOf(month);
//		var dayIndex=daylist.indexOf(day);
//		if(yearIndex<0){	//不存在该年份
//			j=j+1;	
//			yearlist.push(year);
//			treeNodeList.push({id:j,name:year+"年",text:year,parentId:1});	
//			j=j+1;
//			monthlist.push(month);
//			treeNodeList.push({id:j,name:month.substring(5,7)+"月",text:month,parentId:j-1});
//			j=j+1;
//			daylist.push(day);
//			treeNodeList.push({id:j,name:day.substring(8,10)+"日",text:day,parentId:j-1});		
//		}
//		else{
//			if(monthIndex<0) //不存在该月份
//			{	
//				j=j+1;
//				monthlist.push(month);
//				treeNodeList.push({id:j,name:month.substring(5,7)+"月",text:month,
//									parentId:findParentId(treeNodeList, year)});
//				j=j+1;
//				daylist.push(day);
//				treeNodeList.push({id:j,name:day.substring(8,10)+"日",
//								text:day,parentId:j-1});
//			}else{
//				if(dayIndex<0){
//					j=j+1;
//					daylist.push(day);
//					treeNodeList.push({id:j,name:day.substring(8,10)+"日",text:day,
//									parentId:findParentId(treeNodeList, month)});
//				}
//			}
//		}
//	}

	$('#timeTree').tree({
//		url: 'tree_data.json',
//		data: treeNodeList,
		data: tlist,
		animate:true,	//动画效果
		lines:true,
//		loadFilter: function(data){
//			return convert(data);
//		},
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
				//alert('test');
				$("#searchT").datebox("setValue",out);
				$("#searchPoolID").val();
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

//
//function findParentId(rows, text){
//	for(var i=0; i<rows.length; i++){
//		if (rows[i].text == text) return rows[i].id;
//	}
//	return -1;
//}
////显示树目录的数据
//function convert(rows){
//	//判断是否存在父节点
//	function exists(rows, parentId){
//		for(var i=0; i<rows.length; i++){
//			if (rows[i].id == parentId) return true;
//		}
//		return false;
//	}
//
//	var nodes = [];
//	// get the top level nodes
//	//遍历查找最高一层节点
//	for(var i=0; i<rows.length; i++){
//		var row = rows[i];
//		//如果不存在父节点，添加节点
//		if (!exists(rows, row.parentId)){
//			nodes.push({
//				id:row.id,
//				text:row.name,
//				state:'closed'
//			});
//		}
//	}
//
////	利用堆栈的结构
//	var toDo = []; //所有的父节点
//	for(var i=0; i<nodes.length; i++){
//		toDo.push(nodes[i]);
//	}
//	while(toDo.length){
//		//	shift从集合中把第一个元素删除，并返回这个元素的值
//		var node = toDo.shift();	// the parent node
//		// get the children nodes
//		//	获得所有父节点各自的子节点
//		for(var i=0; i<rows.length; i++){
//			var row = rows[i];
//			if (row.parentId == node.id){
//				var child = {id:row.id,text:row.name};
//				if (node.children){
//					node.children.push(child);
//				} else {
//					node.children = [child];
//				}
//				toDo.push(child);//添加子节点，以便进一步遍历子节点查看是否有子目录
//			}
//		}
//	}
//	return nodes;
//}


//导出到excel
function export2excel(){
	var downloadPath = "downloadTemp/DataAnalysis.xls";
	$.post("exportDataAnalysis.action", function(result) {
		if (result.operateSuccess){
			window.location.href=downloadPath;
//			$.messager.alert('导出', '导出成功,请在浏览器下载路径中查看', 'info');		
		} else {
			$.messager.alert('导出', '导出失败', 'warning');
		}
	});
}

//导入文件操作
function import2DB(){
	var params=$('#upload').val();
	if(''==params || null== params){
		$.messager.alert('导入', '请选择上传文件', 'warning');
	}
	else{
		$.ajaxFileUpload({
			url : "importCheckDataAnalysis.action",
//			url :'uploadDataAnalysis.action',
			fileElementId:'upload',
			dataType:'json',
			success: function(data, status){
				if (data.operateSuccess){ //没有冲突
					$.ajaxFileUpload({
						url : "importDataAnalysis.action",
						fileElementId:'upload',
						dataType:'json',
						success: function(result){
							$.messager.alert('导入', '导入成功', 'info');
							if (result.operateSuccess){	
								
								$('#dataAnalysisbody').datagrid('reload');// 重新加载									
							} else {
								$.messager.alert('导入', '导入失败<br><br>'+$('#errMsg').val(), 'warning');
							}
						},//success
						error:function(result){
							console.log("error 上传失败");
							$.messager.alert('导入', '导入失败<br><br>'+$('#errMsg').val(), 'warning');
						} //error
					});//ajaxFileUpload	
					location.reload();
				} else {		//有冲突
					$.messager.confirm("导入提示",'已存在相关日期的数据，是否继续覆盖导入？',function(r){
						if (r) { //上传文件
							$.ajaxFileUpload({
								url : "importDataAnalysis.action",
								fileElementId:'upload',
								dataType:'json',
								success: function(data, status){
									$.messager.alert('导入', '导入成功', 'info');
									if (data.operateSuccess){
										
										$('#dataAnalysisbody').datagrid('reload');// 重新加载/
										
										$('#import').text('导入');
										$('#tab_export').css('display','none');
									} else {
										$.messager.alert('导入', '导入失败<br><br>'+$('#errMsg').val(), 'warning');
									}
									location.reload();
								},//success
								error:function(data,status){
									console.log("error 上传失败");
									$.messager.alert('导入', '导入失败<br><br>'+$('#errMsg').val(), 'warning');
								} //error
							});//ajaxFileUpload
						}//if r
					}); //confirm	
				}
			},//success
			error:function(data, status){
				$.messager.alert('导入', '导入失败<br><br>请检查文件格式是否正确！', 'warning');
			}
		});
	}
	$('#fakeUpload').val('');
}