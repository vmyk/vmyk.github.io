function updateTime() {
  const clockElement = document.getElementById("clock");
  const now = new Date();
  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
    timeZone: "Europe/Lisbon",
  };
  const timeString = now.toLocaleTimeString("en-US", options);
  clockElement.textContent = timeString;

  setTimeout(updateTime, 1000); // Update the clock every second
}

updateTime();
