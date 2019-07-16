$(document).ready(function() {


	$(document).on("click", ".question", function() {

		var currentDiv = $(this);
		console.log(currentDiv)
        $(this).next(".answer-wrapper").slideToggle('fast', function() {
            $(currentDiv).toggleClass('orange-text', $(this).is(':visible'));
            $(currentDiv).toggleClass('is-active', $(this).is(':visible'));


        });
	});


	$(document).on("click", ".icon", function() {

		console.log("icon clicked");
		var x = document.getElementById("main-nav");
		if (x.className === "topnav") {
		  x.className += " responsive";
		} else {
		  x.className = "topnav";
		}

		return false;
	});

	$( document ).scroll(function() {
		$(".topnav").removeClass("responsive");
	  	});

});



// function myFunction() {

//   }