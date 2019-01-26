var _this = this;
var Resume = {
    initialize: function () {
        Resume.loadEvents();
        Resume.loadKeyboardEvents();
    },
    closeLoader: function () {
        setTimeout(function () {
            $('#loader, .page-wrap').addClass('loaded');
            $('body').toggleClass('disable-scroll');
        }, 2000);
        setTimeout(function () {
            $('#loader').remove();
        }, 3000);
    },
    loadEvents: function () {
        $('.nav-btn').click(function () {
            $('.nav-btn').toggleClass('nav-close');
            $('.nav').toggleClass('nav-open');
            $('.page-wrap').toggleClass('page-wrap-disable');
            $('body').toggleClass('disable-scroll');
        });
        $('.nav-menu>ul>li>a').click(function () {
            $('.nav-btn').toggleClass('nav-close');
            $('.nav').toggleClass('nav-open');
            $('.page-wrap').toggleClass('page-wrap-disable');
            $('body').toggleClass('disable-scroll');
        });
        $('.details-btn').click(function () {
            $(_this).find('.details-icon').toggleClass('fa-caret-down').toggleClass('fa-caret-up');
        });
    },
    loadKeyboardEvents: function () {
        document.onkeydown = function (e) {
            switch (e.keyCode) {
                case 37: // left arrrow
                    if ($("nav").hasClass("nav-open")) {
                        $(".nav-btn").click();
                    }
                    break;
                case 39: // right arrrow
                    if (!$("nav").hasClass("nav-open")) {
                        $(".nav-btn").click();
                    }
                    break;
                case 27: // esc
                    if ($("nav").hasClass("nav-open")) {
                        $(".nav-btn").click();
                    }
                    break;
                case 8: // delete/backspace
                    if ($("nav").hasClass("nav-open")) {
                        $(".nav-btn").click();
                    }
                    break;
                case 32: // spacebar
                    $(".nav-btn").click();
                    break;
            }
        };
    }
};
Resume.initialize();
