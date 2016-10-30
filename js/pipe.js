/*
 * 管道的一些特征：
 * 1、上下管道是成对出现的，所以x坐标可以共享
 * 2、上下管道的间距是一样的
 * 3、管道高度是随机生成的，如果随机生成了上管道的高度，那么下管道就可以计算了
 * 4、当管道走出画布，从右边出来时，需要重新生成管道的高度
 * 5、第一根管道第一次绘制时，需要和画布产生一个距离
 * */

(function ( w ) {

    /*
     * constructor { Pipe } 管道
     * param { options: Object } 所有的参数
     * param { options.ctx: Context } 绘图环境
     * param { options.downImage: Image } 口朝下的管道(在画布上面绘制)
     * param { options.upImage: Image } 口朝上的管道(在画布下面绘制)
     * param { options.x: number } 共享的x轴坐标
     * param { options.pipeSpace: number } 上下管道之间的距离
     * */
    function Pipe( options ) {
        this.ctx = options.ctx;
        this.downImage = options.downImage;
        this.upImage = options.upImage;
        this.width = this.downImage.width;
        this.height = this.downImage.height;
        this.x = options.x;
        this.pipeSpace = options.pipeSpace;
        this.speed = 1;

        this._initPipeY();
    }

    util.extend(Pipe.prototype, {

        // 绘制管道
        draw: function () {
            this.ctx.drawImage( this.downImage, this.x, this.downY );
            this.ctx.drawImage( this.upImage, this.x, this.upY );
            this._drawPath();
        },

        // 根据管道的宽度以及坐标绘制相应的矩形路径
        _drawPath: function () {
            this.ctx.rect( this.x, this.downY, this.width, this.height );
            this.ctx.rect( this.x, this.upY, this.width, this.height );
        },

        // 随机生成上下管道的y轴坐标
        _initPipeY: function () {
            // 随机生成上管道的高度在30 ~ 230之间
            var downPipeHeight = Math.floor(Math.random() * 200) + 30;
            this.downY = downPipeHeight - this.height  // 口朝下管道的y轴坐标
            this.upY = downPipeHeight + this.pipeSpace;    // 口朝上管道的y轴坐标
        },

        // 刷新下一帧数据
        update: function () {
            this.x -= this.speed;
            // 管道走出画布，重新生成管道的上下y轴坐标，再向右拼接，
            if ( this.x < -this.width ) {
                this.x += this.width * 3 * 6;
                this._initPipeY();
            }
        }
    });

    w.Pipe = function( options ) {
        return new Pipe( options );
    }

}( window ));