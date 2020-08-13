import "es6-promise";
import * as fetch from "isomorphic-fetch";

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

export default getConfig();

function getConfig(): Promise<Config> {
    const authDataUrl = "/data/rc-auth.json";
    if (typeof process !== "undefined" && !process["browser"]) { // Node
        return Promise.resolve(require("../.." + authDataUrl));
    } else { // Browser
        return fetch(authDataUrl).then((res) => res.json());
    }
}
