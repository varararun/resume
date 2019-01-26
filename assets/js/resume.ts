let Resume = {
  initialize: () => {
    Resume.loadEvents();
    Resume.loadKeyboardEvents();
  },
  closeLoader: () => {
    setTimeout(()=> {
      $('#loader, .page-wrap').addClass('loaded');   
      $('body').toggleClass('disable-scroll'); 
    },2000);    
    setTimeout(()=> {
      $('#loader').remove();    
    },3000);     
  },
  loadEvents: () => {
    $('.nav-btn').click(() => {
      $('.nav-btn').toggleClass('nav-close');
      $('.nav').toggleClass('nav-open');
      $('.page-wrap').toggleClass('page-wrap-disable');
      $('body').toggleClass('disable-scroll');
    });
    $('.nav-menu>ul>li>a').click(() => {
      $('.nav-btn').toggleClass('nav-close');
      $('.nav').toggleClass('nav-open');
      $('.page-wrap').toggleClass('page-wrap-disable');
      $('body').toggleClass('disable-scroll');
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
