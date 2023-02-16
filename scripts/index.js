
// Modal code


document.addEventListener('click', function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    //array of videos
    var myPlayer = [videojs("vid1"),
                    videojs("vid2"),
                    videojs("vid3"),
                    videojs("vid4")];

    //video js options loop for array access
    for (let i = 0; i < myPlayer.length; i++){

        //make all videos responsive to resolution
        myPlayer[i].aspectRatio('16:9');
        myPlayer[i].fluid(true);
        
        }

    if (target.hasAttribute('data-toggle') && target.getAttribute('data-toggle') == 'modal') {
        if (target.hasAttribute('data-target')) {
            var m_ID = target.getAttribute('data-target');
            document.getElementById(m_ID).classList.add('open');
            e.preventDefault();

            
        }
    }

    // Close modal window with 'data-dismiss' attribute or when the backdrop is clicked
    if ((target.hasAttribute('data-dismiss') && target.getAttribute('data-dismiss') == 'modal') || target.classList.contains('modal')) {
        var modal = document.querySelector('[class="modal open"]');
        modal.classList.remove('open');
        e.preventDefault();

        //make video pause upon modal close
        for (let i = 0; i < myPlayer.length; i++){
        myPlayer[i].pause();               
        }

    }

}, false);

const menu = document.getElementById("topbar");

function fansyFunction(){

document.getElementById("menu").classList.toggle("show")
}