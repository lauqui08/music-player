const btnPlay = document.querySelector("#btnPlay");
const songRange = document.querySelector("#songRange");
const timerStartMin = document.querySelector("#timerStartMin");
const timerStartSec = document.querySelector("#timerStartSec");
const timerEndMin = document.querySelector("#timerEndMin").textContent;
const timerEndSec = document.querySelector("#timerEndSec").textContent;
const songLengthInSec = timerEndMin * 60 + (timerEndSec % 60);
let songTimer = 0;
let timeInterval = 1000;
songRange.max = songLengthInSec;
console.log(songLengthInSec);

//play and pause
const timerAnimate = setInterval(() => {
  if (btnPlay.alt === "Pause") {
    songTimer = songRange.value++;
    console.log(songTimer);

    if (timerStartSec.textContent != 59) {
      timerStartSec.textContent++;
    } else {
      timerStartMin.textContent++;
      timerStartSec.textContent = 0;
    }
  }

  if (songTimer === songLengthInSec) {
    clearInterval(timerAnimate);
  }
}, timeInterval);

btnPlay.addEventListener("click", (e) => {
  if (e.target.alt === "Play") {
    e.target.src = "./public/buttons/pause-circle.svg";
    e.target.alt = "Pause";
  } else {
    e.target.src = "./public/buttons/play-circle-fill.svg";
    e.target.alt = "Play";
  }
});

//drag range
songRange.addEventListener("change", (e) => {
  console.log(e.target.value);
  timerStartSec.textContent = e.target.value % 60;
  timerStartMin.textContent = Math.floor(e.target.value / 60);
});
