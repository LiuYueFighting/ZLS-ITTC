//JQuery的入口
$(function() {
	listPoolEvaluate();
});
var tburl='searchPoolEvaluate.action'; 

function listAllPoolEvaluate(){
	$('#frmSearch').form('clear');
//	$('#searchState').combobox('setValue','-1');
	$('#searchPoolID').combobox('setValue','');
//	$('#lowAlgaeContent').val('0');
//	$('#highAlgaeContent').val('100');
	dealSearch();
}
// 加载项目列表
function listPoolEvaluate() {
	$("#poolEvaluatebody").datagrid({
		title:'机加池分析表',
		width : "1060",
		height : "840",
		//iconCls : 'icon-help', // 表格左上角的图标样式
		url : tburl, // 访问服务器的地址，要求返回JSON对象
		rownumbers : true, // 在最前面显示行号
		fitColumns : true, // 自动适应列宽
		pagination : true, // 在底部显示分页工具栏
		striped : true, // 隔行变色
		singleSelect : true, // 每次只选中一行
		loadMsg : '加载项目列表ing……',
		pageSize : 15, // 指定每页的大小，服务器要加上page属性和total属性
		remoteSort : false, // 从服务器端排序，默认true
		pageList : [ 10, 15, 20, 30], // 可以设置每页记录条数的列表，服务器要加上rows属性
		idField : 'ID', // 主键属性
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
			formatter : function(value) {
				return value+"%";
			},
			sortable : true
		},{
			field : 'feCl3',
			title : 'FeCl3投加量',
			align : 'center',
			width : 85,
			formatter : function(value) {
					return value+"%";
			},
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
			formatter : function(value) {
				return value+"%";
			},
			sortable : true
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
//		{
//			field : 'waterTemp',
//			title : '水温',
//			width : 60,
//			align : 'center',
//			formatter : function(value) {
////				if (value <5){
////					return '<span style="background-color:DeepSkyBlue;">'+value+'℃</span>';
////				} else {
//					return value+"℃";
////				}	
//			}
//		},
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
//		{
//			field : 'state',
//			title : '状态',
//			width : 80,
//			align : 'center',
//			formatter: function(value,rec){
//				if(value==0){
//					return '<span style="background-color:LightCoral;">不正常</span>';
//				}else{
//					return '<span style="background-color:LightGreen;">正常</span>';
//				}
//			}
//		},
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
//$('#poolEvaluatebody').datagrid('hideColumn', 'openDegree');
//$('#poolEvaluatebody').datagrid('hideColumn', '状态');
//$('#poolEvaluatebody').datagrid('hideColumn', 'smallMudFre');
// 显示编辑窗口
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

// 关闭窗口
function closeForm() {
	$("#frmEdit").form('clear');
	$('#tabEdit').dialog('close');
}

// 添加的函数
function addPoolEvaluate() {
	// 清空原有的数据
	$('#frmEdit').form('clear');
	// 显示添加对话框
	showEditForm();
}

// 编辑按钮的操作
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
//	$("#WaterTemp").numberbox("setValue",poolEvaluate.waterTemp);
	$("#AlgaeContent").numberbox("setValue",poolEvaluate.algaeContent);
	$("#FeCl3").numberbox("setValue",poolEvaluate.feCl3);
	$("#PAC").numberbox("setValue", poolEvaluate.PAC);
	$("#OutNTU").numberbox("setValue",poolEvaluate.outNTU);
//	$("#state").combobox( "setValue",poolEvaluate.state);
	$("#CL").numberbox("setValue",poolEvaluate.CL);
//	// 显示编辑页面
	showEditForm();
	
}

// 在增加和更新时点确定按钮的处理函数
function dealSave() {
	// 表单数据序列化成一个字符串用&拼接
	var params = $("#frmEdit").serialize();
	// 得到id的值，为空串表示添加
	if ($("#ID").val() == "") {
		$.post("addPoolEvaluate.action", params, function(result) {
			if (result.operateSuccess) {
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
				$('#poolEvaluatebody').datagrid('reload');// 重新加载
				$.messager.alert('更新', '更新成功', 'info');
			} else {
				$.messager.alert('更新', '更新失败', 'warning');
			}
		});
	}
}

// 删除项目
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
					$("#poolEvaluatebody").datagrid('reload');
				} else {
					$.messager.alert('删除', '删除失败！', 'warning');
				}
			});
		}
	});
}
 
function searchPoolEvaluate(){
	$("#searchT").val(searchT);
	$("#searchPoolID").val(searchPoolID);
//	$("#searchState").val(searchState);
	$('#lowAlgaeContent').numberbox("setValue",lowAlgaeContent);
	$('#highAlgaeContent').numberbox("setValue",highAlgaeContent);
	$('#lowNTU').numberbox("setValue",lowNTU);
	$('#highNTU').numberbox("setValue",highNTU);
	$('#lowOutNTU').numberbox("setValue",lowOutNTU);
	$('#highOutNTU').numberbox("setValue",highOutNTU);
	showSearchForm();
}

//查询处理
function dealSearch() {
	// 表单数据序列化成一个字符串用&拼接
	var params = $("#frmSearch").serialize();
	console.log(params);
	$.post("searchPoolEvaluate.action", params, function(result) {
		if (result.total!=0) {
			
			$('#poolEvaluatebody').datagrid('reload');// 重新加载
		
//			$.messager.alert('查询', '查询成功', 'info');
		} else {
			$.messager.alert('查询', '查询失败,未查找到相关信息', 'warning');
		}
	});
	
//	if ($("#searchT").datebox("getValue")!= null) {
//		$.post("searchPoolEvaluate.action", params, function(result) {
//			if (result.total!=0) {
//				
//				$('#poolEvaluatebody').datagrid('reload');// 重新加载
//			
////				$.messager.alert('查询', '查询成功', 'info');
//			} else {
//				$.messager.alert('查询', '查询失败,未查找到相关信息', 'warning');
//			}
//		});
//	} else {
//	
//		$.messager.alert('查询', '请选择。。。', 'warning');
//	}
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


var url = "${pageContext.request.contextPath}/listPoolEvaluate.action";
var poolIDlist  = new Array();
//查询下拉框显示的数据
$.getJSON(url, function(json) {
	//去除重复项
	var datalist = eval(json).rows;
	var tempPoolIDlist = new Array();
	for(var i=0;i<json.total;i++){
		var row = datalist[i];
		if(jQuery.inArray(row.poolID, tempPoolIDlist)<0){
			tempPoolIDlist.push(row.poolID);
			poolIDlist.push({poolID:row.poolID,text:formPoolID(row.poolID)});
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



function export2excel(){
	var params = $("#exportPoolEvaluate").serialize();
	var filename = $('#downloadFilename').val() ;
	var downloadPath;
	if(null==filename || ""==filename){
		downloadPath = "downloadTemp/PoolEvaluate.xls";
	}else{
		downloadPath = "downloadTemp/"+filename+".xls";
	}
	console.log(downloadPath);
	$.post("exportPoolEvaluate.action", params, function(result) {
		if (result.operateSuccess){
			window.location.href=downloadPath;
//			$.messager.alert('导出', '导出成功', 'info');		
		} else {
			$.messager.alert('导出', '导出失败', 'warning');
		}
	});
}

function import2DB(){
	var params=$('#upload').val();
	
	$.ajaxFileUpload({
		url : "importPoolEvaluate.action",
		fileElementId:'upload',
		dataType:'json',
		success: function(data, status){
			if (data.operateSuccess){
					console.log("上传成功");
					$('#poolEvaluatebody').datagrid('reload');// 重新加载
					$.messager.alert('导入', '导入成功', 'info');
				} else {
					$.messager.alert('导入', '导入失败', 'warning');
				} 
		},
		error:function(data, status){
			console.log("上传失败");
			$('#poolEvaluatebody').datagrid('reload');// 重新加载
			$.messager.alert('导入', '导入失败', 'warning');
		}
		});
}
