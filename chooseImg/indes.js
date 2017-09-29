window.onload = function () {
    var imgs = {
        "A": ["a1.jpg", "a2.jpg", "a3.jpg", "a4.jpg", "a5.jpg", "a6.jpg", "a7.jpg"],        // 其他
        "B": ["b1.jpg", "b2.jpg", "b3.jpg", "b4.jpg", "b5.jpg", "b6.jpg", "b7.jpg"],        // 人物
        "C": ["c1.jpg", "c2.jpg", "c3.jpg", "c4.jpg", "c5.jpg", "c6.jpg", "c7.jpg"]         // 风景
    }

    var category = document.getElementById("category"),
        segmentation = document.getElementById("segmentation"),
        showList = document.getElementById("show_list");


    function chooseImg (ele) {
        var categoryVal = category.value,
            segmentationVal = segmentation.value;

        var optsFragment = document.createDocumentFragment(),
            imgsFragment = document.createDocumentFragment();

        var imgArr = imgs[categoryVal];        
        

        if (ele.id == "category") {
            for (var z = showList.children.length - 1; z >= 0; z--) {
                showList.removeChild(showList.children[z]);
            }
            for (var j = segmentation.children.length - 1; j > 0; j--) {
                segmentation.removeChild(segmentation.children[j]);
            }
            switch (categoryVal) {
                case "A": case "B": case "C":
                    for (var i = 0; i < imgArr.length; i++) {
                        var opt = document.createElement("option"),
                            imgItem = document.createElement("li"),
                            imgEle = document.createElement("img");

                        opt.value = imgArr[i].split(".")[0].replace(/(^.+)(\d)$/, "$2");
                        opt.innerHTML = imgArr[i].split(".")[0];                        
                        optsFragment.appendChild(opt);

                        imgEle.src = "imgs/" + imgArr[i];
                        imgItem.setAttribute("class", "show_item");
                        imgItem.appendChild(imgEle);
                        imgsFragment.appendChild(imgItem);
                    }
            }
            segmentation.appendChild(optsFragment)
            showList.appendChild(imgsFragment);
        } else if (ele.id == "segmentation") {
            var imgArr2 = imgArr.filter(function (item) {
                if (item.indexOf(categoryVal.toLowerCase() + segmentationVal) != -1) {
                    return item;
                }
            })
            if (segmentationVal == 0) {
                imgArr2 = imgArr;
            }
            for (var z = showList.children.length - 1; z >= 0; z--) {
                showList.removeChild(showList.children[z]);
            }
            // imgArr = imgArr.splice(imgArr[segmentationVal - 1], 1);
            // imgArr2 = imgArr.slice();
            // imgArr2.splice(imgArr2[segmentationVal - 1], 1);
            // console.log(imgArr);
            // for (var i = 0; i < imgArr2.length; i++) {
            //     var imgItem = document.createElement("li"),
            //         imgEle = document.createElement("img");

            //     imgEle.src = "imgs/" + imgArr[i];
            //     imgItem.setAttribute("class", "show_item");
            //     imgItem.appendChild(imgEle);
            //     imgsFragment.appendChild(imgItem);
            // }
            // showList.appendChild(imgsFragment);
            // imgArr2 = imgArr.slice();
            
            console.log(imgArr2)
            for (var i = 0; i < imgArr2.length; i++) {
                var imgItem = document.createElement("li"),
                    imgEle = document.createElement("img");

                imgEle.src = "imgs/" + imgArr2[i];
                imgItem.setAttribute("class", "show_item");
                imgItem.appendChild(imgEle);
                imgsFragment.appendChild(imgItem);
            }
            showList.appendChild(imgsFragment);
            imgArr2 = [];
        }
        
    }
    category.onchange = function () {
        chooseImg(this)
    }
    segmentation.onchange = function () {
        chooseImg(this);
    };
}
