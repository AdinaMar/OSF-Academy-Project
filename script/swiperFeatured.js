var swiper = new Swiper(".featured1", {
    slidesPerView: 4,
    spaceBetween: 55,
    slidesPerGroup: 4,
    loop: true,
    //loopFillGroupWithBlank: true,

    autoplay: {
        delay: 5000,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      768: {
        slidesPerView: 2,
        spaceBetween: 60,
        slidesPerGroup: 2,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 55,
        slidesPerGroup: 4,
      },
    },
  });