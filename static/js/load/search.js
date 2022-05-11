$(function () {
  $("#search").on('click', function () {
    $(".search-box").fadeIn(600);
  });

  $(".closebtn").on('click', function () {
    $(".search-box").fadeOut(600);
  });
});