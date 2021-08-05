$('.project-active').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  arrows: true,
  prevArrow: '<span class="prev"><i class="flaticon-left-arrow"></i></span>',
  nextArrow: '<span class="next"><i class="flaticon-right-arrow-1"></i></span>',
  autoplaySpeed: 5000,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});