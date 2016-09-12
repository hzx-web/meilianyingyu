$(function () {
    //动态获取数据
    (function () {
        $.get("json/index.json", function (data) {
           data.forEach(function(item){
                //console.log(item);
           });
            console.log(data[0]);
        });
    })();
});