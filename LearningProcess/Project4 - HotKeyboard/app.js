const keys = document.querySelectorAll(".key");
let jiggleButton = document.querySelector(".jiggle");
let wrongButton;
let random;
let timerStart = false;
const timer = document.querySelector(".timer");
let myTimer;
const keyboard = document.querySelector(".keyboard");
const startTime = "01:00";
let k, ck, wk;
k = 0;
ck = 0;
wk = 0;
const title = document.querySelector("h1");
document.addEventListener("keydown", (event) => {
  k++;
  if (!timerStart) {
    keyboard.style.background = "#f6f6f6";
    timer.innerHTML = startTime;
    title.innerHTML = "Eyes on the Screen";
    timerStart = true;
    console.log("Timer is on");
    startInterval();
  }
  if (wrongButton) wrongButton.classList.remove("wrong-selection");
  if (event.key.toUpperCase() == jiggleButton.dataset.key) {
    ck++;
    jiggleButton.classList.remove("jiggle");
    random = Math.floor(Math.random() * keys.length);
    keys[random].classList.add("jiggle");
    jiggleButton = keys[random];
  } else {
    wk++;
    keys.forEach((k, index) => {
      if (k.dataset.key == event.key.toUpperCase()) {
        k.classList.add("wrong-selection");
        wrongButton = k;
      }
    });
  }
});

function startInterval() {
  myTimer = setInterval(() => {
    let time = timer.innerHTML;
    let timeSplit = time.split(":");
    let min = Number(timeSplit[0]);
    let sec = Number(timeSplit[1]);
    if (sec == 0 && min == 0) {
      clearInterval(myTimer);
      keyboard.style.background = "#0f0f0f";
      timerStart = false;
      title.innerHTML = `Total keys: ${k}<br/>Correct Keys: ${ck}<br/>Wrong keys: ${wk}`;
    } else {
      if (sec == 0) {
        sec = 59;
        min--;
      } else sec--;
      time = `${min < 10 ? "0" + min.toString() : min.toString()}:${
        sec < 10 ? "0" + sec.toString() : sec.toString()
      }`;
      timer.innerHTML = time;
    }
  }, 1000);
}
