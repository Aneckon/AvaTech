$(document).ready(function() {
    $('.header__menu-images').click(function() {
        $('.header__menu-images').toggleClass('menu__open');
        $('.header__menu').toggleClass('menu__open');
        $('body').toggleClass('fixed');
    });
});




var swiper = new Swiper(".mySwiper", {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
       },
    history: {
      key: "slide",
    },
});

