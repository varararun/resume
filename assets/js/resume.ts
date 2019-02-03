let Resume = {
  initialize: () => {
    Resume.loadEvents();    
  },
  loadEvents: () => {
    $('#loader').addClass('loading');
    Resume.loadLinkEvents();
  },
  loading: () => {
    $('.bg-img, .bg-overlay, .page-wrap').addClass('loading');
  },
  scrollToTop: () => {
  	$('html, body').animate({ scrollTop: 0 }, 3000);
  },
  loadLinkEvents: () => {
    $("a[animate-link='true']").click((e: any) => {
      Resume.loading();
      e.preventDefault();
      setTimeout(() => {        
        window.open(e.currentTarget.href, '_self');
      }, 1000)
    });
  },
  closeLoader: () => {
    setTimeout(()=> {
      $('.loading').removeClass('loading');   
      $('body').toggleClass('disable-scroll'); 
    },1000);    
    setTimeout(()=> {
      $('#loader').remove();    
    },1500);     
  }
};
