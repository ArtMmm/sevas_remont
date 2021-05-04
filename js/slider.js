$(document).ready(function(){
  $("#reviews-slider").owlCarousel({
    items: 2,
    loop: true,
    nav: false,
    navText: [ '<svg width="45" height="45" viewBox=""><circle cx="22.5" cy="22.5" r="22.5" fill="white"/><path d="M15 22.5L26.25 16.0048V28.9952L15 22.5Z" fill="#e3d29a"/></svg>',
          '<svg width="45" height="45" viewBox=""><circle cx="22.5" cy="22.5" r="22.5" fill="white"/><path d="M30 22.5L18.75 16.0048V28.9952L30 22.5Z" fill="#e3d29a"/>'],
    dots: true,
    responsiveClass:true,
    responsive:{
        0:{
          items:1,
          nav:false
        },
        767:{
          items:1,
          nav:false,
        },
        1140:{
            items:1,
            nav:true,
            loop:true
        }
    }
  });
  $("#auto").owlCarousel({
    items: 7,
    autoplay: true,
    loop: true,
    nav: false,
    dots: true,
    responsiveClass:true,
    responsive:{
        0:{
          items:2,
        },
        767:{
          items:4,
        },
        1140:{
            items:5,
        }
    }
  });
});
