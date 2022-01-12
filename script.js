$(document).ready(function () {
  const btn = document.querySelector('.navbar-toggler');
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
  })
  //top to bottom
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });
  $('.scrollToTop').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
//fixed header
  $(window).scroll(function () {
    if ($(window).scrollTop() > 450) {
      $('#mainnav').addClass('navbar-fixed-top');
    }

    if ($(window).scrollTop() < 451) {
      $('#mainnav').removeClass('navbar-fixed-top');
    }
  });

let $navbar = $('.navbar');
$('.navbar a[href^="#"]').click(function(e){
  $('.navbar a[href^="#"]').removeClass('active');
  $(this).addClass('active');
  e.preventDefault();
  var target = $($(this).attr('href'));
  if(target.length){
    var scrollTo = target.offset().top - $navbar.outerHeight();
    console.log(scrollTo)
    $('body, html').animate({scrollTop: scrollTo},0);
  }
});

});

$('#bannerSlider').owlCarousel({
  loop: true,
  margin: 0,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayTimeout: 3000,
  animateIn: 'fadeIn',
  nav: true,
  // navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
  navText: ["<span class='d-none'>Previous Slide</span><span class='fa fa-chevron-left'></span>", "<span class='d-none'>Next Slide</span><span class='fa fa-chevron-right'></span>"],
  dots: false,
  items: 1
})

$('.development').owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  autoHeight: true,
  //navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
  navText: ["<span class='d-none'>Previous Slide</span><span class='fa fa-chevron-left'></span>", "<span class='d-none'>Next Slide</span><span class='fa fa-chevron-right'></span>"],
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 2
    },
    1000: {
      items: 3
    },
    1200: {
      items: 4,
    }
  },
})

$('#customers-testimonials').owlCarousel({
  loop: true,
  items: 1,
  margin: 0,
  autoplay: true,
})

$('.owl-carousel').each(function () {
  $(this).find('.owl-dot').each(function () {
    $(this).attr('aria-label', "nav-dots");
  });
});

$('#chooseUs').owlCarousel({
  stagePadding: 50,
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1920: {
      items: 3
    }
  }
})
// counter
var a = 0;
$(window).scroll(function () {
  var top = $('#count').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > top) {
    $('.count-value').each(function () {
      var $this = $(this);
      $({ count: $this.text() }).animate({
        count: $this.attr('data-count')
      },
        {
          duration: 3000,
          easing: 'linear',
          step: function () {
            $this.text(Math.floor(this.count));
          },
          complete: function () {
            $this.text(this.count).css({color:'#0085ff','font-size':"200%"});
            $('.icon-count').css({color:'#0085ff','font-size':"200%"})
          }
        })
    });
    a = 1;
  }
});


// var lastElementSelector = '#services';
// $(window).on('activate.bs.scrollspy', function (event, active) {
//   console.log(active.relatedTarget)
//     if (active.relatedTarget === lastElementSelector) {
//       $('[data-spy="scroll"]').scrollspy('dispose');
//     }
// });