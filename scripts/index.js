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
var special = new Swiper('main .special_order_container .special_order_wrap', {
  spaceBetween:50,
  slidesPerView:3,
   navigation: {
        nextEl: "main .special_order_container .swiper-button-next",
        prevEl: "main .special_order_container .swiper-button-prev",
      },
})
/* -----------------------변수모음--------------------- */
const moreBtn = document.querySelector('#lnb .category > ul > li:first-child');
const hiddenMenu = document.querySelector('#lnb .cate_menu_hidden');
const longBanner = document.querySelector('header .long_banner');
const longBannerClose = document.querySelector('header .long_banner .close_btn');
/* -----------------------long배너 닫기--------------------- */
longBannerClose.addEventListener('click',()=>{
  longBanner.style.display = 'none';
})
/* -----------------------숨어있는 메뉴(depth)--------------------- */
console.log(moreBtn)
moreBtn.addEventListener('mouseenter', ()=>{
  hiddenMenu.style.display = 'flex';
})
moreBtn.addEventListener('mouseleave', ()=>{
  hiddenMenu.style.display = 'none';
})