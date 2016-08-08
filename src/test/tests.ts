import auth from "./auth";
import Client from "../Client";
import {expect} from "chai";

let client: Client;

before(function () {
    // runs before all tests in this block
    return auth.then(function (rc) {
        client = new Client(rc);
    });
});


describe("Account", function () {
    it("Get Account info", function () {
        return client.account().get();
    });

    it("Get Account info with id not exists should return 404", function () {
        return client.account("accountIdNotExist").get().catch(function (e) {
            expect(e.apiResponse.response().status).to.equal(404);
        });
    });
});

describe("extension", function () {
    it("Get extension list", function () {
        return client.account().extension().list();
    });
});