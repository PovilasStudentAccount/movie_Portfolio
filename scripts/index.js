//Cards video overlay
document.addEventListener('DOMContentLoaded', () => {
const openBtn = document.querySelector('#openOverlay');
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