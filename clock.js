document.addEventListener("DOMContentLoaded", function () {
  var clockContainer = document.getElementById("clock-container");
  var additionalText = document.getElementById("additional-text");
  var clockElement = document.getElementById("clock");

  function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    var formattedTime = `${hours}:${minutes}:${seconds}`;

    clockElement.textContent = formattedTime;
  }

  updateClock();

  setInterval(updateClock, 1000);
});
