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
