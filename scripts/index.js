
//Cards video overlay

document.addEventListener('DOMContentLoaded', () => {
const openBtn = document.querySelector('.film');
const closeBtn = document.querySelector('#closeOverlay');
const overlay = document.querySelector('.overlay');

openBtn.addEventListener('click',() => {
    overlay.style.display = 'block';
    console.log(openBtn);
});

closeBtn.addEventListener('click',() => {
    overlay.style.display = 'none';
})

});

const menu = document.getElementById("topbar");

function fansyFunction(){

document.getElementById("menu").classList.toggle("show")
}

//Overlay videos storing

var videoArray = new Array();

window.addEventListener("load", () =>{
    // (B1) Data array
    var data = [
        [],
        []
    ];

    // (B2) Loop + Add cells
    let container = document.getElementById("arrayGrid");
    for (let i of data) { for (let j of i) {
        let cell = document.createElement("div");
        cell.innerHTML = j;
        cell.className = "cell";
        container.appendChild(cell);
    }}
});

   