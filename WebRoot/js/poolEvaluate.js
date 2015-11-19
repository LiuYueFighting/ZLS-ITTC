//JQuery的入口
$(function() {
	listPoolEvaluate();
});

//$(document).ready(function() {
//	$('#imageContainer2').click(function() {
//		document.body.style.zoom = 1.5;
//	});
//});

var tburl='searchPoolEvaluate.action'; 
var datalist = new Array();
//加载项目列表
function listPoolEvaluate() {
	$("#poolEvaluatebody").datagrid({
		title:'机加池分析表',
		width : "1050",
		height : "300",
		//iconCls : 'icon-help', // 表格左上角的图标样式
		url : tburl, // 访问服务器的地址，要求返回JSON对象
		rownumbers : true, // 在最前面显示行号
		fitColumns : true, // 自动适应列宽
		striped : true, // 隔行变色
		singleSelect : true, // 每次只选中一行
		loadMsg : '加载项目列表ing……',
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

//添加的函数
function addPoolEvaluate() {
	// 清空原有的数据
	$('#frmEdit').form('clear');
	// 显示添加对话框
	showEditForm();
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

//查询处理
function dealSearch() {
	// 表单数据序列化成一个字符串用&拼接
	var params = $("#frmSearch").serialize();
	console.log(params);
	$.post("searchPoolEvaluate.action", params, function(result) {
		if (result.total!=0) {
			$("#poolEvaluatebody").data().datagrid.cache = null;
			$('#poolEvaluatebody').datagrid('reload');// 重新加载
//			$.messager.alert('查询', '查询成功', 'info');
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


function drawImage(){
	//加药量分析图
	var ImageTitle1="浊度分析图";
	var ImageTitle2="加药量分析图";
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
			//常规图表选项设置
			chart: {
				renderTo: 'imageContainer1',	//在哪个区域呈现
				borderColor: '#FFF',	//边框颜色
					//type: 'spline'          //指定图表的类型，默认是折线图（line）
//				zoomType: 'x',	//图标缩放
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
				printChart: "打印",
				downloadJPEG: "下载JPEG 图片",
				downloadPDF: "下载PDF文档",
				downloadPNG: "下载PNG 图片",
				downloadSVG: "下载SVG 矢量图",
				exportButtonTitle: "导出图片",
				noData: "没有查询到数据",
				resetZoom: "重置"				
			},
			title:{
				text: ImageTitle1,
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

			        	title: {
			        		text: '来水浊度'                  //指定y轴的标题
			        	},
			        	lebels:{
			        		format: '{value*100}%'
			        	},
			        	//添加标示线
			        	plotLines:[
			        	           /*{//第一条标示线	
			        	        	   color:'red',           //线的颜色，定义为红色
			        	        	   dashStyle:'ShortDash',     //默认值，这里定义为实线
			        	        	   value:4.5,               //定义在那个值上显示标示线，这里是在y轴上刻度为3的值处垂直化一条线
			        	        	   width:2,               //标示线的宽度，2px
			        	        	   label:{
			        	        		   text:'高预警线',     //标签的内容
//			        	        		   align:'left',                //标签的水平位置，水平居左,默认是水平居中center
//			        	        		   x:10                         //标签相对于被定位的位置水平偏移的像素，重新定位，水平居左10px
			        	        	   },
			        	        	   zIndex:100, 				//标示线位置，值越大，显示在越前面
			        	           },
			        	           {//第二条标示线	
			        	        	   color:'orange',           //线的颜色，定义为红色
			        	        	   dashStyle:'ShortDash',     //默认值，这里定义为实线
			        	        	   value:2.5,               //定义在那个值上显示标示线，这里是在y轴上刻度为0.5的值处垂直化一条线
			        	        	   width:2,               //标示线的宽度，2px
			        	        	   label:{
			        	        		   text:'低预警线',     //标签的内容
			        	        	   },
			        	        	   zIndex:100, 			//标示线位置，值越大，显示在越前面
			        	           }*/]
			        },
			        {	//第二个Y坐标

			        	title: {
			        		text: '出水浊度'                  //指定y轴的标题
			        	},

			        	opposite:true,
			        },
			        
			        ],
			        //鼠标移动时显示的数据
			        tooltip: {
			        	enabled: true,
			        	shared: true,
//			        	formatter: function() {
//			        		return ' 日期： ' +Highcharts.dateFormat('%Y-%m-%d <br>',this.x)
//			        		+' <br> FeCl3投加量：  ' 		+ this.y*100 +'%';
//			        	}
			        },
			        //显示数据
			        plotOptions: {
			        	/*line: {
			        		dataLabels: {
			        			enabled: true,
			        			formatter: function() {
			        				return this.y;
			        			} 
			        		},
			        		enableMouseTracking: true,
			        	}, */
			        },
			        legend: {
			        	enabled: true,	//显示图例	
			        	layout:"vertical",
			        	align: 'right', //水平方向位置
			        	verticalAlign: 'top', //垂直方向位置
			        	x:0,
			        	y:100		            	            
			        },
			        credits:false,	//不显示图表版权信息
			        //指定数据列
			        series: []
	}//options1
	
	options2 = {
			//常规图表选项设置
			chart: {
				renderTo: 'imageContainer2',	//在哪个区域呈现
				borderColor: '#FFF',	//边框颜色
//					zoomType: 'x',	//图标缩放
			},
			lang:{					
				printChart: "打印",
				downloadJPEG: "下载JPEG 图片",
				downloadPDF: "下载PDF文档",
				downloadPNG: "下载PNG 图片",
				downloadSVG: "下载SVG 矢量图",
				exportButtonTitle: "导出图片",
				noData: "没有查询到数据",
				resetZoom:"重置",				
			},
			title:{
				text: ImageTitle2,
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
			        	title: {
			        		text: 'PAC投加量'                  //指定y轴的标题
			        	},
			        	lebels:{
			        		format: '{value*100}%'
			        	},
			        	//添加标示线
			        	plotLines:[
			        	           /*{//第一条标示线	
			        	        	   color:'red',           //线的颜色，定义为红色
			        	        	   dashStyle:'ShortDash',     //默认值，这里定义为实线
			        	        	   value:4.5,               //定义在那个值上显示标示线，这里是在y轴上刻度为3的值处垂直化一条线
			        	        	   width:2,               //标示线的宽度，2px
			        	        	   label:{
			        	        		   text:'高预警线',     //标签的内容
//			        	        		   align:'left',                //标签的水平位置，水平居左,默认是水平居中center
//			        	        		   x:10                         //标签相对于被定位的位置水平偏移的像素，重新定位，水平居左10px
			        	        	   },
			        	        	   zIndex:100, 				//标示线位置，值越大，显示在越前面
			        	           },
			        	           {//第二条标示线	
			        	        	   color:'orange',           //线的颜色，定义为红色
			        	        	   dashStyle:'ShortDash',     //默认值，这里定义为实线
			        	        	   value:2.5,               //定义在那个值上显示标示线，这里是在y轴上刻度为0.5的值处垂直化一条线
			        	        	   width:2,               //标示线的宽度，2px
			        	        	   label:{
			        	        		   text:'低预警线',     //标签的内容
			        	        	   },
			        	        	   zIndex:100, 			//标示线位置，值越大，显示在越前面
			        	           }*/]
			        },
			        {	//第二个Y坐标

			        	title: {
			        		text: 'FeCl3投加量'                  //指定y轴的标题
			        	},

			        	opposite:true,
			        },
			        ],
			        //鼠标移动时显示的数据
			        tooltip: {
			        	enabled: true,
			        	shared: true,
//			        	formatter: function() {
//			        		return ' 日期： ' +Highcharts.dateFormat('%Y-%m-%d <br>',this.x)
//			        		+' <br> '+ this.y*100 +'%';
//			        	}
			        },
			        //显示数据
			       /* plotOptions: {
			        	line: {
			        		dataLabels: {
			        			enabled: true,
			        			formatter: function() {
			        				return this.y;
			        			} 
			        		},
			        		enableMouseTracking: true,
			        	}, 
			        },*/
			        legend: {
			        	enabled: true,	//显示图例	
			        	layout:"vertical",
			        	align: 'right', //水平方向位置
			        	verticalAlign: 'top', //垂直方向位置
			        	x:0,
			        	y:100		            	            
			        },
			        credits:false,	//不显示图表版权信息
			        //指定数据列
			        series: []
	}//options2
	
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
	chart1 = new Highcharts.Chart(options1);
	chart2 = new Highcharts.Chart(options2);
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
		onDblClick:function(node){
			var pnode=$('#timeTree').tree('getParent',node.target);
			var out=node.text;
			while(pnode.text!="时间列表"){
				out=pnode.text+out;
				pnode=$('#timeTree').tree('getParent',pnode.target);	
			}
			if($('#timeTree').tree('isLeaf',node.target)){	//是根节点
				out=out.replace("年",'-'); out=out.replace("月",'-'); out=out.replace("日",'');
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

