// LOADING ANIMATION

var loader = document.getElementById("preloader");
var container = document.getElementById("container");

window.addEventListener("load", function () {
    loader.style.display = "none";
    container.style.display = "block"
})