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
    }, 200);
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

let preloader = document.querySelector('.preloader');

document.addEventListener('DOMContentLoaded', () => {
  preloader.classList.add('hide');
  preloader.remove();
});