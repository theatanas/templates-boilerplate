;$(document).ready(function(){
	// Assign all vars
	var body = $("body");

	$(function() {
	    'use strict';
	    var $page = $('#main'),
	        options = {
	            debug: true,
	            prefetch: true,
	            cacheLength: 2,
	            onStart: {
	                duration: 250, // Duration of our animation
	                render: function($container) {
	                    // Add your CSS animation reversing class
	                    $container.addClass('is-exiting');
	                    // Restart your animation
	                    smoothState.restartCSSAnimations();
	                }
	            },
	            onReady: {
	                duration: 0,
	                render: function($container, $newContent) {
	                    // Remove your CSS animation reversing class
	                    $container.removeClass('is-exiting');
	                    // Inject the new content
	                    $container.html($newContent);
	                }
	            }
	        },
	        smoothState = $page.smoothState(options).data('smoothState');
	});

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