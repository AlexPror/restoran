//slider
new Swiper(".social__slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dinamicBullets: true,
  },
  //переключения с помощью стрелок на клавиатуре
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  //управления с помощью мыши
  // mousewheel: {
  //   sensitivity: 1,
  //   // eventsTarget: ".slider__img",
  // },
  slidesPerView: 1,
  spaceBetween: 30,
});
