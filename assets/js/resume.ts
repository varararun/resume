var Resume = {
  initialize: () => {
    Resume.loadEvents();
    Resume.loadKeyboardEvents();
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
  },
  loadKeyboardEvents: () => {
    document.onkeydown = (e) => {
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
