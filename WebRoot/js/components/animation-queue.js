/**
 * Created by LMY on 2016/5/24.
 */
// 全局命名空间
var animation_queue;
if (!animation_queue) animation_queue = {};

animation_queue.animationQueueModel = function namespace() {
    "use strict";

    function AnimationQueueFactory(qn) {
        this._color = 'rgba(194,215,245,0.5)';  // default color
        this._queueName = qn || 'empty_queue';
        this._queueArr = [];
        this.arr = [];
        this.delays = [];
    }

    AnimationQueueFactory.prototype = {

        constructor: AnimationQueueFactory,

        // start animation
        play: function (queueArr) {
            var qn = this._queueName,
                qArr = queueArr || this._queueArr;
            $(document).clearQueue(qn);
            $(document).queue(qn, qArr);
            $(document).dequeue(qn);
        },

        createQueue: function (arr, delays) {
            var funcs = arr,
                len = arr.length,
                d = delays,
                qn = this._queueName,   // fix or restore
                c = this._color,
                that = this,
                changeFMColor,
                msg,
                wfs,                    // water flow state
                lowerCase,
                i;

            that.arr = arr;
            that.delays = delays;

            if (qn.substr(0, 3) == 'fix') {
                msg = 'drain';
                wfs = 2;
                changeFMColor = that.setFMColorRed;
            } else {
                msg = 'overflow';
                wfs = 3;
                changeFMColor = that.setFMColorGreen;
            }

            for (i = 0; i < len; i++) {
                if (funcs[i].constructor === String) {
                    lowerCase = funcs[i].toLowerCase();
                    if (lowerCase.substr(0, 5) == '#step') {
                        this._queueArr[i] = (function (j) {
                            return function () {
                                that.setStepBackgroundColor(funcs[j], c);
                                setTimeout(function () {
                                    $(document).dequeue(qn);
                                }, d[j]);
                            };
                        })(i);
                    } else if (lowerCase.substr(0, 2) == 'fm') {
                        this._queueArr[i] = (function (j) {
                            return function () {
                                changeFMColor(funcs[j]);
                                setTimeout(function () {
                                    $(document).dequeue(qn);
                                }, d[j]);
                            };
                        })(i);
                    }
                } else {
                    this._queueArr[i] = (function (j) {
                        return function () {
                            funcs[j].state = wfs;
                            $(document).off(msg);
                            $(document).on(msg, function () {
                                setTimeout(function () {
                                    $(document).dequeue(qn);
                                }, d[j]);
                            });
                        };
                    })(i);
                }
            }
        },

        playback: function (playbackIndex) {
            var qn = this._queueName,
                tempArr = this._queueArr.slice(0),
                funcs = this.arr,
                len = funcs.length,
                idx = playbackIndex || 0,
                c = this._color,
                d = this.delays,
                that = this,
                wfs,
                changeFMColor,
                lowerCase,
                i;

            // Before the start of animation,reset all animation
            $(document).off('drain');
            $(document).off('overflow');
            $(".table_content").css("background-color", "#ffffff");

            if (qn.substr(0, 3) == 'fix') {
                wfs = 1;
                changeFMColor = that.setFMColorGreen;
            } else {
                wfs = 0;
                changeFMColor = that.setFMColorRed;
            }

            for (i = 0; i < len; i++) {
                if (funcs[i].constructor === String && funcs[i].toLowerCase().substr(0, 2) == 'fm') {
                    changeFMColor(funcs[i]);
                } else if (funcs[i].constructor !== String) {
                    funcs[i].state = wfs;
                }
            }

            if (qn.substr(0, 3) == 'fix') {
                wfs = 0;
                changeFMColor = that.setFMColorRed;
            } else {
                wfs = 1;
                changeFMColor = that.setFMColorGreen;
            }

            for (i = 0; i < idx; i++) {
                if (funcs[i].constructor === String) {
                    lowerCase = funcs[i].toLowerCase();
                    if (lowerCase.substr(0, 5) == '#step') {
                        tempArr[i] = (function (j) {
                            return function () {
                                that.setStepBackgroundColor(funcs[j], c);
                                $(document).dequeue(qn);
                            };
                        })(i);
                    } else if (lowerCase.substr(0, 2) == 'fm') {
                        tempArr[i] = (function (j) {
                            return function () {
                                changeFMColor(funcs[j]);
                                $(document).dequeue(qn);
                            };
                        })(i);
                    }
                } else {
                    tempArr[i] = (function (j) {
                        return function () {
                            funcs[j].state = wfs;
                            $(document).dequeue(qn);
                        };
                    })(i);
                }
            }

            this.play(tempArr);
        },

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

        setFMColorRed: function (id) {
            var image = document.getElementById(id);
            var FMTagId = "W" + id;
            var tag = document.getElementById(FMTagId);

            image.style.display = "block" ;
            tag.style.display = "block";
            image.src = "image/y2-35x37.png";
        },

        setFMColorGreen: function (id) {
            var image = document.getElementById(id);
            var FMTagId = "W" + id;
            var tag = document.getElementById(FMTagId);

            image.style.display = "block";
            tag.style.display = "block";
            image.src = "image/y3-35x37.png";
        }
    };


    // 通过返回命名空间对象将API导出
    // 另一种方法：将模块函数当作构造函数，通过new来调用，将API赋值给this来将其导出
    // 请手动回收AnimationQueueFactory，否则可能会造成内存泄漏
    return {
        AnimationQueueFactory: AnimationQueueFactory
    };
}();






