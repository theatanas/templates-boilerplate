define(function(require) {
	var paths = ["jquery"];
	require (paths, function($){
		$(document).ready(function(){

			// VARS
			var body = $("body"),
				owl = require("owlSmooth"),
				waypoints = require("waypoints"),
				functions = require('functions');
				paraxify = require('paraxify');

			// SLIDERS
			var sliders = require("sliders");
			if ($(".demo-slider").length) {
				sliders.loadDemoSlider();
			}

			// ABOUT PAGE
			if ($(".AboutPage").length) {
				var AboutPage = require("AboutPage");
				AboutPage.activateSomething();
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