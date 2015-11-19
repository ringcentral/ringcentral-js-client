/// <reference path="../externals.d.ts" />

declare var require:(name:string)=>any;

export import chai = require('chai');
export import sinon = require("sinon");
export import sinonChai = require('sinon-chai');
export import mocha = require('mocha');

import Client = require('../Client');
var SDK = require('ringcentral');

export var httpClient = new SDK.mocks.Client();
var pubnub = new SDK.pubnub.PubnubMockFactory();

// Alter default settings
SDK.platform.Platform._refreshDelayMs = 1;
SDK.core.Queue._pollInterval = 1;
SDK.core.Queue._releaseTimeout = 50;
SDK.subscription.Subscription._pollInterval = 1;

export var sdk = new SDK({
    server: 'http://whatever',
    appKey: 'whatever',
    appSecret: 'whatever',
    client: httpClient,
    pubnubFactory: pubnub
});

sdk.platform().auth().forceAuthentication();

export var client = new Client(sdk);

export function getRegistry() {
    return httpClient.registry();
}

chai.use(sinonChai);