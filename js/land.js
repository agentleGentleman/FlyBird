(function ( w ){

    /*
     * constructor { Land } 大地
     * param { options: Object } 所有的参数
     * param { options.ctx: Context } 绘图环境
     * param { options.img: Image } 绘制所需的图像
     * param { options.x: number } 绘制的x轴坐标
     * param { options.y: number } 绘制的y轴坐标
     * */
    function Land( options ) {
        this.ctx = options.ctx;
        this.img = options.img;
        this.x = options.x || 0;
        this.y = options.y || 0;

        this.speed = 1;
    }

    Land.prototype = {
        constrcutor: Land,

        // 绘制大地
        draw: function () {
            this.ctx.drawImage( this.img, this.x, this.y );
        },

        // 更新下一帧数据
        update: function () {
            this.x -= this.speed;
            // 走出画布，向右拼接
            if (this.x < -this.img.width) {
                this.x += this.img.width * 4;
            }
        }
    };

    // 对外暴漏工厂函数
    w.Land = function( options ) {
        return new Land( options );
    };

}( window ));
