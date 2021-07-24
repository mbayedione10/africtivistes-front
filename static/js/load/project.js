//===== Magnific Popup

$('.project-popup').magnificPopup({
  type: 'image',
  gallery: {
    enabled: true
  }
});


//===== Isotope Project 1

$('.container').imagesLoaded(function () {
  var $grid = $('.grid').isotope({
    // options
    transitionDuration: '1s'
  });

  // filter items on button click
  $('.project-menu ul').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  //for menu active class
  $('.project-menu ul li').on('click', function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
  });
});