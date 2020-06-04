$( document ).ready(function() {
	console.log( "ready!" );


	$(document).on('mouseenter', '.country-wrapper', function () {
		$(".country-list").css('display', 'flex');
	});

	$(document).on('mouseleave', 'header', function () {
		$(".country-list").hide();
	});

	$(document).on('mouseenter click touchstart', '.language-link-mobile', function () {
		//console.log("mobile language clicked")
		$(".root-nav").hide();
		$(".root-nav").addClass("kill-pad");
	});
	// $(document).on('mouseleave  click', '.language-link-mobile', function () {
	// 	$(".root-nav a").show();
	// 	$(".root-nav").removeClass("kill-pad");

	// });



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

	//countdown timer
	function makeTimer() {
	
		//var endTime = new Date("4 June 2019 12:00:00 GMT+04:00");			
		  //endTime = (Date.parse(endTime) / 1000);

		  var deadLine = "4 June 2020 12:00:00 EDT";
		  var endTime = new Date(Date.parse(deadLine));
		  endTime = (Date.parse(endTime) / 1000);

		  var now = new Date();
		  now = (Date.parse(now) / 1000);

		  var timeLeft = endTime - now;

		  var days = Math.floor(timeLeft / 86400); 
		  var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		  var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		  var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

		  if (hours < "10") { hours = "0" + hours; }
		  if (minutes < "10") { minutes = "0" + minutes; }
		  if (seconds < "10") { seconds = "0" + seconds; }

		  $("#days").html(days);
		  $("#hours").html(hours);
		  $("#minutes").html(minutes);
		  $("#seconds").html(seconds);		

		  if ($(document).scrollTop() > 150){
			  $("header").addClass("shrink");
			} else {
			  $("header").removeClass("shrink");
			}
  	}
  

	///	setInterval(function() { makeTimer(); }, 1000);
  


  	setInterval(function() { makeTimer(); }, 1000);

	

});

