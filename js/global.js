$(document).ready(function() {
  $(".work-menu").click(function() {
    $("html, body").animate({
        scrollTop: $(".work-content").offset().top
    }, 500);
  });
});