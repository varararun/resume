let Resume = {
  scrollToTop: () => {
  	$("html, body").animate({ scrollTop: 0 }, 3000);
  },
  closeLoader: () => {
    setTimeout(()=> {
      $('#loader, .page-wrap, #bg-img').removeClass('loading');   
      $('body').toggleClass('disable-scroll'); 
    },1000);    
    setTimeout(()=> {
      $('#loader').remove();    
    },2000);     
  }
};
