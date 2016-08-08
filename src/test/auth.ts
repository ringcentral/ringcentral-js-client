/// <reference path="../typings/tsd.d.ts" />

import * as fetch from "node-fetch";
import * as Ringcentral from "ringcentral";
import testConfig from "./config";

let ringcentral;
let p = fetch(testConfig.authDataUrl).then(function (res) {
    return res.json();
}).then(function (auth) {
    ringcentral = new Ringcentral(auth.app).platform();
    return ringcentral.login(auth.user);
}).then(function (res) {
    return ringcentral;
});

export default p;