/* 获取标签之间的内容 */
var str = "<em>999</em><p>aaa</p> <div class='box'>新中国</div>";
var reg = /<[^>]+>([^<]*)<\/[^>]+>/g;
var arr = [];
str.replace(reg, function ($0, $1) {
    arr.push($1);
});
console.log(arr);
// 返回的结果为       ["999", "aaa", "新中国"]
