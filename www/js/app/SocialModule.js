define(function(require) {
    return {
        // Insta & FB Icon Paths
        iconPathInsta: "/themes/homepage/images/icons/social/icon-instagram.png",
        iconPathFb: "/themes/homepage/images/icons/social/icon-facebook.svg",

        // FB & Twitter API URLs
        fbApiUrl: "https://example.com/fb-api",
        twitterApiUrl: "https://example.com/twitter-api",
        // fbApiUrl: "http://localhost/example/fb-api",
        // twitterApiUrl: "http://localhost/example/twitter-api",

        // Control Variables
        instaFeedLoaded: false,
        fbFeedLoaded: false,
        twitterFeedLoaded: false,

        // Load the Social wall
        loadSocialWall: function() {
            var self = this;

            self.loadInstafeed();
            self.loadFbFeed();
            self.loadTwitterFeed();

            var feedsInterval = setInterval(function(){
                if (self.instaFeedLoaded == true && self.fbFeedLoaded == true && self.twitterFeedLoaded == true) {
                    clearInterval(feedsInterval);
                    
                    // Sort all divs:
                    var divList = $("#media-feed li");
                    divList.sort(function(a, b){
                        return $(b).data("timestamp")-$(a).data("timestamp")
                    });
                    $("#media-feed").empty().html(divList);
                    $(".social-loader-wrapper").hide();
                    //self.buildupFeed();

                    $("#media-feed li").removeClass("op0").addClass("fadeInUp");
                }
            }, 250);
        },

        // Load and Run instagram feed
        loadInstafeed: function() {
            var self = this;

            instafeed = require("instafeed");

            var feed = new instafeed({
                target: "media-feed",
                get: "user",
                userId: 234537001,
                accessToken: "234537001.1677ed0.30e2d4ca0efa45aeaf8dbdae7219ad15",
                resolution: "low_resolution",
                template:'<li class="animated op0 social-post type-insta" data-timestamp="{{created_time}}">'+
                        '    <a target="_blank" href="{{link}}"><img class="post-pic" src="{{image}}"></a>'+
                        '    <div class="wrapper">'+
                        '        <div class="top">'+
                        '            <img src="' + self.iconPathInsta + '" alt="Instagram" class="icon">'+
                        '            <a href="http://instagram.com/account">@account</a>'+
                        '            <div class="date">{{date_day}}-{{date_month}}</div>'+
                        '        </div>'+
                        '        <div class="bottom">{{caption}}</div>'+
                        '    </div>'+
                        '</li>',
                after: function() {
                    self.instaFeedLoaded = true;
                }
            });

            feed.run();
        },

        // Load FB Feed
        loadFbFeed: function() {
            var self = this;

            $.ajax({
                type: "POST",
                dataType: 'json',
                url: self.fbApiUrl,
                crossDomain: true,
            })

            .done(function(json) {
                self.parseFbFeed(json);
            })

            .fail( function(xhr, textStatus, errorThrown) {
                console.error(xhr.responseText);
                console.error(textStatus);
            });
        },

        // Parse the FB Feed and render it
        parseFbFeed: function(feed) {
            var self = this;

            if (feed.error) {console.error("Error parsing the fb feed. Check the access_key or the Graph API for changes.");return;}

            var target = $("#media-feed");

            $(feed.data).each(function(item) {

                if (this.message === undefined) return
                var msg = this.message.substr(0, 180)+'...';
                var timestamp = new Date(this.created_time.split("+")[0]).getTime()/1000;
                var date = new Date(this.created_time.split("+")[0]);
                var dateDay = date.getDate();
                var dateMonth = date.getMonth() + 1;
                // var dateYear = date.getFullYear();

                if (this.type === "photo") {
                    var pictureID = this.object_id;
                    var pictureURL = this.full_picture; // this is the new picture fetching code
                    target.append(
                        '<li class="animated op0 social-post type-fb" data-timestamp="' + timestamp + '">' +
                        '    <a href="' + this.link + '"><img class="post-pic" src="' + pictureURL + '" alt=""></a>' +
                        '    <div class="wrapper">' +
                        '        <div class="top">' +
                        '            <img src="' + self.iconPathFb + '" alt="Facebook" class="icon">' +
                        '            <a href="https://www.facebook.com/acount/">account</a>' +
                        '            <div class="date">' + dateDay + '-' + dateMonth + '</div>' +
                        '        </div>' +
                        '        <div class="bottom">' + msg + '</div>' +
                        '    </div>' +
                        '</li>'
                    );
                } else if (this.type === "status" || "link" || "video") {
                    target.append(
                        '<li class="animated op0 social-post type-fb" data-timestamp="' + timestamp + '">' +
                        '    <div class="wrapper">' +
                        '        <div class="top">' +
                        '            <img src="' + self.iconPathFb + '" alt="Facebook" class="icon">' +
                        '            <a href="' + this.link + '">account</a>' +
                        '            <div class="date">' + dateDay + '-' + dateMonth + '</div>' +
                        '        </div>' +
                        '        <div class="bottom">' + msg + '</div>' +
                        '    </div>' +
                        '</li>'
                    );
                }
            });

            self.fbFeedLoaded = true;
        },

        // Load Twitter Feed
        loadTwitterFeed: function() {
            var self = this;

            $.ajax({
                type: "POST",
                dataType: 'html',
                url: self.twitterApiUrl,
                crossDomain: true,
            })

            .done(function(data) {
                self.parseTwitterFeed(data);
            })

            .fail( function(xhr, textStatus, errorThrown) {
                console.error(xhr.responseText);
                console.error(textStatus);
            });
        },

        // Parse the twitter feed and render it
        parseTwitterFeed: function(htmlFeed) {
            var self = this;
            var target = $("#media-feed");
            target.append(htmlFeed);

            self.twitterFeedLoaded = true;
        },

        // FadeInUp the feed on scrolldown. (Not working)
        buildupFeed: function() {
            $("#media-feed li").each(function(){
                // var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
                var time = 200
                var div = $(this); //div to animate

                var tempInstance = new Waypoint({
                    element: div[0],
                    offset: "100%",
                    handler: function(direction) {
                        div.removeClass("op0").addClass("fadeInUp");
                        this.destroy();
                    }
                })
                console.log(tempInstance);
            })          
        }
    };
});
