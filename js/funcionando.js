$(function () {
    let c =  0;
    setInterval(function () {
        if (c == 9) {
            c = 0;
        }
        c++;
        $(".sugestoes").fadeOut(2000);
        $(".sugestoes img").attr("src","./img/produtos ("+c+").jpg");
        $(".sugestoes").fadeIn(1000)
    }, 15000);
})