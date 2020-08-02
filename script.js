const player = require("node-wav-player");
let date, dayOfWeek;

handler();
setInterval(handler, 60000);

function currentTime() {
  date = new Date();
  dayOfWeek = date.getDay();
  console.log(date);
}
function finishLesson() {
  player
    .play({
      path: "./Sounds/finish.wav",
    })
    .then(() => {
      console.log("Звонок с урока!");
    })
    .catch((error) => {
      console.error(error);
    });
}

function startLesson() {
  player
    .play({
      path: "./Sounds/start.wav",
    })
    .then(() => {
      console.log("Звонок на урок!");
    })
    .catch((error) => {
      console.error(error);
    });
}

function handler() {
  currentTime();

  if (dayOfWeek == 6 || dayOfWeek == 0) {
    console.log("Дорогой, иди домой, ведь сегодня выходной!");
  } else {
    let currentHours = date.getHours();
    let currentMinutes = date.getMinutes() / 100;
    let time = currentHours + currentMinutes;
    let s1 = 8.3;
    let f1 = 9.15;
    let s2 = 9.35;
    let f2 = 10.2;
    let s3 = 10.4;
    let f3 = 11.25;
    let s4 = 11.35;
    let f4 = 12.2;
    let s5 = 12.35;
    let f5 = 13.2;
    let s6 = 13.35;
    let f6 = 14.2;
    let s7 = 14.3;
    let f7 = 15.15;
    let s8 = 15.25;
    let f8 = 16.1;
    if (
      s1 == time ||
      s2 == time ||
      s3 == time ||
      s4 == time ||
      s5 == time ||
      s6 == time ||
      s7 == time ||
      s8 == time
    ) {
      startLesson();
    } else if (
      f1 == time ||
      f2 == time ||
      f3 == time ||
      f4 == time ||
      f5 == time ||
      f6 == time ||
      f7 == time ||
      f8 == time
    ) {
      finishLesson();
    } else {
      console.log(time);
    }
  }
}
