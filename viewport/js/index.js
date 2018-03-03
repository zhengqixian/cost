$(function () {
    topSearch();
    lbt();
    lifeLbt();

    function topSearch() {
        let $jdTopBox = $(".jd_top_form_box");
        $(window).on("scroll", function () {
            var alpha = $(this).scrollTop() / 200;
            alpha = alpha > 0.9 ? 0.9 : alpha;
            $jdTopBox.css("backgroundColor", "rgba(218,45,50," + alpha + ")");
        })
    }

    /*lbt*/
    function lbt() {
        let $lbt = $(".lbt");
        let $jdBanner = $(".jd_banner");
        let $indicator = $(".indicator");
        let width = $jdBanner.width();
        var currentIndex = 0;
        let play =()=>{$lbt.animate({
            transform: "translateX(" +
            -currentIndex * width
            + "px)"
        }, 300, function () {
            if (currentIndex == 9) {
                currentIndex = 1;
                $lbt.css("transform", "translateX(" + -currentIndex * width + "px)");
            } else if (currentIndex == 0) {
                currentIndex = 8;
                $lbt.css("transform", "translateX(" + -currentIndex * width + "px)");
            }
                /*更改指示器*/
                $indicator.find(":eq(" + (currentIndex-1) + ")").css("backgroundColor", "#fff").siblings().css("backgroundColor", "transparent");
            });
        }
        let id;
        let autoPlay = () => {
            id = setInterval(function () {
                currentIndex++;
                play();
            }, 2000)
        }
        autoPlay();
        /*添加手势事件*/
        var hammer = new Hammer($lbt[0]);
        var initLeft;
        hammer.on("panstart", function (e) {
            console.log(e.type);
            clearInterval(id);
            initLeft = $lbt.position().left;
        })
        hammer.on("panleft panright", function (e) {
            var x = e.deltaX;
            $lbt.css("transform", "translateX(" + (x + initLeft) + "px)");
        })
        hammer.on("panend", function (e) {
            var x = e.deltaX;
            Math.abs(x) > width / 4 && (x > 0 ? currentIndex-- : currentIndex++);
            play();
            autoPlay();
        })
    }
})
   /* function lifeLbt() {
        let $lifeLbt = $(".life_lbt");
        let $lifeBanner = $(".life_banner");
        let width = $lifeBanner.width();
        var currentIndex = 0;
        let play =()=>{
            $lifeLbt.animate({
                transform:"translateX("+-currentIndex*width+"px)"
            },300,function () {
                if(currentIndex == 3){
                    currentIndex = 0;
                    $lifeLbt.css("transform","translateX("+-currentIndex*width+"px)");
                }
            })
        }
        let id;
        let autoPlay = ()=>{
            id = setInterval(function () {
                currentIndex++;
                play();
            },2000)
        }
        autoPlay();
    }*/
function lifeLbt(){
    let $lifeBanner = $(".life_banner");
    let $lifeLbt = $(".life_lbt");
    let width = $lifeBanner.width();
    var currentIndex = 0;
    setInterval(function (){
        currentIndex++;
        $lifeLbt.animate({
            transform: "translateX(" + -currentIndex * width + "px)"
        }, 300, function (){
            if (currentIndex == 3){
                currentIndex = 0;
                $lifeLbt.css("transform", "translateX(0px)");
            }
        });
    }, 3000)

}
