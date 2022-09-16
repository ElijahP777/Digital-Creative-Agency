$(document).ready(function () {
    $('.header__burger').click(function () {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
// menu END



// CAROUSEL
const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    startPosition: 1,
    items: 3,
    responsive : {
      // breakpoint from 0 up
      320: {
        items: 1,
      },
      576: {
        items: 1,
      },
      // breakpoint from 480 up
      768: {
        items: 3,
        margin: 10,
      },
      // breakpoint from 768 up
      992: {
          items: 3,
      },
      1150: {
          items: 3,
      },
  }
});


$('.slider__btn--prev').click(function () {
    owl.trigger('prev.owl.carousel');
})


$('.slider__btn--next').click(function () {
    owl.trigger('next.owl.carousel');
})



const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')


openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
    
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

// Slide----------
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 5){
    counter = 1; 
  }
}, 5000,);

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
