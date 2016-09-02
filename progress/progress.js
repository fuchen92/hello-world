window.onload = function () {
    var distance = 0;
    var progressBar = document.getElementById("progressBar"),
        progress = document.getElementById("progress"),
        progressBtn = document.getElementById("progressBtn"),
        month = document.getElementById("showMonth");

    progressBtn.onmousedown = function () {
        var e = window.event || arguments[0];
        distance = e.clientX - progressBtn.offsetLeft;
        document.onmousemove = function () {
            var e = window.event || arguments[0];
            var left = e.clientX - distance;
            if (left < 0) {
                left = 0;
            } else if (left > 980) {
                left = 980;
            }
            progressBtn.style.left = left + "px";
            progress.style.width = left + "px";

            document.onmouseup = function () {
                this.onmousemove = null;
                var newLeft = left;
                var showMonth = function () {
                    var number = Math.round(newLeft / 87) + 1;
                    if (number > 12) {
                        number = 12;
                        month.innerHTML = "显示" + number + "月的数据";
                    } else {
                        month.innerHTML = "显示" + number + "月的数据";
                    }
                };
                showMonth();
            };
        };
    };
};
