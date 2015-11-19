//JQuery的入口
$(function() {
	listDataAnalysis();
});

var addCount = 0;
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
			+ "<td><input type='hidden' id='dateTempAdd' name='dateTemp' style='width:1px;height:25px' /></td>"
			+ "<td><input type='hidden' id='IDAdd' name='dataAnalysis.ID' style='width:1px;height:25px' /></td>"
			+ "<td id='indexNum" + _len + "'>" + _len + "</td>"
			+ "<td><input name='dataAnalysis.t' id='tAdd' type='datetime-local' style='width:200px;height:25px'/></td>"
			+ "<td><select name='dataAnalysis.PoolID' id='PoolIDAdd' style='width:200px;height:25px'><option value='MTG_QingS_SC01' selected='selected'>MTG_QingS_SC01</option><option value='MTG_QingS_SC02'>MTG_QingS_SC02</option><option value='MTG_QingS_SC03'>MTG_QingS_SC03</option></select></td>"
			+ "<td><input style='width:100px;height:25px' id='InV' name='dataAnalysis.InV' data-options='min:0,precision:0,' /></td>"
			+ "<td><input style='width:100px;height:25px' id='OutV' name='dataAnalysis.OutV' data-options='min:0,precision:0' /></td>"
			+ "<td><input style='width:100px;height:25px' id='HXOutV' name='dataAnalysis.HXOutV' data-options='min:0,precision:0'/></td>"
			+ "<td><input style='width:100px;height:25px' id='LCOutV' name='dataAnalysis.LCOutV' data-options='min:0,precision:0'/></td>"
			+ "<td><input style='width:100px;height:25px' id='TCOutV' name='dataAnalysis.TCOutV' data-options='min:0,precision:0' /></td>"
			+ "<td><input style='width:100px;height:25px' id='JJOutV' name='dataAnalysis.JJOutV' data-options='min:0,precision:0'/></td>"
			+ "<td><input style='width:100px;height:25px' id='HLInV' name='dataAnalysis.HLInV' data-options='min:0,precision:0'/></td>"
			+ "<td><input style='width:100px;height:25px' id='Storage' name='dataAnalysis.Storage'  data-options='precision:0'/></td>"
			+ "<td><input style='width:100px;height:25px' id='PreH' name='dataAnalysis.PreH' data-options='precision:2'/></td>"
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
				+ "<td><input type='hidden' id='dateTempAdd' name='dateTemp' style='width:1px;height:25px' /></td>"
				+ "<td><input type='hidden' id='IDAdd' name='dataAnalysis.ID' style='width:1px;height:25px' /></td>"
				+ "<td id='indexNum" + (i-1) + "'>" + (i-1) + "</td>"
				+ "<td><input name='dataAnalysis.t' id='tAdd' type='datetime-local' style='width:200px;height:25px'/></td>"
				+ "<td><select name='dataAnalysis.PoolID' id='PoolIDAdd' style='width:200px;height:25px'><option value='MTG_QingS_SC01' selected='selected'>MTG_QingS_SC01</option><option value='MTG_QingS_SC02'>MTG_QingS_SC02</option><option value='MTG_QingS_SC03'>MTG_QingS_SC03</option></select></td>"
				+ "<td><input style='width:100px;height:25px' id='InV' name='dataAnalysis.InV' data-options='min:0,precision:0,' /></td>"
				+ "<td><input style='width:100px;height:25px' id='OutV' name='dataAnalysis.OutV' data-options='min:0,precision:0' /></td>"
				+ "<td><input style='width:100px;height:25px' id='HXOutV' name='dataAnalysis.HXOutV' data-options='min:0,precision:0'/></td>"
				+ "<td><input style='width:100px;height:25px' id='LCOutV' name='dataAnalysis.LCOutV' data-options='min:0,precision:0'/></td>"
				+ "<td><input style='width:100px;height:25px' id='TCOutV' name='dataAnalysis.TCOutV' data-options='min:0,precision:0' /></td>"
				+ "<td><input style='width:100px;height:25px' id='JJOutV' name='dataAnalysis.JJOutV' data-options='min:0,precision:0'/></td>"
				+ "<td><input style='width:100px;height:25px' id='HLInV' name='dataAnalysis.HLInV' data-options='min:0,precision:0'/></td>"
				+ "<td><input style='width:100px;height:25px' id='Storage' name='dataAnalysis.Storage'  data-options='precision:0'/></td>"
				+ "<td><input style='width:100px;height:25px' id='PreH' name='dataAnalysis.PreH' data-options='precision:2'/></td>"
				+ "<td id='delete" + (i-1) + "'><a href='#' onclick='deltr(" + (i-1) + ",event)'>删除</a></td>"
				+ "</tr>");
	}
}

$(document).ready(function() {
	$('.delete').click(function(event) {
		event.preventDefault();
		//var value = $(this).text();
		//alert(value);
		//if($(this).text() == 'Delete')
		$(this).parent().parent().remove();
	});
});



var tburl = 'searchDataAnalysis.action';
var datalist = new Array();
var title="清水池水位计算表" + strDate;
//加载项目列表
function listDataAnalysis() {
	$("#dataAnalysisbody").datagrid({
		title: title,
		width : "1050",
		height : "300",
//		iconCls : 'icon-save', // 表格左上角的图标样式
		/*url : 'listDataAnalysis.action', // 访问服务器的地址，要求返回JSON对象*/
		url:tburl,
//		loadData:datalist,//加载
		rownumbers : true, // 在最前面显示行号
		fitColumns : true, // 自动适应列宽
		striped : true, // 隔行变色
		singleSelect : true, // 每次只选中一行
		loadMsg : '正在项目列表，请稍后...',
		remoteSort : false, // 排序，true表示从服务器端排序
		
//		pagination : true, // 在底部显示分页工具栏
//		pageSize : 5, // 指定每页的大小，服务器要加上page属性和total属性
//		pageList : [ 3,5,10,15,20], // 可以设置每页记录条数的列表，服务器要加上rows属性
		
		idField : 'ID', // 主键属性
		onLoadSuccess: function(data){
//			if(data.total>0){
//				datalist = eval(data).rows;
//				prehImage(); //作图
//			}else{
//				alert('没有相关数据！');
//			}
			if(data.rows!=datalist){		
				datalist = eval(data).rows;
				prehImage(); //作图			
			}
},
		columns : [ [ /*{field : 'ID', title : '编号', align :'center', sortable : true,width:80},*/
		              {field : 'poolID', title : '水池编号', align : 'center', sortable : true,width:150,
		            	  formatter:function(value){
		            		    return formPoolID(value);
		            	  }},
		              {field : 't', title : '时间',align : 'center', sortable : true, width:150,
		            	  formatter : function(value) {
		            		  //显示日期到小时
		            		  return value.substring(0, 10)+" "+value.substring(11,13)+"时";
		            	  }},
		            	  {field : 'inV', title : '总来水量', align :'center', sortable : true, orderwidth:80},
		            	  {field : 'outV', title : '出水量', align : 'center', sortable : true,width:80},
		            	  {field : 'HXOutV', title : '洗虹吸滤池', align :'center', sortable : true,width:100},
		            	  {field : 'LCOutV', title : '洗V型滤池', align : 'center', sortable : true,width:100},
		            	  {field : 'TCOutV', title : '炭池反冲洗', align :'center', sortable : true,width:100},
		            	  {field : 'JJOutV', title : '机加池排泥', align : 'center', sortable : true,width:100},
		            	  {field : 'HLInV', title : '回流进水', align : 'center', sortable : true,width:80},
		            	  {field : 'storage',	title : '蓄水量',	align : 'center',sortable : true,width:80},
		            	  {field : 'preH', title : '预测水位', align :'center', sortable : true,width:80,
		            		  //只显示两位小数
		            		  formatter : function(value) {
		            			  return value.toFixed(2);
		            		  }}
		            	  ] ],

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
//过滤器？？？
//	$("#dataAnalysisbody").datagrid('enableFilter',[{
//		fileld:'inV',
//		type:'numberbox',
//		options:{precision:0},
//		op:['equal','notequal','less','greater']
//	}]);
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

var editRow = undefined;
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
	$("#PoolID").val(dataAnalysis.poolID);
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
	alert('edit form' + $("#frmEdit").serialize());
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
	$("#searchT").val(searchT);
	$("#searchPoolID").val(searchPoolID);
	showSearchForm();
}

//查询处理
function dealSearch() {
	// 表单数据序列化成一个字符串用&拼接
	var params = $("#frmSearch").serialize();
	//alert(params);
	var re = new RegExp(/^searchT=\d{4}-\d{2}\-\d{2}/);
	var test = re.test(params);
	if(test) {
		strDate = ' ' + params.substring(8, 18);
		title = "清水池水位计算表" + strDate;
		ImageTitle = "清水池水位预测图 " + strDate;
	}
	else {
		title = "清水池水位计算表";
		ImageTitle = "清水池水位预测图 ";
	}
	//alert(title + '<br />' + ImageTitle);
	if ($("#searchT").datetimebox("getValue")!= null || $("#searchPoolID").combobox("getValue")!= null){
		$.post("searchDataAnalysis.action", params, function(result) {
			if (result.total!=0) {
				//$('#dataAnalysisbody').datagrid('reload');// 重新加载
				listDataAnalysis();
			} else {
				$.messager.alert('查询', '未查询到相关信息', 'warning');
			}
		});
	} else {
		$.messager.alert('查询', '请选择。。。', 'warning');
	}
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

//关闭查询窗口
function closeSearchForm() {
	$("#frmSearch").form('clear');
	$('#tabSearch').dialog('close');
}

var tlist = new Array();
var poolIDlist  = new Array();
//查询下拉框显示的数据
var url = "${pageContext.request.contextPath}/listDataAnalysis.action";
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
		if(jQuery.inArray(row.t, tlist)<0){
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
	var poolID="";
	strs=value.split("_");//字符切割
	for(var i=0;i<strs.length;i++)
		{
			switch(strs[i]){
			case "MTG":
				poolID="门头沟";break;
			case "QingS":
				poolID=poolID+"清水池";break;
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

//预测水位分析图
var ImageTitle="清水池水位预测图" + strDate;
function prehImage(){
	var listArray=new Array();
	var poollist = new Array();
	var chart;
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
	/**绘图**/
	options = {
			//常规图表选项设置
			chart: {
				renderTo: 'imageContainer',	//在哪个区域呈现
				borderColor: '#95B8E7',	//边框颜色
				panning: true,
				panKey: 'shift',
				zoomType: 'x',
		        selectionMarkerFill: 'rgba(0,0,0, 0.2)',
		        resetZoomButton: {
		        	// 按钮定位
		            position:{
		            	align: 'right', // by default
		            	verticalAlign: 'top', // by default
		            	x: 0,
		            	y: -30
		            },
		            	// 按钮样式
		            theme: {
		            	fill: 'white',
		            	stroke: 'silver',
		            	r: 0,
		            	states: {
		            		hover: {
		            			fill: '#41739D',
		            			style: {
		            				color: 'white'
		            			}
		                    }
		                }
		            }
		        }		
			},
			lang:{					
				resetZoom: '打印',
	            resetZoomTitle: '重置缩放比例',	
				printChart: '打印',
				downloadJPEG: '下载JPEG 图片',
                downloadPDF: '下载PDF文档',
                downloadPNG: '下载PNG 图片',
                downloadSVG: '下载SVG 矢量图',
                exportButtonTitle: '导出图片',
				noData: '没有查询到数据',	
			},
			title:{
				text: ImageTitle,
				style:{
					font: '18px',
					color: '#0E2D5F',
					fontWeight: 'bold',
				}
			},
	   		noData: {
				style: {
					fontWeight: 'bold',
					font: '15px',
					color: '#303030'
				}
			},
			xAxis: {
				title:{
					text:" 日  期 "
				},
//				categories: tlist   //指定x轴分组
				type: 'datetime',
				dateTimeLabelFormats: { // don't display the dummy year
					hours: '%Y-%m-%d %H时',
					day: "%Y-%m-%d",
					month:'%Y年 %m月',
					year: '%Y年'
				},
				labels: { 
					rotation: -45 
				} 
			},
			yAxis: [
			        {	//第一个y轴坐标
			        	min: 0,
			        	max: 5,
			        	title: {
			        		text: '单位：米'                  //指定y轴的标题
			        	},
			        	//添加标示线
			        	plotLines:[
			        	           {//第一条标示线	
			        	        	   color:'red',           //线的颜色，定义为红色
			        	        	   dashStyle:'ShortDash',     //默认值，这里定义为实线
			        	        	   value:4.9,               //定义在那个值上显示标示线，这里是在y轴上刻度为3的值处垂直化一条线
			        	        	   width:2,               //标示线的宽度，2px
			        	        	   label:{
			        	        		   text:'高预警线 4.9m',     //标签的内容
//			        	        		   align:'left',                //标签的水平位置，水平居左,默认是水平居中center
//			        	        		   x:10                         //标签相对于被定位的位置水平偏移的像素，重新定位，水平居左10px
			        	        	   },
			        	        	   zIndex:100, 				//标示线位置，值越大，显示在越前面
			        	           },
			        	           {//第二条标示线	
			        	        	   color:'orange',           //线的颜色，定义为红色
			        	        	   dashStyle:'ShortDash',     //默认值，这里定义为实线
			        	        	   value:2,               //定义在那个值上显示标示线，这里是在y轴上刻度为0.5的值处垂直化一条线
			        	        	   width:2,               //标示线的宽度，2px
			        	        	   label:{
			        	        		   text:'低预警线 2m',     //标签的内容
			        	        	   },
			        	        	   zIndex:100, 			//标示线位置，值越大，显示在越前面
			        	           }]
			        },
			        ],
			        //鼠标移动时显示的数据
			        tooltip: {
			        	enabled: true,
			        	formatter: function() {
			        		return  "水池编号： "+this.series.name
			        		+' <br> 日期： ' +Highcharts.dateFormat('%Y-%m-%d <br> 时间： %H 点',this.x)
			        		+' <br> 预测水位：  '
			        		+ this.y +'米';
			        	}
			        },
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
			        legend: {
			        	enabled: true,	//显示图例	
			        	layout:"vertical",
			        	align: 'right', //水平方向位置
			        	verticalAlign: 'top', //垂直方向位置
			        	x:0,
			        	y:100		            	            
			        },
			        credits: {
			        	text: '缩放后按住"Shift"键可拖动图像<br />北京市自来水集团',
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
			        //指定数据列
			        series: []
	}//options
	options.series = new Array();
	for(var i=0;i<poollist.length;i++)
	{	
		options.series[i] = new Object();
		options.series[i].data=listArray[i].sort(); //对listArray[i]进行排序，否则会造成时间轴上的图错乱
		options.series[i].name=formPoolID(poollist[i]);
		options.series[i].type="line";
	}
	options.series.sort(keysrt("name",false));
	chart = new Highcharts.Chart(options);
	chart.setOptions({
		
	});
}//preH;

//左侧时间列表显示
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


//导出到excel
function export2excel(){
//	var params = $("#exportDataAnalysis").serialize();
//	var filename = $('#downloadFilename').val() ;
//	var downloadPath;
//	if(null==filename || ""==filename){
//		downloadPath = "downloadTemp/DataAnalysis.xls";
//	}else{
//		downloadPath = "downloadTemp/"+filename+".xls";
//	}
//	console.log(downloadPath);
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
	else
	{
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
									if (result.operateSuccess){	
										$('#dataAnalysisbody').datagrid('reload');// 重新加载									
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
				else {		//有冲突
					$.messager.confirm("导入提示",'已存在相关日期的数据，是否继续覆盖导入？',function(r){
						if (r) { //上传文件
							$.ajaxFileUpload({
								url : "importDataAnalysis.action",
								fileElementId:'upload',
								dataType:'json',
								success: function(data, status){
									if (data.operateSuccess){
										$('#dataAnalysisbody').datagrid('reload');// 重新加载/
										$.messager.alert('导入', '导入成功', 'info');
										
									} else {
										$.messager.alert('导入', '导入失败<br><br>'+$('#errMsg').val(), 'warning');
									}
									location.reload();
								},//success
								error:function(data,status){
									console.log("error 上传失败");
									$.messager.alert('导入', '导入失败<br><br>'+$('#errMsg').val(), 'warning');
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