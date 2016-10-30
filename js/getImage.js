/*
* function { getImage } 用来加载图片资源
* param { imgUrl: Object } 要加载图片的url
* */
function getImage( imgUrl, callback ) {
    var imgNames = Object.keys( imgUrl ),
        i = 0,
        len = imgNames.length,
        key, img,
        imgObj = {},
        imgLoadedNumber = 0;

    // 遍历所有的图片url，依次创建图片对象，
    // 然后把创建好的图片对象添加到imgObj中
    for ( ; i < len; i++ ) {
        key = imgNames[i];
        img = new Image();
        img.src = imgUrl[key];
        imgObj[key] = img;
        img.addEventListener('load', function () {
            // 当所有图片加载完毕后，执行回调，
            // 并把加载好的图片资源对象传过去
            if ( ++imgLoadedNumber >= len ) {
                callback( imgObj );
            }
        });
    }
}
