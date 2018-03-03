$(function () {
    lbt();
    function lbt() {
        $(window).resize(function () {
            var width = $(window).width();
            if(width>=768){
                var marginLeft = 1920/2 - width/2;
                $("#carousel-example-generic img").css("marginLeft",-marginLeft);
            }else{
                $("#carousel-example-generic img").css("marginLeft",-width/2);
            }
        }).trigger("resize");
    }
})