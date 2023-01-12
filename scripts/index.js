


//Modal video overlay

document.addEventListener('DOMContentLoaded', () => {
    var modal = document.getElementsByClassName('modal');

    var openBtn = document.getElementsByClassName("vidBtn");

    var span = document.getElementsByClassName("close");

//Open modal code

openBtn[0].onclick = function() {
    modal[0].style.display = "block";
}

openBtn[1].onclick = function() {
    modal[1].style.display = "block";
}

openBtn[2].onclick = function() {
    modal[2].style.display = "block";
}

//Close modal code
span[0].onclick = function() {
    modal[0].style.display = 'none';
}

span[1].onclick = function() {
    modal[1].style.display = 'none';
}

span[2].onclick = function() {
    modal[2].style.display = 'none';
}

window.onclick = function(event) {
    console.log(event.target);
    if (event.target == event.target) {
        modal[0,1].style.display = "none";
        
    }
}
});

const menu = document.getElementById("topbar");

function fansyFunction(){

document.getElementById("menu").classList.toggle("show")
}






   