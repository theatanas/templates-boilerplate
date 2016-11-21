define(function() {
    return {
    	keys: {37: 1, 38: 1, 39: 1, 40: 1},

        disablePreloader: function(){
            setTimeout(function(){
                $('.preloader-logo').fadeOut(500);
                $('.preloader').fadeOut(1); //1200
                $(".animatable-headline").removeClass("op0").addClass("animated wait-1000 fadeIn duration-2000")
                $(".animatable-sub").removeClass("op0").addClass("animated fadeIn wait-1500 duration-2000")
            }, 1) // 1000
        },

        activateBtt: function() {
            var lastScrollTop = 0,
                bttBar = $(".btt-container");
            $(window).scroll(function(event){
                var st = $(this).scrollTop();

                if (st > lastScrollTop || st < 1200){
                     bttBar.addClass('op0');
                    // downscroll code
                } else if (st + $(window).height() < ($(document).height() - 300)) {
                     bttBar.removeClass('op0');
                   // upscroll code. begin after 300px from bottom
                }

                lastScrollTop = st;
            });
        },

        animateSVG: function(pathId, time, delay, strokeColor) {
            var path = document.querySelector(pathId);
            var length = path.getTotalLength();
            path.style.strokeDasharray = 0 + ' ' + length;
            path.style.strokeDashoffset = 0;
            path.style.stroke = "transparent";

            setTimeout(function() {
                path.style.stroke = strokeColor;
                // Clear any previous transition
                path.style.transition = path.style.WebkitTransition = 'none';
                // Set up the starting positions
                path.style.strokeDasharray = length + ' ' + length;
                path.style.strokeDashoffset = length;
                // Trigger a layout so styles are calculated & the browser
                // picks up the starting position before animating
                path.getBoundingClientRect();
                // Define our transition
                path.style.transition = path.style.WebkitTransition =
                    'stroke-dashoffset ' + time + 'ms ease-in-out';
                // Go!
                path.style.strokeDashoffset = '0'
            }, delay);
        },

        preventDefault: function (e) {
        	e = e || window.event;
        	if (e.preventDefault)
        		e.preventDefault();
        		e.returnValue = false;  
        },

        preventDefaultForScrollKeys: function (e) {
           	if (this.keys[e.keyCode]) {
        		this.preventDefault(e);
        		return false;
        	}
        },

        disableScroll: function () {
        	if (window.addEventListener) // older FF
        	    window.addEventListener('DOMMouseScroll', this.preventDefault, false);
        		window.onwheel = this.preventDefault; // modern standard
        		window.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
        		window.ontouchmove  = this.preventDefault; // mobile
        		document.onkeydown  = this.preventDefaultForScrollKeys;
        },

        enableScroll: function () {
            if (window.removeEventListener)
                window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
            	window.onmousewheel = document.onmousewheel = null; 
            	window.onwheel = null; 
            	window.ontouchmove = null;  
            	document.onkeydown = null;  
        }
    };
});
