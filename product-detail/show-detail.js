window.onload = function () {

    // 封装一个id获取元素的方法
    function getId (id) {
        return document.getElementById(id);
    }

    // 获取要操作的元素
    var box = getId("box");
    var small = getId("small");
    var mask = getId("mask");
    var big = getId("big");
    var detailImg = big.getElementsByTagName("img")[0];

    /*
        当鼠标进入small的时候，遮罩层要出现，详情图片要出现；
        当鼠标移出small的时候，遮罩层消失，详情图片消失
    */
    small.onmouseover = function () {
        mask.style.display = "block";
        big.style.display = "block";
    };
    small.onmouseout = function () {
        mask.style.display = "none";
        big.style.display = "none";
    };

    /* 当鼠标在small容器里面移动的时候遮罩层（mask）要跟随移动，并且鼠标的位于遮罩层（mask）的中心点
        获得事件对象
        获取box（最外层容器）相对整个页面左侧的距离和顶部距离
        获得鼠标相对于页面的坐标分别保存在currX和currY中
        使用鼠标的当前坐标值 - box（最外层容器）相对页面的左侧和顶部距离再 - 遮罩层的宽高的各一半分别保存在变量 x，y中
        如果x小于0，x等于0
        如果x大于small容器的宽度减去遮罩层（mask）的宽度
            x等于small容器的宽度减去遮罩层（mask）的宽度
        如果y小于0，y等于0
        如果y大于small容器的高度减去遮罩层（mask）的高度
            y等于small容器的高度减去遮罩层（mask）的高度
        把x和y设置为mask的left和top值
    */
    small.onmousemove = function () {
        var e = window.event || arguments[0];
        var marginL = box.offsetLeft;
        var marginT = box.offsetTop;
        var currX = e.clientX;
        var currY = e.clientY;
        var x = currX - marginL - mask.offsetWidth / 2;
        var y = currY - marginT - mask.offsetHeight / 2;

        // 限制mask的移动区域
        if (x < 0) {
            x = 0;
        }
        if (x > small.offsetWidth - mask.offsetWidth) {
            x = small.offsetWidth - mask.offsetWidth;
        }
        if (y < 0) {
            y = 0;
        }
        if (y > small.offsetHeight - mask.offsetHeight) {
            y = small.offsetHeight - mask.offsetHeight;
        }
        mask.style.left = x + "px";
        mask.style.top = y + "px";

        // 设置大盒子中显示的内容
        var relativeX = mask.offsetLeft;
        var relativeY = mask.offsetTop;
        var proporationX = detailImg.offsetWidth / small.offsetWidth;
        var proporationY = detailImg.offsetHeight / small.offsetHeight;
        detailImg.style.marginLeft = -relativeX * proporationX + "px";
        detailImg.style.marginTop = -relativeY * proporationY + "px";
    };
};
