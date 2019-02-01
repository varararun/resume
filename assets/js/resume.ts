let Resume = {
  scrollToTop: () => {
  	$("html, body").animate({ scrollTop: 0 }, 3000);
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
