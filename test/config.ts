import "es6-promise";
import * as fetch from "isomorphic-fetch";

let authDataUrl = "/data/rc-auth.json";
if (typeof process !== "undefined" && !process["browser"]) {
    authDataUrl = "http://localhost" + authDataUrl;
}

interface Config {
    app: {
        server: string;
        appKey: string;
        appSecret: string;
    };
    user: {
        username: string;
        extension: string;
        password: string;
    };
}

export default <Promise<Config>> fetch(authDataUrl).then(res => res.json());
