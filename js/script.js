// $(document).ready(function () {
//     $('.header__burger').click(function () {
//         $('.header__burger,.header__menu').toggleClass('active');
//         $('body').toggleClass('lock');
//     });

//     $('.header__menu').click(function() {
//       $('.header__burger, .header__menu').removeClass('active');
//       $('body').removeClass('lock');
//     });
// });
// $(document).ready(function() {
//   $('.header__burger').click(function() {
//     $('.header__burger, .header__menu').toggleClass('active');
//     $('body').toggleClass('lock');
//   });

//   $('.header__menu .header__link').click(function(e) {
//     e.preventDefault();

//     // Удаляем класс active у всех пунктов меню
//     $('.header__menu .header__link').removeClass('active');

//     // Добавляем класс active только к текущему пункту меню
//     $(this).addClass('active');

//     // Закрываем меню
//     $('.header__burger, .header__menu').removeClass('active');
//     $('body').removeClass('lock');

//     // Дополнительные действия при нажатии на пункт меню
//     // Например, прокрутка к соответствующему разделу
//     const target = $(this).attr('href');
//     $('html, body').animate({
//       scrollTop: $(target).offset().top
//     }, 700);
//   });
// });
$(document).ready(function() {
  $('.header__burger').click(function() {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.header__menu').on('click', '.header__link', function(e) {
    e.preventDefault();

    $('.header__menu .header__link').removeClass('active');
    $(this).addClass('active');

    $('.header__burger, .header__menu').removeClass('active');
    $('body').removeClass('lock');

    const target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 700);
  });
});


// menu END
// Scroll to top
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

// Preloader
// let preloader = document.querySelector('.preloader');

// window.addEventListener('load',  () => {
//   preloader.classList.add('hide');
//   setTimeout(() => {
//     preloader.remove();
//   }, 600);
// });

let preloader = document.querySelector('.preloader');

document.addEventListener('DOMContentLoaded', () => {
  preloader.classList.add('hide');
  preloader.remove();
});