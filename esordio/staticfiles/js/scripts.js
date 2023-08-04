(function($) {
	$(document).ready(function() {
		"use strict";
		
	
		AOS.init();

		
		$(window).scroll(function() {
			var logo = $('#logo-image');
			var scrolled = $(window).scrollTop() > 0;

			
			
			logo.attr('src', scrolled ? 'static/images/ESORDIOLOGOblack.png' : 'static/images/logo-white.png');
		  });
		  

		// PAGE TRANSITION
		$('.navigation-menu ul li a').on('click', function(e) {
			$('.transition-overlay').toggleClass("open");
			});
			$('.navigation-menu ul li a').on('click', function(e) {
				e.preventDefault();                  
				var goTo = this.getAttribute("href"); 
				setTimeout(function(){
					window.location = goTo;
				},1000);       
			});


		 /********************
			Main image slider
		  *********************/
			$('.main-image-slider').slick({
				slidesToShow: 1,
				loop:true,
				autoplay: true,
				swipe: false,
				  pauseOnHover: false, 
				autoplaySpeed: 5000,
				arrows: false,
				autoplayButton: false,
				fade: true,
				speed: 1000,
				dots:false,
				instructionsText: 'This carousel shows one large product image at a time. Use the Previous and Next buttons to move between images, or use the preceding thumbnails carousel to select a specific image to display here.',
				regionLabel: 'main image carousel',
			  });
		
		
		
		
		  
		  
		  


		


		
			


			
			  

		
		
			
	});
	// END JQUERY		


	













	
	  







	


	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 50) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});




	
	

	setTimeout(function(){
		$("body").addClass("page-loaded");
	}, time);

	
	// WOW ANIMATION 
	var wow = new WOW(
	{
		animateClass: 'animated',
		offset:       50
	}
	);
	wow.init();

	
	


	
	  

       
    
})(jQuery);








  
  

