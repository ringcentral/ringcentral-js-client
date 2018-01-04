import { expect } from "chai";
import * as RingCentral from "ringcentral";
import testConfig from "../test/config";
import Client from "./Client";

let client: Client;
testConfig.then((config) => {
    client = new Client(new RingCentral({ cachePrefix: "rc-client-test" }));
});

describe("client", () => {
    it("covers all", runCoverage);
});

function runCoverage() {
    client.clientInfo();
}
