/* || ===

= IMKAN.com.sa
= APP FIRE

=== || */


$(document).ready(function(){
    
    //popup
     $("#top-page .background .mobile-nav .user-area .header-btn").click(function(){
         $(".first-step").removeClass("active");
        $(".first-popup").addClass("active" , 1000, "easeOutSine");
        
   })
   $('.first-step').click(function(){
       
       $(this).addClass("not-active" );
   });
   
    $('.first-step .inner-popup').click(function(e){
       e.stopPropagation();
    });
    $(document).keydown(function(){
        if (keyCode == 27){
            $(this).removeClass("not-active");
            $(this).addClass("not-active");
             
        }
    });
    
    

    // menu btn
        $('#menubtn').click(function(){
            $('.mobile-nav').toggleClass("active-nav");
    });
    
    $('.search a').click(function(){
        $('.books-top-section .login ul .search input').toggleClass("active", 1000, "easeOutSine" );
        
    });
    
    
     $(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
      return false;
    });
  })
     
     $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('.book-choices-header').addClass('fixed');
    } else {
        $('.book-choices-header').removeClass('fixed');
    }
});
     
     //slider
 
    
      $('.slider').slick({
                  dots: true,
                  slidesToShow: 3,
                  rtl: true,
                  slidesToScroll: 1,
                  arrows: true,
                  appendArrows: $("#arrows_2"),
                  prevArrow:"<a class='ic-icons-515 txt-sm txt-brand-hvr pointer right-mar-10 txt-black'></a>",
                  nextArrow:"<a class='ic-icons-530  txt-sm txt-brand-hvr pointer right-mar-10 txt-black'></a>",
                  responsive: [

                {
                  breakpoint: 920,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  },
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  },
                  breakpoint: 500,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
                });
    
             $('.investors-logos').slick({
                  dots: false,
                  slidesToShow: 4,
                  rtl: true,
                  slidesToScroll: 1,
                  arrows: true,
                 appendArrows: $("#arrows-2"),
                  prevArrow:"<a class='next ic-icons-515 txt-sm txt-brand-hvr pointer right-mar-10 txt-white'></a>",
                  nextArrow:"<a class='prev ic-icons-530  txt-sm txt-brand-hvr pointer right-mar-10 txt-white'></a>",
                  responsive: [

                {
                  breakpoint: 920,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  },
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  },
                  breakpoint: 500,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
                });
    
            
            
      $('.wallpaper-slider').slick({
                  dots: false,
                  slidesToShow: 3,
                    centerPadding: '60px',
                  rtl: true,
                  slidesToScroll: 1,
                  arrows: true,
                  appendArrows: $("#arrows_2"),
                  prevArrow:false,
                  nextArrow:false,
                  responsive: [

                {
                  breakpoint: 920,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  },
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  },
                  breakpoint: 500,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
                });   
    

            $('').slick({
              centerMode: true,
                rtl: true,
                prevArrow:false,
                  nextArrow:false,
              centerPadding: '60px',
              slidesToShow: 3,
              responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                  }
                }
              ]
            });
    
            
          

   
   


});

   
    

        $(function() {
              $('a[href*=#]').on('click', function(e) {
                e.preventDefault();
                $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
              });
            });

;(function(window) {

	'use strict';

	var mainContainer = document.querySelector('.main-wrap'),
		openCtrl = document.getElementById('btn-search'),
		closeCtrl = document.getElementById('btn-search-close'),
		searchContainer = document.querySelector('.search'),
		inputSearch = searchContainer.querySelector('.search__input');

	function init() {
		initEvents();	
	}

	function initEvents() {
		openCtrl.addEventListener('click', openSearch);
		closeCtrl.addEventListener('click', closeSearch);
		document.addEventListener('keyup', function(ev) {
			// escape key.
			if( ev.keyCode == 27 ) {
				closeSearch();
			}
		});
	}

	function openSearch() {
		mainContainer.classList.add('main-wrap--move');
		searchContainer.classList.add('search--open');
		setTimeout(function() {
			inputSearch.focus();
		}, 600);
	}

	function closeSearch() {
		mainContainer.classList.remove('main-wrap--move');
		searchContainer.classList.remove('search--open');
		inputSearch.blur();
		inputSearch.value = '';
	}

	init();

})(window);





