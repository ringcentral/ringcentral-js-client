var fetch = require('node-fetch');
var SDK = require('ringcentral');
var RingcentralClient = require('../');

var authDataUrl = 'http://localhost/sensitive/auth.json';

var ringcentral;
fetch(authDataUrl).then(function (res) {
	return res.json();
}).then(function(auth) {
	console.log('auth data', auth)
	ringcentral = new SDK(auth.app);
	return ringcentral.platform().login(auth.user);
}).then(function () {
	var client = new RingcentralClient(ringcentral);
	console.log('Logged in');
	testCallLog(client);
}).catch(function (err) {
	console.log('Fail to login: ' + err);
});

function testCallLog(client) {
	client.callLog().loadAccountCallLog({withRecording: true}).then(function (callLog) {
		for (var i = callLog.records.length - 1; i >= 0; i--) {
			console.log(callLog.records[i].recording)
		}
		//console.log('callLog', callLogs);
	}).catch(function (err) {
		console.error('Error ', err.stack());
	})
}