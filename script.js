$( document ).ready(function() {
	console.log( "ready!" );



	$(document).on('mouseenter', '.awards-container .awards-item', function () {
		console.log("over");
		$( this ).find(".award-over").fadeOut();
		$( this ).find(".award-active").fadeIn();
		$( this ).find(".learn-more-button").fadeIn();
	  }).on('mouseleave', '.awards-container .awards-item', function () {
		$( this ).find(".award-over").fadeIn();
		$( this ).find(".award-active").fadeOut();
		$( this ).find(".learn-more-button").fadeOut();	
	});

	$(document).on('mouseenter', '.country-wrapper', function () {
		$(".sub-menu").css('display', 'flex');
	});

	$(document).on('mouseleave', '.nav-wrapper', function () {
		$(".sub-menu").hide();
	});

	// $( ".awards-container .awards-item" ).hover(
	// 	function() {
	// 		console.log("over");
	// 		$( this ).find(".award-over").fadeOut();
	// 		$( this ).find(".award-active").fadeIn();
	// 		$( this ).find(".learn-more-button").fadeIn();
	// 	}, function() {
	// 		$( this ).find(".award-over").fadeIn();
	// 		$( this ).find(".award-active").fadeOut();
	// 		$( this ).find(".learn-more-button").fadeOut();

	// 	}
	// );


	// $(".country-wrapper").hover(
	// 	function() {
	// 		$(".sub-menu").css('display', 'flex');
	// 	}, function (){ 
	// 	//	$(".sub-menu").hide();
	// 	}
	// )

	// $(".nav-wrapper").mouseleave(function(){
	// 	$(".sub-menu").hide();
	// });

	$(".learn-more-button").on("click", function() {
		var dataTitle = $(this).data("award-title");
		var dataCopy = $(this).data("award-copy");

		$("#modal-award-title").html(dataTitle)
		$("#modal-award-copy").html(dataCopy)

	})

	function expandDiv() {
		console.log("hoy");
	}


});