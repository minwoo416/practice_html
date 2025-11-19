var banner = new Swiper('main .banner_container .swiper', { 
    spaceBetween:30,
    slidesPerView:3,
    loop:true,
    navigation: {
        nextEl: ".banner_container .swiper_btn_wrap .swiper_arrow_wrap .swiper-button-next",
        prevEl: ".banner_container .swiper_btn_wrap .swiper_arrow_wrap .swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
})
/* -----------------------long배너 닫기--------------------- */
const longBanner = document.querySelector('header .long_banner');
const longBannerClose = document.querySelector('header .long_banner .close_btn');
longBannerClose.addEventListener('click',()=>{
    longBanner.style.display = 'none';
})