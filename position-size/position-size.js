window.onload = function () {
    var one = document.getElementById("one");
    var text1 = document.getElementById("text1");
    var text2 = document.getElementById("text2");
    var text3 = document.getElementById("text3");
    var text4 = document.getElementById("text4");
    var text5 = document.getElementById("text5");
    var two = document.getElementById("two");
    var fourth = document.getElementById("fourth");
    var text6 = document.getElementById("text6");

    /* scrollWidth，scrollHeight
        获取的是对象的实际内容的宽度和高度，包含padding，但不包含border和margin
    */
    var scrollWidth = one.scrollWidth;
    text1.innerHTML = scrollWidth;

    /* clientWidth，clientHeight
        获取的是对象的可视区的高度和宽度，包含padding，但不包含border和margin
    */
    var clientWidth = one.clientWidth;
    text2.innerHTML = clientWidth;

    /* offsetWidth，offsetHeight
        获取的是对象整体的实际宽度和高度，包含padding，包含border，但不包含margin
    */
    var offsetWidth = one.offsetWidth;
    text3.innerHTML = offsetWidth;

    /* offsetLeft，offsetTop

    */
    var offsetTop = two.offsetTop;
    text4.innerHTML = offsetTop;
    var offsetLeft = two.offsetLeft;
    text5.innerHTML = offsetLeft;

    /* 此时：如果外层容器（div.three）不定位时，fourth的offsetLeft属性值就是外层容器div.three的margin-left值 + padding-left值
        如果外层容器（div.three）给了定位，fourth相对于外层容器定位，此时，fourth的offsetLeft属性值就是相对于外层容器定位的left值
    */
    var offsetLeft1 = fourth.offsetLeft;
    text6.innerHTML = offsetLeft1;

    /* 总结：
        scrollWidth，scrollHeight
            【获取的是对象的实际内容的宽度和高度，包含padding，但不包含border和margin】
            有两种情况
            1 元素内无内容或者内容不超过可视区，滚动条不出现或者不可用的情况下
                scrollWidth = clientWidth，两者皆为内容可视区的宽度
            2 元素的内容超过可视区，滚动条出现和可用的情况下
                scrollWidth > clientWidth
                scrollWidth 为实际内容的宽度（注意是实际内容）
                clientWidth 为内容可视区的宽度（内容可视区）
                offsetWidth 是元素的实际宽度（注意是元素【标签】）

        clientWidth，clientHeight
            【获取的是对象的可视区的高度和宽度，包含padding，但不包含border和margin】

        offsetWidth，offsetHeight
            【获取的是对象（整体）的实际宽度和高度，包含padding，包含border，但不包含margin】

        offsetLeft，offsetTop
            【获取的是元素的位置属性】
            注意：这两个属性所储存的数值并不是该元素相对整个浏览器画布的绝对位置，而是相对于其父元素位置的相对位置。
                 也就是说这两个数值得到的是以其（【父元素】）左上角（0,0）点从而计算出的数值。所以，如果要得到它的
                 绝对位置，那么就必须依次向上获取他的父元素的位置。然后获取它父元素的offsetLeft和offsetTop，一直
                 递归到浏览器的整个画布横纵距离的时候

            // 定义一个获取元素位置的方法
            function getElemPos (obj) {
                var pos = {"top": 0, "left": 0};
                if (obj.offsetParent) {
                    while (obj.offsetParent) {
                        pos.top += obj.offsetTop;
                        pos.left += obj.offsetLeft;
                        obj = obj.offsetParent;
                    }
                } else if (obj.x) {
                    pos.left += obj.x;
                } else if (obj.y) {
                    pos.top += obj.y;
                }
                return {x: pos.left, y: pos.top};
            }

        offsetParent
            返回一个对象的引用，这个对象是距离调用offsetParent的元素最近的（在包含层次中最靠近的），并且是已经进行
            过css定位的容器元素。如果这个容器元素没有进行css定位，则offsetParent属性的取值为根元素的引用

            两条规则：
                1 如果当前元素的父级元素没有进行css定位，offsetParent为body
                2 如果当前元素的父级元素中有css定位，offsetParent取最近的那个父级元素
    */
};
