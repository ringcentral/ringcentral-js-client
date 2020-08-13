import { expect } from "chai";
import { SDK } from "@ringcentral/sdk";
import testConfig from "./config";
import Client from "../src/Client";

let client: Client;
testConfig.then((config) => {
    client = new Client(new SDK({ cachePrefix: "rc-client-test" }));
});

describe("client", () => {
    it("covers all", runCoverage);
});

function runCoverage() {
    client.clientInfo();
}
