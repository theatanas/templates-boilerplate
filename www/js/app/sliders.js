define(function () {
    return {
        
        // Load Demo Slider
        loadDemoSlider: function () {
            $('.demo-slider').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1
            })
        }
    };
});
