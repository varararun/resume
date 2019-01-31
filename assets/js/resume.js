var Resume = {
    scrollToTop: function () {
        $("html, body").animate({ scrollTop: 0 }, 3000);
    },
    closeLoader: function () {
        setTimeout(function () {
            $('#loader, .page-wrap, #bg-img').removeClass('loading');
            $('body').toggleClass('disable-scroll');
        }, 1000);
        setTimeout(function () {
            $('#loader').remove();
        }, 2000);
    }
};
