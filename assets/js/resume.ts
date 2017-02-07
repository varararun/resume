var Resume = {
	initialize: () => {
		Resume.loadEvents();
	},
	loadEvents: () => {
		$('.nav-btn').click(() => {
			$('.nav-btn').toggleClass('nav-close');
			$('.nav').toggleClass('nav-open');
			$('.page-wrap').toggleClass('page-wrap-disable');
		});
		$('.nav-menu>ul>li>a').click(() => {
			$('.nav-btn').toggleClass('nav-close');
			$('.nav').toggleClass('nav-open');
			$('.page-wrap').toggleClass('page-wrap-disable');
		});
		$('.details-btn').click(() => {
			$(this).find('.details-icon').toggleClass('fa-caret-down').toggleClass('fa-caret-up');
		});
		$('.scrolltop-btn').click(() => {
			$('body').animate({
				scrollTop: 0
			}, "slow");
		});
		$(window).scroll((event) => {
			if ($(window).scrollTop() > 100) {
				$('.scrolltop-btn').removeClass('scrolltop-btn-hidden');
			} else {
				$('.scrolltop-btn').addClass('scrolltop-btn-hidden');
			}
		});
	}
};
Resume.initialize();