$(document).ready(function() {
  $(".work-menu").click(function() {
    $("html, body").animate({
        scrollTop: $(".work-content").offset().top
    }, 500);
  });
  $(".projects-menu").click(function() {
    $("html, body").animate({
        scrollTop: $(".projects-content").offset().top
    }, 500);
  });
});