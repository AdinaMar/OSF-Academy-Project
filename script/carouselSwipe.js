var swiper = new Swiper(".carousel", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    loop:true,
    bulletClass: "bullet",
    autoplay: {
        delay: 2000,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type:"bullets",
    },
  });