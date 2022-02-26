const breakpointPdp = window.matchMedia( '(min-width:48em)' );
// keep track of swiper instances to destroy later
let mySwiperPdp;
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
const breakpointCheckerPdp = function() {
   // if larger viewport and multi-row layout needed
   if ( breakpointPdp.matches === true ) {
      // clean up old instances and inline styles when available
      if ( mySwiperPdp !== undefined ) mySwiperPdp.destroy( true, true );
      // or/and do nothing
      return;
   // else if a small viewport and single column layout needed
   } else if ( breakpointPdp.matches === false ) {
      // fire small viewport version of swiper
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
//////////////////////////////////////////////////////////////////
// keep an eye on viewport size changes
breakpointPdp.addListener(breakpointCheckerPdp);
// kickstart
breakpointCheckerPdp();

