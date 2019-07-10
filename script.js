$(document).ready(function() {


	$(document).on("click", ".question", function() {

		var currentDiv = $(this);
		console.log(currentDiv)
        $(this).next(".answer-wrapper").slideToggle('fast', function() {
            $(currentDiv).toggleClass('orange-text', $(this).is(':visible'));
            $(currentDiv).toggleClass('is-active', $(this).is(':visible'));


        });
	});

});



function myFunction() {
	var x = document.getElementById("main-nav");
	if (x.className === "topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "topnav";
	}
  }