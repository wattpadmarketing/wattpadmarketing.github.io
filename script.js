$( document ).ready(function() {
	console.log( "lets go!" );


	$(document).on('click', '.root-nav', function () {
		$(".sub-menu").hide();
	});




	$(document).on('mouseenter', '.country-wrapper', function () {
		$(".sub-menu").css('display', 'flex');

		$(".country-list").css('display', 'flex');


	});




	$(document).on('mouseleave', '.nav-wrapper', function () {
		$(".sub-menu").hide();
		$(".country-list").hide();

	});

	$(document).on('mouseenter click touchstart', '.language-link-mobile', function () {
		//console.log("mobile language clicked")
		$(".root-nav").hide();
		$(".root-nav").addClass("kill-pad");
	});


	$(document).on('click touchstart', '.sub-menu a[href*="#"]', function(e) {
		e.preventDefault()
	  
		$('html, body').animate(
		  {
			scrollTop: $($(this).attr('href')).offset().top - 100,
		  },
		  500,
		  'linear'
		)
	  })



	

});


