# RingCentral Client

[![Build Status](https://travis-ci.org/zengfenfei/ringcentral-js-client.svg?branch=working)](https://travis-ci.org/zengfenfei/ringcentral-js-client)

This is a library implemented in typescript which provides convenient apis for typescript and javascript developers to access RingCentral webservice(https://developer.ringcentral.com/api-docs/latest/index.html).

## Getting started

### Install

```shell
npm install https://github.com/zengfenfei/ringcentral-js-client#releases --save # This version is for test only which will change soon.
npm install ringcentral
```

### Used in Typescript or ES6
```typescript
import RingcentralClient from "ringcentral-client";
import * as Ringcentral from "ringcentral";

var RcSdk = new Ringcentral({
	"server": "https://platform.devtest.ringcentral.com",
	"appKey": "{yourAppKey}",
	"appSecret": "{yourAppSecret}"
}); // Create your Ringcentral JS sdk instance and login

RcSdk.platform().login({
	"username": "{username}",
	"extension": "",
	"password": "{password}"
}).then(function() {

	var client = new RingcentralClient(RcSdk);
	client.account().get().then(function(accountInfo) {
		console.log(accountInfo)
	});

});
```

### Used in commonjs(node.js, webpack and browserify)
```javascript
var RingcentralClient = require("ringcentral-client").default; // Don't forget the `default`
var Ringcentral = require("ringcentral");

var RcSdk = new Ringcentral({
	"server": "https://platform.devtest.ringcentral.com",
	"appKey": "{yourAppKey}",
	"appSecret": "{yourAppSecret}"
}); // Create your Ringcentral JS sdk instance and login

RcSdk.platform().login({
	"username": "{username}",
	"extension": "",
	"password": "{password}"
}).then(function() {

	var client = new RingcentralClient(RcSdk);
	client.account().get().then(function(accountInfo) {
		console.log(accountInfo)
	});

});
```

### Used in browser as a bundled javascript library 
Add the following `script` tags to your html:
```html
<script src="path/to/node_modules/ringcentral/build/ringcentral.min.js"></script>
<script src="path/to/node_modules/ringcentral-client/build/RingcentralClient.js"></script>
```

Then you can use the two exposed global variable `RingcentralClient` and `Ringcentral`.
```javascript
var RcSdk = new Ringcentral({
	"server": "https://platform.devtest.ringcentral.com",
	"appKey": "{yourAppKey}",
	"appSecret": "{yourAppSecret}"
}); // Create your Ringcentral JS sdk instance and login

RcSdk.platform().login({
	"username": "{username}",
	"extension": "",
	"password": "{password}"
}).then(function() {

	var client = new RingcentralClient(RcSdk);
	client.account().get().then(function(accountInfo) {
		console.log(accountInfo)
	});

});
```

## Examples

### Get extension info

```typescript
client.account().extension('theExtensionId').get().then(function (extInfo) {
    console.log("The extension info", extInfo);
}).catch(function (e) {
    console.error("Get extension error", e);
});
```

### List extensions of an account

```typescript
client.account("theAccountId").extension().list().then(function (extensions) {
    console.log("The list of extension info", extensions.records);
}).catch(function (e) {
    console.error("Get extension list error", e);
});
```

### Update extension info
```typescript
client.account().extension().put({ status: "Enabled" }).then(function () {
    console.log("Success to update extension.");
}).catch(function () {
    console.error("Fail to update extension.");
});
```

### Send sms
```typescript
client.account().extension().sms().post({ to: [{ phoneNumber: "911" }], text: "Sms content" }).then(function (messageInfo) {
    console.log("Sms sent successfully", messageInfo);
}).catch(function (e) {
    console.error("Fail to send sms", e);
});
```