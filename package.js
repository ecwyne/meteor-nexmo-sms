Package.describe({
  summary: "Nexmo REST api packaged for Meteor",
  version: "1.0.1",
  git: "http://github.com/ecwyne/meteor-nexmo-sms",
  name: 'ecwyne:nexmo-sms'
});

Npm.depends({
	easynexmo: '0.4.1'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.2');
  api.export('Nexmo');
  api.addFiles('nexmo-sms.js', 'server');
});
