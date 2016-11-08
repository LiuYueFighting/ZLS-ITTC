function generateSchema(schemaName) {
    // 防御式编程，完整性检验
    checkCompleteness();

    this.schemaName     = schemaName;

    this.schemaDict     = mockdata[schemaName];
    this.valveGroup     = mockdata[schemaName].valveGroup;
    this.schemaContext  = mockdata[schemaName].schemaContext;

    this.schemaType 	= this.schemaName.split(/[\,_-]+/)[0];
    this.schemaTarget   = this.schemaName.split(/[\,_-]+/)[1];

    resetAll();
    hideAllValves();
    setValvesColor();
    setPanelInfo();
    setPanelButton();
    $(".hiden").show();

    function checkCompleteness() {
        // todo 访问不存在的属性时会报错
        try {
            if(!schemaName) {
                throw "找不到方案名称";
            } else if (!mockdata[schemaName].valveGroup) {
                throw "找不到阀门组";
            } else if (!mockdata[schemaName].schemaContext) {
                throw "找不到方案内容";
            }
        } catch (err) {
            console.warn("加载数据错误：" + err);
        } // try-catch

    } // checkCompleteness

    function setValvesColor() {
        var ids     = this.valveGroup,
            length  = this.valveGroup.length,
            type    = this.schemaType,
            i 		= 0;

        for(; i<length; i++) {
            setValveColor(ids[i], type);
        }
    } // setValvesColor

    function setValveColor(id, type) {

        // 获取阀门及对应标签的对象
        var id = "FM0" + id,
            valveSrc = "",
            valveTagId = "W" + id,
            valveTagIdSelector = "#" + valveTagId,
            buildingTagId = "#name_" + this.schemaTarget.toUpperCase(),
            image = document.getElementById(id),
            tag = document.getElementById(valveTagId);

        if (type === "fix") {
            valveSrc = "image/y3-35x37.png"
        } else {
            valveSrc = "image/y2-35x37.png"
        }

        // 强制显示阀门及对应标签
        image.style.display = "block";
        tag.style.display = "block";
        image.src = valveSrc;
        $(valveTagIdSelector).addClass("FMStyle");

        // $(buildingTagId).css({'color':'#8dd9ff', 'background-color':'rgba(255,0,0,0.7)'});
        $(buildingTagId).addClass("selected-building-tag");
    } // setValveColor

    function setPanelInfo() {
        // Pay attention to avoid 'this.schemaDict[schemaName] because of name conflict'
        $("#fix_head").html(this.schemaDict.schemaName);

        var schemaContext = this.schemaContext,
            length = schemaContext.length,
            i = 0,
            offset = null;

        for (; i < length; i++) {
            offset = i + 1;

            $("#step_" + offset).html(schemaContext[i].content);
            $("#step_" + offset + "_result").html(schemaContext[i].result);
        }

        $("#init_stat").html(this.schemaDict.status);
        $("#init_state").text("状态");
    } // setPanelInfo

    function setPanelButton() {
        document.getElementById("export").href = this.schemaDict.schemaDownload;
    } // setPanelButton

} // generateSchema

function AnimationQueueFactory(qn) {
    this._color = 'rgba(194,215,245,0.5)';  // default color
    this._queueName = qn || 'empty_queue';
    this._queueArr = [];
    this.arr = [];
    this.delays = [];
    // todo 封装timer
    // this.timer = null;
}

AnimationQueueFactory.prototype = {

    constructor: AnimationQueueFactory,

    // start animation
    play: function (queueArr) {
        var qn = this._queueName,
            qArr = queueArr || this._queueArr;

        $(document).queue(qn, qArr);
        $(document).dequeue(qn);
    },

    /*
     * 维修阀门时，初始阀门满状态
     * 恢复阀门时，初始阀门空状态
     */
    beforeCreateQueue: function () {
        var qn = this._queueName,
            arr = this.arr,
            i = 0,
            item = null,
            wfs = null; // wfs: water flow state

        if(qn.indexOf("restore")>-1) {
            wfs = 0;
        } else {
            wfs = 1;
        }

        for(;i<arr.length;i++) {
            item = arr[i];
            if(typeof item !== "string") {
                if(item.constructor === Array) {
                    for(var k=0; k<item.length; k++) {
                        item[k].state = wfs;
                    }
                    k = null;
                } else {
                    item.state = wfs;
                }
            }
        }

        // clearQueue if exists
        // console.log($(document).queue(qn));
        // $(document).clearQueue(qn);
        // console.log($(document).queue(qn));
    },

    /*
     * 绑定回放函数
     */
    afterCreateQueue: function() {
        var arr = this.arr,
            i = 0,
            item = null,
            re = /#step_(\d+)/i,
            match = null,
            idx = 0,
            that = this;

        for(;i<arr.length;i++) {
            item = arr[i];
            if(typeof item === "string") {
                match = re.exec(item);
                if(!!match) {
                    idx = arr.indexOf(item);
                    // console.log(idx);
                    (function(i){
                        $(item).click(function(){
                            that.playback(i);
                        });
                    })(idx);
                }
            }
        }

    },
    /*
     * 核心逻辑
     */
    createQueue: function (arr, delays) {
        this.arr = arr;
        var funcs = arr,
            len = arr.length,
            d = delays || 0,
            qn = this._queueName,   // fix or restore
            c = this._color,
            that = this,
            changeValveColor,
            msg,
            wfs,                    // water flow state
            lowerCase,
            i;

        that.arr = arr;
        that.delays = delays;

        this.beforeCreateQueue();

        if (qn.substr(0, 3) == 'fix') {
            msg = 'drain';
            wfs = 2;
            changeValveColor = that.setValveColorRed;
        } else {
            msg = 'overflow';
            wfs = 3;
            changeValveColor = that.setValveColorGreen;
        }

        for (i = 0; i < len; i++) {
            if (funcs[i].constructor === String) {
                lowerCase = funcs[i].toLowerCase();
                if (lowerCase.substr(0, 5) === '#step') {
                    this._queueArr[i] = (function (j) {
                        return function () {
                            that.setStepBackgroundColor(funcs[j], c);

                            if (d.constructor === Array) {
                                window.timer = setTimeout(function () {
                                    $(document).dequeue(qn);
                                }, d[j]);
                            } else {
                                window.timer = setTimeout(function () {
                                    $(document).dequeue(qn);
                                }, d);
                            }
                        };
                    })(i);
                } else if (lowerCase.substr(0, 2) === 'fm') {
                    this._queueArr[i] = (function (j) {
                        return function () {
                            changeValveColor(funcs[j]);

                            if (d.constructor === Array) {
                                window.timer = setTimeout(function () {
                                    $(document).dequeue(qn);
                                }, d[j]);
                            } else {
                                window.timer = setTimeout(function () {
                                    $(document).dequeue(qn);
                                }, d);
                            }
                        };
                    })(i);
                }
            } else if(funcs[i].constructor === Array) {
                this._queueArr[i] = (function (j) {
                    return function () {
                        var len = funcs[j].length,
                            k   = 0;
                        for(; k<len; k++) {
                            funcs[j][k].state = wfs;
                        }
                        k = 0;
                        $(document).off(msg);
                        $(document).on(msg, function () {
                            k ++;
                            if(k === len) {

                                if (d.constructor === Array) {
                                    window.timer = setTimeout(function () {
                                        $(document).dequeue(qn);
                                    }, d[j]);
                                } else {
                                    window.timer = setTimeout(function () {
                                        $(document).dequeue(qn);
                                    }, d);
                                }
                            }
                        });
                    };
                })(i);
            } else {
                this._queueArr[i] = (function (j) {
                    return function () {
                        funcs[j].state = wfs;
                        $(document).off(msg);
                        $(document).on(msg, function () {
                            window.timer = setTimeout(function () {
                                $(document).dequeue(qn);
                            }, d[j]);
                        });
                    };
                })(i);
            }
        }

        this.afterCreateQueue();
    },

    playback: function (playbackIndex) {
        var qn = this._queueName,
            tempArr = this._queueArr.slice(0), // 深拷贝
            funcs = this.arr,
            len = funcs.length,
            idx = playbackIndex || 0, // 默认从头开始播放
            c = this._color,
            d = this.delays,
            that = this,
            wfs,
            changeValveColor,
            lowerCase,
            i,item;

        // Before the start of animation,reset all animation
        clearTimeout(window.timer);
        $(document).off('drain');
        $(document).off('overflow');
        $(".table_content").css("background-color", "#ffffff");

        if (qn.substr(0, 3) == 'fix') {
            wfs = 1;
            changeValveColor = that.setValveColorGreen;
        } else {
            wfs = 0;
            changeValveColor = that.setValveColorRed;
        }

        for (i = 0; i < len; i++) {
            item = funcs[i];
            if (item.constructor === String && item.toLowerCase().substr(0, 2) === 'fm') {
                changeValveColor(item);
            } else if (typeof item !== "string") {
                if(item.constructor === Array) {
                    for(var k=0; k<item.length; k++) {
                        item[k].state = wfs;
                    }
                    k = null;
                } else {
                    item.state = wfs;
                }
            }
        }

        if (qn.substr(0, 3) == 'fix') {
            wfs = 0;
            changeValveColor = that.setValveColorRed;
        } else {
            wfs = 1;
            changeValveColor = that.setValveColorGreen;
        }

        for (i = 0; i < idx; i++) {
            if (funcs[i].constructor === String) {
                lowerCase = funcs[i].toLowerCase();
                if (lowerCase.substr(0, 5) === '#step') {
                    tempArr[i] = (function (j) {
                        return function () {
                            that.setStepBackgroundColor(funcs[j], c);
                            $(document).dequeue(qn);

                        };
                    })(i);
                } else if (lowerCase.substr(0, 2) === 'fm') {
                    tempArr[i] = (function (j) {
                        return function () {
                            changeValveColor(funcs[j]);
                            $(document).dequeue(qn);
                        };
                    })(i);
                }
            } else if(funcs[i].constructor === Array) {
                tempArr[i] = (function (j) {
                    return function () {
                        var len = funcs[j].length,
                            k   = 0;
                        for(; k<len; k++) {
                            funcs[j][k].state = wfs;
                        }
                        $(document).dequeue(qn);
                    };
                })(i);
            } else {
                tempArr[i] = (function (j) {
                    return function () {
                        funcs[j].state = wfs;
                        $(document).dequeue(qn);
                    };
                })(i);
            }
        }

        item = null;
        this.play(tempArr);
    },

    // clearCurrentTimer: function() {
    //     clearTimeout(this.timer);
    // },

    // getters & setters
    getQueueName: function () {
        return this._queueName;
    },

    getColor: function () {
        return this._color;
    },

    setColor: function (bgColor) {
        this._color = bgColor;
    },

    setDelayGroup: function (delayGroup) {
        this._delayGroup = delayGroup;
    },

    setStepBackgroundColor: function (stepName, bgColor) {
        $(stepName).css('background', bgColor);
        $(stepName + '_result').css('background', bgColor);
    },

    setValveColorRed: function (id) {
        var image = document.getElementById(id);
        var valveTagId = "W" + id;
        var tag = document.getElementById(valveTagId);

        image.style.display = "block" ;
        tag.style.display = "block";
        image.src = "image/y2-35x37.png";
    },

    setValveColorGreen: function (id) {
        var image = document.getElementById(id);
        var valveTagId = "W" + id;
        var tag = document.getElementById(valveTagId);

        image.style.display = "block";
        tag.style.display = "block";
        image.src = "image/y3-35x37.png";
    }
};

// 公共函数
// common function
function resetAll() {
    resetAnimation();
    resetStaticInfo();
}

function resetStaticInfo() {
    // main content

    // 恢复构筑物及其标签的颜色
    $(".name_ob").removeClass('selected-building-tag');
    $(".name_ob").attr("style", "color:#283a45;");
    $(".name_ob").attr("style", "background:transparent;");

    // 恢复阀门的默认颜色
    $(".fm_default_green").attr("src", "image/y3-35x37.png");
    $(".fm_default_red").attr("src", "image/y2-35x37.png");

    // 只显示重要的阀门和标签
    $(".fm_default_hide").attr("style", "display:none;");
    $(".fm_default_green").attr("style", "display:block;");
    $(".fm_default_red").attr("style", "display:block;");
    $(".fm_tag").removeClass("FMStyle");

    // sidebar content

    
    //隐藏表格面板
    $(".hiden").hide();

    // 重置内容面板的功能和颜色
    $(".table_content").css("background-color", "#ffffff");
    $('.table_content').unbind();
    // 清空 sidebar 单元格的内容
    for (var i = 1; i < 7; i++) {
        $("#step_" + i).text("");
        $("#step_" + i + "_result").text("");
    }
    i = null;

    //重置面板提示的内容
    $("#fix_head").text("请点击需要维修的构筑物");
    $("#init_state").text("初始状态");
    $('#init_stat').text('全厂正常运行');

    // $("#export").text("");
    // $("#reset").text("");
    // showPanelButton

    // 解除功能面板的函数绑定
    // $("#fix_scheme").unbind();
    // $("#restore_scheme").unbind();
    // $("#extra_fix_scheme").unbind();
    // $("#extra_restore_scheme").unbind();

    $("#export").attr("href","#");
}

function showPanelButton() {
    $('#panel_button').toggle();
}

function resetAnimation() {

    // $(document).clearQueue();
    if(!!window.timer) {
        clearTimeout(window.timer);
    }
    $(document).off('drain');
    $(document).off('overflow');

    var pipes = [GD1001, GD11, GD37, GD26, GD27, GD30, GD141],
        ban = [9, 10, 19, 26, 29, 32],
        i = 0;

    // ensure close these first
    var mockdataKeys = Object.keys(mockdata),
        len = mockdataKeys.length;
    for(i=0;i<len;i++) {
        $(document).clearQueue(mockdataKeys[i] + "_queue");
    }

    for (i=0;i<pipes.length;i++) {
        pipes[i].state = 1;
    }

    for (i=2; i<36; i++) {
        if (ban.indexOf(i)>-1) {
            continue;
        }
        canvas.children[i].fill = color_GD;
    }

    for (i=36; i<40; i++) {
        canvas.children[i].fill = "rgba(0,0,0,0)";
    }

}

function hideAllValves() {
    //隐藏所有阀门（包括阀门对应的标签）
    $(".fm_default_green").attr("style", "display:none;");
    $(".fm_default_red").attr("style", "display:none;");
    $(".fm_default_hide").attr("style", "display:none;");
}

/*
 * 单元测试方法
 * 测试用例待完善
 */
function unittest() {
	var schema = new SchemaFactory("fix_hx_right");

	console.assert(schema.schemaName === "fix_hx_right", "wrong schema name");
	console.assert(schema.schemaType === "fix", "wrong schema type");
	console.assert(schema.schemaTarget === "hx", "wrong schema target");

}

// todo 全局变量待封装
var canvas = null,
	bg = null,
	color_GD,
	// todo: array
	GD01 = null,
	GD0101 = null,
	GD02 = null,
	GD03 = null,
	GD04 = null,
	GD05 = null,
	GD06 = null,
	GD07 = null,
	GD08,
	GD09,
	GD10,
	GD1001,
	GD1002,
	GD11,GD12,GD1201,GD13,GD141,GD15,GD1501,
	GD16,GD17,GD18,GD19,GD20,GD21,GD22,GD23,GD24,GD25,GD26,GD27,
	GD28,GD29,GD30,GD31,GD32,GD33,GD34,GD35,GD36,GD37,GD1500;

// canvas 
oCanvas.domReady(function () {

  canvas = oCanvas.create({
    canvas: "#canvas_fix",
    background: "#eeeeed",
    fps: 35
  });

  var bg = canvas.display.image({
    x: 130,
    y: -13,
    image: "image/fix.png"
  });
  canvas.addChild(bg);//1

    color_GD = "#007fff";
  var speed_all = 1.5,
    speed_GD = 2,
    width_all = 16,
    
    color_GD_new = "blue",
    lineHeight_all = 10;

  GD01 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 707, y_cell: 96},
      {x_cell: 707, y_cell: 150}
    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: color_GD
  });//1 取水泵房
  GD0101 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 707, y_cell: 160},//160
      {x_cell: 707, y_cell: 223},
      {x_cell: 769, y_cell: 261},
      {x_cell: 989, y_cell: 261},
      {x_cell: 989, y_cell: 355}
    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: color_GD
  });//2
  GD02 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 747, y_cell: 98},
      {x_cell: 747, y_cell: 222},
      {x_cell: 775, y_cell: 240},
      {x_cell: 1019, y_cell: 240},
      {x_cell: 1019, y_cell: 260},
      {x_cell: 1039, y_cell: 260}
    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: color_GD
  });//3 #10-#65
  GD03 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 1019, y_cell: 256},
      {x_cell: 1019, y_cell: 355}
    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: color_GD
  });//4
  GD04 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 1039, y_cell: 261},
      {x_cell: 1188, y_cell: 261},
      {x_cell: 1188, y_cell: 498}
    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: color_GD
  });//5 #65-新混合井
  GD05 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 989, y_cell: 365},
      {x_cell: 989, y_cell: 411},
      {x_cell: 955, y_cell: 411}
    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: color_GD
  });//6 旧混合井-1#机加池
  GD06 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 1019, y_cell: 360},
      {x_cell: 1019, y_cell: 411},
      {x_cell: 1058, y_cell: 411}
    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: color_GD
  });//7 旧混合井-2#机加池
  GD07 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 1187, y_cell: 498},
      {x_cell: 1187, y_cell: 573}
    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: color_GD
  });//8 新混合井-3#机加池
  GD08 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 897, y_cell: 445},
      {x_cell: 897, y_cell: 485},
      {x_cell: 793, y_cell: 485},
      {x_cell: 793, y_cell: 542},
      {x_cell: 818, y_cell: 542}
    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: "rgba(26,215,255,0)"
  });//9
  GD09 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 897, y_cell: 445},
      {x_cell: 897, y_cell: 485},
      {x_cell: 793, y_cell: 485},
      {x_cell: 793, y_cell: 562},
      {x_cell: 818, y_cell: 562}
    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: "rgba(26,215,255,0)"
  });//10
  GD10 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 1109, y_cell: 445},
      {x_cell: 1109, y_cell: 485},
      {x_cell: 990, y_cell: 485},
      {x_cell: 990, y_cell: 527}
    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: color_GD
  });//11 2#机加池-#15
  GD1001 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 990, y_cell: 485},
      {x_cell: 990, y_cell: 543},
      {x_cell: 970, y_cell: 543}
    ],
    state: 1,
    speed: 1.5,
    GDwidth: width_all,
    color: color_GD
  });//12 #16-虹吸滤池 上
  GD1002 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 990, y_cell: 485},
      {x_cell: 900, y_cell: 485}
    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: color_GD
  });//13 #15-#45？
  GD11 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 990, y_cell: 485},
      {x_cell: 990, y_cell: 563},
      {x_cell: 970, y_cell: 563}
    ],
    state: 1,
    speed: 1.5,
    GDwidth: width_all,
    color: color_GD
  });//14 #16-虹吸滤池 下
  GD12 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 1129, y_cell: 653},
      {x_cell: 1019, y_cell: 653}
    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: color_GD
  });//15 3#机加池-V滤
  
  GD13 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 848, y_cell: 570},
      {x_cell: 848, y_cell: 605},
      {x_cell: 659, y_cell: 605},
      {x_cell: 659, y_cell: 646}
    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: color_GD
  });//16 #17-臭氧接触池

  GD141 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 879, y_cell: 633},
      {x_cell: 714, y_cell: 633}
    ],
    state: 1,
    speed: speed_GD * 1.1,
    GDwidth: width_all,
    color: color_GD
  });//17 #19-#20

 	GD15 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 808, y_cell: 711},
      {x_cell: 768, y_cell: 711}
    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: color_GD
  });//18
 	
  GD1501 = createGD1({
    parent: canvas,
    cells: [
		{x_cell: 717, y_cell: 633},
		{x_cell: 633, y_cell: 633},
		{x_cell: 633, y_cell: 646}
    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: color_GD
  });//19
  GD16 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 615, y_cell: 673},
      {x_cell: 582, y_cell: 673}
    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: color_GD
  });//20 #59
  GD17 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 676, y_cell: 697},
      {x_cell: 676, y_cell: 736},
      {x_cell: 435, y_cell: 736},
      {x_cell: 435, y_cell: 691}
    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: color_GD
  });//21 #57-#1碳滤池
  GD18 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 414, y_cell: 657},
      {x_cell: 414, y_cell: 568}
    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: color_GD
  });//22 #44-3#清水池
  GD19 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 540, y_cell: 654},
      {x_cell: 540, y_cell: 605},
      {x_cell: 414, y_cell: 605},
      {x_cell: 414, y_cell: 563}
    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: color_GD
  });//23 #44-#55
  GD20 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 403, y_cell: 485},
      {x_cell: 372, y_cell: 485}
    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: color_GD
  });//24
  GD21 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 308, y_cell: 435},
      {x_cell: 308, y_cell: 403},
      {x_cell: 407, y_cell: 403},
      {x_cell: 407, y_cell: 376}
    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: color_GD
  });//25 3#清水池-1#清水池
  GD22 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 707, y_cell: 96},
      {x_cell: 707, y_cell: 223},
      {x_cell: 769, y_cell: 261},
      {x_cell: 989, y_cell: 261},
      {x_cell: 989, y_cell: 297},
      {x_cell: 1018, y_cell: 297},
      {x_cell: 1018, y_cell: 349}
    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: "rgba(1,0,0,0)"
  });//26

  GD23 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 422, y_cell: 435},
      {x_cell: 422, y_cell: 403},
      {x_cell: 464, y_cell: 403},
      {x_cell: 464, y_cell: 435}
    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: color_GD
  });//27
  GD24 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 527, y_cell: 439},
      {x_cell: 527, y_cell: 403},
      {x_cell: 593, y_cell: 403},
      {x_cell: 593, y_cell: 375}
    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: color_GD
  });//28

  GD25 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 747, y_cell: 98},
      {x_cell: 747, y_cell: 222}
    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: color_GD
  });//29

  GD26 = createGD1({
    parent: canvas,
    cells: [
      //{x_cell: 896 ,y_cell: 445},
      {x_cell: 832, y_cell: 485},
      {x_cell: 793, y_cell: 485},
      {x_cell: 793, y_cell: 541},
      {x_cell: 818, y_cell: 541}
    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: color_GD
  });//30
  GD27 = createGD1({
    parent: canvas,
    cells: [
      //{x_cell: 896 ,y_cell: 445},
      {x_cell: 832, y_cell: 485},
      {x_cell: 793, y_cell: 485},
      {x_cell: 793, y_cell: 562},
      {x_cell: 818, y_cell: 562}
    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: color_GD
  });//31
  GD28 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 707, y_cell: 160},//160
      {x_cell: 707, y_cell: 223}
    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: color_GD
  });//32
  GD29 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 897, y_cell: 445},
      {x_cell: 897, y_cell: 485},
      {x_cell: 832, y_cell: 485}

    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: color_GD
  });//33

  GD30 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 881, y_cell: 570},
      {x_cell: 881, y_cell: 635},
    ],
    state: 1,
    speed: speed_GD * 0.5,
    GDwidth: width_all,
    color: color_GD
  });//34
  GD31 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 707, y_cell: 160},//160
      {x_cell: 707, y_cell: 223},
      {x_cell: 765, y_cell: 258},
      {x_cell: 989, y_cell: 258},
      {x_cell: 989, y_cell: 298},
      {x_cell: 1019, y_cell: 298},
      {x_cell: 1019, y_cell: 348}
    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: color_GD
  });//35
  GD32 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 1019, y_cell: 298},
      {x_cell: 1019, y_cell: 258}
    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: "rgba(26,215,255,0)"
  });//36
  GD33 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 1019, y_cell: 298},
      {x_cell: 989, y_cell: 298},
      {x_cell: 989, y_cell: 348}
    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: "rgba(26,215,255,0)"
  });//37
  GD34 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 1124, y_cell: 650},
      {x_cell: 1023, y_cell: 650},
      {x_cell: 1023, y_cell: 482}
      //{x_cell: 1023, y_cell: 650}
    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: "rgba(26,215,255,0)"
  });//38
  GD35 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 421, y_cell: 433},
      {x_cell: 421, y_cell: 401},
      {x_cell: 592, y_cell: 401},
      {x_cell: 592, y_cell: 375}
    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: "rgba(26,215,255,0)"
  });//39
  GD36 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 885, y_cell: 605},
      {x_cell: 848, y_cell: 605}
    ],
    state: 1,
    speed: speed_GD,
    GDwidth: width_all,
    color: color_GD

  });//40
  GD37 = createGD1({
    parent: canvas,
    cells: [
      {x_cell: 848, y_cell: 560},
      {x_cell: 848, y_cell: 570}
    ],
    state: 1,
    speed: speed_GD * 0.07,
    GDwidth: width_all,
    color: color_GD
  });
  GD1500 = createGD1({
	    parent: canvas,
	    cells: [
	      {x_cell: 768, y_cell: 711},
	      {x_cell: 717, y_cell: 711},
	      {x_cell: 717, y_cell: 633}
	    ],
	    state: 1,
	    speed: speed_GD,
	    GDwidth: width_all,
	    color: color_GD
	  });//18
  GD1201 = createGD1({
	    parent: canvas,
	    cells: [
	      {x_cell: 1019, y_cell: 653},
	      {x_cell: 962, y_cell: 653},
	      {x_cell: 962, y_cell: 667}
	    ],
	    state: 1,
	    speed: speed_GD,
	    GDwidth: width_all,
	    color: color_GD
	  });//15 3#机加池-V滤
//  GD2901 = createGD1({
//	    parent: canvas,
//	    cells: [	      
//	      {x_cell: 902, y_cell: 485},
//	      {x_cell: 832, y_cell: 485}
//
//	    ],
//	    state: 1,
//	    speed: speed_GD,
//	    GDwidth: width_all,
//	    color: color_GD
//	  });//33

  var img1 = canvas.display.image({
    x: 692,
    y: 58,
    image: "image/main/qs.png"
  });
  canvas.addChild(img1);

  var img11 = canvas.display.image({
    x: 678,
    y: 141,
    image: "image/main/qs2.png"
  });
  canvas.addChild(img11);

  var img2 = canvas.display.image({
    x: 839,
    y: 342,
    image: "image/main/5.png"
  });
  canvas.addChild(img2);

  var img21 = img2.clone({
    x: 1049,
    y: 340
  });
  canvas.addChild(img21);

  var img22 = img2.clone({
    x: 1127,
    y: 573
  });
  canvas.addChild(img22);

  var img3 = canvas.display.image({
    x: 847,
    y: 665,
    image: "image/main/6.png"
  });
  canvas.addChild(img3);

  var img4 = canvas.display.image({
    x: 967,
    y: 352,
    image: "image/main/hhj.png"
  });
  canvas.addChild(img4);

  var img41 = canvas.display.image({
    x: 1179,
    y: 381,
    image: "image/main/hhj2.png"
  });
  canvas.addChild(img41);

  var img5 = canvas.display.image({
    x: 810,
    y: 529,
    image: "image/main/hx.png"
  });
  canvas.addChild(img5);
  img5.bind("mouseenter", function () {
    canvas.mouse.cursor("pointer");
    this.shadow = "0 0 10px #eee";
  }).bind("mouseleave", function () {
    this.shadow = "0 0 0px #eee";
    canvas.mouse.cursor("default");
  });



    // todo loop these
    var clickBinder = {
        "#name_HX" : {
            "structureName" : "虹吸滤池",
            "schemes" : {
                "西侧阀门维修" : {
                    "schemeName" : "fix_hx_left",
                    "elements" : ['#step_1','FM014',[GD26, GD27],'#step_2', 'FM017',
                        '#step_3', GD30, '#step_4', '#step_5', 'FM019', '#step_6', GD141],
                    "delayGroup" : [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000]
                },

                "西侧阀门恢复" : {
                    "schemeName" : "restore_hx_left",
                    "elements" : ['FM019', '#step_1','#step_2', '#step_3','FM017',
                        '#step_4', '#step_5', 'FM014', '#step_6', [GD26, GD27], GD30, GD141],
                    "delayGroup" : [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000]
                },

                "东侧阀门维修" : {
                    "schemeName" : "fix_hx_right",
                    "elements" : ['#step_1','FM016',[GD11, GD1001],'#step_2', 'FM018',
                        '#step_3', GD30, '#step_4', '#step_5', 'FM019', '#step_6', GD141],
                    "delayGroup" : [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000]
                },

                "东侧阀门恢复" : {
                    "schemeName" : "restore_hx_right",
                    "elements" : ['FM019','#step_1','#step_2', '#step_3','FM018',
                        '#step_4', '#step_5', 'FM016', '#step_6', [GD1001, GD11], GD30, GD141],
                    "delayGroup" : [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000]
                }
            }

        },

        "#name_TC" : {
            "structureName" : "1#炭池",
            "schemes" : {
                "1#炭池维修" : {
                    "schemeName" : "fix_tc",
                    "elements" : ['#step_1','FM056','#step_2','FM057', GD17,'#step_3','FM044', GD18],
                    "delayGroup" : [1000, 1000, 1000, 500, 1000, 1000, 500]
                },

                "1#炭池恢复" : {
                    "schemeName" : "restore_tc",
                    "elements" : ['#step_1','FM044', '#step_2','FM057', GD17, GD18,'#step_3'],
                    "delayGroup" : [1000, 1000, 1000, 500, 500, 1000]
                }
            }

        },

        "#name_TC1" : {
            "structureName" : "2#炭池",
            "schemes" : {
                "2#炭池维修" : {
                    "schemeName" : "fix_tc1",
                    "elements"   : ['#step_1','FM059', GD16,'#step_2','FM055',GD19],
                    "delayGroup" : [1000, 1000, 1000, 1000, 500]
                },

                "2#炭池恢复" : {
                    "schemeName" : "restore_tc1",
                    "elements"   : ['#step_1','FM055','#step_2','FM059', GD16, GD19],
                    "delayGroup" : [1000, 1000, 1000, 1000, 500]
                }
            }

        },

        "#name_VL" : {
            "structureName" : "V型滤池",
            "schemes" : {
                "V型滤池维修" : {
                    "schemeName" : "fix_vl",
                    "elements"   : ['#step_1','FM068', '#step_2','FM067', GD1201,'#step_3',GD15, 'FM052',GD1500],
                    "delayGroup" : [1000, 1000, 1000, 500, 1000, 500,1000,500]
                },

                "V型滤池恢复" : {
                    "schemeName" : "restore_vl",
                    "elements"   : ['#step_1', 'FM052','#step_2', 'FM067','#step_3', GD1201, GD15, GD1500],
                    "delayGroup" : [1000, 1000, 1000, 1000, 500, 500, 100]
                }
            }

        },

        "#name_JJC1" : {
            "structureName" : "1#机加池",
            "schemes" : {
                "1#机加池维修" : {
                    "schemeName" : "fix_jjc1",
                    "elements"   : ['#step_1', 'FM062'],
                    "delayGroup" : [1000, 1000]
                },

                "1#机加池恢复" : {
                    "schemeName" : "restore_jjc1",
                    "elements"   : ['#step_1', 'FM062'],
                    "delayGroup" : [1000, 1000]
                }
            }

        },

        "#name_JJC2" : {
            "structureName" : "2#机加池",
            "schemes" : {
                "2#机加池维修" : {
                    "schemeName" : "fix_jjc2",
                    "elements"   : ['#step_1', 'FM062'],
                    "delayGroup" : [1000, 1000]
                },

                "2#机加池恢复" : {
                    "schemeName" : "restore_jjc2",
                    "elements"   : ['#step_1', 'FM062'],
                    "delayGroup" : [1000, 1000]
                }
            }

        },

        "#name_JJC3" : {
            "structureName" : "3#机加池",
            "schemes" : {
                "3#机加池维修" : {
                    "schemeName" : "fix_jjc3",
                    "elements"   : ['#step_1', 'FM065', GD04, '#step_2', 'FM066', GD07, GD12, GD1201, GD15, GD1500],
                    "delayGroup" : [1000, 1000, 500, 1000, 1000, 500, 0, 500, 0]
                },

                "3#机加池恢复" : {
                    "schemeName" : "restore_jjc3",
                    "elements"   : ['#step_1', '#step_2', 'FM065', 'FM066', GD04, GD07, GD12, GD1201, GD15, GD1500],
                    "delayGroup" : [1000, 1000, 1000, 1000, 500, 500, 0, 500, 0]
                }
            }

        }

    };

    var structureCount = Object.keys(clickBinder).length,
        i = 0;

    for(;i<structureCount;i++) {
        (function(j){

            var structureItem = Object.keys(clickBinder)[j];
            console.log(structureItem); // normal
            $(structureItem).click(function() {
                var schemes = clickBinder[structureItem]["schemes"],
                    len     = Object.keys(schemes).length,     // json vs map??
                    ids     = [],
                    i       = 0;
                resetAll();

                if(len === 4) {
                    ids = ['#fix_scheme', '#restore_scheme', '#extra_fix_scheme', '#extra_restore_scheme'];
                    $(ids[2])[0].style.display = 'block';
                    $(ids[3])[0].style.display = 'block';
                } else if (len === 2) {
                    ids = ['#fix_scheme', '#restore_scheme'];
                    $('#extra_restore_scheme')[0].style.display = 'none';
                    $('#extra_fix_scheme')[0].style.display = 'none';
                }

                for(;i<ids.length;i++) {
                    $(ids[i]).text(Object.keys(schemes)[i]);
                }

                $.messager.confirm('确认',
                    '是否将<strong>' + clickBinder[structureItem]["structureName"] + '</strong>设置为维修状态？', function (r) {

                    var i = 0, schemeName,elements,delayGroup,fixController;
                    if (r) {
                        $(".hiden").show();
                        $('#init_stat').html('选择维修方案<span class="caret"></span>');

                        for (;i<ids.length;i++) {
                            (function(j){
                                $(ids[i]).click(function () {
                                    // console.log(schemes[Object.keys(schemes)[0]]);
                                    console.log(j);
                                    schemeName = schemes[Object.keys(schemes)[j]]["schemeName"],
                                    elements   = schemes[Object.keys(schemes)[j]]["elements"],
                                    delayGroup = schemes[Object.keys(schemes)[j]]["delayGroup"],
                                    fixController = new AnimationQueueFactory(schemeName+"_queue");
                                    generateSchema(schemeName);

                                    $(document).off('drain');

                                    fixController.createQueue(elements, delayGroup);
                                    fixController.play();
                                });
                            })(i);

                        } // for
                    } // if
                }); // messager

            });
        })(i);
    }

  var img6 = canvas.display.image({
    x: 284,
    y: 435,
    image: "image/main/qsc1.png"
  });
  canvas.addChild(img6);

  var img61 = canvas.display.image({
    x: 287,
    y: 253,
    image: "image/main/qsc2.png"
  });
  canvas.addChild(img61);

  var img62 = canvas.display.image({
    x: 462,
    y: 251,
    image: "image/main/qsc2.png"
  });
  canvas.addChild(img62);

  var img63 = canvas.display.image({
    x: 432,
    y: 434,
    image: "image/main/qsc3.png"
  });
  canvas.addChild(img63);

  var img7 = canvas.display.image({
    x: 870,
    y: -7,
    image: "image/main/1.png"
  });
  canvas.addChild(img7);

  var img8 = canvas.display.image({
    x: 379,
    y: 652,
    image: "image/main/tc.png"
  });
  canvas.addChild(img8);
    img8.bind("click", function () {
        onClickTC();
    }).bind("mouseenter", function () {
        canvas.mouse.cursor("pointer");
        this.shadow = "0 0 10px #eee";
    }).bind("mouseleave", function () {
        this.shadow = "0 0 0px #eee";
        canvas.mouse.cursor("default");
    });

  var img81 = canvas.display.image({
    x: 488,
    y: 652,
    image: "image/main/tc.png"
  });
  canvas.addChild(img81);
    img81.bind("click", function () {
        onClickTC1();
    }).bind("mouseenter", function () {
        canvas.mouse.cursor("pointer");
        this.shadow = "0 0 10px #eee";
    }).bind("mouseleave", function () {
        this.shadow = "0 0 0px #eee";
        canvas.mouse.cursor("default");
    });

  var img9 = canvas.display.image({
    x: 613,
    y: 645,
    image: "image/main/cy.png"
  });
  canvas.addChild(img9);

  var img10 = canvas.display.image({
    x: 623,
    y: 465,
    image: "image/main/cyc.png"
  });
  canvas.addChild(img10);

//  GD15.bind("start", function () {
//    canvas.timeline.stop();
//    window.setTimeout(restart, 1000);
//    this.paused = 1;
//  });
//  canvas.addChild(GD15);
//  GD01.paused = 1;
//  GD22.paused = 1;
//  GD02.paused = 1;
//  GD25.paused = 1;


  canvas.setLoop(function () {
  	var pipes = [GD01, GD0101, GD25, GD02, GD03, GD04, GD05, GD06,
                GD07, GD08, GD09, GD10, GD1001, GD1002, GD11, GD12, GD1201,
                GD13, GD141,GD15, GD1500,GD1501, GD16, GD17, GD18, GD19, GD20,
                GD21, GD22, GD23, GD24, GD26, GD27, GD28, GD29, GD30,
                GD31, GD32, GD33, GD34, GD35, GD36, GD37],
  			i = 0;

  	for (;i<pipes.length;i++) {
  		pipes[i].advance();
  	}
   
    canvas.redraw();
  });

  GD01.paused = 1;
  GD02.paused = 1;
  GD25.paused = 1;
  GD22.paused = 1;
  canvas.timeline.start();

    $("#reset").click(function(){
        resetAll();
    });

  function restart() {
    canvas.timeline.start();
  }

  function init() {
  	var pipes = [GD01, GD02, GD25, GD03, GD04, GD05, GD06,
                 GD07, GD08, GD09, GD10, GD11, GD12, GD1201, GD13,
                 GD15, GD1500, GD1501, GD16, GD17, GD18, GD19, GD20, GD21,
                 GD22, GD23, GD24, GD26, GD27, GD29, GD32,
                 GD33, GD34, GD35, GD36, GD37],
  			i=0;

  	for (;i<pipes.length;i++) {
  		pipes[i].init();
  	}

    canvas.settings.fps = 40;
    GD01.paused = 1;

  }
});

//todo 暂时用全局变量
var mockdata = {
    "fix_hx_right":
    {
        "schemaName" : "东侧虹吸滤池闸门改造配合<br>方案",
        "status" : "东侧阀门维修<span class='caret'></span>",
        "valveGroup" : [16, 18, 19],
        "schemaDownload" : "download/EAST_HX_FIX.doc",
        "schemaContext" : [
        {"content": "1&nbsp;&nbsp;关闭阀门16#，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;停止东侧虹吸进水"},
        {"content": "2&nbsp;&nbsp;关闭阀门9#~14#小虹吸，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;停止东侧进水"},
        {"content": "3&nbsp;&nbsp;关闭阀门18#，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;防止西侧反水"},
        {"content": "4&nbsp;&nbsp;打开9#~14#滤池排空闸，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;9#~14#滤格排空"},
        {"content": "5&nbsp;&nbsp;断开东西滤池清水联通闸，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;断开联通"},
        {"content": "6&nbsp;&nbsp;关闭阀门19#，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;保持滤池出水进东侧臭氧接触池"}
    ]
    },

    "fix_hx_left":
    {
        "schemaName" : "西侧虹吸滤池闸门改造配合<br>方案",
        "status" : "西侧阀门维修<span class='caret'></span>",
        "valveGroup" : [14, 17, 18, 19],
        "schemaDownload" : "download/WEST_HX_FIX.doc",
        "schemaContext" : [
        {"content": "1&nbsp;&nbsp;关闭阀门14#，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;停止西侧虹吸进水"},
        {"content": "2&nbsp;&nbsp;关闭阀门1#~8#小虹吸，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;停止西侧进水"},
        {"content": "3&nbsp;&nbsp;关闭阀门17#，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;防止东侧反水"},
        {"content": "4&nbsp;&nbsp;打开1#~8#滤池排空闸，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;1#~8#滤格排空"},
        {"content": "5&nbsp;&nbsp;断开东西滤池清水联通闸，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;断开联通"},
        {"content": "6&nbsp;&nbsp;关闭阀门19#，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;保持滤池出水进东侧臭氧接触池"}
    ]
    },

    "restore_hx_right":
    {
        "schemaName" : "东侧虹吸滤池闸门改造配合<br>方案",
        "status" : "东侧阀门恢复<span class='caret'></span>",
        "valveGroup" : [16, 18, 19],
        "schemaDownload" : "download/EAST_HX_RECOVER.doc",
        "schemaContext" : [
        {"content": "1&nbsp;&nbsp;打开阀门19#，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;保持滤池出水进东侧臭氧接触池"},
        {"content": "2&nbsp;&nbsp;开启东西滤池清水联通闸，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;平衡东西两侧水量"},
        {"content": "3&nbsp;&nbsp;关闭9#~14#滤池排空闸，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;恢复正常出水"},
        {"content": "4&nbsp;&nbsp;打开阀门18#，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;恢复正常出水"},
        {"content": "5&nbsp;&nbsp;打开阀门9#~14#小虹吸，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;逐格滤料冲洗合格后可以恢复"},
        {"content": "6&nbsp;&nbsp;打开阀门16#，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;恢复东侧虹吸进水"}		]
    },

    "restore_hx_left":
    {
        "schemaName" : "西侧虹吸滤池闸门改造配合<br>方案",
        "status" : "西侧阀门恢复<span class='caret'></span>",
        "valveGroup" : [14, 17, 18, 19],
        "schemaDownload" : "download/WEST_HX_RECOVER.doc",
        "schemaContext" : [
        {"content": "1&nbsp;&nbsp;打开阀门19#，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;保持滤池出水进东侧臭氧接触池"},
        {"content": "2&nbsp;&nbsp;开启东西滤池清水联通闸，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;平衡东西两侧水量"},
        {"content": "3&nbsp;&nbsp;关闭1#~8#滤池排空闸，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;恢复正常出水"},
        {"content": "4&nbsp;&nbsp;打开阀门17#，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;恢复正常出水"},
        {"content": "5&nbsp;&nbsp;打开阀门1#~8#小虹吸，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;逐格滤料冲洗合格后可以恢复"},
        {"content": "6&nbsp;&nbsp;打开阀门14#，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;恢复西侧虹吸进水"}
    ]
    },

    "fix_vl":
    {
        "schemaName" : "V型滤池进出水闸门维修<br>方案",
        "status" : "V型滤池进出水闸门维修<span class='caret'></span>",
        "valveGroup" : [67, 68, 52],
        "schemaDownload" : "download/V型滤池进出水闸门维修方案.doc",
        "schemaContext" : [
        {"content": "1&nbsp;&nbsp;关闭阀门67#，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;停止V型滤池进水"},
        {"content": "2&nbsp;&nbsp;关闭阀门68#，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;停止V型滤池进水"},
        {"content": "3&nbsp;&nbsp;关闭阀门52#，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;停止V型滤池出水"}
    ]
    },

    "restore_vl":
    {
        "schemaName" : "V型滤池进出水闸门维修<br>方案",
        "status" : "V型滤池进出水闸门恢复<span class='caret'></span>",
        "valveGroup" : [67, 68, 52],
        "schemaDownload" : "download/V型滤池进出水闸门维修方案.doc",
        "schemaContext" : [
        {"content": "1&nbsp;&nbsp;开启阀门67#，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;恢复V型滤池进水"},
        {"content": "2&nbsp;&nbsp;开启阀门68#，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;恢复V型滤池进水"},
        {"content": "3&nbsp;&nbsp;开启阀门52#，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;恢复V型滤池出水"}
    ]
    },

    "fix_tc":
    {
        "schemaName" : "老炭池进出水闸门维修<br>方案",
        "status" : "老炭池闸门维修<span class='caret'></span>",
        "valveGroup" : [56, 57, 44],
        "schemaDownload" : "download/老炭池进出水闸门更换方案.doc",
        "schemaContext" : [
        {"content": "1&nbsp;&nbsp;阀门56#维持关闭状态，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;"},
        {"content": "2&nbsp;&nbsp;关闭阀门57#，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;停止老炭池进水"},
        {"content": "3&nbsp;&nbsp;关闭阀门44#，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;停止老炭池出水"}
    ]
    },

    "restore_tc":
    {
        "schemaName" : "老炭池进出水闸门维修<br>方案",
        "status" : "老炭池闸门恢复<span class='caret'></span>",
        "valveGroup" : [56, 57, 44],
        "schemaDownload" : "download/老炭池进出水闸门更换方案.doc",
        "schemaContext" : [
        {"content": "1&nbsp;&nbsp;阀门56#维持关闭状态，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;"},
        {"content": "2&nbsp;&nbsp;开启阀门44#，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;恢复老炭池出水"},
        {"content": "3&nbsp;&nbsp;开启阀门57#，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;恢复老炭池进水"}

    ]
    },

    "fix_tc1":
    {
        "schemaName" : "新炭池进出水闸门维修<br>方案",
        "status" : "新炭池闸门维修<span class='caret'></span>",
        "valveGroup" : [59, 55],
        "schemaDownload" : "download/新炭池进出水闸门更换方案.doc",
        "schemaContext" : [
        {"content": "1&nbsp;&nbsp;关闭阀门59#，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;停止新炭池进水"},
        {"content": "2&nbsp;&nbsp;关闭阀门55#，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;停止新炭池出水"}
    ]
    },

    "restore_tc1":
    {
        "schemaName" : "新炭池进出水闸门维修<br>方案",
        "status" : "新炭池闸门恢复<span class='caret'></span>",
        "valveGroup" : [59, 55],
        "schemaDownload" : "download/新炭池进出水闸门更换方案.doc",
        "schemaContext" : [
        {"content": "1&nbsp;&nbsp;开启阀门59#，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;恢复新炭池进水"},
        {"content": "2&nbsp;&nbsp;开启阀门55#，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;恢复新炭池出水"}
    ]
    },

    "fix_jjc1":
    {
        "schemaName" : "1#机加池停池检修<br>方案",
        "status" : "1#机加池维修<span class='caret'></span>",
        "valveGroup" : [62],
        "schemaDownload" : "download/1#机加池停池检修方案.doc",
        "schemaContext" : [
        {"content": "1&nbsp;&nbsp;关闭阀门62#，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;停止西侧虹吸进水"}
    ]
    },

    "restore_jjc1":
    {
        "schemaName" : "1#机加池停池检修<br>方案",
        "status" : "1#机加池恢复<span class='caret'></span>",
        "valveGroup" : [62],
        "schemaDownload" : "download/1#机加池停池检修方案.doc",
        "schemaContext" : [
        {"content": "1&nbsp;&nbsp;开启阀门62#，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;停止西侧虹吸进水"}
    ]
    },

    "fix_jjc2":
    {
        "schemaName" : "2#机加池停池检修<br>方案",
        "status" : "2#机加池维修<span class='caret'></span>",
        "valveGroup" : [62],
        "schemaDownload" : "download/2#机加池停池检修方案.doc",
        "schemaContext" : [
        {"content": "1&nbsp;&nbsp;关闭阀门62#，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;停止西侧虹吸进水"}
    ]
    },

    "restore_jjc2":
    {
        "schemaName" : "2#机加池停池检修<br>方案",
        "status" : "2#机加池恢复<span class='caret'></span>",
        "valveGroup" : [62],
        "schemaDownload" : "download/2#机加池停池检修方案.doc",
        "schemaContext" : [
        {"content": "1&nbsp;&nbsp;开启阀门62#，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;停止西侧虹吸进水"}
    ]
    },

    "fix_jjc3":
    {
        "schemaName" : "3#机加池停池检修<br>方案",
        "status" : "3#机加池维修<span class='caret'></span>",
        "valveGroup" : [65, 66],
        "schemaDownload" : "download/3#机加池停池检修方案.doc",
        "schemaContext" : [
        {"content": "1&nbsp;&nbsp;关闭阀门65#，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;停止西侧虹吸进水"},
        {"content": "2&nbsp;&nbsp;关闭阀门66#，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;停止西侧虹吸进水"}
    ]
    },

    "restore_jjc3":
    {
        "schemaName" : "3#机加池停池检修<br>方案",
        "status" : "3#机加池恢复<span class='caret'></span>",
        "valveGroup" : [65, 66],
        "schemaDownload" : "download/3#机加池停池检修方案.doc",
        "schemaContext" : [
        {"content": "1&nbsp;&nbsp;开启阀门65#，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;停止西侧虹吸进水"},
        {"content": "2&nbsp;&nbsp;开启阀门66#，", "result": "&nbsp;&nbsp;&nbsp;&nbsp;停止西侧虹吸进水"}
    ]
    }
};

// var animationQueueConfig = {
//   "fix_hx_left"  : {
//       "items" : ['#step_1','FM014',GD26, GD27,'#step_2', 'FM017',
//           '#step_3', GD30, '#step_4', '#step_5', 'FM019', '#step_6', GD141],
//       "delayGroup" : [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000]
//   }
// };

