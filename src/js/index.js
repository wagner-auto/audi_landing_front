require("./timer");
require("./carousel")
require("./select");
import "@fancyapps/fancybox";
import tippy from "tippy.js";
tippy(".icon__question",{
    arrow:true,
    placement: "bottom"
});
import "jquery-mask-plugin";
$("input[type=tel]").mask("+7(000)000-00-00");
/**
 * Появление а/м при скролле
 */
$(window).on("scroll", function () {
    var showcase = $(".showcase__cars").position().top;
    var position = $(this).scrollTop() + window.innerHeight - 300;
    if (position > showcase) {
        $(".showcase__item").addClass("animated");
        animatedCounter();
        $(this).off("scroll");
    }
});

/**
 * Анимация счётчика
 * @returns {undefined}
 */
function animatedCounter() {
    $(".animated .item__head_in_stock").each(function () {
        $(this).prop("Counter", 0).animate({
            Counter: $(this).text()
        }, {
                duration: 3500,
                easing: "swing",
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
    });
}

/**
 * Появление а/м при скролле
 */
$(window).on("scroll", function () {
    var showcase = $(".showcase__cars").position().top;
    var position = $(this).scrollTop() + window.innerHeight - 300;
    if (position > showcase) {
        $(".showcase__item").addClass("animated");
        animatedCounter();
        $(this).off("scroll");
    }
});

/**
 * Анимация счётчика
 * @returns {undefined}
 */
function animatedCounter() {
    $(".animated .item__head_in_stock").each(function () {
        $(this).prop("Counter", 0).animate({
            Counter: $(this).text()
        }, {
                duration: 3500,
                easing: "swing",
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
    });
}


$(".cars_in_stock__count").each(function () {
    $(this).prop("Counter", 0).animate({
        Counter: $(this).text()
    }, {
            duration: 3000,
            easing: "swing",
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
});
$("text.time").each(function () {
    $(this).prop("Counter", 0).animate({
        Counter: $(this).text()
    }, {
            duration: 500,
            easing: "swing",
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
});