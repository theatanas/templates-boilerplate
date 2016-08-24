/*
 * require.js loader config
 */

requirejs.config({
	baseUrl: "js",

	paths: {
		// Paths to the libs we use
		jquery: "libs/jquery-1.11.3.min",
		bootstrap: "libs/bootstrap",
		fancybox: "libs/jquery.fancybox.pack.min",
		countup: "libs/countup.min",
		owl: "libs/owl.carousel.min",
		skrollr: "libs/skrollr.min",
		slippry: "libs/slippry",
		waypoints: "libs/waypoints.min",
		smoothState: "libs/jquery.smoothState",
		cycle: "libs/cycle2.min",
		qtip: "libs/jquery.qtip.min",
		instafeed: "libs/instafeed",
		elastic: "libs/elastic.min"
	},

	shim: {
		owl: {
			deps: ["jquery"]
		},

		bootstrap: {
			deps: ["jquery"]
		}
	}
});