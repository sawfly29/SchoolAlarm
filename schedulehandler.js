var fs = require("fs");
var lessonStart = [],
  lessonFinish = [],
  timingArray = [];
(extras = []), (dumps = []);
let rawdata = fs.readFileSync("./schedule.json");
let schedule = JSON.parse(rawdata);

Object.keys(schedule).forEach((item) => isLesson(item));

timingArray.forEach((item) => timeParser(item));

function isLesson(item) {
  if (item.match(/lesson/)) {
    timingArray.push(schedule[item]);
  } else if (item.match(/extra/)) {
    if (schedule[item]) {
      extras.push(schedule[item]);
    }
  } else {
    dumps.push(schedule[item]);
  }
}

function timeParser(timeString) {
  let timing = timeString.split("-");
  if (timing[0]) {
    lessonStart.push(timing[0].trim());
  }
  if (timing[1]) {
    lessonFinish.push(timing[1].trim());
  }
}

module.exports.lessonFinishArr = lessonFinish;
module.exports.lessonStartArr = lessonStart;
module.exports.extrasArr = extras;
