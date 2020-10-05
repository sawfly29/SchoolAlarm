var audiomodule = require("./audiomodule");
var schedule = require("./schedulehandler");
const { type } = require("os");
let date, dayOfWeek;

handler();
setInterval(handler, 60000);

function handler() {
  currentTime();
  if (dayOfWeek == 6 || dayOfWeek == 0) {
    console.log("Дорогой, иди домой, ведь сегодня выходной!");
  } else {
    let currentTimeString = getCurrentTimeString();
    console.log(currentTimeString);
    timeChecker(currentTimeString);
  }
}

function currentTime() {
  date = new Date();
  dayOfWeek = date.getDay();
  console.log(date);
}

function getCurrentTimeString() {
  let currentHoursString = date.getHours().toString();
  if (currentHoursString.length == 1) {
    currentHoursString = "0" + currentHoursString;
  }
  let currentMinutesString = date.getMinutes().toString();
  if (currentMinutesString.length == 1) {
    currentMinutesString = "0" + currentMinutesString;
  }
  return currentHoursString + "." + currentMinutesString;
}

function timeChecker(currentTimeString) {
  schedule.lessonStartArr.forEach((lesson) => {
    if (lesson == currentTimeString) {
      audiomodule.startLesson();
    }
  });
  schedule.lessonFinishArr.forEach((lesson) => {
    if (lesson == currentTimeString) {
      audiomodule.finishLesson();
    }
  });
  schedule.extrasArr.forEach((extr) => {
    if (extr == currentTimeString) {
      audiomodule.extraAlarm();
    }
  });
}
