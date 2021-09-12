$(document).ready(function() {
    $(".VoltarTopo").css("display", "none");
    $("body").scroll(function() {
        if ($(this).scrollTop() == 0) {
            $(".VoltarTopo").css("display", "none");
        } else {
            $(".VoltarTopo").css("display", "block");
        }
    });
    $(".VoltarTopo").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 800);
    });
});