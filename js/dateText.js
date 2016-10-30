(function (w) {
    /*
     * 文字类
     * param { ctx : Context } 绘图环境对象
     * param { startTime : number } 一个开始时间
     * param { x : number } 绘制文本时候的x轴坐标
     * param { y : number } 绘制文本时候的y轴坐标
     * param { font : number } 绘制文本时的样式
     * param { align : string } 绘制文本时的横向对其方式
     * param { baseline : string } 绘制文本时的纵向对其方式
     * param { fillStyle : string } 绘制文本时的颜色
     * */
    function DateText( options ) {

        this.startTime = options.startTime; // 这个属性用来记录一个开始时间

        // 借用Text构造函数给实例添加属性
        Text.prototype.init.call(this, options);

        // 因为默认的text是开始时间，需要先把text转换为可读性比较强的文本
        this.update();
    }

    // DateText实例继承Object.create返回的对象，
    // 这个对象继承Text.prototype,
    // 那么DateText实例就间接继承了Text.prototype。
    DateText.prototype = Object.create(Text.prototype);

    // 给DateText原型扩充方法
    util.extend(DateText.prototype, {

        // 更新下一帧时绘制的文本
        update: function () {

            // 计算游戏已经运行了多少毫秒
            var gameRunTime = Date.now() - this.startTime;

            // 把毫秒时间转换为可读性比较强的文本
            var hours = Math.floor(gameRunTime / (1000 * 60 * 60));
            var minutes = Math.floor(gameRunTime % (1000 * 60 * 60) / (1000 * 60));
            var seconds = Math.floor(gameRunTime % (1000 * 60) / 1000);
            this.text = '坚持了' + hours + '小时' + minutes + '分钟' + seconds + '秒！';
        }
    });

    // 暴漏到全局
    w.DateText = function ( options ) {
        return new DateText( options );
    };
}(window));