const {I} = inject();

module.exports = function() {
  const recorder = require('codeceptjs').recorder;
  return actor({
    edge: function(login, password, url="nothing") {
      //This function is running autoit script within config/login.au3
      recorder.startUnlessRunning();
      recorder.add('run autoit script', function() {
        return new Promise((doneFn, errFn) => {
          console.log(login);
          var exec = require('child_process').exec, child;
          child = exec('"C:/Program Files (x86)/AutoIt3/AutoIt3.exe" ./conf/login.au3 '+login+' '+password,function (error) {
            if (error !== null) {
              console.log('exec error: ' + error);
              errFn();
            }
          });
          doneFn();
        });
      });
      if(!url.includes("nothing")){
        I.amOnPage(url);
      }
    },
    
    chrome: function(login, password) {
      this.amOnPage("https://"+login+":"+password+"@nettest.acial.fr/");
      this.wait(2);
    }
  });
}