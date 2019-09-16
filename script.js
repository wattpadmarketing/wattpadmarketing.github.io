$(document).ready(function() {

	$(document).on("click", ".question", function() {

		var currentDiv = $(this);
		//console.log(currentDiv)
        $(this).next(".answer-wrapper").slideToggle('fast', function() {
            $(currentDiv).toggleClass('orange-text', $(this).is(':visible'));
            $(currentDiv).toggleClass('is-active', $(this).is(':visible'));
        });
	});




});