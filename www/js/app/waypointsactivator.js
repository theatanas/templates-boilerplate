define(function () {
    return {
        // Load the Info Boxes on the Homepage and the About page
        loadInfoBoxesWaypoints: function () {
            $(".box").each(function(){
                // var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
                var time = Math.floor(Math.random() * (500 - 50 + 1)) + 50;
                var projectElement = $(this);

                var tempInstance = new Waypoint({
                    element: projectElement[0],
                    offset: "75%",
                    handler: function(direction) {
                        setTimeout(function(){
                            $(projectElement[0]).find(".preloaded").fadeOut(800);
                        }, time)
                        this.destroy();
                    }
                })
            })
        }
    };
});
