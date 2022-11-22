jQuery(function ($) {
    jQuery(document).ready(function () {

        // Mobile menu
        $(".hamburger").click(function () {
            $(this).toggleClass("is-active");
            $(".menu-breakpoint").toggleClass("is-active");
        });

        $('.menu-item-has-children').click(function () {
            $(this).toggleClass('open');
            $('.sub-menu').toggleClass('active');
            $('.header-bottom-outside-container').toggleClass('active');

        });

        // Subscribe form
        $(".approve-email-btn").on("click", function(e) {
            e.preventDefault();
            var email_address = $("form input[name='email']").val();
            var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
            if(pattern.test(email_address) != true) {
                $(".notifications").html("Please enter valid e-mail!");
            } else if(email_address == "") {
                $(".notifications").html("Please fill out all fields!");
            } else {
                $(".notifications").html("Email submitted!");
                $("form input[name='email']").val("");
            }
        });

        // Slider
        $(".slider").slick({
            infinite: true,
            dots: true,
            appendDots: $(".slider-dots"),
            speed: 300,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false

        });
    });
})





