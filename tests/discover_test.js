/// <reference path="../steps.d.ts" />

var url='https://google.fr';

Feature('Discover');

Scenario('Test all the redirections', (I) => {
	I.amOnPage(url);
});
