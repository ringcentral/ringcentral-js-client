import auth from "./auth";
import Client from "../Client";
import {expect} from "chai";
import * as fs from "fs";

let client: Client;

before(function () {
    // runs before all tests in this block
    return auth.then(function (rc) {
        client = new Client(rc);
    });
});

after(() => {
    return client._service.logout();
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

describe("Extension", function () {
    it("Get extension list", function () {
        return client.account().extension().list();
    });

    it("Union type parameters, update extension info", function () {
        return client.account().extension().put({ status: "Enabled" });
    });
});

describe("Binary response", function () {
    let aYearAgo = new Date();
    aYearAgo.setFullYear(aYearAgo.getFullYear() - 1);
    it("Get message content as binary", function () {
        let ext = client.account().extension();
        return ext.messageStore().list({ dateFrom: aYearAgo.toISOString() }).then(function (msgs) {
            if (msgs.records.length <= 0) {
                throw new Error("No messages found for this extension.");
            }
            return msgs.records[0];
        }).then(function (msg) {
            return ext.messageStore(msg.id).content(msg.attachments[0].id).get();
        });
    });

    it("Get recording content", function () {
        let ext = client.account().extension();
        return ext.callLog().list({ withRecording: true, dateFrom: aYearAgo.toISOString() }).then(function (callLogs) {
            if (callLogs.records.length <= 0) {
                throw new Error("No recordings found.");
            }
            return callLogs.records[0].recording;
        }).then(function (recording) {
            return client.account().recording(recording.id + "").content().get();
        });
    });

});

let imgPath = "/Users/kevin.zeng/Desktop/profile.png";
describe("Binary request", function () {
    if (!fs.createReadStream) {
        return;
    }
    it("Put profile image, input binary, response is empty.", function () {
        return client.account().extension().profileImage().put(fs.createReadStream(imgPath));
    });

    it("Post profile image, input binary, response is empty.", function () {
        return client.account().extension().profileImage().post(fs.createReadStream(imgPath));
    });
});

describe("Fax", function () {
    it("Send fax", function () {
        return client.account().extension().fax().post({ to: [{ phoneNumber: "+16507411615" }] }, ["Text attentment for test", "Text paragraph attachments 2."]);
    });
});