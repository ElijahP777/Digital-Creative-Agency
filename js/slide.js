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

// Slide----------
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 5){
    counter = 1; 
  }
}, 5000);