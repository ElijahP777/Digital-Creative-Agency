$(document).ready(function () {
    $('.header__burger').click(function () {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
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

window.addEventListener('load',  () => {
  preloader.classList.add('hide');
  setTimeout(() => {
    preloader.remove();
  }, 600);
});
