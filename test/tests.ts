import { expect } from "chai";
import { createReadStream } from "fs";
import * as RingCentral from "ringcentral";
import Client from "../src/Client";
import "../src/Client-test";
import testConfig from "./config";
import "./url-segments-test";

let client: Client;
const inNode = !!createReadStream;

const aYearAgo = new Date();
aYearAgo.setFullYear(aYearAgo.getFullYear() - 1);

before(() => {
    // runs before all tests in this block
    return testConfig.then((conf) => {
        const config = conf;
        client = new Client(new RingCentral(config.app));
        return client.service.platform().login(config.user);
    });
});

describe("Account", () => {

    it("Get Account info", () => {
        return client.account().get().then((account) => {
            expect(account).to.contain.keys(["id", "uri", "mainNumber", "operator", "serviceInfo", "setupWizardState", "status"]);
        });
    });

    it("Get Account info with id not exists should return 404", () => {
        return client.account("accountIdNotExist").get().catch((e) => {
            expect(e.apiResponse.response().status).to.eq(404);
            // expect(e.apiResponse.json().errorCode).to.equal("CMN-102");
        });
    });
});

describe("Extension", () => {
    const extensionProps = ["uri", "id", "extensionNumber", "contact", "name", "type", "status", "permissions", "profileImage"];

    it("get current extension", () => {
        return client.account().extension().get().then((ext) => {
            expect(ext).to.contain.keys(extensionProps);
        });
    });

    it("Get extension list", () => {
        return client.account().extension().list().then((exts) => {
            shouldBePagingResult(exts);
            expect(exts.records[0]).to.has.keys(extensionProps);
        });
    });

    it("Union type parameters, update extension info", () => {
        return client.account().extension().put({ status: "Enabled" }).then((ext) => {
            expect(ext).to.contain.keys(extensionProps);
        });
    });
});

describe("Binary response", () => {
    it("Get message content as binary", () => {
        const ext = client.account().extension();
        return ext.messageStore().list({ dateFrom: aYearAgo.toISOString() }).then((msgs) => {
            if (msgs.records.length <= 0) {
                throw new Error("No messages found for this extension.");
            }
            return msgs.records[0];
        }).then((msg) => {
            return ext.messageStore(msg.id).content(msg.attachments[0].id).get().then((atch) => {
                // expect(atch.headers.get("content-type")).to.has.string("text/plain");
            });
        });
    });

    it("Get recording content", () => {
        const ext = client.account().extension();
        return ext.callLog().list({ dateFrom: aYearAgo.toISOString(), withRecording: true }).then((callLogs) => {
            if (callLogs.records.length <= 0) {
                return;
            }
            return callLogs.records[0].recording;
        }).then((recording) => {
            if (!recording) {
                return;
            }
            return client.account().recording(recording.id + "").content().get().then((content) => {
                expect(content.headers.get("content-type")).to.has.string("audio/mpeg");
            });
        });
    });

});

const imgPath = __dirname + "/res/banner_index_logged.png";
describe("Binary request", () => {

    before("Only run in node", () => {
        if (!inNode) {
            this.skip();
        }
    });

    it("Put profile image, input binary, response is empty.", () => {
        return client.account().extension().profileImage().put(createReadStream(imgPath));
    });

    it("Post profile image, input binary, response is empty.", () => {
        return client.account().extension().profileImage().post(createReadStream(imgPath));
    });

    it("gets current profile image", () => {
        return client.account().extension().profileImage().get();
    });

});

describe("Fax", () => {
    it("send fax, post form data", () => {
        let attachments;
        if (createReadStream) {
            attachments = ["Text attentment for test. Followed by a png picture.", createReadStream(imgPath)];
        } else {
            attachments = ["Test fax test sent from browser, " + navigator.userAgent];
        }
        return client.account().extension().fax().post({ to: [{ phoneNumber: "+16507411615" }] }, attachments);
    });

    it("send fax fail, empty parameter", () => {
        return client.account().extension().fax().post({}, []).then((msg) => {
            throw new Error("should not send.");
        }, (e) => {
            expect(e.apiResponse.json().errorCode).to.eq("InvalidParameter");
        });
    });
});

describe("Call Log", () => {
    it("Get call log", () => {
        return client.account().extension().callLog().list({ dateFrom: aYearAgo.toISOString(), perPage: 2 }).then((callLogs) => {
            shouldBePagingResult(callLogs);
            if (callLogs.records.length < 1) {
                // return console.warn("No call log items");
            }
            expect(callLogs.records[0]).to.has.keys(["uri", "id", "sessionId", "startTime", "duration", "type", "direction", "action", "result", "to", "from"]);
        });
    });

    it("delete today's call log", () => {
        return client.account().extension().callLog().delete();
    });
});

describe("post", () => {
    it("send sms, post plain object", () => {
        return client.account().extension().sms().post({
            from: { phoneNumber: "+17322764403" },
            text: "test sms text content.",
            to: [{ phoneNumber: "+16507411615" }],
        }).then((sms) => {
            expect(sms).to.has.keys(["uri", "id", "to", "from", "type", "creationTime", "readStatus", "priority", "attachments", "direction", "availability", "subject", "messageStatus", "smsSendingAttemptsCount", "conversationId", "conversation", "lastModifiedTime"]);
        });
    });

    it("send sms, without from", () => {
        return client.account().extension().sms().post({ text: "test sms text content.", to: [{ phoneNumber: "+16507411615" }] }).then((sms) => {
            throw new Error("should fail");
        }).catch((e) => {
            expect(e.apiResponse.json().errorCode).to.eq("InvalidParameter");
        });
    });
});

function shouldBePagingResult(list) {
    expect(list).to.has.keys(["navigation", "paging", "records", "uri"]);
}
