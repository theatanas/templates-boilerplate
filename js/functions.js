;define(["jquery"], 
	function($){
		// A small list of helper functions

		/*
		 * function isMobile
		 * Checks if the device has less than 992px width. An assumption is made
		 * that the device is mobile.
		 *
		 * Usage:
		 *	if(isMobile()) {
		 *		...
		 *	}
		 */
		function isTablet() {
			if ($(window).width() < 992) {return true;}
			return false;
		}

		function isMobile() {
			if ($(window).width() < 768) {return true;}
			return false;
		}

		function isSmallerThan(res) {
			if ($(window).width() < res) {return true;}
			return false;
		}

		/*
		 * function exists
		 * Checks if an element exists. Returns true if it does.
		 *
		 * Usage:
		 *	if(exists(".page-menu")) {
		 *		...
		 *	}
		 */
		function exists(className) {
			if ($(className).length) {
				return true;
			}
			return false;
		}
});