/*
 * 描述：html5手机端向左滑动删除交互特效（实现聊天软件中对联系人列表联系人的操作）
 */
window.addEventListener("load", function () {
    var initX;          // 触摸位置
    var moveX;          // 滑动时的位置
    var X = 0;          // 移动距离
    var objX = 0;       // 目标对象位置
    window.addEventListener("touchstart", function (event) {
        event.preventDefault();
        var obj = event.target.parentNode;
        if (obj.className == "list-li") {
            initX = event.targetTouches[0].pageX;
            // console.log(event.targetTouches[0]);
            // console.log(obj);
            // console.log(obj.style.WebkitTransform);
            objX = (obj.style.WebkitTransform.replace(/translateX\(/g, "").replace(/px\)/g, "")) * 1;
            // console.log(objX);
        }
        if (objX == 0) {
            window.addEventListener("touchmove", function (event) {
                event.preventDefault();
                var obj = event.target.parentNode;
                if (obj.className == "list-li") {
                    moveX = event.targetTouches[0].pageX;
                    X = moveX - initX;
                    if (X >= 0) {
                        obj.style.WebkitTransform = "translateX(" + 0 + "px)";
                    } else if (X < 0) {
                        var l = Math.abs(X);
                        obj.style.WebkitTransform = "translateX(" + -l + "px)";
                        if (l > 80) {
                            l = 80;
                            obj.style.WebkitTransform = "translateX(" + -l + "px)";
                        }
                    }
                }
            });
        } else if (objX < 0) {
            window.addEventListener("touchmove", function (event) {
                event.preventDefault();
                var obj = event.target.parentNode;
                if (obj.className == "list-li") {
                    moveX = event.targetTouches[0].pageX;
                    X = moveX - initX;
                    if (X >= 0) {
                        var r = -80 + Math.abs(X);
                        obj.style.WebkitTransform = "translateX(" + r + "px)";
                        if (r > 0) {
                            r = 0;
                            obj.style.WebkitTransform = "translateX(" + r + "px)";
                        }
                    } else {    // 向左滑动
                        obj.style.WebkitTransform = "translateX(" + -80 + "px)";
                    }
                }
            });
        }
    });
    window.addEventListener("touchend", function (event) {
        event.preventDefault();
        var obj = event.target.parentNode;
        if (obj.className == "list-li") {
            objX = (obj.style.WebkitTransform.replace(/translateX\(/g, "").replace(/px\)/g, "")) * 1;
            if (objX > -40) {
                obj.style.WebkitTransform = "translateX(" + 0 + "px";
                objX = 0;
            } else {
                obj.style.WebkitTransform = "translateX(" + -80 + "px";
                objX = -80;
            }
        }
    });
});
/* 触摸事件
    ● touchstart:当手指触摸屏幕时触发；即使已经有一个手指放在了屏幕上也会触发。
    ● touchmove:当手指在屏幕上滑动时连续的触发。在这个事件发生期间，调用preventDefault()可阻止滚动。
    ● touchend:当手指从屏幕上移开时触发。
    ● touchcancel:当系统停止跟踪触摸时触发。关于此事件的确切触发事件，文档中没有明确说明。

    上面这几个事件都会冒泡，也都可以取消。虽然这些触摸事件没有在DOM规范中定义，但它们却是以兼容DOM的方式实现的。因此，每个触摸事件的event对象都提供了在鼠标事件中常见的属性:bubbles、cancelable、view、clientX、clientY、screenX、screenY、detail、altKey、shiftKey、ctrlKey和metaKey。

    除了常见的DOM属性外，触摸事件还包含下列三个用于跟踪触摸的属性。

    ● touches:表示当前跟踪的触摸操作的Touch对象的数组。
    ● targetTouches:特定于事件目标的Touch对象的数组。
    ● changeTouches:表示自上次触摸以来发生了什么改变的Touch对象的数组。

    每个Touch对象包含下列属性。

    ● clientX:触摸目标在视口中的X坐标。
    ● clientY:触摸目标在视口中的Y坐标。
    ● identifier：表示触摸的唯一ID。
    ● pageX：触摸目标在页面中的x坐标。
    ● pageY：触摸目标在页面中的y坐标。
    ● screenX:触摸目标在屏幕中的x坐标。
    ● screenY:触摸目标在屏幕中的y坐标。
    ● target:触摸的DOM节点坐标。
*/

/*
    function handleTouchEvent(event) {
        //只跟踪一次触摸
        if (event.touches.length == 1) {
            var output = document.getElementById("output");
            switch (event.type) {
                case "touchstart":
                    output.innerHTML = "Touch started (" + event.touches[0].clientX + "," + event.touches[0].clientY + ")";
                    break;
                case "touchend":
                    output.innerHTML += "<br>Touch ended (" + event.changedTouches[0].clientX + "," + event.changeTouches[0].clientY + ")";
                    break;
                case "touchmove":
                    event.preventDefault(); //阻止滚动
                    output.innerHTML += "<br>Touch moved (" + event.changedTouches[0].clientX + "," + event.changedTouches[0].clientY + ")";
                    break;
            }
        }
    }
    document.addEventListener("touchstart", handleTouchEvent, false);
    document.addEventListener("touchend", handleTouchEvent, false);
    document.addEventListener("touchmove", handleTouchEvent, false);
*/
