var _this = this;
var Resume = {
    initialize: function () {
        Resume.loadEvents();
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
        $('.scrolltop-btn').click(function () {
            $('body').animate({
                scrollTop: 0
            }, "slow");
        });
        $(window).scroll(function (event) {
            if ($(window).scrollTop() > 100) {
                $('.scrolltop-btn').removeClass('scrolltop-btn-hidden');
            }
            else {
                $('.scrolltop-btn').addClass('scrolltop-btn-hidden');
            }
        });
    }
};
Resume.initialize();
