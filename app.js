document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function(){

    const menu = document.querySelector(".menu");
    const btn = document.querySelector(".menu-toggle");

    btn.addEventListener("click", function (e) {
        e.preventDefault();
        menu.classList.toggle("show");
    })

    $('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});

    $(window).on('resize load', function() {
        $('.site-header iframe').each(function() {
            var self = $(this);
            var container = self.parent();

            self.css({
                width: container.width() + "px",
                height: container.width() * (9/16) + 'px',
                position: 'absolute',
                marginTop: -container.width() * (9/32) + 'px',
                top: '50%'
            });
        });
    });


// Load the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
    function onYouTubePlayerAPIReady() {
        player = new YT.Player('yt-player', {
            autoplay : 1,
            videoId: 'GobXBtaz9o4',
            playerVars : {
                'autoplay' : 1,
                'mute' : 1,
                'rel' : 0,
                'showinfo' : 0,
                'showsearch' : 0,
                'controls' : 0,
                'loop' : 1,
                'enablejsapi' : 1,
                'playlist': 'GobXBtaz9o4'
            },
            events: {
                "onReady": onPlayerReady,
                //"onStateChange": onPlayerStateChange
            }
        });
    }

    function onPlayerReady(event) {
        event.target.mute();
        event.target.playVideo();
    }

    function onPlayerStateChange(event) {
        var id = 'GobXBtaz9o4';

        if(event.data === YT.PlayerState.ENDED){
            player.loadVideoById(id);
        }
    }

});

function myFunction(x) {
    x.classList.toggle("change");
}
