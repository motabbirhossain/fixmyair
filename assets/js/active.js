/*
Template: Cosmetic Dentistry Birmingham Facial Aesthetics
Author: RRDevs
*/

(function($) {
    "use strict";

	$(document).ready(function () {
			
		
        /*** mobile menu  */
		$("#hamburger").on("click", function () {
			$(".mobile-nav").addClass("show");
		});

        $(".close-nav").on("click", function () {
			$(".mobile-nav").removeClass("show");
		});

		$(window).scroll(function(){
			if($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
				$(".mobile-nav").removeClass("show");
				$(".offcanvas-overlay").removeClass("overlay-open");
			}
		});

		new WOW().init();
                
        /*==========================
           Scroll To Up Init
        ============================*/
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '1110', // Distance from top before showing element (px)
            topSpeed: 2000, // Speed back to top (ms)
            animation: 'slide', // Fade, slide, none
            animationInSpeed: 300, // Animation in speed (ms)
            animationOutSpeed: 300, // Animation out speed (ms)
            scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });
    }); // end document ready function
 
	$('.brand_widget').owlCarousel({
		loop:true,
		margin:10,
		nav: false,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	})
	$('.brand_widget_2').owlCarousel({
		rtl:true,
		loop: true,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		margin:10,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	})

	$('.card_widget').owlCarousel({
		loop: true,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		margin:10,
		nav: true,
		navText: ['<i class="far fa-angle-left"></i>', '<i class="far fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			500:{
				items:1
			},
			700:{
				items:2
			},
			1000:{
				items:3
			},
			1400:{
				items:4
			}
		}
	})
	$('.teeth_widget').owlCarousel({
		loop: true,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		margin:10,
		nav: true,
		navText: ['<i class="far fa-angle-left"></i>', '<i class="far fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			500:{
				items:1
			},
			700:{
				items:2
			},
			1000:{
				items:3
			},
			1400:{
				items:4
			}
		}
	})

})(jQuery); // End jQuery