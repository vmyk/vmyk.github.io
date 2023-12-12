document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    fadeOutLoader();
  }, 2000);
});

function fadeOutLoader() {
  var loader = document.getElementById("loader");
  loader.classList.add("fade-out");

  setTimeout(function () {
    var loaderWrapper = document.getElementById("loader-wrapper");
    loaderWrapper.style.display = "none";

    var contentWrapper = document.getElementById("content-wrapper");
    contentWrapper.style.display = "block";
  }, 1000);
}
