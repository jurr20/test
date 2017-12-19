/* viewport width */
function viewport() {
  var e = window,
    a = 'inner';
  if(!('innerWidth' in window)) {
    a = 'client';
    e = document.documentElement || document.body;
  }
  return {
    width: e[a + 'Width'],
    height: e[a + 'Height']
  }
};
/* viewport width */

$(window).load(function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
      $('body').addClass('ios');
    } else {
      $('body').addClass('web');
    }

    $('body').removeClass('loaded');
    
    if ($('.js-slider').length) {
      $('.js-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    }

    if($('.js-slider-planning').length) {
      $('.js-slider-planning').slick({
        dots: true,
        infinite: true,
        speed: 700,
        autoplay: true,
        arrows: false,
        responsive: [{
          breakpoint: 50000,
          settings: "unslick"
        }, {
          breakpoint: 550,
          settings: "slick",
          slidesToShow: 2
        }]
      });
    };

    $(".js-arrow-down").on("click", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
    });

    $(".js-menu-button" ).click(function() {
      $('body').addClass('pushy-open-left');
    })
    $(".js-site-overlay, .js-menu-button2" ).click(function() {
      $('body').removeClass('pushy-open-left');
    })

});

$(window).scroll(function (event) {

  if ($(window).scrollTop() > 0) {

    if (!$('header').hasClass('active')) {
      $('header').addClass('active');
    }
  }
  else {
    if ($('header').hasClass('active')) {
      $('header').removeClass('active');
    }
  }

});

var handler = function() {
  
  var viewport_wid = viewport().width;
  
  if(viewport_wid <= 550) {
    if($('.js-slider-planning').length) {
      $('.js-slider-planning').slick("getSlick").refresh();
    };
  };

}

$(window).bind('load', handler);
$(window).bind('resize', handler);


