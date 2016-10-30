(function ( w ) {

    /*
    * constructor { Bird } 鸟
    * param { options: Object } 所有的参数
    * param { options.ctx: Context } 绘图环境
    * param { options.img: Image } 绘制小鸟所需的图像
    * param { options.widthMaxFrame: number } 图片横向有多少帧
    * param { options.heightMaxFrame: number } 图片纵向有多少帧
    * param { options.x: number } 小鸟绘制的x轴坐标
    * param { options.y: number } 小鸟绘制的y轴坐标
    * param { options.width: number } 小鸟的宽
    * param { options.height: number } 小鸟的高
    * */
    function Bird( options ) {
        this.ctx = options.ctx;
        this.img = options.img;
        this.x = options.x || 10;
        this.y = options.y || 10;

        // 小鸟的当前帧
        this.frame = 0;

        // 小鸟下落的速度
        this.speed = 1;
        this.speedPlus = 0.05;

        // 如果不告知图片宽高的帧数，那么默认为1
        this.widthMaxFrame = options.widthMaxFrame || 1;
        this.heightMaxFrame = options.heightMaxFrame || 1;

        // 求小鸟默认的宽和高
        this.defaultWidth = options.img.width / this.widthMaxFrame;
        this.defaultHeight = options.img.height / this.heightMaxFrame;

        // 用户指定小鸟绘制的大小，如果不指定，则使用默认的大小
        this.width = options.width || this.defaultWidth;
        this.height = options.height || this.defaultHeight;

        this._bind();
    }

    // 给原型扩充方法
    util.extend( Bird.prototype, {

        // 绘制小鸟
        draw: function () {
            this.ctx.drawImage( this.img,
                this.defaultWidth * this.frame, 0, this.defaultWidth, this.defaultHeight,
                this.x, this.y, this.width, this.height);
        },

        // 计算下一帧绘制所需的数据
        update: function () {
            this.frame = ++this.frame % this.widthMaxFrame;
            this.y += this.speed;
            this.speed += this.speedPlus;
        },

        // 事件绑定
        _bind: function () {
            var self = this;
            this.ctx.canvas.addEventListener('click', function () {
                self.speed = -2;
            });
        }
    });

    // 对外暴漏工厂函数
    w.Bird = function ( options ) {
        return new Bird( options );
    };

}( window ));