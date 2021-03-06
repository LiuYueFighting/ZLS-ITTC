var constructor = function (settings, core) {

    return oCanvas.extend({
        core: core,
        shapeType: "rectangular",

        init: function () {

        },
        advance: function () {
            if (this.height_now < this.Height) {
                this.height_now += 1;
            }
            else {
                this.height_now = 0;
            }
        },
        draw: function () {
            var canvas = this.core.canvas,
                origin = this.getOrigin(),
                x = this.abs_x - origin.x,
                y = this.abs_y - origin.y;

            canvas.beginPath();
            canvas.strokeStyle = "#000";
            if (this.trail_flag == 1) {
                canvas.moveTo(this.trail[0].x_t, this.trail[0].y_t);
                for (var i = 1; i < this.trail.length; i++) {
                    canvas.lineTo(this.trail[i].x_t, this.trail[i].y_t);
                }
                canvas.lineTo(this.trail[0].x_t, this.trail[0].y_t);
                canvas.clip();
            }
            if (this.fill !== "") {
                canvas.fillStyle = this.fill;
                canvas.fillRect(x, y + this.Height - this.height_now, this.Width, this.height_now);
            }
            canvas.closePath();
        }
    }, settings);
};
oCanvas.registerDisplayObject("SC", constructor, "init");


var constructor_show = function (settings, core) {

    return oCanvas.extend({
        core: core,
        shapeType: "rectangular",

        init: function () {
            this.start=0;
            this.full=0;
            this.height_now=0;
        },
        advance: function () {
           if(this.start==1&&this.full!=1){
               if (this.height_now < this.Height) {
                   this.height_now += this.speed;
               }
               else {
                   this.full = 1;
               }
           }
        },
        draw: function () {
            var canvas = this.core.canvas,
                origin = this.getOrigin(),
                x = this.abs_x - origin.x,
                y = this.abs_y - origin.y;

            canvas.beginPath();
            canvas.strokeStyle = "#000";
            if (this.trail_flag == 1) {
                canvas.moveTo(this.trail[0].x_t, this.trail[0].y_t);
                for (var i = 1; i < this.trail.length; i++) {
                    canvas.lineTo(this.trail[i].x_t, this.trail[i].y_t);
                }
                canvas.lineTo(this.trail[0].x_t, this.trail[0].y_t);
                canvas.clip();
            }
            if (this.fill !== "") {
                canvas.fillStyle = this.fill;
                canvas.fillRect(x, y + this.Height - this.height_now, this.Width, this.height_now);
            }
            canvas.closePath();
        }
    }, settings);
};

oCanvas.registerDisplayObject("SC_show", constructor_show, "init");

var constructor_show_down = function (settings, core) {

    return oCanvas.extend({
        core: core,
        shapeType: "rectangular",

        init: function () {
            this.start=0;
            this.full=0;
            this.height_now=0;
        },
        advance: function () {
            if(this.start==1&&this.full!=1){
                if (this.height_now < this.Height) {
                    this.height_now += this.speed;
                }
                else {
                    this.full = 1;
                }
            }
        },
        draw: function () {
            var canvas = this.core.canvas,
                origin = this.getOrigin(),
                x = this.abs_x - origin.x,
                y = this.abs_y - origin.y;

            canvas.beginPath();
            canvas.strokeStyle = "#000";
            if (this.trail_flag == 1) {
                canvas.moveTo(this.trail[0].x_t, this.trail[0].y_t);
                for (var i = 1; i < this.trail.length; i++) {
                    canvas.lineTo(this.trail[i].x_t, this.trail[i].y_t);
                }
                canvas.lineTo(this.trail[0].x_t, this.trail[0].y_t);
                canvas.clip();
            }
            if (this.fill !== "") {
                canvas.fillStyle = this.fill;
                canvas.fillRect(x, y , this.Width, this.height_now);
            }
            canvas.closePath();
        }
    }, settings);
};

oCanvas.registerDisplayObject("SC_show_down", constructor_show_down, "init");

var constructor_show_fill = function (settings, core) {

    return oCanvas.extend({
        core: core,
        shapeType: "rectangular",

        init: function () {
            this.start=0;
            this.full=0;
            this.height_now=this.Height;
//            this.a=0;
            this.color="rgba(26,215,255,0)";
        },
        advance: function () {
            if(this.start==1&&this.full!=1){
//            	if(this.a<1){
//            		this.a += 0.1;
//            		console.log(this.a);
//            		this.fill="rgba(26,215,255,this.a)";
//            	}
//            	else{
//            		this.full=1;
//            	}
                if (this.fill == "rgba(26,215,255,0)") {
//                    this.a += 0.1;
                    this.fill="rgba(26,215,255,0.1)";
                }
                else if(this.fill == "rgba(26,215,255,0.1)"){
                	this.fill="rgba(26,215,255,0.2)";
                }
                else if(this.fill == "rgba(26,215,255,0.2)"){
                	this.fill="rgba(26,215,255,0.3)";
                }
                else if(this.fill == "rgba(26,215,255,0.3)"){
                	this.fill="rgba(26,215,255,0.4)";
                }
                else if(this.fill == "rgba(26,215,255,0.4)"){
                	this.fill="rgba(26,215,255,0.5)";
                }
                else if(this.fill == "rgba(26,215,255,0.5)"){
                	this.fill="rgba(26,215,255,0.6)";
                }
                else if(this.fill == "rgba(26,215,255,0.6)"){
                	this.fill="rgba(26,215,255,0.7)";
                }
                else if(this.fill == "rgba(26,215,255,0.7)"){
                	this.fill="rgba(26,215,255,0.8)";
                }
                else if(this.fill == "rgba(26,215,255,0.8)"){
                	this.fill="rgba(26,215,255,0.9)";
                }
                else if(this.fill == "rgba(26,215,255,0.9)"){
                	this.fill="rgba(26,215,255,1)";
                }
                else {
                    this.full = 1;
                }
            }
        },
        draw: function () {
            var canvas = this.core.canvas,
                origin = this.getOrigin(),
                x = this.abs_x - origin.x,
                y = this.abs_y - origin.y;

            canvas.beginPath();
            canvas.strokeStyle = "#000";
            if (this.trail_flag == 1) {
                canvas.moveTo(this.trail[0].x_t, this.trail[0].y_t);
                for (var i = 1; i < this.trail.length; i++) {
                    canvas.lineTo(this.trail[i].x_t, this.trail[i].y_t);
                }
                canvas.lineTo(this.trail[0].x_t, this.trail[0].y_t);
                canvas.clip();
            }
            if (this.fill !== "") {
                canvas.fillStyle = this.fill;
                canvas.fillRect(x, y , this.Width, this.Height);
            }
            canvas.closePath();
        }
    }, settings);
};

oCanvas.registerDisplayObject("SC_show_fill", constructor_show_fill, "init");
//原来的管道绘制方法
//var constructor_gd = function (settings, core) {
//
//    return oCanvas.extend({
//        core: core,
//        shapeType: "rectangular",
//
//        init: function () {
//            this.x_now = this.cells[0].x_cell;
//            this.y_now = this.cells[0].y_cell;
//            this.firstX = this.x_now;
//            this.firstY = this.y_now;
//            this.endHeight = 0;
//            this.beginHeight = 0;
//            this.paused = 1;
//        },
//        advance: function () {
//            var deta_x = this.cells[1].x_cell - this.cells[0].x_cell;
//            var deta_y = this.cells[1].y_cell - this.cells[0].y_cell;
//            var deta = Math.sqrt(deta_x * deta_x + deta_y * deta_y);
//            var flag_x = deta_x / deta;
//            var flag_y = deta_y / deta;
//            if (this.paused == 1) {
//                if (Math.abs(this.firstX - this.cells[0].x_cell) >= this.LineHeight * Math.abs(flag_x) && Math.abs(this.firstY - this.cells[0].y_cell) >= this.LineHeight * Math.abs(flag_y)) {
//                    this.firstX = this.cells[0].x_cell;
//                    this.firstY = this.cells[0].y_cell;
//                    this.beginHeight = 0;
//                }
//                else {
//                    if (this.beginHeight < this.LineHeight) {
//                        if (this.beginHeight + this.Speed >= this.LineHeight) {
//                            this.beginHeight = this.LineHeight;
//                        }
//                        else {
//                            this.beginHeight += this.Speed;
//                        }
//                        this.firstX = this.cells[0].x_cell;
//                        this.firstY = this.cells[0].y_cell;
//                    }
//                    else if (this.beginHeight == this.LineHeight) {
//                        this.firstX += flag_x * this.Speed;
//                        this.firstY += flag_y * this.Speed;
//                        //if (this.cells[0].x_cell == this.cells[1].x_cell) {
//                        //    if (this.cells[1].y_cell > this.cells[0].y_cell) {
//                        //        this.firstY += this.Speed;
//                        //    }
//                        //    else {
//                        //        this.firstY -= this.Speed;
//                        //    }
//                        //}
//                        //else {
//                        //    if (this.cells[1].x_cell > this.cells[0].x_cell) {
//                        //        this.firstX += this.Speed;
//                        //    }
//                        //    else {
//                        //        this.firstX -= this.Speed;
//                        //    }
//                        //}
//                    }
//                }
//            }
//
//        },
//        draw: function () {
//            var canvas = this.core.canvas;
//
//            this.x_now = this.firstX;
//            this.y_now = this.firstY;
//            var deta_x = this.cells[1].x_cell - this.cells[0].x_cell;
//            var deta_y = this.cells[1].y_cell - this.cells[0].y_cell;
//            var deta = Math.sqrt(deta_x * deta_x + deta_y * deta_y);
//            var myEnd = false;
//            var flag = {                      //��ǰ�ܵ�ˮ���ķ���,1���÷���Ϊ����-1���÷����Ϸ�����0��?ǰ�����ƶ�
//                x_flag: deta_x / deta,
//                y_flag: deta_y / deta
//            };
//            canvas.beginPath();
//
//            canvas.lineJoin = 'round';
//            this.endHeight = 0;
//            canvas.lineWidth = this.GDwidth / 4;   //���������Ŀ�ȣ��ݶ�Ϊ�ܵ���ȵ�1/4
//            canvas.strokeStyle = "#333";           //������������ɫ
//            //if (this.cells[1].x_cell - this.cells[0].x_cell > 0) {
//            //    flag.x_flag = 1;
//            //}
//            //else if (this.cells[1].x_cell - this.cells[0].x_cell < 0) {
//            //    flag.x_flag = -1;
//            //}
//            //else {
//            //    flag.x_flag = 0;
//            //}
//            //if (this.cells[1].y_cell - this.cells[0].y_cell > 0) {
//            //    flag.y_flag = 1;
//            //}
//            //else if (this.cells[1].y_cell - this.cells[0].y_cell < 0) {
//            //    flag.y_flag = -1;
//            //}
//            //else {
//            //    flag.y_flag = 0;
//            //}
//            if (this.beginHeight > 0) {
//                canvas.moveTo(this.x_now, this.y_now);
//                canvas.lineTo(this.x_now + flag.x_flag * this.beginHeight, this.y_now + flag.y_flag * this.beginHeight);
//            }
//
//            this.x_now += flag.x_flag * (this.beginHeight + this.LineHeight);
//            this.y_now += flag.y_flag * (this.beginHeight + this.LineHeight);
//            for (var i = 1; i < this.cells.length; i++) {
//                myEnd = false;
//                deta_x = this.cells[i].x_cell - this.cells[i - 1].x_cell;
//                deta_y = this.cells[i].y_cell - this.cells[i - 1].y_cell;
//                deta = Math.sqrt(deta_x * deta_x + deta_y * deta_y);
//                flag.x_flag = deta_x / deta;
//                flag.y_flag = deta_y / deta;
//                //if (this.cells[i].x_cell - this.cells[i - 1].x_cell > 0) {
//                //    flag.x_flag = 1;
//                //}
//                //else if (this.cells[i].x_cell - this.cells[i - 1].x_cell < 0) {
//                //    flag.x_flag = -1;
//                //}
//                //else {
//                //    flag.x_flag = 0;
//                //}
//                //if (this.cells[i].y_cell - this.cells[i - 1].y_cell > 0) {
//                //    flag.y_flag = 1;
//                //}
//                //else if (this.cells[i].y_cell - this.cells[i - 1].y_cell < 0) {
//                //    flag.y_flag = -1;
//                //}
//                //else {
//                //    flag.y_flag = 0;
//                //}
//                if (this.endHeight > 0) {
//                    canvas.moveTo(this.cells[i - 1].x_cell - flag.x_flag * (this.GDwidth / 8), this.cells[i - 1].y_cell - flag.y_flag * (this.GDwidth / 8));
//                    canvas.lineTo(this.cells[i - 1].x_cell + flag.x_flag * (this.endHeight ), this.cells[i - 1].y_cell + flag.y_flag * this.endHeight);
//                    this.x_now = this.cells[i - 1].x_cell + flag.x_flag * (this.LineHeight + this.endHeight);
//                    this.y_now = this.cells[i - 1].y_cell + flag.y_flag * (this.LineHeight + this.endHeight);
//                }
//                if (this.endHeight < 0) {
//                    this.endHeight = Math.abs(this.endHeight);
//                    this.x_now = this.cells[i - 1].x_cell + flag.x_flag * (this.endHeight);
//                    this.y_now = this.cells[i - 1].y_cell + flag.y_flag * (this.endHeight);
//                }
//                if (this.endHeight == 0 && i != 1) {
//                    this.x_now = this.cells[i - 1].x_cell;
//                    this.y_now = this.cells[i - 1].y_cell;
//                }
//                while (Math.abs(this.x_now - this.cells[i].x_cell) > this.LineHeight * Math.abs(flag.x_flag) || Math.abs(this.y_now - this.cells[i].y_cell) > this.LineHeight * Math.abs(flag.y_flag)) {
//                    canvas.moveTo(this.x_now, this.y_now);
//                    canvas.lineTo(this.x_now + flag.x_flag * this.LineHeight, this.y_now + flag.y_flag * this.LineHeight);
//                    this.x_now += flag.x_flag * this.LineHeight;
//                    this.y_now += flag.y_flag * this.LineHeight;
//                    if (Math.abs(this.x_now - this.cells[i].x_cell) < this.LineHeight * Math.abs(flag.x_flag) || Math.abs(this.y_now - this.cells[i].y_cell) < this.LineHeight * Math.abs(flag.y_flag)) {
//                        //if(flag.x_flag==0){
//                        //    this.endHeight = this.LineHeight  - Math.abs(this.y_now - this.cells[i].y_cell)/Math.abs(flag.y_flag);
//                        //}
//                        //else{
//                        //    this.endHeight = this.LineHeight - Math.abs(this.x_now - this.cells[i].x_cell)/Math.abs(flag.x_flag);
//                        //}
//                        //this.endHeight=this.endHeight*(-1);
//                        this.endHeight = Math.abs(this.y_now - this.cells[i].y_cell) + Math.abs(this.x_now - this.cells[i].x_cell) - this.LineHeight * (Math.abs(flag.y_flag) + Math.abs(flag.x_flag));
//                        myEnd = true;
//                        break;
//                    }
//                    else {
//                        this.x_now += flag.x_flag * this.LineHeight;
//                        this.y_now += flag.y_flag * this.LineHeight;
//                    }
//                }
//                if (myEnd == false && Math.abs(this.x_now - this.cells[i].x_cell) <= this.LineHeight * Math.abs(flag.x_flag) && Math.abs(this.y_now - this.cells[i].y_cell) <= this.LineHeight * Math.abs(flag.y_flag)) {
//                    canvas.moveTo(this.x_now, this.y_now);
//                    canvas.lineTo(this.cells[i].x_cell, this.cells[i].y_cell);
//                    //this.endHeight = this.LineHeight - Math.abs(this.x_now - this.cells[i].x_cell)*flag.x_flag - Math.abs(this.y_now - this.cells[i].y_cell)*flag.y_flag;
//                    if (flag.x_flag == 0) {
//                        this.endHeight = this.LineHeight - Math.abs(this.y_now - this.cells[i].y_cell) / Math.abs(flag.y_flag);
//                    }
//                    else {
//                        this.endHeight = this.LineHeight - Math.abs(this.x_now - this.cells[i].x_cell) / Math.abs(flag.x_flag);
//                    }
//
//                }
//            }
//            canvas.stroke();
//            canvas.closePath();
//        }
//    }, settings);
//};
//oCanvas.registerDisplayObject("GD", constructor_gd, "init");

//新的管道绘制方法
var constructor_gd = function (settings, core) {

    return oCanvas.extend({
        core: core,
        shapeType: "rectangular",

        init: function () {
            this.x_now = this.cells[0].x_cell;
            this.y_now = this.cells[0].y_cell;
            this.firstX = this.x_now;
            this.firstY = this.y_now;
            this.endHeight = 0;
            this.beginHeight = 0;
            this.paused=0;
            this.full=0;

            this.cellIndex = 0;
            this.destination.x_d = this.cells[0].x_cell;
            this.destination.y_d = this.cells[0].y_cell;

            this.legacyHeight = -1;
            this.LineHeight=10;
        },
        advance: function () {
            if(this.paused==1){
                if (this.cellIndex < this.cells.length - 1) {
                    this.deta_x = this.cells[this.cellIndex + 1].x_cell - this.cells[this.cellIndex].x_cell;
                    this.deta_y = this.cells[this.cellIndex + 1].y_cell - this.cells[this.cellIndex].y_cell;
                    this.deta = Math.sqrt(this.deta_x * this.deta_x + this.deta_y * this.deta_y);
                    this.flag_x = this.deta_x / this.deta;
                    this.flag_y = this.deta_y / this.deta;
                    if (this.legacyHeight >= 0) {
                        this.cellIndex++;
                        if (this.cellIndex < this.cells.length - 1) {
                            this.deta_x = this.cells[this.cellIndex + 1].x_cell - this.cells[this.cellIndex].x_cell;
                            this.deta_y = this.cells[this.cellIndex + 1].y_cell - this.cells[this.cellIndex].y_cell;
                            this.deta = Math.sqrt(this.deta_x * this.deta_x + this.deta_y * this.deta_y);
                            this.flag_x = this.deta_x / this.deta;
                            this.flag_y = this.deta_y / this.deta;
                            this.destination.x_d = this.cells[this.cellIndex].x_cell + this.flag_x * this.legacyHeight;
                            this.destination.y_d = this.cells[this.cellIndex].y_cell + this.flag_y * this.legacyHeight;
                            if (Math.abs(this.destination.x_d - this.cells[this.cellIndex + 1].x_cell) > this.Speed * Math.abs(this.flag_x) || Math.abs(this.destination.y_d - this.cells[this.cellIndex + 1].y_cell) > this.Speed * Math.abs(this.flag_y)) {
                                this.legacyHeight = -1;
                                this.destination.x_d += this.flag_x * this.Speed;
                                this.destination.y_d += this.flag_y * this.Speed;
                            }
                            else {
                                if (this.flag_x == 0) {
                                    this.legacyHeight = this.Speed - Math.abs(this.destination.y_d - this.cells[this.cellIndex + 1].y_cell) / Math.abs(this.flag_y);
                                }
                                else {
                                    this.legacyHeight = this.Speed - Math.abs(this.destination.x_d - this.cells[this.cellIndex + 1].x_cell) / Math.abs(this.flag_x);
                                }
                            }
                        }
                    }
                    else {
                        this.destination.x_d += this.flag_x * this.Speed;
                        this.destination.y_d += this.flag_y * this.Speed;
                        if (Math.abs(this.destination.x_d - this.cells[this.cellIndex + 1].x_cell) >= this.Speed * Math.abs(this.flag_x) && Math.abs(this.destination.y_d - this.cells[this.cellIndex + 1].y_cell) >= this.Speed * Math.abs(this.flag_y)) {
                            this.legacyHeight = -1;
                        }
                        else {
                            if (this.flag_x == 0) {
                                this.legacyHeight = this.Speed - Math.abs(this.destination.y_d - this.cells[this.cellIndex + 1].y_cell) / Math.abs(this.flag_y);
                            }
                            else {
                                this.legacyHeight = this.Speed - Math.abs(this.destination.x_d - this.cells[this.cellIndex + 1].x_cell) / Math.abs(this.flag_x);
                            }

                        }
                    }
                }else{
                    this.full=1;
                }
                this.deta_x = this.cells[1].x_cell - this.cells[0].x_cell;
                this.deta_y = this.cells[1].y_cell - this.cells[0].y_cell;
                this.deta = Math.sqrt(this.deta_x * this.deta_x + this.deta_y * this.deta_y);
                this.flag_x = this.deta_x / this.deta;
                this.flag_y = this.deta_y / this.deta;
                if (this.paused == 1) {
                    if (Math.abs(this.firstX - this.cells[0].x_cell) >= this.LineHeight * Math.abs(this.flag_x) && Math.abs(this.firstY - this.cells[0].y_cell) >= this.LineHeight * Math.abs(this.flag_y)) {
                        this.firstX = this.cells[0].x_cell;
                        this.firstY = this.cells[0].y_cell;
                        this.beginHeight = 0;
                    }
                    else {
                        if (this.beginHeight < this.LineHeight) {
                            if (this.beginHeight + this.Speed >= this.LineHeight) {
                                this.beginHeight = this.LineHeight;
                            }
                            else {
                                this.beginHeight += this.Speed;
                            }
                            this.firstX = this.cells[0].x_cell;
                            this.firstY = this.cells[0].y_cell;
                        }
                        else if (this.beginHeight == this.LineHeight) {
                            this.firstX += this.flag_x * this.Speed;
                            this.firstY += this.flag_y * this.Speed;
                        }
                    }
                }
            }

        },
        draw: function () {
            var canvas = this.core.canvas;

            this.x_now = this.firstX;
            this.y_now = this.firstY;
            this.deta_x = this.cells[1].x_cell - this.cells[0].x_cell;
            this.deta_y = this.cells[1].y_cell - this.cells[0].y_cell;
            this.deta = Math.sqrt(this.deta_x * this.deta_x + this.deta_y * this.deta_y);
            var myEnd = false;
            this.flag_x = this.deta_x / this.deta;
            this.flag_y = this.deta_y / this.deta;

            canvas.beginPath();

            canvas.lineJoin = 'round';
            canvas.lineCap="round";
            this.endHeight = 0;
            canvas.lineWidth = this.GDwidth / 4;
            canvas.strokeStyle = this.fill;

            if (this.beginHeight > 0) {
                canvas.moveTo(this.x_now, this.y_now);
                canvas.lineTo(this.x_now + this.flag_x * this.beginHeight, this.y_now + this.flag_y * this.beginHeight);
            }

            this.x_now += this.flag_x * (this.beginHeight + this.LineHeight);
            this.y_now += this.flag_y * (this.beginHeight + this.LineHeight);
            for (var i = 1; i <= this.cellIndex; i++) {
                myEnd = false;
                this.deta_x = this.cells[i].x_cell - this.cells[i - 1].x_cell;
                this.deta_y = this.cells[i].y_cell - this.cells[i - 1].y_cell;
                this.deta = Math.sqrt(this.deta_x * this.deta_x + this.deta_y * this.deta_y);
                this.flag_x = this.deta_x / this.deta;
                this.flag_y = this.deta_y / this.deta;

                if (this.endHeight > 0) {
                    //canvas.moveTo(this.cells[i - 1].x_cell - this.flag_x * (this.GDwidth / 8), this.cells[i - 1].y_cell - this.flag_y * (this.GDwidth / 8));
                    canvas.moveTo(this.cells[i - 1].x_cell, this.cells[i - 1].y_cell);
                    canvas.lineTo(this.cells[i - 1].x_cell + this.flag_x * (this.endHeight ), this.cells[i - 1].y_cell + this.flag_y * this.endHeight);
                    this.x_now = this.cells[i - 1].x_cell + this.flag_x * (this.LineHeight + this.endHeight);
                    this.y_now = this.cells[i - 1].y_cell + this.flag_y * (this.LineHeight + this.endHeight);
                }
                if (this.endHeight < 0) {
                    this.endHeight = Math.abs(this.endHeight);
                    this.x_now = this.cells[i - 1].x_cell + this.flag_x * (this.endHeight);
                    this.y_now = this.cells[i - 1].y_cell + this.flag_y * (this.endHeight);
                }
                if (this.endHeight == 0 && i != 1) {
                    this.x_now = this.cells[i - 1].x_cell;
                    this.y_now = this.cells[i - 1].y_cell;
                }
                while (Math.abs(this.x_now - this.cells[i].x_cell) >= this.LineHeight * Math.abs(this.flag_x) && Math.abs(this.y_now - this.cells[i].y_cell) >= this.LineHeight * Math.abs(this.flag_y)) {
                    canvas.moveTo(this.x_now, this.y_now);
                    canvas.lineTo(this.x_now + this.flag_x * this.LineHeight, this.y_now + this.flag_y * this.LineHeight);
                    this.x_now += this.flag_x * this.LineHeight;
                    this.y_now += this.flag_y * this.LineHeight;
                    if (Math.abs(this.x_now - this.cells[i].x_cell) <= this.LineHeight * Math.abs(this.flag_x) && Math.abs(this.y_now - this.cells[i].y_cell) <= this.LineHeight * Math.abs(this.flag_y)) {
                        if (this.flag_x == 0) {
                            this.endHeight = Math.abs(this.y_now - this.cells[i].y_cell) / Math.abs(this.flag_y) - this.LineHeight;
                        }
                        else {
                            this.endHeight = Math.abs(this.x_now - this.cells[i].x_cell) / Math.abs(this.flag_x) - this.LineHeight;
                        }
                        //this.endHeight = (Math.abs(this.y_now - this.cells[i].y_cell) + Math.abs(this.x_now - this.cells[i].x_cell) - this.LineHeight * (Math.abs(this.flag_y) + Math.abs(this.flag_x)))/2;
                        myEnd = true;
                        break;
                    }
                    else {
                        this.x_now += this.flag_x * this.LineHeight;
                        this.y_now += this.flag_y * this.LineHeight;
                    }
                }
                if (myEnd == false && Math.abs(this.x_now - this.cells[i].x_cell) <= this.LineHeight * Math.abs(this.flag_x) && Math.abs(this.y_now - this.cells[i].y_cell) <= this.LineHeight * Math.abs(this.flag_y)) {
                    canvas.moveTo(this.x_now, this.y_now);
                    canvas.lineTo(this.cells[i].x_cell, this.cells[i].y_cell);
                    //this.endHeight = this.LineHeight - Math.abs(this.x_now - this.cells[i].x_cell)*flag.x_flag - Math.abs(this.y_now - this.cells[i].y_cell)*flag.y_flag;
                    if (this.flag_x == 0) {
                        this.endHeight = this.LineHeight - Math.abs(this.y_now - this.cells[i].y_cell) / Math.abs(this.flag_y);
                    }
                    else {
                        this.endHeight = this.LineHeight - Math.abs(this.x_now - this.cells[i].x_cell) / Math.abs(this.flag_x);
                    }
                    //this.endHeight = ( this.LineHeight * (Math.abs(this.flag_y) + Math.abs(this.flag_x)) - Math.abs(this.y_now - this.cells[i].y_cell) + Math.abs(this.x_now - this.cells[i].x_cell)) / 2;

                }
            }

            if (this.cellIndex < this.cells.length - 1) {
                //canvas.moveTo(this.cells[this.cellIndex].x_cell,this.cells[this.cellIndex].y_cell);
                //canvas.lineTo(this.destination.x_d,this.destination.y_d);
                myEnd = false;
                this.deta_x = this.cells[this.cellIndex+1].x_cell-this.destination.x_d;
                this.deta_y = this.cells[this.cellIndex+1].y_cell-this.destination.y_d;
                this.deta = Math.sqrt(this.deta_x * this.deta_x + this.deta_y * this.deta_y);
                if (this.deta > 0) {
                    this.flag_x = this.deta_x / this.deta;
                    this.flag_y = this.deta_y / this.deta;
                    if (this.endHeight > 0) {
                        canvas.moveTo(this.cells[this.cellIndex].x_cell, this.cells[this.cellIndex].y_cell);
                        canvas.lineTo(this.cells[this.cellIndex].x_cell + this.flag_x * (this.endHeight ), this.cells[this.cellIndex].y_cell + this.flag_y * this.endHeight);
                        this.x_now = this.cells[this.cellIndex].x_cell + this.flag_x * ( this.endHeight);
                        this.y_now = this.cells[this.cellIndex].y_cell + this.flag_y * ( this.endHeight);
                        if(Math.abs(this.destination.x_d-this.x_now)>this.LineHeight*Math.abs(this.flag_x)||Math.abs(this.destination.y_d-this.y_now)>this.LineHeight*Math.abs(this.flag_y)){
                            this.x_now+=this.LineHeight*this.flag_x;
                            this.y_now+=this.LineHeight*this.flag_y;
                        }
                        else{
                            this.x_now=this.destination.x_d;
                            this.y_now=this.destination.y_d;
                        }
                        //if(this.endHeight<=Math.sqrt((this.destination.x_d-this.cells[this.cellIndex].x_cell)*(this.destination.x_d-this.cells[this.cellIndex].x_cell)+(this.destination.y_d-this.cells[this.cellIndex].y_cell)*(this.destination.y_d-this.cells[this.cellIndex].y_cell))){
                        //    canvas.moveTo(this.cells[this.cellIndex].x_cell, this.cells[this.cellIndex].y_cell);
                        //    canvas.lineTo(this.cells[this.cellIndex].x_cell + this.flag_x * (this.endHeight ), this.cells[this.cellIndex].y_cell + this.flag_y * this.endHeight);
                        //    this.x_now = this.cells[this.cellIndex].x_cell + this.flag_x * ( this.endHeight);
                        //    this.y_now = this.cells[this.cellIndex].y_cell + this.flag_y * ( this.endHeight);
                        //    if(Math.abs(this.destination.x_d-this.x_now)>this.LineHeight*Math.abs(this.flag_x)||Math.abs(this.destination.y_d-this.y_now)>this.LineHeight*Math.abs(this.flag_y)){
                        //        this.x_now+=this.LineHeight*this.flag_x;
                        //        this.y_now+=this.LineHeight*this.flag_y;
                        //    }
                        //    else{
                        //        this.x_now=this.destination.x_d;
                        //        this.y_now=this.destination.y_d;
                        //    }
                        //}else{
                        //    canvas.moveTo(this.cells[this.cellIndex].x_cell, this.cells[this.cellIndex].y_cell);
                        //    canvas.lineTo(this.destination.x_d, this.destination.y_d);
                        //    this.x_now = this.destination.x_d;
                        //    this.y_now = this.destination.y_d;
                        //}
                        //canvas.moveTo(this.cells[this.cellIndex].x_cell - this.flag_x * (this.GDwidth / 8), this.cells[this.cellIndex].y_cell - this.flag_y * (this.GDwidth / 8));

                    }
                    if (this.endHeight < 0) {
                        this.endHeight = Math.abs(this.endHeight);
                        this.x_now = this.cells[this.cellIndex].x_cell + this.flag_x * (this.endHeight);
                        this.y_now = this.cells[this.cellIndex].y_cell + this.flag_y * (this.endHeight);
                    }
                    if (this.endHeight == 0 && this.cellIndex > 0) {
                        this.x_now = this.cells[this.cellIndex].x_cell;
                        this.y_now = this.cells[this.cellIndex].y_cell;
                    }
                    if (this.cellIndex == 0) {
                        this.x_now = this.firstX;
                        this.y_now = this.firstY;
                        if (this.beginHeight > 0) {
                            canvas.moveTo(this.x_now, this.y_now);
                            canvas.lineTo(this.x_now + this.flag_x * this.beginHeight, this.y_now + this.flag_y * this.beginHeight);
                        }
                        this.x_now += this.flag_x * (this.beginHeight + this.LineHeight);
                        this.y_now += this.flag_y * (this.beginHeight + this.LineHeight);
                    }

                    while ((Math.abs(this.x_now - this.destination.x_d) >= this.LineHeight * Math.abs(this.flag_x) && Math.abs(this.y_now - this.destination.y_d) >this.LineHeight * Math.abs(this.flag_y))||(Math.abs(this.x_now - this.destination.x_d) > this.LineHeight * Math.abs(this.flag_x) && Math.abs(this.y_now - this.destination.y_d) >=this.LineHeight * Math.abs(this.flag_y))) {
                    //while((this.x_now - this.destination.x_d)*this.flag_x>=0&&(this.y_now - this.destination.y_d)*this.flag_y>=0&&Math.abs(this.x_now - this.destination.x_d)> this.LineHeight * Math.abs(this.flag_x)||Math.abs(this.y_now - this.destination.y_d) > this.LineHeight * Math.abs(this.flag_y)){
                        canvas.moveTo(this.x_now, this.y_now);
                        canvas.lineTo(this.x_now + this.flag_x * this.LineHeight, this.y_now + this.flag_y * this.LineHeight);
                        this.x_now += this.flag_x * this.LineHeight;
                        this.y_now += this.flag_y * this.LineHeight;
                        if (Math.abs(this.x_now - this.destination.x_d)<= this.LineHeight * Math.abs(this.flag_x)&&Math.abs(this.y_now - this.destination.y_d) <= this.LineHeight * Math.abs(this.flag_y)) {
                            //if (this.flag_x == 0) {
                            //    this.endHeight = Math.abs(this.y_now - this.destination.y_d) / Math.abs(this.flag_y) - this.LineHeight;
                            //}
                            //else {
                            //    this.endHeight = Math.abs(this.x_now - this.destination.x_d) / Math.abs(this.flag_x) - this.LineHeight;
                            //}
                            //this.endHeight = (Math.abs(this.y_now - this.cells[i].y_cell) + Math.abs(this.x_now - this.cells[i].x_cell) - this.LineHeight * (Math.abs(this.flag_y) + Math.abs(this.flag_x)))/2;
                            myEnd = true;
                            break;
                        }
                        else {
                            this.x_now += this.flag_x * this.LineHeight;
                            this.y_now += this.flag_y * this.LineHeight;
                        }
                    }
                    if (myEnd == false && Math.abs(this.x_now - this.destination.x_d) < this.LineHeight * Math.abs(this.flag_x) || Math.abs(this.y_now - this.destination.y_d) < this.LineHeight * Math.abs(this.flag_y)) {
                        canvas.moveTo(this.x_now, this.y_now);
                        canvas.lineTo(this.destination.x_d, this.destination.y_d);
                        //this.endHeight = this.LineHeight - Math.abs(this.x_now - this.cells[i].x_cell)*flag.x_flag - Math.abs(this.y_now - this.cells[i].y_cell)*flag.y_flag;
                        //if (this.flag_x == 0) {
                        //    this.endHeight = this.LineHeight - Math.abs(this.y_now - this.destination.y_d) / Math.abs(this.flag_y);
                        //}
                        //else {
                        //    this.endHeight = this.LineHeight - Math.abs(this.x_now - this.destination.x_d) / Math.abs(this.flag_x);
                        //}
                    }
                }

            }

            canvas.stroke();
            canvas.closePath();
        }
    }, settings);
};
oCanvas.registerDisplayObject("GD", constructor_gd, "init");

var constructor_gd3 = function (settings, core) {

    return oCanvas.extend({
        core: core,
        shapeType: "rectangular",

        init: function () {
            this.x_now = this.cells[0].x_cell;
            this.y_now = this.cells[0].y_cell;
            this.firstX = this.x_now;
            this.firstY = this.y_now;
            this.endHeight = 0;
            this.beginHeight = 0;
            this.paused=0;
            this.full=0;

            this.cellIndex = 0;
            this.destination.x_d = this.cells[0].x_cell;
            this.destination.y_d = this.cells[0].y_cell;

            this.legacyHeight = -1;
            this.LineHeight=10;
        },
        advance: function () {
            if(this.paused==1){
                if (this.cellIndex < this.cells.length - 1) {
                    this.deta_x = this.cells[this.cellIndex + 1].x_cell - this.cells[this.cellIndex].x_cell;
                    this.deta_y = this.cells[this.cellIndex + 1].y_cell - this.cells[this.cellIndex].y_cell;
                    this.deta = Math.sqrt(this.deta_x * this.deta_x + this.deta_y * this.deta_y);
                    this.flag_x = this.deta_x / this.deta;
                    this.flag_y = this.deta_y / this.deta;
                    if (this.legacyHeight >= 0) {
                        this.cellIndex++;
                        if (this.cellIndex < this.cells.length - 1) {
                            this.deta_x = this.cells[this.cellIndex + 1].x_cell - this.cells[this.cellIndex].x_cell;
                            this.deta_y = this.cells[this.cellIndex + 1].y_cell - this.cells[this.cellIndex].y_cell;
                            this.deta = Math.sqrt(this.deta_x * this.deta_x + this.deta_y * this.deta_y);
                            this.flag_x = this.deta_x / this.deta;
                            this.flag_y = this.deta_y / this.deta;
                            this.destination.x_d = this.cells[this.cellIndex].x_cell + this.flag_x * this.legacyHeight;
                            this.destination.y_d = this.cells[this.cellIndex].y_cell + this.flag_y * this.legacyHeight;
                            if (Math.abs(this.destination.x_d - this.cells[this.cellIndex + 1].x_cell) > this.Speed * Math.abs(this.flag_x) || Math.abs(this.destination.y_d - this.cells[this.cellIndex + 1].y_cell) > this.Speed * Math.abs(this.flag_y)) {
                                this.legacyHeight = -1;
                                this.destination.x_d += this.flag_x * this.Speed;
                                this.destination.y_d += this.flag_y * this.Speed;
                            }
                            else {
                                if (this.flag_x == 0) {
                                    this.legacyHeight = this.Speed - Math.abs(this.destination.y_d - this.cells[this.cellIndex + 1].y_cell) / Math.abs(this.flag_y);
                                }
                                else {
                                    this.legacyHeight = this.Speed - Math.abs(this.destination.x_d - this.cells[this.cellIndex + 1].x_cell) / Math.abs(this.flag_x);
                                }
                            }
                        }
                    }
                    else {
                        this.destination.x_d += this.flag_x * this.Speed;
                        this.destination.y_d += this.flag_y * this.Speed;
                        if (Math.abs(this.destination.x_d - this.cells[this.cellIndex + 1].x_cell) >= this.Speed * Math.abs(this.flag_x) && Math.abs(this.destination.y_d - this.cells[this.cellIndex + 1].y_cell) >= this.Speed * Math.abs(this.flag_y)) {
                            this.legacyHeight = -1;
                        }
                        else {
                            if (this.flag_x == 0) {
                                this.legacyHeight = this.Speed - Math.abs(this.destination.y_d - this.cells[this.cellIndex + 1].y_cell) / Math.abs(this.flag_y);
                            }
                            else {
                                this.legacyHeight = this.Speed - Math.abs(this.destination.x_d - this.cells[this.cellIndex + 1].x_cell) / Math.abs(this.flag_x);
                            }

                        }
                    }
                }else{
                    this.full=1;
                }
                this.deta_x = this.cells[1].x_cell - this.cells[0].x_cell;
                this.deta_y = this.cells[1].y_cell - this.cells[0].y_cell;
                this.deta = Math.sqrt(this.deta_x * this.deta_x + this.deta_y * this.deta_y);
                this.flag_x = this.deta_x / this.deta;
                this.flag_y = this.deta_y / this.deta;
                if (this.paused == 1) {
                    if (Math.abs(this.firstX - this.cells[0].x_cell) >= this.LineHeight * Math.abs(this.flag_x) && Math.abs(this.firstY - this.cells[0].y_cell) >= this.LineHeight * Math.abs(this.flag_y)) {
                        this.firstX = this.cells[0].x_cell;
                        this.firstY = this.cells[0].y_cell;
                        this.beginHeight = 0;
                    }
                    else {
                        if (this.beginHeight < this.LineHeight) {
                            if (this.beginHeight + this.Speed >= this.LineHeight) {
                                this.beginHeight = this.LineHeight;
                            }
                            else {
                                this.beginHeight += this.Speed;
                            }
                            this.firstX = this.cells[0].x_cell;
                            this.firstY = this.cells[0].y_cell;
                        }
                        else if (this.beginHeight == this.LineHeight) {
                            this.firstX += this.flag_x * this.Speed;
                            this.firstY += this.flag_y * this.Speed;
                        }
                    }
                }
            }

        },
        draw: function () {
            var canvas = this.core.canvas;

            this.x_now = this.firstX;
            this.y_now = this.firstY;
            this.deta_x = this.cells[1].x_cell - this.cells[0].x_cell;
            this.deta_y = this.cells[1].y_cell - this.cells[0].y_cell;
            this.deta = Math.sqrt(this.deta_x * this.deta_x + this.deta_y * this.deta_y);
            var myEnd = false;
            this.flag_x = this.deta_x / this.deta;
            this.flag_y = this.deta_y / this.deta;

            canvas.beginPath();

            canvas.lineJoin = 'round';
            canvas.lineCap="round";
            this.endHeight = 0;
            canvas.lineWidth = this.GDwidth / 4;
            canvas.strokeStyle = this.fill;

            if (this.beginHeight > 0) {
                canvas.moveTo(this.x_now, this.y_now);
                canvas.lineTo(this.x_now + this.flag_x * this.beginHeight, this.y_now + this.flag_y * this.beginHeight);
            }

            this.x_now += this.flag_x * (this.beginHeight + this.LineHeight);
            this.y_now += this.flag_y * (this.beginHeight + this.LineHeight);
            for (var i = 1; i <= this.cellIndex; i++) {
                myEnd = false;
                this.deta_x = this.cells[i].x_cell - this.cells[i - 1].x_cell;
                this.deta_y = this.cells[i].y_cell - this.cells[i - 1].y_cell;
                this.deta = Math.sqrt(this.deta_x * this.deta_x + this.deta_y * this.deta_y);
                this.flag_x = this.deta_x / this.deta;
                this.flag_y = this.deta_y / this.deta;

                if (this.endHeight > 0) {
                    //canvas.moveTo(this.cells[i - 1].x_cell - this.flag_x * (this.GDwidth / 8), this.cells[i - 1].y_cell - this.flag_y * (this.GDwidth / 8));
                    canvas.moveTo(this.cells[i - 1].x_cell, this.cells[i - 1].y_cell);
                    canvas.lineTo(this.cells[i - 1].x_cell + this.flag_x * (this.endHeight ), this.cells[i - 1].y_cell + this.flag_y * this.endHeight);
                    this.x_now = this.cells[i - 1].x_cell + this.flag_x * (this.LineHeight + this.endHeight);
                    this.y_now = this.cells[i - 1].y_cell + this.flag_y * (this.LineHeight + this.endHeight);
                }
                if (this.endHeight < 0) {
                    this.endHeight = Math.abs(this.endHeight);
                    this.x_now = this.cells[i - 1].x_cell + this.flag_x * (this.endHeight);
                    this.y_now = this.cells[i - 1].y_cell + this.flag_y * (this.endHeight);
                }
                if (this.endHeight == 0 && i != 1) {
                    this.x_now = this.cells[i - 1].x_cell;
                    this.y_now = this.cells[i - 1].y_cell;
                }
                while (Math.abs(this.x_now - this.cells[i].x_cell) >= this.LineHeight * Math.abs(this.flag_x) && Math.abs(this.y_now - this.cells[i].y_cell) >= this.LineHeight * Math.abs(this.flag_y)) {
                    canvas.moveTo(this.x_now, this.y_now);
                    canvas.lineTo(this.x_now + this.flag_x * this.LineHeight, this.y_now + this.flag_y * this.LineHeight);
                    this.x_now += this.flag_x * this.LineHeight;
                    this.y_now += this.flag_y * this.LineHeight;
                    if (Math.abs(this.x_now - this.cells[i].x_cell) <= this.LineHeight * Math.abs(this.flag_x) && Math.abs(this.y_now - this.cells[i].y_cell) <= this.LineHeight * Math.abs(this.flag_y)) {
                        if (this.flag_x == 0) {
                            this.endHeight = Math.abs(this.y_now - this.cells[i].y_cell) / Math.abs(this.flag_y) - this.LineHeight;
                        }
                        else {
                            this.endHeight = Math.abs(this.x_now - this.cells[i].x_cell) / Math.abs(this.flag_x) - this.LineHeight;
                        }
                        //this.endHeight = (Math.abs(this.y_now - this.cells[i].y_cell) + Math.abs(this.x_now - this.cells[i].x_cell) - this.LineHeight * (Math.abs(this.flag_y) + Math.abs(this.flag_x)))/2;
                        myEnd = true;
                        break;
                    }
                    else {
                        this.x_now += this.flag_x * this.LineHeight;
                        this.y_now += this.flag_y * this.LineHeight;
                    }
                }
                if (myEnd == false && Math.abs(this.x_now - this.cells[i].x_cell) <= this.LineHeight * Math.abs(this.flag_x) && Math.abs(this.y_now - this.cells[i].y_cell) <= this.LineHeight * Math.abs(this.flag_y)) {
                    canvas.moveTo(this.x_now, this.y_now);
                    canvas.lineTo(this.cells[i].x_cell, this.cells[i].y_cell);
                    //this.endHeight = this.LineHeight - Math.abs(this.x_now - this.cells[i].x_cell)*flag.x_flag - Math.abs(this.y_now - this.cells[i].y_cell)*flag.y_flag;
                    if (this.flag_x == 0) {
                        this.endHeight = this.LineHeight - Math.abs(this.y_now - this.cells[i].y_cell) / Math.abs(this.flag_y);
                    }
                    else {
                        this.endHeight = this.LineHeight - Math.abs(this.x_now - this.cells[i].x_cell) / Math.abs(this.flag_x);
                    }
                    //this.endHeight = ( this.LineHeight * (Math.abs(this.flag_y) + Math.abs(this.flag_x)) - Math.abs(this.y_now - this.cells[i].y_cell) + Math.abs(this.x_now - this.cells[i].x_cell)) / 2;

                }
            }

            if (this.cellIndex < this.cells.length - 1) {
                //canvas.moveTo(this.cells[this.cellIndex].x_cell,this.cells[this.cellIndex].y_cell);
                //canvas.lineTo(this.destination.x_d,this.destination.y_d);
                myEnd = false;
                this.deta_x = this.cells[this.cellIndex+1].x_cell-this.destination.x_d;
                this.deta_y = this.cells[this.cellIndex+1].y_cell-this.destination.y_d;
                this.deta = Math.sqrt(this.deta_x * this.deta_x + this.deta_y * this.deta_y);
                if (this.deta > 0) {
                    this.flag_x = this.deta_x / this.deta;
                    this.flag_y = this.deta_y / this.deta;
                    if (this.endHeight > 0) {
                        canvas.moveTo(this.cells[this.cellIndex].x_cell, this.cells[this.cellIndex].y_cell);
                        canvas.lineTo(this.cells[this.cellIndex].x_cell + this.flag_x * (this.endHeight ), this.cells[this.cellIndex].y_cell + this.flag_y * this.endHeight);
                        this.x_now = this.cells[this.cellIndex].x_cell + this.flag_x * ( this.endHeight);
                        this.y_now = this.cells[this.cellIndex].y_cell + this.flag_y * ( this.endHeight);
                        if(Math.abs(this.destination.x_d-this.x_now)>this.LineHeight*Math.abs(this.flag_x)||Math.abs(this.destination.y_d-this.y_now)>this.LineHeight*Math.abs(this.flag_y)){
                            this.x_now+=this.LineHeight*this.flag_x;
                            this.y_now+=this.LineHeight*this.flag_y;
                        }
                        else{
                            this.x_now=this.destination.x_d;
                            this.y_now=this.destination.y_d;
                        }
                        //if(this.endHeight<=Math.sqrt((this.destination.x_d-this.cells[this.cellIndex].x_cell)*(this.destination.x_d-this.cells[this.cellIndex].x_cell)+(this.destination.y_d-this.cells[this.cellIndex].y_cell)*(this.destination.y_d-this.cells[this.cellIndex].y_cell))){
                        //    canvas.moveTo(this.cells[this.cellIndex].x_cell, this.cells[this.cellIndex].y_cell);
                        //    canvas.lineTo(this.cells[this.cellIndex].x_cell + this.flag_x * (this.endHeight ), this.cells[this.cellIndex].y_cell + this.flag_y * this.endHeight);
                        //    this.x_now = this.cells[this.cellIndex].x_cell + this.flag_x * ( this.endHeight);
                        //    this.y_now = this.cells[this.cellIndex].y_cell + this.flag_y * ( this.endHeight);
                        //    if(Math.abs(this.destination.x_d-this.x_now)>this.LineHeight*Math.abs(this.flag_x)||Math.abs(this.destination.y_d-this.y_now)>this.LineHeight*Math.abs(this.flag_y)){
                        //        this.x_now+=this.LineHeight*this.flag_x;
                        //        this.y_now+=this.LineHeight*this.flag_y;
                        //    }
                        //    else{
                        //        this.x_now=this.destination.x_d;
                        //        this.y_now=this.destination.y_d;
                        //    }
                        //}else{
                        //    canvas.moveTo(this.cells[this.cellIndex].x_cell, this.cells[this.cellIndex].y_cell);
                        //    canvas.lineTo(this.destination.x_d, this.destination.y_d);
                        //    this.x_now = this.destination.x_d;
                        //    this.y_now = this.destination.y_d;
                        //}
                        //canvas.moveTo(this.cells[this.cellIndex].x_cell - this.flag_x * (this.GDwidth / 8), this.cells[this.cellIndex].y_cell - this.flag_y * (this.GDwidth / 8));

                    }
                    if (this.endHeight < 0) {
                        this.endHeight = Math.abs(this.endHeight);
                        this.x_now = this.cells[this.cellIndex].x_cell + this.flag_x * (this.endHeight);
                        this.y_now = this.cells[this.cellIndex].y_cell + this.flag_y * (this.endHeight);
                    }
                    if (this.endHeight == 0 && this.cellIndex > 0) {
                        this.x_now = this.cells[this.cellIndex].x_cell;
                        this.y_now = this.cells[this.cellIndex].y_cell;
                    }
                    if (this.cellIndex == 0) {
                        this.x_now = this.firstX;
                        this.y_now = this.firstY;
                        if (this.beginHeight > 0) {
                            canvas.moveTo(this.x_now, this.y_now);
                            canvas.lineTo(this.x_now + this.flag_x * this.beginHeight, this.y_now + this.flag_y * this.beginHeight);
                        }
                        this.x_now += this.flag_x * (this.beginHeight + this.LineHeight);
                        this.y_now += this.flag_y * (this.beginHeight + this.LineHeight);
                    }

                    while ((Math.abs(this.x_now - this.destination.x_d) >= this.LineHeight * Math.abs(this.flag_x) && Math.abs(this.y_now - this.destination.y_d) >this.LineHeight * Math.abs(this.flag_y))||(Math.abs(this.x_now - this.destination.x_d) > this.LineHeight * Math.abs(this.flag_x) && Math.abs(this.y_now - this.destination.y_d) >=this.LineHeight * Math.abs(this.flag_y))) {
                    //while((this.x_now - this.destination.x_d)*this.flag_x>=0&&(this.y_now - this.destination.y_d)*this.flag_y>=0&&Math.abs(this.x_now - this.destination.x_d)> this.LineHeight * Math.abs(this.flag_x)||Math.abs(this.y_now - this.destination.y_d) > this.LineHeight * Math.abs(this.flag_y)){
                        canvas.moveTo(this.x_now, this.y_now);
                        canvas.lineTo(this.x_now + this.flag_x * this.LineHeight, this.y_now + this.flag_y * this.LineHeight);
                        this.x_now += this.flag_x * this.LineHeight;
                        this.y_now += this.flag_y * this.LineHeight;
                        if (Math.abs(this.x_now - this.destination.x_d)<= this.LineHeight * Math.abs(this.flag_x)&&Math.abs(this.y_now - this.destination.y_d) <= this.LineHeight * Math.abs(this.flag_y)) {
                            //if (this.flag_x == 0) {
                            //    this.endHeight = Math.abs(this.y_now - this.destination.y_d) / Math.abs(this.flag_y) - this.LineHeight;
                            //}
                            //else {
                            //    this.endHeight = Math.abs(this.x_now - this.destination.x_d) / Math.abs(this.flag_x) - this.LineHeight;
                            //}
                            //this.endHeight = (Math.abs(this.y_now - this.cells[i].y_cell) + Math.abs(this.x_now - this.cells[i].x_cell) - this.LineHeight * (Math.abs(this.flag_y) + Math.abs(this.flag_x)))/2;
                            myEnd = true;
                            break;
                        }
                        else {
                            this.x_now += this.flag_x * this.LineHeight;
                            this.y_now += this.flag_y * this.LineHeight;
                        }
                    }
                    if (myEnd == false && Math.abs(this.x_now - this.destination.x_d) < this.LineHeight * Math.abs(this.flag_x) || Math.abs(this.y_now - this.destination.y_d) < this.LineHeight * Math.abs(this.flag_y)) {
                        canvas.moveTo(this.x_now, this.y_now);
                        canvas.lineTo(this.destination.x_d, this.destination.y_d);
                        //this.endHeight = this.LineHeight - Math.abs(this.x_now - this.cells[i].x_cell)*flag.x_flag - Math.abs(this.y_now - this.cells[i].y_cell)*flag.y_flag;
                        //if (this.flag_x == 0) {
                        //    this.endHeight = this.LineHeight - Math.abs(this.y_now - this.destination.y_d) / Math.abs(this.flag_y);
                        //}
                        //else {
                        //    this.endHeight = this.LineHeight - Math.abs(this.x_now - this.destination.x_d) / Math.abs(this.flag_x);
                        //}
                    }
                }

            }

            canvas.stroke();
            canvas.closePath();
        }
    }, settings);
};
oCanvas.registerDisplayObject("GD3", constructor_gd3, "init");

var constructor_gd2 = function (settings, core) {

    return oCanvas.extend({
        core: core,
        shapeType: "rectangular",

        init: function () {
            this.cellIndex = 0;
            this.destination.x_d = this.cells[0].x_cell;
            this.destination.y_d = this.cells[0].y_cell;

            var items=[1,2,3];
            items.forEach(function(data){
                data++;
            });
            this.endHeight = -1;
        },
        advance: function () {
            if(this.paused==1){
                if (this.cellIndex < this.cells.length - 1) {
                    this.deta_x = this.cells[this.cellIndex + 1].x_cell - this.cells[this.cellIndex].x_cell;
                    this.deta_y = this.cells[this.cellIndex + 1].y_cell - this.cells[this.cellIndex].y_cell;
                    this.deta = Math.sqrt(this.deta_x * this.deta_x + this.deta_y * this.deta_y);
                    this.flag_x = this.deta_x / this.deta;
                    this.flag_y = this.deta_y / this.deta;
                    if (this.endHeight >= 0) {
                        this.cellIndex++;
                        if (this.cellIndex < this.cells.length - 1) {
                            this.destination.x_d = this.cells[this.cellIndex].x_cell + this.flag_x * this.endHeight;
                            this.destination.y_d = this.cells[this.cellIndex].y_cell + this.flag_y * this.endHeight;
                            if (Math.abs(this.destination.x_d - this.cells[this.cellIndex + 1].x_cell) > this.Speed * Math.abs(this.flag_x) || Math.abs(this.destination.y_d - this.cells[this.cellIndex + 1].y_cell) > this.Speed * Math.abs(this.flag_y)) {
                                this.endHeight = -1;
                            }
                            else {
                                if (this.flag_x == 0) {
                                    this.endHeight = this.Speed - Math.abs(this.destination.y_d - this.cells[this.cellIndex + 1].y_cell) / Math.abs(this.flag_y);
                                }
                                else {
                                    this.endHeight = this.Speed - Math.abs(this.destination.x_d - this.cells[this.cellIndex + 1].x_cell) / Math.abs(this.flag_x);
                                }
                            }
                        }
                    }
                    else {
                        this.destination.x_d += this.flag_x * this.Speed;
                        this.destination.y_d += this.flag_y * this.Speed;
                        if (Math.abs(this.destination.x_d - this.cells[this.cellIndex + 1].x_cell) >= this.Speed * Math.abs(this.flag_x) && Math.abs(this.destination.y_d - this.cells[this.cellIndex + 1].y_cell) >= this.Speed * Math.abs(this.flag_y)) {
                            this.endHeight = -1;
                        }
                        else {
                            if (this.flag_x == 0) {
                                this.endHeight = this.Speed - Math.abs(this.destination.y_d - this.cells[this.cellIndex + 1].y_cell) / Math.abs(this.flag_y);
                            }
                            else {
                                this.endHeight = this.Speed - Math.abs(this.destination.x_d - this.cells[this.cellIndex + 1].x_cell) / Math.abs(this.flag_x);
                            }
                        }
                    }
                }
                else{
                    this.full=1;
                }
            }
        },
        draw: function () {
            var canvas = this.core.canvas;
            canvas.beginPath();
            canvas.lineJoin = 'round';
            canvas.lineWidth = this.GDwidth / 2;
            canvas.strokeStyle = "#fff";

            canvas.moveTo(this.cells[0].x_cell, this.cells[0].y_cell);
            for (var i = 1; i <= this.cellIndex; i++) {
                canvas.lineTo(this.cells[i].x_cell, this.cells[i].y_cell);
            }
            canvas.lineTo(this.destination.x_d, this.destination.y_d);
            canvas.stroke();
            canvas.closePath();
        }
    }, settings);
};
oCanvas.registerDisplayObject("GD2", constructor_gd2, "init");


//state{0:empty;1:full;2:empty it;3:charge it}
var constructor_gd1 = function (settings, core) {

    return oCanvas.extend({
        core: core,
        shapeType: "rectangular",

        init: function () {
        	if(this.state==0){
        		this.startIndex = this.cells.length-1;
                this.endIndex=this.cells.length-1;

                this.startPoint.x=this.cells[this.endIndex].x_cell;
                this.startPoint.y=this.cells[this.endIndex].y_cell;
                this.endPoint.x=this.cells[this.endIndex].x_cell;
                this.endPoint.y=this.cells[this.endIndex].y_cell;
//                this.state=1;
        	}
        	if(this.state==1){
        		this.startIndex = 0;
                this.endIndex=this.cells.length-1;

                this.startPoint.x=this.cells[0].x_cell;
                this.startPoint.y=this.cells[0].y_cell;
                this.endPoint.x=this.cells[this.endIndex].x_cell;
                this.endPoint.y=this.cells[this.endIndex].y_cell;
//                this.state=1;
        	}
            
            this.endHeight = -1;
//            this.speed=2;
        },
        
        advance: function () {
        	if(this.state==2){
        		if(this.endHeight>=0){
        			this.startIndex+=1;
        		}
        		if(this.startIndex==this.endIndex){
        			this.state=0;
        			this.endPoint.x=this.cells[0].x_cell;
        			this.endPoint.y=this.cells[0].y_cell;
        			this.startIndex=0;
        			this.endIndex=0;
        			this.startPoint.x=this.endPoint.x;
        			this.startPoint.y=this.endPoint.y;
        			this.endHeight=-1;
        			$(document).trigger('drain');
        		}
        		else{
        			 this.deta_x = this.cells[this.startIndex + 1].x_cell - this.cells[this.startIndex].x_cell;
                     this.deta_y = this.cells[this.startIndex + 1].y_cell - this.cells[this.startIndex].y_cell;
                     this.deta = Math.sqrt(this.deta_x * this.deta_x + this.deta_y * this.deta_y);
                     this.flag_x = this.deta_x / this.deta;
                     this.flag_y = this.deta_y / this.deta;
                     
                     if (this.endHeight >= 0) {
                             this.startPoint.x = this.cells[this.startIndex].x_cell + this.flag_x * this.endHeight;
                             this.startPoint.y = this.cells[this.startIndex].y_cell + this.flag_y * this.endHeight;
                             if (Math.abs(this.startPoint.x - this.cells[this.startIndex + 1].x_cell) > this.speed * Math.abs(this.flag_x) || Math.abs(this.startPoint.y - this.cells[this.startIndex + 1].y_cell) > this.speed * Math.abs(this.flag_y)) {
                                 this.endHeight = -1;
                             }
                             else {
                                 if (this.flag_x == 0) {
                                     this.endHeight = this.speed - Math.abs(this.startPoint.y - this.cells[this.startIndex + 1].y_cell) / Math.abs(this.flag_y);
                                 }
                                 else {
                                     this.endHeight = this.speed - Math.abs(this.startPoint.x - this.cells[this.startIndex + 1].x_cell) / Math.abs(this.flag_x);
                                 }
                             }
                     }
                     else {
                         this.startPoint.x += this.flag_x * this.speed;
                         this.startPoint.y += this.flag_y * this.speed;
                         if (Math.abs(this.startPoint.x - this.cells[this.startIndex + 1].x_cell) >= this.speed * Math.abs(this.flag_x) && Math.abs(this.startPoint.y  - this.cells[this.startIndex + 1].y_cell) >= this.speed * Math.abs(this.flag_y)) {
                             this.endHeight = -1;
                         }
                         else {
                        	 if (this.flag_x == 0) {
                                 this.endHeight = this.speed - Math.abs(this.startPoint.y - this.cells[this.startIndex + 1].y_cell) / Math.abs(this.flag_y);
                             }
                             else {
                                 this.endHeight = this.speed - Math.abs(this.startPoint.x - this.cells[this.startIndex + 1].x_cell) / Math.abs(this.flag_x);
                             }
                         }
                     }
        		}    			        		
        	}else if(this.state==3){
        		
        		
        		if(this.endHeight>=0){
        			this.endIndex+=1;
        		}
        		if(this.endIndex==this.cells.length-1){
        			this.state=1;
        			this.endHeight=-1;
        			$(document).trigger('overflow');
        		}
        		else{
        			 this.deta_x = this.cells[this.endIndex + 1].x_cell - this.cells[this.endIndex].x_cell;
                     this.deta_y = this.cells[this.endIndex + 1].y_cell - this.cells[this.endIndex].y_cell;
                     this.deta = Math.sqrt(this.deta_x * this.deta_x + this.deta_y * this.deta_y);
                     this.flag_x = this.deta_x / this.deta;
                     this.flag_y = this.deta_y / this.deta;
                     
                     if (this.endHeight >= 0) {
                             this.endPoint.x = this.cells[this.endIndex].x_cell + this.flag_x * this.endHeight;
                             this.endPoint.y = this.cells[this.endIndex].y_cell + this.flag_y * this.endHeight;
                             if (Math.abs(this.endPoint.x - this.cells[this.endIndex + 1].x_cell) > this.speed * Math.abs(this.flag_x) || Math.abs(this.endPoint.y - this.cells[this.endIndex + 1].y_cell) > this.speed * Math.abs(this.flag_y)) {
                                 this.endHeight = -1;
                             }
                             else {
                                 if (this.flag_x == 0) {
                                     this.endHeight = this.speed - Math.abs(this.endPoint.y - this.cells[this.endIndex + 1].y_cell) / Math.abs(this.flag_y);
                                 }
                                 else {
                                     this.endHeight = this.speed - Math.abs(this.endPoint.x - this.cells[this.endIndex + 1].x_cell) / Math.abs(this.flag_x);
                                 }
                             }
                     }
                     else {
                         this.endPoint.x += this.flag_x * this.speed;
                         this.endPoint.y += this.flag_y * this.speed;
                         if (Math.abs(this.endPoint.x - this.cells[this.endIndex + 1].x_cell) >= this.speed * Math.abs(this.flag_x) && Math.abs(this.endPoint.y  - this.cells[this.endIndex + 1].y_cell) >= this.speed * Math.abs(this.flag_y)) {
                             this.endHeight = -1;
                         }
                         else {
                        	 if (this.flag_x == 0) {
                                 this.endHeight = this.speed - Math.abs(this.endPoint.y - this.cells[this.endIndex + 1].y_cell) / Math.abs(this.flag_y);
                             }
                             else {
                                 this.endHeight = this.speed - Math.abs(this.endPoint.x - this.cells[this.endIndex + 1].x_cell) / Math.abs(this.flag_x);
                             }
                         }
                     }
        		}    			        	      		
        		
        	}else if(this.state==1){
        		this.startIndex = 0;
                this.endIndex=this.cells.length-1;
                this.startPoint.x=this.cells[0].x_cell;
                this.startPoint.y=this.cells[0].y_cell;
                this.endPoint.x=this.cells[this.endIndex].x_cell;
                this.endPoint.y=this.cells[this.endIndex].y_cell;
                this.state=1;
                this.endHeight = -1;
        	}else {
//        		this.startIndex = this.cells.length-1;
//                this.endIndex=this.cells.length-1;
//                this.startPoint.x=this.cells[this.endIndex].x_cell;
//                this.startPoint.y=this.cells[this.endIndex].y_cell;
//                this.endPoint.x=this.cells[this.endIndex].x_cell;
//                this.endPoint.y=this.cells[this.endIndex].y_cell;
//                this.endHeight = -1;
//                this.state=0;  
        		this.state=0;
    			this.endPoint.x=this.cells[0].x_cell;
    			this.endPoint.y=this.cells[0].y_cell;
    			this.startIndex=0;
    			this.endIndex=0;
    			this.startPoint.x=this.endPoint.x;
    			this.startPoint.y=this.endPoint.y;
    			this.endHeight=-1;
        	}
        	
        },
        draw: function () {
            var canvas = this.core.canvas;
            canvas.beginPath();
            canvas.lineJoin = 'round';
            canvas.lineWidth = this.GDwidth / 2;
            canvas.strokeStyle = this.fill;
  
            
            
            canvas.moveTo(this.startPoint.x, this.startPoint.y);
            for (var i = this.startIndex+1; i <= this.endIndex; i++) {
                canvas.lineTo(this.cells[i].x_cell, this.cells[i].y_cell);
            }
            canvas.lineTo(this.endPoint.x, this.endPoint.y);

            canvas.stroke();
            canvas.closePath();
        }
    }, settings);
};
oCanvas.registerDisplayObject("GD1", constructor_gd1, "init");
//随机气泡模型
//
var constructor_bubble = function (settings, core) {

    return oCanvas.extend({
        core: core,
        shapeType: "rectangular",

        init: function () {
            this.map=[
                {r:2,speed:3},
                {r:3,speed:3},
                {r:4,speed:3},
                {r:5,speed:3},
                {r:6,speed:3},
                {r:7,speed:3},
                {r:8,speed:3},
                {r:9,speed:3},
                {r:10,speed:3}
            ];
                this.points=[];
                this.height=this.container.height_now;
                this.i=1;

        },
        advance: function () {
            this.height=this.container.height_now;
            	if(this.i<10){
            		this.i+=1;
            	}
                if(this.i==10){
                    var new_point={
                        x:this.start.x+this.offset*2*(Math.random()-0.5),
                        y:this.start.y-this.map[0].r,
                        r:this.map[0].r
                    };
                    this.points.push(new_point);
                    this.i=1;

                }
            if(this.points.length>0){
                for(var i=0;i<this.points.length;i++){
                    this.points[i].x+=this.offset*2*(Math.random()-0.5);
                    this.points[i].y-=3;
                    if(this.start.y-this.points[i].y>this.height-this.points[i].r-33){
                        this.points.shift();
                    }
                }
            }
        },
        draw: function () {
            var canvas = this.core.canvas;

            canvas.lineJoin = 'round';
            canvas.lineWidth = this.GDwidth;
            canvas.strokeStyle = "#fff";
            if(this.points.length>0){
                for(var i=0;i<this.points.length;i++){
                    canvas.beginPath();
                    canvas.arc(this.points[i].x,this.points[i].y,5,0,2*Math.PI);
                    canvas.stroke();
                    canvas.closePath();
                }

            }

        }
    }, settings);
};
oCanvas.registerDisplayObject("bubble", constructor_bubble, "init");
//画实线管道函数，参数：
//cells数组,parent,GDwidth,color
function createGD1(options){
	var GD02 = options.parent.display.GD1({
		cells:options.cells,
	        startPoint: {
	            x: 0, y: 0
	        },
	       endPoint: {
	            x: 0, y: 0
	        },
	        speed:options.speed,
	        startIndex: 0,
	        endIndex:0,
	        GDwidth:options.GDwidth,
	        fill:options.color,
	        endHeight: 0,
	        state:options.state
	        
	});
	options.parent.addChild(GD02);
    return GD02;
}

function createGD3(options){
		 var GD03 = options.parent.display.GD3({
		        x: 0,
		        y: 0,
		        destination: {
		            x_d: 0, y_d: 0
		        },
		        cells: options.cells,
		        cellIndex: 0,
		        Speed:options.speed,
		        GDwidth: options.GDwidth,
		        LineHeight: 10,
		        x_now: 0,
		        y_now: 0,
		        firstX: 0,
		        firstY: 0,
		        beginHeight: 0,
		        endHeight: 0,
		        paused: 1,
		        full:0,
		        fill:options.color
	        
	});
	options.parent.addChild(GD03);
    return GD03;
}


//画管道函数,参数：
//parent,cells,GDwidth,color
function createGD(options){
    var GD01 = options.parent.display.GD({
        x: 0,
        y: 0,
        destination: {
            x_d: 0, y_d: 0
        },
        cells: options.cells,
        cellIndex: 0,
        Speed: 2,
        GDwidth: options.GDwidth,
        LineHeight: 10,
        x_now: 0,
        y_now: 0,
        firstX: 0,
        firstY: 0,
        beginHeight: 0,
        endHeight: 0,
        paused: 1,
        full:0,
        fill:options.color
    });
    options.parent.addChild(GD01);
    return GD01;
}
//画水池函数
//参数如下：parent,x,y,width,height,[trail_flag,trail],speed,color
function createSC(options){
    var SC01;
    if(options.trail_flag==1){
        SC01 = options.parent.display.SC_show({
            x: options.x,
            y: options.y,
            Width: options.width,
            Height: options.height,
            height_now: 0,
            trail_flag: 1,
            trail: options.trail,
            t: 1405,
            speed:options.speed*2,
            fill: options.color,
            full:0,
            start:0
        });
    }else{
        SC01 = options.parent.display.SC_show({
            x: options.x,
            y: options.y,
            Width: options.width,
            Height: options.height,
            height_now: 0,
            trail_flag: 0,
            t: 1405,
            speed:options.speed*2,
            fill: options.color,
            full:0,
            start:0
        });
    }
    options.parent.addChild(SC01);
    return SC01;
}

function createSC1(options){
    var SC02;
    if(options.trail_flag==1){
        SC02 = options.parent.display.SC_show({
            x: options.x,
            y: options.y,
            Width: options.width,
            Height: options.height,
            height_now: options.height,
            trail_flag: 1,
            trail: options.trail,
            t: 1405,
            speed:options.speed*2,
//            a:0,
            fill: options.color,
//            fill: "rgba(26,215,255,options.a)",
            full:0,
            start:0
        });
    }else{
        SC02 = options.parent.display.SC_show({
            x: options.x,
            y: options.y,
            Width: options.width,
            Height: options.height,
            height_now: options.height,
            trail_flag: 0,
            t: 1405,
            speed :options.speed*2,
//            a:0,
            fill: options.color,
//            fill: "rgba(26,215,255,options.a)",
            full:0,
            start:0
        });
    }
    options.parent.addChild(SC02);
    return SC02;
}

