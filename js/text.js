(function (w) {
    /*
     * 文字类
     * param { ctx : Context } 绘图环境对象
     * param { text : string } 绘制的文本
     * param { x : number } 绘制文本时候的x轴坐标
     * param { y : number } 绘制文本时候的y轴坐标
     * param { font : number } 绘制文本时的样式
     * param { align : string } 绘制文本时的横向对其方式
     * param { baseline : string } 绘制文本时的纵向对其方式
     * param { fillStyle : string } 绘制文本时的颜色
     * */
    function Text( options ) {
        this.ctx = options.ctx;
        this.text = options.text;
        this.x = options.x;
        this.y = options.y;
        this.fillStyle = options.fillStyle;
        this.font = options.font || '20px 微软雅黑';
        this.align = options.align || 'center';
        this.baseline = options.baseline || 'middle';
    }

    // 把指定文本绘制到画布上
    Text.prototype.draw = function () {

        // 把默认的状态保存一份
        this.ctx.save();

        this.ctx.font = this.font;
        this.ctx.textAlign = this.align;
        this.ctx.textBaseline = this.baseline;
        this.ctx.fillStyle = this.fillStyle;
        this.ctx.fillText(this.text, this.x, this.y);

        // 文本绘制完毕后，恢复默认的状态
        this.ctx.restore();
    };

    // 暴漏到全局
    w.Text = function ( options ) {
        return new Text( options );
    };

    // 把工厂函数的原型与构造函数的原型保持一致
    w.Text.prototype = Text.prototype;

    // 把构造函数添加到工厂函数的原型中，以便外界可以找到它。
    w.Text.prototype.init = Text;
}(window));
