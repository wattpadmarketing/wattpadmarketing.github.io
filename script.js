$( document ).ready(function() {
	console.log( "ready!" );



	$(document).on('mouseenter', '.awards-container .awards-item', function () {
			$( this ).find(".award-over").animate({'opacity':'0'}, 500);
			$( this ).find(".award-active").animate({'opacity':'1'}, 500);
			$( this ).find(".learn-more-button").animate({'opacity':'1'}, 500);
	  }).on('mouseleave', '.awards-container .awards-item', function () {
			$( this ).find(".award-over").animate({'opacity':'1'}, 100);
			$( this ).find(".award-active").animate({'opacity':'0'}, 100);
			$( this ).find(".learn-more-button").animate({'opacity':'0'}, 100);
	});

	$(document).on('mouseenter', '.country-wrapper', function () {
		$(".sub-menu").css('display', 'flex');
	});

	$(document).on('mouseleave', '.nav-wrapper', function () {
		$(".sub-menu").hide();
	});

	$(document).on('mouseenter click', '.language-link-mobile', function () {
		console.log("mobile language clicked")
		$(".root-nav a").hide();
		$(".root-nav").addClass("kill-pad");
	});
	// $(document).on('mouseleave  click', '.language-link-mobile', function () {
	// 	$(".root-nav a").show();
	// 	$(".root-nav").removeClass("kill-pad");

	// });

	$(document).on("click",".awards-item", function() {
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

	// $(document).on("click", ".root-nav", function() {
	// 	$(".sub-menu").hide();
	// });

	$(document).on('click', '.sub-menu a[href*="#"]', function(e) {
		e.preventDefault()
	  
		$('html, body').animate(
		  {
			scrollTop: $($(this).attr('href')).offset().top - 100,
		  },
		  500,
		  'linear'
		)
	  })


	$(document).on("click", ".slick-slide.slick-active.slick-center.slick-current .read-more" , function() {



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
                ).append(
                    $("<a/>", {
                        id: "link-to-site",
						class: "regular-txt hero-orange-text text-right",
						text: "Read More",
						target: "_blank"
                    })
                )
            ).append(
                $("<div/>", {
                    class: "close-btn"
                })
            )
        );

		$("body").prepend($backgroundDiv);
		
		 var copyTitle = $(this).parent().parent().find(".cover-title").html();
		 var copyAuthor = $(this).parent().parent().find(".cover-author").html();
		 var coverCopy = $(this).parent().parent().find(".cover-full-copy").html();
		 var coverUrl = $(this).parent().parent().parent().find("a").attr("href")
		console.log(coverUrl)
		// console.log($(this).find(".cover-copy").html())
		 $("#full-quote").html(coverCopy);
		
		 $("#full-sig").html(copyAuthor);
		 $("#full-title").html(copyTitle);
		 $("#link-to-site").attr("href", coverUrl);


        return false;

	});


	$(document).on("click", ".cover-image-wrapper", function() {
		return false;
	})
	$(document).on("click", ".close-btn", function() {
        $("#background-modal").fadeOut(300, function() {
            $(this).remove();
        });
    });


	// function truncateQuotes (){
	// 	$('.cover-copy-wrapper .cover-copy').each(function() {
	// 		$(this).show();
	// 		$quote = $(this).html();
	// 		$truncatedText = $quote.split(' ').slice(0, 50).join(' ') + " ... " + ''
	// 		$(this).data('content', $(this).html())
	// 		$(this).data('limit', $truncatedText)
	// 		$(this).html($(this).data('limit'))
	// 	});
	// }


	// setTimeout(truncateQuotes, 2000)
});


