var timeLeft = 25;
var timer = document.getElementById('timer');

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft < 0) {
    clearTimeout(timerId);
    location.replace("final.html");
  } else {
    timer.innerHTML = timeLeft;
    timeLeft--;
  }
}