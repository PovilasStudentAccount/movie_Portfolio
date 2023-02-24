document.addEventListener(
  "click",
  function (e) {
    var target = (e = e || window.event).target || e.srcElement,
    //array for videos
      myPlayer = [
        videojs("vid1"),
        videojs("vid2"),
        videojs("vid3"),
        videojs("vid4"),
      ];
      //video js options loop for array access
    for (let i = 0; i < myPlayer.length; i++)
    //make all videos responsive to resolution
      myPlayer[i].aspectRatio("16:9"),
        myPlayer[i].fluid(!0),
    //default audio
        myPlayer[i].volume(0.5);
    //Open the modal when clicked on card
    if (
      target.hasAttribute("data-toggle") &&
      "modal" == target.getAttribute("data-toggle") &&
      target.hasAttribute("data-target")
    ) {
      var m_ID = target.getAttribute("data-target");
      document.getElementById(m_ID).classList.add("open"), e.preventDefault();
    }
    // Close modal window with 'data-dismiss' attribute or when the backdrop is clicked
    if (
      (target.hasAttribute("data-dismiss") &&
        "modal" == target.getAttribute("data-dismiss")) ||
      target.classList.contains("modal")
    ) {
      var modal;
      document.querySelector('[class="modal open"]').classList.remove("open"),
        e.preventDefault();
    //make video pause upon modal close
      for (let i = 0; i < myPlayer.length; i++) {myPlayer[i].pause();}
    }
  },
  !1
);
const menu = document.getElementById("topbar");
function fansyFunction() {
  document.getElementById("menu").classList.toggle("show");
}
