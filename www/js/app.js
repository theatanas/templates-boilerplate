requirejs.config({
	// baseUrl: "js",
	paths: {
		// Base
		app: "app",
		functions: "app/functions",
		sliders: "app/sliders",
		waypointsActivator: "app/waypointsactivator",

		// Pages
		ContactPage: "app/pages/ContactPage",
		AboutPage: "app/pages/AboutPage",

		// Modules
		SocialModule: "app/SocialModule",

		// Libs
		TweenLite: 'libs/greensock/TweenLite.min',
		TweenMax: 'libs/greensock/TweenMax.min',
		TimelineLite: 'libs/greensock/TimelineLite.min',
		TimelineMax: 'libs/greensock/TimelineMax.min',
		// add 'min' in Production
		ScrollMagic: "libs/scrollmagic/uncompressed/ScrollMagic",
		"ScrollMagic.debug": "libs/scrollmagic/uncompressed/plugins/debug.addIndicators",
		"animation.gsap": "libs/scrollmagic/uncompressed/plugins/animation.gsap",

		vegas: "libs/vegas/vegas",
		moment: "libs/moment",
		calendario: "libs/jquery.calendario",
		flickity: "libs/flickity.pkgd.min",
		jquery: "libs/jquery-1.11.3.min",
		bootstrap: "libs/bootstrap",
		fancybox: "libs/fancybox/jquery.fancybox.pack",
		countup: "libs/countup.min",
		owl: "libs/owl.carousel.min",
		owlSmooth: "libs/owl.carousel.smooth",
		skrollr: "libs/skrollr.min",
		slippry: "libs/slippry",
		waypoints: "libs/waypoints.min",
		jQueryWaypoints: "libs/jquery.waypoints.min",
		smoothState: "libs/jquery.smoothState",
		cycle: "libs/cycle2.min",
		qtip: "libs/jquery.qtip.min",
		instafeed: "libs/instafeed",
		elastic: "libs/elastic.min",
		videojs: "libs/video",
		parallax: "libs/parallax.min",
		paraxify: "libs/paraxify.min",
		modernizrTouchEvents: "libs/modernizr.touch",
		bgSwitcher: "libs/jquery.bgswitcher",
		flippingText: "libs/jquery.flipping_text",
		shuffleText: "libs/jquery.shuffleText",
		timeago: "libs/timeago",
		livestamp: "libs/livestamp",
		chart: "libs/chartjs/Chart.min",
		chartDoughnut: "libs/chartjs/Chart.Doughnut"
	},

	shim: {
		ScrollMagic: {
			deps: ['jquery', 'TweenMax'],
			exports: 'ScrollMagic',
			init: function() {
            	return {
            		ScrollMagic: ScrollMagic, 
                	ScrollScene: ScrollScene
            	}
        	}
		},

		calendario: {
			deps: ["jquery"]
		},

		flickity: {
			deps: ["jquery"]
		},

		owl: {
			deps: ["jquery"]
		},

		fancybox: {
			deps: ["jquery"]
		},

		owlSmooth: {
			deps: ["jquery"]
		},

		bootstrap: {
			deps: ["jquery"]
		},

		parallax: {
			deps: ["jquery"]
		},

		livestamp: {
			deps: ["jquery"]
		},

		paraxify: {
			exports: "paraxify",
			init: function() {return {paraxify: paraxify}}
		},

		bgSwitcher: {
			deps: ["jquery"]
		},

		flippingText: {
			deps: ["jquery"]
		},

		shuffleText: {
			deps: ["jquery"]
		}
	}
});

// READY! STEADY! GO!!!
requirejs(["app/main"]);
