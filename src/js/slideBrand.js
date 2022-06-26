var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoPlay: true,
    slidesPerView: 3,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });