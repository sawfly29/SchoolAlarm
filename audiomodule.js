const player = require("node-wav-player");

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

function extraAlarm() {
  player
    .play({
      path: "./Sounds/extra.wav",
    })
    .then(() => {
      console.log("Оповещение!");
    })
    .catch((error) => {
      console.error(error);
    });
}

module.exports.finishLesson = finishLesson;
module.exports.startLesson = startLesson;
module.exports.extraAlarm = extraAlarm;
