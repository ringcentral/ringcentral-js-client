import { expect } from "chai";
import * as RingCentral from "ringcentral";
import testConfig from "../test/config";
import Client, { EVENT_LOGIN_ERROR } from "./Client";

let client: Client;
testConfig.then((config) => {
    client = new Client(new RingCentral({ cachePrefix: "rc-client-test" }));
});

describe("client", () => {
    it("covers all", runCoverage);
});

function runCoverage() {
    let c2 = new Client(new RingCentral({ appKey: "xx", appSecret: "xx" })); // The default server
    c2.login({});
    client.loginUrl({ redirectUri: "<<<redirectUri>>>" });
    client.getAuthCode("http://www.rc.com?code=fakeCode");

    let errMsg = "auth-failed";
    try {
        client.getAuthCode("http://www.rc.com?error=fail&error_description=" + errMsg);
    } catch (e) {
        // console.error(e);
        expect(e.message).eql(errMsg);
    }
    client.getAuthCode("http://www.rc.com?");   // else branch
    client.logout();
    client.on(EVENT_LOGIN_ERROR, (e) => {
        console.error("login error", e);
    });
    client.createSubscription();
    client.ensureLoggedIn();
    client.clientInfo();
    client.numberPool();
}
