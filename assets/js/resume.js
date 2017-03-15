var _this = this;
var Resume = {
    initialize: function () {
        Resume.loadEvents();
        Resume.loadKeyboardEvents();
    },
    loadEvents: function () {
        $('.nav-btn').click(function () {
            $('.nav-btn').toggleClass('nav-close');
            $('.nav').toggleClass('nav-open');
            $('.page-wrap').toggleClass('page-wrap-disable');
        });
        $('.nav-menu>ul>li>a').click(function () {
            $('.nav-btn').toggleClass('nav-close');
            $('.nav').toggleClass('nav-open');
            $('.page-wrap').toggleClass('page-wrap-disable');
        });
        $('.details-btn').click(function () {
            $(_this).find('.details-icon').toggleClass('fa-caret-down').toggleClass('fa-caret-up');
        });
        $('.scroll-btn').click(function () {
            if ($('.scroll-btn').hasClass('top')) {
                $('body').animate({
                    scrollTop: 0
                }, "slow");
                return true;
            }
            var currentPosition = $(window).scrollTop() + 5;
            $('section').each(function (index) {
                var nextPosition = $($('section')[index]).offset().top;
                if (nextPosition > currentPosition) {
                    $('body').animate({
                        scrollTop: nextPosition
                    }, "slow");
                    return false;
                }
            });
        });
        $(window).scroll(function (event) {
            if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
                $('.scroll-btn').addClass('top');
            }
            else {
                $('.scroll-btn').removeClass('top');
            }
        });
    },
    loadKeyboardEvents: function () {
        document.onkeydown = function (e) {
            switch (e.keyCode) {
                case 37:
                    if ($("nav").hasClass("nav-open")) {
                        $(".nav-btn").click();
                    }
                    break;
                case 39:
                    if (!$("nav").hasClass("nav-open")) {
                        $(".nav-btn").click();
                    }
                    break;
                case 27:
                    if ($("nav").hasClass("nav-open")) {
                        $(".nav-btn").click();
                    }
                    break;
                case 8:
                    if ($("nav").hasClass("nav-open")) {
                        $(".nav-btn").click();
                    }
                    break;
                case 32:
                    $(".nav-btn").click();
                    break;
            }
        };
    }
};
Resume.initialize();
