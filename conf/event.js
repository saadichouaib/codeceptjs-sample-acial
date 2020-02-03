module.exports = function() {
  const event = require('codeceptjs').event;
  const recorder = require('codeceptjs').recorder;

  event.dispatcher.on(event.step.before, function (step) {
    
  });

  event.dispatcher.on(event.step.after, function () {
   
  });

  event.dispatcher.on(event.test.after, function () {
    
  });
}