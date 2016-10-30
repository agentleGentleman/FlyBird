var util = {
    extend: function (o1, o2) {
        for ( var key in o2 ) {
            // 只把o2自己的属性copy到o1身上
            if ( o2.hasOwnProperty(key) ) {
                o1[key] = o2[key];
            }
        }
    }
};