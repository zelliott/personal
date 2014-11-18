$(document).ready(function() {
  $('.about-menu').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 500, function() {
      checkMenu(window.pageYOffset)
    });
  });
  $('.work-menu').click(function() {
    $('html, body').animate({
        scrollTop: $('.work-content').offset().top
    }, 500, function() {
      checkMenu(window.pageYOffset)
    });
  });
  $('.projects-menu').click(function() {
    $('html, body').animate({
        scrollTop: $('.projects-content').offset().top
    }, 500, function() {
      checkMenu(window.pageYOffset)
    });
  });

  $(window).on('scroll', function() {
    checkMenu(window.pageYOffset);
  });

  function checkMenu(scrollPos) {
    var scrollWork = $('.work-content').offset().top,
        scrollProj = $('.projects-content').offset().top;

    if(scrollPos >= scrollProj) {
      $('.menu > div').removeClass('on');
      $('.projects-menu').addClass('on');


    } else if(scrollPos >= scrollWork && scrollPos < scrollProj) {
      $('.menu > div').removeClass('on');
      $('.work-menu').addClass('on');


    } else if(scrollPos < scrollWork) {
      $('.menu > div').removeClass('on');
      $('.about-menu').addClass('on');

    }
  }

});
