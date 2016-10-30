/*
* @function { getCanvasContext } 创建画布，并返回画布的绘图环境
* @param { containerID: string } 存放canvas容器的ID
* @param { width: number } 画布的宽
* @param { height: number } 画布的高
* @return { Context ｝ 并返回画布的绘图环境
* */
function getCanvasContext( containerID, width, height ) {
    var canvas = document.createElement('canvas');
    width && (canvas.width = width);
    height && (canvas.height = height);
    containerID && (document.getElementById(containerID).appendChild(canvas));
    return canvas.getContext('2d');
}
