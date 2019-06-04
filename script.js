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

	$(document).on('mouseenter', '.language-link-mobile', function () {
		$(".root-nav a").hide();
		$(".root-nav").addClass("kill-pad");
	});
	$(document).on('mouseleave', '.language-link-mobile', function () {
		$(".root-nav a").show();
		$(".root-nav").removeClass("kill-pad");

	});

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


	$(document).on("click", ".slick-center.slick-current" , function() {


        //var modalText = new TimelineMax();

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
                        class: "regular-txt white-txt"
                    })
                ).append(
                    $("<figcaption/>", {
                        id: "full-sig",
                        class: "regular-txt white-txt text-right"
                    })
                ).append(
                    $("<figcaption/>", {
                        id: "full-title",
                        class: "regular-txt white-txt text-right"
                    })
                )
            ).append(
                $("<div/>", {
                    id: "close-btn"
                })
            )
        );

		$("body").prepend($backgroundDiv);
		
		var coverCopy = $(this).find(".cover-copy-wrapper").data("quote");
		var copyAuthor = $(this).find(".cover-author").html();
		var copyTitle = $(this).find(".cover-title").html();
		console.log(copyAuthor, copyTitle)
		console.log($(this).find(".cover-copy").html())
		$("#full-quote").html(coverCopy);
		
		$("#full-sig").html(copyAuthor);
		$("#full-title").html(copyTitle);



        return false;

	});
	$(document).on("click", "#close-btn", function() {
        $("#background-modal").fadeOut(300, function() {
            $(this).remove();
        });
    });


	function truncateQuotes (){
		$('.cover-copy-wrapper .cover-copy').each(function() {
			$(this).show();
			$quote = $(this).html();
			$truncatedText = $quote.split(' ').slice(0, 50).join(' ') + " ... " + ''
			$(this).data('content', $(this).html())
			$(this).data('limit', $truncatedText)
			$(this).html($(this).data('limit'))
		});
	}


	setTimeout(truncateQuotes, 2000)
});