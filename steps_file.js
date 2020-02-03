
module.exports = function() {
  return actor({
    loginEdge: function(login, password) {
      this.amOnPage("https://nettest.acial.fr/");
      var exec = require('child_process').exec, child;
      child = exec('"C:/Program Files (x86)/AutoIt3/AutoIt3.exe" ./conf/login.au3 '+login+' '+password,function (error) {
        if (error !== null) {
              console.log('exec error: ' + error);
        }
      });
	    this.wait(2);
    },
    login: function(login, password) {
      this.amOnPage("https://"+login+":"+password+"@nettest.acial.fr");
      this.wait(2);
    }
});  
}