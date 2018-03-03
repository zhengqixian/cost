$(function () {
    beganChallenge();

    /*开始游戏*/
    function beganChallenge() {
        var startImg = $(".p1_1:nth-child(2)>img:nth-child(1)")[0];
        var hammer = new Hammer(startImg);
        hammer.on("tap",function () {
  $(".msg_self").removeClass("hide");
        })
    }
})