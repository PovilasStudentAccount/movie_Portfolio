
// Modal code


document.addEventListener('click', function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;

    if (target.hasAttribute('data-toggle') && target.getAttribute('data-toggle') == 'modal') {
        if (target.hasAttribute('data-target')) {
            var m_ID = target.getAttribute('data-target');
            document.getElementById(m_ID).classList.add('open');
            e.preventDefault();

            videojs('vid1', {
                controls: false,
                autoplay: false,
                preload: 'auto',
                height: 600,
                poster: img('/images/mMyers.webp'),
            });
        }
    }

    // Close modal window with 'data-dismiss' attribute or when the backdrop is clicked
    if ((target.hasAttribute('data-dismiss') && target.getAttribute('data-dismiss') == 'modal') || target.classList.contains('modal')) {
        var modal = document.querySelector('[class="modal open"]');
        modal.classList.remove('open');
        e.preventDefault();

    }
}, false);


var player = videojs('vid1');




//pause video on modal close

/*

vidPlayers.src({type: 'video/mp4', src: '/videos/Pootis_status.mp4'});
vidPlayers.ready(function() {
    player.pause().currentTime(0).trigger('loadstart');
});
*/

//modal code end



const menu = document.getElementById("topbar");

function fansyFunction(){

document.getElementById("menu").classList.toggle("show")
}






   