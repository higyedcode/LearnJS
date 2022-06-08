const startButton = document.querySelector(".start");
const settingsButton = document.querySelector(".settings");
let time = document.querySelectorAll("input");
const circle = document.querySelector(".ring");
let inputValueChanged = false;
let min = Number(time[0].value);
let sec = Number(time[1].value);

console.log(startButton);
let timerOn = false;
let timerInterval;
startButton.addEventListener("click", () => {
  if (timerOn == true) {
    timerOn = false;
    startButton.innerText = "START";
    clearInterval(timerInterval);
  } else {
    timerOn = true;
    time[0].disabled = true;
    time[1].disabled = true;
    startButton.innerText = "PAUSE";
    startTimer();
  }
  console.log("timerOn = " + timerOn);
});

function startTimer() {
  timerInterval = setInterval(() => {
    if (inputValueChanged) {
      min = Number(time[0].value);
      sec = Number(time[1].value);
      inputValueChanged = false;
    }
    minString = min < 10 ? "0" + String(min) : String(min);
    secString = sec < 10 ? "0" + String(sec) : String(sec);
    console.log(min);
    console.log(sec);
    time[0].value = minString;
    time[1].value = secString;
    if (min == 0 && sec == 0) {
      circle.style.stroke = "red";
      clearInterval(timerInterval);
      requestAnimationFrame(() => {
        //fires before next repaint of the DOM
        requestAnimationFrame(() => {
          //fires before the next next repaint => after   the next repaint of the DOM
          alert("Time is up!");
        });
      });
    } else {
      if (sec == 0) {
        min--;
        sec = 59;
      } else {
        sec--;
      }
    }
  }, 1000);
}

settingsButton.addEventListener("click", () => {
  time[0].disabled = false;
  time[1].disabled = false;
  inputValueChanged = true;
});
time[0].addEventListener("click", () => {
  if (!time[0].disabled) {
    if (time[1].value.length < 2) time[1].value = "0" + time[1].value;
    inputValueChanged = true;
  }
});
time[1].addEventListener("click", () => {
  if (!time[1].disabled) {
    if (time[0].value.length < 2) time[0].value = "0" + time[0].value;
    inputValueChanged = true;
  }
});
