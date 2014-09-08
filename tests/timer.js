// -------------------------------
// Next slide on timer
// -------------------------------
casper.test.begin('Next slide on timer', 1, function suite(test) {
	casper.start('http://0.0.0.0:7497/?full#3').then(function() {

		this.wait(3000);

	}).then(function() {

		test.assertExists('[id="MyID"].active', 'Next slide #MyID is active');

	}).run(function() { test.done() }).clear();
});
// -------------------------------
// Skipping timer by Left
// -------------------------------
casper.test.begin('Skipping timer by Left', 1, function suite(test) {
	casper.start('http://0.0.0.0:7497/?full#3').then(function() {

		this.sendKeys('body', casper.page.event.key.Left);
		this.wait(3000);

	}).then(function() {

		test.assertExists('[id="2"].active', 'Previous slide #2 remains active');

	}).run(function() { test.done() }).clear();
});
// -------------------------------
// Skipping timer by Right
// -------------------------------
casper.test.begin('Skipping timer by Right', 1, function suite(test) {
	casper.start('http://0.0.0.0:7497/?full#3').then(function() {

		this.sendKeys('body', casper.page.event.key.Right);
		this.wait(3000);

	}).then(function() {

		test.assertExists('[id="MyID"].active', 'Next slide #MyID remains active');

	}).run(function() { test.done() }).clear();
});
