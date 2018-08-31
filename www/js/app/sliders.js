define(function (require) {
    return {

        loadSliders: function(){
            var self = this;

            if ($(".news-slider").length) {self.loadNewsSlider();}
        },
        
        // Load Demo Slider
        loadDemoSlider: function () {
            var owl = $('.news-slider').owlCarousel({
                loop: true,
                nav: true,
                navText: [
                    '<div class="arrow-big arrow-left"><span></span><span></span></div>',
                    '<div class="arrow-big arrow-right"><span></span><span></span></div>'
                ],
                autoplay: false,
                autoplayTimeout: 4000,
                autoplaySpeed: 500,
                mouseDrag: false,
                touchDrag: true,
                dots: true,
                items: 1,
                responsive :{
                    320: {
                        dots: true,
                        items: 1
                    },

                    992: {
                        dots: false,
                        items: 3,
                        mouseDrag: false
                    }
                }
            });
        }
    };
});
