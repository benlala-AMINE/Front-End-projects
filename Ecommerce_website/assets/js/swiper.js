var swiper = new Swiper(".myShoesSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

new Swiper(".new.swiper", {
  loop: true,
  autoplay: {
    delay: 2000, // 2 seconds between slides
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  spaceBetween: 2,
  speed: 800,
  // Optional: add pagination or navigation if you want
});
