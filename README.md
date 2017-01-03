# RingCentral Client

[![Build Status](https://travis-ci.org/ringcentral/ringcentral-js-client.svg?branch=master)](https://travis-ci.org/ringcentral/ringcentral-js-client)
[![Coverage Status](https://coveralls.io/repos/github/ringcentral/ringcentral-js-client/badge.svg?branch=master)](https://coveralls.io/github/ringcentral/ringcentral-js-client?branch=master)

This is a library implemented in typescript which provides convenient apis for typescript and javascript developers to access RingCentral webservice(https://developer.ringcentral.com/api-docs/latest/index.html).

# Table of contents

- [Getting Started](#getting-started)
- [Authorization](#authorization)
- [Subscriptions](#subscriptions)
- [API Call Examples](#api-call-examples)
    - [Telephony Calls](#telephony-calls)
    - [Send SMS](#send-sms)
    - [Send Fax](#send-fax)
    - [Extension management](#extension-management)


## Getting started

### Install

```shell
npm install https://github.com/zengfenfei/ringcentral-js-client#releases --save # This version is for test only which will change soon.
npm install ringcentral     # Install the peerDependency
```

### Import the module

#### In Typescript or ES6 (Recommended)
```typescript
import RingCentralClient, {SERVER_SANDBOX} from "ringcentral-client";
import * as SDK from "ringcentral";
```

#### In commonjs(node.js, webpack and browserify)
```javascript
var ringcentral = require("ringcentral-client");
var RingCentralClient = ringcentral.Client;
var SERVER_SANDBOX = ringcentral.SERVER_SANDBOX;
var SDK = require("ringcentral");
```

#### Used in browser through the prebuilt javascript bundle
All APIs are exposed on the global variable `RingCentral`.
```html
<script type="text/javascript" src="node_modules/ringcentral-client/build/ringcentral-client.min.js"></script>
<script type="text/javascript">
    console.log("All api", RingCentral);
    var RingCentralClient = RingCentral.Client;
    var SERVER_SANDBOX = RingCentral.SERVER_SANDBOX;
    var SDK = RingCentral.SDK;
    // ...
</script>
```

### Quick Start

Login, logout, get account info.

```typescript
let client = new RingCentralClient(new SDK({
	server: SERVER_SANDBOX, // Optional, default is production server
	appKey: "{yourAppKey}",
	appSecret: "{yourAppSecret}"
}));

// Log into RingCentral
client.login({
	"username": "{username}",
	"extension": "{extension}",
	"password": "{password}"
}).then(() => {
	console.log("Login success");
	return client.account().get(); // Call RingCentral REST API
}).then((accountInfo) => {
	console.log("Current account info", accountInfo);
	return client.logout();	// Logout
}).then(() => {
	console.log("logout success");
}).catch(e => {
	console.error("Error occured", e);
});
```

## Authorization

You must get the access token through the **authorization flows** before calling any RingCentral APIs. There are several authorization flows you can use to get an authorized access to RingCentral API.

Apps with 'Public' application type are not allowed to use Password Flow for security reasons, as well as 'Private' apps of 'Browser-Based' or 'Server/Web' platform type. Apps with no user interface are not allowed to use Authorization Code Flow.

### Login by OAuth 2.0 Flows

1. Call `client.loginUrl(...)` to get the **RingCentral OAuth login page url**, go to the login page and enter the credentials.
2. If successfully logged in, the login page will redirect to the page of `redirectUri`, from the url parameters of that page you can get the **authorization code** by call `client.getAuthCode({redirectPageUrl})`.
3. Login with auth code: `client.login({ code: authCode, redirectUri: redirectUri })`

Use webpack to pack the following complete sample and run in the browser.

```typescript
import RingCentralClient, {SERVER_SANDBOX} from "ringcentral-client";
import * as SDK from "ringcentral";

let client = new RingCentralClient(new SDK({
    server: SERVER_SANDBOX, // Optional, default is production server
    appKey: "{yourAppKey}",
    appSecret: "{yourAppSecret}"
}));

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

### Login by Password Flow

Complete sample:

```typescript
import RingCentralClient, {SERVER_SANDBOX} from "ringcentral-client";
import * as SDK from "ringcentral";

let client = new RingCentralClient(new SDK({
    server: SERVER_SANDBOX, // Optional, default is production server
    appKey: "{yourAppKey}",
    appSecret: "{yourAppSecret}"
}));

client.login({ username: "{username}", password: "{password}" }).then(() => {
    console.log("Login success");
}).catch(e => {
    console.error("Login fail ", e);
});
```

### Logout

Call `client.logout()` to revoke the access token.

### Check Login Status

By default, token is stored in `localStorage` of browser, so before you do the real login, you may want to check the existing access and refresh token and try to refresh the token if needed:

```javascript
client.ensureLoggedIn().then(() => {
    console.log("Already login.");  // Existing token is valid or token refreshed successfully.
}).catch(e => {
    console.error("Not logged in.");    // No existing token or both access token and refresh toke have expired.
});
```

### Authorization Events

Supported events:

* `EVENT_LOGIN_START`
* `EVENT_LOGIN_SUCCESS`
* `EVENT_LOGIN_ERROR`
* `EVENT_REFRESH_START`
* `EVENT_REFRESH_SUCCESS`
* `EVENT_REFRESH_ERROR`
* `EVENT_LOGOUT_START`
* `EVENT_LOGOUT_SUCCESS`
* `EVENT_LOGOUT_ERROR`

```typescript
import RingCentralClient, {EVENT_LOGIN_SUCCESS, EVENT_LOGOUT_SUCCESS} from "ringcentral-client";

let client = new RingCentralClient({...});

client.on(EVENT_LOGIN_SUCCESS, () => {
    console.log("Login success event.");
});

client.on(EVENT_LOGOUT_SUCCESS, () => {
    console.log("Logout sucess event.");
});
```

## Subscriptions

For more info, refer to https://github.com/ringcentral/ringcentral-js#server-side-subscriptions.

```typescript
var subscription = client.createSubscription();

subscription.on(subscription.events.notification, function (msg) {
    console.log(msg, msg.body);
});

subscription
    .setEventFilters(['/account/~/extension/~/presence']) // a list of server-side events
    .register()
    .then((subscription) => {
        console.log("Create subscription", subscription.json());
    }, e => {
        console.error("Fail to create subscription", e);
    });
```

## API Call Examples

### Telephony Calls

1. Make phone calls by ringout(https://developer.ringcentral.com/api-docs/latest/index.html#!#MakeRingOut.html):

    ```javascript
    client.account().extension().ringout().post({
        from: { phoneNumber: "xxx" },
        to: { phoneNumber: "xxx" },
        callerId: { phoneNumber: "xxx" }
    }).then(ringout => {
        console.log("Ringout sucess", ringout);
        // To check the call status: `client.account().extension().ringout(ringout.id).get();`
    }, e => {
        console.error("Fail to ringout", e);
    });
    ```

2. Track the telephony status

    To get notications when calls come in, go out or ends, subscribe to the **Presence Event**:
    ```javascript
    let subscription = client.createSubscription();

    subscription.on(subscription.events.notification, function (msg) {
        let presenceEvt = msg.body; // Detail for presence event: https://developer.ringcentral.com/api-docs/latest/index.html?section=RefNotifications.html#!#RefGetDetailedPresenceEvent
        console.log("@@@@presence event", presenceEvt);
        console.log("telephonyStatus", presenceEvt.telephonyStatus);
        console.log("activeCalls", presenceEvt.activeCalls);
    });

    subscription
        .setEventFilters(['/account/~/extension/~/presence?detailedTelephonyState=true ']) // a list of server-side events
        .register()
        .then((subscription) => {
            console.log("Subscription created", subscription.json());
        }, e => {
            console.error("Fail to create subscription", e);
        });
    ```

3. View the list of active calls
    ```javascript
    client.account().extension().activeCalls().list({
        page: 1,    // Get the 1st page of the result
        direction: "Inbound"    // Specify the direction of the call, omit to get all directions
    }).then(results => {
        console.log("Active calls", results.records);
    }, e => {
        console.error("Fail to get active calls", e);
    });
    ```

4. View the recent calls

    ```typescript
    let dateFrom = new Date(Date.now() - 24 * 60 * 60 * 1000);  // A day ago
    client.account().extension().callLog().list({ dateFrom: dateFrom.toISOString() }).then(results => {
        console.log("Recent call logs", results.records);
    }, e => {
        console.error("Fail to get call logs", e);
    });
    ```

### Send SMS
```typescript
client.account().extension().sms().post({
	to: [{
		phoneNumber: "{receiverPhoneNumber}"
	}],
	from: {
		phoneNumber: "{yourSmsNumber}"
	},
	text: "Sms content"
}).then(function(messageInfo) {
	console.log("Sms sent successfully", messageInfo);
}).catch(function(e) {
	console.error("Fail to send sms", e);
});
```

### Send Fax

For all supported options and mediatype, please refer to https://developer.ringcentral.com/api-docs/latest/index.html#!#RefFaxMessages.html.

```typescript
import * as fs from "fs";
client.account().extension().fax().post({
            to: [{ phoneNumber: "{receiverPhoneNumber}" }],
            faxResolution: 'High'
        }, [    // Second argument is an array of attachments, attachment can be string, Blob, node readable stream.
                "{Message text}",
                fs.createReadStream("{filePath}")   // In node only
            ]);
    });
```

### Extension management

Get detail information of an extension:

```typescript
client.account().extension('theExtensionId').get().then(function (extInfo) {
    console.log("The extension info", extInfo);
}).catch(function (e) {
    console.error("Get extension error", e);
});
```

List extensions of an account:

```typescript
client.account("theAccountId").extension().list().then(function (extensions) {
    console.log("The list of extension info", extensions.records);
}).catch(function (e) {
    console.error("Get extension list error", e);
});
```

Update infomation of an extension:

```typescript
client.account().extension().put({ status: "Enabled" }).then(function () {
    console.log("Success to update extension.");
}).catch(function () {
    console.error("Fail to update extension.");
});
```
