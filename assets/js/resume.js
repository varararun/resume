var Resume = {
    initialize: function () {
        Resume.loadEvents();
    },
    loadEvents: function () {
        $('#loader').addClass('loading');
        Resume.loadLinkEvents();
    },
    loading: function () {
        $('.bg-img, .bg-overlay, .page-wrap').addClass('loading');
    },
    scrollToTop: function () {
        $('html, body').animate({ scrollTop: 0 }, 3000);
    },
    loadLinkEvents: function () {
        $("a[animate-link='true']").click(function (e) {
            Resume.loading();
            e.preventDefault();
            setTimeout(function () {
                window.open(e.currentTarget.href, '_self');
            }, 1000);
        });
    },
    closeLoader: function () {
        setTimeout(function () {
            $('.loading').removeClass('loading');
            $('body').toggleClass('disable-scroll');
        }, 1000);
        setTimeout(function () {
            $('#loader').remove();
        }, 1500);
    },
};
