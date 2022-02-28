const breakpointPdp = window.matchMedia( '(min-width:48em)' );
// keep track of swiper instances to destroy later
let mySwiperPdp;
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
const breakpointCheckerPdp = function() {
   
   if ( breakpointPdp.matches === true ) {
   
      if ( mySwiperPdp !== undefined ) mySwiperPdp.destroy( true, true );
     
      return;
  
   } else if ( breakpointPdp.matches === false ) {
    
      return enableSwiperPdp();
   }
};
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
const enableSwiperPdp = function() {
    mySwiperPdp = new Swiper(".mySwiper5", {
        
       loop: true,
       slidesPerView:3,
      /* centeredSlides: true,*/
       spaceBetween: 20,
   
       grabCursor: true,
      
       width: 271,
   
       pagination: {
         el: ".swiper-pagination",
         clickable: true,
         
       },
     });
   }
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// keep an eye on viewport size changes
breakpointPdp.addListener(breakpointCheckerPdp);
// kickstart
breakpointCheckerPdp();

