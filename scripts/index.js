
// Modal code


document.addEventListener('click', function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    var myPlayer = [videojs("vid1"),
                    videojs("vid2"),
                    videojs("vid3")];

    //video js options loop for array access
    for (var i = 0; i < myPlayer.length; i++){

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

        

                myPlayer[i].pause();
                
        
    }
};
}, false);

const menu = document.getElementById("topbar");

function fansyFunction(){

document.getElementById("menu").classList.toggle("show")
}