require("./timer");
require("./carousel")
require("./select");
import tippy from "tippy.js";
tippy(".icon__question",{
    arrow:true,
    placement: "bottom"
});
import "jquery-mask-plugin";
$("input[type=tel]").mask("+7(000)000-00-00");