#nexmo-sms

##Install
```bach
meteor add ecwyne:nexmo-sms
```

##Use
```javascript
Nexmo.initialize('api_key', 'api_secret', 'http OR https', 'DEBUG (boolean)');
Nexmo.sendTextMessage('...')
```
Setting DEBUG to true will automatically log responses to api calls.


List of API's supported by the library.
=======================================

###Send a text message

	Nexmo.sendTextMessage(sender,recipient,message,opts,callback)

###Send a Binary Message

	Nexmo.sendBinaryMessage(fromnumber, tonumber,body, udh, callback);

body - Hex encoded binary data
udh - Hex encoded udh

###Send a WAP Push Message

	Nexmo.sendWapPushMessage(fromnumber,tonumber,title,url,validity,callback);

validity is optional if given should be in milliseconds.

###Check Account Balance 
	Nexmo.checkBalance(callback);

###Get Pricing for sending message to a country.

	Nexmo.getPricing(countryCode,callback);

countryCode - 2 letter ISO Country Code

###Get all numbers associated to the account.

	Nexmo.getNumbers(callback);

###Search for MSISDN's available to purchase.

	Nexmo.searchNumbers(countryCode,pattern,callback);

pattern is optional, pass numbers to match in the search

###Change Password (API Secret)

	Nexmo.changePassword(<NEW_PASSWORD>,callback);

###Change Callback URL associated to the account

	Nexmo.changeMoCallbackUrl(<NEW_CALLBACK_URL>,callback);

###Change Delivery Receipt URL associated to the account

	Nexmo.changeDrCallbackUrl(<NEW_DR_CALLBACK_URL>,callback);

###Send TTS Message
	
	Nexmo.sendTTSMessage = function(<TO_NUMBER>,message,options,callback);

###Send TTS Prompt With Capture	

	Nexmo.sendTTSPromptWithCapture(<TO_NUMBER>,message,<MAX_DIGITS>, <BYE_TEXT>,options,callback);

###Send TTS Prompt With Confirm

	Nexmo.sendTTSPromptWithConfirm(<TO_NUMBER>, message ,<MAX_DIGITS>,'<PIN_CODE>',<BYE_TEXT>,<FAILED_TEXT>,options,callback);

###Make a voice call

	Nexmo.call(<TO_NUMBER>,<ANSWER_URL>,options,callback);


Callback
========

Callback from all API calls returns 2 parameters - error and a json object.

An example callback function :

	function consolelog (err,messageResponse) {
           if (err) {
                console.log(err);
           } else {
                console.dir(messageResponse);
           }
	}

Refer here http://nexmo.com/documentation/ to get the schema for the returned message response object.

Logger
======
By default you're given a logger callback of `Nexmo.logger` which is set to the following function.

```javascript
Nesmo.logger = function(err, msg){
	if (err){
		console.error(err);
	} else {
		console.log(msg);
	}
}
```

The MIT License (MIT)
=====================

Copyright (c) 2011 Prabhu Velayutham

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
