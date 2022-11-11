const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows());
  }
};

if (isMobile.any()) {
  document.body.classList.add('_touch');

  let menuArrows = document.querySelectorAll('.menu__arrow');
  if (menuArrows.length > 0) {
    for(let index =0; index < menuArrows.length; index++){
      const menuArrow = menuArrows[index];
      menuArrow.addEventListener("click", function(e){
        menuArrow.parentElement.classList.toggle('_active')
      });
    }
  }

} else {
  document.body.classList.add('_pc');
}

const burgerMenu = document.querySelector('.header__burger');
const menu = document.querySelector('nav');
if (burgerMenu){
  burgerMenu.addEventListener("click", function(e){
    document.body.classList.toggle('_lock');
    burgerMenu.classList.toggle('_active');
    menu.classList.toggle('_active');
  });
}

$(function () {



  $(document).ready(function () {
    var show = true;
    $(window).on("scroll", function () {

      if (!show) return false;

      var w_top = $(window).scrollTop();
      var e_top = $("#counts").offset().top;

      if (w_top + 650 >= e_top) {
        $('.spincrement').css('opacity', '1');
        $(".spincrement").spincrement({
          thousandSeparator: "",
          duration: 1200
        });

        show = false;
      }
    });
  });


  let header = $('.header');
  
  if(document.documentElement.clientWidth <= 768){
    header.addClass('header__fixed');
  }
  $(window).scroll(function () {

    if ($(this).scrollTop() >= 0) {
      header.addClass('header__fixed');
      if ($(this).scrollTop() > 60) {
        header.addClass('header__fixed2');
      }
      else header.removeClass('header__fixed2');
    } else {
      header.removeClass('header__fixed');
    }
  });



  $('.slider__inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    centerMode: true,
    centerPadding: '10%',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '7%',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,

          slidesToShow: 1
        }
      }
    ]
  });


});