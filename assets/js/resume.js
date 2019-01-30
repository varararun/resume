var Resume = {
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
