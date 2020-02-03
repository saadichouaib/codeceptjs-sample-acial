module.exports = function() {
  return actor({
    initEdge: function(login, password) {
        var exec = require('child_process').exec, child;
        child = exec('"C:/Program Files (x86)/AutoIt3/AutoIt3.exe" ./conf/login.au3 YNE Simbatest123',function (error) {
          if (error !== null) {
            console.log('exec error: ' + error);
            console.log(errFn());
          }
        });
    },
    
    login: function(login, password) {
      this.amOnPage("https://"+login+":"+password+"@nettest.acial.fr/");
      this.wait(2);
    }
  });
}