Nexmo = Npm.require('easynexmo');
Nexmo.logger = function(err, msg){
	if (err){
		console.error(err);
	} else {
		console.log(msg);
	}
}