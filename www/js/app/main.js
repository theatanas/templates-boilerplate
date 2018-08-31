define(function(require) {
	var paths = ["jquery"];
	require (paths, function($){
		$(document).ready(function(){

			// VARS
			var body = $("body"),
				pageClass = $("body").attr("class"),
				owl = require("owlSmooth"),
				functions = require('functions'),
				bootstrap = require('bootstrap'),
				waypoints = require("waypoints"),
				waypointsActivator = require("waypointsActivator")

			// SLIDERS
			var sliders = require("sliders");
			if ($(".demo-slider").length) {
				sliders.loadDemoSlider();
			}

			// ABOUT PAGE
			if ($(".AboutPage").length) {
				var AboutPage = require("AboutPage");
				AboutPage.activateSomething();

				// Debounce demo
				var callFx = functions.debounce(function(){
					functions.dockTopHeader();
				}, 1)

				document.addEventListener('scroll', callFx);
			}

			// CONTACT PAGE
			if ($(".ContactPage").length) {
				var ContactPage = require("ContactPage");
				ContactPage.validateForm();
			}

			// ACTIVATE BTT, DISABLE PRELOADER
			functions.activateBtt();
			functions.disablePreloader();
		});
	})
})