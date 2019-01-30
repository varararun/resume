var Resume = {
    closeLoader: function () {
        setTimeout(function () {
            $('#loader, .page-wrap').addClass('loaded');
            $('body').toggleClass('disable-scroll');
        }, 1000);
        setTimeout(function () {
            $('#loader').remove();
        }, 2000);
    }
};
