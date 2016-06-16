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
			+ "<td style='width:1px;height:26px'><input type='hidden' id='IDAdd' name='moChiAnalysis.ID' style='width:1px;height:25px' /></td>"
			+ "<td id='indexNum" + _len + "'style='text-align:center; width:40px;height:26px'>" + _len + "</td>"
			+ "<td style='width:152px;height:26px'><input name='moChiAnalysis.t' id='tAdd' type='datetime-local' style='width:150px;height:25px'/></td>"
			+ "<td style='width:102px;height:26px'><select name='moChiAnalysis.PoolID' id='PoolIDAdd' style='width:100px;height:25px'>"
						+"<option value='MTG_MoChi_SC01' selected='selected'>1#膜池#</option><option value='MTG_MoChi_SC02'>2#膜池#</option><option value='MTG_MoChi_SC03'>3#膜池#</option>" 
						+"<option value='MTG_MoChi_SC04'>4#膜池#</option><option value='MTG_MoChi_SC05'>5#膜池#</option><option value='MTG_MoChi_SC06'>6#膜池</option></select></td>"
			+ "<td style='width:102px;height:26px'><input style='width:100px;height:25px' id='InPress' name='moChiAnalysis.InPress' data-options='min:0,precision:0,' /></td>"
			+ "<td style='width:102px;height:26px'><input style='width:100px;height:25px' id='OutPress' name='moChiAnalysis.OutPress' data-options='min:0,precision:0' /></td>"
			+ "<td style='width:102px;height:26px'><input style='width:100px;height:25px' id='DiffPress' name='moChiAnalysis.DiffPress' data-options='min:0,precision:0'/></td>"
			+ "<td style='width:102px;height:26px'><input style='width:100px;height:25px' id='InFlow' name='moChiAnalysis.InFlow' data-options='min:0,precision:0'/></td>"
			+ "<td style='width:102px;height:26px'><input style='width:100px;height:25px' id='InNTU' name='moChiAnalysis.InNTU' data-options='min:0,precision:0'/></td>"
			+ "<td style='width:102px;height:26px'><input style='width:100px;height:25px' id='OutNTU' name='moChiAnalysis.OutNTU' data-options='min:0,precision:0'/></td>"
			+ "<td style='width:102px;height:26px'><input style='width:100px;height:25px' id='InAlga' name='moChiAnalysis.InAlga' data-options='min:0,precision:0'/></td>"
			+ "<td style='width:102px;height:26px'><input style='width:100px;height:25px' id='OutAlga' name='moChiAnalysis.OutAlga' data-options='min:0,precision:0'/></td>"
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
		}
		
	});
	$('#add').click(function() {
		hideImportPanel();
		addMoChiAnalysis();
	});
	$('#edit').click(function() {
		hideImportPanel();
		editMoChiAnalysis();
	});
	$('#delete').click(function() {
		hideImportPanel();
		deleteMoChiAnalysis();
	});
	$('#search').click(function() {
		hideImportPanel();
		searchMode = 1;
		searchMoChiAnalysis();
	});
	$('#export').click(function() {
		hideImportPanel();
//		export2excel();
		showSearchforExportForm();
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
		$("tr[id='tr" + i + "']").replaceWith("<tr id='tr" + (i-1) + "'>"
				+ "<td style='width:1px;height:26px'><input type='hidden' id='splitSign' name='split' style='width:1px;height:25px'/></td>"
				+ "<td style='width:1px;height:26px'><input type='hidden' id='dateTempAdd' name='dateTemp' style='width:1px;height:25px' /></td>"
				+ "<td style='width:1px;height:26px'><input type='hidden' id='IDAdd' name='moChiAnalysis.ID' style='width:1px;height:25px' /></td>"
				+ "<td id='indexNum" + (i-1) + "'style='text-align:center; width:40px;height:26px'>" + (i-1) + "</td>"
				+ "<td style='width:152px;height:26px'><input name='moChiAnalysis.t' id='tAdd' type='datetime-local' style='width:150px;height:25px'/></td>"
				+ "<td style='width:102px;height:26px'><select name='moChiAnalysis.PoolID' id='PoolIDAdd' style='width:100px;height:25px'>" +
						"<option value='MTG_MoChi_SC01' selected='selected'>1#膜池</option><option value='MTG_MoChi_SC02'>2#膜池</option><option value='MTG_MoChi_SC03'>3#膜池</option>" +
						"<option value='MTG_MoChi_SC04'>4#膜池</option><option value='MTG_MoChi_SC05'>5#膜池</option><option value='MTG_MoChi_SC06'>6#膜池</option></select></td>"
				+ "<td style='width:72px;height:26px'><input style='width:70px;height:25px' id='InPress' name='moChiAnalysis.InPress' data-options='min:0,precision:0,' /></td>"
				+ "<td style='width:62px;height:26px'><input style='width:60px;height:25px' id='OutPress' name='moChiAnalysis.OutPress' data-options='min:0,precision:0' /></td>"
				+ "<td style='width:102px;height:26px'><input style='width:100px;height:25px' id='DiffPress' name='moChiAnalysis.DiffPress' data-options='min:0,precision:0'/></td>"
				+ "<td style='width:102px;height:26px'><input style='width:100px;height:25px' id='InFlow' name='moChiAnalysis.InFlow' data-options='min:0,precision:0'/></td>"
				+ "<td style='width:102px;height:26px'><input style='width:100px;height:25px' id='InNTU' name='moChiAnalysis.InNTU' data-options='min:0,precision:0'/></td>"
				+ "<td style='width:102px;height:26px'><input style='width:100px;height:25px' id='OutNTU' name='moChiAnalysis.OutNTU' data-options='min:0,precision:0'/></td>"
				+ "<td style='width:102px;height:26px'><input style='width:100px;height:25px' id='InAlga' name='moChiAnalysis.InAlga' data-options='min:0,precision:0'/></td>"
				+ "<td style='width:102px;height:26px'><input style='width:100px;height:25px' id='OutAlga' name='moChiAnalysis.OutAlga' data-options='min:0,precision:0'/></td>"
				+ "</tr>");
	}
}





var tburl = 'searchMoChiAnalysis.action';
var datalist = new Array();
var title="膜池运行工况记录表" + strDate;
//加载项目列表
function listMoChiAnalysis(data) {
	$("#moChiAnalysisbody").datagrid({
		title: title,
		width : "1300",
		height : "300",
		data:data,//加载
		rownumbers : true, // 在最前面显示行号
		fitColumns : true, // 自动适应列宽
		striped : true, // 隔行变色
		singleSelect : true, // 每次只选中一行
		loadMsg : '正在加载项目列表，请稍后...',
		remoteSort : false, // 排序，true表示从服务器端排序
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
		            {field : 'poolID', title : '膜池编号', align : 'center', sortable : true,width:80,
			            	  formatter:function(value){
			            		    return formPoolID(value);
			            	  }
		            },
		            /*{field : 'inPress', title : '进膜压力', align :'center', sortable : true, width:80},
		            {field : 'outPress', title : '出水压力', align : 'center', sortable : true,width:70},*/
		            {field : 'diffPress', title : '跨膜压差<br>Mpa', align :'center', sortable : true,width:105},
		            {field : 'inFlow', title : '进水流量<br>m<sup>3', align : 'center', sortable : true,width:105},
		            {field : 'inNTU', title : '进膜浊度 <br>NTU', align :'center', sortable : true,width:105},
		            {field : 'outNTU', title : '出膜浊度<br>NTU', align : 'center', sortable : true,width:105},
		            {field : 'inAlga', title : '进膜藻类 <br>10000/L', align :'center', sortable : true,width:105},
		            {field : 'outAlga', title : '出膜藻类 <br>10000/L', align : 'center', sortable : true,width:105},
		            ]],
		onLoadError: function () {
			 $.messager.alert("提示", "服务器忙，请稍后再试！", "warning");
		},
		            	  
		onDblClickRow: function (rowIndex,rowData){
			editMoChiAnalysis();
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
				$('#moChiAnalysisbody').datagrid('hideColumn', item.name);
				cmenu.menu('setIcon', {
					target: item.target,
					iconCls: 'icon-empty'
				});
			} else {
				$('#moChiAnalysisbody').datagrid('showColumn', item.name);
				cmenu.menu('setIcon', {
					target: item.target,
					iconCls: 'icon-ok'
				});
			}
		}
	});
	var fields = $('#moChiAnalysisbody').datagrid('getColumnFields');
	for(var i=0; i<fields.length; i++){
		var field = fields[i];
		var col = $('#moChiAnalysisbody').datagrid('getColumnOption', field);
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
function addMoChiAnalysis() {

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
function editMoChiAnalysis() {
	var moChiAnalysis = $('#moChiAnalysisbody').datagrid('getSelected');// 得到选中的一行数据
	// 如果没有选中记录
	if (moChiAnalysis == null) {
		$.messager.alert('项目', '请先选中要编辑的项目', 'info');
		return;
	}
	$('#frmEdit').form('clear');

	// 填充数据 填充的是json数据
	$("#ID").val(moChiAnalysis.ID);
	$("#PoolID").combobox('setValue',moChiAnalysis.poolID);
	$("#t").datetimebox("setValue",(moChiAnalysis.t).replace('T',' '));
	$("#InPress").numberbox('setValue',moChiAnalysis.inPress);
	$("#OutPress").numberbox('setValue',moChiAnalysis.outPress);
	$("#DiffPress").numberbox('setValue',moChiAnalysis.diffPress);
	$("#InFlow").numberbox('setValue',moChiAnalysis.inFlow);
	
	$("#InNTU").numberbox('setValue',moChiAnalysis.inNTU);
	$("#OutNTU").numberbox('setValue',moChiAnalysis.outNTU);
	$("#InAlga").numberbox('setValue',moChiAnalysis.inAlga);
	$("#OutAlga").numberbox('setValue',moChiAnalysis.outAlga);
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
		$.post("addMoChiAnalysis.action", params, function(result) {
			if (result.operateSuccess){
				location.reload();
//				$('#moChiAnalysisbody').datagrid('reload');// 重新加载
				$.messager.alert('添加', '添加成功', 'info');
			} else {
				$.messager.alert('添加', '添加失败', 'warning');
			}
		});
	} else {
		// 表示更新
		$.post("updateMoChiAnalysis.action", params, function(result) {
			if (result.operateSuccess) {
				location.reload();
//				$('#moChiAnalysisbody').datagrid('reload');// 重新加载
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
//	alert("params = " + params);
	var paramsArray = params.split("split=&");
	var strLength;
	var tempStr;
	var newStr;
	for(var i = 1; i < paramsArray.length; ++i) {
//		alert("paramsArray[i] = " + paramsArray[i]);
		strLength = paramsArray[i].length;
		tempStr = paramsArray[i].substring(44, 62);
		//alert("old tempStr" + tempStr);
		newtempStr = tempStr.substring(0, 10) + '+' + tempStr.substring(11, tempStr.length);
		//alert("new temStr" + newtempStr);
		newStr = paramsArray[i].substring(0, 9) + newtempStr + paramsArray[i].substring(9, 44)
					+ newtempStr + paramsArray[i].substring(62, strLength);
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
				$.post("addMoChiAnalysis.action", paramsArray[i], function(result) {
					//alert('test' + result.operateSuccess);
					if (result.operateSuccess){
						location.reload();
//						$('#moChiAnalysisbody').datagrid('reload');// 重新加载
						$.messager.alert('添加', '添加成功', 'info');
					} else {
						$.messager.alert('添加', '添加失败', 'warning');
					}
				});
			}//添加if
			else {
				// 表示更新
				$.post("updateMoChiAnalysis.action", params, function(result) {
					if (result.operateSuccess) {
						location.reload();
//						$('#moChiAnalysisbody').datagrid('reload');// 重新加载
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
function deleteMoChiAnalysis() {
	var moChiAnalysis = $('#moChiAnalysisbody').datagrid('getSelected');// 得到选中的一行数据
	// 如果没有选中记录
	if (moChiAnalysis == null) {
		$.messager.alert('删除', '请先选中要删除的项目', 'info');
		return;
	}
	$.messager.confirm('确认', '真的要删除选中的记录吗？', function(r) {
		if (r) {
			var url = "deleteMoChiAnalysis.action?moChiAnalysis.ID=" + moChiAnalysis.ID;
			// 试一下get方法（地址，回调函数）
			$.get(url, function(result) {
				if (result.operateSuccess) {
					location.reload();
//					$.messager.alert('删除', '选中的项目成功删除！', 'info');
					// 重新加载
					$("#moChiAnalysisbody").datagrid('reload');
				} else {
					$.messager.alert('删除', '删除失败！', 'warning');
				}
			});
		}
	});
}

//查询全部
function listAllMoChiAnalysis(){
	$('#frmSearch').form('clear');
	dealSearch();
}

//条件查询
function searchMoChiAnalysis(){
	//$("#searchT").val(searchT);
//	$("#lowT").val(lowT);
//	$("#highT").val(highT);
//	$("#searchPoolID").val(searchPoolID);
	showSearchForm();
}

var treeURL; //params = 'searchT=&searchPoolID

function dealSearch() {
	var indexButton = $('#indexForm').serialize();
//	var buttonID = indexButton.slice(-6);  //buttonID = 'index3'
//	var buttonID=$('#chooseIndexButton2').combobox('getValue');  //使用easyui时的取值方式
	var buttonID=$('#chooseIndexButton2 option:selected').val();
	var poolIDInMode2;
	var newParams = '';
	var failAppearence = false;

	if(searchMode == 0) {   //如果是从三个radio进行查询
		var params = $("#frmSearch").form('clear').serialize(); 
		// lowT=&highT=&searchPoolID=&lowNTU=0&highNTU=100&lowAlgaeContent=0&highAlgaeContent=100&lowOutNTU=0&highOutNTU=100&lowSV=0.00&highSV=100.00
		switch(buttonID) {
		//case 'index1':
		case 'MTG_MoChi_SC01':
			title = '1#膜池 运行工况记录表';
			ImageTitle = "1# 膜池 运行工况记录图 ";
			newParams = params.replace(/searchPoolID=/,'searchPoolID=MTG_MoChi_SC01');
			//treeURL = '${pageContext.request.contextPath}/searchMoChiAnalysis.action?dataAnalysis.PoolID=MTG_MoChi_SC01';
			break;
		//case 'index2':
		case 'MTG_MoChi_SC02':
			title = '2#膜池 运行工况记录表';
			ImageTitle = "2# 膜池 运行工况记录图 ";
			newParams = params.replace(/searchPoolID=/,'searchPoolID=MTG_MoChi_SC02');
			//treeURL = '${pageContext.request.contextPath}/searchMoChiAnalysis.action?dataAnalysis.PoolID=MTG_MoChi_SC02';
			break;
//		case 'index3':
		case 'MTG_MoChi_SC03':		
			title = '3#膜池 运行工况记录表';
			ImageTitle = "3# 膜池 运行工况记录图 ";
			newParams = params.replace(/searchPoolID=/,'searchPoolID=MTG_MoChi_SC03');
			//treeURL = '${pageContext.request.contextPath}/searchMoChiAnalysis.action?dataAnalysis.PoolID=MTG_MoChi_SC03';
			break;
//		case 'index4':
		case 'MTG_MoChi_SC04':
			title = '4#膜池 运行工况记录表';
			ImageTitle = "4# 膜池 运行工况记录图 ";
			newParams = params.replace(/searchPoolID=/,'searchPoolID=MTG_MoChi_SC04');
			//treeURL = '${pageContext.request.contextPath}/searchMoChiAnalysis.action?dataAnalysis.PoolID=MTG_MoChi_SC03';
			break;
//		case 'index5':
		case 'MTG_MoChi_SC05':
			title = '5#膜池 运行工况记录表';
			ImageTitle = "5# 膜池 运行工况记录图 ";
			newParams = params.replace(/searchPoolID=/,'searchPoolID=MTG_MoChi_SC05');
			//treeURL = '${pageContext.request.contextPath}/searchMoChiAnalysis.action?dataAnalysis.PoolID=MTG_MoChi_SC03';
			break;
//		case 'index6':
		case 'MTG_MoChi_SC06':
			title = '6#膜池 运行工况记录表';
			ImageTitle = "6# 膜池 运行工况记录图 ";
			newParams = params.replace(/searchPoolID=/,'searchPoolID=MTG_MoChi_SC06');
			//treeURL = '${pageContext.request.contextPath}/searchMoChiAnalysis.action?dataAnalysis.PoolID=MTG_MoChi_SC03';
			break;
		default :
			title = '1#膜池 运行工况记录表';
			ImageTitle = "1# 膜池 运行工况记录图 ";
			newParams = params.replace(/searchPoolID=/,'searchPoolID=MTG_MoChi_SC01');
			//treeURL = '${pageContext.request.contextPath}/searchMoChiAnalysis.action';
		}
	} else if(searchMode == 1){  //如果是从查询窗口进入
		var params = $("#frmSearch").serialize(); 
		/*
		 * lowT= 或 lowT=XXXX-XX-XX
		 * highT=(不确定是否有值) 或 highT=XXXX-XX-XX
		 * searchPoolID=(不确定是否有值) 或 searchPoolID=MTG_MoChi_SC0X
		 */
		//alert("poolID " + poolID);
		
		var reLowTime = new RegExp(/^lowT=\d{4}-\d{2}\-\d{2}/);
		var testLowTime = reLowTime.test(params);
		var reHighTime = new RegExp(/highT=\d{4}-\d{2}\-\d{2}/);
		var testHighTime = reHighTime.test(params);
		var reID = new RegExp(/searchPoolID=MTG_MoChi_SC0\d{1}/);
		var testID = reID.test(params);
		
		
		if(testLowTime && testHighTime && testID) {  // lowT、highT、searchPoolID均不为空
			var lowTimeStr = params.substring(5, 15);
			var highTimeStr = params.substring(22, 32);
			var index = params.substring(59, 60);
			if (lowTimeStr != highTimeStr)
				TimeStr = lowTimeStr + '~' + highTimeStr;
			else 
				TimeStr = lowTimeStr;
			switch(index) {
				case '1':
					title = '1#膜池 运行工况记录表' + ' ' + TimeStr;
					ImageTitle = "1# 膜池 运行工况记录图 " + ' ' + TimeStr;
					$('input[name="chooseIndexButton"][value="index1"]').attr("checked", true);
//					$('#chooseIndexButton2').combobox('setValue', 'MTG_MoChi_SC01');
					$('#chooseIndexButton2').val('MTG_MoChi_SC01');
					newParams = params;
					break;
				case '2':
					title = '2#膜池 运行工况记录表' + ' ' + TimeStr;
					ImageTitle = "2# 膜池 运行工况记录图 " + ' ' + TimeStr;
					$('input[name="chooseIndexButton"][value="index2"]').attr("checked", true);
//					$('#chooseIndexButton2').combobox('setValue', 'MTG_MoChi_SC02');
					$('#chooseIndexButton2').val('MTG_MoChi_SC02');
					newParams = params;
					break;
				case '3':
					title = '3#膜池 运行工况记录表' + ' ' + TimeStr;
					ImageTitle = "3# 膜池 运行工况记录图 " + ' ' + TimeStr;
					$('input[name="chooseIndexButton"][value="index3"]').attr("checked", true);
//					$('#chooseIndexButton2').combobox('setValue', 'MTG_MoChi_SC03');
					$('#chooseIndexButton2').val('MTG_MoChi_SC03');
					newParams = params;
					break;
				case '4':
					title = '4#膜池 运行工况记录表' + ' ' + TimeStr;
					ImageTitle = "4# 膜池 运行工况记录图 " + ' ' + TimeStr;
					$('input[name="chooseIndexButton"][value="index4"]').attr("checked", true);
//					$('#chooseIndexButton2').combobox('setValue', 'MTG_MoChi_SC04');
					$('#chooseIndexButton2').val('MTG_MoChi_SC04');
					newParams = params;
					break;
				case '5':
					title = '5#膜池 运行工况记录表' + ' ' + TimeStr;
					ImageTitle = "5# 膜池 运行工况记录图 " + ' ' + TimeStr;
					$('input[name="chooseIndexButton"][value="index5"]').attr("checked", true);
//					$('#chooseIndexButton2').combobox('setValue', 'MTG_MoChi_SC05');
					$('#chooseIndexButton2').val('MTG_MoChi_SC05');
					newParams = params;
					break;
				case '6':
					title = '6#膜池 运行工况记录表' + ' ' + TimeStr;
					ImageTitle = "6# 膜池 运行工况记录图 " + ' ' + TimeStr;
					$('input[name="chooseIndexButton"][value="index6"]').attr("checked", true);
//					$('#chooseIndexButton2').combobox('setValue', 'MTG_MoChi_SC06');
					$('#chooseIndexButton2').val('MTG_MoChi_SC06');
					newParams = params;
					break;
				default :
					/*title = '运行工况记录表' + ' ' + TimeStr;
					ImageTitle = "膜池 运行工况记录图 " + ' ' + TimeStr;
					$('input[name="chooseIndexButton"][value="index3"]').attr("checked", true);
					newParams = params;*/
					
					title = '1#膜池 运行工况记录表' + ' ' + TimeStr;
					ImageTitle = "1# 膜池 运行工况记录图 " + ' ' + TimeStr;
					$('input[name="chooseIndexButton"][value="index1"]').attr("checked", true);
					$('#chooseIndexButton2').combobox('setValue', 'MTG_MoChi_SC01');
					newParams = params;
					
				}
		} else {  // 如果  lowT、highT、searchPoolID均不为空  不满足，退出查询
			failAppearence = true;
			$.messager.alert('错误', '查询失败！<br />起始/结束日期、膜池编号不能为空！', 'warning');
			//设置一个错误的数据，使得查询失败，避免图表刷新，因为即便是数据缺失，SQLServer也会返回特定结果
			newParams = 'lowT=2015-01-01&highT=2014-01-01&searchPoolID';
			//closeSearchForm();
		}
		searchMode=0; //将设置模式重置，否则此时改变下拉框会不起作用
	} else if(searchMode == 2) {  //从时间树
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
//		buttonID= $("#searchPoolID").val();
		
		switch(buttonID) {
//			case 'index1':
		case 'MTG_MoChi_SC01':
			title = '1#膜池 运行工况记录表' + ' ' + TimeStr;
			ImageTitle = "1# 膜池 运行工况记录图 " + ' ' + TimeStr;
			poolIDInMode2 = 'MTG_MoChi_SC01';
			newParams = params.substring(0, 46) + poolIDInMode2 + params.substring(46);
			break;
//		case 'index2':
		case 'MTG_MoChi_SC02':
			title = '2#膜池 运行工况记录表' + ' ' + TimeStr;
			ImageTitle = "2# 膜池 运行工况记录图 " + ' ' + TimeStr;
			poolIDInMode2 = 'MTG_MoChi_SC02';
			newParams = params.substring(0, 46) + poolIDInMode2 + params.substring(46);
			break;
//		case 'index3':
		case 'MTG_MoChi_SC03':		
			title = '3#膜池 运行工况记录表' + ' ' + TimeStr;
			ImageTitle = "3# 膜池 运行工况记录图 " + ' ' + TimeStr;
			poolIDInMode2 = 'MTG_MoChi_SC03';
			newParams = params.substring(0, 46) + poolIDInMode2 + params.substring(46);
			break;
		case 'index4':
		//case 'MTG_MoChi_SC04':
			title = '4#膜池 运行工况记录表' + ' ' + TimeStr;
			ImageTitle = "1# 膜池 运行工况记录图 " + ' ' + TimeStr;
			poolIDInMode2 = 'MTG_MoChi_SC04';
			newParams = params.substring(0, 46) + poolIDInMode2 + params.substring(46);
			break;
//		case 'index5':
		case 'MTG_MoChi_SC05':
			title = '5#膜池 运行工况记录表' + ' ' + TimeStr;
			ImageTitle = "5# 膜池 运行工况记录图 " + ' ' + TimeStr;
			poolIDInMode2 = 'MTG_MoChi_SC05';
			newParams = params.substring(0, 46) + poolIDInMode2 + params.substring(46);
			break;
//		case 'index6':
		case 'MTG_MoChi_SC06':
			title = '6#膜池 运行工况记录表' + ' ' + TimeStr;
			ImageTitle = "6# 膜池 运行工况记录图 " + ' ' + TimeStr;
			poolIDInMode2 = 'MTG_MoChi_SC06';
			newParams = params.substring(0, 46) + poolIDInMode2 + params.substring(46);
			break;
		default :
			title = '1#膜池 运行工况记录表' + ' ' + TimeStr;
			ImageTitle = "1# 膜池 运行工况记录图 " + ' ' + TimeStr;
			poolIDInMode2 = 'MTG_MoChi_SC01';
			newParams = params.substring(0, 46) + poolIDInMode2 + params.substring(46);
			
		}
		
	}	  

//	alert("searchMode:"+searchMode+",newParams = " + newParams);
	$.post("searchMoChiAnalysis.action", newParams, function(result) {
		if (result.total!=0) {
			tlist = result.tlist;
			listMoChiAnalysis(result);
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




//var url = "${pageContext.request.contextPath}/searchMoChiAnalysis.action";


//膜池编号转换
function formPoolID(value){
	var strs = new Array();
	var poolID;
	strs=value.split("_");//字符切割
	poolID = strs[2].replace(/SC0/,'');
	poolID = poolID.replace(/SC/,'');
	return 	poolID + "#"+"膜池" ;
}


//根据对象key 对对象数组排序，使用 arr.sort(keystr('key',true)); false表示升序，ture表示降序 
function keysrt(key,desc) {
	return function(a,b){
		return desc ? ~~(a[key] < b[key]) : ~~(a[key] > b[key]);
	}
}

//膜池运行工况记录图
var ImageTitle="膜池运行工况记录图" + strDate;
function prehImage(){
	var inPressArray = new Array(); //进膜压力
	var outPressArray = new Array(); //出水压力
	var diffPressArray = new Array(); //跨膜压差
	var inFlowArray = new Array(); //进水流量
	var inNTUArray = new Array(); //进水浊度
	var outNTUArray = new Array(); //出水浊度
	var inAlgaArray = new Array(); //进水藻类
	var outAlgaArray = new Array(); //出水藻类
	
	var poollist = new Array();
	var options;
	if (datalist.length>0){					
		for (var i=0; i<datalist.length;i++){
			var row = datalist[i]; 
			var flag_i = jQuery.inArray(row.poolID, poollist); //判断膜池是否存在
			if(flag_i<0){  //不存在
				poollist.push(row.poolID);	//添加膜池
				flag_i=poollist.length-1;
				
				inPressArray[flag_i]=[];
				outPressArray[flag_i]=[];
				diffPressArray[flag_i]=[];
				inFlowArray[flag_i]=[];
				
				inNTUArray[flag_i]= [];
				outNTUArray[flag_i]=[];
				inAlgaArray[flag_i]=[];
				outAlgaArray[flag_i]=[];
			}//if flag_i
			
			var tempTime = Date.UTC(row.t.substring(0, 4),
					row.t.substring(5, 7)-1, //highcharts 月份要减一，因为Date.UTC从0-11计数
					row.t.substring(8, 10),
					row.t.substring(11, 13));
			
			inPressArray[flag_i].push([tempTime,row.inPress]);	//填充数据，进膜压力
			outPressArray[flag_i].push([tempTime,row.outPress]);	//填充数据，出水压力
			diffPressArray[flag_i].push([tempTime,row.diffPress]);	//填充数据，跨膜压差
			inFlowArray[flag_i].push([tempTime,row.inFlow==null?null:row.inFlow/10000]);	//填充数据，进水流量
			
			inNTUArray[flag_i].push([tempTime,row.inNTU]);
			outNTUArray[flag_i].push([tempTime,row.outNTU]);
			inAlgaArray[flag_i].push([tempTime,row.inAlga]);
			outAlgaArray[flag_i].push([tempTime,row.outAlga]);
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
				filename: 'MoChiAnalysis',
				type:'image/svg+xml',
				buttons: {
	                contextButton: {
	                    enabled: false
	                },
	                exportButton: {
	                    text: '导出',
//	                    menuItems: Highcharts.getOptions().exporting.buttons.contextButton.menuItems.splice(2)
	                    onclick: function(){
	                    	this.exportChart();
	                    }
	                },
	                printButton: {
	                    text: '打印',
	                    onclick: function () {
	                        this.print();
	                    }
	                }
	            }
			},
			lang:{						
				printChart: '打印',
				downloadJPEG: 'JPEG 图片',
                downloadPDF: 'PDF文档',
                downloadPNG: 'PNG 图片',
                downloadSVG: 'SVG 矢量图',
                exportButtonTitle: '下载图片',
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
	            selected: 2
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
					font: '20px',
					color: '#0E2D5F',
					fontWeight: 'bold',
					fontSize:'20px',
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
			    //max: 150,
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
			    	text: '压力(Mpa)'                  //指定y轴的标题
			    },
			  
			},
			{
				//第2个y坐标
				labels: {
	            	overflow: 'justify'
	            },
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
			    	text: '进水量(万立方米)'                  //指定y轴的标题
			    },
			},
			{
				//第3个y坐标
				labels: {
	            	overflow: 'justify'
	            },
			    startOnTick: true,
	            endOnTick: false,
	            minPadding: 0,
	            maxPadding: 0,
			    gridLineColor: 'silver',
			    opposite:true,
			    tickColor: 'green',
	            tickLength: 10,
	            tickWidth: 3,
	            tickPosition: 'inside',
			    showLastLabel: true,
			    title: {
			    	text: '浊度(NTU)'                  //指定y轴的标题
			    },
			},{
				//第4个y坐标
				labels: {
	            	overflow: 'justify'
	            },
			    startOnTick: true,
	            endOnTick: true,
	            minPadding: 0,
	            maxPadding: 0,
			    gridLineColor: 'silver',
			    opposite:true,
			    tickColor: 'green',
	            tickLength: 10,
	            tickWidth: 3,
	            tickPosition: 'inside',
			    showLastLabel: true,
			    title: {
			    	text: '藻类(10000/L)'                  //指定y轴的标题
			    },
			}],
			        
			        //显示数据
			        plotOptions: {
			        	line: {
			        		dataLabels: {
								enabled: true,
								formatter: function() {
									var r= /^[+-]?[1-9]?[0-9]*\.[0-9]*$/;
									if(r.test(this.y))
										return (this.y).toFixed(2);
									else
										return this.y;
								} 
						    },
			        		enableMouseTracking: true,
			        	},
			        	series:{
			        		connectNulls:true, //设置可以包含null值
			        	}
			        },
			        		       
			        //指定数据列
			        series: []
	};//options
	options.series = new Array();
	for(var i=0;i<poollist.length;i++)
	{	
//		options.series[i+poollist.length*2] = new Object();
//		options.series[i+poollist.length*2].data=inPressArray[i].sort(); //对listArray[i]进行排序，否则会造成时间轴上的图错乱
//		options.series[i+poollist.length*2].name='进膜压力';
//		options.series[i+poollist.length*2].type="line";
//		options.series[i+poollist.length*2].yAxis = 0;
//		
//		options.series[i+poollist.length*3] = new Object();
//		options.series[i+poollist.length*3].data=outPressArray[i].sort(); 
//		options.series[i+poollist.length*3].name='出水压力';
//		options.series[i+poollist.length*3].type="line";
//		options.series[i+poollist.length*3].yAxis = 0;
		
		options.series[i] = new Object();
		options.series[i].data=diffPressArray[i].sort(); 
		options.series[i].name='跨膜压差';
		options.series[i].type="line";
		options.series[i].yAxis = 0;
		
		options.series[i+poollist.length] = new Object();
		options.series[i+poollist.length].data=inFlowArray[i].sort(); 
		options.series[i+poollist.length].name='进水流量';
		options.series[i+poollist.length].type="line";
		options.series[i+poollist.length].yAxis = 1;
		
		options.series[i+poollist.length*2] = new Object();
		options.series[i+poollist.length*2].data=inNTUArray[i].sort(); 
		options.series[i+poollist.length*2].name='进水浊度';
		options.series[i+poollist.length*2].type="line";
		options.series[i+poollist.length*2].yAxis = 2;
		
		options.series[i+poollist.length*3] = new Object();
		options.series[i+poollist.length*3].data=outNTUArray[i].sort(); 
		options.series[i+poollist.length*3].name='出水浊度';
		options.series[i+poollist.length*3].type="line";
		options.series[i+poollist.length*3].yAxis = 2;
		
		options.series[i+poollist.length*4] = new Object();
		options.series[i+poollist.length*4].data=inAlgaArray[i].sort(); 
		options.series[i+poollist.length*4].name='进水藻类';
		options.series[i+poollist.length*4].type="line";
		options.series[i+poollist.length*4].yAxis = 3;
		
		options.series[i+poollist.length*5] = new Object();
		options.series[i+poollist.length*5].data=outAlgaArray[i].sort(); 
		options.series[i+poollist.length*5].name='出水藻类';
		options.series[i+poollist.length*5].type="line";
		options.series[i+poollist.length*5].yAxis = 3;
		
	}
	options.series.sort(keysrt("name",false));
	//chart = new Highcharts.Chart(options);
	$('#imageContainer').highcharts('StockChart',options);
	
}//preH;

//左侧时间列表显示
var treeNodeList= [{id:1,name:"时间列表",text:"时间列表",parentId:0}];
function listTreeNode(tlist){
	$('#timeTree').tree({
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
				//alert('test');
//				$("#searchT").datebox("setValue",out);
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
	var reID = new RegExp(/searchPoolID=MTG_JJC_SC0\d{1}/);
	var testID = reID.test(params);
	var url="exportMoChiAnalysis.action?"+params;
	
	var downloadPath = "downloadTempForMochi/MoChiAnalysis.xls";
	
	$.post(url, function(result) {
		if (result.operateSuccess){
			window.location.href=downloadPath;
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
	else{
		$.ajaxFileUpload({
			url : "importCheckMoChiAnalysis.action",
//			url :'uploadMoChiAnalysis.action',
			fileElementId:'upload',
			dataType:'json',
			success: function(data, status){
				if (data.operateSuccess){ //没有冲突
					$.ajaxFileUpload({
						url : "importMoChiAnalysis.action",
						fileElementId:'upload',
						dataType:'json',
						success: function(result){
							$.messager.alert('导入', '导入成功', 'info');
							if (result.operateSuccess){	
								
								$('#moChiAnalysisbody').datagrid('reload');// 重新加载									
							} else {
//								$.messager.alert('导入', '导入失败<br><br>'+$('#errMsg').val(), 'warning');
								$.messager.alert('导入', '导入失败<br><br>', 'warning');
							}
						},//success
						error:function(result){
							console.log("error 上传失败");
//							$.messager.alert('导入', '导入失败<br><br>'+$('#errMsg').val(), 'warning');
							$.messager.alert('导入', '导入失败<br><br>', 'warning');
						} //error
					});//ajaxFileUpload	
					location.reload();
				} else {		//有冲突
					$.messager.confirm("导入提示",'已存在相关日期的数据，是否继续覆盖导入？',function(r){
						if (r) { //上传文件
							$.ajaxFileUpload({
								url : "importMoChiAnalysis.action",
								fileElementId:'upload',
								dataType:'json',
								success: function(data, status){
									$.messager.alert('导入', '导入成功', 'info');
									if (data.operateSuccess){
										
										$('#moChiAnalysisbody').datagrid('reload');// 重新加载/
										
										$('#import').text('导入');
										$('#tab_export').css('display','none');
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