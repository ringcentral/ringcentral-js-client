# RingCentral Client

[![Build Status](https://travis-ci.org/zengfenfei/ringcentral-js-client.svg?branch=master)](https://travis-ci.org/zengfenfei/ringcentral-js-client)

This is a library implemented in typescript which provides convenient apis for typescript and javascript developers to access RingCentral webservice(https://developer.ringcentral.com/api-docs/latest/index.html).

## Getting started

### Install

```shell
npm install https://github.com/zengfenfei/ringcentral-js-client#releases --save # This version is for test only which will change soon.
```

### Used in Typescript or ES6
```typescript
import RingCentralClient from "ringcentral-client";
import * as RingCentral from "ringcentral";

var RcSdk = new RingCentral({
	"server": "https://platform.devtest.ringcentral.com",
	"appKey": "{yourAppKey}",
	"appSecret": "{yourAppSecret}"
}); // Create your RingCentral JS sdk instance and login

RcSdk.platform().login({
	"username": "{username}",
	"extension": "",
	"password": "{password}"
}).then(function() {

	var client = new RingCentralClient(RcSdk);
	client.account().get().then(function(accountInfo) {
		console.log(accountInfo)
	});

});
```

### Used in commonjs(node.js, webpack and browserify)
```javascript
var RingCentralClient = require("ringcentral-client").default; // Don't forget the `default`
var RingCentral = require("ringcentral");

var RcSdk = new RingCentral({
	"server": "https://platform.devtest.ringcentral.com",
	"appKey": "{yourAppKey}",
	"appSecret": "{yourAppSecret}"
}); // Create your RingCentral JS sdk instance and login

RcSdk.platform().login({
	"username": "{username}",
	"extension": "",
	"password": "{password}"
}).then(function() {

	var client = new RingCentralClient(RcSdk);
	client.account().get().then(function(accountInfo) {
		console.log(accountInfo)
	});

});
```

### Used in browser as a bundled javascript library 
Add the following `script` tags to your html:
```html
<script src="path/to/node_modules/ringcentral/build/ringcentral.min.js"></script>
<script src="path/to/node_modules/ringcentral-client/build/RingCentralClient.js"></script>
```

Then you can use the two exposed global variable `RingCentralClient` and `RingCentral`.
```javascript
var RcSdk = new RingCentral.SDK({
	"server": "https://platform.devtest.ringcentral.com",
	"appKey": "{yourAppKey}",
	"appSecret": "{yourAppSecret}"
}); // Create your RingCentral JS sdk instance and login

RcSdk.platform().login({
	"username": "{username}",
	"extension": "",
	"password": "{password}"
}).then(function() {

	var client = new RingCentralClient(RcSdk);
	client.account().get().then(function(accountInfo) {
		console.log(accountInfo)
	});

});
```

## Authorization

### Login by OAuth 2.0 Flows

1. Call `client.loginUrl(...)` to get the **RingCentral OAuth login page url**, go to the login page and enter the credentials.
2. If successfully logged in, the login page will redirect to the page of `redirectUri`, from the url parameters of that page you can get the **authorization code** by call `client.getAuthCode({redirectPageUrl})`.
3. Login with auth code: `client.login({ code: authCode, redirectUri: redirectUri })`

Use webpack to pack the following sample and run in the browser.
```typescript
import RingCentralClient, {SERVER_SANDBOX} from "ringcentral-client";

let client = new RingCentralClient({
    server: SERVER_SANDBOX, // Optional, default is production server
    appKey: "{yourAppKey}",
    appSecret: "{yourAppSecret}"
});

// To be simple, let redirectUri be the url of the current page without any parameters, and add this url to your apps 'OAuth Redirect URI' via the settings page of your app(https://developer.ringcentral.com/my-account.html#/applications).  
const redirectUri = "{currentPageUrlAsRedirectUri}";

checkLogin();

function checkLogin() {
    // #2 Get the auth code from the query of the redirectUri page
    let authCode = client.getAuthCode(location.href);
    if (!authCode) {
        // #1 Go to oauth login page
        location.href = client.loginUrl({ redirectUri: redirectUri });
        return;
    }
    // #3 login with auth code
    client.login({ code: authCode, redirectUri: redirectUri }).then(() => {
        console.log("Login success");
        alert("Login success");
    }).catch(e => {
        console.error("Login fail ", e);
        alert("Login fail." + e);
    });
}
```

### Login by password

### Logout

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