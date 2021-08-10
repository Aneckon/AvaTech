$(document).ready(function() {
    $('.header__menu-images').click(function() {
        $('.header__menu-images').toggleClass('menu__open');
        $('.header__menu').toggleClass('menu__open');
        $('body').toggleClass('fixed');
    });
});

$(document).ready(function() {
  $('.ua').click(function() {
      $('.countryitem').hide();
      $('.ukraina__item').show();
  });
  $('.gr').click(function() {
    $('.countryitem').hide();
    $('.germania__item').show();
  });
  $('.bl').click(function() {
    $('.countryitem').hide();
    $('.belarus__item').show();
  });
  $('.pl').click(function() {
    $('.countryitem').hide();
    $('.pol__item').show();
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
});



var number = document.querySelector('.number'),
		numberTop = number.getBoundingClientRect().top,
		start = +number.innerHTML, end = +number.dataset.max;

window.addEventListener('scroll', function onScroll() {
	if(window.pageYOffset > numberTop - window.innerHeight / 2) {
		this.removeEventListener('scroll', onScroll);
		var interval = setInterval(function() {
			number.innerHTML = ++start;
			if(start == end) {
				clearInterval(interval);
				}
		}, 60);
	}
});
var number1 = document.querySelector('.number1'),
		number1Top = number1.getBoundingClientRect().top,
		start1 = +number1.innerHTML, end1 = +number1.dataset.max;

		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > number1Top - window.innerHeight / 2) {
				this.removeEventListener('scroll', onScroll);
				var interval1 = setInterval(function() {
					number1.innerHTML = ++start1;
					if(start1 == end1) {
						clearInterval(interval1);
					}
				}, 60);
			}
});
var number2 = document.querySelector('.number2'),
		number2Top = number2.getBoundingClientRect().top,
		start2 = +number2.innerHTML, end2 = +number2.dataset.max;

		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > number2Top - window.innerHeight / 2) {
				this.removeEventListener('scroll', onScroll);
				var interval2 = setInterval(function() {
					number2.innerHTML = ++start2;
					if(start2 == end2) {
						clearInterval(interval2);
					}
				}, 60);
			}
});
var number3 = document.querySelector('.number3'),
		number3Top = number3.getBoundingClientRect().top,
		start3 = +number3.innerHTML, end3 = +number3.dataset.max;

		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > number3Top - window.innerHeight / 2) {
				this.removeEventListener('scroll', onScroll);
				var interval3 = setInterval(function() {
					number3.innerHTML = ++start3;
					if(start3 == end3) {
						clearInterval(interval3);
					}
				}, 1);
			}
});