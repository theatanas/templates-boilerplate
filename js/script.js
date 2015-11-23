;$(document).ready(function(){
	// Assign all vars
	var body = $("body");

	// Owl Example
	if ($("#owl-id").length!=0) {
		$('#owl-id').owlCarousel({
		    loop: true,
		    nav: false,
		    dots: false,
		    items: 3,
		    autoplay: true,
		    autoplayTimeout: 3000
		})
	}

	// Fancybox Example
	if ($(".fancygroup").length != 0) {
	    $(".fancygroup").fancybox({
	        nextEffect: "fade",
	        prevEffect: "fade",
	        type: "image"
	    });
	}
});