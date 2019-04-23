import "owl.carousel";
var car_items = $(".special_block__carousel");
var owl = $(".carousel");
/**
 * Инициализация карусели
 */
car_items.on("initialized.owl.carousel", function (e) {
    $(".special_block__carousel-counter .owl-counter").html("1 / <span>" + e.item.count+"</span>");
});
owl.owlCarousel({
    loop: true,
    thumbs: false,
    // nav:true,
    // autoWidth:true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    items: 1,
    lazyLoad: true,
    itemsDesktop: ["100%", 1],
    itemsDesktopSmall: ["100%", 1],
    itemsMobile: ["100%", 1],
    itemsTablet: ["100%", 1]
});

/**
 * Смена слайда
 */
car_items.on("changed.owl.carousel", function (e) {
    $(".special_block__carousel-counter .owl-counter").html(++e.page.index + " / <span>" + e.page.count+"</span>");
});
$(".icon-counter").on("click",function (e) {
    if($(this).hasClass("owl-next")){
        car_items.trigger("next.owl.carousel");
    } else {
        car_items.trigger("prev.owl.carousel");
    }
});
