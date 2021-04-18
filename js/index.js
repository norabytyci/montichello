$(document).ready(function() {
    $(".header__slider").slick({
        vertical: true,
        dots: true,
        arrows: false
    });
    $(".slick-dots").insertBefore($(".header__slider"));

    $(".header__scroll button").on("click", function() {
        $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    })
});