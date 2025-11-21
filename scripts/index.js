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
var best = new Swiper('.best .best_swiper', {
  navigation: {
    nextEl: ".best .best_btn .arrow_wrap .swiper-button-next",
    prevEl: ".best .best_btn .arrow_wrap .swiper-button-prev",
  },
  pagination : {
    el: ".best .best_btn .swiper-pagination",
    type: "fraction",
  }
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
/* -----------------------베스트--------------------- */
const bestCategory = document.querySelectorAll('.best .best_category ul li');
/* 카테고리 만드는 법 */
/* 
1. 함수를 생성해서 카테고리 li를 foreach로 각각 잡기
2. 스와이퍼의 슬라이드가 체인지 될 때 그 체인지 된 현재 슬라이드 번호를 위의 함수에 넣어주기
--------여기까지하면 카테고리 변경은 완료-------------
--------카테고리 클릭 시 해당 카테고리로 이동하게 하기 (밑에 있음)-------------
 */
function bestCate(index){/* 매개변수를 작성한 이유는 현재 활성화 되어있는 슬라이드를 넣기 위해서 작성했다 (이해가 안되긴함) */
  bestCategory.forEach((li, i)=>{
    li.classList.toggle('active1', i === index);
  })
}
best.on('slideChange',()=>{
  bestCate(best.activeIndex);/* activeIndex 자체가 속성임 (현재의 인덱스 번호) / 현재 인덱스 번호를 매개변수 함수에 전달하기 */
})
/* 카테고리 버튼 클릭 시 해당 카테고리로 넘어가게 하기 */
bestCategory.forEach((li, i)=>{/* All 이기 때문에 forEach로 잡아줘야함 */
  li.addEventListener('click', ()=>{
    best.slideTo(i); /* 해당 카테고리로 이동하게 하기 */
    bestCate(i); /* 매개변수 index에 이동한 인덱스의 값을 넣어주기 */
  })
})
/* 이건 기본값 */
bestCategory.forEach((li, i)=>{
    li.classList.toggle('active1', i === 0);
})