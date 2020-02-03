const {I} = inject();

module.exports = function() {
  return actor({
    fillTableCalendar: function(buttonOuvrirCalendrier) {
      var date = new Date();
      I.click(buttonOuvrirCalendrier);
      I.waitForVisible('//table[@id="calendar"]',5);
      I.see(date.getDate(),'//table[@id="calendar"]/tbody/tr/td[contains(@class,"today")]');
      I.click('//table[@id="calendar"]/tbody/tr/td[contains(@class,"today")]');
    }
  })
}