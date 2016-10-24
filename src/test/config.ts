import "es6-promise";
import * as fetch from "isomorphic-fetch";

let authDataUrl = "/data/rc-auth.json";
if (typeof process != "undefined" && !process["browser"]) {
    authDataUrl = "http://localhost" + authDataUrl;
}

export default fetch(authDataUrl).then(res => res.json());