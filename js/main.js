jQuery(document).ready(function($) {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 610) {
            $(".fixed-top").addClass("change-fix-top");
        } else {
            $(".fixed-top").removeClass("change-fix-top");
        }
    });
});
   
