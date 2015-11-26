//JQuery的入口
$(function() {
	listPoolEvaluate();
});

var strDate = '';

$(document).ready(function() {
	$('#addButton').click(function(event) {
		event.preventDefault();
		//++addCount;
		var _len = $("#tab tr").length;
		//alert(_len);
		$('#tab').append(
			"<tr id='tr" + _len + "'>"
			+ "<td><input type='hidden' id='splitSign' name='split' style='width:1px;height:25px'/></td>"
			+ "<td><input type='hidden' id='IDAdd' name='poolEvaluate.ID' style='width:1px;height:25px' /></td>"
			+ "<td id='indexNum" + _len + "'>" + _len + "</td>"
			+ "<td><input name='poolEvaluate.t' id='tAdd' type='date' style='width:200px;height:25px'/></td>"
			+ "<td><select name='poolEvaluate.PoolID' id='PoolIDAdd' style='width:200px;height:25px'><option value='MTG_QingS_SC01' selected='selected'>MTG_QingS_SC01</option><option value='MTG_QingS_SC02'>MTG_QingS_SC02</option><option value='MTG_QingS_SC03'>MTG_QingS_SC03</option></select></td>"
			+ "<td><input style='width:100px;height:25px' id='PAC' name='poolEvaluate.PAC' data-options='min:0,precision:0,' /></td>"
			+ "<td><input style='width:100px;height:25px' id='FeCl3' name='poolEvaluate.FeCl3' data-options='min:0,precision:0' /></td>"
			+ "<td><input style='width:100px;height:25px' id='OpenDegree' name='poolEvaluate.OpenDegree' data-options='min:0,precision:0'/></td>"
			+ "<td><input style='width:100px;height:25px' id='RotationSpeed' name='poolEvaluate.RotationSpeed' data-options='min:0,precision:0'/></td>"
			+ "<td><input style='width:100px;height:25px' id='SV' name='poolEvaluate.SV' data-options='min:0,precision:0' /></td>"
			+ "<td><input style='width:100px;height:25px' id='WaterTemp' name='poolEvaluate.WaterTemp' data-options='min:0,precision:0'/></td>"
			+ "<td><input style='width:100px;height:25px' id='SmallMudFre' name='poolEvaluate.SmallMudFre' data-options='min:0,precision:0'/></td>"
			+ "<td><input style='width:100px;height:25px' id='BigMudFre' name='poolEvaluate.BigMudFre'  data-options='precision:0'/></td>"
			+ "<td><input style='width:100px;height:25px' id='NTU' name='poolEvaluate.NTU' data-options='precision:2'/></td>"
			+ "<td><input style='width:100px;height:25px' id='AlgaeContent' name='poolEvaluate.AlgaeContent' data-options='precision:2'/></td>"
			+ "<td><input style='width:100px;height:25px' id='OutNTU' name='poolEvaluate.OutNTU' data-options='precision:2'/></td>"
			+ "<td><input style='width:100px;height:25px' id='CL' name='poolEvaluate.CL' data-options='precision:2'/></td>"
			+ "<td id='delete" + _len + "'><a href='#' onclick='deltr(" + _len + ",event)'>删除</a></td>"
			+ "</tr>");
	});
});

var deltr = function(index, event) {
	event.preventDefault();
	var _len = $("#tab tr").length;
	$("tr[id='tr" + index + "']").remove();
	for(var i = index + 1; i < _len; ++i) {
		//alert("i = " + i + " _len = " + _len);
		$("tr[id='tr" + i + "']").replaceWith("<tr id='tr" + (i-1) + "'>"
				+ "<td><input type='hidden' id='splitSign' name='split' style='width:1px;height:25px'/></td>"
				+ "<td><input type='hidden' id='IDAdd' name='poolEvaluate.ID' style='width:1px;height:25px' /></td>"
				+ "<td id='indexNum" + (i-1) + "'>" + (i-1) + "</td>"
				+ "<td><input name='poolEvaluate.t' id='tAdd' type='date' style='width:200px;height:25px'/></td>"
				+ "<td><select name='poolEvaluate.PoolID' id='PoolIDAdd' style='width:200px;height:25px'><option value='MTG_QingS_SC01' selected='selected'>MTG_QingS_SC01</option><option value='MTG_QingS_SC02'>MTG_QingS_SC02</option><option value='MTG_QingS_SC03'>MTG_QingS_SC03</option></select></td>"
				+ "<td><input style='width:100px;height:25px' id='PAC' name='poolEvaluate.PAC' data-options='min:0,precision:0,' /></td>"
				+ "<td><input style='width:100px;height:25px' id='FeCl3' name='poolEvaluate.FeCl3' data-options='min:0,precision:0' /></td>"
				+ "<td><input style='width:100px;height:25px' id='OpenDegree' name='poolEvaluate.OpenDegree' data-options='min:0,precision:0'/></td>"
				+ "<td><input style='width:100px;height:25px' id='RotationSpeed' name='poolEvaluate.RotationSpeed' data-options='min:0,precision:0'/></td>"
				+ "<td><input style='width:100px;height:25px' id='SV' name='poolEvaluate.SV' data-options='min:0,precision:0' /></td>"
				+ "<td><input style='width:100px;height:25px' id='WaterTemp' name='poolEvaluate.WaterTemp' data-options='min:0,precision:0'/></td>"
				+ "<td><input style='width:100px;height:25px' id='SmallMudFre' name='poolEvaluate.SmallMudFre' data-options='min:0,precision:0'/></td>"
				+ "<td><input style='width:100px;height:25px' id='BigMudFre' name='poolEvaluate.BigMudFre'  data-options='precision:0'/></td>"
				+ "<td><input style='width:100px;height:25px' id='NTU' name='poolEvaluate.NTU' data-options='precision:2'/></td>"
				+ "<td><input style='width:100px;height:25px' id='AlgaeContent' name='poolEvaluate.AlgaeContent' data-options='precision:2'/></td>"
				+ "<td><input style='width:100px;height:25px' id='OutNTU' name='poolEvaluate.OutNTU' data-options='precision:2'/></td>"
				+ "<td><input style='width:100px;height:25px' id='CL' name='poolEvaluate.CL' data-options='precision:2'/></td>"
				+ "<td id='delete" + (i-1) + "'><a href='#' onclick='deltr(" + (i-1) + ",event)'>删除</a></td>"
				+ "</tr>");
	}
}


var tburl='searchPoolEvaluate.action'; 
var datalist = new Array();
var title= '机加池分析表';
//加载项目列表
function listPoolEvaluate() {
	$("#poolEvaluatebody").datagrid({
		title:title,
		width : "1050",
		height : "300",
		//iconCls : 'icon-help', // 表格左上角的图标样式
		url : tburl, // 访问服务器的地址，要求返回JSON对象
		rownumbers : true, // 在最前面显示行号
		fitColumns : true, // 自动适应列宽
		striped : true, // 隔行变色
		singleSelect : true, // 每次只选中一行
		loadMsg : '正在加载项目列表，请稍后...',
		idField : 'ID', // 主键属性
		remoteSort : false, // 从服务器端排序，默认true	
//		pagination : true, // 在底部显示分页工具栏
//		pageSize : 20, // 指定每页的大小，服务器要加上page属性和total属性
//		pageList : [ 10, 15, 20, 30], // 可以设置每页记录条数的列表，服务器要加上rows属性
//		loader: myLoader, //前端假分页
		onLoadSuccess: function(data){
			if(data.rows!=datalist){		
				datalist = eval(data).rows;
				drawImage(); //作图
			}
		},
		columns : [ [
		             {
		            	 field : 't',
		            	 title : '时间',
		            	 align : 'center',
		            	 width : 110,
		            	 formatter : function(value) {
		            		 return value.substring(0, 10);
		            	 },
		            	 sortable : true
		             },
		             {
		            	 field : 'poolID',
		            	 title : '机加池池编号',
		            	 align : 'center',
		            	 width : 125,
		            	 //可以排序，但服务器也完成相应的代码，要加入sort和order属性
		            	 sortable : true,
		            	 formatter:function(value){
		            		 return formPoolID(value);
		            	 }
		             }, 
		             {
		            	 field : 'PAC',
		            	 title : 'PAC投加量',
		            	 align : 'center',
		            	 width : 80,
//		            	 formatter : function(value) {
//		            		 return value*100+"%";
//		            	 },
		            	 sortable : true
		             },{
		            	 field : 'feCl3',
		            	 title : 'FeCl3投加量',
		            	 align : 'center',
		            	 width : 85,
//		            	 formatter : function(value) {
//		            		 return value*100+"%";
//		            	 },
		            	 sortable : true			
		             },
		             {
		            	 field : 'openDegree',
		            	 title : '开启度',
		            	 width : 70,
		            	 align : 'center',
		            	 formatter : function(value) {
		            		 return value+"%";
		            	 },
		            	 sortable : true
		             }, 

		             {
		            	 field : 'rotationSpeed',
		            	 title : '转速',
		            	 width : 60,
		            	 align : 'center',
		            	 sortable : true
		             },
		             {
		            	 field : 'SV',
		            	 title : '沉降比',
		            	 width : 70,
		            	 align : 'center',
		            	 /*formatter : function(value) {
		            		 return value+"%";
		            	 },*/
		            	 sortable : true
		             },
		             {
		            	 field : 'waterTemp',
		            	 title : '水温',
		            	 width : 60,
		            	 align : 'center',
		            	 formatter : function(value) {
//		            		 if (value <5){
//		            		 return '<span style="background-color:DeepSkyBlue;">'+value+'℃</span>';
//		            		 } else {
		            		 return value+"℃";
//		            		 }	
		            	 }
		             },
		             {
		            	 field : 'smallMudFre',
		            	 title : '小斗排泥时长',
		            	 width : 80,
		            	 align : 'center',
		            	 sortable : true
		             },
		             {
		            	 field : 'bigMudFre',
		            	 title : '大斗排泥时长',
		            	 width : 80,
		            	 align : 'center',
		            	 sortable : true
		             },
		             {
		            	 field : 'NTU',
		            	 title : '原水浊度',
		            	 width : 60,
		            	 align : 'center',
		            	 sortable : true
		             },
		             {
		            	 field : 'algaeContent',
		            	 title : '原水藻类含量',
		            	 width : 80,
		            	 align : 'center',
		            	 formatter : function(value) {
		            		 return value+"%";
		            	 },
		            	 sortable : true
		             },
		             {
		            	 field : 'outNTU',
		            	 title : '出水浊度',
		            	 width : 80,
		            	 align : 'center',
		            	 sortable : true
		            	 /*formatter : function(value) {
				if (value >0.8){
					return '<span style="background-color:LightCoral;">'+value+'</span>';
				} else {
					return '<span style="background-color:LightGreen;">'+value+'</span>';
					}	
			}*/
		             },
//		             {
//		             field : 'state',
//		             title : '状态',
//		             width : 80,
//		             align : 'center',
//		             formatter: function(value,rec){
//		             if(value==0){
//		             return '<span style="background-color:LightCoral;">不正常</span>';
//		             }else{
//		             return '<span style="background-color:LightGreen;">正常</span>';
//		             }
//		             }
//		             },
		             {
		            	 field : 'CL',
		            	 title : '预加氯量',
		            	 width : 80,
		            	 align : 'center',
		            	 sortable : true
		             }
		             ] ],

		             onLoadError: function () {
		            	 $.messager.alert("提示", "服务器忙，请稍后再试！", "warning");
		             },
		             onDblClickRow: function (rowIndex,rowData){
		            	 editPoolEvaluate();
		             },
		             //选择显示的列
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

//前端假的分页函数
function myLoader(param, success, error) {
	var that = $(this);
	var opts = that.datagrid("options");
	if (!opts.url) {
		return false;
	}

	var cache = that.data().datagrid.cache;
	if (!cache) {
		$.ajax({
			type: opts.method,
			url: opts.url,
			data: param,
			dataType: "json",
			success: function (data) {
				that.data().datagrid['cache'] = data;
				success(bulidData(data));
			},
			error: function () {
				error.apply(this, arguments);
			}
		});
	} else {
		success(bulidData(cache));
	}

	function bulidData(data) {
		var temp = $.extend({}, data);
		var tempRows = [];
		var start = (param.page - 1) * parseInt(param.rows);
		var end = start + parseInt(param.rows);
		var rows = data.rows;
		for (var i = start; i < end; i++) {
			if (rows[i]) {
				tempRows.push(rows[i]);
			} else {
				break;
			}
		}

		temp.rows = tempRows;
		return temp;
	}
}

//选择显示的项目
var cmenu;
function createColumnMenu(){
	cmenu = $('<div/>').appendTo('body');
	cmenu.menu({
		onClick: function(item){
			if (item.iconCls == 'icon-ok'){
				$('#poolEvaluatebody').datagrid('hideColumn', item.name);
				cmenu.menu('setIcon', {
					target: item.target,
					iconCls: 'icon-empty'
				});
			} else {
				$('#poolEvaluatebody').datagrid('showColumn', item.name);
				cmenu.menu('setIcon', {
					target: item.target,
					iconCls: 'icon-ok'
				});
			}
		}
	});
	var fields = $('#poolEvaluatebody').datagrid('getColumnFields');
	for(var i=0; i<fields.length; i++){
		var field = fields[i];
		var col = $('#poolEvaluatebody').datagrid('getColumnOption', field);
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
		title : '添加/编辑操作',
		iconCls : 'icon-save',
		closed:false,
		buttons : [ {
			text : '确认',
			handler : function() {
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
function addPoolEvaluate() {
	// 清空原有的数据
	$('#newfrmEdit').form('clear');
	// 显示添加对话框
	showAddForm();
	//$('#frmEdit').form('clear');
	//showEditForm();
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
function editPoolEvaluate() {
	var poolEvaluate = $('#poolEvaluatebody').datagrid('getSelected');// 得到选中的一行数据
	// 如果没有选中记录
	if (poolEvaluate == null) {
		$.messager.alert('项目', '请先选中要编辑的项目', 'info');
		return;
	}
	$('#frmEdit').form('clear');
	// 填充数据
	$("#ID").val(poolEvaluate.ID);
	$("#PoolID").val(poolEvaluate.poolID);
	$("#t").datebox("setValue",poolEvaluate.t);
	$("#OpenDegree").numberbox("setValue",poolEvaluate.openDegree);
	$("#RotationSpeed").numberbox("setValue",poolEvaluate.rotationSpeed);
	$("#SV").numberbox("setValue",poolEvaluate.SV);
	$("#SmallMudFre").numberbox("setValue",poolEvaluate.smallMudFre);
	$("#BigMudFre").numberbox("setValue",poolEvaluate.bigMudFre);
	$("#NTU").numberbox("setValue",poolEvaluate.NTU);
	$("#WaterTemp").numberbox("setValue",poolEvaluate.waterTemp);
	$("#AlgaeContent").numberbox("setValue",poolEvaluate.algaeContent);
	$("#FeCl3").numberbox("setValue",poolEvaluate.feCl3);
	$("#PAC").numberbox("setValue", poolEvaluate.PAC);
	$("#OutNTU").numberbox("setValue",poolEvaluate.outNTU);
//	$("#state").combobox( "setValue",poolEvaluate.state);
	$("#CL").numberbox("setValue",poolEvaluate.CL);
//	// 显示编辑页面
	showEditForm();

}

//在增加和更新时点确定按钮的处理函数
function dealSave() {
	// 表单数据序列化成一个字符串用&拼接
	var params = $("#frmEdit").serialize();
	alert("params is \n" + params);
	// 得到id的值，为空串表示添加
	if ($("#ID").val() == "") {
		$.post("addPoolEvaluate.action", params, function(result) {
			if (result.operateSuccess) {
				$("#poolEvaluatebody").data().datagrid.cache = null;
				$('#poolEvaluatebody').datagrid('reload');// 重新加载
				$.messager.alert('添加', '添加成功', 'info');
			} else {
				$.messager.alert('添加', '添加失败', 'warning');
			}
		});
	} else {
		// 表示更新
		$.post("updatePoolEvaluate.action", params, function(result) {
			if (result.operateSuccess) {
				$("#poolEvaluatebody").data().datagrid.cache = null;
				$('#poolEvaluatebody').datagrid('reload');// 重新加载
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
	alert("prams is \n" + params);
	var paramsArray = params.split("split=&");
	alert("paramsArray.length is \n" + paramsArray.length);
	alert("pramsArray is \n" + paramsArray);
	//var strLength;
	//var tempStr;
	//var newStr;
	/*
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
		
	}*/
	//strTAddalert('Form表单' + params);
	//alert('Form表单Array' + paramsArray);
	var errorMessage = '';
	var flag = true;
	for(var i = 1; i < paramsArray.length; ++i) {
		alert('Form表单Array' + i + "\n" + paramsArray[i]);
		// 得到id的值，为空串表示添加
		//var re = new RegExp(/^dateTemp=\d{4}-\d{2}\-\d{2}\+\d{2}%3A\d{2}/);
		//var test = re.test(paramsArray[i]);
		//alert(test);
		
		var re_ID = new RegExp(/poolEvaluate.PoolID=MTG_QingS_SC0\d/);
		var re_t = new RegExp(/poolEvaluate.t=\d{4}-\d{2}\-\d{2}/);
		alert("test 1 \n" + re_ID.test(paramsArray[i]));
		alert("test 2 \n" + re_t.test(paramsArray[i]));
		var test = re_t.test(paramsArray[i]) && re_ID.test(paramsArray[i]);
		
		if(!test) {
			var errorMessageTemp = '';
			if(i == 1)
				errorMessageTemp = '错误！第' + i + '条记录ID和日期有误！';
			else {
				errorMessageTemp += '<br />错误！第' + i + '条记录ID和日期有误！';
			}
			errorMessage += errorMessageTemp;
			flag = false;
		}//test = false; 
		else {
			if ($("#IDAdd").val() == "") {
				//alert('Add POST test');
				$.post("addPoolEvaluate.action", paramsArray[i], function(result) {
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
				$.post("updatePoolEvaluate.action", params, function(result) {
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
function deletePoolEvaluate() {
	var poolEvaluate = $('#poolEvaluatebody').datagrid('getSelected');// 得到选中的一行数据
	// 如果没有选中记录
	if (poolEvaluate == null) {
		$.messager.alert('删除', '请先选中要删除的项目', 'info');
		return;
	}
	$.messager.confirm('确认', '真的要删除选中的记录吗？', function(r) {
		if (r) {
			var url = "deletePoolEvaluate.action?poolEvaluate.ID=" + poolEvaluate.ID;
			// 试一下get方法（地址，回调函数）
			$.get(url, function(result) {
				if (result.operateSuccess) {
					$.messager.alert('删除', '选中的项目成功删除！', 'info');
					// 重新加载
					$("#poolEvaluatebody").data().datagrid.cache = null;
					$("#poolEvaluatebody").datagrid('reload');
				} else {
					$.messager.alert('删除', '删除失败！', 'warning');
				}
			});
		}
	});
}


function listAllPoolEvaluate(){
	$('#frmSearch').form('clear');
//	$('#searchPoolID').combobox('setValue','');
	dealSearch();
}

function searchPoolEvaluate(){
	$("#lowT").val(lowT);
	$("#highT").val(highT);
	$("#searchPoolID").val(searchPoolID);
	$('#lowAlgaeContent').numberbox("setValue",lowAlgaeContent);
	$('#highAlgaeContent').numberbox("setValue",highAlgaeContent);
	$('#lowNTU').numberbox("setValue",lowNTU);
	$('#highNTU').numberbox("setValue",highNTU);
	$('#lowOutNTU').numberbox("setValue",lowOutNTU);
	$('#highOutNTU').numberbox("setValue",highOutNTU);
	$('#lowSV').numberbox("setValue",lowSV);
	$('#highSV').numberbox("setValue",highSV);
	showSearchForm();
}


function dealSearch() {
	// 表单数据序列化成一个字符串用&拼接
	var params = $("#frmSearch").serialize();
	console.log(params);
	//alert(params);
	
	  
	var re = new RegExp(/^lowT=\d{4}-\d{2}\-\d{2}/);
	var test = re.test(params);
	if(test) {
		strDate = ' ' + params.substring(5, 15);
		title = "机加池分析表" + strDate;
		ImageTitle1 = "浊度分析图 " + strDate;
		ImageTitle2 = "加药量分析图 " + strDate;
	}
	else {
		title = "机加池分析表";
		ImageTitle1 = "浊度分析图 ";
		ImageTitle2 = "加药量分析图 ";
	} 
	 
	
	$.post("searchPoolEvaluate.action", params, function(result) {
		if (result.total!=0) {
			//$("#poolEvaluatebody").data().datagrid.cache = null;
			//$('#poolEvaluatebody').datagrid('reload');// 重新加载
//			$.messager.alert('查询', '查询成功', 'info');
			listPoolEvaluate();
		} else {
			$.messager.alert('查询', '查询失败,未查找到相关信息', 'warning');
		}
	});
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
				if ($('#frmSearch').form('validate')) {
					// 提交到服务器并写入数据库
					dealSearch();
					// 关闭窗口
					closeSearchForm();
				} else {
					$.messager.alert('验证', '项目信息有误或不完整', 'error');
				}
			}
		}, {
			text : '取消',
			handler : function() {
				closeSearchForm();
			}
		} ]
	});
}

//关闭窗口
function closeSearchForm() {
	$("#frmSearch").form('clear');
	$('#tabSearch').dialog('close');
}


var url = "listPoolEvaluate.action";
var poolIDlist  = new Array();
var alldata = new Array();
var tlist = new Array();
//查询下拉框显示的数据
$.getJSON(url, function(json) {
	//去除重复项
	alldata=eval(json).rows;
	var tempPoolIDlist = new Array();
	for(var i=0;i<json.total;i++){
		var row = alldata[i];
		if(jQuery.inArray(row.poolID, tempPoolIDlist)<0){
			tempPoolIDlist.push(row.poolID);
			poolIDlist.push({poolID:row.poolID,text:formPoolID(row.poolID)});
		}
		if(jQuery.inArray(row.t, tlist) < 0) {
			tlist.push(row.t);
		}
	}//for
	$('#searchPoolID').combobox({
		data : poolIDlist.sort(keysrt('poolID',false)),
		valueField:'poolID',
		textField:'text',
		onLoadSuccess: function () {
			$(this).combobox('setText', '');
		}			
	});
	listTreeNode(tlist.sort());
});

//水池编号转换
function formPoolID(value){
	var strs = new Array();
	var poolID=null;
	strs=value.split("_");//字符切割
	for(var i=0;i<strs.length;i++)
	{
		switch(strs[i]){
		case "MTG":
			poolID="门头沟";break;
		case "QingS":
			poolID=poolID+"清水池";break;
		case "QS":
			poolID=poolID+"取水泵房";break;
		case "JJ1":
			poolID=poolID+"机加池";break;
		default:
			poolID=poolID+strs[i].replace("SC","")+"#";
		}
	}
	return poolID;		
}


//根据对象key 对对象数组排序，使用 arr.sort(keystr('key',true)); false表示升序，ture表示降序 
function keysrt(key,desc) {
	return function(a,b){
		return desc ? ~~(a[key] < b[key]) : ~~(a[key] > b[key]);
	}
}


//导出到excel文件
function export2excel(){
//	var params = $("#exportPoolEvaluate").serialize();
//	var filename = $('#downloadFilename').val() ;
//	var downloadPath;
//	if(null==filename || ""==filename){
//	downloadPath = "downloadTemp/PoolEvaluate.xls";
//	}else{
//	downloadPath = "downloadTemp/"+filename+".xls";
//	}
//	console.log(downloadPath);
//	$.post("exportPoolEvaluate.action", params, function(result) {
//	if (result.operateSuccess){
//	window.location.href=downloadPath;
////	$.messager.alert('导出', '导出成功', 'info');		
//	} else {
//	$.messager.alert('导出', '导出失败', 'warning');
//	}
//	});

	var downloadPath = "downloadTemp/PoolEvaluate.xls";
	$.post("exportPoolEvaluate.action", function(result) {
		if (result.operateSuccess){
			window.location.href=downloadPath;
//			$.messager.alert('导出', '导出成功', 'info');		
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
	else
	{
		$.ajaxFileUpload({
			url : "importCheckPoolEvaluate.action",
			fileElementId:'upload',
			dataType:'json',
			success: function(data, status){
				if (data.operateSuccess){
					$.ajaxFileUpload({
						url : "importPoolEvaluate.action",
						fileElementId:'upload',
						dataType:'json',
						success: function(result){
							if (result.operateSuccess){	
								$("#poolEvaluatebody").data().datagrid.cache = null;
								$('#poolEvaluatebody').datagrid('reload');// 重新加载									
								$.messager.alert('导入', '导入成功', 'info');	

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
				} 
				else {		
					$.messager.confirm("导入提示",'已存在相关日期的数据，是否继续覆盖导入？',function(r){
						if (r) { //上传文件
							$.ajaxFileUpload({
								url : "importPoolEvaluate.action",
								fileElementId:'upload',
								dataType:'json',
								success: function(data, status){
									if (data.operateSuccess){
										$("#poolEvaluatebody").data().datagrid.cache = null;
										$('#poolEvaluatebody').datagrid('reload');// 重新加载
										$.messager.alert('导入', '导入成功', 'info');
										setTimeout(location.reload(),10000);
									} else {
										$.messager.alert('导入', '导入失败<br><br>'+$('#errMsg').val(), 'warning');
									}
									location.reload();
								},//success
								error:function(data,status){
									console.log("error 上传失败");
									$.messager.alert('导入', '导入失败<br><br>'+$('#errMsg').val(), 'warning');
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

var ImageTitle1="浊度分析图" + strDate;
var ImageTitle2="加药量分析图" + strDate;
function drawImage(){
	//加药量分析图
	var PACArray=new Array();
	var FeCl3Array=new Array();
	var NTUArray=new Array();
	var OutNTUArray=new Array();
	var poollist = new Array();
	var chart1;
	var chart2;
	var options1;  //浊度分析图
	var options2;  //加药量分析图
	if (datalist.length>0){					
		for (var i=0; i<datalist.length;i++){
			var row = datalist[i]; 
			var flag_i = jQuery.inArray(row.poolID, poollist); //判断水池是否存在
			if(flag_i<0){  //不存在
				poollist.push(row.poolID);	//添加水池
				flag_i=poollist.length-1;
				PACArray[flag_i]=[];	
				FeCl3Array[flag_i]=[];	
				NTUArray[flag_i]=[];	
				OutNTUArray[flag_i]=[];
			}//if flag_i
			PACArray[flag_i].push([Date.UTC(row.t.substring(0, 4),
					row.t.substring(5, 7)-1, //highcharts 月份要减一，因为Date.UTC从0-11计数
					row.t.substring(8, 10),
					row.t.substring(11, 13)
			),row.PAC]);	//填充数据，PAC投加量
			FeCl3Array[flag_i].push([Date.UTC(row.t.substring(0, 4),
					row.t.substring(5, 7)-1, //highcharts 月份要减一，因为Date.UTC从0-11计数
					row.t.substring(8, 10),
					row.t.substring(11, 13)
			),row.feCl3]);	//填充数据，FeCl3投加量	
			NTUArray[flag_i].push([Date.UTC(row.t.substring(0, 4),
					row.t.substring(5, 7)-1, //highcharts 月份要减一，因为Date.UTC从0-11计数
					row.t.substring(8, 10),
					row.t.substring(11, 13)
			),row.NTU]);	//填充数据，原水浊度
			OutNTUArray[flag_i].push([Date.UTC(row.t.substring(0, 4),
					row.t.substring(5, 7)-1, //highcharts 月份要减一，因为Date.UTC从0-11计数
					row.t.substring(8, 10),
					row.t.substring(11, 13)
			),row.outNTU]);	//填充数据，出水浊度
		} //for
	} //if datalist.length
	/**绘图**/
	options1 = {
		chart: {
			borderColor: '#FFFFFF',	//边框颜色
	        selectionMarkerFill: 'rgba(0,0,0, 0.2)',
	        height: 660,
	        width:1050,
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
        	enable:true,
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
    	    	type: 'month',
    	    	count: 1,
    	    	text: '1月'
    			}, {
    			type: 'month',
    			count: 3,
    			text: '3月'
    			}, {
    			type: 'month',
    			count: 6,
    			text: '半年'
    			}, {
    			type: 'ytd',
    			text: '今年'
    			}, {
    			type: 'year',
    			count: 1,
    			text: '1年'
    			}, {
    				type: 'all',
    				text: '全部'
    			}],
            inputBoxBorderColor: 'gray',
            inputBoxWidth: 100,
            inputBoxHeight: 18,
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
		// 按钮样式
	    title:{
	    	text: ImageTitle1,
			style:{
				font: '18px',
				color: '#0E2D5F',
				fontWeight: 'bold',
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
        },
		xAxis: {
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
			min: 0,
		    max: 12,
		    startOnTick: true,
            endOnTick: true,
            minPadding: 0,
            maxPadding: 0,
		    gridLineColor: 'silver',
		    opposite:false,
		    showLastLabel: true,
		    tickColor: 'green',
            tickLength: 10,
            tickWidth: 3,
            tickPosition: 'inside',
			title: {
				text: '来水浊度'                  //指定y轴的标题
			},
		},{	//第二个Y坐标
			min: 0,
		    max: 6,
		    startOnTick: true,
            endOnTick: true,
            minPadding: 0,
            maxPadding: 0,
		    gridLineColor: 'silver',
		    showLastLabel: true,
		    tickColor: 'green',
            tickLength: 10,
            tickWidth: 3,
            tickPosition: 'inside',
			title: {
				text: '出水浊度'                  //指定y轴的标题
			},
		},
		],
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
	};//options1
	
	options2 = {
		chart: {
			borderColor: '#FFFFFF',	//边框颜色
		    selectionMarkerFill: 'rgba(0,0,0, 0.2)',
		    height: 660,
		    width:1050,
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
	    }
	},
	navigator: {
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
	    	type: 'month',
	    	count: 1,
	    	text: '1月'
			}, {
			type: 'month',
			count: 3,
			text: '3月'
			}, {
			type: 'month',
			count: 6,
			text: '半年'
			}, {
			type: 'ytd',
			text: '今年'
			}, {
			type: 'year',
			count: 1,
			text: '1年'
			}, {
				type: 'all',
				text: '全部'
			}],
		inputBoxBorderColor: 'gray',
		inputBoxWidth: 100,
		inputBoxHeight: 18,
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
			// 按钮样式
		    title:{
		    	text: ImageTitle2,
				style:{
					font: '18px',
					color: '#0E2D5F',
					fontWeight: 'bold',
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
	        },
			xAxis: {
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
		min: 0,
	    max: 1,
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
        tickPositions: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
		title: {
			text: 'PAC投加量'                  //指定y轴的标题
		},
			        	//lebels:{
			        	//	format: '{value*100}%'
			        	//},
			        	//添加标示线
			        
		},{	//第二个Y坐标
			min: 0,
		    max: 1,
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
            tickPositions: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
		    title: {
			        		text: 'FeCl3投加量'                  //指定y轴的标题
			},

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
	};//options2
	
	options1.series = new Array();
	options2.series = new Array();
	for(var i=0;i<poollist.length;i++)
	{	
		//NTU
		options1.series[i]= new Object();
		options1.series[i].data=(NTUArray[i].sort()); //对NTUArray[i]进行排序，否则会造成时间轴上的图错乱
		options1.series[i].name='原水浊度<br> '+formPoolID(poollist[i]);
		options1.series[i].type="line";
		options1.series[i].yAxis=0;

		//OutNTU
		options1.series[i+poollist.length] = new Object();
		options1.series[i+poollist.length].data=OutNTUArray[i].sort(); //对OutNTUArray[i]进行排序，否则会造成时间轴上的图错乱
		options1.series[i+poollist.length].name='出水浊度<br> '+formPoolID(poollist[i]);
		options1.series[i+poollist.length].type="line";
		options1.series[i+poollist.length].yAxis=1;
		
		//PAC
		options2.series[i]= new Object();
		options2.series[i].data=(PACArray[i].sort()); //对FeCl3Array[i]进行排序，否则会造成时间轴上的图错乱
		options2.series[i].name='PAC投加量<br> '+formPoolID(poollist[i]);
		options2.series[i].type="line";
		options2.series[i].yAxis=0;

		//FeCl3
		options2.series[i+poollist.length] = new Object();
		options2.series[i+poollist.length].data=FeCl3Array[i].sort(); //对FeCl3Array[i]进行排序，否则会造成时间轴上的图错乱
		options2.series[i+poollist.length].name='FeCl3投加量<br> '+formPoolID(poollist[i]);
		options2.series[i+poollist.length].type="line";
		options2.series[i+poollist.length].yAxis=1;
	}
	options1.series.sort(keysrt("name",false));
	options2.series.sort(keysrt("name",false));
	//chart1 = new Highcharts.Chart(options1);
	//chart2 = new Highcharts.Chart(options2);
	$('#imageContainer1').highcharts('StockChart',options1);
	$('#imageContainer2').highcharts('StockChart',options2);
}//preH;

var treeNodeList= [{id:1,name:"时间列表",text:"时间列表",parentId:0}];
function listTreeNode(tlist){
	var yearlist = new Array();
	var monthlist = new Array();
	var daylist = new Array();
	var j=1; 
	for(var i=0;i<tlist.length;i++){
		var year = tlist[i].substring(0,4);
		var month = tlist[i].substring(0,7);
		var day = tlist[i].substring(0,10);
		var yearIndex=yearlist.indexOf(year);
		var monthIndex=monthlist.indexOf(month);
		var dayIndex=daylist.indexOf(day);
		if(yearIndex<0){	//不存在该年份
			j=j+1;	
			yearlist.push(year);
			treeNodeList.push({id:j,name:year+"年",text:year,parentId:1});	
			j=j+1;
			monthlist.push(month);
			treeNodeList.push({id:j,name:month.substring(5,7)+"月",text:month,parentId:j-1});
			j=j+1;
			daylist.push(day);
			treeNodeList.push({id:j,name:day.substring(8,10)+"日",text:day,parentId:j-1});		
		}
		else{
			if(monthIndex<0) //不存在该月份
			{	
				j=j+1;
				monthlist.push(month);
				treeNodeList.push({id:j,name:month.substring(5,7)+"月",text:month,
									parentId:findParentId(treeNodeList, year)});
				j=j+1;
				daylist.push(day);
				treeNodeList.push({id:j,name:day.substring(8,10)+"日",
								text:day,parentId:j-1});
			}else{
				if(dayIndex<0){
					j=j+1;
					daylist.push(day);
					treeNodeList.push({id:j,name:day.substring(8,10)+"日",text:day,
									parentId:findParentId(treeNodeList, month)});
				}
			}
		}
	}

	$('#timeTree').tree({
//		url: 'tree_data.json',
		data: treeNodeList,
		animate:true,	//动画效果
		lines:true,
		loadFilter: function(data){
			return convert(data);
		},
		onClick:function(node){
			var pnode=$('#timeTree').tree('getParent',node.target);
			var out=node.text;
			while(pnode.text!="时间列表"){
				out=pnode.text+out;
				pnode=$('#timeTree').tree('getParent',pnode.target);	
			}
			if($('#timeTree').tree('isLeaf',node.target)){	//是根节点
				out=out.replace("年",'-'); out=out.replace("月",'-'); out=out.replace("日",'');
				$("#lowT").datebox("setValue",out);
				$("#highT").datebox("setValue",out);
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


function findParentId(rows, text){
	for(var i=0; i<rows.length; i++){
		if (rows[i].text == text) return rows[i].id;
	}
	return -1;
}
//显示树目录的数据
function convert(rows){
	//判断是否存在父节点
	function exists(rows, parentId){
		for(var i=0; i<rows.length; i++){
			if (rows[i].id == parentId) return true;
		}
		return false;
	}

	var nodes = [];
	// get the top level nodes
	//遍历查找最高一层节点
	for(var i=0; i<rows.length; i++){
		var row = rows[i];
		//如果不存在父节点，添加节点
		if (!exists(rows, row.parentId)){
			nodes.push({
				id:row.id,
				text:row.name
			});
		}
	}

//	利用堆栈的结构
	var toDo = []; //所有的父节点
	for(var i=0; i<nodes.length; i++){
		toDo.push(nodes[i]);
	}
	while(toDo.length){
		//	shift从集合中把第一个元素删除，并返回这个元素的值
		var node = toDo.shift();	// the parent node
		// get the children nodes
		//	获得所有父节点各自的子节点
		for(var i=0; i<rows.length; i++){
			var row = rows[i];
			if (row.parentId == node.id){
				var child = {id:row.id,text:row.name};
				if (node.children){
					node.children.push(child);
				} else {
					node.children = [child];
				}
				toDo.push(child);//添加子节点，以便进一步遍历子节点查看是否有子目录
			}
		}
	}
	return nodes;
}

