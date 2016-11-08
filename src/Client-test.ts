import Client, { EVENT_LOGIN_ERROR } from "./Client";
import * as RingCentral from "ringcentral";
import testConfig from "../test/config";

let client: Client;
testConfig.then(config => {
    client = new Client(new RingCentral({ cachePrefix: "rc-client-test" }));
});

describe("client", function () {
    it("covers all", runCoverage);
});

function runCoverage() {
    new Client({ appKey: "xx", appSecret: "xx" }); // The default server
    client.loginUrl({ redirectUri: "<<<redirectUri>>>" });
    client.getAuthCode("http://www.rc.com?code=fakeCode");
    try {
        client.getAuthCode("http://www.rc.com?error=fail&error_description=auth-failed");
    } catch (e) { }
    client.getAuthCode("http://www.rc.com?");   // else branch
    client.logout();
    client.on(EVENT_LOGIN_ERROR, () => { });
    client.createSubscription();
    client.ensureLoggedIn();
    client.clientInfo();
    client.numberPool();
}
