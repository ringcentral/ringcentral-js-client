import { expect } from "chai";
import { createReadStream } from "fs";
import * as RingCentral from "ringcentral";
import Client from "../src/Client";
import testConfig from "./config";

let client: Client;
const inNode = !!createReadStream;

before(() => {
    // runs before all tests in this block
    return testConfig.then((conf) => {
        const config = conf;
        client = new Client(new RingCentral(config.app));
        return client.service.platform().login(config.user);
    });
});

describe("PathSegments", () => {

    /*
     * AnsweringRule list:
     { uri: 'https://platform.devtest.ringcentral.com/restapi/v1.0/account/130829004/extension/130829004/answering-rule?page=1&perPage=100',
  records:
   [ { uri: 'https://platform.devtest.ringcentral.com/restapi/v1.0/account/130829004/extension/130829004/answering-rule/business-hours-rule',
       id: 'business-hours-rule',
       type: 'BusinessHours',
       enabled: true,
       callHandlingAction: 'ForwardCalls' },
     { uri: 'https://platform.devtest.ringcentral.com/restapi/v1.0/account/130829004/extension/130829004/answering-rule/36288004',
       id: '36288004',
       type: 'Custom',
       name: 'TestRule1',
       enabled: true,
       schedule: [Object],
       callers: [Object],
       callHandlingAction: 'ForwardCalls' } ],
  paging:
   { page: 1,
     totalPages: 1,
     perPage: 100,
     totalElements: 2,
     pageStart: 0,
     pageEnd: 1 },
  navigation:
   { firstPage: { uri: 'https://platform.devtest.ringcentral.com/restapi/v1.0/account/130829004/extension/130829004/answering-rule?page=1&perPage=100' },
     lastPage: { uri: 'https://platform.devtest.ringcentral.com/restapi/v1.0/account/130829004/extension/130829004/answering-rule?page=1&perPage=100' } } }

     */
    it("AnsweringRule", () => {
        const ext = client.account().extension();
        let id: string;
        return ext.answeringRule().post({
            callers: [{
                callerId: "+46843216868",
            }],
            enabled: false,
        }).then((res) => id = res.id)
            .then((res) => ext.answeringRule(id).get())
            .then((res) => ext.answeringRule(id).put({ name: "updated." }))
            .then((res) => ext.answeringRule().list())
            .then((res) => ext.answeringRule(id).delete());
    });

    it("gets business hours rule", () => {
        return client.account().extension().businessHours().get();
    });

    describe("BlockedNumber", () => {

        it("covers all", () => {
            const ext = client.account().extension();
            let createdId: string;
            const createdBlockedPhoneNumber = "+18989999";
            const updatedBlockedPhoneNumber = "+12222898";
            return ext.blockedNumber().post({ phoneNumber: createdBlockedPhoneNumber }).then((res) => {
                createdId = res.id;
                expect(res.phoneNumber).to.eqls(createdBlockedPhoneNumber);
                return ext.blockedNumber(createdId).get();
            }).then((res) => ext.blockedNumber().list())
                .then((res) => {
                    // FIXME Report: Error: Parameter blockedNumberId value in request body doesn't match specified in path. Maybe server error.
                    // /return ext.blockedNumber(createdId).put({ phoneNumber: updatedBlockedPhoneNumber });
                }).then((res) => {
                    // expect(res.phoneNumber).eqls(updatedBlockedPhoneNumber);
                }).then((res) => {
                    return ext.blockedNumber(createdId).delete();
                });
        });

    });

    describe("Contacts", () => {

        it("covers all", () => {
            const addressBook = client.account().extension().addressBook();
            let createdId: string;
            return addressBook.contact().post({ firstName: "Test" })
                .then((res) => {
                    createdId = res.id;
                })
                .then((res) => addressBook.contact(createdId).get())
                .then((res) => addressBook.contact().list())
                .then((res) => {
                    return addressBook.contact(createdId).put({ firstName: "ModifiedFirstName" });
                })
                .then((res) => addressBook.contact(createdId).delete());
        });
    });

    describe("Subscription", () => {

        it("covers all", () => {
            let createdId: string;
            return client.subscription().post({
                deliveryMode: { transportType: "PubNub", encryption: true },
                eventFilters: ["/restapi/v1.0/account/~/extension/~/presence?detailedTelephonyState=true"],
            }).then((res) => createdId = res.id)
                .then((res) => client.subscription(createdId).get())
                .then((res) => client.subscription(createdId).put({ eventFilters: ["/restapi/v1.0/account/~/extension/~/message-store"] }))
                .then((res) => client.subscription(createdId).delete());
        });

    });

    describe("Meeting", () => {

        it.skip("covers all", () => {
            let createdId: string;
            const ext = client.account().extension();
            return ext.meeting().post({ meetingType: "Instant" })   // Error reported, "errorCode" : "CMN-408",\n  "message" : "[Meetings] permission required", maybe sandbox doesn't support meetings API yet.
                .then((res) => createdId = res.id)
                .then((res) => ext.meeting(createdId).delete()).catch((e) => expect(false, e));
        });

        it("service info", () => {
            return client.account().extension().meeting().serviceInfo().get();
        });

    });

    describe("Ringout", () => {

        it("covers all", () => {
            let id: string;
            return client.account().extension().ringOut().post({
                from: { phoneNumber: "+16507411615" },
                to: { phoneNumber: "+13213042353" },
            }).then((res) => id = res.id)
                .then((res) => client.account().extension().ringOut(id).get())
                .then((res) => client.account().extension().ringOut(id).delete());
        });

    });

    describe("ForwardingNumber", () => {

        it("covers all", () => {
            return client.account().extension().forwardingNumber().list();
            /* let id: string;
             return client.account().extension().forwardingNumber().post({ label: "test", phoneNumber: "+16507411615" })
                 .then(res => client.account().extension().forwardingNumber());*/
        });

    });

    /*describe("Group", () => {

        it("covers all", () => {
            const addressBook = client.account().extension().addressBook();
            return addressBook.group().list();
        });

    });*/

    describe("Greeting", () => {

        // TODO add delete and update methods

    });

    describe("Conferencing", () => {
        // TODO
    });

    describe("Country", () => {

        it("covers all", () => {
            return client.dictionary().country().list().then((res) => {
                if (res.records.length > 0) {
                    return client.dictionary().country(res.records[0].id).get();
                }
            });
        });

    });

    describe("State", () => {

        it("covers all", () => {
            return client.dictionary().state().list().then((res) => {
                if (res.records.length > 0) {
                    return client.dictionary().state(res.records[0].id).get();
                }
            });
        });

    });

    describe("Device", () => {

        it("covers all", () => {
            return client.account().device().list().then((res) => {
                if (res.records.length > 0) {
                    return client.account().device(res.records[0].id).get();
                }
            });
        });

    });

    describe("Timezone", () => {

        it("covers all", () => {
            return client.dictionary().timezone().list().then((res) => {
                if (res.records.length > 0) {
                    return client.dictionary().timezone(res.records[0].id).get();
                }
            });
        });

    });

    describe("PhoneNumber", () => {

        it("covers all", () => {
            return client.account().phoneNumber().list().then((res) => {
                if (res.records.length > 0) {
                    return client.account().phoneNumber(res.records[0].id).get();
                }
            });
        });

    });

    describe("Language", () => {

        it("covers all", () => {
            return client.dictionary().language().list().then((res) => {
                if (res.records.length > 0) {
                    return client.dictionary().language(res.records[0].id).get();
                }
            });
        });

    });

    describe("Message", () => {

        it("covers all", () => {
            let id: string;
            return client.account().extension().companyPager().post({
                text: "js-client unit test.",
                to: [{ extensionNumber: "101" }],
            }).then((res) => id = res.id)
                .then((res) => client.account().extension().messageStore().list())
                .then((res) => client.account().extension().messageStore(id).put({ readStatus: "Read" }))
                .then((res) => client.account().extension().messageStore(id).get())
                .then((res) => client.account().extension().messageStore(id).delete());
        });

        it("gets sync message", () => {
            return client.account().extension().messageSync().list();
        });

    });

    describe("AuthzProfile", () => {

        it("covers all", () => {
            return client.account().extension().authzProfile().get()
                .then((res) => client.account().extension().authzProfile().check().get());
        });

    });

    /*describe("Clientinfo", () => {

        it("covers all", () => {
            return client.clientInfo().customData().put({});
        });

    });*/

    describe("ActiveCalls", () => {

        it("covers all", () => {
            return client.account().extension().activeCalls().list();
        });

    });

    describe("Grant", () => {

        it("covers all", () => {
            return client.account().extension().grant().list();
        });

    });

    describe("Location", () => {

        it("covers all", () => {
            return client.dictionary().state().list()
                .then((res) => {
                    if (res.records.length > 0) {
                        return client.dictionary().location().list({ stateId: res.records[0].id });
                    }
                });
        });

    });

    /*describe("NumberPool", () => {

        it("covers all", () => {
            return client.numberPool().lookup().post({ countryCode: "cn" });
        });

    });*/

    describe("Department", () => {

        it("covers all", () => {
            return client.account().department().members().list();
        });

    });

    describe("BusinessAddress", () => {

        it("covers all", () => {
            return client.account().businessAddress().get().then((res) => {
                return client.account().businessAddress().put({ email: "js-client-test@ringcentral.com" });
            });
        });

    });

    /*describe("DialingPlan", () => {

        it("covers all", () => {
            return client.account().dialingPlan().list();
        });

    });*/

    describe("Presence", () => {

        it("covers all", () => {
            return client.account().extension().presence().get();
        });

    });

    describe("CallLog", () => {

        it("gets call log sync", () => {
            return client.account().extension().callLogSync().list({ recordCount: 5 });
        });

    });

    describe("AddressBook", () => {

        it("gets address book sync", () => {
            return client.account().extension().addressBookSync().list();
        });
    });

    describe("NumberParser", () => {

        it("parses number", () => {
            return client.numberParser().parse().post({ originalStrings: "+8618657118272" });
        });

    });

});

describe("Glip", () => {

    it("Get current company", () => {
        return client.glip().companies("~").get().then((c) => {
            expect(c).to.has.keys("id", "name", "domain", "creationTime", "lastModifiedTime");
        });
    });

    it("List groups", () => {
        return client.glip().groups().list().then((groups) => {
            expect(groups.records[0]).has.keys("id", "name", "description", "type", "members", "isPublic", "creationTime", "lastModifiedTime");
        });
    });

    it("Get current user", () => {
        return client.glip().persons("~").get().then((person) => {
            expect(person).to.has.keys("id", "firstName", "lastName", "email", "companyId", "creationTime", "lastModifiedTime");
        });
    });

    it("Posts", () => {
        return client.glip().groups().list().then((g) => {
            return client.glip().groups(g.records[0].id).posts().list();
        }).then((posts) => {
            expect(posts.records[0]).to.has.keys("id", "groupId", "type", "text", "creatorId", "addedPersonIds", "creationTime", "lastModifiedTime", "attachments", "activity", "title", "iconUri", "iconEmoji", "mentions");
        });
    });

});
