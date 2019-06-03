$( document ).ready(function() {
	console.log( "ready!" );



	$(document).on('mouseenter', '.awards-container .awards-item', function () {
		//console.log("over");
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

	$(document).on("click",".awards-item", function() {
		//console.log("hit")
		var dataTitle = $(this).find(".categoryTitleHolder span").text();
		var dataCopy = $(this).find(".categoryCopyHolder span").text();
		var dataImage = $(this).find(".award-active").attr('src');
		$("#modal-award-title").html(dataTitle);
		$("#modal-award-copy").html(dataCopy);
		$('.award-modal-wrapper').css('background-image', 'url(' + dataImage + ')');
		$(".award-modal-wrapper").fadeIn();
	});

	$(document).on("click", ".close-btn", function() {
		$(".award-modal-wrapper").fadeOut();
	});


	$(document).on("click", ".quote-text blockquote" , function() {


        var modalText = new TimelineMax();

        $backgroundDiv = $("<div/>", {
            id: "background-modal",
            "class": "a"
        }).append(
            $("<div/>", {
                id: "full-quote-wrapper"
            }).append(
                $("<div/>", {
                    id: "full-quote-inner"
                }).append(
                    $("<blockquote/>", {
                        id: "full-quote",
                        class: "white-text light-text"
                    })
                ).append(
                    $("<figcaption/>", {
                        id: "full-sig",
                        class: "a-right white-text light-text margin-t"
                    })
                )
            ).append(
                $("<div/>", {
                    id: "close-btn"
                })
            )
        );

        $("body").prepend($backgroundDiv);
        $("#full-quote").html($(this).data("quote"));
        $("#full-sig").html($(this).data("sig"));
        modalText.set("#full-quote-wrapper", {
            autoAlpha: 1
        });
        modalText.set('#full-quote-wrapper', {
            className: '+=text-fuzz'
        });

        return false;

    });


	function truncateQuotes (){
		$('.cover-copy-wrapper .cover-copy').each(function() {
			$(this).show();
			$quote = $(this).html();
			$truncatedText = $quote.split(' ').slice(0, 50).join(' ') + " ... " + '<a href="#" class="read-more orange-text">Read more</a>'
			$(this).data('content', $(this).html())
			$(this).data('limit', $truncatedText)
			$(this).html($(this).data('limit'))
		});
	}


	setTimeout(truncateQuotes, 1000)
});