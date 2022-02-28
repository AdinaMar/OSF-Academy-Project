

const breakpoint = window.matchMedia( '(min-width:48em)' );
// keep track of swiper instances to destroy later
let mySwiper;
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
const breakpointChecker = function() {
 
   if ( breakpoint.matches === true ) {
    
      if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
   
      return;
   
   } else if ( breakpoint.matches === false ) {
      
      return enableSwiper();
   }
};
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
const enableSwiper = function() {
    mySwiper = new Swiper(".mySwiper", {
       loop: true,
       slidesPerView: 1,
      /* centeredSlides: true,*/
     spaceBetween: 70,
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
breakpoint.addListener(breakpointChecker);
// kickstart
breakpointChecker();