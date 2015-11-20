# RingCentral Connect Platform JS Client

Experimental! Do not use in production.

# Installation

SDK can be used in 2 environments:

1. [Browser](#1-set-things-up-in-browser)
2. [NodeJS](#1-set-things-up-in-nodejs)

## 1. Set things up in Browser

### 1.1. Get the code

Pick the option that works best for you:

- **Preferred way to install SDK is to use Bower**, all dependencies will be downloaded to `bower_components` directory:

    ```sh
    bower install ringcentral-client --save
    ```Bower
    
- Donwload everything manually *(not recommended)*:
    - [ZIP file with source code](https://github.com/ringcentral/ringcentral-js-client/archive/master.zip)

## 1.2.a. Add scripts to HTML page

You can use bundle version (with PUBNUB and ES6 Promise included in main file).

Add this to your HTML:

```html
<script type="text/javascript" src="path-to-scripts/ringcentral-client/build/ringcentral-client.js"></script>
```

Use the object:

```js
var sdk = new RingCentral.SDK({...});
var client = RingCentral.Client(sdk);
```

## 1.2.b. Set things up in Browser (if you use RequireJS in your project)

```js
// Add this to your RequireJS configuration file
require.config({
    paths: {
        'ringcentral-client': 'path-to-scripts/ringcentral-client/build/ringcentral-client',
        'ringcentral': 'path-to-scripts/ringcentral/build/ringcentral',
    }
});

// Then you can use the SDK like any other AMD component
require(['ringcentral', 'ringcentral-helpers'], function(SDK, Client) {
    var sdk = new SDK({...});
    var client = new Client(sdk);
    // your code here
});
```

## 2. Set things up in NodeJS

1. Install the NPM package:

    ```sh
    npm install ringcentral-client --save
    npm install ringcentral --save
    ```

2. Require the SDK:

    ```js
    var SDK = require('ringcentral');
    var Client = require('ringcentral-client');
    
    var sdk = new SDK({...});
    var client = new Client(sdk);
    ```

# Usage

```js
client.callLog().list().then((calls) => {
                 
    alert(calls.records[0].id);

});
```