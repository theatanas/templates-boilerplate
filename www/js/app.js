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

		// Libs
		jquery: "libs/jquery-1.11.3.min",
		bootstrap: "libs/bootstrap",
		fancybox: "libs/jquery.fancybox.pack.min",
		countup: "libs/countup.min",
		owl: "libs/owl.carousel.min",
		owlSmooth: "libs/owl.carousel.smooth",
		skrollr: "libs/skrollr.min",
		slippry: "libs/slippry",
		waypoints: "libs/waypoints.min",
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
		owl: {
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
