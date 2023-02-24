var loader = document.getElementById("preloader");
let intro = document.querySelector(".intro"),
  logo = document.querySelector(".logo-header"),
  logoSpan = document.querySelectorAll(".logo");
window.addEventListener("load", function () {
  (loader.style.display = "none"),
    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.add("active");
        }, 400 * (idx + 1));
      }),
        setTimeout(() => {
          logoSpan.forEach((span, idx) => {
            setTimeout(() => {
              span.classList.remove("active"), span.classList.add("fade");
            }, 50 * (idx + 1));
          });
        }, 2e3),
        setTimeout(() => {
          intro.style.top = "-100vh";
        }, 2300);
    });
});
