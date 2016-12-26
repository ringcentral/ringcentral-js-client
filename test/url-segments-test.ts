import testConfig from "./config";
import Client from "../src/Client";
import { expect } from "chai";
import { createReadStream } from "fs";
import * as RingCentral from "ringcentral";

let client: Client;
const inNode = !!createReadStream;

before(function () {
    // runs before all tests in this block
    return testConfig.then(conf => {
        let config = conf;
        client = new Client(new RingCentral(config.app));
        return client.service.platform().login(config.user);
    });
});

describe("PathSegments", function () {

    /**
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
    it("AnsweringRule", function () {
        let ext = client.account().extension();
        let id: string;
        return ext.answeringRule().post({
            enabled: false,
            callers: [{
                callerId: "+46843216868"
            }]
        }).then(res => id = res.id)
            .then(res => ext.answeringRule(id).get())
            .then(res => ext.answeringRule(id).put({ name: "updated." }))
            .then(res => ext.answeringRule().list())
            .then(res => ext.answeringRule(id).delete());
    });

    it("gets business hours rule", function () {
        return client.account().extension().businessHours().get();
    });

    describe("BlockedNumber", function () {

        it("covers all", function () {
            let ext = client.account().extension();
            let createdId: string;
            let createdBlockedPhoneNumber = "+18989999";
            let updatedBlockedPhoneNumber = "+12222898";
            return ext.blockedNumber().post({ phoneNumber: createdBlockedPhoneNumber }).then(res => {
                createdId = res.id;
                expect(res.phoneNumber).to.eqls(createdBlockedPhoneNumber);
                return ext.blockedNumber(createdId).get();
            }).then(res => ext.blockedNumber().list())
                .then(res => {
                    // FIXME Report: Error: Parameter blockedNumberId value in request body doesn't match specified in path. Maybe server error.
                    // /return ext.blockedNumber(createdId).put({ phoneNumber: updatedBlockedPhoneNumber });
                }).then(res => {
                    //expect(res.phoneNumber).eqls(updatedBlockedPhoneNumber);
                }).then(res => {
                    return ext.blockedNumber(createdId).delete();
                });
        });

    });

    describe("Contacts", function () {

        it("covers all", function () {
            let addressBook = client.account().extension().addressBook();
            let createdId: string;
            return addressBook.contact().post({ firstName: "Test" })
                .then(res => {
                    createdId = res.id;
                })
                .then(res => addressBook.contact(createdId).get())
                .then(res => addressBook.contact().list())
                .then(res => {
                    return addressBook.contact(createdId).put({ firstName: "ModifiedFirstName" });
                })
                .then(res => addressBook.contact(createdId).delete());
        });
    });

    describe("Subscription", function () {

        it("covers all", function () {
            let createdId: string;
            return client.subscription().post({
                eventFilters: ["/restapi/v1.0/account/~/extension/~/presence?detailedTelephonyState=true"],
                deliveryMode: { transportType: "PubNub", encryption: true }
            }).then(res => createdId = res.id)
                .then(res => client.subscription(createdId).get())
                .then(res => client.subscription(createdId).put({ eventFilters: ["/restapi/v1.0/account/~/extension/~/message-store"] }))
                .then(res => client.subscription(createdId).delete());
        });

    });

    describe("Meeting", function () {

        it.skip("covers all", function () {
            let createdId: string;
            let ext = client.account().extension();
            return ext.meeting().post({ meetingType: "Instant" })   // Error reported, "errorCode" : "CMN-408",\n  "message" : "[Meetings] permission required", maybe sandbox doesn't support meetings API yet.
                .then(res => createdId = res.id)
                .then(res => ext.meeting(createdId).delete()).catch(e => console.log(e));
        });

        it("service info", function () {
            return client.account().extension().meeting().serviceInfo().get();
        });

    });

    describe("Ringout", function () {

        it("covers all", function () {
            let id: string;
            return client.account().extension().ringout().post({
                from: { phoneNumber: "+16507411615" },
                to: { phoneNumber: "+16507411615" }
            }).then(res => id = res.id)
                .then(res => client.account().extension().ringout(id).get())
                .then(res => client.account().extension().ringout(id).delete());
        });

    });

    describe("ForwardingNumber", function () {

        it("covers all", function () {
            return client.account().extension().forwardingNumber().list();
            /* let id: string;
             return client.account().extension().forwardingNumber().post({ label: "test", phoneNumber: "+16507411615" })
                 .then(res => client.account().extension().forwardingNumber());*/
        });

    });

    describe("Group", function () {

        it("covers all", function () {
            let addressBook = client.account().extension().addressBook();
            return addressBook.group().list().then(res => {
                if (res.records.length > 0) {
                    return addressBook.group(res.records[0].id).get();
                }
            });
        });

    });

    describe("Greeting", function () {

        // TODO add delete and update methods
        it("covers all", function () {

        });

    });

    describe("Conferencing", function () {

        it("covers all", function () {
        });

    });

    describe("Country", function () {

        it("covers all", function () {
            return client.dictionary().country().list().then(res => {
                if (res.records.length > 0) {
                    return client.dictionary().country(res.records[0].id).get();
                }
            });
        });

    });

    describe("State", function () {

        it("covers all", function () {
            return client.dictionary().state().list().then(res => {
                if (res.records.length > 0) {
                    return client.dictionary().state(res.records[0].id).get();
                }
            })
        });

    });

    describe("Device", function () {

        it("covers all", function () {
            return client.account().device().list().then(res => {
                if (res.records.length > 0) {
                    return client.account().device(res.records[0].id).get();
                }
            })
        });

    });

    describe("Timezone", function () {

        it("covers all", function () {
            return client.dictionary().timezone().list().then(res => {
                if (res.records.length > 0) {
                    return client.dictionary().timezone(res.records[0].id).get();
                }
            })
        });

    });

    describe("PhoneNumber", function () {

        it("covers all", function () {
            return client.account().phoneNumber().list().then(res => {
                if (res.records.length > 0) {
                    return client.account().phoneNumber(res.records[0].id).get();
                }
            })
        });

    });

    describe("Language", function () {

        it("covers all", function () {
            return client.dictionary().language().list().then(res => {
                if (res.records.length > 0) {
                    return client.dictionary().language(res.records[0].id).get();
                }
            })
        });

    });

    describe("Message", function () {

        it("covers all", function () {
            let id: string;
            return client.account().extension().companyPager().post({
                to: [{ extensionNumber: "101" }],
                text: "js-client unit test."
            }).then(res => id = res.id)
                .then(res => client.account().extension().messageStore().list())
                .then(res => client.account().extension().messageStore(id).put({ readStatus: "Read" }))
                .then(res => client.account().extension().messageStore(id).get())
                .then(res => client.account().extension().messageStore(id).delete());
        });

        it("gets sync message", function () {
            return client.account().extension().messageSync().get();
        });

    });

    describe("AuthzProfile", function () {

        it("covers all", function () {
            return client.account().extension().authzProfile().get()
                .then(res => client.account().extension().authzProfile().check().get());
        });

    });

    describe("Clientinfo", function () {

        it("covers all", function () {
            return client.clientInfo().customData().put({})
        });

    });

    describe("ActiveCalls", function () {

        it("covers all", function () {
            return client.account().extension().activeCalls().list();
        });

    });

    describe("Grant", function () {

        it("covers all", function () {
            return client.account().extension().grant().list();
        });

    });

    describe("Location", function () {

        it("covers all", function () {
            return client.dictionary().state().list()
                .then(res => {
                    if (res.records.length > 0) {
                        return client.dictionary().location().list({ stateId: res.records[0].id });
                    }
                });
        });

    });

    describe("NumberPool", function () {

        it("covers all", function () {
            return client.numberPool().lookup().post({ countryCode: "cn" });
        });

    });

    describe("Department", function () {

        it("covers all", function () {
            return client.account().department().members().list();
        });

    });

    describe("BusinessAddress", function () {

        it("covers all", function () {
            return client.account().businessAddress().get().then(res => {
                return client.account().businessAddress().put({ email: "js-client-test@ringcentral.com" });
            });
        });

    });

    describe("DialingPlan", function () {

        it("covers all", function () {
            return client.account().dialingPlan().list();
        });

    });

    describe("Presence", function () {

        it("covers all", function () {
            return client.account().extension().presence().get();
        });

    });

    describe("CallLog", function () {

        it("gets call log sync", function () {
            return client.account().extension().callLogSync().get({ recordCount: 5 });
        });

    });

    describe("AddressBook", function () {

        it("gets address book sync", function () {
            return client.account().extension().addressBookSync().get();
        });
    });

    describe("NumberParser", function () {

        it("parses number", function () {
            return client.numberParser().parse().post({ originalStrings: ["+8618657118272"] })
        });

    });

});
