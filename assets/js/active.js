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

		$('.counter').counterUp({
			delay: 10,
			time: 1000
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
 
	$('.author_review').owlCarousel({
		loop:true,
		margin: 30,
		autoplay:true,
		autoplayTimeout:2000,
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
			}
		}
	})

})(jQuery); // End jQuery