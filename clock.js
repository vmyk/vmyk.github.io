document.addEventListener("DOMContentLoaded", function () {
  var clockElement = document.getElementById("clock");
  var additionalText = document.getElementById("additional-text");

  function formatTimeWithZeros(number) {
    return number < 10 ? "0" + number : number;
  }

  function updateClock() {
    var now = new Date();
    var hours = formatTimeWithZeros(now.getHours());
    var minutes = formatTimeWithZeros(now.getMinutes());
    var seconds = formatTimeWithZeros(now.getSeconds());

    var formattedTime = `${hours}:${minutes}:${seconds}`;

    clockElement.textContent = formattedTime;
  }

  updateClock();

  setInterval(updateClock, 1000);
});
