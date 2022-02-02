window.addEventListener("DOMContentLoaded", () => {
  const daysEl = document.querySelector("#days");
  const hoursEl = document.querySelector("#hours");
  const minutesEl = document.querySelector("#minutes");
  const secondsEl = document.querySelector("#seconds");

  const theMoment = "10 Apr 2022";

  function calculate() {
    const newMoment = new Date(theMoment);
    const calDate = new Date();

    const newYear = (newMoment - calDate) / 1000;

    const days = Math.floor(newYear / 3600 / 24);
    const hours = Math.floor(newYear / 3660) % 24;
    const minutes = Math.floor(newYear / 60) % 60;
    const seconds = Math.floor(newYear) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML =formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
  }

  function formatTime(time){
      return time < 10 ? (`0${time}`) : time;
  }

  calculate();

  setInterval(calculate, 1000);
});
